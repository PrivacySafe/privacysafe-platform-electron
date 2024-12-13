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

import { Component, Service } from "./index";
import { getAllGUIComponents, getComponentForCommand, getComponentForService, getDefaultLauncher, getWebGUIComponent, isCallerAllowed, isMultiInstanceComponent, makeRPCException, makeShellCmdException, servicesImplementedBy, getComponentsForSystemStartup, getExposedFSResource, makeAppFSResourceException, getComponent } from "../lib-common/manifest-utils";
import { NamedProcs } from "../lib-common/processes/named-procs";
import { WrapAppCAPsAndSetup } from "../test-stand";
import { DevAppInstanceFromUrl, GUIComponent, TitleGenerator } from "./gui-component";
import { CoreDriver } from "../core";
import { ScreenGUIPlacements } from "../window-utils/screen-gui-placements";
import { assert } from "../lib-common/assert";
import { ElectronIPCConnectors, SocketIPCConnectors } from "../core/w3n-connectors";
import { makeAppInitExc } from "../system/system-places";
import { DenoComponent } from "./deno-component";
import { PostponedValuesFixedKeysMap } from "../lib-common/postponed-values-map";
import { wrapWithTimeout } from "../lib-common/processes/timeouts";


type ReadonlyFS = web3n.files.ReadonlyFS;
type WritableFS = web3n.files.WritableFS;
type AppManifest = web3n.caps.AppManifest;
type AppComponent = web3n.caps.AppComponent;
type Runtime = web3n.caps.Runtime;
type CmdParams = web3n.shell.commands.CmdParams;
type GUIComponentDef = web3n.caps.GUIComponent;
type SrvDef = web3n.caps.ServiceComponent;
type GUISrvDef = web3n.caps.GUIServiceComponent;
type FileException = web3n.files.FileException;
type GetFSResource = web3n.shell.GetFSResource;
type OpenConnectionInfo = web3n.system.monitor.OpenConnectionInfo;

export type GetAppStorage = (type: 'local'|'synced') => Promise<WritableFS>;


export class App {

	/**
	 * array is used for components that are multi-instance, even if there is
	 * only one instance at the moment
	 */
	private readonly instances = new Map<string, Component|Set<Component>>();
	/**
	 * entrypoints are id's of processes that change number of components
	 */
	private readonly startProcs = new NamedProcs();
	private canStartComponents = true;

	private readonly devTools: boolean;

	constructor(
		private readonly manifest: AppManifest,
		private readonly appRoot: ReadonlyFS,
		private readonly makeAppCAPs: CoreDriver['makeCAPsForAppComponent'],
		private readonly getAppStorage: GetAppStorage,
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly sockConnectors: SocketIPCConnectors,
		private readonly guiPlacement: ScreenGUIPlacements,
		private readonly titleMaker: TitleGenerator,
		devTools: boolean,
		private readonly devRootUrl: string|undefined,
		private readonly devCAPsWrapper: WrapAppCAPsAndSetup|undefined,
		private readonly removeThisFromLiveApps: () => void
	) {
		this.devTools = devTools || !!this.devCAPsWrapper;
		Object.seal(this);
	}

	async handleCmd(
		cmd: CmdParams, callerApp: string, callerComponent: string
	): Promise<void> {
		const { entrypoint, component } = this.componentForCmd(cmd.cmd);
		this.ensureCmdCallerIsAllowed(
			component, cmd.cmd, callerApp, callerComponent
		);
		await this.whenNoStartProc(entrypoint);
		const existing = this.instances.get(entrypoint) as GUIComponent;
		if (existing && !isMultiInstanceComponent(component)) {
			this.ensureCmdHandlePresence(existing, cmd.cmd);
			existing.cmdsHandler!.handle(
				cmd, callerApp, callerComponent
			);
			existing.window.focus();
			return;
		}
		await this.syncStartProc(
			entrypoint,
			this.makeAndStartGUIComponentInstance(
				entrypoint, component, cmd, undefined
			)
		);
	}

	private componentForCmd(cmd: string): {
		component: GUIComponentDef; entrypoint: string;
	} {
		const c = getComponentForCommand(this.manifest, cmd);
		if (c) {
			return c;
		} else {
			throw makeShellCmdException(this.manifest.appDomain, cmd, {
				cmdNotFound: true
			});
		}
	}

	private ensureCmdCallerIsAllowed(
		component: GUIComponentDef, cmd: string,
		callerApp: string, callerComponent: string
	): void {
		const appDomain = this.manifest.appDomain;
		if (!isCallerAllowed(
			appDomain, component.startCmds![cmd], callerApp, callerComponent
		)) {
			throw makeShellCmdException(appDomain, cmd, {
				callerNotAllowed: true
			});
		}
	}

