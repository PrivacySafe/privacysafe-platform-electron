/*
 Copyright (C) 2022 3NSoft Inc.
 
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

import { DeviceFS, reverseDomain } from "core-3nweb-client-lib";
import { join } from "path";
import { appAndManifestFrom, makeAppInitExc, SystemPlaces } from "../apps/installer/system-places";
import { BUNDLED_APPS_FOLDER, STARTUP_APP_DOMAIN } from "../bundle-confs";
import { AppCAPsAndSetup, CoreDriver } from "../core/core-driver";
import { ElectronIPCConnectors, SocketIPCConnectors } from "../core/w3n-connectors";
import { toCanonicalAddress } from "../lib-common/canonical-address";
import { errWithCause } from "../lib-common/exceptions/error";
import { entrypointOfService, MAIN_GUI_ENTRYPOINT, userStartedComponentFrom } from "../lib-common/manifest-utils";
import { ensureCallerAllowed, makeRPCException } from "../rpc";
import { DevAppParams, DevAppParamsGetter, WrapAppCAPsAndSetup } from "../test-stand";
import { DenoComponent } from "./deno-component";
import { DevAppInstanceFromUrl, GUIComponent, TitleGenerator } from "./gui-component";
import { ScreenGUIPlacements } from "./screen-gui-placements";

type RPCConnection = web3n.rpc.client.RPCConnection;
type GUIServiceComponent = web3n.caps.GUIServiceComponent;
type ServiceComponent = web3n.caps.ServiceComponent;
type UserStartedComponent = web3n.caps.UserStartedComponent;
type CommonComponentSetting = web3n.caps.CommonComponentSetting;
type ReadonlyFS = web3n.files.ReadonlyFS;
type FileException = web3n.files.FileException;

export interface Component {
	readonly runtime: CommonComponentSetting['runtime'];
	readonly domain: string;
	readonly entrypoint: string;
	start(): Promise<void>;
	setCloseListener(onClose: () => void): void;
	close(): void;
	addService(name: string, service: Service): void;
	readonly services?: {
		[name: string]: Service;
	};
	readonly stdOut: NodeJS.ReadableStream;
	readonly stdErr: NodeJS.ReadableStream;
}

export interface Service {

	canHandleCall(): boolean;

	ensureCallerAllowed(callerApp: string, callerComponent: string): void;

	connect(): Promise<RPCConnection>;

}


class AppComponents {

	private readonly components = new Map<string, ComponentInstances>();

	constructor() {
		Object.freeze(this);
	}

	private getInstances(entrypoint: string): ComponentInstances|undefined {
		const instances = this.components.get(entrypoint);
		if (instances) {
			if (instances.isEmpty()) {
				this.components.delete(entrypoint);
				return;
			} else {
				return instances;
			}
		}
	}

	add(component: Component): void {
		let instances = this.getInstances(component.entrypoint);
		if (instances) {
			instances.add(component);
		} else {
			instances = new ComponentInstances(component);
			this.components.set(component.entrypoint, instances);
		}
	}

	remove(component: Component): void {
		const instances = this.getInstances(component.entrypoint);
		if (instances) {
			instances.remove(component);
			if (instances.isEmpty()) {
				this.components.delete(component.entrypoint);
			}
		}
	}

	isEmpty(): boolean {
		return (this.components.size === 0);
	}

	findUserStarted(entrypoint: string): GUIComponent|undefined {
		const instances = this.getInstances(entrypoint);
		if (!instances) { return; }
		const component = instances.getOne();
		if (component.services || (component.runtime !== 'web-gui')) {
			return;
		} else {
			return component as GUIComponent;
		}
	}

	guiComponents(): GUIComponent[] {
		const components: GUIComponent[] = [];
		for (const instances of this.components.values()) {
			if (instances.getOne().runtime === 'web-gui') {
				for (const instance of instances.iter()) {
					components.push(instance as GUIComponent);
				}
			}
		}
		return components;
	}

	userStarted(): GUIComponent[] {
		const components: GUIComponent[] = [];
		for (const instances of this.components.values()) {
			for (const instance of instances.iter()) {
				if (!instance.services && (instance.runtime === 'web-gui')) {
					components.push(instance as GUIComponent);
				}
			}
		}
		return components;
	}

	serviceComponents(): Component[] {
		const srvComponents: Component[] = [];
		for (const instances of this.components.values()) {
			for (const instance of instances.iter()) {
				if (instance.services) {
					srvComponents.push(instance);
				}
			}
		}
		return srvComponents;
	}

	serviceInstances(service: string): Service[]|undefined {
		for (const instances of this.components.values()) {
			const services = instances.serviceInstances(service);
			if (services) {
				return services;
			}
		}
	}

}
Object.freeze(AppComponents.prototype);
Object.freeze(AppComponents);


class ComponentInstances {

	private readonly instances = new Set<Component>();

	constructor(component: Component) {
		this.instances.add(component);
		Object.freeze(this);
	}

	getOne(): Component {
		for (const instance of this.instances) {
			return instance;
		}
		throw new Error(`This can't be called on empty, and check should`);
	}

	iter(): IterableIterator<Component> {
		return this.instances.values();
	}

	add(component: Component): void {
		this.instances.add(component);
	}

	remove(component: Component): void {
		this.instances.delete(component);
	}

	isEmpty(): boolean {
		return (this.instances.size === 0);
	}

	serviceInstances(service: string): Service[]|undefined {
		if (this.isEmpty()) { return; }
		const oneInstance = this.getOne();
		if (oneInstance && oneInstance.services
		&& oneInstance.services[service]) {
			return Array.from(this.instances).map(c => c.services![service]);
		}
	}

}
Object.freeze(ComponentInstances.prototype);
Object.freeze(ComponentInstances);


export class Components {

	private readonly apps = new Map<string, AppComponents>();
	private readonly guiPlacement: ScreenGUIPlacements;

	constructor(
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly sockConnectors: SocketIPCConnectors,
		private readonly titleMaker: TitleGenerator,
		private readonly makeAppCAPs: CoreDriver['makeCAPsForAppComponent'],
		private readonly getAppFiles: SystemPlaces['findInstalledApp']
	) {
		Object.seal(this);
	}

	findUserStarted(
		appDomain: string, entrypoint = MAIN_GUI_ENTRYPOINT
	): GUIComponent|undefined {
		const components = this.apps.get(appDomain);
		return (components ?
			components.findUserStarted(entrypoint) : undefined);
	}

	private register(component: Component): void {
		let components = this.apps.get(component.domain);
		if (!components) {
			components = new AppComponents();
			this.apps.set(component.domain, components);
		}
		components.add(component);
		component.setCloseListener(() => this.unregister(component));
	}

	private unregister(component: Component): void {
		let components = this.apps.get(component.domain);
		if (components) {
			components.remove(component);
			if (components.isEmpty()) {
				this.apps.delete(component.domain);
			}
		}
	}

	async instantiateStartup(
		usersToFilterOut: string[], devTools: boolean,
		startCore: CoreDriver['start']
	): Promise<{ coreInit: Promise<void>; }> {
		try {
			const startupAppFolder = join(
				BUNDLED_APPS_FOLDER, reverseDomain(STARTUP_APP_DOMAIN)
			);
			const {
				manifest, appRoot
			} = await appAndManifestOnDev(startupAppFolder);
			const entrypoint = MAIN_GUI_ENTRYPOINT;
			const component = userStartedComponentFrom(manifest, entrypoint);
			const { capsForStartup, coreInit } = startCore();
			const startupApp = await GUIComponent.makeStartup(
				STARTUP_APP_DOMAIN, appRoot, entrypoint,
				component.windowOpts, devTools
			);
			this.guiConnectors.connectStartupW3N(
				filterOutUserIds(capsForStartup, usersToFilterOut),
				startupApp.window.webContents
			);
			this.register(startupApp);
			await startupApp.start();
			return { coreInit };
		} catch (err) {
			throw errWithCause(err, `Cannot open startup app`);
		}
	}

	async devInstantiateStartup(
		devParams: DevAppParams, startCore: CoreDriver['start']
	): Promise<{ coreInit: Promise<void>; }> {
		try {
			const { manifest, url, dir } = devParams;
			const entrypoint = MAIN_GUI_ENTRYPOINT;
			const component = userStartedComponentFrom(manifest, entrypoint);
			const { capsForStartup, coreInit } = startCore();
			let startupApp: GUIComponent;
			if (url) {
				startupApp = await DevAppInstanceFromUrl.makeStartupFor(
					STARTUP_APP_DOMAIN, url, entrypoint, component.windowOpts
				);
			} else {
				const appRoot = await DeviceFS.makeReadonly(dir);
				startupApp = await GUIComponent.makeStartup(
					STARTUP_APP_DOMAIN, appRoot, entrypoint,
					component.windowOpts, true
				);
			}
			this.guiConnectors.connectStartupW3N(
				capsForStartup, startupApp.window.webContents
			);
			this.register(startupApp);
			await startupApp.start();
			return { coreInit };
		} catch (err) {
			throw errWithCause(err, `Cannot open startup app`);
		}
	}

	updateWindowTitles(): void {
		for (const app of this.apps.values()) {
			for (const gui of app.guiComponents()) {
				gui.updateTitle();
			}
		}
	}

	async instantiateUserStartedGUI(
		appDomain: string, entrypoint: string|undefined, devTools: boolean
	): Promise<GUIComponent> {
		const { appRoot, manifest } = await this.getAppFiles(appDomain);
		if (!entrypoint) {
			entrypoint = MAIN_GUI_ENTRYPOINT;
		}
		const component = userStartedComponentFrom(manifest, entrypoint);
		const gui = await this.makeGUIComponent(
			appRoot, appDomain, entrypoint, component, devTools, undefined
		);
		return gui;
	}

	private async makeGUIComponent(
		appRoot: ReadonlyFS, appDomain: string, entrypoint: string,
		component: UserStartedComponent | GUIServiceComponent, devTools: boolean,
		guiParent: GUIComponent|undefined
	): Promise<GUIComponent> {
		const caps = this.makeAppCAPs(appDomain, entrypoint, component);
		const gui = await GUIComponent.make(
			appDomain, appRoot, entrypoint, caps, component.windowOpts, guiParent,
			devTools, this.titleMaker
		);
		this.guiConnectors.connectW3N(gui.w3n, gui.window.webContents);
		this.register(gui);
		await gui.start();
		gui.window.focus();
		return gui;
	}

	async devInstantiateUserStartedGUI(
		dev: NonNullable<ReturnType<DevAppParamsGetter>>,
		entrypoint: string|undefined
	): Promise<GUIComponent> {
		if (!entrypoint) {
			entrypoint = MAIN_GUI_ENTRYPOINT;
		}
		const component = userStartedComponentFrom(
			dev.params.manifest, entrypoint);
		const gui = await this.devMakeGUIComponent(
			dev, entrypoint, component, undefined
		);
		return gui;
	}

	private async devMakeGUIComponent(
		dev: NonNullable<ReturnType<DevAppParamsGetter>>,
		entrypoint: string,
		component: UserStartedComponent|GUIServiceComponent,
		guiParent: GUIComponent|undefined
	): Promise<GUIComponent> {
		const { manifest: { appDomain }, dir, url } = dev.params;
		const caps = dev.wrapCAPs(
			this.makeAppCAPs(appDomain, entrypoint, component)
		);
		let gui: GUIComponent;
		if (url) {
			gui = await DevAppInstanceFromUrl.makeForUrl(
				appDomain, url, entrypoint, caps, component.windowOpts, guiParent,
				this.titleMaker
			);
		} else {
			const appRoot = await DeviceFS.makeReadonly(dir);
			gui = await GUIComponent.make(
				appDomain, appRoot, entrypoint, caps, component.windowOpts,
				guiParent, true, this.titleMaker
			);
		}
		this.guiConnectors.connectW3N(gui.w3n, gui.window.webContents);
		this.register(gui);
		await gui.start();
		gui.window.focus();
		return gui;
	}

	private async makeDenoComponent(
		appRoot: ReadonlyFS, appDomain: string, entrypoint: string,
		service: string, component: ServiceComponent, devTools: boolean,
		wrapDevCAPs?: WrapAppCAPsAndSetup
	): Promise<DenoComponent> {
		let caps = this.makeAppCAPs(appDomain, entrypoint, component);
		if (wrapDevCAPs) {
			caps = wrapDevCAPs(caps);
		}
		const {
			connectInfo, connect
		} = await this.sockConnectors.createConnector();
		const deno = await DenoComponent.makeLoadConnectAndStart(
			appDomain, appRoot, entrypoint, caps, connectInfo, connect
		).catch((exc: FileException) => {
			if ((exc.type === 'file') && exc.notFound) {
				throw makeAppInitExc(appDomain, {}, {
					entrypoint, service,
					message: `Runtime '${component.runtime}' is unknown`
				});
			} else {
				throw exc;
			}
		});
		if (devTools) {
			deno.stdOut.pipe(process.stdout, { end: false });
			deno.stdErr.pipe(process.stderr, { end: false });
		}
		this.register(deno);
		return deno;
	}

	async closeAllApps(): Promise<void> {
		for (const app of this.apps.values()) {
			for (const gui of app.userStarted()) {
				gui.close();
			}
			for (const srv of app.serviceComponents()) {
				srv.close();
			}
		}
	}

	findService(appDomain: string, service: string): Service[]|undefined {
		const components = this.apps.get(appDomain);
		return (components ? components.serviceInstances(service) : undefined);
	}

	async instantiateService(
		caller: Component, appDomain: string, service: string, devTools: boolean
	): Promise<Service> {
		const { appRoot, manifest } = await this.getAppFiles(appDomain);
		const entrypoint = entrypointOfService(manifest, service);
		const component = manifest.components![entrypoint] as
			GUIServiceComponent|ServiceComponent;
		ensureCallerAllowed(
			appDomain, service,
			component.startedBy, caller.domain, caller.entrypoint
		);
		if (component.runtime === 'web-gui') {
			let parent: GUIComponent|undefined = undefined;
			if (caller.runtime === 'web-gui') {
				if ((component as GUIServiceComponent).childOfGUICaller) {
					parent = caller as GUIComponent;
				}
			} else if (!(component as GUIServiceComponent).allowNonGUICaller) {
				throw makeRPCException(appDomain, service, {
					callerNotAllowed: true
				}, {
					callerApp: caller.domain,
					callerComponent: caller.entrypoint,
					message: `Non-gui service can't call this service`
				});
			}
			const gui = await this.makeGUIComponent(
				appRoot, appDomain, entrypoint, component as GUIServiceComponent,
				devTools, parent
			);
			return gui.services![service];
		} else if (component.runtime === 'deno') {
			const deno = await this.makeDenoComponent(
				appRoot, appDomain, entrypoint, service, component, devTools
			);
			return deno.services![service];
		} else if (component.runtime === 'wasm,mp1') {
			// XXX
			throw new Error(`Starting ${component.runtime} component is not implemented, yet.`);
		} else {
			throw makeAppInitExc(manifest.appDomain, {}, {
				entrypoint, service,
				message: `Runtime '${component.runtime}' is unknown`
			});
		}
	}

	async devInstantiateService(
		caller: Component,
		dev: NonNullable<ReturnType<DevAppParamsGetter>>,
		service: string
	): Promise<Service> {
		const entrypoint = entrypointOfService(dev.params.manifest, service);
		const component = dev.params.manifest.components![entrypoint] as
			GUIServiceComponent|ServiceComponent;
		const appDomain = dev.params.manifest.appDomain;
		ensureCallerAllowed(
			appDomain, service,
			component.startedBy, caller.domain, caller.entrypoint
		);
		if (component.runtime === 'web-gui') {
			let parent: GUIComponent|undefined = undefined;
			if (caller.runtime === 'web-gui') {
				if ((component as GUIServiceComponent).childOfGUICaller) {
					parent = caller as GUIComponent;
				}
			} else if (!(component as GUIServiceComponent).allowNonGUICaller) {
				throw makeRPCException(appDomain, service, {
					callerNotAllowed: true
				}, {
					callerApp: caller.domain,
					callerComponent: caller.entrypoint,
					message: `Non-gui service can't call this service`
				});
			}
			const gui = await this.devMakeGUIComponent(
				dev, entrypoint, component as GUIServiceComponent, parent
			);
			return gui.services![service];
		} else if (component.runtime === 'deno') {
			const appRoot = await DeviceFS.makeReadonly(dev.params.dir);
			const deno = await this.makeDenoComponent(
				appRoot, appDomain, entrypoint, service, component, true,
				dev.wrapCAPs
			);
			return deno.services![service];
		} else if (component.runtime === 'wasm,mp1') {
			// XXX
			throw new Error(`Starting ${component.runtime} component is not implemented, yet.`);
		} else {
			throw makeAppInitExc(dev.params.manifest.appDomain, {}, {
				entrypoint, service,
				message: `Runtime '${component.runtime}' is unknown`
			});
		}
	}

}
Object.freeze(Components.prototype);
Object.freeze(Components);


async function appAndManifestOnDev(
	path: string
): ReturnType<typeof appAndManifestFrom> {
	const appFS = await DeviceFS.makeReadonly(path);
	return appAndManifestFrom(appFS);
}

function filterOutUserIds(
	w3n: web3n.startup.W3N, excIds: string[]
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
			startLoginToRemoteStorage: async (address) => {
				if (excIds.includes(toCanonicalAddress(address))) {
					throw new Error(`Already logged in`);
				}
				return w3n.signIn.startLoginToRemoteStorage(address);
			},
			useExistingStorage: async (address, pass, progressCB) => {
				if (excIds.includes(toCanonicalAddress(address))) {
					throw new Error(`Already logged in`);
				}
				return w3n.signIn.useExistingStorage(address, pass, progressCB);
			},
		},
		signUp: w3n.signUp
	};
}

function guiParentForService(
	appDomain: string, service: string, component: GUIServiceComponent,
	caller: GUIComponent
): GUIComponent|undefined {
	let parent: GUIComponent|undefined = undefined;
	if (caller.runtime === 'web-gui') {
		if (component.childOfGUICaller) {
			return caller;
		}
	} else if (!component.allowNonGUICaller) {
		// XXX 
		throw makeRPCException(appDomain, service, {
			callerNotAllowed: true
		}, {
			callerApp: caller.domain,
			callerComponent: caller.entrypoint,
			message: ``
		});
	}
}


Object.freeze(exports);