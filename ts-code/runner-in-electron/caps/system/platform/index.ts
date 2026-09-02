/*
 Copyright (C) 2021, 2024 - 2025 3NSoft Inc.
 
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

import { doBodylessRequest } from "../../../electron/request-utils";
import { makeRuntimeException } from "../../../../platform/lib-common/exceptions/runtime";
import { assert } from "../../../../platform/lib-common/assert";
import { Updater } from "./updater";
import { PackInfo, findPackInfo } from "../../../confs";
import { platform } from "os";
import { BUNDLE_BASE_URL } from "../../../bundle-confs";
import { bundleVersion } from "../../../bundle-version";
import { listBundledAppPacks, listInstalledBundledApps } from "../system-places";

type PlatformDownloaderCAP = web3n.system.platform.PlatformDownloader;
type PlatformUpdateEvents = web3n.system.platform.PlatformUpdateEvents;
type BundleVersions = web3n.system.platform.BundleVersions;
type Observer<T> = web3n.Observer<T>;
type DistChannels = web3n.system.apps.DistChannels;


export class PlatformDownloader implements PlatformDownloaderCAP {

	private updater: Updater|undefined = undefined;

	private constructor(
		private readonly type: 'electron-builder-update',
		private readonly packInfo: PackInfo,
		private readonly closeProcessesOnUpdateRestart: () => Promise<void>
	) {
		Object.seal(this);
	}

	static makeIfAvailable(closeProcessesOnUpdateRestart: () => Promise<void>): PlatformDownloader|undefined {
		const packInfo = findPackInfo();
		if (!packInfo) {
			return;
		}
		const type = packInfoToType(packInfo);
		if (!type) {
			return;
		}
		return new PlatformDownloader(type, packInfo, closeProcessesOnUpdateRestart);
	}

	wrapCAP(): PlatformDownloaderCAP {
		return {
			getChannels: this.getChannels.bind(this),
			getLatestVersion: this.getLatestVersion.bind(this),
			setupUpdater: this.setupUpdater.bind(this),
			downloadUpdate: this.downloadUpdate.bind(this),
			quitAndInstall: this.quitAndInstall.bind(this),
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
				this.updater = Updater.make(newBundleVersion, osLabelBeforeVersion);
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
		await this.closeProcessesOnUpdateRestart();
		this.updater!.appUpdater.quitAndInstall();
	}

}
Object.freeze(PlatformDownloader.prototype);
Object.freeze(PlatformDownloader);


export async function getPlatformCurrentVersion(): Promise<BundleVersions> {
	const bundledApps: BundleVersions['apps'] = {};
	for (const { id, version } of await listInstalledBundledApps()) {
		bundledApps[id] = version;
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

function packInfoToType(packInfo: PackInfo): PlatformDownloader['type']|undefined {
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

const bundleInfoFName = 'versions-in-bundle.json';

async function getJson<T>(url: string): Promise<T|undefined> {
	const rep = await doBodylessRequest<T>({
		method: 'GET', url, responseType: 'json'
	});
	return ((rep.status === 200) ? rep.data : undefined);
}

async function platfChannels(): Promise<DistChannels> {
	for (const platfUrls of [
		`${BUNDLE_BASE_URL}/platform/desktops/channels`,
		`${BUNDLE_BASE_URL}/platform/channels`
	]) {
		const channels = await getJson<DistChannels>(platfUrls);
		if (channels && (typeof channels.channels === 'object')) {
			return channels;
		}
	}
	throw makeDownloadExc({ noChannels: true });
}

// singleton of info url that worked
let osLabelBeforeVersion: string|undefined = undefined;

async function channelLatestVersion(channel: string): Promise<BundleVersions> {
	assert((typeof channel === 'string') && (channel.length > 0), `Invalid channel: ${channel}`);
	const olderUrl = `${BUNDLE_BASE_URL}/${channel}/${bundleInfoFName}`;
	for (const bundleInfoUrl of bundleInfoUrlCandidates(channel).concat(olderUrl)) {
		const latest = await getJson<BundleVersions>(bundleInfoUrl);
		if (latest) {
			if (bundleInfoUrl === olderUrl) {
				osLabelBeforeVersion = undefined;
				// DEBUG log
				console.log(`Using older url addres for platform update`);
			} else {
				let startInd = bundleInfoUrl.indexOf(`/${channel}/`) + 2 + channel.length;
				const endInd = bundleInfoUrl.length - bundleInfoFName.length - 1;
				osLabelBeforeVersion = bundleInfoUrl.slice(startInd, endInd);
				// DEBUG log
				console.log(`Using newer url addres for platform update:`, { url: bundleInfoUrl, osLabel: osLabelBeforeVersion });
			}
			return latest;
		}
	}
	throw makeDownloadExc({ noVersions: true });
}

function bundleInfoUrlCandidates(channel: string): string[] {
	let os = platform();
	let urlCandidates: string[];
	if (os === 'darwin') {
		urlCandidates = [ `${BUNDLE_BASE_URL}/${channel}/mac/${bundleInfoFName}` ];
	} else if (os === 'win32') {
		urlCandidates = [ `${BUNDLE_BASE_URL}/${channel}/windows/${bundleInfoFName}` ];
	} else {
		urlCandidates = [
			`${BUNDLE_BASE_URL}/${channel}/gnulinux/${bundleInfoFName}`,
			`${BUNDLE_BASE_URL}/${channel}/linux/${bundleInfoFName}`
		];
	}
	return urlCandidates;
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


Object.freeze(exports);