	private ensureCmdHandlePresence(
		existing: GUIComponent, cmd: string
	): void {
		if (!existing.cmdsHandler!.canHandleCmd(cmd)) {
			throw makeShellCmdException(this.manifest.appDomain, cmd, {
				cause: `Command handler is not found on implementation`
			});
		}
	}	

	private async syncStartProc<T>(
		entrypoint: string, proc: Promise<T>
	): Promise<T> {
		return wrapWithTimeout(
			this.startProcs.addStarted(entrypoint, proc),
			10000,
			() => `Timeout reached in starting ${this.manifest.appDomain}${entrypoint}`
		)
	}

	private async whenNoStartProc(entrypoint: string): Promise<void> {
		while (this.startProcs.getP(entrypoint)) {
			await this.startProcs.getP(entrypoint);
		}
	}

	private ensureCanStartComponent(): void {
		if (!this.canStartComponents) {
			throw new Error(`Can't start component, cause app is closed`);
		}
	}

	async handleCmdFromUser(cmd: CmdParams, devTools: boolean): Promise<void> {
		const { entrypoint, component } = this.componentForCmd(cmd.cmd);
		await this.whenNoStartProc(entrypoint);
		const existing = this.instances.get(entrypoint) as GUIComponent;
		if (existing && !isMultiInstanceComponent(component)) {
			this.ensureCmdHandlePresence(existing, cmd.cmd);
			existing.cmdsHandler!.handleFromUser(cmd);
			existing.window.focus();
			return;
		}
		await this.syncStartProc(
			entrypoint,
			this.makeAndStartGUIComponentInstance(
				entrypoint, component, cmd, undefined, devTools
			)
		);
	}

	async launchWebGUI(entrypoint: string, devTools: boolean): Promise<void> {
		const component = getWebGUIComponent(this.manifest, entrypoint);
		await this.launchComponent(entrypoint!, component, devTools);
	}

	private async launchComponent(
		entrypoint: string, component: AppComponent, devTools?: boolean
	): Promise<void> {
		await this.whenNoStartProc(entrypoint);
		const existing = this.instances.get(entrypoint);
		if (existing && !isMultiInstanceComponent(component)) {
			(existing as GUIComponent)?.window?.focus();
			return;
		}
		if (component.runtime === 'web-gui') {
			await this.syncStartProc(
				entrypoint,
				this.makeAndStartGUIComponentInstance(
					entrypoint, component as GUIComponentDef, undefined, undefined,
					devTools
				)
			);
		} else if (component.runtime === 'deno') {
			await this.syncStartProc(
				entrypoint,
				this.makeAndStartDenoComponentInstance(entrypoint, component)
			);

		}
	}

	async loadOnStartup(): Promise<void> {
		const toStart = getComponentsForSystemStartup(this.manifest)
		if (!toStart) {
			return;
		}
		for (const { entrypoint, component } of toStart) {
			await this.launchComponent(entrypoint!, component, this.devTools)
		}
	}

	private async makeAndStartGUIComponentInstance(
		entrypoint: string, component: GUIComponentDef|GUISrvDef,
		startCmd: CmdParams|undefined, guiParent: GUIComponent|undefined,
		devTools?: boolean
	): Promise<GUIComponent> {
		this.ensureCanStartComponent();
		const { appDomain, version } = this.manifest;
		let caps = this.makeAppCAPs(
			appDomain, version, entrypoint, component, startCmd
		);
		if (this.devCAPsWrapper) {
			caps = this.devCAPsWrapper(entrypoint, caps);
		}
		const {
			windowOpts, watchWindowGeometry
		} = await this.guiPlacement.windowLocationFor(
			appDomain, entrypoint, component.windowOpts, guiParent?.window
		);
		const services = servicesContainerFor(this.manifest, entrypoint);
		let gui:GUIComponent;
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
		this.guiConnectors.connectW3N(gui.w3n, gui.window.webContents);
		if (watchWindowGeometry) {
			watchWindowGeometry(gui.window);
		}
		this.addToInstances(entrypoint, component, gui);
		await gui.start();
		gui.window.focus();
		return gui;
	}

