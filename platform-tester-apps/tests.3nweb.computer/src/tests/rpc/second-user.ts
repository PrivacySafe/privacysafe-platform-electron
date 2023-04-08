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

import { strFromBytes } from "../../test-page-utils.js";
import { stringifyErr } from "../../lib-common/exceptions/error.js";

export interface TestSignal<T> {
	testSignal: T;
}

export interface SignalToCallSrv extends TestSignal<'call-service'> {
	service: string;
}

export interface SignalWithSrvResult extends TestSignal<'service-result'> {
	userId: string;
	err?: string;
}

export function setupSecondUserRPCTestReactions(): void {

	w3n.testStand.observeMsgsFromOtherLocalTestUser(1, undefined, undefined, {
		next: async ({ testSignal, service }: SignalToCallSrv) => {
			if (testSignal !== 'call-service') { return; }
			const srvResult: SignalWithSrvResult = {
				testSignal: 'service-result',
				userId: ''
			};
			try {
				srvResult.userId = await callGetUserIdSrv(service);
			} catch (err) {
				await w3n.testStand.log('error', `Error in calling `, err);
				srvResult.err = stringifyErr(err);
			}
			await w3n.testStand.sendMsgToOtherLocalTestUser(
				1, undefined, undefined, srvResult);
		}
	});

}

async function callGetUserIdSrv(srv: string): Promise<string> {
	const connection = await w3n.appRPC!(srv);
	const r = await connection.makeRequestReplyCall('getUserId', undefined);
	await connection.close();
	return strFromBytes(r!.bytes!);
}

export async function callSrvAtSecondUser(
	service: string
): Promise<SignalWithSrvResult> {
	const reply = new Promise<SignalWithSrvResult>((resolve, reject) => {
		const unsub = w3n.testStand.observeMsgsFromOtherLocalTestUser(
			2, undefined, undefined, {
				next: async (sig: SignalWithSrvResult) => {
					unsub();
					resolve(sig);
				},
				error: reject
			});
	});
	const sig: SignalToCallSrv = {
		testSignal: 'call-service',
		service
	};
	await w3n.testStand.sendMsgToOtherLocalTestUser(
		2, undefined, undefined, sig
	);
	return reply;
}
