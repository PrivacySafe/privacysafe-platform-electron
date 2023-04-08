/*
 Copyright (C) 2021 - 2022 3NSoft Inc.
 
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
import { ProtoType } from '../../ipc-with-core/protobuf-msg';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { apps_installer as pb } from '../../protos/apps_installer.proto';

type AppsInstaller = web3n.apps.AppsInstaller;
type BundleUnpackProgress = web3n.apps.BundleUnpackProgress;

export function exposeAppsInstallerCAP(
	cap: AppsInstaller
): ExposedObj<AppsInstaller> {
	return {
		unpackBundledWebApp: unpackBundledWebApp.wrapService(
			cap.unpackBundledWebApp),
		installWebApp: installWebApp.wrapService(cap.installWebApp)
	};
}

export function makeAppsInstallerCaller(
	caller: Caller, objPath: string[]
): AppsInstaller {
	return {
		unpackBundledWebApp: unpackBundledWebApp.makeCaller(caller, objPath),
		installWebApp: installWebApp.makeCaller(caller, objPath)
	};
}

const requestWithAppIdType = ProtoType.for<{
	id: string;
}>(pb.RequestWithAppId);


namespace unpackBundledWebApp {

	const progressEventType = ProtoType.for<BundleUnpackProgress>(
		pb.BundleUnpackProgress);

	export function wrapService(fn: AppsInstaller['unpackBundledWebApp']): ExposedFn {
		return buf => {
			const { id } = requestWithAppIdType.unpack(buf);
			const s = new Subject<BundleUnpackProgress>();
			const obs = s.asObservable().pipe(
				map(p => progressEventType.pack(p))
			);
			const onCancel = fn(id, s);
			return { obs, onCancel };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsInstaller['unpackBundledWebApp'] {
		const path = objPath.concat('unpackBundledWebApp');
		return (id, obs) => {
			const s = new Subject<EnvelopeBody>();
			const unsub = caller.startObservableCall(
				path, requestWithAppIdType.pack({ id }), s);
			s.pipe(
				map(buf => progressEventType.unpack(buf))
			)
			.subscribe(toRxObserver(obs));
			return unsub;
		};
	}

}
Object.freeze(unpackBundledWebApp);


const requestWithAppIdAndVersionType = ProtoType.for<{
	id: string; version: string;
}>(pb.RequestWithAppIdAndVersion);


namespace installWebApp {

	export function wrapService(fn: AppsInstaller['installWebApp']): ExposedFn {
		return buf => {
			const { id, version } = requestWithAppIdAndVersionType.unpack(buf);
			const promise = fn(id, version);
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): AppsInstaller['installWebApp'] {
		const path = objPath.concat('installWebApp');
		return async (id, version) => {
			const req = requestWithAppIdAndVersionType.pack({ id, version });
			await caller.startPromiseCall(path, req);
		};
	}

}
Object.freeze(installWebApp);


Object.freeze(exports);