	private addToInstances(
		entrypoint: string, component: GUIComponentDef|GUISrvDef|SrvDef,
		instance: Component
	): void {
		if (isMultiInstanceComponent(component as GUIComponentDef)) {
			let set = this.instances.get(entrypoint) as Set<Component>|undefined;
			if (set) {
			} else {
				set = new Set();
				this.instances.set(entrypoint, set);
			}
			set.add(instance);
		} else {
			assert(!this.instances.has(entrypoint));
			this.instances.set(entrypoint, instance);
		}
		instance.setCloseListener(
			() => this.removeFromInstances(entrypoint, instance)
		);
	}

	private removeFromInstances(entrypoint: string, instance: Component): void {
		let slotValue = this.instances.get(entrypoint);
		if (!slotValue) {
			return;
		} else if (slotValue === instance) {
			this.instances.delete(entrypoint);
		} else {
			(slotValue as Set<Component>).delete(instance);
			if ((slotValue as Set<Component>).size === 0) {
				this.instances.delete(entrypoint);
			}
		}
		if ((this.instances.size === 0) && !this.startProcs.hasProcs()) {
			this.stopAndClose();
		}
	}

	async getServiceToHandleCall(
		caller: Component, service: string
	): Promise<Service> {
		const appDomain = this.manifest.appDomain;
		const c = getComponentForService(this.manifest, service);
		if (!c) {
			throw makeRPCException(appDomain, service, { serviceNotFound: true });
		}
		const { entrypoint, component } = c;
		if (!isCallerAllowed(
			appDomain, component.services[service],
			caller.domain, caller.entrypoint
		)) {
			throw makeRPCException(
				appDomain, service,
				{ callerNotAllowed: true },
				{ callerApp: caller.domain, callerComponent: caller.entrypoint }
			);
		}	
		await this.whenNoStartProc(entrypoint);
		const existing = this.instances.get(entrypoint);
		if (existing && !isMultiInstanceComponent(component)) {
			(existing as GUIComponent).window?.focus();
			return (existing as Component).getService(service);
		}
		return await this.syncStartProc(
			entrypoint,
			this.makeAndStartServiceComponentInstance(
				caller, service, component, entrypoint
			).then(c => c.getService(service))
		);
	}

	private async makeAndStartServiceComponentInstance(
		caller: Component, service: string,
		component: SrvDef, entrypoint: string
	): Promise<GUIComponent|DenoComponent> {
		this.ensureCanStartComponent();
		const appDomain = this.manifest.appDomain;
		if (component.runtime === 'web-gui') {
			const parent = ((
				(caller.runtime === 'web-gui') &&
				(component as GUISrvDef).childOfGUICaller) ?
				caller as GUIComponent : undefined
			);
			return this.makeAndStartGUIComponentInstance(
				entrypoint, component as GUISrvDef, undefined, parent
			);
		} else if (component.runtime === 'deno') {
			return this.makeAndStartDenoComponentInstance(entrypoint, component);
		} else if (component.runtime === 'wasm,mp1') {
			// XXX
			throw new Error(`Starting ${component.runtime} component is not implemented, yet.`);
		} else {
			throw makeAppInitExc(appDomain, {}, {
				entrypoint, service,
				message: `Runtime '${component.runtime}' is unknown`
			});
		}

	}

