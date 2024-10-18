/*
 Copyright (C) 2022 - 2024 3NSoft Inc.
 
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

import { WebContents } from "electron";
import { STARTUP_APP_DOMAIN } from "../bundle-confs";
import { toCanonicalAddress } from "../lib-common/canonical-address";
import { DevAppInstanceFromUrl, GUIComponent } from "./gui-component";
import { appAndManifestOnDev } from "./utils";
import { CoreDriver } from "../core";
import { MAIN_GUI_ENTRYPOINT, getWebGUIComponent } from "../lib-common/manifest-utils";
import { applyingStartupWindowPlacement } from "../window-utils/screen-gui-placements";
import { errWithCause } from "../lib-common/exceptions/error";
import { DevAppParams, WrapStartupCAPs } from "../test-stand";
import { DeviceFS } from "core-3nweb-client-lib";


type AppManifest = web3n.caps.AppManifest;
type StartupW3N = web3n.startup.W3N;
type WindowOptions = web3n.ui.WindowOptions;

type InstantiateGUI = (
	entrypoint: string, winOpts: WindowOptions|undefined,
	icon: string|undefined
) => Promise<GUIComponent>;

export type ConnectIPC = (coreW3N: StartupW3N, client: WebContents) => void;

export class StartupApp {

	private gui: GUIComponent|undefined = undefined;

	private static startProc: Promise<void>|undefined = undefined;

	private constructor() {
		Object.seal(this);
	}

	static instantiate(
		usersToFilterOut: string[], devTools: boolean,
		startCore: CoreDriver['start'], connectIPC: ConnectIPC
	): {
		startupApp: StartupApp;
		startProc: Promise<void>;
		coreInit: Promise<void>;
	} {
		if (StartupApp.startProc) {
			throw new Error(`Startup process is already running`);
		}
		const startupApp = new StartupApp();
		const { capsForStartup, coreInit } = startCore();
		const caps = addIdsFilteringToCAPs(
			capsForStartup, usersToFilterOut
		);
		const startProc = appAndManifestOnDev(STARTUP_APP_DOMAIN)
		.then(({ manifest, appRoot }) => startupApp.startRegularOrDevelopmentGUI(
			manifest, caps, connectIPC,
			(entrypoint, winOpts, icon) => GUIComponent.makeStartup(
				STARTUP_APP_DOMAIN, appRoot, entrypoint, winOpts, icon, devTools
			)
		));
		StartupApp.startProc = startProc;
		return { startupApp, startProc, coreInit };
	}

	static instantiateDev(
		usersToFilterOut: string[], devParams: DevAppParams,
		startCore: CoreDriver['start'], wrapCAP: WrapStartupCAPs,
		connectIPC: ConnectIPC
	): ReturnType<typeof StartupApp.instantiate> {
		if (StartupApp.startProc) {
			throw new Error(`Startup process is already running`);
		}
		const startupApp = new StartupApp();
		const { capsForStartup, coreInit } = startCore();
		const caps = wrapCAP(addIdsFilteringToCAPs(
			capsForStartup, usersToFilterOut, true
		));
		const { manifest, url, dir } = devParams;
		const startProc = DeviceFS.makeReadonly(dir)
		.then((appRoot) => {
			const instantiate: InstantiateGUI = (url ?
				(entrypoint, winOpts, icon) =>
					DevAppInstanceFromUrl.makeStartupFor(
						STARTUP_APP_DOMAIN, url, entrypoint, winOpts, icon
					) :
				(entrypoint, winOpts, icon) =>
					GUIComponent.makeStartup(
						STARTUP_APP_DOMAIN, appRoot, entrypoint, winOpts, icon, true
					)
			);
			return startupApp.startRegularOrDevelopmentGUI(
				manifest, caps, connectIPC, instantiate
			);
		});
		StartupApp.startProc = startProc;
		return { startupApp, startProc, coreInit };
	}

	private async startRegularOrDevelopmentGUI(
		manifest: AppManifest, caps: StartupW3N,
		connectIPC: ConnectIPC, instantiate: InstantiateGUI
	): Promise<void> {
		try {
			const entrypoint = MAIN_GUI_ENTRYPOINT;
			const component = getWebGUIComponent(manifest, entrypoint);
			const winOpts = applyingStartupWindowPlacement(component.windowOpts);
			this.gui = await instantiate(entrypoint, winOpts, component.icon);
			connectIPC(caps, this.gui.window.webContents);
			await this.gui.start();
		} catch (err) {
			throw errWithCause(err, `Cannot open startup app`);
		} finally {
			StartupApp.startProc = undefined;
		}
	}

	focusWindow(): void {
		this.gui?.window.focus();
	}

	doWhenWindowCompletes(handler: () => void): void {
		this.gui!.window.once('closed', handler);
	}

	close(): void {
		if (this.gui) {
			this.gui.window.close();
			this.gui = undefined;
		} else if (StartupApp.startProc) {
			const clearGUI = () => this.close();
			StartupApp.startProc.then(clearGUI, clearGUI);
		}
	}

}
Object.freeze(StartupApp.prototype);
Object.seal(StartupApp);


function addIdsFilteringToCAPs(
	w3n: web3n.startup.W3N, excIds: string[], isTestCAP = false
): web3n.startup.W3N {
	if (excIds.length === 0) {
		return w3n;
	}
	return {
		signIn: {
			completeLoginAndLocalSetup: w3n.signIn.completeLoginAndLocalSetup,
			getUsersOnDisk: () => w3n.signIn.getUsersOnDisk().then(
				users => users.filter(u => !excIds.includes(toCanonicalAddress(u)))
			),
			startLoginToRemoteStorage: (isTestCAP ?
				w3n.signIn.startLoginToRemoteStorage :
				async address => {
					if (excIds.includes(toCanonicalAddress(address))) {
						throw new Error(`Already logged in`);
					}
					return w3n.signIn.startLoginToRemoteStorage(address);
				}
			),
			useExistingStorage: (isTestCAP ?
				w3n.signIn.startLoginToRemoteStorage :
				async (address, pass, progressCB) => {
					if (excIds.includes(toCanonicalAddress(address))) {
						throw new Error(`Already logged in`);
					}
					return w3n.signIn.useExistingStorage(address, pass, progressCB);
				}
			)
		},
		signUp: w3n.signUp
	};
}

