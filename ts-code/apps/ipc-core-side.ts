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
import { exposeAppsOpenerCAP } from '../apps/opener-cap-ipc';
import { exposeAppsDownloaderCAP } from "../apps/downloader/apps-downloader-cap-ipc";
import { exposeAppsInstallerCAP } from "../apps/installer/apps-installer-cap-ipc";
import { exposePlatformDownloaderCAP } from "../apps/platform/platform-downloader-cap-ipc";

type Apps = web3n.apps.Apps;

export function exposeAppsCAP(
	cap: Apps, expServices: ExposedServices
): ExposedObj<Apps> {
	const wrap: ExposedObj<Apps> = {};
	if (cap.opener) {
		wrap.opener = exposeAppsOpenerCAP(cap.opener, expServices);
	}
	if (cap.downloader) {
		wrap.downloader = exposeAppsDownloaderCAP(cap.downloader);
	}
	if (cap.installer) {
		wrap.installer = exposeAppsInstallerCAP(cap.installer);
	}
	if (cap.platform) {
		wrap.platform = exposePlatformDownloaderCAP(cap.platform);
	}
	return wrap;
}


Object.freeze(exports);