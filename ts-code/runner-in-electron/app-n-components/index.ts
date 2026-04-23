/*
 Copyright (C) 2026 3NSoft Inc.
 
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
import { App, AppFolder } from "../../platform/apps/app";
import { DevAppParamsGetter, GetAppStorage, LiveApps, WrapAppCAPsAndSetup } from "../../platform/apps/live-apps";
import { CoreDriver } from "../../platform/core";
import { ScreenGUIPlacements } from "../window-utils/screen-gui-placements";
import { DevAppInstanceFromUrl, GUIComponent, TitleGenerator } from "./gui-component";
import { ElectronIPCConnectors, SocketIPCConnectors } from "./w3n-connectors";
import { isBundledApp } from "../bundle-confs";
import type { Logging } from "../../platform/inject-defs/confs";
import { getSytemFormFactor } from "../caps/ui";
import { Component, Service } from "../../platform/inject-defs/apps";
import { PostponedValuesFixedKeysMap } from "../../platform/lib-common/postponed-values-map";
import { servicesImplementedBy } from "../../platform/lib-common/manifest-utils";
import { makeAppInitExc } from "../../platform/caps/shell";
import { DenoComponent } from "./deno-component";
import type { SystemPlaces } from "../../platform/caps/system/system-places";

type AppManifest = web3n.caps.AppManifest;
type FormFactor = web3n.ui.FormFactor;
type CmdParams = web3n.shell.commands.CmdParams;
type GUIComponentDef = web3n.caps.GUIComponent;
type SrvDef = web3n.caps.ServiceComponent;
type GUISrvDef = web3n.caps.GUIServiceComponent;
type FileException = web3n.files.FileException;

export class LiveAppsInElectron extends LiveApps {

	constructor(
		private readonly findInstalledApp: SystemPlaces['findInstalledApp'],
		private readonly appAndManifestOnDev: SystemPlaces['appAndManifestOnDev'],
		private readonly makeAppCAPs: CoreDriver['makeCAPsForAppComponent'],
		getAppStorage: (appDomain: string) => GetAppStorage,
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly sockConnectors: SocketIPCConnectors,
		private readonly titleMaker: TitleGenerator,
		private readonly guiPlacement: ScreenGUIPlacements,
		devApps: DevAppParamsGetter|undefined,
		logging: Logging
	) {
		super(getAppStorage, devApps, logging);
		Object.seal(this);
	}

	protected async makeApp(
		appId: string,
		getAppStorage: GetAppStorage,
		removeThisFromLiveApps: () => void,
		devTools: boolean
	): Promise<App> {
		const {
			appRoot, manifest
		} = await (isBundledApp(appId) ?
			this.appAndManifestOnDev(appId) :
			this.findInstalledApp(appId)
		);
		return new AppInElectron(
			manifest, appRoot, this.makeAppCAPs, getAppStorage,
			this.guiConnectors, this.sockConnectors,
			this.guiPlacement, this.titleMaker,
			devTools, undefined, undefined, undefined,
			removeThisFromLiveApps, this.logging
		);
	}

	protected async makeDevApp(
		devAppParams: NonNullable<ReturnType<DevAppParamsGetter>>,
		getAppStorage: GetAppStorage,
		removeThisFromLiveApps: () => void
	): Promise<App> {
		const {
			params: { dir, manifest, url, formFactor }, capsWrapper
		} = devAppParams;
		const appRoot = await DeviceFS.makeReadonly(dir);
		return new AppInElectron(
			manifest, appRoot, this.makeAppCAPs, getAppStorage,
			this.guiConnectors, this.sockConnectors,
			this.guiPlacement, this.titleMaker,
			true, url, formFactor, capsWrapper,
			removeThisFromLiveApps, this.logging
		);
	}

}
Object.freeze(LiveAppsInElectron.prototype);
Object.freeze(LiveAppsInElectron);


class AppInElectron extends App {

	constructor(
		manifest: AppManifest,
		appRoot: AppFolder,
		makeAppCAPs: CoreDriver['makeCAPsForAppComponent'],
		getAppStorage: GetAppStorage,
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly sockConnectors: SocketIPCConnectors,
		private readonly guiPlacement: ScreenGUIPlacements,
		private readonly titleMaker: TitleGenerator,
		devTools: boolean,
		private readonly devRootUrl: string|undefined,
		private readonly formFactor: FormFactor|undefined,
		devCAPsWrapper: WrapAppCAPsAndSetup|undefined,
		removeThisFromLiveApps: () => void,
		logging: Logging
	) {
		super(
			manifest, appRoot, makeAppCAPs, getAppStorage, removeThisFromLiveApps, devTools, devCAPsWrapper, logging
		);
		Object.seal(this);
	}

	protected get uiFF(): FormFactor {
		return this.formFactor ?? getSytemFormFactor();
	}

	protected async makeAndStartGUIComponentInstance(
		entrypoint: string, component: GUIComponentDef|GUISrvDef,
		startCmd: CmdParams|undefined, guiParent: GUIComponent|undefined,
		devTools?: boolean
	): Promise<GUIComponent> {
		const { appDomain } = this.manifest;
		const caps = this.capsForNewComponentInstance(
			entrypoint, component, startCmd, async () => gui.window.focus()
		);
		const {
			windowOpts, watchWindowGeometry
		} = await this.guiPlacement.windowLocationFor(
			appDomain, entrypoint, component.windowOpts, guiParent?.window
		);
		const services = servicesContainerFor(this.manifest, entrypoint);
		let gui: GUIComponent;
		if (this.devRootUrl) {
			gui = await DevAppInstanceFromUrl.makeForUrl(
				appDomain, this.devRootUrl, entrypoint, caps,
				component.capsRequested,
				windowOpts, component.icon, guiParent, this.titleMaker, services
			);
		} else {
			gui = await GUIComponent.make(
				appDomain, this.appRoot, entrypoint, caps, component.capsRequested,
				windowOpts, component.icon, guiParent,
				devTools || this.devTools, this.titleMaker, services
			);
		}
		this.guiConnectors.connectW3N(caps.w3n, gui.window.webContents);
		if (watchWindowGeometry) {
			watchWindowGeometry(gui.window);
		}
		this.addToInstances(entrypoint, component, gui);
		await gui.start();
		gui.focusWindow();
		return gui;
	}

	protected async makeAndStartDenoComponentInstance(
		entrypoint: string, component: SrvDef
	): Promise<Component> {
		const { appDomain } = this.manifest;
		const caps = this.capsForNewComponentInstance(entrypoint, component, undefined, undefined);
		const {
			connectInfo, connect
		} = await this.sockConnectors.createConnector();
		if (this.devTools) {
			console.log(`▶️ ${appDomain}${entrypoint} component starts
			`);
		}
		const services = servicesContainerFor(this.manifest, entrypoint);
		const deno = await DenoComponent.makeLoadConnectAndStart(
			appDomain, this.appRoot, entrypoint, caps, connectInfo, connect, services
		).catch((exc: FileException) => {
			if ((exc.type === 'file') && exc.notFound) {
				throw makeAppInitExc(appDomain, {}, {
					entrypoint,
					message: `Entrypoint ${exc.path} not found for starting '${component.runtime}' component`
				});
			} else {
				throw exc;
			}
		});
		if (this.devTools) {
			const pidStr = (deno.pid ? deno.pid : '**');
			console.log(`▶️ ✔️ ${appDomain}${entrypoint} component has started, pid ${pidStr}
			`);
			deno.stdOut.on('data', chunk => console.log(`${
				appDomain}${entrypoint} pid ${pidStr}: ${chunk}
			`));
			deno.stdErr.on('data', chunk => console.error(`${
				appDomain}${entrypoint} pid ${pidStr}: ${chunk}
			`));
			deno.setCloseListener((code, signal) => console.log(`🚩 ${
				appDomain}${entrypoint} pid ${pidStr} exited (code: ${
				code}, signal: ${signal})
			`));
		}
		this.addToInstances(entrypoint, component, deno);
		return deno;
	}

}
Object.freeze(AppInElectron.prototype);
Object.freeze(AppInElectron);


function servicesContainerFor(
	manifest: AppManifest, entrypoint: string
): PostponedValuesFixedKeysMap<string, Service>|undefined {
	const services = servicesImplementedBy(manifest, entrypoint);
	return (services ? new PostponedValuesFixedKeysMap(services) : undefined);
}
