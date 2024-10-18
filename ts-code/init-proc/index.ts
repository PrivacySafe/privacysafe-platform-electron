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

import { TitleGenerator } from '../app-n-components/gui-component';
import { CoreConf } from 'core-3nweb-client-lib';
import { makeCoreDriver } from '../core';
import { ElectronIPCConnectors, SocketIPCConnectors } from '../core/w3n-connectors';
import { app } from 'electron';
import { logError, platformVersion } from '../confs';
import { setTimeout } from 'timers';
import { DevToolsAppAllowance } from '../process-args';
import { PlatformDownloader } from '../system/platform';
import { UserAppOpenCmd, UserSystemCmd, UserCmd, AppInfoForUI } from '../desktop-integration';
import { WrapStartupCAPs, AppsRunnerForTesting, DevAppParams, TestStand, TestStandConfig } from '../test-stand';
import { toCanonicalAddress } from '../lib-common/canonical-address';
import { DesktopUI } from '../desktop-integration';
import { UserApps } from './user-apps';
import { assert } from '../lib-common/assert';


export class InitProc {

	// note that canonical form of user id is used for keys
	private readonly userApps = new Map<string, UserApps>();
	private startingUser: {
		proc: Promise<void>; focusWindow: () => void;
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
				conf, filePath, this.exit.bind(this)
			);
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
		if (this.startingUser) {
			this.startingUser.focusWindow();
		} else {
			const apps = new UserApps(
				this.makeDriver, this.conf, this.guiConnectors, this.sockConnectors,
				this.makeTitleGenerator, undefined, undefined,
				this.devToolsAllowance, () => this.platformCAP
			);
			const excIds = this.openedUsers(true);
			const proc = apps.openStartupApp(excIds)
			.then(async ({ init }) => {
				if (!(await init) && (this.userApps.size === 0)) {
					this.exit(0);
					return;
				}
				this.userApps.set(toCanonicalAddress(apps.userId), apps);
				this.watchUserAppsEvents(apps);
				apps.closeStartupApp();
			})
			.finally(() => {
				this.startingUser = undefined;
			})
			.then(() => (
				(this.userApps.size > 0) ? this.loadUserSystem(apps) : undefined)
			);
			this.startingUser = {
				proc, focusWindow: () => apps.focusStartupWindow()
			};
		}
		return this.startingUser.proc;
	}

	private watchUserAppsEvents(apps: UserApps): void {
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

	private async loadUserSystem(apps: UserApps): Promise<void> {
		this.updateOpenWindows();
		await Promise.all([
			// open app menu as main ui and close startup window
			apps.doUserSystemStartup(),
			// update desktop elements on addition of another user
			apps.listInstalled()
			.then(appsLst => this.deskUI.addUser(apps.userId, appsLst))
		]);
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
		this.watchUserAppsEvents(apps);
		return {
			runStartupDevApp: (devParams, wrapCaps) => {
				const excIds = this.openedUsers(true);
				return apps.openDevStartupApp(excIds, devParams, wrapCaps);
			},
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
			const excIds = this.openedUsers(true);
			const proc = apps.openDevStartupApp(
				excIds, params, wrapStandCAP
			)
			.then(async ({ init }) => {
				if (!(await init) && (this.userApps.size === 0)) {
					this.exit(0);
					return;
				}
				this.watchUserAppsEvents(apps);
				apps.closeStartupApp()
			})
			.finally(() => {
				this.startingUser = undefined;
			})
			.then(
				() => this.loadUserSystem(apps)
			);
			this.startingUser = {
				proc, focusWindow: () => apps.focusStartupWindow()
			};
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
			userApps.openApp(cmd.app);
			return true;
		} else {
			return false;
		}
	}

	private readonly platformCAP: web3n.system.platform.Platform = {
		getCurrentVersion: async () => platformVersion,
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


Object.freeze(exports);