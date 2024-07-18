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
import { SystemPlaces, AppInitException } from '../apps/installer/system-places';
import { AppDownloader } from '../apps/downloader';
import { latestVersionIn } from '../apps/downloader/versions';
import { UserAppInfo } from '../desktop-integration';
import { Observable, Subject, lastValueFrom } from 'rxjs';
import { WrapStartupCAPs, DevAppParams, DevAppParamsGetter, DevSiteParamsGetter } from '../test-stand';
import { Component, Service, AppsByDomain } from '../app-n-components';
import { sleep } from '../lib-common/processes/sleep';
import { NamedProcs } from '../lib-common/processes/named-procs';
import { MAIN_GUI_ENTRYPOINT } from '../lib-common/manifest-utils';
import { LAUNCHER_APP_DOMAIN, STARTUP_APP_DOMAIN } from '../bundle-confs';
import { Sites } from '../site-runner';
import { ScreenGUIPlacements } from '../window-utils/screen-gui-placements';
import { InitProc } from '.';
import { StartupApp } from '../app-n-components/startup-app';
import { defer } from '../lib-common/processes/deferred';


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

	private startupApp: StartupApp|undefined = undefined;
	private readonly apps: AppsByDomain;

	// XXX sites should get similar treatment to app
	private readonly siteStartingProcs = new NamedProcs();


	private readonly sites: Sites;
	private readonly broadcast = new Subject<UserAppsEvents>();
	readonly event$ = this.broadcast.asObservable();

	constructor(
		makeDriver: typeof makeCoreDriver,
		conf: CoreConf,
		private readonly guiConnectors: ElectronIPCConnectors,
		sockConnectors: SocketIPCConnectors,
		makeTitleGenerator: InitProc['makeTitleGenerator'],
		devApps: DevAppParamsGetter|undefined,
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
		this.apps = new AppsByDomain(
			this.getAppFiles.bind(this),
			this.core.makeCAPsForAppComponent.bind(this.core),
			this.guiConnectors, sockConnectors,
			makeTitleGenerator(() => this.userId),
			new ScreenGUIPlacements(guiPlacementFS),
			devApps
		);
		this.sites = new Sites(
			this.guiConnectors,
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
		this.apps.updateWindowTitles();
	}

	startCoreDirectly(): ReturnType<CoreDriver['start']> {
		return this.core.start();
	}

	openStartupApp(
		usersToFilterOut: string[]
	): Promise<{ init: Promise<boolean>; }> {
		return this.openRegularOrDevelopmentStartupApp(
			() => StartupApp.instantiate(
				usersToFilterOut, this.devToolsAllowance(STARTUP_APP_DOMAIN),
				() => this.core.start(),
				this.guiConnectors.connectStartupW3N.bind(this.guiConnectors)
			)
		);
	}

	openDevStartupApp(
		usersToFilterOut: string[],
		devParams: DevAppParams, wrapCAP: WrapStartupCAPs
	): ReturnType<UserApps['openStartupApp']> {
		return this.openRegularOrDevelopmentStartupApp(
			() => StartupApp.instantiateDev(
				usersToFilterOut, devParams,
				() => this.core.start(), wrapCAP,
				this.guiConnectors.connectStartupW3N.bind(this.guiConnectors)
			)
		);
	}

	private async openRegularOrDevelopmentStartupApp(
		instantiate: () => ReturnType<typeof StartupApp.instantiate>
	): ReturnType<UserApps['openStartupApp']> {
		if (this.core.isStarted() || this.startupApp) {
			throw new Error(`Startup was already started`);
		}
		const { coreInit, startProc, startupApp } = instantiate();
		this.startupApp = startupApp;
		await startProc;
		const windowClosed = defer<false>();
		this.startupApp.doWhenWindowCompletes(() => windowClosed.resolve(false));
		const init = Promise.race([
			coreInit.then(() => true),
			windowClosed.promise
		]);
		return { init };
	}

	closeStartupApp(): void {
		if (this.startupApp) {
			this.startupApp.close();
			this.startupApp = undefined;
		}
	}

	focusStartupWindow(): void {
		if (this.startupApp) {
			this.startupApp.focusWindow();
		}
	}

	async openApp(appDomain: string): Promise<void> {
		const app = await this.apps.get(
			appDomain, this.devToolsAllowance(appDomain)
		);
		app.launchDefault();
	}

	async openAppLauncher(): Promise<void> {
		await this.openApp(LAUNCHER_APP_DOMAIN);
	}

	private async startAppWithCmd(
		callerApp: string, callerComponent: string,
		appDomain: string, cmd: string, ...params: any[]
	): Promise<void> {
		const app = await this.apps.get(
			appDomain, this.devToolsAllowance(appDomain)
		);
		await app.handleCmd({ cmd, params }, callerApp, callerComponent);
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
		const app = await this.apps.get(
			appDomain, this.devToolsAllowance(appDomain)
		);
		return await app.getServiceToHandleCall(caller, service);
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
		await this.apps.stopAndCloseAllApps();
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

	// XXX apps CAP should be switched to service from system.3nweb.computer
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
					await this.apps.closeAppToUninstall(id);
					await this.sysPlaces.uninstallApp(id);
				},
				removeAppPack: this.sysPlaces.removeAppPack.bind(this.sysPlaces)
			},
			platform: this.getPlatform()
		};
	}

}
Object.freeze(UserApps.prototype);
Object.freeze(UserApps);


Object.freeze(exports);