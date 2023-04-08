/*
 Copyright (C) 2022 3NSoft Inc.

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

import { ExposedFn, Caller, ExposedObj } from 'core-3nweb-client-lib/build/ipc';
import { strValType, toVal } from '../ipc-with-core/protobuf-msg';

type Connectivity = web3n.connectivity.Connectivity;
type OnlineAssesment = web3n.connectivity.OnlineAssesment;

export function exposeConnectivityCAP(
	cap: Connectivity
): ExposedObj<Connectivity> {
	return {
		isOnline: isOnline.wrapService(cap.isOnline)
	};
}

export function makeConnectivity(
	caller: Caller, objPath: string[]
): Connectivity {
	return {
		isOnline: isOnline.makeCaller(caller, objPath)
	};
}


namespace isOnline {

	export function wrapService(
		fn: Connectivity['isOnline']
	): ExposedFn {
		return () => {
			const promise = fn()
			.then(checkRes => strValType.pack(toVal(checkRes)));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): Connectivity['isOnline'] {
		const ipcPath = objPath.concat('isOnline');
		return () => caller.startPromiseCall(ipcPath, undefined)
		.then(buf => strValType.unpack(buf).value as OnlineAssesment);
	}

}
Object.freeze(isOnline);


Object.freeze(exports);