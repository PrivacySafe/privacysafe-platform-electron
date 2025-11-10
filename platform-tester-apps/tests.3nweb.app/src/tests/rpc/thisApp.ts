/*
 Copyright (C) 2022, 2024 3NSoft Inc.
 
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

describe(`rpc.thisApp`, () => {

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.rpc!.thisApp).toBe('function');
	});

	it(`connects to service with GUI`, async () => {
		await w3n.rpc!.thisApp!(`allowed_but_unknown`).then(
			() => fail(`should throw when connecting to unknown service`),
			(exc: RPCException) => {
				expect(exc.runtimeException).toBeTrue();
				expect(exc.type).toBe('rpc');
				expect(exc.serviceNotFound).toBeTrue();
			}
		);

		await w3n.rpc!.thisApp!(`not_in_cap`).then(
			() => fail(`should throw when connecting to service that isn't explicitly allowed in a cap`),
			(exc: RPCException) => {
				expect(exc.runtimeException).toBeTrue();
				expect(exc.type).toBe('rpc');
				expect(exc.callerNotAllowed).toBeTrue();
			}
		);

		const connection = await w3n.rpc!.thisApp!(guiSrvInThisApp);
		await connection.close();
	}, timeout);

	it(`connects to service without GUI`, async () => {
		await w3n.rpc!.thisApp!(`allowed_but_unknown`).then(
			() => fail(`should throw when connecting to unknown service`),
			(exc: RPCException) => {
				expect(exc.runtimeException).toBeTrue();
				expect(exc.type).toBe('rpc');
				expect(exc.serviceNotFound).toBeTrue();
			}
		);

		await w3n.rpc!.thisApp!(`not_in_cap`).then(
			() => fail(`should throw when connecting to service that isn't explicitly allowed in a cap`),
			(exc: RPCException) => {
				expect(exc.runtimeException).toBeTrue();
				expect(exc.type).toBe('rpc');
				expect(exc.callerNotAllowed).toBeTrue();
			}
		);

		const connection = await w3n.rpc!.thisApp!(nonGuiSrvInThisApp);
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
		'addToBytes', { bytes: initValue }
	);
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
		connection = await w3n.rpc!.thisApp!(guiSrvInThisApp);
	}, timeout);

	afterEach(async () => {
		if (connection) {
			await connection.close();
			connection = (undefined as any);
		}
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
		connection1 = await w3n.rpc!.thisApp!(guiLongSrvInThisApp);
	}, timeout);

	beforeEach(async () => {
		await Promise.all([
			w3n.rpc!.thisApp!(guiLongSrvInThisApp).then(c => { connection2 = c; }),
			w3n.rpc!.thisApp!(guiLongSrvInThisApp).then(c => { connection3 = c; })
		]);
	}, timeout);

	afterEach(async () => {
		if (connection2) {
			await connection2.close();
			connection2 = (undefined as any);
		}
		if (connection3) {
			await connection3.close();
			connection3 = (undefined as any);
		}
	});

	afterAll(async () => {
		if (connection1) {
			await connection1.close();
			connection1 = (undefined as any);
		}
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

	it(`comes from the same instance`, async () => {
		const uids = await Promise.all([ connection1, connection2, connection3 ]
		.map(c => c.makeRequestReplyCall(
			'getUniqueIdentifier', undefined
		).then(r => strFromBytes(r!.bytes!))));
		expect(uids[0]).toEqual(uids[0]);
		expect(uids[1]).toEqual(uids[0]);
		expect(uids[2]).toEqual(uids[0]);
	}, timeout);

});

describe(`RPCConnection to non-GUI service for single connection`, () => {

	let connection: RPCConnection = undefined as any;

	beforeAll(async () => {
		connection = await w3n.rpc!.thisApp!(nonGuiSrvInThisApp);
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
		connection1 = await w3n.rpc!.thisApp!(longNonGuiSrvInThisApp);
	}, timeout);

	beforeEach(async () => {
		await Promise.all([
			w3n.rpc!.thisApp!(longNonGuiSrvInThisApp).then(c => { connection2 = c; }),
			w3n.rpc!.thisApp!(longNonGuiSrvInThisApp).then(c => { connection3 = c; })
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

	it(`comes from the same instance`, async () => {
		const uids = await Promise.all([ connection1, connection2, connection3 ]
		.map(c => c.makeRequestReplyCall(
			'getUniqueIdentifier', undefined
		).then(r => strFromBytes(r!.bytes!))));
		expect(uids[1]).toEqual(uids[0]);
		expect(uids[2]).toEqual(uids[0]);
	}, timeout);

});

async function testGetUserIdServiceAtSecondUser(
	service: string, expectedId: string
): Promise<void> {
	const r = await callSrvAtSecondUser(service, timeout-100);
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
		guiSrvConnection = await w3n.rpc!.thisApp!(guiSrvInThisApp);
		nonGUISrvConnection = await w3n.rpc!.thisApp!(nonGuiSrvInThisApp);
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
		guiSrvConnection = await w3n.rpc!.thisApp!(guiLongSrvInThisApp);
		nonGUISrvConnection = await w3n.rpc!.thisApp!(longNonGuiSrvInThisApp);
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
