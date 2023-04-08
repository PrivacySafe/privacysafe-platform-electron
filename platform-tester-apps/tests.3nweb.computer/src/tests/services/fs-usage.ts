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

import { deepEqual } from "../libs-for-tests/json-equal.js";
import { bytesEqual } from "../libs-for-tests/bytes-equal.js";

const guiSrvInThisApp = 'OneShotDialog';
const nonGuiSrvInThisApp = 'ServiceInDeno';

type RPCConnection = web3n.rpc.client.RPCConnection;
type PassedDatum = web3n.rpc.PassedDatum;
type WritableFS = web3n.files.WritableFS;

function packPathAndContent(
	path: string, content: Uint8Array|undefined
): PassedDatum {
	const pathBytes = (new TextEncoder()).encode(path);
	if (pathBytes.length > 0xff) {
		throw new Error(`Path is longer than 255 bytes`);
	}
	const bytes = new Uint8Array(
		1 + pathBytes.length + (content ? content.length : 0)
	);
	bytes[0] = pathBytes.length;
	bytes.set(pathBytes, 1);
	if (content) {
		bytes.set(content, pathBytes.length + 1);
	}
	return { bytes };
}

function packPathAndJSON(path: string, json: any): PassedDatum {
	const str = JSON.stringify(json);
	const enc = new TextEncoder();
	const content = enc.encode(str);
	return packPathAndContent(path, content);
}

function jsonFromBytes(bytes: Uint8Array): any {
	const dec = new TextDecoder();
	const str = dec.decode(bytes);
	return JSON.parse(str);
}

const timeout = 15000;

function randomBytes(len: number): Uint8Array {
	const bytes = new Uint8Array(len);
	if (len <= 1024) {
		crypto.getRandomValues(bytes);
	} else {
		const randomChunk = new Uint8Array(1024);
		crypto.getRandomValues(randomChunk);
		for (let ofs=0; ofs<len; ofs+=randomChunk.length) {
			if ((len - ofs) < randomChunk.length) {
				bytes.set(randomChunk.slice(0, len - ofs), ofs);
			} else {
				bytes.set(randomChunk, ofs);
			}
		}
	}
	return bytes;
}