	private async makeAndStartDenoComponentInstance(
		entrypoint: string, component: SrvDef
	): Promise<DenoComponent> {
		const { appDomain, version } = this.manifest;
		let caps = this.makeAppCAPs(
			appDomain, version, entrypoint, component, undefined
		);
		if (this.devCAPsWrapper) {
			caps = this.devCAPsWrapper(entrypoint, caps);
		}
		const {
			connectInfo, connect
		} = await this.sockConnectors.createConnector();
		if (this.devTools) {
			console.log(`▶️ ${appDomain}${entrypoint} component starts
			`);
		}
		const services = servicesContainerFor(this.manifest, entrypoint);
		const deno = await DenoComponent.makeLoadConnectAndStart(
			appDomain, this.appRoot, entrypoint, caps, connectInfo, connect,
			services
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

	get version(): string {
		return this.manifest.version;
	}

	get appId(): string {
		return this.manifest.appDomain;
	}

	updateTitlesOnGUIComponents(): void {
		for (const {
			entrypoint, component
		} of getAllGUIComponents(this.manifest)) {
			this.instances.get(entrypoint)
		}
	}

	get isClosed(): boolean {
		return !this.canStartComponents;
	}

	async stopAndClose(): Promise<void> {
		this.canStartComponents = false;
		this.removeThisFromLiveApps();
		for (const inst of this.instances.values()) {
			if ((inst as Component).close) {
				(inst as Component).close();
			} else {
				for (const c of (inst as Set<Component>)) {
					c.close();
				}
			}
		}
	}

	async exposedFSResource(
		resourceName: string, requestingApp: string, requestingComponent: string
	): ReturnType<GetFSResource> {
		const {
			appStorage, itemType, path, initValueSrc
		} = getExposedFSResource(
			this.manifest, resourceName, requestingApp, requestingComponent
		);
		const fs = await this.getAppStorage(appStorage);
		if (itemType === 'file') {
			return await fs.readonlyFile(path)
			.catch(async (exc: FileException) => {
				if (!exc.notFound) {
					throw exc;
				} else if (!initValueSrc) {
					throw makeAppFSResourceException(
						this.manifest.appDomain, resourceName,
						requestingApp, requestingComponent, {
							resourceNotInitialized: true
						}
					);
				}
				await this.syncFsInitProc(
					resourceName,
					() => copyFile(this.appRoot, initValueSrc, fs, path)
				);
				return fs.readonlyFile(path);
			});
		} else if (itemType === 'folder') {
			return await fs.readonlySubRoot(path)
			.catch(async (exc: FileException) => {
				if (!exc.notFound) {
					throw exc;
				} else if (!initValueSrc) {
					throw makeAppFSResourceException(
						this.manifest.appDomain, resourceName,
						requestingApp, requestingComponent, {
							resourceNotInitialized: true
						}
					);
				}
				await this.syncFsInitProc(
					resourceName,
					() => copyFolder(this.appRoot, initValueSrc, fs, path)
				);
				return fs.readonlySubRoot(path);
			});
		} else {
			throw new Error(`Unknown fs resource type ${itemType}`);
		}
	}

	private syncFsInitProc(
		resourceName: string, action: () => Promise<void>
	): Promise<void> {
		const procId = `init-fs-resource:${resourceName}`;
		const proc = this.startProcs.getP(procId) as Promise<void>|undefined;
		return (proc ? proc : this.startProcs.startOrChain(procId, action));
	}

	/**
	 * Info list of open instances of this app's components.
	 */
	get openInstances(): {
		entrypoint: string; runtime: Runtime; numOfInstances: number;
	}[] {
		return Array.from(this.instances.entries())
		.map(([ entrypoint, compOrSet]) => ({
			entrypoint,
			runtime: getComponent(this.manifest, entrypoint).runtime,
			numOfInstances: ((compOrSet as Component).domain ?
				1 : (compOrSet as Set<Component>).size
			)
		}));
	}

	/**
	 * Info list of open connection to this app's services.
	 * If this app has no exposed services, undefined is returned.
	 */
	get openSrvConnections(): OpenConnectionInfo[]|undefined {
		let info: OpenConnectionInfo[]|undefined = undefined;
		for (const compOrSet of this.instances.values()) {
			if (!compOrSet) {
				return;
			} else if ((compOrSet as Component).domain) {
				const conns = (compOrSet as Component).listServiceConnections();
				if (conns) {
					if (!info) {
						info = conns;
					} else if (conns.length > 0) {
						info.push(...conns);
					}
				}
			} else {
				for (const component of (compOrSet as Set<Component>)) {
					const conns = component.listServiceConnections();
					if (conns) {
						if (!info) {
							info = conns;
						} else if (conns.length > 0) {
							info.push(...conns);
						}
					}
				}
			}
		}
		return info;
	}

}
Object.freeze(App.prototype);
Object.freeze(App);


function servicesContainerFor(
	manifest: AppManifest, entrypoint: string
): PostponedValuesFixedKeysMap<string, Service>|undefined {
	const services = servicesImplementedBy(manifest, entrypoint);
	return (services ? new PostponedValuesFixedKeysMap(services) : undefined);
}

async function copyFile(
	src: ReadonlyFS, srcPath: string, dst: WritableFS, dstPath: string
): Promise<void> {
	const bytes = await src.readBytes(srcPath);
	await dst.writeBytes(dstPath, (bytes ? bytes : new Uint8Array(0)));
}

async function copyFolder(
	src: ReadonlyFS, srcPath: string, dst: WritableFS, dstPath: string
): Promise<void> {
	const lst = await src.listFolder(srcPath);
	await dst.makeFolder(dstPath);
	for (const { name, isFile, isFolder } of lst) {
		if (isFile) {
			await copyFile(src, `${srcPath}/${name}`, dst, `${dstPath}/${name}`);
		} else if (isFolder) {
			await copyFolder(src, `${srcPath}/${name}`, dst, `${dstPath}/${name}`);
		} else {
			throw new Error(`${srcPath}/${name} for initial fs resource value is neither file, nor folder`);
		}
	}
}
