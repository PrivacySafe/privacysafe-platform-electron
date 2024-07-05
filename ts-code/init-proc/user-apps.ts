/*
 Copyright (C) 2016 - 2024 3NSoft Inc.
 
 This program is free software: you can redistribute it and/or modify it under
 the terms of the GNU General Public License as published by the Free Software
 Foundation, either version 3 of the License, or (at your option) any later
 version.
 
 This program is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 See the GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License along with
 this program. If not, see <http://www.gnu.org/licenses/>.
*/

import { CoreConf } from 'core-3nweb-client-lib';
import { CoreDriver, makeCoreDriver } from '../core/core-driver';
import { ElectronIPCConnectors, SocketIPCConnectors } from '../core/w3n-connectors';
import { logError } from '../confs';
import { DevToolsAppAllowance } from '../process-args';
import { SystemPlaces, AppInitException, makeAppInitExc } from '../apps/installer/system-places';
import { AppDownloader } from '../apps/downloader';
import { latestVersionIn } from '../apps/downloader/versions';
import { UserAppInfo } from '../desktop-integration';
import { Observable, Subject, lastValueFrom } from 'rxjs';
import { WrapStartupCAPs, DevAppParams, DevAppParamsGetter, DevSiteParamsGetter } from '../test-stand';
import { Component, Components, Service } from '../components';
import { NamedProcs, sleep } from '../lib-common/processes';
import { AppManifestException, MAIN_GUI_ENTRYPOINT } from '../lib-common/manifest-utils';
import { makeRPCException } from '../rpc';
import { LAUNCHER_APP_DOMAIN, STARTUP_APP_DOMAIN } from '../bundle-confs';
import { Sites } from '../site-runner';
import { ScreenGUIPlacements } from '../window-utils/screen-gui-placements';
import { InitProc } from '.';
import { GUIComponent } from '../components/gui-component';


type UserAppsEvents = 'start-closing' | {
	type: 'closed';
	canClosePlatform: boolean;
} | {
	type: 'app-installed' | 'app-downloaded';
	app: UserAppInfo;
} | {
	type: 'app-removed';
	appId: string;
};

type CmdParams = web3n.shell.commands.CmdParams;
type Platform = web3n.apps.Platform;
type BundleUnpackProgress = web3n.apps.BundleUnpackProgress;
type DownloadProgress = web3n.apps.DownloadProgress;

const platformComponentName = {
	guiPlacement: 'gui.placement'
};


export class UserApps {

	private readonly core: CoreDriver;
	private readonly sysPlaces: SystemPlaces;
	private readonly appDownloader: AppDownloader;
	private readonly appStartingProcs = new NamedProcs();
	private readonly siteStartingProcs = new NamedProcs();
	private readonly components: Components;
	private readonly sites: Sites;
	private readonly broadcast = new Subject<UserAppsEvents>();
	readonly event$ = this.broadcast.asObservable();

	constructor(
		makeDriver: typeof makeCoreDriver,
		conf: CoreConf,
		guiConnectors: ElectronIPCConnectors,
		sockConnectors: SocketIPCConnectors,
		makeTitleGenerator: InitProc['makeTitleGenerator'],
		private readonly devApps: DevAppParamsGetter|undefined,
		private readonly devSites: DevSiteParamsGetter|undefined,
		private readonly devToolsAllowance: DevToolsAppAllowance,
		private readonly getPlatform: () => Platform
	) {
		this.sysPlaces = new SystemPlaces(() => this.core.storages);
		this.appDownloader = new AppDownloader(this.sysPlaces);
		this.core = makeDriver(
			conf, this.appsCapFns(),
			this.startAppWithCmd.bind(this),
			this.logout.bind(this),
			this.getServiceToHandleCall.bind(this)
		);
		const guiPlacementFS = this.core.whenReady()
		.then(() => this.sysPlaces.getPlatformComponentFS(
			'local', platformComponentName.guiPlacement
		));
		this.components = new Components(
			guiConnectors, sockConnectors,
			makeTitleGenerator(() => this.userId),
			this.core.makeCAPsForAppComponent.bind(this.core),
			this.getAppFiles.bind(this),
			new ScreenGUIPlacements(guiPlacementFS)
		);
		this.sites = new Sites(
			guiConnectors,
			makeTitleGenerator(() => this.userId),
			this.core.makeCAPsForSiteComponent.bind(this.core)
		);
		Object.seal(this);
	}

	get userId(): string {
		return this.core.getUserId();
	}

	get coreStarted(): boolean {
		return this.core.isStarted();
	}

	async listInstalled(): Promise<UserAppInfo[]> {
		const infos: UserAppInfo[] = [];
		const allApps = await this.sysPlaces.listApps();
		for (const { id, current } of allApps) {
			infos.push({
				id, name: id, isInstalled: !!current
			});
		}
		return infos;
	}

	updateWindowTitles(): void {
		this.components.updateWindowTitles();
	}

