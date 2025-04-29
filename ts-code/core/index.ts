/*
 Copyright (C) 2020 - 2024 3NSoft Inc.
 
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

import { CoreConf, FactoryOfFSs } from "core-3nweb-client-lib";
import { GetServiceToHandleNewCall } from "../rpc";
import { StartAppWithCmd } from "../shell/cmd-invocation";
import { GetAppFSResourceFor } from "../shell/fs-resource";
import { Driver } from "./core-driver";
import { AppCAPsAndSetup, SiteCAPsAndSetup } from "./caps";

type SysUtils = web3n.system.SysUtils;
type Logout = web3n.system.Logout;
type AppComponent = web3n.caps.AppComponent;
type SiteComponent = web3n.caps.SiteComponent;
type CmdParams = web3n.shell.commands.CmdParams;

export interface CoreDriver {
	close(): Promise<void>;
	makeCAPsForAppComponent(
		appDomain: string, appVersion: string, component: string,
		componentDef: AppComponent, startCmd: CmdParams|undefined
	): AppCAPsAndSetup;
	makeCAPsForSiteComponent(
		appDomain: string, component: string, componentDef: SiteComponent
	): SiteCAPsAndSetup;
	start(): { capsForStartup: web3n.startup.W3N; coreInit: Promise<void>; };
	isStarted(): boolean;
	storages: FactoryOfFSs;
	getUserId(): string;
	whenReady(): Promise<void>;
}

export function makeCoreDriver(
	conf: CoreConf, makeSystemCapFns: () => SysUtils,
	startAppWithCmd: StartAppWithCmd, 
	logout: Logout, getService: GetServiceToHandleNewCall,
	getAppFSResourceFor: GetAppFSResourceFor
): CoreDriver {
	return new Driver(
		conf, makeSystemCapFns, startAppWithCmd, logout, getService,
		getAppFSResourceFor
	);
}

