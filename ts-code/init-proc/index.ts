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

import { TitleGenerator } from '../app-n-components/gui-component';
import { CoreConf } from 'core-3nweb-client-lib';
import { makeCoreDriver } from '../core';
import { ElectronIPCConnectors, SocketIPCConnectors } from '../core/w3n-connectors';
import { app, dialog, powerMonitor } from 'electron';
import { logError } from '../confs';
import { setTimeout } from 'timers';
import { DevToolsAppAllowance } from '../process-args';
import { PlatformDownloader } from '../system/platform';
import { UserAppOpenCmd, UserSystemCmd, UserCmd, AppInfoForUI } from '../desktop-integration';
import { WrapStartupCAPs, AppsRunnerForTesting, TestStand } from '../test-stand';
import { toCanonicalAddress } from '../lib-common/canonical-address';
import { DesktopUI } from '../desktop-integration';
import { UserApps } from './user-apps';
import { assert } from '../lib-common/assert';
import { PLATFORM_NAME } from '../bundle-confs';
import { rm } from 'fs/promises';
import { sleep } from '../lib-common/processes/sleep';
import { dirname } from 'path';
import { lookForAutologinUsers, UserKey } from './autologin';
import { shouldSkipDashboard } from './auto-startup';
import { AppCallViaURL, SignupParamsViaURL } from '../electron/app-url-protocol';

type TestStandConfig = web3n.testing.config.TestStandConfig;
type DevAppParams = web3n.testing.config.DevAppParams;

export class InitProc {

	// note that canonical form of user id is used for keys
	private readonly userApps = new Map<string, UserApps>();
	private startingUser: {
		proc: Promise<void>; focusWindow: () => void;
	}|undefined = undefined;
	private readonly guiConnectors = new ElectronIPCConnectors();
	private readonly sockConnectors = new SocketIPCConnectors();
	private readonly platform = new PlatformDownloader();
	// private readonly userLogin = new UserLogin();
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

	async boot(signupParams?: SignupParamsViaURL): Promise<void> {
		try {
			powerMonitor.on('resume', () => Promise.allSettled(
				Array.from(this.userApps.values())
				.map(apps => apps.onDeviceSystemResume().catch(logError))
			));
			powerMonitor.on('suspend', () => Promise.allSettled(
				Array.from(this.userApps.values())
				.map(apps => apps.onDeviceSystemSuspend().catch(logError))
			));
			this.deskUI.start();
			if (this.testStand) {
				await this.testStand.bootAndStartDevApps(
					this.startUserInTest.bind(this), this.deskUI,
					this.startDevStartupApp.bind(this)
				);
			} else {
				const usersToAutoStart = await lookForAutologinUsers();
				if (usersToAutoStart) {
					const skipDashboard = shouldSkipDashboard();
					let startupErred = false;
					for (const userKey of usersToAutoStart) {
						try {
							await this.startUserWithKey(userKey, !skipDashboard);
						} catch (err) {
							console.error(err);
							startupErred = true;
						}
					}
					if ((startupErred && (this.openedUsers().length === 0))
					|| signupParams) {
						await this.startUser(signupParams);
					}
				} else {
					// start at least one user
					await this.startUser(signupParams);
				}
			}
		} catch (err) {
			await logError(err, `Error occured in starting user during boot`);
		}
	}

	private async startUserWithKey({ userId, key }: UserKey, openLauncher: boolean): Promise<void> {
		const apps = new UserApps(
			this.makeDriver, this.conf, this.guiConnectors, this.sockConnectors,
			this.makeTitleGenerator, undefined, undefined,
			this.devToolsAllowance, () => this.platformCAP
		);
		await apps.startCoreDirectlyFor(userId, key);
		this.userApps.set(toCanonicalAddress(apps.userId), apps);
		this.watchUserAppsEvents(apps);
		this.loadUserSystem(apps, openLauncher);
	}

