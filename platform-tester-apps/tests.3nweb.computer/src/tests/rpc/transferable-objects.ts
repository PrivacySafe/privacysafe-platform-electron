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

import { clearFS } from "../fs-checks/test-utils.js";
import { strFromBytes, strToBytes } from '../../test-page-utils.js';

const guiSrvInThisApp = 'OneShotDialog';

type RPCConnection = web3n.rpc.client.RPCConnection;
type WritableFS = web3n.files.WritableFS;

const timeout = 15000;

describe(``, () => {

	let connection: RPCConnection = undefined as any;
	let fs: WritableFS = undefined as any;

	beforeAll(async () => {
		const appFS = await w3n.storage!.getAppSyncedFS();
		fs = await appFS.writableSubRoot(`rpc transfer testing`);
	});

	afterAll(async () => {
		clearFS
	});

	beforeEach(async () => {
		connection = await w3n.rpc!.thisApp!(guiSrvInThisApp);
	}, timeout);

	afterEach(async () => {
		await connection.close();
		connection = (undefined as any);
	});

	it(`RPC transfers file object`, async () => {
		const txtContent = `some text content`;
		const file = await fs.writableFile(`some.txt`);
		await file.writeTxt(txtContent);
		const reply = await connection.makeRequestReplyCall(
			'readAndPassFile', { passedByReference: [ file, file ] }
		);
		expect(Array.isArray(reply!.passedByReference)).toBeTrue();
		expect(reply!.passedByReference![0]).toBe(file);
		expect(reply!.passedByReference![1]).toBe((reply!.passedByReference![0]))
		expect(strFromBytes(reply!.bytes!)).toBe(txtContent);
	});

	it(`RPC transfers folder object`, async () => {
		const fsToPass = await fs.writableSubRoot(`fs-to-pass`);
		const filePath = `/tree/in/folder/some.txt`;
		const txtContent = `some text content inside folder tree`;
		await fsToPass.writeTxtFile(filePath, txtContent);
		const reply = await connection.makeRequestReplyCall(
			'readAndPassFS',
			{
				bytes: strToBytes(filePath),
				passedByReference: [ fsToPass, fsToPass ]
			}
		);
		expect(Array.isArray(reply!.passedByReference)).toBeTrue();
		expect(reply!.passedByReference![0]).toBe(fsToPass);
		expect(reply!.passedByReference![1]).toBe((reply!.passedByReference![0]))
		expect(strFromBytes(reply!.bytes!)).toBe(txtContent);
	});

});
