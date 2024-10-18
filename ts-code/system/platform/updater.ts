/*
 Copyright (C) 2021 - 2024 3NSoft Inc.
 
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
import { Subject } from "rxjs";
import { makeRuntimeException } from "../../lib-common/exceptions/runtime";
import { toRxObserver } from "../../lib-common/utils-for-observables";
import { PLATFORM_BUNDLE_URL } from "../../bundle-confs";
import { findPackInfo } from "../../confs";
import { platform } from "os";

type PlatformUpdateEvents = web3n.system.platform.PlatformUpdateEvents;
type Observer<T> = web3n.Observer<T>;

export interface Updater {
	checkForUpdateAndApply(
		observer: Observer<PlatformUpdateEvents>
	): () => void;
}

export async function makeUpdater(channel: string): Promise<Updater|undefined> {
	const packInfo = findPackInfo();
	if (!packInfo) {
		return;
	}
	const { arch, variant } = packInfo;
	if (variant === 'AppImage') {
		return wrapElectronBuilderUpdater(new AppImageUpdater({
			provider: 'generic',
			url: `${PLATFORM_BUNDLE_URL}/${channel}/linux/${arch}/`
		}));			
	} else if (variant === 'nsis') {
		return wrapElectronBuilderUpdater(new NsisUpdater({
			provider: 'generic',
			url: `${PLATFORM_BUNDLE_URL}/${channel}/windows/${arch}/`
		}));			
	} else if ((variant === 'dmg')
	|| ((platform() === 'freebsd') && (variant === 'zip'))) {
		return wrapElectronBuilderUpdater(new MacUpdater({
			provider: 'generic',
			url: `${PLATFORM_BUNDLE_URL}/${channel}/mac/${arch}/`
		}));			
	} else {
		return;
	}
}

function wrapElectronBuilderUpdater(updater: AppUpdater): Updater {
	updater.on('checking-for-update', () => {
		next({ event: 'checking-for-update' });
	});
	updater.on('appimage-filename-updated', path => next({
		event: 'appimage-filename-updated', path
	}));
	for (const event of [
		'update-available', 'update-not-available',
		'update-downloaded', 'download-progress',
		'update-cancelled'
	]) {
		updater.on(event as PlatformUpdateEvents['event'], info => next({
			event: event as any, info
		}));	
	}
	updater.on('error', err => signalErr(err));

	let proc: Promise<any>|undefined = undefined;
	let sinks: Subject<PlatformUpdateEvents>[] = [];
	const next = (p: PlatformUpdateEvents) => sinks.forEach(s => s.next(p));
	const signalErr = (err: any) => {
		sinks.forEach(s => s.error(err));
		sinks = [];
		proc = undefined;
	};
	const signalCompletion = () => {
		sinks.forEach(s => s.complete());
		sinks = [];
		proc = undefined;
	};

	return {
		checkForUpdateAndApply: observer => {
			const sink = new Subject<PlatformUpdateEvents>();
			sinks.push(sink);
			const sub = sink.asObservable()
			.subscribe(toRxObserver(observer));
			if (!proc) {
				proc = updater.checkForUpdatesAndNotify({
					title: `PrivacySafe platform updated`,
					body: `Close and restart platform to use new version`
				})
				.then(
					updateRes => {
						console.log(`🧐 updater.checkForUpdatesAndNotify() ->`, updateRes);
						setTimeout(() => signalCompletion(), 10*60*1000).unref();
					},
					signalErr
				);
			}
			return () => sub.unsubscribe();
		}
	};
}


Object.freeze(exports);