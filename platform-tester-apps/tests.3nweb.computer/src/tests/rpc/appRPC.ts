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

import { bytesEqual } from "../libs-for-tests/bytes-equal.js";
import { callSrvAtSecondUser } from "./second-user.js";

const guiSrvInThisApp = 'OneShotDialog';
const guiLongSrvInThisApp = 'LongDialog';
const nonGuiSrvInThisApp = 'ServiceInDeno';
const longNonGuiSrvInThisApp = 'LongServiceInDeno';

type PassedDatum = web3n.rpc.PassedDatum;
type RPCException = web3n.rpc.RPCException;
type RPCConnection = web3n.rpc.client.RPCConnection;

const timeout = 15000;

describe(`appRPC`, () => {

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.appRPC).toBe('function');
	});

	it(`connects to service with GUI`, async () => {
		await w3n.appRPC!(`unknown_service`).then(
			() => fail(`should throw when connecting to unknown service`),
			(exc: RPCException) => {
				expect(exc.runtimeException).toBeTrue();
				expect(exc.type).toBe('rpc');
				expect(exc.serviceNotFound).toBeTrue();
			}
		);

		const connection = await w3n.appRPC!(guiSrvInThisApp);
		await connection.close();
	}, timeout);

	it(`connects to service without GUI`, async () => {
		await w3n.appRPC!(`unknown_service`).then(
			() => fail(`should throw when connecting to unknown service`),
			(exc: RPCException) => {
				expect(exc.runtimeException).toBeTrue();
				expect(exc.type).toBe('rpc');
				expect(exc.serviceNotFound).toBeTrue();
			}
		);

		const connection = await w3n.appRPC!(nonGuiSrvInThisApp);
		await connection.close();
	}, timeout);

});

async function testCallWithoutArgs(connection: RPCConnection): Promise<void> {
	// crazy many calls to happen before service even exposed
	const fooCalls: Promise<PassedDatum|undefined>[] = [];
	for (let i=0; i<100; i+=1) {
		fooCalls.push(connection.makeRequestReplyCall('foo', undefined));
	}
	await Promise.all(fooCalls.map(
		c => c.then(r => expect(r).toBeUndefined())
	));

	// call when service is surely exposed
	expect(await connection.makeRequestReplyCall('foo', undefined))
	.toBeUndefined();
}

async function testCallWithArgsAndResult(
	connection: RPCConnection
): Promise<void> {
	const initValue = new Uint8Array(10);
	const r = await connection.makeRequestReplyCall(
		'addToBytes', { bytes: initValue });
	expect(typeof r).toBe('object');
	const replyBytes = r!.bytes!;
	for (let i=0; i<initValue.length; i+=1) {
		initValue[i] += i;
	}
	expect(bytesEqual(replyBytes, initValue)).toBeTrue();
}

describe(`RPCConnection to GUI service single connection`, () => {

	let connection: RPCConnection = undefined as any;

	beforeEach(async () => {
		connection = await w3n.appRPC!(guiSrvInThisApp);
	}, timeout);

	afterEach(async () => {
		await connection.close();
		connection = (undefined as any);
	});

	it(`calls service's method without arguments`, async () => {
		await testCallWithoutArgs(connection);
	});

	it(`calls service's method`, async () => {
		await testCallWithArgsAndResult(connection);
	});

});

describe(`RPCConnection to GUI service for many connections`, () => {

	let connection1: RPCConnection = undefined as any;
	let connection2: RPCConnection = undefined as any;
	let connection3: RPCConnection = undefined as any;

	beforeAll(async () => {
		connection1 = await w3n.appRPC!(guiLongSrvInThisApp);
	}, timeout);

	beforeEach(async () => {
		await Promise.all([
			w3n.appRPC!(guiLongSrvInThisApp).then(c => { connection2 = c; }),
			w3n.appRPC!(guiLongSrvInThisApp).then(c => { connection3 = c; })
		]);
	}, timeout);

	afterEach(async () => {
		await connection2.close();
		connection2 = (undefined as any);
		await connection3.close();
		connection3 = (undefined as any);
	});

	afterAll(async () => {
		await connection1.close();
		connection1 = (undefined as any);
	});

	it(`serves concurrently`, async () => {
		await Promise.all([
			testCallWithoutArgs(connection1),
			testCallWithArgsAndResult(connection1),
			testCallWithoutArgs(connection2),
			testCallWithArgsAndResult(connection2),
			testCallWithoutArgs(connection3),
			testCallWithArgsAndResult(connection3)
		]);
	}, timeout);

});

