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
import { SystemPlaces } from "../system/apps/installer/system-places";
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

export interface Component {
	readonly runtime: CommonDef['runtime'];
	readonly domain: string;
	readonly entrypoint: string;
	start(): Promise<void>;
	setCloseListener(onClose: () => void): void;
	close(): void;
	addService(name: string, service: Service): void;
	getService(name: string): Promise<Service>;
	readonly stdOut: NodeJS.ReadableStream;
	readonly stdErr: NodeJS.ReadableStream;
}

export interface Service {

	canHandleCall(): boolean;

	ensureCallerAllowed(callerApp: string, callerComponent: string): void;

	connect(): Promise<{
		connection: RPCConnection;
		doOnClose: (cleanup: ()=>void) => void;
	}>;

}


export class AppsByDomain {

	private readonly appsByDomain = new Map<string, App>();
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

	async get(appDomain: string, devTools: boolean): Promise<App> {
		const app = this.appsByDomain.get(appDomain);
		if (app) {
			return app;
		}
		return this.appAdditionProc.startOrChain<App>(async () => {
			let app = this.appsByDomain.get(appDomain);
			if (app) {
				return app;
			}
			this.ensureCanAddApp();
			const devAppParams = this.devApps?.(appDomain);
			const getAppStorage = this.getAppStorage(appDomain);
			if (devAppParams) {
				const {
					params: { dir, manifest, url }, capsWrapper
				} = devAppParams;
				const appRoot = await DeviceFS.makeReadonly(dir);
				app = new App(
					manifest, appRoot, this.makeAppCAPs, getAppStorage,
					this.guiConnectors, this.sockConnectors,
					this.guiPlacement, this.titleMaker,
					devTools, url, capsWrapper
				);
			} else {
				const { appRoot, manifest } = await (isBundledApp(appDomain) ?
					appAndManifestOnDev(appDomain) :
					this.findInstalledApp(appDomain)
				);
				app = new App(
					manifest, appRoot, this.makeAppCAPs, getAppStorage,
					this.guiConnectors, this.sockConnectors,
					this.guiPlacement, this.titleMaker,
					devTools, undefined, undefined
				);
			}
			this.appsByDomain.set(appDomain, app);
			return app;
		});
	}

	updateWindowTitles(): void {
		for (const app of this.appsByDomain.values()) {
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
		await this.appsByDomain.get(appDomain)?.stopAndClose()
		.catch(
			err => logError(err, `Error on app closing`)
		);
	}

	async stopAndCloseAllApps(): Promise<void> {
		this.canAddApps = false;
		await this.whenNoAdditionProc();
		await Promise.all(Array.from(this.appsByDomain.values())
		.map(app => app.stopAndClose().catch(
			err => logError(err, `Error on app closing`)
		)));
	}

}
Object.freeze(AppsByDomain.prototype);
Object.freeze(AppsByDomain);


Object.freeze(exports);