/*
 Copyright (C) 2016 - 2022 3NSoft Inc.
 
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

import { GUIComponent, TitleGenerator } from '../components/gui-component';
import { CoreConf } from 'core-3nweb-client-lib';
import { CoreDriver, makeCoreDriver } from '../core/core-driver';
import { ElectronIPCConnectors, SocketIPCConnectors } from '../core/w3n-connectors';
import { app } from 'electron';
import { logError } from '../confs';
import { setTimeout } from 'timers';
import { DevToolsAppAllowance } from '../process-args';
import { SystemPlaces, AppInitException, makeAppInitExc } from '../apps/installer/system-places';
import { AppDownloader } from '../apps/downloader';
import { latestVersionIn } from '../apps/downloader/versions';
import { PlatformDownloader } from '../apps/platform';
import { UserAppOpenCmd, UserSystemCmd, UserCmd, UserAppInfo, AppInfoForUI } from '../desktop-integration';
import { Observable, Subject } from 'rxjs';
import { WrapStartupCAPs, AppsRunnerForTesting, DevAppParams, DevAppParamsGetter, TestStand, TestStandConfig, DevSiteParamsGetter } from '../test-stand';
import { toCanonicalAddress } from '../lib-common/canonical-address';
import { Component, Components, Service } from '../components';
import { NamedProcs, sleep } from '../lib-common/processes';
import { AppManifestException, MAIN_GUI_ENTRYPOINT } from '../lib-common/manifest-utils';
import { assert } from 'console';
import { makeRPCException } from '../rpc';
import { DesktopUI } from '../desktop-integration';
import { LAUNCHER_APP_DOMAIN, STARTUP_APP_DOMAIN } from '../bundle-confs';
import { Sites } from '../site-runner';


export class InitProc {

	// note that canonical form of user id is used for keys
	private readonly userApps = new Map<string, UserApps>();
	private startingUser: {
		proc: Promise<void>; apps: UserApps;
	}|undefined = undefined;
	private readonly guiConnectors = new ElectronIPCConnectors();
	private readonly sockConnectors = new SocketIPCConnectors();
	private readonly platform = new PlatformDownloader();
	private readonly deskUI = new DesktopUI(
		this.onCmdEvents.bind(this),
		this.appInfoForUI.bind(this)
	);
	private readonly testStand: TestStand|undefined;

	constructor(
		private readonly makeDriver: typeof makeCoreDriver,
		private readonly conf: CoreConf,
		private readonly devToolsAllowance: DevToolsAppAllowance,
		testStandConf: { conf: TestStandConfig; filePath: string; }|undefined
	) {
		if (testStandConf) {
			const { conf, filePath } = testStandConf;
			this.testStand = new TestStand(
				conf, filePath, code => this.exit(code));
		} else {
			this.testStand = undefined;
		}
		Object.seal(this);
	}

	async boot(): Promise<void> {
		try {
			this.deskUI.start();
			if (this.testStand) {
				await this.testStand.bootAndStartDevApps(
					this.startUserInTest.bind(this), this.deskUI,
					this.startDevStartupApp.bind(this)
				);
			} else {
				// start at least one user
				await this.startUser();
			}
		} catch (err) {
			await logError(err, `Error occured in starting user during boot`);
		}
	}

	private startUser(): Promise<void> {
		if (!this.startingUser) {
			const apps = new UserApps(
				this.makeDriver, this.conf, this.guiConnectors, this.sockConnectors,
				this.makeTitleGenerator, undefined, undefined,
				this.devToolsAllowance, () => this.platformCAP
			);
			const proc = (async () => {
				try {
					const excIds = this.openedUsers(true);
					await (await apps.openStartupApp(excIds)).coreInit;
					this.userApps.set(toCanonicalAddress(apps.userId), apps);
					this.observeUserApps(apps);

					// open app menu as main ui and close startup window
					await apps.openAppLauncher();
					apps.closeStartupApp();

					this.updateOpenWindows();
					await this.deskUI.addUser(
						apps.userId, await apps.listInstalled()
					);
				} finally {
					this.startingUser = undefined;
				}
			})();
			this.startingUser = { apps, proc };
		}
		return this.startingUser.proc;
	}

	private observeUserApps(apps: UserApps): void {
		apps.event$.subscribe(ev => {
			if (ev === 'start-closing') {
				if (apps.coreStarted) {
					this.userApps.delete(toCanonicalAddress(apps.userId));
					this.updateOpenWindows();
					this.deskUI.removeUser(apps.userId);
				}
			} else if ((ev.type === 'app-downloaded')
			|| (ev.type === 'app-installed')) {
				this.deskUI.addOrUpdateApp(apps.userId, ev.app);
			}
		});
	}

	private updateOpenWindows(): void {
		for (const apps of this.userApps.values()) {
			apps.updateWindowTitles();
		}
	}

	private makeTitleGenerator = (userId: () => string): TitleGenerator => {
		return contentTitle => {
			if (this.userApps.size < 2) {
				return contentTitle;
			} else {
				return `${contentTitle} - ${userId()}`;
			}
		};
	}

	private startUserInTest(userId: string): AppsRunnerForTesting {
		assert(!!this.testStand);
		const apps = new UserApps(
			this.makeDriver, this.conf, this.guiConnectors, this.sockConnectors,
			this.makeTitleGenerator,
			this.testStand!.devAppsGetter(userId),
			this.testStand!.devSiteGetter(userId),
			this.devToolsAllowance, () => this.platformCAP
		);
		this.userApps.set(toCanonicalAddress(userId), apps);
		this.observeUserApps(apps);
		return {
			runStartupDevApp: apps.openDevStartupApp.bind(apps),
			initForDirectStartup: apps.startCoreDirectly.bind(apps),
			openApp: apps.openApp.bind(apps),
			openSite: apps.openSite.bind(apps),
			listInstalled: apps.listInstalled.bind(apps)
		};
	}

	private async startDevStartupApp(
		params: DevAppParams, wrapStandCAP: WrapStartupCAPs
	): Promise<void> {
		if (!this.startingUser) {
			const apps = new UserApps(
				this.makeDriver, this.conf, this.guiConnectors, this.sockConnectors,
				this.makeTitleGenerator, undefined, undefined,
				this.devToolsAllowance, () => this.platformCAP
			);
			const proc = (async () => {
				try {
					await (await apps.openDevStartupApp(params, wrapStandCAP)).coreInit;
					this.userApps.set(toCanonicalAddress(apps.userId), apps);
					this.observeUserApps(apps);

					// open app menu as main ui and close startup window
					await apps.openAppLauncher();
					apps.closeStartupApp();

					this.updateOpenWindows();
					await this.deskUI.addUser(
						apps.userId, await apps.listInstalled()
					);
				} finally {
					this.startingUser = undefined;
				}
			})();
			this.startingUser = { apps, proc };
		}
		return this.startingUser.proc;
	}

	private openedUsers(canonicalIds = false): string[] {
		return (canonicalIds ?
			Array.from(this.userApps.keys()) :
			Array.from(this.userApps.values()).map(u => u.userId)
		);
	}

	private async onCmdEvents(cmd: UserCmd): Promise<void> {
		try {
			if (cmd === 'add-user') {
				await this.startUser();
				return;
			} else if (cmd === 'exit') {
				await this.exit();
				return;
			}

			const apps = this.userApps.get(toCanonicalAddress(cmd.userId));
			if (!apps) {
				this.updateOpenWindows();
				this.deskUI.removeUser(cmd.userId);
				return;
			}

			if ((cmd as UserAppOpenCmd).app) {
				await apps.openApp((cmd as UserAppOpenCmd).app);
			}

			if ((cmd as UserSystemCmd).item === 'logout') {
				await apps.exit(true);
			} else if ((cmd as UserSystemCmd).item === 'close-all-apps') {
				apps.closeAllApps();
			}
		} catch (err) {
			await logError(err, `Error occured in handling user command ${cmd}`);
		}
	}

	private async appInfoForUI(
		userId: string, appDomain: string
	): Promise<AppInfoForUI> {
		// XXX

		throw new Error(`Need implementation`);
	}

	async openAllLaunchers(): Promise<void> {
		await Promise.all(Array.from(this.userApps.values()).map(
			apps => apps.openAppLauncher().catch(logError)
		));
	}

	runCmd(cmdToken: string): boolean {
		const cmd = this.deskUI.findCmd(cmdToken);
		if (!cmd) { return false; }
		if (cmd.type === 'open-app') {
			const userApps = this.userApps.get(toCanonicalAddress(cmd.userId));
			if (!userApps) { return false; }
			userApps.openApp(cmd.app, cmd.isDevApp);
			return true;
		} else {
			return false;
		}
	}

	private readonly platformCAP: web3n.apps.Platform = {
		getCurrentVersion: async () => app.getVersion(),
		getChannels: this.platform.getChannels.bind(this.platform),
		getLatestVersion: this.platform.getLatestVersion.bind(
			this.platform),
		getVersionList: this.platform.getVersionList.bind(this.platform),
		availableUpdateType: this.platform.availableUpdateType.bind(
			this.platform),
		downloadAndApplyUpdate: this.platform.downloadAndApplyUpdate.bind(
			this.platform)
	};

	async exit(exitCode = 0): Promise<void> {
		await Promise.all(Array.from(this.userApps.values()).map(
			apps => apps.exit().catch(logError)
		));

		await this.deskUI.close();

		// note that when everything is closed, platform will exit even before
		// call to app.exit()
		setTimeout(async () => {
			app.exit(exitCode);
		}, 3000).unref();
	}

}
Object.freeze(InitProc.prototype);
Object.freeze(InitProc);


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


class UserApps {

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
			conf, this.appsCapFns(), this.logout,
			this.getServiceToHandleCall.bind(this)
		);
		this.components = new Components(
			guiConnectors, sockConnectors,
			makeTitleGenerator(() => this.userId),
			this.core.makeCAPsForAppComponent.bind(this.core),
			this.getAppFiles.bind(this)
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
		for (const { id, installed } of allApps) {
			infos.push({
				id, name: id, isInstalled: !!installed
			});
		}
		return infos;
	}

	updateWindowTitles(): void {
		this.components.updateWindowTitles();
	}

	private ensureCanStartup(): void {
		if (this.core.isStarted()
		|| this.components.findUserStarted(STARTUP_APP_DOMAIN)
		|| this.appStartingProcs.getP(STARTUP_APP_DOMAIN)) {
			throw new Error(`Startup was already started`);
		}
	}

	async openStartupApp(
		usersToFilterOut: string[]
	): Promise<{ coreInit: Promise<void>; }> {
		this.ensureCanStartup();
		const openningProc = this.components.instantiateStartup(
			usersToFilterOut, this.devToolsAllowance(STARTUP_APP_DOMAIN),
			() => this.core.start()
		);
		return this.appStartingProcs.addStarted(STARTUP_APP_DOMAIN, openningProc);
	}

	closeStartupApp(): void {
		const startupApp = this.components.findUserStarted(STARTUP_APP_DOMAIN);
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
		const openningProc = this.components.devInstantiateStartup(
			devParams,
			() => {
				const { capsForStartup, coreInit } = this.core.start();
				return { capsForStartup: wrapCAP(capsForStartup), coreInit };
			}
		);
		return this.appStartingProcs.addStarted(STARTUP_APP_DOMAIN, openningProc);
	}

	async openApp(appDomain: string, devTools = false): Promise<void> {
		const entrypoint = MAIN_GUI_ENTRYPOINT;
		const app = this.components.findUserStarted(appDomain);
		if (app) {
			app.window.focus();
			return;
		}

		let startedProc = this.appStartingProcs.getP<void>(appDomain);
		if (startedProc) {
			return startedProc;
		}

		const devParams = (this.devApps ?
			this.devApps(appDomain, entrypoint) : undefined
		);
		startedProc = (devParams ?
			this.components.devInstantiateUserStartedGUI(devParams, entrypoint) :
			this.components.instantiateUserStartedGUI(
				appDomain, entrypoint,
				(devTools ? true : this.devToolsAllowance(appDomain))
			)
		).then(
			app => app.window.focus(),
			(err: AppInitException) => {
				if (err.type === 'app-init') {
					throw err;
				} else {
					throw makeAppInitExc(appDomain, {}, { cause: err });
				}
			}
		);
		return this.appStartingProcs.addStarted(appDomain, startedProc);
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
		// have a hope that the following wait loop with following
		// procs.addStarted provides sync of starting services
		while (this.appStartingProcs.getP(appDomain)) {
			await this.appStartingProcs.getP(appDomain);
		}

		const srvInstances = this.components.findService(appDomain, service);
		if (srvInstances) {
			for (const srv of srvInstances) {
				if (srv.canHandleCall()) {
					return srv;
				}
			}
		}

		try {
			const devParams = (this.devApps ?
				this.devApps(appDomain, undefined, service) : undefined
			);
			const srvPromise = (devParams ?
				this.components.devInstantiateService(caller, devParams, service) :
				this.components.instantiateService(
					caller, appDomain, service, this.devToolsAllowance(appDomain)
				)
			);
			return this.appStartingProcs.addStarted(appDomain, srvPromise);
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
				} = await this.getAppWebPack(appDomain);
				// XXX note that we may wat to add process observation to openApp's
				//     instead of just non-responsive await below
				if (bundleUnpack$) {
					await bundleUnpack$.toPromise();
				}
				if (download$) {
					await download$.toPromise();
				}
				await this.sysPlaces.installWebApp(appDomain, version);
				return this.sysPlaces.findInstalledApp(appDomain);
			} else {
				throw exc;
			}
		}
	}

	async openAppLauncher(): Promise<void> {
		await this.openApp(LAUNCHER_APP_DOMAIN);
	}

	private async getAppWebPack(
		appDomain: string
	): Promise<{
		version: string;
		bundleUnpack$?: Observable<BundleUnpackProgress>;
		download$?: Observable<DownloadProgress>;
	}> {
		const info = await this.sysPlaces.getAppInfo(appDomain);
		if (info) {
			// check if pack is already present
			if (info.packs) {
				const version = latestVersionInPacks(info.packs, 'web');
				if (version) {
					return { version };
				}
			}
			// check if there is a bundle to unpack
			if (info.bundled) {
				const bundle = info.bundled
				.find(b => (!b.isLink && (b.platform === 'web')));
				if (bundle) {
					const bundleUnpack = new Subject<BundleUnpackProgress>();
					this.sysPlaces.unpackBundledWebApp(appDomain, bundleUnpack);
					return {
						version: bundle.version,
						bundleUnpack$: bundleUnpack.asObservable()
					};
				}
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

	private readonly logout = async (closePlatform: boolean): Promise<void> => {
		this.exit(closePlatform);	// we don't wait for this to end
	};

	private appsCapFns(): web3n.apps.Apps {
		return {
			opener: {
				listApps: this.sysPlaces.listApps.bind(this.sysPlaces),
				openApp: this.openApp.bind(this),
				getAppIcon: this.sysPlaces.getAppIcon.bind(this.sysPlaces),
				getAppInfo: this.sysPlaces.getAppInfo.bind(this.sysPlaces),
			},
			downloader: {
				downloadWebApp: this.appDownloader.downloadWebApp.bind(
					this.appDownloader),
				getAppChannels: this.appDownloader.getAppChannels.bind(
					this.appDownloader),
				getLatestAppVersion: this.appDownloader.getLatestAppVersion.bind(
					this.appDownloader),
				getAppVersionList: this.appDownloader.getAppVersionList.bind(
					this.appDownloader)
			},
			installer: {
				unpackBundledWebApp: this.sysPlaces.unpackBundledWebApp.bind(
					this.sysPlaces),
				installWebApp: this.sysPlaces.installWebApp.bind(this.sysPlaces),
			},
			platform: this.getPlatform()
		};
	}

}
Object.freeze(UserApps.prototype);
Object.freeze(UserApps);


type AppInfo = web3n.apps.AppInfo;
type PlatformType = web3n.apps.PlatformType;
type Platform = web3n.apps.Platform;
type BundleUnpackProgress = web3n.apps.BundleUnpackProgress;
type DownloadProgress = web3n.apps.DownloadProgress;

function latestVersionInPacks(
	packs: NonNullable<AppInfo['packs']>, platform: PlatformType
): string|undefined {
	const webVersions = packs
	.filter(info => (info.platform === platform))
	.map(info => info.version);
	return ((webVersions.length > 0) ? latestVersionIn(webVersions) : undefined);
}


Object.freeze(exports);