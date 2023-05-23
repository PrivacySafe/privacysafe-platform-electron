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

import { Caller } from 'core-3nweb-client-lib/build/ipc';
import { makeFileDialogs } from "../shell/file-dialogs/file-dialogs-cap-ipc";
import { makeUserNotifications } from '../shell/user-notifications/user-notifications-cap-ipc';

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
		dialogFns = (await caller.listObjAsync(dialogsPath)
			) as (keyof NonNullable<ShellCAPs['fileDialogs']>)[];
	}
	return makeShellFollowingListing(
		shellCAPs, dialogFns, caller, objPath
	);
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
	return shell;

}


Object.freeze(exports);