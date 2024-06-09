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

import { ExposedFn, Caller, ExposedObj, ExposedServices, EnvelopeBody } from 'core-3nweb-client-lib/build/ipc';
import { ProtoType, strValType, Value, toOptVal, valOfOpt, bytesValType } from '../ipc-with-core/protobuf-msg';
import { apps_opener as pb } from '../protos/apps_opener.proto';
import { Subject, map } from 'rxjs';

type AppsOpener = web3n.apps.AppsOpener;
type AppState = web3n.apps.AppState;
type AppEvent = web3n.apps.AppEvent;
type AppVersions = web3n.apps.AppVersions;
type ReadonlyFile = web3n.files.ReadonlyFile;

export function exposeAppsOpenerCAP(
	cap: AppsOpener, expServices: ExposedServices
): ExposedObj<AppsOpener> {
	return {
		listApps: listApps.wrapService(cap.listApps),
		openApp: openApp.wrapService(cap.openApp),
		getAppFileBytes: getAppFile.wrapService(cap.getAppFileBytes),
		getAppManifest: getAppManifest.wrapService(cap.getAppManifest),
		getAppVersions: getAppVersions.wrapService(cap.getAppVersions),
		watchApps: watchApps.wrapService(cap.watchApps)
	};
}

export function makeAppsOpenerCaller(
	caller: Caller, objPath: string[]
): AppsOpener {
	return {
		listApps: listApps.makeCaller(caller, objPath),
		openApp: openApp.makeCaller(caller, objPath),
		getAppFileBytes: getAppFile.makeCaller(caller, objPath),
		getAppManifest: getAppManifest.makeCaller(caller, objPath),
		getAppVersions: getAppVersions.makeCaller(caller, objPath),
		watchApps: watchApps.makeCaller(caller, objPath)
	};
}


interface AppVersionsMsg {
	id: string;
	current?: Value<string>;
	bundled?: Value<string>;
	packs: string[];
}
function appVersionsToMsg(v: AppVersions): AppVersionsMsg {
	return {
		id: v.id,
		bundled: toOptVal(v.bundled),
		current: toOptVal(v.current),
		packs: (v.packs ? v.packs : [])
	};
}
function appVersionsFromMsg(v: AppVersionsMsg): AppVersions {
	return {
		id: v.id,
		bundled: valOfOpt(v.bundled),
		current: valOfOpt(v.current),
		packs: ((v.packs.length > 0) ? v.packs : undefined)
	};
}


namespace listApps {

	const requestType = ProtoType.for<{
		filter: AppState[];
	}>(pb.ListAppsRequestBody);

	const replyType = ProtoType.for<{
		apps: AppVersionsMsg[];
	}>(pb.ListAppsReplyBody);

	export function wrapService(fn: AppsOpener['listApps']): ExposedFn {
		return buf => {
			const { filter } = requestType.unpack(buf);
			const promise = fn((filter.length > 0) ? filter : undefined)
			.then(apps => replyType.pack({ apps: apps.map(appVersionsToMsg) }));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsOpener['listApps'] {
		const path = objPath.concat('listApps');
		return async filter => {
			const buf = await caller.startPromiseCall(
				path, requestType.pack({ filter: (filter ? filter : []) })
			);
			return replyType.unpack(buf).apps.map(appVersionsFromMsg);
		};
	}

}
Object.freeze(listApps);


namespace openApp {

	const requestType = ProtoType.for<{
		id: string; devtools?: boolean;
	}>(pb.OpenAppRequestBody);
	
	export function wrapService(fn: AppsOpener['openApp']): ExposedFn {
		return buf => {
			const { id, devtools } = requestType.unpack(buf);
			const promise = fn(id, devtools);
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsOpener['openApp'] {
		const path = objPath.concat('openApp');
		return async (id, devtools) => {
			const req = requestType.pack({ id, devtools });
			await caller.startPromiseCall(path, req);
		};
	}

}
Object.freeze(openApp);


namespace getAppVersions {

	const requestType = ProtoType.for<{
		id: string;
		filter: AppState[];
	}>(pb.GetAppVersionsRequestBody);

	const appVersionsType = ProtoType.for<AppVersionsMsg>(pb.AppVersions);

	export function wrapService(fn: AppsOpener['getAppVersions']): ExposedFn {
		return buf => {
			const { id, filter } = requestType.unpack(buf);
			const promise = fn(id, ((filter.length > 0) ? filter : undefined))
			.then(v => (v ?
				appVersionsType.pack(appVersionsToMsg(v)) : undefined
			));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsOpener['getAppVersions'] {
		const path = objPath.concat('getAppVersions');
		return async (id, filter) => {
			const req = requestType.pack({ id, filter: (filter ? filter : []) });
			const buf = await caller.startPromiseCall(path, req);
			return (buf ?
				appVersionsFromMsg(appVersionsType.unpack(buf)) : undefined
			);
		};
	}

}
Object.freeze(getAppVersions);


namespace getAppManifest {

	const requestType = ProtoType.for<{
		id: string;
		version?: Value<string>;
	}>(pb.GetAppManifestRequestBody);

	export function wrapService(fn: AppsOpener['getAppManifest']): ExposedFn {
		return buf => {
			const { id, version } = requestType.unpack(buf);
			const promise = fn(id, valOfOpt(version))
			.then(m => (m ?
				strValType.pack({ value: JSON.stringify(m) }) : undefined
			));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsOpener['getAppManifest'] {
		const path = objPath.concat('getAppManifest');
		return async (id, version) => {
			const req = requestType.pack({ id, version: toOptVal(version) });
			const buf = await caller.startPromiseCall(path, req);
			return (buf ?
				JSON.parse(strValType.unpack(buf).value) : undefined
			);
		};
	}

}
Object.freeze(getAppManifest);


namespace getAppFile {

	const requestType = ProtoType.for<{
		id: string;
		path: string;
		version?: Value<string>;
	}>(pb.GetAppFileBytesRequestBody);

	export function wrapService(fn: AppsOpener['getAppFileBytes']): ExposedFn {
		return buf => {
			const { id, path, version } = requestType.unpack(buf);
			const promise = fn(id, path, valOfOpt(version))
			.then(bytes => (bytes ?
				bytesValType.pack({ value: bytes }) : undefined
			));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsOpener['getAppFileBytes'] {
		const methodPath = objPath.concat('getAppFileBytes');
		return async (id, path, version) => {
			const req = requestType.pack({ id, path, version: toOptVal(version) });
			const buf = await caller.startPromiseCall(methodPath, req);
			return (buf ? bytesValType.unpack(buf).value : undefined);
		};
	}

}
Object.freeze(getAppFile);


namespace watchApps {

	const eventType = ProtoType.for<AppEvent>(pb.AppEvent);

	export function wrapService(
		fn: AppsOpener['watchApps']
	): ExposedFn {
		return () => {
			const s = new Subject<AppEvent>();
			const obs = s.asObservable().pipe(
				map(ev => eventType.pack(ev))
			);
			const onCancel = fn(s);
			return { obs, onCancel };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsOpener['watchApps'] {
		const path = objPath.concat('watchApps');
		return obs => {
			const s = new Subject<EnvelopeBody>();
			const unsub = caller.startObservableCall(path, undefined, s);
			s.subscribe({
				next: buf => {
					if (obs.next) {
						obs.next(eventType.unpack(buf));
					}
				},
				complete: obs.complete,
				error: obs.error
			});
			return unsub;
		};
	}

}
Object.freeze(watchApps);


Object.freeze(exports);