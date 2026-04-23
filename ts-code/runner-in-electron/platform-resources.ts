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
import{ appLog, dohURLs, logError, logWarning, recordUnhandledRejectionsInProcess } from './confs';
import { makeAutoStartupCAP } from './init-proc/auto-startup';
import { AppDownloader } from '../platform/caps/system/apps-downloader';
import { makeAllFileDialogOpeners } from './caps/shell/file-dialogs';
import { makeClipboardCAP } from './caps/shell/clipboard';
import { makeOpenFileCAP, makeOpenFolderCAP, makeOpenURLCAP, openInMountedFolderCAP } from "./caps/shell/openers";
import { makeMountsCAP } from './caps/shell/mounts';
import { Notifications } from './caps/shell/user-notifications';
import { makeUICap } from './caps/ui';
import { makeMediaDevicesCAP } from './caps/media-devices/mediaDevices';
import { makeConnectivity } from './caps/connectivity';
import { LAUNCHER_APP_DOMAIN } from './bundle-confs';
import { dialog } from 'electron';
import { UserLogin } from './caps/system/user-login';
import { makeNativeCryptor } from "napi-nacl";
import { makeServiceLocator, DnsResolver } from 'core-3nweb-client-lib/build/lib-client/service-locator';
import { dohAt } from 'core-3nweb-client-lib';
import { promises as dns } from 'dns';
import { makeNetClient } from 'core-3nweb-client-lib';
import { makeRequestFromNode } from "core-3nweb-client-lib/build/lib-common-on-node/request-from-node";
import { openSocketFromNode } from "core-3nweb-client-lib/build/lib-common-on-node/websocket-from-node";
import { Logging } from '../platform/inject-defs/confs';
import { makeSystemPlaces } from './caps/system/system-places';
import { createHash } from "crypto";
import { bytes as random } from './lib-common/random-node';

export const requestFromNode = makeRequestFromNode();

export const dnsResolvers: DnsResolver[] = [
	{ resolveTxt: dns.resolveTxt },
	...dohURLs.map(url => dohAt(requestFromNode, url))
];

const logging: Logging = { appLog, logError, logWarning, recordUnhandledRejectionsInProcess };

async function sha512(bytes: Buffer): Promise<string> {
	const h = createHash('sha512');
	h.update(bytes);
	return h.digest('base64');
}

export function makePlatformResources(): PlatformResources {
	return {
		caps: {
			makeAppDownloader: sysPlaces => new AppDownloader(
				sysPlaces, requestFromNode, dnsResolvers, logging.logError, sha512
			),
			makeAutoStartupCAP,
			makeSystemPlaces: storages => makeSystemPlaces(storages, logging.logError),
			makeUICap,
			makeMediaDevicesCAP,
			makeConnectivity,
			shell: {
				makeAllFileDialogOpeners,
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
		makeNetClient: () => makeNetClient(requestFromNode, openSocketFromNode),
		makeServiceLocator: makeServiceLocator(...dnsResolvers),
		makeUserLogin: UserLogin.make,
		showSystemErrorBox: dialog.showErrorBox.bind(dialog)
	};
}
