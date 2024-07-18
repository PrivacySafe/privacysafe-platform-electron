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
import { getAllGUIComponents, getComponentForCommand, getComponentForService, getDefaultLauncher, getWebGUIComponent, isCallerAllowed, isMultiInstanceComponent, makeRPCException, makeShellCmdException, servicesImplementedBy } from "../lib-common/manifest-utils";
import { NamedProcs } from "../lib-common/processes/named-procs";
import { WrapAppCAPsAndSetup } from "../test-stand";
import { DevAppInstanceFromUrl, GUIComponent, TitleGenerator } from "./gui-component";
import { CoreDriver } from "../core/core-driver";
import { ScreenGUIPlacements } from "../window-utils/screen-gui-placements";
import { assert } from "../lib-common/assert";
import { ElectronIPCConnectors, SocketIPCConnectors } from "../core/w3n-connectors";
import { makeAppInitExc } from "../apps/installer/system-places";
import { DenoComponent } from "./deno-component";
import { PostponedValuesFixedKeysMap } from "../lib-common/postponed-values-map";


type ReadonlyFS = web3n.files.ReadonlyFS;
type AppManifest = web3n.caps.AppManifest;
type CmdParams = web3n.shell.commands.CmdParams;
type GUIComponentDef = web3n.caps.GUIComponent;
type SrvDef = web3n.caps.ServiceComponent;
type GUISrvDef = web3n.caps.GUIServiceComponent;
type FileException = web3n.files.FileException;


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
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly sockConnectors: SocketIPCConnectors,
		private readonly guiPlacement: ScreenGUIPlacements,
		private readonly titleMaker: TitleGenerator,
		devTools: boolean,
		private readonly devRootUrl: string|undefined,
		private readonly devCAPsWrapper: WrapAppCAPsAndSetup|undefined
	) {
		this.devTools = devTools || !!this.devCAPsWrapper;
		Object.seal(this);
	}

	async handleCmd(
		cmd: CmdParams, callerApp: string, callerComponent: string
	): Promise<void> {
		const appDomain = this.manifest.appDomain;
		const c = getComponentForCommand(this.manifest, cmd.cmd);
		if (!c) {
			throw makeShellCmdException(appDomain, cmd.cmd, { cmdNotFound: true });
		}
		const { entrypoint, component } = c;
		if (!isCallerAllowed(
			appDomain, component.startCmds![cmd.cmd], callerApp, callerComponent
		)) {
			throw makeShellCmdException(appDomain, cmd.cmd, {
				callerNotAllowed: true
			});
		}
		await this.whenNoStartProc(entrypoint);
		const existing = this.instances.get(entrypoint);
		if (existing && !isMultiInstanceComponent(component)) {

			// XXX pass command into existing, and do something else if it can't,
			//     or there may be some other handler setup and dynamic?
			(existing as GUIComponent).cmdsHandler!.canHandleCmd(cmd.cmd);

			(existing as GUIComponent).cmdsHandler!.handle(
				cmd, callerApp, callerComponent
			);
			(existing as GUIComponent).window.focus();
			return;
		}
		await this.startProcs.addStarted(
			entrypoint!,
			this.makeAndStartGUIComponentInstance(
				entrypoint!, component, cmd, undefined
			)
		);
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

	async launchDefault(): Promise<void> {
		const { component: entrypoint  } = getDefaultLauncher(this.manifest);
		const component = getWebGUIComponent(this.manifest, entrypoint!);
		await this.whenNoStartProc(entrypoint!);
		const existing = this.instances.get(entrypoint!);
		if (existing && !isMultiInstanceComponent(component)) {
			(existing as GUIComponent).window.focus();
			return;
		}
		await this.startProcs.addStarted(
			entrypoint!,
			this.makeAndStartGUIComponentInstance(
				entrypoint!, component, undefined, undefined
			)
		);
	}

	private async makeAndStartGUIComponentInstance(
		entrypoint: string, component: GUIComponentDef|GUISrvDef,
		startCmd: CmdParams|undefined, guiParent: GUIComponent|undefined
	): Promise<GUIComponent> {
		this.ensureCanStartComponent();
		const appDomain = this.manifest.appDomain;
		let caps = this.makeAppCAPs(appDomain, entrypoint, component, startCmd);
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
				windowOpts, component.icon, guiParent, this.titleMaker, services
			);
		} else {
			gui = await GUIComponent.make(
				appDomain, this.appRoot, entrypoint, caps,
				windowOpts, component.icon, guiParent,
				this.devTools, this.titleMaker, services
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
// DEBUG
// console.log(`🧐 ${existing ? `have` : `there is no`} existing component to provide ${service} from ${this.domain}
// `);
		if (existing && !isMultiInstanceComponent(component)) {
			(existing as GUIComponent).window?.focus();
			return (existing as Component).getService(service);
		}
		return await this.startProcs.addStarted(
			entrypoint,
			this.makeAndStartComponentServiceInstance(
				caller, service, component, entrypoint
			)
		);
	}

	private async makeAndStartComponentServiceInstance(
		caller: Component, service: string,
		component: SrvDef, entrypoint: string
	): Promise<Service> {
		this.ensureCanStartComponent();
		const appDomain = this.manifest.appDomain;
		if (component.runtime === 'web-gui') {
			const parent = ((
				(caller.runtime === 'web-gui') &&
				(component as GUISrvDef).childOfGUICaller) ?
				caller as GUIComponent : undefined
			);
			const gui = await this.makeAndStartGUIComponentInstance(
				entrypoint, component as GUISrvDef, undefined, parent
			);
			return gui.getService(service);
		} else if (component.runtime === 'deno') {
			const deno = await this.makeAndStartDenoComponentInstance(
				entrypoint, service, component
			);
			return deno.getService(service);
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
		entrypoint: string, service: string, component: SrvDef
	): Promise<DenoComponent> {
		const appDomain = this.manifest.appDomain;
		let caps = this.makeAppCAPs(appDomain, entrypoint, component, undefined);
		if (this.devCAPsWrapper) {
			caps = this.devCAPsWrapper(entrypoint, caps);
		}
		const {
			connectInfo, connect
		} = await this.sockConnectors.createConnector();
		if (this.devTools) {
			console.log(`▶️ 🏁 ${appDomain}${entrypoint} component starts, on request to provide service ${service}
			`);
		}
		const services = servicesContainerFor(this.manifest, entrypoint);
		const deno = await DenoComponent.makeLoadConnectAndStart(
			appDomain, this.appRoot, entrypoint, caps, connectInfo, connect,
			services
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
				appDomain}${entrypoint} pid ${pidStr} exited (code: ${code}, signal: ${signal})
			`));
		}
		this.addToInstances(entrypoint, component, deno);
		return deno;
	}

	get version(): string {
		return this.manifest.version;
	}

	get domain(): string {
		return this.manifest.appDomain;
	}

	updateTitlesOnGUIComponents(): void {
		for (const {
			entrypoint, component
		} of getAllGUIComponents(this.manifest)) {
			this.instances.get(entrypoint)
		}
	}

	async stopAndClose(): Promise<void> {
		this.canStartComponents = false;
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

}
Object.freeze(App.prototype);
Object.freeze(App);


function servicesContainerFor(
	manifest: AppManifest, entrypoint: string
): PostponedValuesFixedKeysMap<string, Service>|undefined {
	const services = servicesImplementedBy(manifest, entrypoint);
	return (services ? new PostponedValuesFixedKeysMap(services) : undefined);
}