function fsUsage(srvName: string): void {

	const folder = `${srvName}/test fs usage`;
	const fPath1 = `${folder}/file 1`;
	const fPath2 = `${folder}/file 2`;
	const jPath1 = `${folder}/json 1`;
	const jPath2 = `${folder}/json 2`;
	let connection: RPCConnection = undefined as any;
	let syncFS: WritableFS = undefined as any;
	let localFS: WritableFS = undefined as any;

	beforeAll(async () => {
		connection = await w3n.appRPC!(srvName);
		syncFS = await w3n.storage!.getAppSyncedFS();
		localFS = await w3n.storage!.getAppLocalFS();
	}, timeout);

	afterAll(async () => {
		await connection.close();
		connection = (undefined as any);
		await syncFS.close();
		syncFS = (undefined as any);
		await localFS.close();
		localFS = (undefined as any);
	});

	async function testFileWriting(
		fs: WritableFS, method: string, contentLen = 64
	): Promise<void> {
		const fileBytes = randomBytes(contentLen);
		await connection.makeRequestReplyCall(
			method, packPathAndContent(fPath1, fileBytes)
		);
		const bytesRead = await fs.readBytes(fPath1);
		expect(bytesRead).toBeDefined();
		expect(bytesEqual(fileBytes, bytesRead!))
		.withContext(`comparison of original with read from file`)
		.toBeTrue();

		// XXX following comparisons are to figure if 429604 bug is write
		const sndRead = await fs.readBytes(fPath1);
		expect(bytesEqual(fileBytes, sndRead!))
		.withContext(`comparison of original with second read`)
		.toBeTrue();
		expect(bytesEqual(sndRead!, bytesRead!))
		.withContext(`comparison of first read with second read`)
		.toBeTrue();
	}

	async function testFileReading(
		fs: WritableFS, method: string, contentLen = 64
	): Promise<void> {
		const fileBytes = randomBytes(contentLen);
		await fs.writeBytes(fPath2, fileBytes);
		const reply = await connection.makeRequestReplyCall(
			method, packPathAndContent(fPath2, undefined)
		);
		expect(reply).toBeDefined();
		expect(bytesEqual(fileBytes, reply!.bytes!)).toBeTrue();
	}

	async function testJSONFileWriting(
		fs: WritableFS, method: string
	): Promise<void> {
		const json = {
			num: Math.random()
		};
		await connection.makeRequestReplyCall(
			method, packPathAndJSON(jPath1, json)
		);
		const jsonRead = await fs.readJSONFile(jPath1);
		expect(deepEqual(json, jsonRead)).toBeTrue();
	}

	async function testJSONFileReading(
		fs: WritableFS, method: string
	): Promise<void> {
		const json = {
			num: Math.random()
		};
		await fs.writeJSONFile(jPath2, json);
		const reply = await connection.makeRequestReplyCall(
			method, packPathAndContent(jPath2, undefined)
		);
		expect(reply).toBeDefined();
		const jsonRead = jsonFromBytes(reply!.bytes!);
		expect(deepEqual(json, jsonRead)).toBeTrue();
	}

	describe('', () => {

		afterEach(() => syncFS.deleteFolder(folder, true));

		const kb = 1024;
		const mb = 1024 * 1024;

		it(`writes file in app's sync fs`,
			() => testFileWriting(syncFS, 'writeFileInSyncFS'));

		it(`writes 20KB file in app's sync fs`,
			() => testFileWriting(syncFS, 'writeFileInSyncFS', 20 * kb));

		it(`writes 40KB file in app's sync fs`,
			() => testFileWriting(syncFS, 'writeFileInSyncFS', 40 * kb));

		it(`writes 400KB file in app's sync fs`,
			() => testFileWriting(syncFS, 'writeFileInSyncFS', 400 * kb));

		it(`writes 1MB file in app's sync fs`,
			() => testFileWriting(syncFS, 'writeFileInSyncFS', 1 * mb), 30000);

		// XXX socket-ipc on mac is still flake on this case of 2mb transfer(s)
		// it(`writes 2MB file in app's sync fs`,
		// 	() => testFileWriting(syncFS, 'writeFileInSyncFS', 2 * mb), 30000);

		// XXX socket-ipc on mac is still flake on this case of 10mb transfer(s)
		// it(`writes 10MB file in app's sync fs`,
		// 	() => testFileWriting(syncFS, 'writeFileInSyncFS', 10 * mb), 30000);

		it(`reads file in app's sync fs`,
			() => testFileReading(syncFS, 'readFileFromSyncFS'));

		it(`reads 20KB file in app's sync fs`,
			() => testFileReading(syncFS, 'readFileFromSyncFS', 20 * kb));

		it(`reads 40KB file in app's sync fs`,
			() => testFileReading(syncFS, 'readFileFromSyncFS', 40 * kb));

		it(`reads 400KB file in app's sync fs`,
			() => testFileReading(syncFS, 'readFileFromSyncFS', 400 * kb));

		it(`reads 1MB file in app's sync fs`,
			() => testFileReading(syncFS, 'readFileFromSyncFS', 1 * mb), 30000);

		// XXX socket-ipc on mac is still flake on this case of 2mb transfer(s)
		// it(`reads 2MB file in app's sync fs`,
		// 	() => testFileReading(syncFS, 'readFileFromSyncFS', 2 * mb), 30000);

		// XXX socket-ipc on mac is still flake on this case of 10mb transfer(s)
		// it(`reads 10MB file in app's sync fs`,
		// 	() => testFileReading(syncFS, 'readFileFromSyncFS', 10 * mb), 30000);

		it(`writes json file in app's sync fs`,
			() => testJSONFileWriting(syncFS, 'writeJSONFileInSyncFS'));
	
		it(`reads json file in app's sync fs`,
			() => testJSONFileReading(syncFS, 'readJSONFileFromSyncFS'));

	});

	describe('', () => {

		afterEach(() => localFS.deleteFolder(folder, true));

		it(`writes file in app's local fs`,
			() => testFileWriting(localFS, 'writeFileInLocalFS'));

		it(`reads file in app's local fs`,
			() => testFileReading(localFS, 'readFileFromLocalFS'));

		it(`writes json file in app's local fs`,
			() => testJSONFileWriting(localFS, 'writeJSONFileInLocalFS'));
	
		it(`reads json file in app's local fs`,
			() => testJSONFileReading(localFS, 'readJSONFileFromLocalFS'));

	});

}

describe(`Deno service`, () => fsUsage(nonGuiSrvInThisApp));

describe(`Web GUI service`, () => fsUsage(guiSrvInThisApp));

export const fsTests = true; // to mark this as module in absence of import(s)
