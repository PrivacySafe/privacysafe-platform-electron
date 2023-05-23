/*
 Copyright (C) 2023 3NSoft Inc.
 
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

import { ExposedObj, ExposedServices } from 'core-3nweb-client-lib/build/ipc';
import { exposeService } from './expose-service-cap-ipc';
import { thisAppRPC, otherAppsRPC } from './client-caps-ipc';

type RPC = web3n.rpc.RPC;

export function exposeRpcCAP(
	cap: RPC, expServices: ExposedServices
): ExposedObj<RPC> {
	const wrap: ExposedObj<RPC> = {};
	if (cap.thisApp) {
		wrap.thisApp = thisAppRPC.expose(cap.thisApp, expServices);
	}
	if (cap.otherAppsRPC) {
		wrap.otherAppsRPC = otherAppsRPC.expose(cap.otherAppsRPC, expServices);
	}
	if (cap.exposeService) {
		wrap.exposeService = exposeService.expose(cap.exposeService, expServices);
	}
	return wrap;
}


Object.freeze(exports);