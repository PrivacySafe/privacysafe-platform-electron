/*
 Copyright (C) 2021 - 2022, 2024 3NSoft Inc.
 
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

import { makeRuntimeException } from './exceptions/runtime';

type AppManifest = web3n.caps.AppManifest;
type GeneralAppManifest = web3n.caps.GeneralAppManifest;
type SimpleGUIAppManifest = web3n.caps.SimpleGUIAppManifest;
type GUIComponentDef = web3n.caps.GUIComponent;
type SrvDef = web3n.caps.ServiceComponent;
type GUISrvDef = web3n.caps.GUIServiceComponent;
type AllowedCallers = web3n.caps.AllowedCallers;
type LauncherDef = web3n.caps.Launcher;
type RPCException = web3n.rpc.RPCException;


export interface AppManifestException extends web3n.RuntimeException {
	type: 'app-manifest',
	domain: string;
	componentNotFound?: true;
	entrypoint?: string;
	wrongComponentType?: true;
	serviceNotFound?: true;
	service?: string;
	commandNotFound?: true;
	command?: string;
}

export async function checkAppManifest(
	manifest: AppManifest, appDomain: string, version: string
): Promise<void> {
	if (manifest.appDomain !== appDomain) {
		throw makeRuntimeException<AppManifestException>('app-manifest', {
			message: `Domain value ${manifest.appDomain} in manifest doesn't match expected value ${appDomain}`
		}, {});
	}
	if (manifest.version !== version) {
		throw makeRuntimeException<AppManifestException>('app-manifest', {
			message: `Version value ${manifest.version} in manifest doesn't match expected value ${version}`
		}, {});
	}
	if ((manifest as GeneralAppManifest).components) {
		ensureComponentsSettings((manifest as GeneralAppManifest).components);
	}
}

function ensureComponentsSettings(
	components: GeneralAppManifest['components']
): void {

	// XXX do an exhaustive check of components


}

function isSimpleGUIAppManifest(m: AppManifest): boolean {
	return !(m as GeneralAppManifest).components;
}

export const MAIN_GUI_ENTRYPOINT = '/index.html';

export function getWebGUIComponent(
	m: AppManifest, entrypoint: string
): GUIComponentDef {
	if (!(m as GeneralAppManifest).components) {
		if (entrypoint !== MAIN_GUI_ENTRYPOINT) {
			throw componentNotFoundExc(m.appDomain, entrypoint);
		}
		return makeComponentForSimpleGUIApp(m);
	}

	const component = (m as GeneralAppManifest).components[entrypoint] as GUIComponentDef;
	if (!component) {
		throw componentNotFoundExc(m.appDomain, entrypoint);
	}

	if (component.runtime !== 'web-gui') {
		throw makeRuntimeException<AppManifestException>('app-manifest', {
			entrypoint, wrongComponentType: true
		}, {});
	}

	if (!component.icon && m.icon) {
		component.icon = m.icon;
	}

	return component;
}

function makeComponentForSimpleGUIApp(
	m: SimpleGUIAppManifest
): GUIComponentDef {
	return {
		runtime: 'web-gui',
		capsRequested: (m as SimpleGUIAppManifest)['capsRequested'],
		windowOpts: m['windowOpts'],
		name: (m.name ? m.name : m.appDomain),
		icon: m.icon
	};
}

function componentNotFoundExc(
	domain: string, entrypoint: string
): AppManifestException {
	return makeRuntimeException<AppManifestException>('app-manifest', {
		domain, entrypoint, componentNotFound: true
	}, {});
}

export function getDefaultLauncher(m: AppManifest): LauncherDef {
	return (isSimpleGUIAppManifest(m) ?
		makeLauncherForSimpleGUIApp(m as SimpleGUIAppManifest) :
		makeLauncherForGeneralAppManifest(m as GeneralAppManifest)
	);
}

function makeLauncherForSimpleGUIApp(m: SimpleGUIAppManifest): LauncherDef {
	return {
		component: MAIN_GUI_ENTRYPOINT,
		icon: m.icon,
		name: m.name,
		description: m.description
	};
}

function makeLauncherForGeneralAppManifest(m: GeneralAppManifest): LauncherDef {
	if (m.launchers && (m.launchers.length > 0)) {
		throw new Error(`${m.appDomain} manifest already has launcher, and one of those should be used.`);
	}
	if (!m.components[MAIN_GUI_ENTRYPOINT]) {
		throw new Error(`${m.appDomain} manifest has no component '${MAIN_GUI_ENTRYPOINT}' that can be used with a default launcher.`);
	}
	return {
		component: MAIN_GUI_ENTRYPOINT,
		icon: m.icon,
		name: m.name,
		description: m.description
	};
}

export function getComponentForCommand(
	m: AppManifest, cmd: string
): { entrypoint: string; component: GUIComponentDef } {
	if (!(m as GeneralAppManifest).components) {
		throw cmdNotFoundExc(m.appDomain, cmd);
	}
	for (const [entrypoint, def] of Object.entries(
		(m as GeneralAppManifest).components
	)) {
		if ((def as GUIComponentDef).startCmds
		&& (def as GUIComponentDef).startCmds![cmd]) {
			return { entrypoint, component: def as GUIComponentDef };
		}
	}
	throw cmdNotFoundExc(m.appDomain, cmd);;
}

function cmdNotFoundExc(
	domain: string, command: string
): AppManifestException {
	return makeRuntimeException<AppManifestException>('app-manifest', {
		domain, command, commandNotFound: true
	}, {});
}

export function getComponentForService(
	m: AppManifest, service: string
): { entrypoint: string; component: SrvDef|GUISrvDef } {
	if (!(m as GeneralAppManifest).components) {
		throw serviceNotFoundExc(m.appDomain, service);
	}
	for (const [entrypoint, def] of Object.entries(
		(m as GeneralAppManifest).components)
	) {
		if (!(def as SrvDef).services) {
			continue;
		}
		if ((def as SrvDef).services.includes(service)) {
			return { entrypoint, component: def as SrvDef|GUISrvDef };
		}
	}
	throw serviceNotFoundExc(m.appDomain, service);;
}

export function getAllGUIComponents(
	m: AppManifest
): { entrypoint: string; component: GUIComponentDef|GUISrvDef; }[] {
	if (isSimpleGUIAppManifest(m)) {
		return [ {
			entrypoint: MAIN_GUI_ENTRYPOINT,
			component: makeComponentForSimpleGUIApp(m)
		} ];
	}
	const lst: ReturnType<typeof getAllGUIComponents> = [];
	for (const [ entrypoint, c ] of Object.entries(
		(m as GeneralAppManifest).components
	)) {
		if (c.runtime === 'web-gui') {
			lst.push({ entrypoint, component: c as GUIComponentDef|GUISrvDef });
		}
	}
	return lst;
}

function serviceNotFoundExc(
	appDomain: string, service: string
): RPCException {
	return makeRuntimeException<RPCException>('rpc', {
		appDomain, service, serviceNotFound: true
	}, {});
}

export function isCallerAllowed(
	appDomain: string, conf: AllowedCallers,
	callerApp: string, callerComponent: string
): boolean {
	if (conf && (typeof conf === 'object')) {
		if (appDomain === callerApp) {
			if (Array.isArray(conf.thisAppComponents)) {
				if (conf.thisAppComponents.includes(callerComponent)) {
					return true;
				}
			} else if (conf.thisAppComponents === '*') {
				return true;
			}
		} else {
			if (Array.isArray(conf.otherApps)) {
				if (conf.otherApps.includes(callerApp)) {
					return true;
				}
			} else if (conf.otherApps === '*') {
				return true;
			}
		}
	}
	return false;
}

export function isMultiInstanceComponent(
	c: GUIComponentDef|GUISrvDef|SrvDef
) {
	if ((c as GUIComponentDef).multiInstances) {
		return true;
	} else if ((c as GUISrvDef|SrvDef).forOneConnectionOnly) {
		return true;
	} else {
		return false;
	}
}


Object.freeze(exports);