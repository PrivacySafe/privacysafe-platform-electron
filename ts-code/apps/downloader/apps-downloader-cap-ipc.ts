/*
 Copyright (C) 2021 - 2022, 2024 3NSoft Inc.
 
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

import { ExposedFn, Caller, ExposedObj, EnvelopeBody } from 'core-3nweb-client-lib/build/ipc';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProtoType, strValType } from '../../ipc-with-core/protobuf-msg';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { apps_downloader as pb } from '../../protos/apps_downloader.proto';

type AppsDownloader = web3n.apps.AppsDownloader;
type DownloadProgress = web3n.apps.DownloadProgress;

export function exposeAppsDownloaderCAP(
	cap: AppsDownloader
): ExposedObj<AppsDownloader> {
	return {
		getAppChannels: getAppChannels.wrapService(cap.getAppChannels),
		getAppVersionFilesList: getAppVersionList.wrapService(cap.getAppVersionFilesList),
		getLatestAppVersion: getLatestAppVersion.wrapService(
			cap.getLatestAppVersion),
		downloadWebApp: downloadWebApp.wrapService(cap.downloadWebApp),
	};
}

export function makeAppsDownloaderCaller(
	caller: Caller, objPath: string[]
): AppsDownloader {
	return {
		getAppChannels: getAppChannels.makeCaller(caller, objPath),
		getAppVersionFilesList: getAppVersionList.makeCaller(caller, objPath),
		getLatestAppVersion: getLatestAppVersion.makeCaller(caller, objPath),
		downloadWebApp: downloadWebApp.makeCaller(caller, objPath),
	};
}

const requestWithAppIdType = ProtoType.for<{
	id: string;
}>(pb.RequestWithAppId);

const requestWithAppIdAndVersionType = ProtoType.for<{
	id: string; version: string;
}>(pb.RequestWithAppIdAndVersion);


namespace getAppChannels {

	export function wrapService(fn: AppsDownloader['getAppChannels']): ExposedFn {
		return buf => {
			const { id } = requestWithAppIdType.unpack(buf);
			const promise = fn(id)
			.then(channels => strValType.pack({
				value: JSON.stringify(channels)
			}));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsDownloader['getAppChannels'] {
		const path = objPath.concat('getAppChannels');
		return async id => {
			const req = requestWithAppIdType.pack({ id });
			const buf = await caller.startPromiseCall(path, req);
			return JSON.parse(strValType.unpack(buf).value);
		};
	}

}
Object.freeze(getAppChannels);


namespace getLatestAppVersion {

	const requestType = ProtoType.for<{
		id: string; channel: string;
	}>(pb.GetLatestAppVersionRequestBody);

	export function wrapService(fn: AppsDownloader['getLatestAppVersion']): ExposedFn {
		return buf => {
			const { id, channel } = requestType.unpack(buf);
			const promise = fn(id, channel)
			.then(latest => strValType.pack({ value: latest }));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsDownloader['getLatestAppVersion'] {
		const path = objPath.concat('getLatestAppVersion');
		return async (id, channel) => {
			const req = requestType.pack({ id, channel });
			const buf = await caller.startPromiseCall(path, req);
			return strValType.unpack(buf).value;
		};
	}

}
Object.freeze(getLatestAppVersion);


namespace getAppVersionList {

	export function wrapService(fn: AppsDownloader['getAppVersionFilesList']): ExposedFn {
		return buf => {
			const { id, version } = requestWithAppIdAndVersionType.unpack(buf);
			const promise = fn(id, version)
			.then(packs => strValType.pack({ value: JSON.stringify(packs) }));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsDownloader['getAppVersionFilesList'] {
		const path = objPath.concat('getAppVersionList');
		return async (id, version) => {
			const req = requestWithAppIdAndVersionType.pack({ id, version });
			const buf = await caller.startPromiseCall(path, req);
			return JSON.parse(strValType.unpack(buf).value);
		};
	}

}
Object.freeze(getAppVersionList);


namespace downloadWebApp {

	const progressEventType = ProtoType.for<DownloadProgress>(
		pb.DownloadProgress);
	
	export function wrapService(
		fn: AppsDownloader['downloadWebApp']
	): ExposedFn {
		return buf => {
			const { id, version } = requestWithAppIdAndVersionType.unpack(buf);
			const s = new Subject<DownloadProgress>();
			const obs = s.asObservable().pipe(
				map(p => progressEventType.pack(p))
			);
			const onCancel = fn(id, version, s);
			return { obs, onCancel };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsDownloader['downloadWebApp'] {
		const path = objPath.concat('downloadWebApp');
		return (id, version, obs) => {
			const s = new Subject<EnvelopeBody>();
			const unsub = caller.startObservableCall(
				path, requestWithAppIdAndVersionType.pack({ id, version }), s);
			s.pipe(
				map(buf => {
					const p = progressEventType.unpack(buf);
					if (p.currentFileSize === 0) {
						delete p.currentFileSize;
					}
					return p;
				})
			)
			.subscribe(toRxObserver(obs));
			return unsub;
		};
	}

}
Object.freeze(downloadWebApp);


Object.freeze(exports);