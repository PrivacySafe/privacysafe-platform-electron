/*
 Copyright (C) 2020 - 2023, 2024 3NSoft Inc.
 
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

type SysUtils = web3n.system.SysUtils;
type Apps = web3n.system.apps.Apps;
type AppsDownloader = web3n.system.apps.AppsDownloader;
type AppsInstaller = web3n.system.apps.AppsInstaller;
type Platform = web3n.system.platform.Platform;
type AppsOpener = web3n.system.apps.AppsOpener;
type SystemMonitor = web3n.system.monitor.SystemMonitor;

export function exposeSystemCAP(
	cap: SysUtils, expServices: CoreSideServices
): ExposedObj<SysUtils> {
	const wrap: ExposedObj<SysUtils> = {};
	if (cap.apps) {
		wrap.apps = exposeAppsCAP(cap.apps, expServices)
	}
	if (cap.platform) {
		wrap.platform = exposePlatformDownloaderCAP(cap.platform);
	}
	if (cap.monitor) {
		wrap.monitor = exposeSystemMonitorCAP(cap.monitor);
	}
	if (cap.logout) {
		wrap.logout = jsonSrv.wrapReqReplyFunc(cap.logout);
	}
	return wrap;
}

export function exposeAppsCAP(
	cap: Apps, expServices: CoreSideServices
): ExposedObj<Apps> {
	const wrap: ExposedObj<Apps> = {};
	if (cap.opener) {
		wrap.opener = exposeAppsOpenerCAP(cap.opener);
	}
	if (cap.downloader) {
		wrap.downloader = exposeAppsDownloaderCAP(cap.downloader);
	}
	if (cap.installer) {
		wrap.installer = exposeAppsInstallerCAP(cap.installer);
	}
	return wrap;
}

function exposeAppsInstallerCAP(
	cap: AppsInstaller
): ExposedObj<AppsInstaller> {
	return {
		unpackBundledApp: jsonSrv.wrapObservingFunc(
			(obs, id) => cap.unpackBundledApp(id, obs)
		),
		installApp: jsonSrv.wrapReqReplySrvMethod(cap, 'installApp'),
		uninstallApp: jsonSrv.wrapReqReplySrvMethod(cap, 'uninstallApp'),
		removeAppPack: jsonSrv.wrapReqReplySrvMethod(cap, 'removeAppPack')
	};
}

function exposeAppsDownloaderCAP(
	cap: AppsDownloader
): ExposedObj<AppsDownloader> {
	return {
		getAppChannels: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppChannels'),
		getAppVersionFilesList: jsonSrv.wrapReqReplySrvMethod(
			cap, 'getAppVersionFilesList'
		),
		getLatestAppVersion: jsonSrv.wrapReqReplySrvMethod(
			cap, 'getLatestAppVersion'
		),
		downloadWebApp: jsonSrv.wrapObservingFunc(
			(obs, id, version) => cap.downloadWebApp(id, version, obs)
		)
	};
}

function exposePlatformDownloaderCAP(
	cap: Platform
): ExposedObj<Platform> {
	return {
		getCurrentVersion: jsonSrv.wrapReqReplySrvMethod(
			cap, 'getCurrentVersion'
		),
		getChannels: jsonSrv.wrapReqReplySrvMethod(cap, 'getChannels'),
		getLatestVersion: jsonSrv.wrapReqReplySrvMethod(
			cap, 'getLatestVersion'
		),
		setupUpdater: jsonSrv.wrapObservingFunc(
			(obs, newBundleVersion) => cap.setupUpdater(newBundleVersion, obs)
		),
		downloadUpdate: jsonSrv.wrapReqReplySrvMethod(cap, 'downloadUpdate'),
		quitAndInstall: jsonSrv.wrapReqReplySrvMethod(cap, 'quitAndInstall')
	};
}

function exposeAppsOpenerCAP(
	cap: AppsOpener
): ExposedObj<AppsOpener> {
	return {
		listApps: jsonSrv.wrapReqReplySrvMethod(cap, 'listApps'),
		openApp: jsonSrv.wrapReqReplySrvMethod(cap, 'openApp'),
		executeCommand: jsonSrv.wrapReqReplySrvMethod(cap, 'executeCommand'),
		triggerAllStartupLaunchers: jsonSrv.wrapReqReplySrvMethod(
			cap, 'triggerAllStartupLaunchers'
		),
		closeAppsAfterUpdate: jsonSrv.wrapReqReplySrvMethod(
			cap, 'closeAppsAfterUpdate'
		),
		getAppFileBytes: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppFileBytes'),
		getAppManifest: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppManifest'),
		getAppVersions: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppVersions'),
		watchApps: jsonSrv.wrapObservingFunc(cap.watchApps)
	};
}

function exposeSystemMonitorCAP(
	cap: SystemMonitor
): ExposedObj<SystemMonitor> {
	return {
		listProcs: jsonSrv.wrapReqReplySrvMethod(cap, 'listProcs'),
		listConnectionsToAppServices: jsonSrv.wrapReqReplySrvMethod(
			cap, 'listConnectionsToAppServices'
		)
	};
}


Object.freeze(exports);