	private ensureCanStartup(): void {
		if (this.core.isStarted()
		|| this.components.findUserStartedSingleton(STARTUP_APP_DOMAIN)
		|| this.appStartingProcs.getP(STARTUP_APP_DOMAIN)) {
			throw new Error(`Startup was already started`);
		}
	}

	async openStartupApp(
		usersToFilterOut: string[]
	): Promise<{ coreInit: Promise<void>; }> {
		this.ensureCanStartup();
		return this.appStartingProcs.startOrChain(
			STARTUP_APP_DOMAIN,
			() => this.components.instantiateStartup(
				usersToFilterOut, this.devToolsAllowance(STARTUP_APP_DOMAIN),
				() => this.core.start()
			)
		);
	}

	closeStartupApp(): void {
		const startupApp = this.components.findUserStartedSingleton(
			STARTUP_APP_DOMAIN
		);
		if (startupApp) {
			startupApp.window.close();
		}
	}

	startCoreDirectly(): ReturnType<CoreDriver['start']> {
		return this.core.start();
	}

	async openDevStartupApp(
		devParams: DevAppParams, wrapCAP: WrapStartupCAPs
	): Promise<{ coreInit: Promise<void>; }> {
		this.ensureCanStartup();
		return this.appStartingProcs.startOrChain(
			STARTUP_APP_DOMAIN,
			() => this.components.devInstantiateStartup(
				devParams,
				() => {
					const { capsForStartup, coreInit } = this.core.start();
					return { capsForStartup: wrapCAP(capsForStartup), coreInit };
				}
			)
		);
	}

	async openApp(appDomain: string, devTools = false): Promise<void> {
		const entrypoint = MAIN_GUI_ENTRYPOINT;
		const app = this.components.findUserStartedSingleton(appDomain);
		if (app) {
			app.window.focus();
			return;
		}
		return this.appStartingProcs.startOrChain(appDomain, async () => {
			let app = this.components.findUserStartedSingleton(appDomain);
			if (app) {
				app.window.focus();
				return;
			}
			await this.startGUIComponentInSyncProc(
				appDomain, entrypoint, undefined, devTools
			);
		});
	}

	private async startGUIComponentInSyncProc(
		appDomain: string,
		entrypoint: string|undefined, startCmd: CmdParams|undefined,
		devTools: boolean
	): Promise<GUIComponent> {
		const devParams = (this.devApps ?
			this.devApps(appDomain, { entrypoint, cmd: startCmd?.cmd }) : undefined
		);
		try {
			if (devParams) {
				return await this.components.devInstantiateGUIComponent(
					devParams, entrypoint, startCmd
				);
			} else {
				return await this.components.instantiateGUIComponent(
					appDomain, entrypoint, startCmd,
					(devTools ? true : this.devToolsAllowance(appDomain))
				);
			}
		} catch (err) {
			if ((err as AppInitException).type === 'app-init') {
				throw err;
			} else {
				throw makeAppInitExc(appDomain, {}, {
					appDomain, entrypoint, command: startCmd?.cmd, cause: err
				});
			}
		}
	}

	async openSite(siteDomain: string): Promise<void> {
		const entrypoint = MAIN_GUI_ENTRYPOINT;
		if (this.sites.focusOnSiteComponentIfOpened(siteDomain, entrypoint)) {
			return;
		}

		let startedProc = this.siteStartingProcs.getP<void>(siteDomain);
		if (startedProc) {
			return startedProc;
		}

		const devParams = (this.devSites ?
			this.devSites(siteDomain, entrypoint) : undefined
		);
		startedProc = (devParams ?
			this.sites.devOpenSiteComponent(devParams, entrypoint) :
			this.sites.openSiteComponent(siteDomain, entrypoint)
		);
		return this.siteStartingProcs.addStarted(siteDomain, startedProc);
	}

	private async getServiceToHandleCall(
		caller: Component, appDomain: string, service: string
	): Promise<Service> {
		const srv = this.components.findServiceInstanceForNewCall(
			appDomain, service
		);
		if (srv) {
			return srv;
		}
		return this.appStartingProcs.startOrChain(appDomain, async () => {
			const srv = this.components.findServiceInstanceForNewCall(
				appDomain, service
			);
			if (srv) {
				return srv;
			}
			try {
				const devParams = (this.devApps ?
					this.devApps(appDomain, { service }) : undefined
				);
				if (devParams) {
					return await this.components.devInstantiateService(
						caller, devParams, service
					);
				} else { 
					return await this.components.instantiateService(
						caller, appDomain, service, this.devToolsAllowance(appDomain)
					);
				}
			} catch (err) {
				if ((err as AppManifestException).serviceNotFound) {
					throw makeRPCException(appDomain, service, {
						serviceNotFound: true
					}, {
						callerApp: caller.domain,
						callerComponent: caller.entrypoint
					});
				} else {
					throw makeRPCException(appDomain, service, {}, {
						callerApp: caller.domain,
						callerComponent: caller.entrypoint,
						cause: err
					});
				}
			}
		});
	}

