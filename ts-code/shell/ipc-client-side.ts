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

import { Caller, callerSideJSONWrap as jsonCall } from 'core-3nweb-client-lib/build/ipc';
import { makeFileDialogs } from "../shell/file-dialogs/file-dialogs-cap-ipc";
import { makeUserNotifications } from '../shell/user-notifications/user-notifications-cap-ipc';
import { makeGetFSResource } from './fs-resource/fs-resource-caps-ipc';

type ShellCAPs = web3n.shell.ShellCAPs;

export function makeShellCaller(caller: Caller, objPath: string[]): ShellCAPs {
	if (!caller.listObj) {
		throw new Error(`Caller here expects to have method 'listObj'`);
	}
	const shellCAPs = caller.listObj(objPath) as (keyof ShellCAPs)[];
	let dialogFns: (keyof NonNullable<ShellCAPs['fileDialogs']>)[] | undefined = undefined;
	if (shellCAPs.includes('fileDialogs')) {
		const dialogsPath = objPath.concat('fileDialogs');
		dialogFns = caller.listObj(dialogsPath) as (keyof NonNullable<ShellCAPs['fileDialogs']>)[];
	}
	return makeShellFollowingListing(
		shellCAPs, dialogFns, caller, objPath
	);
}

export async function promiseShellCaller(
	caller: Caller, objPath: string[]
): Promise<ShellCAPs> {
	if (!caller.listObjAsync) {
		throw new Error(`Caller here expects to have method 'listObjAsync'`);
	}
	const shellCAPs = (await caller.listObjAsync(objPath)) as (keyof ShellCAPs)[];
	let dialogFns: (keyof NonNullable<ShellCAPs['fileDialogs']>)[] | undefined = undefined;
	if (shellCAPs.includes('fileDialogs')) {
		const dialogsPath = objPath.concat('fileDialogs');
		dialogFns = (
			await caller.listObjAsync(dialogsPath)
		) as (keyof NonNullable<ShellCAPs['fileDialogs']>)[];
	}
	return makeShellFollowingListing(
		shellCAPs, dialogFns, caller, objPath
	);
}

function shellCall<M extends keyof ShellCAPs>(
	caller: Caller, objPath: string[], method: M
): ShellCAPs[M] {
	return jsonCall.makeReqRepObjCaller<ShellCAPs, M>(caller, objPath, method);
}

function makeShellFollowingListing(
	shellCAPs: (keyof ShellCAPs)[],
	dialogFns: (keyof NonNullable<ShellCAPs['fileDialogs']>)[] | undefined,
	caller: Caller, objPath: string[]
): ShellCAPs {
	const shell: ShellCAPs = {};
	if (shellCAPs.includes('fileDialogs')) {
		const dialogsPath = objPath.concat('fileDialogs');
		shell.fileDialogs = makeFileDialogs(caller, dialogsPath, dialogFns!);
	}
	if (shellCAPs.includes('userNotifications')) {
		const notifPath = objPath.concat('userNotifications');
		shell.userNotifications = makeUserNotifications(caller, notifPath);
	}
	if (shellCAPs.includes('getStartedCmd')) {
		shell.getStartedCmd = shellCall(caller, objPath, 'getStartedCmd');
	}
	if (shellCAPs.includes('watchStartCmds')) {
		shell.watchStartCmds = jsonCall.makeObservableFuncCaller(
			caller, objPath.concat('watchStartCmds')
		);
	}
	if (shellCAPs.includes('startAppWithParams')) {
		shell.startAppWithParams = shellCall(
			caller, objPath, 'startAppWithParams'
		);
	}
	if (shellCAPs.includes('getFSResource')) {
		const fnPath = objPath.concat('getFSResource');
		shell.getFSResource = makeGetFSResource(caller, fnPath);
	}
	if (shellCAPs.includes('openDashboard')) {
		const fnPath = objPath.concat('openDashboard');
		shell.openDashboard = shellCall(caller, objPath, 'openDashboard');
	}
	return shell;
}


Object.freeze(exports);