/*
 Copyright (C) 2026 3NSoft Inc.

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

import type { PlatformResources } from '../platform/inject-defs/platform';
import{ appLog, logError, logWarning, recordUnhandledRejectionsInProcess, removeOlderLogs } from './confs';
import { makeAutoStartupCAP } from './init-proc/auto-startup';
import { AppDownloader } from '../platform/caps/system/apps-downloader';
import { makeClipboardCAP } from './caps/shell/clipboard';
import { makeOpenFileCAP, makeOpenFolderCAP, makeOpenURLCAP, openInMountedFolderCAP } from "./caps/shell/openers";
import { makeMountsCAP } from './caps/shell/mounts';
import { Notifications } from './caps/shell/user-notifications';
import { getSytemFormFactor, makeUICap } from './caps/ui';
import { makeMediaDevicesCAP } from './caps/media-devices/mediaDevices';
import { makeConnectivity } from './caps/connectivity';
import { LAUNCHER_APP_DOMAIN } from './bundle-confs';
import { dialog } from 'electron';
import { UserLogin } from './caps/system/user-login';
import { makeNativeCryptor } from "napi-nacl";
import { Logging } from '../platform/inject-defs/confs';
import { makeSystemPlaces } from './caps/system/system-places';
import { createHash } from "crypto";
import { bytes as random } from './lib-common/random-node';
import { getServiceForCAP } from './caps/cap-over-rpc-from-platform';
import { sysFilesOnDevice } from 'core-3nweb-client-lib/build/lib-common-on-node/device-fs-places';
import { makeNetClient, makeServiceLocator } from './networks-confs';

const logging: Logging = { appLog, logError, logWarning, recordUnhandledRejectionsInProcess, removeOlderLogs };

async function sha512(bytes: Buffer): Promise<string> {
	const h = createHash('sha512');
	h.update(bytes);
	return h.digest('base64');
}

export function makePlatformResources(): PlatformResources {
	return {
		caps: {
			makeAppDownloader: sysPlaces => new AppDownloader(
				sysPlaces, makeServiceLocator('w3nApp', logging.logError), makeNetClient(), sha512
			),
			makeAutoStartupCAP,
			makeSystemPlaces: storages => makeSystemPlaces(storages, logging.logError),
			makeUICap,
			makeMediaDevicesCAP,
			makeConnectivity,
			shell: {
				makeClipboardCAP,
				makeOpenFileCAP,
				makeOpenFolderCAP,
				makeOpenURLCAP,
				openInMountedFolderCAP,
				makeMountsCAP,
				makeNotifications: Notifications.make,
			},
		},
		logging,
		LAUNCHER_APP_DOMAIN,
		makeCryptor: makeNativeCryptor,
		random,
		makeNetClient,
		makeServiceLocator,
		makeUserLogin: UserLogin.make,
		showSystemErrorBox: dialog.showErrorBox.bind(dialog),
		getSytemFormFactor,
		sysFilesOnDevice: sysFilesOnDevice,
		getServiceForCAP
	};
}
