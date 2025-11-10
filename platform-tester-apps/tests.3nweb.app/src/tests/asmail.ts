/*
 Copyright (C) 2016, 2018, 2020 - 2021 3NSoft Inc.
 
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

import { itCond } from './libs-for-tests/jasmine-utils.js';
import { loadSpecs } from './libs-for-tests/spec-module.js';
import { SetupForASMail } from './asmail/test-utils.js';
import { areAddressesEqual } from '../lib-common/address-utils.js';
import { specs } from './asmail/specs/index.js';

type WritableFS = web3n.files.WritableFS;

describe('ASMail', () => {

	const s = {} as SetupForASMail;
	const testFolderName = `ASMail tests, ${Date.now()}`;
	let appFS: WritableFS;

	beforeAll(async () => {
		s.thisUser = await w3n.testStand.idOfTestUser(1);
		s.secondUser = await w3n.testStand.idOfTestUser(2);
		appFS = await w3n.storage!.getAppLocalFS();
		s.testFolder = await appFS.writableSubRoot(testFolderName);
		s.isUp = true;
	});

	afterAll(async () => {
		await appFS.deleteFolder(testFolderName, true);
		for (const msg of (await w3n.mail!.inbox.listMsgs())) {
			await w3n.mail!.inbox.removeMsg(msg.msgId)
			.catch(err => w3n.testStand.log(
				'error', `Error in removal of message in tests' clean up`, err
			));
		}
		s.isUp = false;
	});

	itCond('mail is present in common CAPs', async () => {
		expect(typeof w3n.mail).toBe('object');
		expect(typeof w3n.mail!.delivery).toBe('object');
		expect(typeof w3n.mail!.inbox).toBe('object');
		expect(typeof w3n.mail!.config).toBe('object');
		expect(typeof w3n.mail!.getUserId).toBe('function');
	}, undefined, s);

	itCond('gets current user id', async () => {
		const userId = await w3n.mail!.getUserId();
		expect(areAddressesEqual(userId, s.thisUser)).toBeTrue();
	}, undefined, s);

	describe(`config`, () => {

		const config = w3n.mail!.config;

		itCond(`shows parameter' values on the server`, async () => {
			const initPubKey = await config.getOnServer('init-pub-key');
			expect(typeof initPubKey).toBe('object');

			const anonSenderPolicy = await config.getOnServer('anon-sender/policy');
			expect(anonSenderPolicy).toBeTruthy();
			expect(typeof anonSenderPolicy!.accept).toBe('boolean');
			expect(typeof anonSenderPolicy!.defaultMsgSize).toBe('number');

			const anonSenderInvites = await config.getOnServer('anon-sender/invites');
			expect(anonSenderInvites).toBeTruthy();
			expect(typeof anonSenderInvites).toBe('object');
		}, undefined, s);

		itCond(`sets parameter' values on the server`, async () => {
			// some paramaters can be set directly
			let anonSenderPolicy = await config.getOnServer('anon-sender/policy');
			const newDefaultMsgSize = anonSenderPolicy!.defaultMsgSize + 42;
			anonSenderPolicy!.defaultMsgSize = newDefaultMsgSize;
			await config.setOnServer('anon-sender/policy', anonSenderPolicy!);
			anonSenderPolicy = await config.getOnServer('anon-sender/policy');
			expect(anonSenderPolicy!.defaultMsgSize).toBe(newDefaultMsgSize);

			// but public key should be set via keyring cap, and not here
			await config.setOnServer('init-pub-key', null).then(
				() => fail(`public key shouldn't be set directly`),
				err => expect(err).toBeTruthy()
			);
		}, undefined, s);

	});

	itCond('lists incoming messages in the inbox', async () => {
		const msgs = await w3n.mail!.inbox.listMsgs();
		expect(Array.isArray(msgs)).toBe(true);
	}, 10000, s);

	loadSpecs(
		s,
		specs,
		[ 'big-msg-allowance' ]);

});