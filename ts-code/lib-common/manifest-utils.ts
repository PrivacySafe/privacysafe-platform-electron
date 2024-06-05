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
type GUIComponentDef = web3n.caps.GUIComponent;
type SrvDef = web3n.caps.ServiceComponent;
type GUISrvDef = web3n.caps.GUIServiceComponent;
type AllowedCallers = web3n.caps.AllowedCallers;

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
	if (manifest.components) {
		ensureComponentsSettings(manifest.components);
	}
}

function ensureComponentsSettings(components: AppManifest['components']): void {

	// XXX do an exhaustive check of components


}

export const MAIN_GUI_ENTRYPOINT = '/index.html';

export function userStartedComponentFrom(
	m: AppManifest, entrypoint: string
): GUIComponentDef {
	if (!m.components) {
		if (entrypoint !== MAIN_GUI_ENTRYPOINT) {
			throw componentNotFoundExc(m.appDomain, entrypoint);
		}
		return {
			runtime: 'web-gui',
			startedBy: 'user',
			capsRequested: m['capsRequested'],
			windowOpts: m['windowOpts'],
			name: (m.name ? m.name : m.appDomain),
			icon: m.icon
		};
	}

	const component = m.components[entrypoint] as GUIComponentDef;
	if (!component) {
		throw componentNotFoundExc(m.appDomain, entrypoint);
	}

	if ((component.startedBy !== 'user') || (component.runtime !== 'web-gui')) {
		throw makeRuntimeException<AppManifestException>('app-manifest', {
			entrypoint, wrongComponentType: true
		}, {});
	}

	if (!component.icon && m.icon) {
		component.icon = m.icon;
	}

	return component;
}

function componentNotFoundExc(
	domain: string, entrypoint: string
): AppManifestException {
	return makeRuntimeException<AppManifestException>('app-manifest', {
		domain, entrypoint, componentNotFound: true
	}, {});
}

export function getComponentForCommand(
	m: AppManifest, cmd: string
): { entrypoint: string; component: GUIComponentDef } {
	if (!m.components) { throw cmdNotFoundExc(m.appDomain, cmd); }
	for (const [entrypoint, def] of Object.entries(m.components)) {
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
	if (!m.components) { throw serviceNotFoundExc(m.appDomain, service); }
	for (const [entrypoint, def] of Object.entries(m.components)) {
		if (((def as GUISrvDef).service === service)
		|| ((def as SrvDef).services?.includes(service))) {
			return { entrypoint, component: def as SrvDef|GUISrvDef };
		}
	}
	throw serviceNotFoundExc(m.appDomain, service);;
}

function serviceNotFoundExc(
	domain: string, service: string
): AppManifestException {
	return makeRuntimeException<AppManifestException>('app-manifest', {
		domain, service, serviceNotFound: true
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


Object.freeze(exports);