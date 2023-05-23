/*
 Copyright (C) 2020 - 2023 3NSoft Inc.
 
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

import { ObjectsConnector, makeW3Nclient, promiseW3Nclient } from 'core-3nweb-client-lib/build/ipc';
import { closeSelf } from "../init-proc/close-cap-ipc";
import { makeLogoutCaller } from "../init-proc/logout-cap-ipc";
import { makeTestStandCaller } from "../test-stand/test-stand-cap-ipc";
import { makeConnectivity } from '../connectivity/connectivity-cap-ipc';
import { makeAppsCaller, promiseAppsCaller } from '../apps/ipc-client-side';
import { makeShellCaller, promiseShellCaller } from '../shell/ipc-client-side';
import { makeRpcCaller, promiseRpcCaller } from '../rpc/ipc-client-side';

type W3N = web3n.caps.W3N;

export function makeClientSideW3N(clientSide: ObjectsConnector): W3N {
	const clientW3N = makeW3Nclient<web3n.testing.CommonW3N>(
		clientSide.caller,
		{
			closeSelf: closeSelf.makeClient,
			apps: makeAppsCaller,
			logout: makeLogoutCaller,
			testStand: makeTestStandCaller,
			shell: makeShellCaller,
			rpc: makeRpcCaller,
			connectivity: makeConnectivity,
		}
	);
	addDeprecatedItems(clientW3N);
	return clientW3N;
}

export async function promiseClientSideW3N(
	clientSide: ObjectsConnector
): Promise<W3N> {
	const clientW3N = await promiseW3Nclient<web3n.testing.CommonW3N>(
		clientSide.caller,
		{
			closeSelf: closeSelf.makeClient,
			apps: promiseAppsCaller,
			logout: makeLogoutCaller,
			testStand: makeTestStandCaller,
			shell: promiseShellCaller,
			rpc: promiseRpcCaller,
			connectivity: makeConnectivity,
		}
	);
	addDeprecatedItems(clientW3N);
	return clientW3N;
}

function addDeprecatedItems(clientW3N: web3n.testing.CommonW3N): void {
	try {
		if (clientW3N.rpc?.thisApp) {
			(clientW3N as any).appRPC = wrapExistingFn(
				clientW3N.rpc.thisApp,
				`Deprecations warning:\nUse w3n.rpc.thisApp instead of w3n.appRPC.`
			);
		}
		if (clientW3N.rpc?.otherAppsRPC) {
			(clientW3N as any).otherAppsRPC = wrapExistingFn(
				clientW3N.rpc.otherAppsRPC,
				`Deprecations warning:\nUse w3n.rpc.otherAppsRPC instead of w3n.otherAppsRPC.`
			);
		}
		if (clientW3N.rpc?.exposeService) {
			(clientW3N as any).exposeService = wrapExistingFn(
				clientW3N.rpc.exposeService,
				`Deprecations warning:\nUse w3n.rpc.exposeService instead of w3n.exposeService.`
			);
		}
	} catch (err) {
		console.error(`\n@ deprecation part:\n`, err);
	}
}

function wrapExistingFn<F extends Function>(fn: F, warnMsg: string): F {
	let showWarning = true;
	return function(...args: any[]) {
		if (showWarning) {
			console.warn(warnMsg);
			showWarning = false;
		}
		return fn.apply(undefined, args);
	} as Function as F;
}


Object.freeze(exports);