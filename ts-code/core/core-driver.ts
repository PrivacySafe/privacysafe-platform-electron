/*
 Copyright (C) 2020 - 2024 3NSoft Inc.
 
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

import { Core, CoreConf } from "core-3nweb-client-lib";
import { makeInWorkerWasmCryptor } from "core-3nweb-client-lib/build/cryptors";
import { makeNetClient } from "../electron/net";
import { prepareUserDataMntPath, prepareDebugAppsDataMntPaths, MountsInOS } from "../shell/mounts/mounts-in-os";
import { logError } from "../confs";
import { makeServiceLocator } from "core-3nweb-client-lib";
import { promises as dns } from 'dns';
import { GetServiceToHandleNewCall, makeClientSideConnector, ClientSideConnector } from "../rpc";
import { Component } from "../app-n-components";
import { Notifications } from "../shell/user-notifications";
import { Deferred, defer } from "../lib-common/processes/deferred";
import { StartAppWithCmd } from "../shell/cmd-invocation";
import { GetAppFSResourceFor } from "../shell/fs-resource";
import { CoreDriver } from "./index";
import { AppSetter, SiteCAPsAndSetup, makeCAPsSetAppAndCloseFns } from "./caps";
import { makeRpcCAP } from "./caps/rpc";
import { connectivityCAP } from "./caps/connectivity";
import { makeSystemCAP } from "./caps/system";
import { makeShellCAPs } from "./caps/shell";
import { makeMediaDevicesCAP } from "./caps/mediaDevices";

type W3N = web3n.system.W3N;
type SitesW3N = web3n.caps.sites.W3N;
type SysUtils = web3n.system.SysUtils;
type Logout = web3n.system.Logout;
type AppComponent = web3n.caps.AppComponent;
type GUIComponentDef = web3n.caps.GUIComponent;
type SiteComponent = web3n.caps.SiteComponent;
type CmdParams = web3n.shell.commands.CmdParams;


export class Driver implements CoreDriver {

	private readonly core: Core;
	private signedUser: string|undefined = undefined;
	private readonly fsMounts: MountsInOS;
	private readonly rpcClientSide: ClientSideConnector;
	private readonly userNotifications = new Notifications();
	private coreReady: Deferred<void>|undefined = defer();

	constructor(
		conf: CoreConf,
		private readonly makeSystemCapFns: () => SysUtils,
		private readonly startAppWithCmd: StartAppWithCmd,
		private readonly logout: Logout,
		getService: GetServiceToHandleNewCall,
		private readonly getAppFSResourceFor: GetAppFSResourceFor
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
		appDomain: string, appVersion: string, component: string,
		componentDef: AppComponent, startCmd: CmdParams|undefined
	): { w3n: W3N; close: () => void; setApp: AppSetter; } {
		if (!this.core) { throw new Error(`Core is already closed`); }
		const capsReq = (componentDef.capsRequested ?
			componentDef.capsRequested : {}
		);
		const baseW3N = this.core.makeCAPsForApp(appDomain, capsReq);
		const { log, keyrings, mail, mailerid, storage } = baseW3N.caps;
		const closeSelf = this.closeSelfCAP();
		const shell = makeShellCAPs(
			appDomain, component, capsReq,
			(componentDef as GUIComponentDef).startCmds, startCmd,
			this.getAppFSResourceFor,
			this.userNotifications,
			this.startAppWithCmd
		);
		const rpc = makeRpcCAP(
			this.rpcClientSide, appDomain, componentDef, capsReq
		);
		const mediaDevices = makeMediaDevicesCAP(capsReq.mediaDevices);
		const { close, setApp } = makeCAPsSetAppAndCloseFns(
			shell, rpc, mediaDevices, baseW3N, closeSelf
		);
		const w3n: W3N = {
			log, keyrings, mail, mailerid, storage,
			myVersion: async () => appVersion,
			closeSelf: closeSelf.cap,
			system: makeSystemCAP(
				this.makeSystemCapFns,
				this.logout,
				(capsReq as web3n.system.RequestedCAPs).system
			),
			shell: shell?.cap,
			rpc: rpc?.cap,
			connectivity: connectivityCAP(capsReq.connectivity),
			mediaDevices: mediaDevices?.cap,
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

}
Object.freeze(Driver.prototype);
Object.freeze(Driver);


Object.freeze(exports);