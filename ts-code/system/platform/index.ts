/*
 Copyright (C) 2021, 2024 3NSoft Inc.
 
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

import { doBodylessRequest } from "../../electron/request-utils";
import { makeRuntimeException } from "../../lib-common/exceptions/runtime";
import { assert } from "../../lib-common/assert";
import { Updater } from "./updater";
import { PackInfo, findPackInfo } from "../../confs";
import { platform } from "os";
import { PLATFORM_BUNDLE_URL } from "../../bundle-confs";
import { bundleVersion } from "../../bundle-version";
import { listBundledAppPacks, listInstalledBundledApps } from "../system-places";

type PlatformUpdateEvents = web3n.system.platform.PlatformUpdateEvents;
type BundleVersions = web3n.system.platform.BundleVersions;
type Observer<T> = web3n.Observer<T>;
type DistChannels = web3n.system.apps.DistChannels;


export class PlatformDownloader {

	private readonly packInfo: PackInfo|undefined;
	private readonly type: 'electron-builder-update' | undefined;
	private updater: Updater|undefined = undefined;

	constructor() {
		this.packInfo = findPackInfo();
		this.type = packInfoToType(this.packInfo);
		Object.seal(this);
	}

	async getCurrentVersion(): Promise<BundleVersions> {
		const bundledApps: BundleVersions['apps'] = {};
		for (const { id, current } of await listInstalledBundledApps()) {
			bundledApps[id] = current!;
		}
		const bundledAppPacks: BundleVersions['app-packs'] = {};
		for (const { id, version } of await listBundledAppPacks()) {
			bundledAppPacks[id] = version;
		}
		return {
			apps: bundledApps,
			"app-packs": bundledAppPacks,
			bundle: bundleVersion,
			platform: bundleVersion.substring(0, bundleVersion.indexOf('+')),
			runtimes: {}
		};
	}

	getChannels(): Promise<DistChannels> {
		return platfChannels();
	}

	getLatestVersion(channel: string): Promise<BundleVersions> {
		return channelLatestVersion(channel);
	}

	setupUpdater(
		newBundleVersion: string, observer: Observer<PlatformUpdateEvents>
	): () => void {
		if (this.type === 'electron-builder-update') {
			if (!this.updater
			|| (this.updater.newBundleVersion !== newBundleVersion)) {
				this.updater = Updater.make(newBundleVersion);
			}
			if (this.updater) {
				return this.updater.watchUpdaterEvents(observer);
			}
		}
		throw makeDownloadExc({ noUpdateMechanism: true }, this.packInfo);
	}

	private ensureUpdaterSet(): void {
		if (!this.updater) {
			throw `updater is not set, yet`;
		}
	}

	async downloadUpdate(): Promise<string[]|undefined> {
		this.ensureUpdaterSet();
		if (await this.updater!.appUpdater.checkForUpdates()) {
			return await this.updater!.appUpdater.downloadUpdate();
		}
	}

	async quitAndInstall(): Promise<void> {
		this.ensureUpdaterSet();
		this.updater!.appUpdater.quitAndInstall();
	}

}
Object.freeze(PlatformDownloader.prototype);
Object.freeze(PlatformDownloader);


function packInfoToType(
	packInfo: PackInfo|undefined
): PlatformDownloader['type'] {
	if (packInfo) {
		const os = platform();
		if ((os === 'linux') && (packInfo.variant === 'AppImage')) {
			return 'electron-builder-update';
		} else if ((os === 'darwin')
		&& ((packInfo.variant === 'dmg') || (packInfo.variant === 'zip'))) {
			return 'electron-builder-update';
		} else if ((os === 'win32') && (packInfo.variant === 'nsis')) {
			return 'electron-builder-update';
		}
	}
}

const bundleInfoFName = 'versions-in-bundle.json';

async function getJson<T>(url: string): Promise<T|undefined> {
	const rep = await doBodylessRequest<T>({
		method: 'GET', url, responseType: 'json'
	});
	return ((rep.status === 200) ? rep.data : undefined);
}

async function platfChannels(): Promise<DistChannels> {
	const channels = await getJson<DistChannels>(
		`${PLATFORM_BUNDLE_URL}/platform/channels`
	);
	if (channels && (typeof channels.channels === 'object')) {
		return channels;
	} else {
		throw makeDownloadExc({ noChannels: true });
	}
}

async function channelLatestVersion(channel: string): Promise<BundleVersions> {
	assert((typeof channel === 'string') && (channel.length > 0),
		`Invalid channel: ${channel}`);
	const latest = await getJson<BundleVersions>(
		`${PLATFORM_BUNDLE_URL}/${channel}/${bundleInfoFName}`
	);
	if (latest) {
		return latest;
	} else {
		throw makeDownloadExc({ noVersions: true });
	}
}

export interface PlatformDownloadException extends web3n.RuntimeException {
	type: 'platform-download',
	noChannels?: true;
	noVersions?: true;
	noVersionVariants?: true;
	noUnpackedVariant?: true;
	noAppContent?: true;
	badAppFile?: true;
	noUpdateMechanism?: true;
}

function makeDownloadExc(
	flags: Partial<PlatformDownloadException>, cause?: any
): PlatformDownloadException {
	return makeRuntimeException<PlatformDownloadException>(
		'platform-download', { cause }, flags
	);
}

// function runElectronBuilderUpdate(
// 	newBundleVersion: string, observer: Observer<PlatformDownloadProgress>
// ): () => void {
// 	let unsub: (() => void)|undefined = undefined;
// 	makeUpdater(newBundleVersion).then(async updater => {
// 		if (updater) {
// 			unsub = updater.checkForUpdateAndApply(observer);
// 		} else if (observer && observer.error) {
// 			observer.error(new Error(
// 				`Failed to create an updater. Packing info is ${
// 					JSON.stringify(findPackInfo())
// 				}`
// 			));
// 		}
// 	});
// 	return () => {
// 		if (unsub) {
// 			unsub();
// 		} else {
// 			observer = undefined as any;
// 		}
// 	}; 
// }


Object.freeze(exports);