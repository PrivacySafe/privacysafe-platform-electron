/*
 Copyright (C) 2020 - 2023 3NSoft Inc.
 
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

import { ExposedObj, ExposedServices } from 'core-3nweb-client-lib/build/ipc';
import { exposeFileDialogsCAP } from "../shell/file-dialogs/file-dialogs-cap-ipc";
import { exposeUserNotificationsCAP } from "../shell/user-notifications/user-notifications-cap-ipc";
import { exposeGetStartedCmdCAP, exposeStartAppWithParams, exposeWatchStartCmdsCAP } from './cmd-invocation/cmds-caps-ipc';

type ShellCAPs = web3n.shell.ShellCAPs;

export function exposeShellCAPs(
	cap: ShellCAPs, expServices: ExposedServices
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
		wrap.getStartedCmd = exposeGetStartedCmdCAP(cap.getStartedCmd);
	}
	if (cap.watchStartCmds) {
		wrap.watchStartCmds = exposeWatchStartCmdsCAP(cap.watchStartCmds);
	}
	if (cap.startAppWithParams) {
		wrap.startAppWithParams = exposeStartAppWithParams(
			cap.startAppWithParams
		);
	}
	return wrap;
}


Object.freeze(exports);