describe(`RPCConnection to non-GUI service for single connection`, () => {

	let connection: RPCConnection = undefined as any;

	beforeAll(async () => {
		connection = await w3n.appRPC!(nonGuiSrvInThisApp);
	}, timeout);

	afterAll(async () => {
		await connection.close();
		connection = (undefined as any);
	});

	it(`calls service's method without arguments`, async () => {
		await testCallWithoutArgs(connection);
	});

	it(`calls service's method`, async () => {
		await testCallWithArgsAndResult(connection);
	});

});

describe(`RPCConnection to non-GUI service for many connections`, () => {

	let connection1: RPCConnection = undefined as any;
	let connection2: RPCConnection = undefined as any;
	let connection3: RPCConnection = undefined as any;

	beforeAll(async () => {
		connection1 = await w3n.appRPC!(longNonGuiSrvInThisApp);
	}, timeout);

	beforeEach(async () => {
		await Promise.all([
			w3n.appRPC!(longNonGuiSrvInThisApp).then(c => { connection2 = c; }),
			w3n.appRPC!(longNonGuiSrvInThisApp).then(c => { connection3 = c; })
		]);
	}, timeout);

	afterEach(async () => {
		await connection2.close();
		connection2 = (undefined as any);
		await connection3.close();
		connection3 = (undefined as any);
	});

	afterAll(async () => {
		await connection1.close();
		connection1 = (undefined as any);
	});

	it(`serves concurrently`, async () => {
		await Promise.all([
			testCallWithoutArgs(connection1),
			testCallWithArgsAndResult(connection1),
			testCallWithoutArgs(connection2),
			testCallWithArgsAndResult(connection2),
			testCallWithoutArgs(connection3),
			testCallWithArgsAndResult(connection3)
		]);
	}, timeout);

});

async function testGetUserIdServiceAtSecondUser(
	service: string, expectedId: string
): Promise<void> {
	const r = await callSrvAtSecondUser(service);
	if (r.err) {
		fail(r.err);
	} else {
		expect(r.userId).toBe(expectedId);
	}
}

describe(`service in both users run simultaneously, non-interacting,`, () => {

	let guiSrvConnection: RPCConnection = undefined as any;
	let nonGUISrvConnection: RPCConnection = undefined as any;
	let sndUserId: string = undefined as any;

	beforeAll(async () => {
		sndUserId = await w3n.testStand.idOfTestUser(2);
		guiSrvConnection = await w3n.appRPC!(guiSrvInThisApp);
		nonGUISrvConnection = await w3n.appRPC!(nonGuiSrvInThisApp);
	}, timeout);

	afterAll(async () => {
		await guiSrvConnection.close();
		await nonGUISrvConnection.close();
		guiSrvConnection = (undefined as any);
		nonGUISrvConnection = (undefined as any);
	});

	it(`GUI service, instance for every connection`, async () => {
		await testGetUserIdServiceAtSecondUser(guiSrvInThisApp, sndUserId);
	}, timeout);

	it(`non-GUI service, instance for every connection`, async () => {
		await testGetUserIdServiceAtSecondUser(nonGuiSrvInThisApp, sndUserId);
	}, timeout);

});

describe(`long-running service in both users simultaneously`, () => {

	let guiSrvConnection: RPCConnection = undefined as any;
	let nonGUISrvConnection: RPCConnection = undefined as any;
	let sndUserId: string = undefined as any;

	beforeAll(async () => {
		sndUserId = await w3n.testStand.idOfTestUser(2);
		guiSrvConnection = await w3n.appRPC!(guiLongSrvInThisApp);
		nonGUISrvConnection = await w3n.appRPC!(longNonGuiSrvInThisApp);
	}, timeout);

	afterAll(async () => {
		await guiSrvConnection.close();
		await nonGUISrvConnection.close();
		guiSrvConnection = (undefined as any);
		nonGUISrvConnection = (undefined as any);
	});

	it(`GUI service, instance serves several connections`, async () => {
		await Promise.all([
			testGetUserIdServiceAtSecondUser(guiLongSrvInThisApp, sndUserId),
			testGetUserIdServiceAtSecondUser(guiLongSrvInThisApp, sndUserId),
			testGetUserIdServiceAtSecondUser(guiLongSrvInThisApp, sndUserId)
		]);
	}, timeout);

	it(`non-GUI service, instance serves several connections`, async () => {
		await Promise.all([
			testGetUserIdServiceAtSecondUser(longNonGuiSrvInThisApp, sndUserId),
			testGetUserIdServiceAtSecondUser(longNonGuiSrvInThisApp, sndUserId),
			testGetUserIdServiceAtSecondUser(longNonGuiSrvInThisApp, sndUserId)
		]);
	}, timeout);

});

export const rpcTests = true; // to mark this as module in absence of import(s)
