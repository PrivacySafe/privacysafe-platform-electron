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

type SysUtils = web3n.system.SysUtils;
type Apps = web3n.system.apps.Apps;
type AppsDownloader = web3n.system.apps.AppsDownloader;
type DownloadProgress = web3n.system.apps.DownloadProgress;
type AppsInstaller = web3n.system.apps.AppsInstaller;
type AppUnpackProgress = web3n.system.apps.AppUnpackProgress;
type Platform = web3n.system.platform.Platform;
type PlatformUpdateEvents = web3n.system.platform.PlatformUpdateEvents;
type AppsOpener = web3n.system.apps.AppsOpener;
type SystemMonitor = web3n.system.monitor.SystemMonitor;
type Logout = web3n.system.Logout;

export function makeSystemCaller(caller: Caller, sysPath: string[]): SysUtils {
	if (!caller.listObj) {
		throw new Error(`Caller here expects to have method 'listObj'`);
	}
	const lstSystemCAP = caller.listObj(sysPath) as (keyof SysUtils)[];
	const lstAppsCAP = (lstSystemCAP.includes('apps') ?
		caller.listObj(sysPath.concat('apps')) as (keyof Apps)[] : undefined
	);
	return makeSystemBasedOnListing(
		caller, sysPath, lstSystemCAP, lstAppsCAP
	);
}

function makeSystemBasedOnListing(
	caller: Caller, sysPath: string[], lstSystemCAP: (keyof SysUtils)[],
	lstAppsCAP: (keyof NonNullable<SysUtils['apps']>)[]|undefined
): SysUtils {
	const system: SysUtils = {};
	if (lstAppsCAP) {
		const appsPath = sysPath.concat('apps');
		system.apps = makeAppsFollowingListing(lstAppsCAP, caller, appsPath);
	}
	if (lstSystemCAP.includes('platform')) {
		const platformPath = sysPath.concat('platform');
		system.platform = makePlatformDownloaderCaller(
			caller, platformPath
		);
	}
	if (lstSystemCAP.includes('monitor')) {
		const platformPath = sysPath.concat('monitor');
		system.monitor = makeSystemMonitorCaller(
			caller, platformPath
		);
	}
	if (lstSystemCAP.includes('logout')) {
		const logoutPath = sysPath.concat('logout');
		system.logout = jsonCall.makeReqRepFuncCaller<Logout>(caller, logoutPath);
	}
	return system;
}

export async function promiseSystemCaller(
	caller: Caller, sysPath: string[]
): Promise<SysUtils> {
	if (!caller.listObjAsync) {
		throw new Error(`Caller here expects to have method 'listObjAsync'`);
	}
	const lstSystemCAP = (
		await caller.listObjAsync(sysPath)
	) as (keyof SysUtils)[];
	const lstAppsCAP = (lstSystemCAP.includes('apps') ?
		(await caller.listObjAsync(sysPath.concat('apps'))) as (keyof Apps)[] :
		undefined
	);
	return makeSystemBasedOnListing(
		caller, sysPath, lstSystemCAP, lstAppsCAP
	);
}

function makeAppsFollowingListing(
	lstAppsCAP: (keyof Apps)[], caller: Caller, objPath: string[]
): Apps {
	const apps: Apps = {};
	if (lstAppsCAP.includes('opener')) {
		apps.opener = makeAppsOpenerCaller(caller, objPath.concat('opener'));
	}
	if (lstAppsCAP.includes('downloader')) {
		apps.downloader = makeAppsDownloaderCaller(
			caller, objPath.concat('downloader')
		);
	}
	if (lstAppsCAP.includes('installer')) {
		apps.installer = makeAppsInstallerCaller(
			caller, objPath.concat('installer')
		);
	}
	return apps;
}

function makeAppsDownloaderCaller(
	caller: Caller, objPath: string[]
): AppsDownloader {
	return {
		getAppChannels: callAppsDownloader(caller, objPath, 'getAppChannels'),
		getAppVersionFilesList: callAppsDownloader(
			caller, objPath, 'getAppVersionFilesList'
		),
		getLatestAppVersion: callAppsDownloader(caller, objPath, 'getLatestAppVersion'),
		downloadWebApp: (() => {
			const fn = jsonCall.makeObservableFuncCaller<DownloadProgress>(
				caller, objPath.concat('downloadWebApp')
			);
			return (id, version, obs) => fn(obs, id, version);
		})(),
	};
}

function callAppsDownloader<M extends keyof AppsDownloader>(
	caller: Caller, objPath: string[], method: M
): AppsDownloader[M] {
	return jsonCall.makeReqRepObjCaller<AppsDownloader, M>(caller, objPath, method);
}

