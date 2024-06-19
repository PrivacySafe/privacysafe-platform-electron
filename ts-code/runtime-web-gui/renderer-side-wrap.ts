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
import { Envelope, ObjectsConnector, makeStartupW3Nclient } from 'core-3nweb-client-lib/build/ipc';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import { IPC_CORE_SIDE, IPC_CLIENT_SIDE, IPC_SYNCED_W3N_LIST } from "../ipc-with-core/electron-ipc";
import { toBuffer } from "../lib-common/buffer-utils";
import { makeStartupTestStandCaller } from "../test-stand/test-stand-cap-ipc";
import { makeClientSideW3N } from "../core/client-side-w3n";

type StartupW3N = web3n.startup.W3N;
type W3N = web3n.caps.W3N;

function makeClientSideConnector(): ObjectsConnector {
	const fromCore = new Subject<Envelope>();
	const coreListener = (event: IpcRendererEvent, msg: Envelope) => {
		if (msg.body) {
			msg.body.value = toBuffer(msg.body.value);
		}
		fromCore.next(msg);
	};
	const listObjOnServiceSide = (
		path: string[]
	) => ipcRenderer.sendSync(IPC_SYNCED_W3N_LIST, path);
	ipcRenderer.on(IPC_CLIENT_SIDE, coreListener);
	const detachListener = () => ipcRenderer.removeListener(
		IPC_CLIENT_SIDE, coreListener);
	const toClient = fromCore.asObservable();
	const fromClient = new Subject<Envelope>();
	fromClient.asObservable().subscribe({
		next: msg => ipcRenderer.send(IPC_CORE_SIDE, msg),
		error: detachListener,
		complete: detachListener
	});
	return new ObjectsConnector(
		fromClient, toClient, 'clients', listObjOnServiceSide);
}

export function makeStartupW3N(): StartupW3N {
	const clientSide = makeClientSideConnector();
	const clientW3N = makeStartupW3Nclient<web3n.testing.StartupW3N>(
		clientSide.caller, {
			testStand: makeStartupTestStandCaller
		});
	return clientW3N;
}

export function makeW3N(): W3N {
	const clientSide = makeClientSideConnector();
	return makeClientSideW3N(clientSide);
}


Object.freeze(exports);