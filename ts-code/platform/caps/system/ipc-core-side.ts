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

type SysUtils = web3n.system.SysUtils;
type Apps = web3n.system.apps.Apps;
type AppsDownloader = web3n.system.apps.AppsDownloader;
type AppsInstaller = web3n.system.apps.AppsInstaller;
type Platform = web3n.system.platform.Platform;
type AppsOpener = web3n.system.apps.AppsOpener;
type SystemMonitor = web3n.system.monitor.SystemMonitor;
type UserLoginSettings = web3n.system.UserLoginSettings;
type AutoStartupSettings = web3n.system.AutoStartupSettings;

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
	if (cap.userLogin) {
		wrap.userLogin = exposeUserLoginCAP(cap.userLogin);
	}
	if (cap.autoStartup) {
		wrap.autoStartup = exposeAutoStartupCAP(cap.autoStartup);
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
		wrap.installer = exposeAppsInstallerCAP(cap.installer, expServices);
	}
	return wrap;
}

function exposeAppsInstallerCAP(
	cap: AppsInstaller, expServices: CoreSideServices
): ExposedObj<AppsInstaller> {
	return {
		listBundledApps: jsonSrv.wrapReqReplySrvMethod(cap, 'listBundledApps'),
		addPackFromBundledApps: jsonSrv.wrapObservingFunc(
			(obs, id) => cap.addPackFromBundledApps(id, obs)
		),
		addAppPackFromFolder: jsonSrv.wrapObservingFunc(
			(obs, appPackFS) => cap.addAppPackFromFolder(appPackFS, obs),
			{ findReferencedObj: ref => expServices.getOriginalObj(ref) }
		),
		addAppPackFromZipFile: jsonSrv.wrapObservingFunc(
			(obs, appPackFile) => cap.addAppPackFromZipFile(appPackFile, obs),
			{ findReferencedObj: ref => expServices.getOriginalObj(ref) }
		),
		listAllAppsPacks: jsonSrv.wrapReqReplySrvMethod(cap, 'listAllAppsPacks'),
		listAppPacks: jsonSrv.wrapReqReplySrvMethod(cap, 'listAppPacks'),
		installApp: jsonSrv.wrapReqReplySrvMethod(cap, 'installApp'),
		removeAppPack: jsonSrv.wrapReqReplySrvMethod(cap, 'removeAppPack'),
		uninstallApp: jsonSrv.wrapReqReplySrvMethod(cap, 'uninstallApp'),
		removeAppData: jsonSrv.wrapReqReplySrvMethod(cap, 'removeAppData'),
		getAppFileBytes: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppFileBytes'),
		getAppManifest: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppManifest'),
		watchApps: jsonSrv.wrapObservingFunc(cap.watchApps)
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
		quitAndInstall: jsonSrv.wrapReqReplySrvMethod(cap, 'quitAndInstall'),
		wipeFromThisDevice: jsonSrv.wrapReqReplySrvMethod(cap, 'wipeFromThisDevice')
	};
}

function exposeAppsOpenerCAP(
	cap: AppsOpener
): ExposedObj<AppsOpener> {
	return {
		listCurrentApps: jsonSrv.wrapReqReplySrvMethod(cap, 'listCurrentApps'),
		openApp: jsonSrv.wrapReqReplySrvMethod(cap, 'openApp'),
		executeCommand: jsonSrv.wrapReqReplySrvMethod(cap, 'executeCommand'),
		triggerAllStartupLaunchers: jsonSrv.wrapReqReplySrvMethod(
			cap, 'triggerAllStartupLaunchers'
		),
		closeAppsAfterUpdate: jsonSrv.wrapReqReplySrvMethod(
			cap, 'closeAppsAfterUpdate'
		),
		getAppFileBytesOfCurrent: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppFileBytesOfCurrent'),
		getAppManifestOfCurrent: jsonSrv.wrapReqReplySrvMethod(cap, 'getAppManifestOfCurrent')
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

function exposeUserLoginCAP(cap: UserLoginSettings): ExposedObj<UserLoginSettings> {
	return {
		isAutoLoginSet: jsonSrv.wrapReqReplySrvMethod(cap, 'isAutoLoginSet'),
		removeAutoLogin: jsonSrv.wrapReqReplySrvMethod(cap, 'removeAutoLogin'),
		setAutoLogin: jsonSrv.wrapObservingFunc<number>((obs, pass) => {
			cap.setAutoLogin(pass, p => obs.next?.(p))
			.then(
				() => obs.complete?.(),
				err => obs.error?.(err)
			);
			return noop;
		}),
		isAutoLoginAvailable: jsonSrv.wrapReqReplySrvMethod(cap, 'isAutoLoginAvailable'),
	};
}

function noop() {}

function exposeAutoStartupCAP(cap: AutoStartupSettings): ExposedObj<AutoStartupSettings> {
	return {
		isAutoStartupAvailable: jsonSrv.wrapReqReplySrvMethod(cap, 'isAutoStartupAvailable'),
		isAutoStartupSet: jsonSrv.wrapReqReplySrvMethod(cap, 'isAutoStartupSet'),
		setAutoStartup: jsonSrv.wrapReqReplySrvMethod(cap, 'setAutoStartup'),
	};
}


Object.freeze(exports);