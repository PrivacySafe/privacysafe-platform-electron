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

import { ExposedObj, CoreSideServices, serviceSideJSONWrap as jsonSrv } from 'core-3nweb-client-lib/build/ipc';
import { exposeFileDialogsCAP } from "../shell/file-dialogs/file-dialogs-cap-ipc";
import { exposeUserNotificationsCAP } from "../shell/user-notifications/user-notifications-cap-ipc";
import { exposeGetFSResourceCAP } from './fs-resource/fs-resource-caps-ipc';

type ShellCAPs = web3n.shell.ShellCAPs;

export function exposeShellCAPs(
	cap: ShellCAPs, expServices: CoreSideServices
): ExposedObj<ShellCAPs> {
	const wrap: ExposedObj<ShellCAPs> = {};
	if (cap.fileDialogs) {
		wrap.fileDialogs = exposeFileDialogsCAP(cap.fileDialogs, expServices);
	}
	if (cap.userNotifications) {
		wrap.userNotifications = exposeUserNotificationsCAP(
			cap.userNotifications
		);
	}
	if (cap.getStartedCmd) {
		wrap.getStartedCmd = jsonSrv.wrapReqReplySrvMethod(cap, 'getStartedCmd');
	}
	if (cap.watchStartCmds) {
		wrap.watchStartCmds = jsonSrv.wrapObservingFunc(
			cap, obs => cap.watchStartCmds!(obs)
		);
	}
	if (cap.startAppWithParams) {
		wrap.startAppWithParams = jsonSrv.wrapReqReplySrvMethod(
			cap, 'startAppWithParams'
		);
	}
	if (cap.getFSResource) {
		wrap.getFSResource = exposeGetFSResourceCAP(
			cap.getFSResource, expServices
		);
	}
	if (cap.openDashboard) {
		wrap.openDashboard = jsonSrv.wrapReqReplySrvMethod(cap, 'openDashboard');
	}
	return wrap;
}


Object.freeze(exports);