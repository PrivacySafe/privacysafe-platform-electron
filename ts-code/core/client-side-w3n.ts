/*
 Copyright (C) 2020 - 2022 3NSoft Inc.
 
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

import { ObjectsConnector, Caller, makeW3Nclient, promiseW3Nclient } from 'core-3nweb-client-lib/build/ipc';
import { makeFileDialogs } from "../shell/file-dialogs/file-dialogs-cap-ipc";
import { closeSelf } from "../init-proc/close-cap-ipc";
import { makeAppsOpenerCaller } from '../apps/opener-cap-ipc';
import { makeLogoutCaller } from "../init-proc/logout-cap-ipc";
import { makeAppsDownloaderCaller } from "../apps/downloader/apps-downloader-cap-ipc";
import { makeAppsInstallerCaller } from "../apps/installer/apps-installer-cap-ipc";
import { makePlatformDownloaderCaller } from "../apps/platform/platform-downloader-cap-ipc";
import { makeTestStandCaller } from "../test-stand/test-stand-cap-ipc";
import { appRPC, otherAppsRPC } from "../rpc/rpc-caps-ipc";
import { exposeService } from "../rpc/expose-service-cap-ipc";
import { makeUserNotifications } from '../shell/user-notifications/user-notifications-cap-ipc';
import { makeConnectivity } from '../connectivity/connectivity-cap-ipc';

type W3N = web3n.caps.W3N;
type Apps = web3n.apps.Apps;
type ShellCAPs = web3n.shell.ShellCAPs;

export function makeClientSideW3N(clientSide: ObjectsConnector): W3N {
	const clientW3N = makeW3Nclient<web3n.testing.CommonW3N>(
		clientSide.caller, {
			closeSelf: closeSelf.makeClient,
			apps: makeAppsCaller,
			logout: makeLogoutCaller,
			testStand: makeTestStandCaller,
			shell: makeShellCaller,
			appRPC: appRPC.makeClient,
			otherAppsRPC: otherAppsRPC.makeClient,
			exposeService: exposeService.makeClient,
			connectivity: makeConnectivity,
		});
	return clientW3N;
}

function makeAppsCaller(caller: Caller, objPath: string[]): Apps {
	if (!caller.listObj) { throw new Error(
		`Caller here expects to have method 'listObj'`); }
	const lstAppsCAP = caller.listObj(objPath) as (keyof Apps)[];
	const opener = lstAppsCAP.includes('opener');
	const downloader = lstAppsCAP.includes('downloader');
	const installer = lstAppsCAP.includes('installer');
	const platform = lstAppsCAP.includes('platform');
	const apps: Apps = {};
	if (opener) {
		apps.opener = makeAppsOpenerCaller(caller, objPath.concat('opener'));
	}
	if (downloader) {
		apps.downloader = makeAppsDownloaderCaller(
			caller, objPath.concat('downloader'));
	}
	if (installer) {
		apps.installer = makeAppsInstallerCaller(
			caller, objPath.concat('installer'));
	}
	if (platform) {
		apps.platform = makePlatformDownloaderCaller(
			caller, objPath.concat('platform'));
	}
	return apps;
}

function makeShellCaller(caller: Caller, objPath: string[]): ShellCAPs {
	if (!caller.listObj) { throw new Error(
		`Caller here expects to have method 'listObj'`); }
	const shellCAPs = caller.listObj(objPath) as (keyof ShellCAPs)[];
	const shell: ShellCAPs = {};
	if (shellCAPs.includes('fileDialogs')) {
		const dialogsPath = objPath.concat('fileDialogs');
		const exposedFns = caller.listObj(dialogsPath) as (
			keyof NonNullable<ShellCAPs['fileDialogs']>)[];
		shell.fileDialogs = makeFileDialogs(caller, dialogsPath, exposedFns);
	}
	if (shellCAPs.includes('userNotifications')) {
		const notifPath = objPath.concat('userNotifications');
		shell.userNotifications = makeUserNotifications(caller, notifPath);
	}
	return shell;
}

export function promiseClientSideW3N(
	clientSide: ObjectsConnector
): Promise<W3N> {
	return promiseW3Nclient<web3n.testing.CommonW3N>(
		clientSide.caller, {
			closeSelf: closeSelf.makeClient,
			apps: promiseAppsCaller,
			logout: makeLogoutCaller,
			testStand: makeTestStandCaller,
			shell: promiseShellCaller,
			appRPC: appRPC.makeClient,
			otherAppsRPC: otherAppsRPC.makeClient,
			exposeService: exposeService.makeClient,
			connectivity: makeConnectivity,
		});
}

async function promiseAppsCaller(
	caller: Caller, objPath: string[]
): Promise<Apps> {
	if (!caller.listObjAsync) { throw new Error(
		`Caller here expects to have method 'listObjAsync'`); }
	const lstAppsCAP = (await caller.listObjAsync(objPath)) as (keyof Apps)[];
	const opener = lstAppsCAP.includes('opener');
	const downloader = lstAppsCAP.includes('downloader');
	const installer = lstAppsCAP.includes('installer');
	const platform = lstAppsCAP.includes('platform');
	const apps: Apps = {};
	if (opener) {
		apps.opener = makeAppsOpenerCaller(caller, objPath.concat('opener'));
	}
	if (downloader) {
		apps.downloader = makeAppsDownloaderCaller(
			caller, objPath.concat('downloader'));
	}
	if (installer) {
		apps.installer = makeAppsInstallerCaller(
			caller, objPath.concat('installer'));
	}
	if (platform) {
		apps.platform = makePlatformDownloaderCaller(
			caller, objPath.concat('platform'));
	}
	return apps;
}

async function promiseShellCaller(
	caller: Caller, objPath: string[]
): Promise<ShellCAPs> {
	if (!caller.listObjAsync) { throw new Error(
		`Caller here expects to have method 'listObjAsync'`); }
	const shellCAPs = (await caller.listObjAsync(objPath)) as (
		keyof ShellCAPs)[];
	const shell: ShellCAPs = {};
	if (shellCAPs.includes('fileDialogs')) {
		const dialogsPath = objPath.concat('fileDialogs');
		const exposedFns = (await caller.listObjAsync(dialogsPath)
			) as (keyof NonNullable<ShellCAPs['fileDialogs']>)[];
		shell.fileDialogs = makeFileDialogs(caller, dialogsPath, exposedFns);
	}
	if (shellCAPs.includes('userNotifications')) {
		const notifPath = objPath.concat('userNotifications');
		shell.userNotifications = makeUserNotifications(caller, notifPath);
	}
	return shell;
}


Object.freeze(exports);