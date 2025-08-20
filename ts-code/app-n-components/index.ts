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

import { DeviceFS } from "core-3nweb-client-lib";
import { SystemPlaces } from "../system/system-places";
import { SingleProc } from "../lib-common/processes/single";
import { DevAppParamsGetter } from "../test-stand";
import { App, GetAppStorage } from "./app";
import { appAndManifestOnDev } from "./utils";
import { isBundledApp } from "../bundle-confs";
import { CoreDriver } from "../core";
import { ElectronIPCConnectors, SocketIPCConnectors } from "../core/w3n-connectors";
import { TitleGenerator } from "./gui-component";
import { ScreenGUIPlacements } from "../window-utils/screen-gui-placements";
import { logError } from "../confs";

type RPCConnection = web3n.rpc.client.RPCConnection;
type CommonDef = web3n.caps.CommonComponentSetting;
type SystemMonitor = web3n.system.monitor.SystemMonitor;
type OpenComponentInfo = web3n.system.monitor.OpenComponentInfo;
type OpenConnectionInfo = web3n.system.monitor.OpenConnectionInfo;
type PostInstallState =web3n.system.apps.PostInstallState;

export interface Component {
	readonly runtime: CommonDef['runtime'];
	readonly domain: string;
	readonly entrypoint: string;
	start(): Promise<void>;
	setCloseListener(onClose: () => void): void;
	close(): void;
	addService(name: string, service: Service): void;
	getService(name: string): Promise<Service>;
	listServiceConnections(): OpenConnectionInfo[]|undefined;
	readonly stdOut: NodeJS.ReadableStream;
	readonly stdErr: NodeJS.ReadableStream;
}

export interface Service {

	canHandleCall(): boolean;

	ensureCallerAllowed(callerApp: string, callerComponent: string): void;

	connect(callerApp: string, callerComponent: string): Promise<{
		connection: RPCConnection;
		doOnClose: (cleanup: ()=>void) => void;
	}>;

	listOpenConnections(entrypoint: string): OpenConnectionInfo[];

}


export class LiveApps {

	private readonly appsById = new Map<string, App>();
	private readonly appAdditionProc = new SingleProc();
	private canAddApps = true;

	constructor(
		private readonly findInstalledApp: SystemPlaces['findInstalledApp'],
		private readonly makeAppCAPs: CoreDriver['makeCAPsForAppComponent'],
		private readonly getAppStorage: (appDomain: string) => GetAppStorage,
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly sockConnectors: SocketIPCConnectors,
		private readonly titleMaker: TitleGenerator,
		private readonly guiPlacement: ScreenGUIPlacements,
		private readonly devApps: DevAppParamsGetter|undefined,
	) {
		Object.seal(this);
	}

	private ensureCanAddApp(): void {
		if (!this.canAddApps) {
			throw new Error(`Can't add new apps, cause closing was called`);
		}
	}

	async get(appId: string, devTools: boolean): Promise<App> {
		const app = this.appsById.get(appId);
		if (app) {
			if (app.isClosed) {
				this.appsById.delete(appId);
			} else {
				return app;
			}
		}
		return this.appAdditionProc.startOrChain<App>(async () => {
			let app = this.appsById.get(appId);
			if (app) {
				return app;
			}
			this.ensureCanAddApp();
			const devAppParams = this.devApps?.(appId);
			const getAppStorage = this.getAppStorage(appId);
			if (devAppParams) {
				const {
					params: { dir, manifest, url, formFactor }, capsWrapper
				} = devAppParams;
				const appRoot = await DeviceFS.makeReadonly(dir);
				app = new App(
					manifest, appRoot, this.makeAppCAPs, getAppStorage,
					this.guiConnectors, this.sockConnectors,
					this.guiPlacement, this.titleMaker,
					devTools, url, formFactor, capsWrapper,
					() => this.removeFromAppsById(app!)
				);
			} else {
				const {
					appRoot, manifest, sysParamsForApp
				} = await (isBundledApp(appId) ?
					appAndManifestOnDev(appId) :
					this.findInstalledApp(appId)
				);
				// 
				// XXX apply sysParamsForApp and have them for dev app
				// 
				app = new App(
					manifest, appRoot, this.makeAppCAPs, getAppStorage,
					this.guiConnectors, this.sockConnectors,
					this.guiPlacement, this.titleMaker,
					devTools, undefined, undefined, undefined,
					() => this.removeFromAppsById(app!)
				);
			}
			this.appsById.set(appId, app);
			return app;
		});
	}

	private removeFromAppsById(app: App): void {
		const found = this.appsById.get(app.appId);
		if (found === app) {
			this.appsById.delete(app.appId);
		}
	}

	updateWindowTitles(): void {
		for (const app of this.appsById.values()) {
			app.updateTitlesOnGUIComponents();
		}
	}

	private async whenNoAdditionProc(): Promise<void> {
		while (this.appAdditionProc.getP()) {
			await this.appAdditionProc.getP();
		}
	}

	async closeAppToUninstall(appDomain: string): Promise<void> {
		await this.whenNoAdditionProc();
		await this.appsById.get(appDomain)?.stopAndClose()
		.catch(
			err => logError(err, `Error on app closing`)
		);
	}

	async stopAndCloseAllApps(): Promise<void> {
		this.canAddApps = false;
		await this.whenNoAdditionProc();
		await Promise.all(Array.from(this.appsById.values())
		.map(app => app.stopAndClose().catch(
			err => logError(err, `Error on app closing`)
		)))
		.finally(() => {
			this.canAddApps = true;
		});
	}

	async closeAppsAfterUpdate(idsOfAppsToClose: string[]): Promise<void> {
		await this.whenNoAdditionProc();
		const appsToClose = idsOfAppsToClose
		.map(appId => this.appsById.get(appId))
		.filter(app => !!app) as App[];
		await Promise.all(appsToClose
		.map(app => app.stopAndClose().catch(
			err => logError(err, `Error on app closing`)
		)));
	}

	followupAppInstall(
		appId: string, version: string
	): PostInstallState {
		const app = this.appsById.get(appId);
		if (!app || (app.version === version)) {
			return 'all-done';
		}
		const conns = app.openSrvConnections;
		if (conns?.find(c => c.caller.otherApp)) {
			return 'need-restart-many';
		}
		const hasGUIInstances = !!app.openInstances.find(
			({ runtime }) => (runtime === 'web-gui')
		);
		if (hasGUIInstances || (conns && (conns.length > 0))) {
			return 'need-restart';
		} else {
			app.stopAndClose();
			return 'all-done';
		}
	}

	makeMonitor(): SystemMonitor {
		return {
			listProcs: this.listProcs.bind(this),
			listConnectionsToAppServices: this.listConnectionsToAppServices.bind(
				this
			)
		};
	}

	private async listProcs(): Promise<OpenComponentInfo[]> {
		const lst: OpenComponentInfo[] = [];
		for (const app of this.appsById.values()) {
			const { appId, version } = app;
			for (const {
				entrypoint, runtime, numOfInstances
			} of app.openInstances) {
				lst.push({
					appId, version, entrypoint, runtime, numOfInstances
				});
			}
		}
		return lst;
	}

	private async listConnectionsToAppServices(
		appId: string
	): Promise<OpenConnectionInfo[]|undefined> {
		const app = this.appsById.get(appId);
		return app?.openSrvConnections;
	}

}
Object.freeze(LiveApps.prototype);
Object.freeze(LiveApps);


Object.freeze(exports);