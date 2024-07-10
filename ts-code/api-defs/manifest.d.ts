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

/// <reference path="../../node_modules/core-3nweb-client-lib/build/api-defs/common-caps.d.ts" />

declare namespace web3n.caps {

	type AppManifest = GeneralAppManifest | SimpleGUIAppManifest;

	interface GeneralAppManifest {
		appDomain: string;
		version: string;
		name: string;
		description: string;
		icon: string;
		components: {
			[entrypoint: string]: AppComponent;
		};
		launchers?: Launcher[];
	}

	interface SimpleGUIAppManifest {
		appDomain: string;
		version: string;
		name: string;
		description: string;
		icon: string;
		windowOpts?: ui.WindowOptions;
		capsRequested?: RequestedCAPs;
		sharedLibs?: SharedLibInfo[];
	}

	/**
	 * Launcher exposes clickable things that user can start/launch. System's
	 * launcher app uses provided here info for setting up user interface. If
	 * a required runtime or forma-factor is not available on a device, launcher
	 * app can indicate it. This way an app may contain components for both
	 * desktop and mobile devices without expecting each component to be
	 * cross-platform and cross-form-factor (has this ever existed?).
	 */
	interface Launcher {
		name: string;
		component?: string;
		startCmd?: {
			cmd: string;
			params: any[];
		}
		icon: string;
		description: string;
		formFactor?: UserInterfaceFormFactor|UserInterfaceFormFactor[];
	}

	type UserInterfaceFormFactor = 'desktop' | 'table' | 'phone'

	interface GUIComponent extends CommonComponentSetting {
		startCmds?: {
			[cmd: string]: AllowedCallers;
		};
		runtime: GUIRuntime;
		name: string;
		description?: string;
		icon?: string;
		windowOpts?: ui.WindowOptions;
		multiInstances?: true;
	}

	interface ServiceComponent extends CommonComponentSetting {
		allowedCallers: AllowedCallers;
		services: string[];
		forOneConnectionOnly?: true;
	}

	interface GUIServiceComponent extends CommonComponentSetting {
		runtime: GUIRuntime;
		allowedCallers: AllowedCallers;
		services: string[];
		icon?: string;
		windowOpts?: ui.WindowOptions;
		allowNonGUICaller?: true;
		childOfGUICaller?: true;
		forOneConnectionOnly?: true;
	}

	interface CommonComponentSetting {
		runtime: NonGUIRuntime | GUIRuntime;
		capsRequested?: RequestedCAPs;
		sharedLibs?: SharedLibInfo[];
	}

	type GUIRuntime = 'web-gui';

	type NonGUIRuntime = 'wasm,mp1' | 'deno';

	interface AllowedCallers {
		thisAppComponents?: '*' | string[];
		otherApps?: '*' | string[];
	}

	type AppComponent = GUIComponent | ServiceComponent | GUIServiceComponent;

	interface SharedLibInfo {
		libDomain: string;
		version: { hash: string; alg: string; }
	}

	interface RequestedCAPs extends common.RequestedCAPs {
		apps?: AppsCAPSetting;
		logout?: LogoutCAPSetting;
		appRPC?: AppRPCCAPSetting;
		otherAppsRPC?: OtherAppsRPCCAPSetting;
		shell?: ShellCAPsSetting;
		connectivity?: ConnectivityCAPSetting;
	}

	type AppsCAPSetting = 'all' | (keyof apps.Apps)[];

	type LogoutCAPSetting = 'all';

	interface AppRPCCAPSetting {
		serviceComponents: string[];
	}

	interface OtherAppsRPCCAPSetting {
		callable: {
			app: string;
			component: string;
		}[];
	}

	interface ShellCAPsSetting {
		fileDialog?: FileDialogsCAPSettings;
		mountFS?: DeviceMountFSCAPSetting;
		userNotifications?: true;
		startAppCmds?: {
			thisApp?: string|string[];
			otherApps?: { [ appDomain: string ]: string|string[]; };
		};
	}

	type FileDialogsCAPSettings = 'all' | 'readonly';

	type DeviceMountFSCAPSetting = 'all';

	type ConnectivityCAPSetting = 'check';

	interface SiteManifest {
		siteDomain: string;
		version: string;
		name: string;
		components?: {
			[entrypoint: string]: SiteComponent;
		};
	}

	interface SiteComponent {
		servedFromRemote?: true;
		subRoot?: string;
		capsRequested?: RequestedSiteCAPs;
		multiInstances?: true;
	}

	interface RequestedSiteCAPs {}

}