function makeAppsInstallerCaller(
	caller: Caller, objPath: string[]
): AppsInstaller {
	return {
		listBundledApps: callAppsInstaller(caller, objPath, 'listBundledApps'),
		addPackFromBundledApps: (() => {
			const fn = jsonCall.makeObservableFuncCaller<AppUnpackProgress>(
				caller, objPath.concat('addPackFromBundledApps')
			);
			return (id, obs) => fn(obs, id);
		})(),
		addAppPackFromFolder: (() => {
			const fn = jsonCall.makeObservableFuncCaller<AppUnpackProgress>(
				caller, objPath.concat('addAppPackFromFolder'),
				{ findRefOf: f => caller.srvRefOf(f) }
			);
			return (appPackFS, obs) => fn(obs, appPackFS);
		})(),
		addAppPackFromZipFile: (() => {
			const fn = jsonCall.makeObservableFuncCaller<AppUnpackProgress>(
				caller, objPath.concat('addAppPackFromZipFile'),
				{ findRefOf: f => caller.srvRefOf(f) }
			);
			return (appPackFile, obs) => fn(obs, appPackFile);
		})(),
		listAllAppsPacks: callAppsInstaller(caller, objPath, 'listAllAppsPacks'),
		listAppPacks: callAppsInstaller(caller, objPath, 'listAppPacks'),
		installApp: callAppsInstaller(caller, objPath, 'installApp'),
		removeAppPack: callAppsInstaller(caller, objPath, 'removeAppPack'),
		uninstallApp: callAppsInstaller(caller, objPath, 'uninstallApp'),
		removeAppData: callAppsInstaller(caller, objPath, 'removeAppData'),
		watchApps: jsonCall.makeObservableFuncCaller(caller, objPath.concat('watchApps')),
		getAppManifest: callAppsInstaller(caller, objPath, 'getAppManifest'),
		getAppFileBytes: callAppsInstaller(caller, objPath, 'getAppFileBytes')
	};
}

function callAppsInstaller<M extends keyof AppsInstaller>(
	caller: Caller, objPath: string[], method: M
): AppsInstaller[M] {
	return jsonCall.makeReqRepObjCaller<AppsInstaller, M>(caller, objPath, method);
}

function makePlatformDownloaderCaller(
	caller: Caller, objPath: string[]
): Platform {
	return {
		getCurrentVersion: callPlatform(caller, objPath, 'getCurrentVersion'),
		getChannels: callPlatform(caller, objPath, 'getChannels'),
		getLatestVersion: callPlatform(caller, objPath, 'getLatestVersion'),
		setupUpdater: (() => {
			const fn = jsonCall.makeObservableFuncCaller<PlatformUpdateEvents>(
				caller, objPath.concat('setupUpdater')
			);
			return (newBundleVersion, obs) => fn(obs, newBundleVersion);
		})(),
		downloadUpdate: callPlatform(caller, objPath, 'downloadUpdate'),
		quitAndInstall: callPlatform(caller, objPath, 'quitAndInstall'),
		wipeFromThisDevice: callPlatform(caller, objPath, 'wipeFromThisDevice')
	};
}

function callPlatform<M extends keyof Platform>(
	caller: Caller, objPath: string[], method: M
): Platform[M] {
	return jsonCall.makeReqRepObjCaller<Platform, M>(caller, objPath, method);
}

function makeAppsOpenerCaller(
	caller: Caller, objPath: string[]
): AppsOpener {
	return {
		listCurrentApps: callAppsOpener(caller, objPath, 'listCurrentApps'),
		openApp: callAppsOpener(caller, objPath, 'openApp'),
		executeCommand: callAppsOpener(caller, objPath, 'executeCommand'),
		triggerAllStartupLaunchers: callAppsOpener(
			caller, objPath, 'triggerAllStartupLaunchers'
		),
		closeAppsAfterUpdate: callAppsOpener(
			caller, objPath, 'closeAppsAfterUpdate'
		),
		getAppFileBytesOfCurrent: callAppsOpener(caller, objPath, 'getAppFileBytesOfCurrent'),
		getAppManifestOfCurrent: callAppsOpener(caller, objPath, 'getAppManifestOfCurrent')
	};
}

function callAppsOpener<M extends keyof AppsOpener>(
	caller: Caller, objPath: string[], method: M
): AppsOpener[M] {
	return jsonCall.makeReqRepObjCaller<AppsOpener, M>(caller, objPath, method);
}

function makeSystemMonitorCaller(
	caller: Caller, objPath: string[]
): SystemMonitor {
	return {
		listProcs: callSystemMonitor(caller, objPath, 'listProcs'),
		listConnectionsToAppServices: callSystemMonitor(
			caller, objPath, 'listConnectionsToAppServices'
		)
	};
}

function callSystemMonitor<M extends keyof SystemMonitor>(
	caller: Caller, objPath: string[], method: M
): SystemMonitor[M] {
	return jsonCall.makeReqRepObjCaller<SystemMonitor, M>(caller, objPath, method);
}


Object.freeze(exports);