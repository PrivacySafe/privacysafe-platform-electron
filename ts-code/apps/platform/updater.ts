/*
 Copyright (C) 2021 - 2023 3NSoft Inc.
 
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

import { NsisUpdater, AppImageUpdater, MacUpdater, AppUpdater, ProgressInfo, UpdateDownloadedEvent, UpdateInfo } from "electron-updater";
import { arch, platform } from "os";
import { Subject } from "rxjs";
import { makeRuntimeException } from "../../lib-common/exceptions/runtime";
import { toRxObserver } from "../../lib-common/utils-for-observables";
import { BASE_ELECTRON_UPDATES_URL } from "../../bundle-confs";

type PlatformDownloadProgress = web3n.apps.PlatformDownloadProgress;
type Observer<T> = web3n.Observer<T>;
type PackVariant = web3n.apps.PackVariant;


type PlatformType = web3n.apps.PlatformType;
type ArchType = web3n.apps.ArchType;

function electronUpdatesBaseUrl(
	platform: PlatformType, arch: ArchType
): string {
	return `${BASE_ELECTRON_UPDATES_URL}${platform}/${arch}/`;
}

// XXX postpone check of install methods
// export function packingInfoOfThis(): PackVariant {
// 	return require('../packing-info.json');
// }

export interface Updater {
	checkForUpdateAndApply(
		observer: Observer<PlatformDownloadProgress>
	): () => void;
}

export async function makeUpdater(channel: string): Promise<Updater|undefined> {
	if (platform() === 'linux') {
		// XXX postpone check of install methods
		// const { variant, arch } = packingInfoOfThis();
		// if (variant === 'AppImage') {
		// 	return wrapElectronBuilderUpdater(new AppImageUpdater({
		// 		provider: 'generic', channel,
		// 		url: electronUpdatesBaseUrl('linux', arch)
		// 	}));
		// }
		const arcVal = arch();
		if ((arcVal === 'x64') || (arcVal === 'arm64')) {
			return wrapElectronBuilderUpdater(new AppImageUpdater({
				provider: 'generic', channel,
				url: electronUpdatesBaseUrl('linux', arcVal)
			}));			
		}
	} else if (platform() === 'win32') {
		// XXX postpone check of install methods
		// const { variant, arch } = packingInfoOfThis();
		// if (variant === 'nsis') {
		// 	return wrapElectronBuilderUpdater(new NsisUpdater({
		// 		provider: 'generic', channel,
		// 		url: electronUpdatesBaseUrl('windows', arch)
		// 	}));
		// }
		const arcVal = arch();
		if (arcVal === 'x64') {
			return wrapElectronBuilderUpdater(new NsisUpdater({
				provider: 'generic', channel,
				url: electronUpdatesBaseUrl('windows', arcVal)
			}));
		}
	} else if (platform() === 'darwin') {
		const arcVal = arch();
		if ((arcVal === 'x64') || (arcVal === 'arm64')) {
			return wrapElectronBuilderUpdater(new MacUpdater({
				provider: 'generic', channel,
				url: electronUpdatesBaseUrl('mac', arcVal)
			}));
		}
	} else {
		return;
	}
}

function wrapElectronBuilderUpdater(updater: AppUpdater): Updater {
	updater.on('checking-for-update', () => {
		next({ event: 'checking-for-update' });
	});
	updater.on('update-available', (info: UpdateInfo) => {
		next({
			event: 'update-available',
			totalSizeMBs: Math.round(info.files[0].size!/1024/1024)
		});
	});
	updater.on('update-not-available', info => {
		signalErr(makeRuntimeException('platform-download', {
			message: `Update unexpectedly not available`,
			cause: info
		}, {}));
	});
	updater.on('download-progress', (progress: ProgressInfo) => {
		next({
			event: 'download-progress',
			percent: progress.percent
		});
	});
	updater.on('update-downloaded', (info: UpdateDownloadedEvent) => {
		next({ event: 'download-progress', percent: 100 });
	});
	updater.on('error', err => signalErr(err));

	let proc: Promise<any>|undefined = undefined;
	let sinks: Subject<PlatformDownloadProgress>[] = [];
	const next = (p: PlatformDownloadProgress) => sinks.forEach(s => s.next(p));
	const signalErr = (err: any) => {
		sinks.forEach(s => s.error(err));
		sinks = [];
		proc = undefined;
	}
	const signalCompletion = () => {
		sinks.forEach(s => s.complete());
		sinks = [];
		proc = undefined;
	};

	return {
		checkForUpdateAndApply: observer => {
			const sink = new Subject<PlatformDownloadProgress>();
			sinks.push(sink);
			const sub = sink.asObservable()
			.subscribe(toRxObserver(observer));
			if (!proc) {
				proc = updater.checkForUpdatesAndNotify()
				.then(signalCompletion, signalErr);
			}
			return () => sub.unsubscribe();
		}
	};
}


Object.freeze(exports);