	private startUser(signupParams?: SignupParamsViaURL): Promise<void> {
		if (this.startingUser) {
			this.startingUser.focusWindow();
		} else {
			const apps = new UserApps(
				this.makeDriver, this.conf, this.guiConnectors, this.sockConnectors,
				this.makeTitleGenerator, undefined, undefined,
				this.devToolsAllowance, () => this.platformCAP
			);
			const userIdsToFilterOut = this.openedUsers(true);
			const proc = apps.openStartupApp(userIdsToFilterOut, signupParams)
			.then(async ({ init }) => {
				const newCoreInitialized = await init;
				if (newCoreInitialized) {
					this.userApps.set(toCanonicalAddress(apps.userId), apps);
					this.watchUserAppsEvents(apps);
					apps.closeStartupApp();
					return true;
				} else {
					if (this.userApps.size === 0) {
						this.exit(0);
					}
					return false;
				}
			})
			.finally(() => {
				this.startingUser = undefined;
			})
			.then(canContinueLoadingApps => {
				if (canContinueLoadingApps) {
					this.loadUserSystem(apps);
				}
			});
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

	private async loadUserSystem(apps: UserApps, openLauncher = true): Promise<void> {
		this.updateOpenWindows();
		await Promise.all([
			// trigger user system startup
			apps.doUserSystemStartup(openLauncher),
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
				await apps.openAppInProperFormFactor((cmd as UserAppOpenCmd).app);
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
			userApps.openAppInProperFormFactor(cmd.app);
			return true;
		} else {
			return false;
		}
	}

	handleAppUrlCallFromOS(appCallViaURL: AppCallViaURL): void {
		// XXX
		dialog.showMessageBox({
			type: 'info',
			title: PLATFORM_NAME,
			message: `${PLATFORM_NAME} received a call to handle url "${appCallViaURL}"`
		}).catch(err => {
			console.error(err);
		});
	}

	handleSignupURL(signupParams: SignupParamsViaURL): void {
		this.startUser(signupParams).catch(logError);
	}

	private async wipeFromThisDevice(): Promise<void> {
		const {
			checkboxChecked: removePlatform, response: btnInd
		} = await dialog.showMessageBox({
			type: 'warning',
			title: PLATFORM_NAME,
			message: `Removing ${PLATFORM_NAME} data from ${this.conf.dataDir} on this device.${'\n\n'}Do you want to proceed?`,
			// XXX add attempt to remove binaries
			// checkboxLabel: `Attempt to remove ${PLATFORM_NAME} binary as well`,
			// checkboxChecked: true,
			buttons: [ `Remove`, `Cancel` ]
		});
		if (btnInd === 0) {
			await this.closeAllUserAppsAndUI();
			await sleep(2000);
			process.chdir(dirname(this.conf.dataDir));
			await rm(this.conf.dataDir, { recursive: true, force: true });
			// XXX add attempt to remove binaries
			// if (removePlatform) {
			// }
		}
	}

	private readonly platformCAP: web3n.system.platform.Platform = {
		getCurrentVersion: this.platform.getCurrentVersion.bind(this.platform),
		getChannels: this.platform.getChannels.bind(this.platform),
		getLatestVersion: this.platform.getLatestVersion.bind(this.platform),
		setupUpdater: this.platform.setupUpdater.bind(this.platform),
		downloadUpdate: this.platform.downloadUpdate.bind(this.platform),
		quitAndInstall: this.platform.quitAndInstall.bind(this.platform),
		wipeFromThisDevice: this.wipeFromThisDevice.bind(this)
	};

	private async closeAllUserAppsAndUI(): Promise<void> {
		await Promise.all(Array.from(this.userApps.values()).map(
			apps => apps.exit().catch(logError)
		));
		await this.deskUI.close();
	}

	async exit(exitCode = 0): Promise<void> {
		await this.closeAllUserAppsAndUI();

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