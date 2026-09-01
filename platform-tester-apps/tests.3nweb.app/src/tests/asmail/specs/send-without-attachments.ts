/*
 Copyright (C) 2016 - 2018, 2020 - 2021, 2026 3NSoft Inc.
 
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
import { type EchoMsgSignal, listenForOneMsgEchoFromSecondUser } from '../second-user.js';
import { deepEqual } from '../../libs-for-tests/json-equal.js';
import { getMsgsFromProcess } from '../../libs-for-tests/proc-messaging.js';

export const specs: SpecDescribe = {
	description: '.sendMsg',
	its: []
};

type DeliveryProgress = web3n.asmail.DeliveryProgress;
type OutgoingMessage = web3n.asmail.OutgoingMessage;
type IncomingMessage = web3n.asmail.IncomingMessage;

let it: SpecIt = {
	expectation: 'send message to existing address and get it',
	timeout: 30000
};
it.func = async function(s) {
	const recipient = s.secondUser;
	const msgEchoPromise = listenForOneMsgEchoFromSecondUser(10000);

	const txtBody = 'Some text\nBlah-blah-blah';
	const htmlBody = `Some html. Note that core isn't looking/checking this`;
	const jsonBody = {
		field1: 123,
		field2: 'blah-blah'
	};

	const outMsg: OutgoingMessage = {
		msgType: 'mail',
		plainTxtBody: txtBody,
		htmlTxtBody: htmlBody,
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
		const cbDetach = w3n.mail!.delivery.observeDelivery(idForSending, observer);
		expect(typeof cbDetach).toBe('function');
	});
	expect(notifs.length).toBeGreaterThan(0);
	const lastInfo = notifs[notifs.length-1];
	expect(typeof lastInfo).toBe('object');
	expect(lastInfo.allDone).toBe('all-ok');
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
	expect(inMsg.htmlTxtBody).toBe(htmlBody);
	expect(deepEqual(inMsg.jsonBody, jsonBody)).toBe(true);

};
specs.its.push(it);


it = {
	expectation: 'send lots of messages with sendImmediately flag set true',
	timeout: 30000
};
it.func = async function(s) {
	const recipient = s.secondUser;
	const totalNumOfTestMsgs = 30;
	const receivedMsgs: (IncomingMessage|undefined)[] = new Array(totalNumOfTestMsgs);
	const echosFromRecipient = getMsgsFromProcess<EchoMsgSignal>(2, undefined, undefined, 30);
	const echoing = (async function() {
		for await (const { msg } of echosFromRecipient) {
			const i = msg.jsonBody!.testMsgNum;
			receivedMsgs[i] = msg;
		}
	})();

	const idForSendingPrefix = `${Date.now()}`;
	const notifs: DeliveryProgress[][] = [];
	const deliveryProcesses: Promise<void>[] = [];
	for (let i=0; i<totalNumOfTestMsgs; i+=1) {
		const idForSending = `${idForSendingPrefix}-${i}`;
		const msgNotifs: DeliveryProgress[] = [];
		notifs.push(msgNotifs);
		const outMsg: OutgoingMessage = {
			msgType: 'mail',
			jsonBody: {
				testMsgNum: i
			}
		};
		await w3n.mail!.delivery.addMsg([ recipient ], outMsg, idForSending, { sendImmediately: false });
		const msgDeliveryProc = new Promise<void>((resolve, reject) => {
			const observer: web3n.Observer<DeliveryProgress> = {
				next: (p: DeliveryProgress) => msgNotifs.push(p),
				complete: resolve as () => void,
				error: reject
			};
			w3n.mail!.delivery.observeDelivery(idForSending, observer);
		});
		deliveryProcesses.push(msgDeliveryProc);

	}

	await Promise.allSettled(deliveryProcesses);
	await echoing;

	for (let i=0; i<totalNumOfTestMsgs; i+=1) {
		const msgDeliveryNotifs = notifs[i];
		expect(msgDeliveryNotifs.length).toBeGreaterThan(0);
		const last = msgDeliveryNotifs[msgDeliveryNotifs.length - 1];
		expect(last.allDone).withContext(`message ${i} should've been sent without errors`).toBe('all-ok');

		const msg = receivedMsgs[i];
		expect(msg!.jsonBody!.testMsgNum).withContext(`message ${i} should've been received`).toBe(i);
	}

};
specs.its.push(it);

