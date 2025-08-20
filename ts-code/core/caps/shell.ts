/*
 Copyright (C) 2020 - 2025 3NSoft Inc.
 
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

import { makeAllFileDialogOpeners } from "../../shell/file-dialogs";
import { makeAppCmdsCaller, makeCmdsHandler } from "../../shell/cmd-invocation";
import { GUIComponent } from "../../app-n-components/gui-component";
import { GetAppFSResourceFor, getFSResourceCAP } from "../../shell/fs-resource";
import { AppSetter, CAPsSetupFns, makeCAPsSetAppAndCloseFns } from "./index";
import { CoreDriver } from "../index";

type W3N = web3n.caps.W3N;
type GUIComponentDef = web3n.caps.GUIComponent;
type RequestedCAPs = web3n.caps.RequestedCAPs;
type CmdParams = web3n.shell.commands.CmdParams;
type CmdHandlerDef = NonNullable<GUIComponentDef['startCmds']>;

export function makeShellCAPs(
	appDomain: string, component: string, capsReq: RequestedCAPs,
	cmdHandlerDef: GUIComponentDef['startCmds'],
	startCmd: CmdParams|undefined,
	getAppFSResourceFor: GetAppFSResourceFor,
	userNotificationsImpl: CoreDriver['userNotifications'],
	startAppWithCmd: CoreDriver['startAppWithCmd'],
	openDashboardFn: CoreDriver['openDashboard']
): {
	cap: NonNullable<W3N['shell']>; setApp: AppSetter; close: () => void;
}|undefined {
	if (!capsReq.shell && !cmdHandlerDef) { return; }
	const cap: NonNullable<W3N['shell']> = {};
	const capsSetupFns: CAPsSetupFns[] = [];
	if (capsReq.shell) {
		const fileDialogs = fileDialogShellCAP(capsReq.shell.fileDialog);
		if (fileDialogs) {
			cap.fileDialogs = fileDialogs.cap;
			capsSetupFns.push(fileDialogs);
		}
		const userNotifications = makeUserNotificationsShellCAP(
			appDomain, component, capsReq.shell.userNotifications,
			userNotificationsImpl
		);
		if (userNotifications) {
			cap.userNotifications = userNotifications.cap;
			capsSetupFns.push(userNotifications);
		}
		const startAppWithParamsShell = startAppWithParamsShellCAP(
			appDomain, component, capsReq.shell.startAppCmds,
			startAppWithCmd
		);
		if (startAppWithParamsShell) {
			cap.startAppWithParams = startAppWithParamsShell.cap;
		}
		const getFSResource = getFSResourceCAP(
			appDomain, component, capsReq.shell.fsResource,
			getAppFSResourceFor
		);
		if (getFSResource) {
			cap.getFSResource = getFSResource.cap;
		}
		const openDashboard = makeDashboardOpenerCAP(
			capsReq.shell.openDashboard, openDashboardFn
		);
		if (openDashboard) {
			cap.openDashboard = openDashboard.cap;
		}
	}
	if (cmdHandlerDef) {
		const capFns = makeCmdHandlerCAP(appDomain, cmdHandlerDef, startCmd);
		cap.getStartedCmd = capFns.getStartedCmd;
		cap.watchStartCmds = capFns.watchStartCmds;
		capsSetupFns.push(capFns);
	}
	if (Object.keys(cap).length > 0) {
		const { close, setApp } = makeCAPsSetAppAndCloseFns(...capsSetupFns);
		return { cap, close, setApp };
	}
}

function makeUserNotificationsShellCAP(
	appDomain: string, component: string,
	notifCAPsReq: web3n.caps.ShellCAPsSetting['userNotifications'],
	userNotifications: CoreDriver['userNotifications']
): {
	cap: web3n.shell.notifications.UserNotifications;
	setApp: AppSetter; close(): void;
}|undefined {
	if (!notifCAPsReq) { return; }
	const {
		notifications: cap, setApp, close
	} = userNotifications.makeFor(appDomain, component);
	return { cap, setApp, close };
}

function startAppWithParamsShellCAP(
	appDomain: string, component: string,
	capsReq: web3n.caps.ShellCAPsSetting['startAppCmds'],
	startAppWithCmd: CoreDriver['startAppWithCmd']
): {
	cap: web3n.shell.ShellCAPs['startAppWithParams'];
}|undefined {
	if (!capsReq?.otherApps && !capsReq?.thisApp) { return; }
	return {
		cap: makeAppCmdsCaller(
			startAppWithCmd, appDomain, component, capsReq
		)
	};
}

function fileDialogShellCAP(
	fileDialogCAPsReq: web3n.caps.ShellCAPsSetting['fileDialog']
): {
	cap: web3n.shell.files.Dialogs; setApp: AppSetter; close(): void;
}|undefined {
	if (!fileDialogCAPsReq) { return; }
	if (fileDialogCAPsReq === 'all') {
		const { openers: cap, close, setApp } = makeAllFileDialogOpeners();
		return { cap, close, setApp };
	} else if (fileDialogCAPsReq ===  'readonly') {
		const { openers, close, setApp } = makeAllFileDialogOpeners();
		return {
			setApp, close, cap: {
				openFileDialog: openers.openFileDialog,
				openFolderDialog: openers.openFolderDialog,
			},
		};
	}
}

function makeCmdHandlerCAP(
	appDomain: string, cmdHandlerDef: CmdHandlerDef,
	startCmd: CmdParams|undefined
): {
	getStartedCmd: NonNullable<web3n.shell.ShellCAPs['getStartedCmd']>;
	watchStartCmds: NonNullable<web3n.shell.ShellCAPs['watchStartCmds']>;
	setApp: AppSetter;
} {
	const cmdHandler = makeCmdsHandler(appDomain, cmdHandlerDef);
	return {
		getStartedCmd: async () => startCmd,
		watchStartCmds: obs => {
			const sub = cmdHandler.cmd$.subscribe(obs);
			return () => sub.unsubscribe();
		},
		setApp: app => {
			if (!cmdHandlerDef) {
				// XXX add some proper app
				throw new Error(``);
			}
			(app as GUIComponent).setCmdHandler(cmdHandler);
		}
	};
}

function makeDashboardOpenerCAP(
	capsReq: web3n.caps.ShellCAPsSetting['openDashboard'],
	openDashboard: () => Promise<void>
): {
	cap: web3n.shell.ShellCAPs['openDashboard'];
}|undefined {
	if (capsReq === true) {
		return { cap: openDashboard };
	}
}



Object.freeze(exports);