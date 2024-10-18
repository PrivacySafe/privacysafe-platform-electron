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

import { ExposedObj, ExposedServices, serviceSideJSONWrap as jsonSrv } from 'core-3nweb-client-lib/build/ipc';

type SysUtils = web3n.system.SysUtils;
type Apps = web3n.system.apps.Apps;
type AppsDownloader = web3n.system.apps.AppsDownloader;
type AppsInstaller = web3n.system.apps.AppsInstaller;
type Platform = web3n.system.platform.Platform;
type AppsOpener = web3n.system.apps.AppsOpener;

export function exposeSystemCAP(
	cap: SysUtils, expServices: ExposedServices
): ExposedObj<SysUtils> {
	const wrap: ExposedObj<SysUtils> = {};
	if (cap.apps) {
		wrap.apps = exposeAppsCAP(cap.apps, expServices)
	}
	if (cap.platform) {
		wrap.platform = exposePlatformDownloaderCAP(cap.platform);
	}
	return wrap;
}

export function exposeAppsCAP(
	cap: Apps, expServices: ExposedServices
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
		getVersionList: jsonSrv.wrapReqReplySrvMethod(
			cap, 'getVersionList'
		),
		availableUpdateType: jsonSrv.wrapReqReplySrvMethod(
			cap, 'availableUpdateType'
		),
		downloadAndApplyUpdate: jsonSrv.wrapObservingFunc(
			(obs, channel) => cap.downloadAndApplyUpdate(channel, obs)
		)
	};
}

function exposeAppsOpenerCAP(
	cap: AppsOpener
): ExposedObj<AppsOpener> {
	return {
		listApps: jsonSrv.wrapReqReplySrvMethod(cap, 'listApps'),
		openApp: jsonSrv.wrapReqReplySrvMethod(cap, 'openApp'),
		executeCommand: jsonSrv.wrapReqReplySrvMethod(cap, 'executeCommand'),
		getAppFileBytes: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppFileBytes'),
		getAppManifest: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppManifest'),
		getAppVersions: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppVersions'),
		watchApps: jsonSrv.wrapObservingFunc(cap.watchApps)
	};
}


Object.freeze(exports);