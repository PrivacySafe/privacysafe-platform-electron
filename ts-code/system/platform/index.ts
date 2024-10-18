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
import { makeUpdater } from "./updater";
import { PackInfo, findPackInfo } from "../../confs";
import { platform } from "os";
import { PLATFORM_BUNDLE_URL } from "../../bundle-confs";

type AppVersionPacks = web3n.system.apps.AppDistributionList;
type PlatformDownloadProgress = web3n.system.platform.PlatformUpdateEvents;
type Observer<T> = web3n.Observer<T>;
type DistChannels = web3n.system.apps.DistChannels;


export class PlatformDownloader {

	private readonly packInfo: PackInfo|undefined;
	private readonly type: 'electron-builder-update' | undefined;

	constructor() {
		this.packInfo = findPackInfo();
		this.type = packInfoToType(this.packInfo);
		Object.seal(this);
	}

	getChannels(): Promise<DistChannels> {
		return platfChannels();
	}

	getLatestVersion(channel: string): Promise<string> {
		return channelLatestVersion(channel);
	}

	getVersionList(version: string): Promise<AppVersionPacks> {
		return listVersionPacks(version);
	}

	async availableUpdateType(): Promise<PlatformDownloader['type']> {
		return this.type;
	}

	downloadAndApplyUpdate(
		channel: string, observer: Observer<PlatformDownloadProgress>
	): () => void {
		if (this.type === 'electron-builder-update') {
			return runElectronBuilderUpdate(channel, observer);
		} else {
			throw makeDownloadExc({ noUpdateMechanism: true }, this.packInfo);
		}
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

interface BundleVersionsInfo {
	bundle: string;
	platform: string;
	apps: { [ app: string ]: string };
	runtimes: { [ runtime: string ]: string };
}

async function getJson<T>(url: string): Promise<T|undefined> {
	const rep = await doBodylessRequest<T>({
		method: 'GET', url, responseType: 'json'
	});
	return ((rep.status === 200) ? rep.data : undefined);
}

async function platfChannels(): Promise<DistChannels> {
	const channels = await getJson<DistChannels>(`${PLATFORM_BUNDLE_URL}/platform/channels`);
	if (channels && (typeof channels.channels === 'object')) {
		return channels;
	} else {
		throw makeDownloadExc({ noChannels: true });
	}
}

// function isNonEmptyStringArr(arr: string[]): boolean {
// 	return (Array.isArray(arr) && (arr.length > 0)
// 	&& !arr.find(s => ((typeof s !== 'string') || !s)));
// }

// async function listChannelVersions(channel: string): Promise<string[]> {
// 	assert((typeof channel === 'string') && (channel.length > 0),
// 		`Invalid channel: ${channel}`);
// 	const versions = await getJson<string[]>(`${PLATFORM_BUNDLE_URL}/${channel}.list`);
// 	if (versions && isNonEmptyStringArr(versions)) {
// 		return versions;
// 	} else {
// 		throw makeDownloadExc({ noVersions: true });
// 	}
// }

async function channelLatestVersion(channel: string): Promise<string> {
	assert((typeof channel === 'string') && (channel.length > 0),
		`Invalid channel: ${channel}`);
	const latest = await getJson<BundleVersionsInfo>(
		`${PLATFORM_BUNDLE_URL}/${channel}/${bundleInfoFName}`
	);
	if (latest && (typeof latest.bundle === 'string')) {
		return latest.bundle;
	} else {
		throw makeDownloadExc({ noVersions: true });
	}
}

async function listVersionPacks(version: string): Promise<AppVersionPacks> {

	// XXX do we even need this in bundle?

	throw new Error(`Not implement, cause this may change`);

	// assert((typeof version === 'string') && (version.length > 0),
	// 	`Invalid version: ${version}`);
	// const lst = await getJson<AppVersionPacks>(
	// 	`${platformUrl()}/${version}/list`);
	// if (lst && (typeof lst === 'object')) {
	// 	return lst;
	// } else {
	// 	throw makeDownloadExc({ noVersionVariants: true });
	// }
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

function runElectronBuilderUpdate(
	channel: string, observer: Observer<PlatformDownloadProgress>
): () => void {
	let unsub: (() => void)|undefined = undefined;
	makeUpdater(channel).then(async updater => {
		if (updater) {
			unsub = updater.checkForUpdateAndApply(observer);
		} else if (observer && observer.error) {
			observer.error(new Error(
				`Failed to create an updater. Packing info is ${
					JSON.stringify(findPackInfo())
				}`
			));
		}
	});
	return () => {
		if (unsub) {
			unsub();
		} else {
			observer = undefined as any;
		}
	}; 
}

function noop() {}


Object.freeze(exports);