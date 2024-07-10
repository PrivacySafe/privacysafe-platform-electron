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

import { Component, Service, makeShellCmdException } from "./index";
import { getAllGUIComponents, getComponentForCommand, getComponentForService, getDefaultLauncher, getWebGUIComponent, isCallerAllowed, isMultiInstanceComponent } from "../lib-common/manifest-utils";
import { NamedProcs } from "../lib-common/processes";
import { WrapAppCAPsAndSetup } from "../test-stand";
import { DevAppInstanceFromUrl, GUIComponent, TitleGenerator } from "./gui-component";
import { CoreDriver } from "../core/core-driver";
import { ScreenGUIPlacements } from "../window-utils/screen-gui-placements";
import { assert } from "../lib-common/assert";
import { ElectronIPCConnectors, SocketIPCConnectors } from "../core/w3n-connectors";
import { ensureCallerAllowed, makeRPCException } from "../rpc";
import { makeAppInitExc } from "../apps/installer/system-places";
import { DenoComponent } from "./deno-component";


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
		const {
			entrypoint, component
		} = getComponentForCommand(this.manifest, cmd.cmd);
		const appDomain = this.manifest.appDomain;
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
			appDomain,entrypoint, component.windowOpts, guiParent?.window
		);
		let gui:GUIComponent;
		if (this.devRootUrl) {
			gui = await DevAppInstanceFromUrl.makeForUrl(
				appDomain, this.devRootUrl, entrypoint, caps,
				windowOpts, component.icon, guiParent, this.titleMaker
			);
		} else {
			gui = await GUIComponent.make(
				appDomain, this.appRoot, entrypoint, caps,
				windowOpts, component.icon, guiParent,
				this.devTools, this.titleMaker
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
		const {
			entrypoint, component
		} = getComponentForService(this.manifest, service);
		ensureCallerAllowed(
			appDomain, service, component.allowedCallers,
			caller.domain, caller.entrypoint
		);
		await this.whenNoStartProc(entrypoint);
		const existing = this.instances.get(entrypoint);

// DEBUG
// console.log(`existing instance is`, existing, `
// `);

		if (existing && !isMultiInstanceComponent(component)) {
			(existing as GUIComponent).window?.focus();
			return (existing as Component).services![service];
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
		component: GUISrvDef|SrvDef, entrypoint: string
	): Promise<Service> {
		this.ensureCanStartComponent();
		const appDomain = this.manifest.appDomain;
		if (component.runtime === 'web-gui') {
			let parent: GUIComponent|undefined = undefined;
			if (caller.runtime === 'web-gui') {
				if ((component as GUISrvDef).childOfGUICaller) {
					parent = caller as GUIComponent;
				}
			} else if (!(component as GUISrvDef).allowNonGUICaller) {
				throw makeRPCException(
					appDomain, service, {
						callerNotAllowed: true
					}, {
						callerApp: caller.domain,
						callerComponent: caller.entrypoint,
						message: `Non-gui service can't call this service`
					}
				);
			}
			const gui = await this.makeAndStartGUIComponentInstance(
				entrypoint, component as GUISrvDef, undefined, undefined
			);
			return gui.services![service];
		} else if (component.runtime === 'deno') {
			const deno = await this.makeAndStartDenoComponentInstance(
				entrypoint, service, component
			);
			return deno.services![service];
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
			console.log(`▶️ ${appDomain}${entrypoint} service ${service} starts`);
		}
		const deno = await DenoComponent.makeLoadConnectAndStart(
			appDomain, this.appRoot, entrypoint, caps, connectInfo, connect
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
			deno.stdOut.on('data', chunk => console.log(`${
				appDomain}${entrypoint} pid ${deno.pid ? deno.pid : '**'}: ${chunk}
			`));
			deno.stdErr.on('data', chunk => console.error(`${
				appDomain}${entrypoint} pid ${deno.pid ? deno.pid : '**'}: ${chunk}
			`));
			deno.setCloseListener(() => console.log(`🏁 ${
				appDomain}${entrypoint} pid ${deno.pid ? deno.pid : '**'} exited
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