	private async getAppFiles(
		appDomain: string
	): ReturnType<SystemPlaces['findInstalledApp']> {
		try {
			return await this.sysPlaces.findInstalledApp(appDomain);
		} catch (exc) {
			if ((exc as  AppInitException).notInstalled) {
				const {
					bundleUnpack$, download$, version
				} = await this.checkAppPackPresenceOrStartToGetIt(appDomain);
				// XXX note that we may want to add process observation to openApp's
				//     instead of just non-responsive await below
				if (bundleUnpack$) {
					await lastValueFrom(bundleUnpack$);
				} else if (download$) {
					await lastValueFrom(download$);
				}
				await this.sysPlaces.installApp(appDomain, version);
				return this.sysPlaces.findInstalledApp(appDomain);
			} else {
				throw exc;
			}
		}
	}

	async openAppLauncher(): Promise<void> {
		await this.openApp(LAUNCHER_APP_DOMAIN);
	}

	private async checkAppPackPresenceOrStartToGetIt(
		appDomain: string
	): Promise<{
		version: string;
		bundleUnpack$?: Observable<BundleUnpackProgress>;
		download$?: Observable<DownloadProgress>;
	}> {
		const info = await this.sysPlaces.getAppVersions(appDomain);
		if (info) {
			// check if pack is already present
			if (info.packs) {
				const version = latestVersionIn(info.packs);
				if (version) {
					return { version };
				}
			}
			// check if there is a bundle to unpack
			if (info.bundled) {
				const bundleUnpackProgress = new Subject<BundleUnpackProgress>();
				this.sysPlaces.unpackBundledApp(appDomain, bundleUnpackProgress);
				return {
					version: info.bundled,
					bundleUnpack$: bundleUnpackProgress.asObservable()
				};
			}
		}
		// download pack
		const channels = await this.appDownloader.getAppChannels(appDomain);
		const channel = (channels.main ? channels.main : 'latest');
		const version = await this.appDownloader.getLatestAppVersion(
			appDomain, channel
		);
		const download = new Subject<DownloadProgress>();
		this.appDownloader.downloadWebApp(appDomain, version, download);
		return {
			version,
			download$: download.asObservable()
		};
	}

	async closeAllApps(): Promise<void> {
		await this.components.closeAllApps();
	}

	async exit(closePlatform = false): Promise<void> {
		this.broadcast.next('start-closing');
		await this.closeAllApps();
		await this.core.close().catch(logError);
		this.broadcast.next({
			type: 'closed', canClosePlatform: closePlatform
		});
		await sleep(1);
		this.broadcast.complete();
	}

	private async logout(closePlatform: boolean): Promise<void> {
		this.exit(closePlatform);	// we don't wait for this to end
	};

	private appsCapFns(): web3n.apps.Apps {
		return {
			opener: {
				listApps: this.sysPlaces.listApps.bind(this.sysPlaces),
				openApp: this.openApp.bind(this),
				getAppVersions: this.sysPlaces.getAppVersions.bind(this.sysPlaces),
				getAppManifest: this.sysPlaces.getAppManifest.bind(this.sysPlaces),
				getAppFileBytes: this.sysPlaces.getAppFileBytes.bind(
					this.sysPlaces
				),
				watchApps: this.sysPlaces.watchApps.bind(this.sysPlaces)
			},
			downloader: {
				downloadWebApp: this.appDownloader.downloadWebApp.bind(
					this.appDownloader
				),
				getAppChannels: this.appDownloader.getAppChannels.bind(
					this.appDownloader
				),
				getLatestAppVersion: this.appDownloader.getLatestAppVersion.bind(
					this.appDownloader
				),
				getAppVersionFilesList: this.appDownloader.getAppVersionFilesList.bind(
					this.appDownloader
				)
			},
			installer: {
				unpackBundledApp: this.sysPlaces.unpackBundledApp.bind(
					this.sysPlaces
				),
				installApp: this.sysPlaces.installApp.bind(this.sysPlaces),
				uninstallApp: async id => {
					await this.components.closeApp(id);
					await this.sysPlaces.uninstallApp(id);
				},
				removeAppPack: this.sysPlaces.removeAppPack.bind(this.sysPlaces)
			},
			platform: this.getPlatform()
		};
	}

	private async startAppWithCmd(
		callerApp: string, callerComponent: string,
		appDomain: string, cmd: string, ...params: any[]
	): Promise<void> {
		const comp = this.components.findComponentToHandleCmd(appDomain, cmd);
		if (comp) {
			comp.cmdsHandler!.handle({ cmd, params }, callerApp, callerComponent);
			comp.window.focus();
			return;
		}
		return this.appStartingProcs.startOrChain(appDomain, async () => {
			const comp = this.components.findComponentToHandleCmd(appDomain, cmd);
			if (comp) {
				comp.cmdsHandler!.handle(
					{ cmd, params }, callerApp, callerComponent
				);
				comp.window.focus();
				return;
			}
			await this.startGUIComponentInSyncProc(
				appDomain, undefined, { cmd, params }, false
			);
		});
	}

}
Object.freeze(UserApps.prototype);
Object.freeze(UserApps);


Object.freeze(exports);