/*
 Copyright (C) 2020 - 2022, 2024 3NSoft Inc.
 
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

import { Subject } from "rxjs";
import { Envelope, ObjectsConnector, ClientSide, makeStartupW3Nclient } from 'core-3nweb-client-lib/build/ipc';
import { toBuffer } from "../lib-common/buffer-utils";
import { makeStartupTestStandCaller } from "../test-stand/test-stand-cap-ipc";
import { makeClientSideW3N } from "../core/client-side-w3n";
import { InitIPC } from "./ipc-type";

type StartupW3N = web3n.startup.W3N;
type W3N = web3n.caps.W3N;

function makeClientSideConnector({
	listObjOnServiceSide, sendMsgToCore, setHandlerOfMsgsFromCore
}: InitIPC): ClientSide {
	const fromCore = new Subject<Envelope>();
	const coreListener = (msg: Envelope) => {
		if (msg.body) {
			msg.body.value = toBuffer(msg.body.value);
		}
		fromCore.next(msg);
	};
	const detachListener = setHandlerOfMsgsFromCore(coreListener);
	const toClient = fromCore.asObservable();
	const fromClient = new Subject<Envelope>();
	fromClient.asObservable().subscribe({
		next: msg => sendMsgToCore(msg),
		error: detachListener,
		complete: detachListener
	});
	return ObjectsConnector.makeClientSide(
		fromClient, toClient, listObjOnServiceSide
	);
}

export function makeStartupW3N(ipc: InitIPC): StartupW3N {
	const clientSide = makeClientSideConnector(ipc);
	const clientW3N = makeStartupW3Nclient<web3n.testing.StartupW3N>(
		clientSide, {
			testStand: makeStartupTestStandCaller
		}
	);
	return clientW3N;
}

export function makeW3N(ipc: InitIPC): W3N {
	const clientSide = makeClientSideConnector(ipc);
	return makeClientSideW3N(clientSide);
}


Object.freeze(exports);