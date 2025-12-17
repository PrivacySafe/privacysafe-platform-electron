/*
 Copyright (C) 2022 - 2025 3NSoft Inc.
 
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

import { BrowserWindow, WebContents } from "electron";
import { STARTUP_APP_DOMAIN } from "../bundle-confs";
import { toCanonicalAddress } from "../lib-common/canonical-address";
import { DevAppInstanceFromUrl, GUIComponent, PROVIDER_SITE_PRELOAD } from "./gui-component";
import { appAndManifestOnDev } from "./utils";
import { CoreDriver } from "../core";
import { MAIN_GUI_ENTRYPOINT, getLaunchersForUser, getWebGUIComponent } from "../lib-common/manifest-utils";
import { applyingStartupWindowPlacement } from "../window-utils/screen-gui-placements";
import { errWithCause } from "../lib-common/exceptions/error";
import { WrapStartupCAPs } from "../test-stand";
import { DeviceFS } from "core-3nweb-client-lib";
import { getSytemFormFactor } from "../ui";
import { SignupParamsViaURL } from "../electron/app-url-protocol";
import { makeSessionForSite } from "../electron/session";
import { ExposedObj, serviceSideJSONWrap as jsonSrv } from "core-3nweb-client-lib/build/ipc";
import { ServiceProviderW3N } from "../runtime-web-gui/ipc-type";
import { defer, Deferred } from "../lib-common/processes/deferred";
import { addDevToolsShortcuts } from "../init-proc/devtools";
import { logWarning } from "../confs";


type AppManifest = web3n.caps.AppManifest;
type StartupW3N = web3n.startup.W3N;
type WindowOptions = web3n.ui.WindowOptions;
type DevAppParams = web3n.testing.config.DevAppParams;
type DefaultProviderSite = web3n.caps.startup.DefaultProviderSite;

type InstantiateGUI = (
	entrypoint: string, winOpts: WindowOptions|undefined,
	icon: string|undefined
) => Promise<GUIComponent>;

export type ConnectIPC = (coreW3N: StartupW3N, client: WebContents) => void;
export type ConnectCustomIPC = <T extends object> (expW3N: ExposedObj<T>, client: WebContents) => void;

export class StartupApp {

	private gui: GUIComponent|undefined = undefined;

	private static startProc: Promise<void>|undefined = undefined;

	private constructor() {
		Object.seal(this);
	}

	static instantiate(
		usersToFilterOut: string[], devTools: boolean,
		startCore: CoreDriver['start'], connectIPC: ConnectIPC, connectCustomIPC: ConnectCustomIPC,
		signupParams: SignupParamsViaURL|undefined
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
		const providerSiteCAP = makeProviderCAP(() => startupApp.gui?.window, connectCustomIPC, devTools);
		const caps = patchCAPs(capsForStartup, providerSiteCAP, usersToFilterOut);
		const startProc = appAndManifestOnDev(STARTUP_APP_DOMAIN)
		.then(({ manifest, appRoot }) => startupApp.startRegularOrDevelopmentGUI(
			manifest, caps, connectIPC,
			(entrypoint, winOpts, icon) => GUIComponent.makeStartup(
				STARTUP_APP_DOMAIN, appRoot, entrypoint, winOpts, icon, devTools
			),
			(signupParams ? btoa(JSON.stringify(signupParams)) : undefined)
		));
		StartupApp.startProc = startProc;
		return { startupApp, startProc, coreInit };
	}

	static instantiateDev(
		usersToFilterOut: string[], devParams: DevAppParams,
		startCore: CoreDriver['start'], wrapCAP: WrapStartupCAPs,
		connectIPC: ConnectIPC, connectCustomIPC: ConnectCustomIPC
	): ReturnType<typeof StartupApp.instantiate> {
		if (StartupApp.startProc) {
			throw new Error(`Startup process is already running`);
		}
		const startupApp = new StartupApp();
		const { capsForStartup, coreInit } = startCore();
		const providerSiteCAP = makeProviderCAP(() => startupApp.gui?.window, connectCustomIPC, true);
		const caps = wrapCAP(patchCAPs(capsForStartup, providerSiteCAP, usersToFilterOut, true));
		const { manifest, url, dir } = devParams;
		const startProc = DeviceFS.makeReadonly(dir)
		.then((appRoot) => {
			const instantiate: InstantiateGUI = (url ?
				(entrypoint, winOpts, icon) => DevAppInstanceFromUrl.makeStartupFor(
					STARTUP_APP_DOMAIN, url, entrypoint, winOpts, icon
				) :
				(entrypoint, winOpts, icon) => GUIComponent.makeStartup(
					STARTUP_APP_DOMAIN, appRoot, entrypoint, winOpts, icon, true
				)
			);
			return startupApp.startRegularOrDevelopmentGUI(
				manifest, caps, connectIPC, instantiate, undefined
			);
		});
		StartupApp.startProc = startProc;
		return { startupApp, startProc, coreInit };
	}

	private async startRegularOrDevelopmentGUI(
		manifest: AppManifest, caps: StartupW3N,
		connectIPC: ConnectIPC, instantiate: InstantiateGUI,
		signupParams: string|undefined
	): Promise<void> {
		try {
			const uiFF = getSytemFormFactor();
			const launchers = getLaunchersForUser(manifest, uiFF);
			const entrypoint = launchers?.[0]?.component || MAIN_GUI_ENTRYPOINT;
			const component = getWebGUIComponent(manifest, entrypoint);
			const winOpts = applyingStartupWindowPlacement(component.windowOpts);
			this.gui = await instantiate(entrypoint, winOpts, component.icon);
			connectIPC(caps, this.gui.window.webContents);
			await this.gui.start(signupParams);
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


function patchCAPs(
	w3n: web3n.startup.W3N, provider: DefaultProviderSite, excIds: string[], isTestCAP = false
): web3n.caps.startup.W3N {
	const signIn: web3n.startup.SignInService = ((excIds.length === 0) ?
		w3n.signIn :
		{
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
			),
			watchBoot: w3n.signIn.watchBoot
		}
	);
	return {
		signIn,
		signUp: w3n.signUp,
		provider
	};
}

function makeProviderCAP(
	getAppWindow: () => BrowserWindow|undefined, connectCustomIPC: ConnectCustomIPC, devTools: boolean
): DefaultProviderSite {
	let closeChild: (() => void)|undefined = undefined;
	let childWindow: BrowserWindow|undefined = undefined;
	let deferredToken: Deferred<string>|undefined = undefined;
	let tokenProvided = false;
	return {
		openSiteInChildWindow: async (url) => {
			const parent = getAppWindow();
			if (!parent) {
				return;
			}
			if (childWindow) {
				throw `Site view is already opened`;
			}
			const siteUrlRoot = 'https://';
			childWindow = new BrowserWindow({
				webPreferences: {
					session: await makeSessionForSite(siteUrlRoot, devTools),
					preload: PROVIDER_SITE_PRELOAD,
					sandbox: true,
					nodeIntegration: false,
					contextIsolation: true,
					devTools,
				},
				modal: true,
				parent,
				
			});
			addDevToolsShortcuts(childWindow);
			childWindow.webContents.setWindowOpenHandler(() => {
				logWarning(`Preventing window ${childWindow?.id} from openning new window.`);
				return { action: 'deny' };
			});
			connectCustomIPC<ServiceProviderW3N>(
				{
					giveSignupTokenToClientPlatform: jsonSrv.wrapReqReplyFunc(async token => {
						if (tokenProvided) {
							throw `Token was already given to platform`;
						}
						tokenProvided = true;
						deferredToken!.resolve(token);
					}),
				},
				childWindow.webContents
			);
			deferredToken = defer();
			childWindow.on('close', () => {
				if (deferredToken) {
					if (!tokenProvided) {
						deferredToken.promise.catch(noop);
						deferredToken.reject(`Site closed`);
					}
					deferredToken = undefined;
				}
				if (childWindow) {
					childWindow = undefined;
				}
				if (closeChild) {
					parent.removeListener('close', closeChild);
					closeChild = undefined;
				}
			});
			closeChild = () => childWindow?.close();
			parent.on('close', closeChild);
			await childWindow.webContents.loadURL(url);
		},
		closeSite: async () => closeChild?.(),
		getSignupToken: async () => {
			if (!deferredToken) {
				throw `Was provider site opened?`;
			}
			return await deferredToken.promise;
		}
	};
}

// XXX this is opening site in an additional child view in a given window.
// function makeProviderCAP(
// 	getAppWindow: () => BrowserWindow|undefined, connectCustomIPC: ConnectCustomIPC, devTools: boolean
// ): DefaultProviderSite {
// 	let closeChild: (() => void)|undefined = undefined;
// 	let childView: WebContentsView|undefined = undefined;
// 	let deferredToken: Deferred<string>|undefined = undefined;
// 	let tokenProvided = false;
// 	return {
// 		openSiteInView: async (url, bounds) => {
// 			const win = getAppWindow();
// 			if (!win) {
// 				return;
// 			}
// 			if (childView) {
// 				throw `Site view is already opened`;
// 			}
// 			const siteUrlRoot = url.substring(0, url.lastIndexOf('/')+1);
// 			childView = new WebContentsView({
// 				webPreferences: {
// 					session: await makeSessionForSite(siteUrlRoot, devTools),
// 					preload: PROVIDER_SITE_PRELOAD,
// 					sandbox: true,
// 					nodeIntegration: false,
// 					contextIsolation: true
// 				}
// 			});
// 			win.contentView.addChildView(childView);
// 			connectCustomIPC<ServiceProviderW3N>(
// 				{
// 					giveSignupTokenToClientPlatform: jsonSrv.wrapReqReplyFunc(async token => {
// 						if (tokenProvided) {
// 							throw `Token was already given to platform`;
// 						}
// 						tokenProvided = true;
// 						deferredToken!.resolve(token);
// 					}),
// 				},
// 				childView.webContents
// 			);
// 			deferredToken = defer();
// 			await childView.webContents.loadURL(url);
// 			childView.setBounds(bounds);
// 			closeChild = () => {
// 				if (deferredToken) {
// 					if (!tokenProvided) {
// 						deferredToken.promise.catch(noop);
// 						deferredToken.reject(`Site closed`);
// 					}
// 					deferredToken = undefined;
// 				}
// 				if (childView) {
// 					childView.webContents.close();
// 					childView.webContents.closeDevTools();
// 					win.contentView.removeChildView(childView);
// 					childView = undefined;
// 				}
// 				if (closeChild) {
// 					win.removeListener('close', closeChild);
// 					closeChild = undefined;
// 				}
// 			};
// 			win.on('close', closeChild);
// 		},
// 		setBounds: async bounds => childView?.setBounds(bounds),
// 		closeSite: async () => closeChild?.(),
// 		getSignupToken: async () => {
// 			if (!deferredToken) {
// 				throw `Was provider site opened?`;
// 			}
// 			return await deferredToken.promise;
// 		}
// 	};
// }

function noop() {}
