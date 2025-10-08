/*
 Copyright (C) 2016 - 2025 3NSoft Inc.
 
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
import { CoreDriver, makeCoreDriver } from '../core';
import { ElectronIPCConnectors, SocketIPCConnectors } from '../core/w3n-connectors';
import { logError } from '../confs';
import { DevToolsAppAllowance } from '../process-args';
import { SystemPlaces } from '../system/system-places';
import { AppDownloader } from '../system/apps-downloader';
import { UserAppInfo } from '../desktop-integration';
import { Subject } from 'rxjs';
import { WrapStartupCAPs, DevAppParamsGetter, DevSiteParamsGetter } from '../test-stand';
import { Component, Service, LiveApps } from '../app-n-components';
import { sleep } from '../lib-common/processes/sleep';
import { NamedProcs } from '../lib-common/processes/named-procs';
import { MAIN_GUI_ENTRYPOINT } from '../lib-common/manifest-utils';
import { LAUNCHER_APP_DOMAIN, STARTUP_APP_DOMAIN } from '../bundle-confs';
import { Sites } from '../site-runner';
import { ScreenGUIPlacements } from '../window-utils/screen-gui-placements';
import { InitProc } from '.';
import { StartupApp } from '../app-n-components/startup-app';
import { defer } from '../lib-common/processes/deferred';
import { GetAppStorage } from '../app-n-components/app';
import { dialog } from 'electron';
import { stringifyErr } from '../lib-common/exceptions/error';

type DevAppParams = web3n.testing.config.DevAppParams;

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

type SysUtils = web3n.system.SysUtils;
type Apps = web3n.system.apps.Apps;
type Platform = web3n.system.platform.Platform;
type CmdParams = web3n.shell.commands.CmdParams;

const platformComponentName = {
	guiPlacement: 'gui.placement'
};


export class UserApps {

	private readonly core: CoreDriver;
	private readonly sysPlaces: SystemPlaces;

	private startupApp: StartupApp|undefined = undefined;
	private readonly apps: LiveApps;

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
		getPlatform: () => Platform
	) {
		this.sysPlaces = new SystemPlaces(() => this.core.storages);
		const appDownloader = new AppDownloader(this.sysPlaces);
		const makeSystemCapFns = () => systemCAPsFrom(
			this.sysPlaces,
			appDownloader,
			this.apps,
			this.openApp.bind(this),
			this.executeCommand.bind(this),
			this.triggerAllStartupLaunchers.bind(this),
			this.apps.closeAppsAfterUpdate.bind(this.apps),
			getPlatform()
		);
		this.core = makeDriver(
			conf, makeSystemCapFns,
			this.startAppWithCmd.bind(this),
			this.openAppLauncher.bind(this),
			this.logout.bind(this),
			this.getServiceToHandleCall.bind(this),
			this.getAppFSResourceFor.bind(this)
		);
		const guiPlacementFS = this.core.whenReady()
		.then(() => this.sysPlaces.getPlatformComponentFS(
			'local', platformComponentName.guiPlacement
		));
		this.apps = new LiveApps(
			this.sysPlaces.findInstalledApp.bind(this.sysPlaces),
			this.core.makeCAPsForAppComponent.bind(this.core),
			this.getAppStorage.bind(this),
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
		const allApps = await this.sysPlaces.listCurrentApps();
		for (const { id } of allApps) {
			const m = await this.sysPlaces.getAppManifest(id);
			infos.push({
				id, name: (m ? m.name : id), isInstalled: true
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

	async openApp(
		appDomain: string,
		entrypoint = MAIN_GUI_ENTRYPOINT,
		devTools = false
	): Promise<void> {
		try {
			devTools = devTools || this.devToolsAllowance(appDomain);
		const app = await this.apps.get(appDomain, devTools);
		await app.launchWebGUI(entrypoint, devTools);
		} catch (err) {
			dialog.showErrorBox(`Fail to open App`, `Opening 3NWeb app ${appDomain} threw an error:`+'\n'+stringifyErr(err));
			throw err;
		}
	}

	private async executeCommand(
		appDomain: string, cmd: CmdParams, devTools?: boolean
	): Promise<void> {
		devTools = devTools || this.devToolsAllowance(appDomain);
		const app = await this.apps.get(appDomain, devTools);
		await app.handleCmdFromUser(cmd, devTools);
	}

	async openAppInProperFormFactor(appDomain: string): Promise<void> {
		try {
			const devTools = this.devToolsAllowance(appDomain);
			const app = await this.apps.get(appDomain, devTools);
			await app.launchFormFactorAppropriateWebGUI(devTools);
		} catch (err) {
			dialog.showErrorBox(`Fail to open App`, `Opening 3NWeb app ${appDomain} threw an error:`+'\n'+stringifyErr(err));
			throw err;
		}
	}

	async openAppLauncher(): Promise<void> {
		await this.openAppInProperFormFactor(LAUNCHER_APP_DOMAIN);
	}

	async doUserSystemStartup(): Promise<void> {
		this.triggerAllStartupLaunchers();
		await this.openAppLauncher();
	}

	private async triggerAllStartupLaunchers(): Promise<void> {
		const lst = await this.sysPlaces.appsToLaunchOnSystemStartup();
		const startupProcs = lst.map(domain =>
			this.apps.get(domain, this.devToolsAllowance(domain))
			.then(app => app.loadOnStartup())
		);
		await Promise.all(startupProcs);
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

	private async getAppFSResourceFor(
		resourceAppDomain: string|null|undefined, resourceName: string,
		requestingApp: string, requestingComponent: string
	): ReturnType<web3n.shell.GetFSResource> {
		if (!resourceAppDomain) {
			resourceAppDomain = requestingApp;
		}
		const app = await this.apps.get(
			resourceAppDomain, this.devToolsAllowance(resourceAppDomain)
		);
		return await app.exposedFSResource(
			resourceName, requestingApp, requestingComponent
		);
	}

	private getAppStorage(appDomain: string): GetAppStorage {
		return type => {
			if (type === 'local') {
				return this.core.storages.makeLocalFSForApp(
					reverseDomain(appDomain)
				);
			} else if (type === 'synced') {
				return this.core.storages.makeSyncedFSForApp(
					reverseDomain(appDomain)
				);
			} else {
				throw new Error(`Unknown storage type ${type}`);
			}
		};
	}

	async onDeviceSystemSuspend(): Promise<void> {
		await this.core.onDeviceSystemSuspend();
	}

	async onDeviceSystemResume(): Promise<void> {
		await this.core.onDeviceSystemResume();
	}

}
Object.freeze(UserApps.prototype);
Object.freeze(UserApps);


function reverseDomain(domain: string): string {
	return domain.split('.').reverse().join('.');
}

function systemCAPsFrom(
	sysPlaces: SystemPlaces, appDownloader: AppDownloader,
	liveApps: LiveApps,
	openApp: UserApps['openApp'],
	executeCommand: UserApps['executeCommand'],
	triggerAllStartupLaunchers: () => Promise<void>,
	closeAppsAfterUpdate: LiveApps['closeAppsAfterUpdate'],
	platform: Platform
): SysUtils {
	const apps: Apps = {
		opener: {
			listCurrentApps: sysPlaces.listCurrentApps.bind(sysPlaces),
			openApp,
			executeCommand,
			triggerAllStartupLaunchers,
			closeAppsAfterUpdate,
			getAppManifestOfCurrent: sysPlaces.getAppManifest.bind(sysPlaces),
			getAppFileBytesOfCurrent: sysPlaces.getAppFileBytes.bind(sysPlaces)
		},
		downloader: {
			downloadWebApp: appDownloader.downloadWebApp.bind(
				appDownloader
			),
			getAppChannels: appDownloader.getAppChannels.bind(
				appDownloader
			),
			getLatestAppVersion: appDownloader.getLatestAppVersion.bind(
				appDownloader
			),
			getAppVersionFilesList: appDownloader.getAppVersionFilesList.bind(
				appDownloader
			)
		},
		installer: {
			listBundledApps: sysPlaces.listBundledApps.bind(sysPlaces),
			addPackFromBundledApps: sysPlaces.addPackBundledApps.bind(sysPlaces),
			addAppPackFromFolder: sysPlaces.addAppPackFromFolder.bind(sysPlaces),
			addAppPackFromZipFile: sysPlaces.addAppPackFromZipFile.bind(sysPlaces),
			listAllAppsPacks: sysPlaces.listAllAppsPacks.bind(sysPlaces),
			listAppPacks: sysPlaces.listAppPacks.bind(sysPlaces),
			installApp: async (id, version) => {
				await sysPlaces.installApp(id, version);
				return liveApps.followupAppInstall(id, version);
			},
			removeAppPack: sysPlaces.removeAppPack.bind(sysPlaces),
			uninstallApp: async id => {
				await liveApps.closeAppToUninstall(id);
				await sysPlaces.uninstallApp(id);
			},
			removeAppData: async id => {
				await liveApps.closeAppToUninstall(id);
				await sysPlaces.removeAppData(id);
			},
			watchApps: sysPlaces.watchApps.bind(sysPlaces),
			getAppManifest: sysPlaces.getAppManifest.bind(sysPlaces),
			getAppFileBytes: sysPlaces.getAppFileBytes.bind(sysPlaces)
		}
	};
	const monitor = liveApps.makeMonitor();
	return { apps, platform, monitor };
}


Object.freeze(exports);