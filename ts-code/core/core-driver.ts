/*
 Copyright (C) 2020 - 2023 3NSoft Inc.
 
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

import { Core, CoreConf, FactoryOfFSs } from "core-3nweb-client-lib";
import { makeInWorkerWasmCryptor } from "core-3nweb-client-lib/build/cryptors";
import { makeNetClient } from "../electron/net";
import { makeAllFileDialogOpeners } from "../shell/file-dialogs";
import { prepareUserDataMntPath, prepareDebugAppsDataMntPaths, MountsInOS } from "../shell/mounts/mounts-in-os";
import { logError } from "../confs";
import { makeServiceLocator } from "core-3nweb-client-lib";
import { promises as dns } from 'dns';
import { GetServiceToHandleNewCall, makeClientSideConnector, ClientSideConnector, ServiceConnector } from "../rpc";
import { makeAppInitExc } from "../apps/installer/system-places";
import { Component } from "../app-n-components";
import { Notifications } from "../shell/user-notifications";
import { makeConnectivity } from "../connectivity";
import { Deferred, defer } from "../lib-common/processes";
import { makeAppCmdsCaller, makeCmdsHandler, StartAppWithCmd } from "../shell/cmd-invocation";
import { GUIComponent } from "../app-n-components/gui-component";

type W3N = web3n.caps.W3N;
type SitesW3N = web3n.caps.sites.W3N;
type Apps = web3n.apps.Apps;
type Logout = web3n.caps.Logout;
type AppComponent = web3n.caps.AppComponent;
type GUIServiceComponent = web3n.caps.GUIServiceComponent;
type GUIComponentDef = web3n.caps.GUIComponent;
type ServiceComponent = web3n.caps.ServiceComponent;
type RequestedCAPs = web3n.caps.RequestedCAPs;
type ExposeService = web3n.rpc.service.ExposeService;
type SiteComponent = web3n.caps.SiteComponent;
type CmdParams = web3n.shell.commands.CmdParams;
type CmdHandlerDef = NonNullable<GUIComponentDef['startCmds']>;

export interface CoreDriver {
	close(): Promise<void>;
	makeCAPsForAppComponent(
		appDomain: string, component: string, componentDef: AppComponent,
		startCmd: CmdParams|undefined
	): AppCAPsAndSetup;
	makeCAPsForSiteComponent(
		appDomain: string, component: string, componentDef: SiteComponent
	): SiteCAPsAndSetup;
	start(): { capsForStartup: web3n.startup.W3N; coreInit: Promise<void>; };
	isStarted(): boolean;
	storages: FactoryOfFSs;
	getUserId(): string;
	whenReady(): Promise<void>;
}

export interface AppCAPsAndSetup {
	w3n: W3N;
	close: () => void;
	setApp: AppSetter;
}

export interface SiteCAPsAndSetup {
	w3n: W3N;
}

export type AppSetter = (app: Component) => void;

export function makeCoreDriver(
	conf: CoreConf, appsCapFns: Apps, startAppWithCmd: StartAppWithCmd, 
	logout: Logout, getService: GetServiceToHandleNewCall
): CoreDriver {
	return new Driver(conf, appsCapFns, startAppWithCmd, logout, getService);
}


class Driver implements CoreDriver {

	private readonly core: Core;
	private signedUser: string|undefined = undefined;
	private readonly fsMounts: MountsInOS;
	private readonly rpcClientSide: ClientSideConnector;
	private readonly userNotifications = new Notifications();
	private coreReady: Deferred<void>|undefined = defer();

	constructor(
		conf: CoreConf,
		private readonly appsCapFns: Apps,
		private readonly startAppWithCmd: StartAppWithCmd,
		private readonly logout: Logout,
		getService: GetServiceToHandleNewCall,
	) {
		this.core = Core.make(
			conf,
			makeNetClient,
			makeServiceLocator({
				resolveTxt: hostname => dns.resolveTxt(hostname)
			}),
			makeInWorkerWasmCryptor
		);
		this.fsMounts = new MountsInOS(this.core.getStorages());
		this.rpcClientSide = makeClientSideConnector(getService);
		Object.seal(this);
	}

	async close(): Promise<void> {
		this.userNotifications.close();
		await this.fsMounts.close().catch(logError);
		await this.core.close().catch(logError);
	}

	start(): { capsForStartup: web3n.startup.W3N; coreInit: Promise<void>; } {
		if (!this.core) { throw new Error(`Core is already closed`); }
		const { capsForStartup, coreInit } = this.core.start();
		return {
			capsForStartup,
			coreInit: coreInit.then(
				userId => this.doAfterInit(userId),
				err => {
					this.coreReady?.reject(err);
					throw err;
				}
			)
		};
	}

	async whenReady(): Promise<void> {
		if (this.coreReady) {
			await this.coreReady.promise;
		}
	}

	private async doAfterInit(userId: string): Promise<void> {
		this.signedUser = userId;
		// XXX mounting into OS should be moved from here to mount CAP(s)
		// await this.mountUserStorageInOS();
		// await this.mountAppsFoldersForDebug();
		if (this.coreReady) {
			this.coreReady.resolve();
			this.coreReady = undefined;
		}
	}

	private async mountUserStorageInOS(): Promise<void> {
		if (!this.core) { throw new Error(`Core is already closed`); }
		const mntPath = await prepareUserDataMntPath();
		if (!mntPath) { return; }
		await this.fsMounts.mountStorageFolderInOS('user', 'synced', '', mntPath)
		.catch(err => logError(err,
			`Can't mount user's synced storage to ${mntPath}`));
	}

	private async mountAppsFoldersForDebug(): Promise<void> {
		if (!this.core) { throw new Error(`Core is already closed`); }
		const paths = await prepareDebugAppsDataMntPaths();
		if (!paths) { return; }
		await this.fsMounts.mountStorageFolderInOS(
			'system', 'synced', 'Apps Data', paths.syncedStore
		).catch(err => logError(
			err, `Can't mount system's synced storage to ${paths.syncedStore}`
		));
		await this.fsMounts.mountStorageFolderInOS(
			'system', 'local', 'Apps Data', paths.localStore
		).catch(err => logError(
			err, `Can't mount system's local storage to ${paths.localStore}`
		));
	}

	isStarted(): boolean {
		return !!this.signedUser;
	}

	getUserId(): string {
		if (this.signedUser) {
			return this.signedUser;
		} else {
			throw new Error(`Core is not initialized`);
		}
	}

	get storages() {
		if (!this.core) { throw new Error(`Core is already closed`); }
		return this.core.getStorages();
	}

	makeCAPsForAppComponent(
		appDomain: string, component: string, componentDef: AppComponent,
		startCmd: CmdParams|undefined
	): { w3n: W3N; close: () => void; setApp: AppSetter; } {
		if (!this.core) { throw new Error(`Core is already closed`); }
		const capsReq = (componentDef.capsRequested ?
			componentDef.capsRequested : {}
		);
		const baseW3N = this.core.makeCAPsForApp(appDomain, capsReq);
		const closeSelf = this.closeSelfCAP();
		const shell = this.shellCAPs(
			appDomain, component, capsReq,
			(componentDef as GUIComponentDef).startCmds, startCmd
		);
		const rpc = makeRpcCAP(
			this.rpcClientSide, appDomain, componentDef, capsReq
		);
		const close = () => {
			shell?.close();
			rpc?.close();
			baseW3N.close();
		};
		const setApp: AppSetter = app => {
			closeSelf.setApp(app);
			shell?.setApp(app);
			rpc?.setApp(app);
		};
		const w3n: W3N = {
			log: baseW3N.caps.log,
			storage: baseW3N.caps.storage,
			mail: baseW3N.caps.mail,
			mailerid: baseW3N.caps.mailerid,
			closeSelf: closeSelf.cap,
			apps: makeAppsCAP(this.appsCapFns, capsReq),
			logout: makeLogoutCAP(this.logout, capsReq),
			shell: shell?.cap,
			rpc: rpc?.cap,
			connectivity: connectivityCAP(capsReq.connectivity),
		};
		return { w3n, close, setApp };
	}

	makeCAPsForSiteComponent(
		siteDomain: string, component: string, componentDef: SiteComponent
	): SiteCAPsAndSetup {
		const w3n: SitesW3N = {};
		return { w3n };
	}

	private closeSelfCAP(): { cap: W3N['closeSelf']; setApp: AppSetter; } {
		let self: Component = undefined as any;
		const cap: W3N['closeSelf'] = () => {
			if (self) {
				self.close();
			}
		};
		const setApp: AppSetter = app => { self = app; };
		return { cap, setApp };
	}

	private shellCAPs(
		appDomain: string, component: string, capsReq: RequestedCAPs,
		cmdHandlerDef: GUIComponentDef['startCmds'], startCmd: CmdParams|undefined
	): {
		cap: NonNullable<W3N['shell']>; setApp: AppSetter; close: () => void;
	}|undefined {
		if (!capsReq.shell && !cmdHandlerDef) { return; }
		const cap: NonNullable<W3N['shell']> = {};
		const closeFns: (() => void)[] = [];
		const setAppFns: AppSetter[] = [];
		if (capsReq.shell) {
			const fileDialogs = fileDialogShellCAP(capsReq.shell.fileDialog);
			if (fileDialogs) {
				cap.fileDialogs = fileDialogs.cap;
				closeFns.push(fileDialogs.close);
				setAppFns.push(fileDialogs.setApp);
			}
			const userNotifications = this.userNotificationsShellCAP(
				appDomain, component, capsReq.shell.userNotifications
			);
			if (userNotifications) {
				cap.userNotifications = userNotifications.cap;
				closeFns.push(userNotifications.close);
				setAppFns.push(userNotifications.setApp);
			}
			const startAppWithParamsShell = this.startAppWithParamsShellCAP(
				appDomain, component, capsReq.shell.startAppCmds
			);
			if (startAppWithParamsShell) {
				cap.startAppWithParams = startAppWithParamsShell.cap;
			}
		}
		if (cmdHandlerDef) {
			const {
				getStartedCmd, watchStartCmds, setApp
			} = makeCmdHandlerCAP(appDomain, cmdHandlerDef, startCmd);
			cap.getStartedCmd = getStartedCmd;
			cap.watchStartCmds = watchStartCmds;
			setAppFns.push(setApp);
		}
		return {
			cap,
			setApp: app => setAppFns.forEach(setApp => setApp(app)),
			close: () => closeFns.forEach(close => close()),
		};
	}

	private userNotificationsShellCAP(
		appDomain: string, component: string,
		notifCAPsReq: web3n.caps.ShellCAPsSetting['userNotifications']
	): {
		cap: web3n.shell.notifications.UserNotifications;
		setApp: AppSetter; close(): void;
	}|undefined {
		if (!notifCAPsReq) { return; }
		const {
			notifications: cap, setApp, close
		} = this.userNotifications.makeFor(appDomain, component);
		return { cap, setApp, close };
	}

	private startAppWithParamsShellCAP(
		appDomain: string, component: string,
		capsReq: web3n.caps.ShellCAPsSetting['startAppCmds']
	): {
		cap: web3n.shell.ShellCAPs['startAppWithParams'];
	}|undefined {
		if (!capsReq?.otherApps && !capsReq?.thisApp) { return; }
		return {
			cap: makeAppCmdsCaller(
				this.startAppWithCmd, appDomain, component, capsReq
			)
		};
	}

}
Object.freeze(Driver.prototype);
Object.freeze(Driver);


type RPC = NonNullable<W3N['rpc']>;

function makeAppRPC(
	rpcClientSide: ClientSideConnector, capsReq: RequestedCAPs
): {
	cap: NonNullable<RPC['thisApp']>; setApp: AppSetter;
}|undefined {
	if (!capsReq.appRPC) { return; }
	if (capsReq.appRPC.serviceComponents.length === 0) { return; }
	let caller: Component|undefined = undefined;
	return {
		cap: service => rpcClientSide(caller!, caller!.domain, service),
		setApp: app => {
			caller = app;
		},
	};
}

function makeOtherAppsRPC(
	rpcClientSide: ClientSideConnector, capsReq: RequestedCAPs
): {
	cap: NonNullable<RPC['otherAppsRPC']>; setApp: AppSetter;
}|undefined {
	if (!capsReq.otherAppsRPC) { return; }
	if (capsReq.otherAppsRPC.callable.length === 0) { return; }
	let caller: Component|undefined = undefined;
	return {
		cap: (appDomain, service) => rpcClientSide(caller!, appDomain, service),
		setApp: app => {
			caller = app;
		},
	};
}

function makeRpcCAP(
	rpcClientSide: ClientSideConnector,
	appDomain: string, componentDef: AppComponent, capsReq: RequestedCAPs
): {
	cap: RPC; setApp: AppSetter; close: () => void;
}|undefined {
	const exposeService = exposeServiceCAP(
		appDomain, componentDef as GUIServiceComponent|ServiceComponent
	);
	const appRPC = makeAppRPC(rpcClientSide, capsReq);
	const otherAppsRPC = makeOtherAppsRPC(rpcClientSide, capsReq);
	if (!exposeService && !appRPC && !otherAppsRPC) { return; }
	const cap: RPC = {
		thisApp: appRPC?.cap,
		otherAppsRPC: otherAppsRPC?.cap,
		exposeService: exposeService?.cap,
	};
	return {
		cap,
		setApp: app => {
			exposeService?.setApp(app);
			appRPC?.setApp(app);
			otherAppsRPC?.setApp(app);
		},
		close: () => {
			exposeService?.close();
		}
	};
}

function makeAppsCAP(
	appsCapFns: Driver['appsCapFns'], capsReq: RequestedCAPs
): W3N['apps'] {
	if (capsReq.apps === 'all') {
		return appsCapFns;
	} else if (capsReq.apps) {
		const apps: W3N['apps'] = {};
		if (Array.isArray(capsReq.apps)) {
			for (const key of capsReq.apps) {
				apps[key] = appsCapFns[key] as any;
			}
		} else if ((typeof capsReq.apps === 'string')
		&& appsCapFns[capsReq.apps]) {
			const key = capsReq.apps as any;
			apps[key] = appsCapFns[key] as any;
		}
		return ((Object.keys(apps).length > 0) ? apps : undefined);
	}
}

function makeLogoutCAP(
	logout: Driver['logout'], capsReq: RequestedCAPs
): W3N['logout'] {
	if (capsReq.logout === 'all') {
		return logout;
	}
}

function fileDialogShellCAP(
	fileDialogCAPsReq: web3n.caps.ShellCAPsSetting['fileDialog']
): {
	cap: web3n.shell.files.Dialogs; setApp: AppSetter; close(): void;
}|undefined {
	if (!fileDialogCAPsReq) { return; }
	if (fileDialogCAPsReq === 'all') {
		const { openers: cap, close, setApp } = makeAllFileDialogOpeners();
		return { cap, close, setApp };
	} else if (fileDialogCAPsReq ===  'readonly') {
		const { openers, close, setApp } = makeAllFileDialogOpeners();
		return {
			setApp, close, cap: {
				openFileDialog: openers.openFileDialog,
				openFolderDialog: openers.openFolderDialog,
			},
		};
	}
}

function exposeServiceCAP(
	appDomain: string, componentDef: GUIServiceComponent|ServiceComponent
): { cap: ExposeService; setApp: AppSetter; close: () => void; }|undefined {
	const expectedSrvs = servicesIn(componentDef);
	if (!expectedSrvs) { return; }
	const connectors: { [srvName: string]: ServiceConnector; } = {};
	for (const srvName of expectedSrvs) {
		connectors[srvName] = new ServiceConnector(
			appDomain, srvName,
			componentDef.allowedCallers, !!componentDef.forOneConnectionOnly
		);
	}
	const setApp: AppSetter = app => {
		for (const [srvName, connector] of Object.entries(connectors)) {
			app.addService(srvName, connector.wrap());
		}
	};
	const close = (): void => {
		for (const connector of Object.values(connectors)) {
			connector.close();
		}
	};
	const cap: ExposeService = (service, obs) => {
		const connector = connectors[service];
		if (!connector) {
			throw makeAppInitExc(appDomain, {}, {
				message: `Service ${service} is not found in app setting`
			});
		}
		connector.setSinkForConnections(obs);
		return () => connector.close();
	};
	return { cap, setApp, close };
}

function servicesIn(componentDef: AppComponent): string[]|undefined {
	return (componentDef as ServiceComponent).services;
}

function connectivityCAP(
	connectivityCAPsReq: RequestedCAPs['connectivity']
): W3N['connectivity'] {
	if (connectivityCAPsReq === 'check') {
		return makeConnectivity();
	}
}

function makeCmdHandlerCAP(
	appDomain: string, cmdHandlerDef: CmdHandlerDef,
	startCmd: CmdParams|undefined
): {
	getStartedCmd: NonNullable<web3n.shell.ShellCAPs['getStartedCmd']>;
	watchStartCmds: NonNullable<web3n.shell.ShellCAPs['watchStartCmds']>;
	setApp: AppSetter;
} {
	const cmdHandler = makeCmdsHandler(appDomain, cmdHandlerDef);
	return {
		getStartedCmd: async () => startCmd,
		watchStartCmds: obs => {
			const sub = cmdHandler.cmd$.subscribe(obs);
			return () => sub.unsubscribe();
		},
		setApp: app => {
			if (!cmdHandlerDef) {
				// XXX add some proper app
				throw new Error(``);
			}
			(app as GUIComponent).setCmdHandler(cmdHandler);
		}
	};
}


Object.freeze(exports);