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
import { makeAppsOpenerCaller } from './opener-cap-ipc';
import { makeAppsDownloaderCaller } from "./downloader/apps-downloader-cap-ipc";
import { makeAppsInstallerCaller } from "./installer/apps-installer-cap-ipc";
import { makePlatformDownloaderCaller } from "./platform/platform-downloader-cap-ipc";

type Apps = web3n.apps.Apps;

export function makeAppsCaller(caller: Caller, objPath: string[]): Apps {
	if (!caller.listObj) {
		throw new Error(`Caller here expects to have method 'listObj'`);
	}
	const lstAppsCAP = caller.listObj(objPath) as (keyof Apps)[];
	return makeAppsFollowingListing(lstAppsCAP, caller, objPath);
}

export async function promiseAppsCaller(
	caller: Caller, objPath: string[]
): Promise<Apps> {
	if (!caller.listObjAsync) {
		throw new Error(`Caller here expects to have method 'listObjAsync'`);
	}
	const lstAppsCAP = (await caller.listObjAsync(objPath)) as (keyof Apps)[];
	return makeAppsFollowingListing(lstAppsCAP, caller, objPath);
}

function makeAppsFollowingListing(
	lstAppsCAP: (keyof Apps)[], caller: Caller, objPath: string[]
): Apps {
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


Object.freeze(exports);