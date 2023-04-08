/*
 Copyright (C) 2016 - 2018, 2020 - 2021 3NSoft Inc.
 
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

import { SpecDescribe } from '../../libs-for-tests/spec-module.js';
import { SpecIt, throwDeliveryErrorFrom } from '../test-utils.js';
import { listenForOneMsgEchoFromSecondUser } from '../second-user.js';
import { deepEqual } from '../../libs-for-tests/json-equal.js';

export const specs: SpecDescribe = {
	description: '.sendMsg',
	its: []
};

type DeliveryProgress = web3n.asmail.DeliveryProgress;
type OutgoingMessage = web3n.asmail.OutgoingMessage;

const it: SpecIt = {
	expectation: 'send message to existing address and get it'
};
it.func = async function(s) {
	const recipient = s.secondUser;
	const msgEchoPromise = listenForOneMsgEchoFromSecondUser();

	const txtBody = 'Some text\nBlah-blah-blah';
	const jsonBody = {
		field1: 123,
		field2: 'blah-blah'
	};

	const outMsg: OutgoingMessage = {
		msgType: 'mail',
		plainTxtBody: txtBody,
		jsonBody
	};
	const idForSending = `${Date.now()}`;
	await w3n.mail!.delivery.addMsg([ recipient ], outMsg, idForSending);
	expect(await w3n.mail!.delivery.currentState(idForSending)).toBeTruthy();
	const notifs: DeliveryProgress[] = [];
	await new Promise((resolve, reject) => {
		const observer: web3n.Observer<DeliveryProgress> = {
			next: (p: DeliveryProgress) => { notifs.push(p); },
			complete: resolve as () => void, error: reject
		};
		const cbDetach = w3n.mail!.delivery.observeDelivery(
			idForSending, observer);
		expect(typeof cbDetach).toBe('function');
	});
	expect(notifs.length).toBeGreaterThan(0);
	const lastInfo = notifs[notifs.length-1];
	expect(typeof lastInfo).toBe('object');
	expect(lastInfo.allDone).toBe(true);
	throwDeliveryErrorFrom(lastInfo);
	await w3n.mail!.delivery.rmMsg(idForSending);
	expect(await w3n.mail!.delivery.currentState(idForSending)).toBeFalsy();
	const recInfo = lastInfo!.recipients[recipient];
	expect(typeof recInfo.idOnDelivery).toBe('string');
	expect(typeof recInfo.bytesSent).toBe('number');
	const msgId = recInfo.idOnDelivery!;

	expect(msgId).toBeTruthy();

	// get from signal what recipient side got
	const inMsg = (await msgEchoPromise).msg;
	expect(inMsg).toBeTruthy();
	expect(inMsg.msgId).toBe(msgId);
	expect(inMsg.msgType).toBe('mail');
	expect(inMsg.plainTxtBody).toBe(txtBody);
	expect(deepEqual(inMsg.jsonBody, jsonBody)).toBe(true);

};
specs.its.push(it);

