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

import { NsisUpdater, AppImageUpdater, MacUpdater, AppUpdater } from "electron-updater";
import { Subject } from "rxjs";
import { toRxObserver } from "../../lib-common/utils-for-observables";
import { PLATFORM_BUNDLE_URL } from "../../bundle-confs";
import { findPackInfo } from "../../confs";
import { platform } from "os";

type PlatformUpdateEvents = web3n.system.platform.PlatformUpdateEvents;
type Observer<T> = web3n.Observer<T>;


export class Updater {

	private readonly sinks: Subject<PlatformUpdateEvents>[] = [];

	private constructor(
		public readonly newBundleVersion: string,
		public readonly appUpdater: AppUpdater
	) {
		this.appUpdater.autoDownload = false;
		const next = (p: PlatformUpdateEvents) => this.sinks.forEach(s => s.next(p));
		const signalErr = (err: any) => {
			this.sinks.forEach(s => s.error(err));
			this.sinks.splice(0, this.sinks.length);
		};
		this.appUpdater.on('checking-for-update', () => {
			next({ event: 'checking-for-update' });
		});
		this.appUpdater.on('appimage-filename-updated', path => next({
			event: 'appimage-filename-updated', path
		}));
		for (const event of [
			'update-available', 'update-not-available',
			'update-downloaded', 'download-progress',
			'update-cancelled'
		]) {
			this.appUpdater.on(event as PlatformUpdateEvents['event'], info => next({
				event: event as any, info
			}));	
		}
		this.appUpdater.on('error', err => signalErr(err));
		Object.seal(this);
	}

	static make(newBundleVersion: string): Updater|undefined {
		const versionUrl = `${PLATFORM_BUNDLE_URL}/bundles/${newBundleVersion}`;
		const packInfo = findPackInfo();
		if (!packInfo) {
			return;
		}
		console.log(`🧐 Updater.make, platform is ${platform()}, packInfo is`, packInfo);
		const { arch, variant } = packInfo;
		if (variant === 'AppImage') {
			return new Updater(newBundleVersion, new AppImageUpdater({
				provider: 'generic',
				url: `${versionUrl}/linux/${arch}/`
			}));			
		} else if (variant === 'nsis') {
			return new Updater(newBundleVersion, new NsisUpdater({
				provider: 'generic',
				url: `${versionUrl}/windows/${arch}/`
			}));			
		} else if ((variant === 'dmg')
		|| ((platform() === 'darwin') && (variant === 'zip'))) {
			return new Updater(newBundleVersion, new MacUpdater({
				provider: 'generic',
				url: `${versionUrl}/mac/${arch}/`
			}));			
		} else {
			return;
		}
	}

	watchUpdaterEvents(observer: Observer<PlatformUpdateEvents>): () => void {
		const sink = new Subject<PlatformUpdateEvents>();
		this.sinks.push(sink);
		const sub = sink.asObservable()
		.subscribe(toRxObserver(observer));
		return () => sub.unsubscribe();
	}

}
Object.freeze(Updater.prototype);
Object.freeze(Updater);


Object.freeze(exports);