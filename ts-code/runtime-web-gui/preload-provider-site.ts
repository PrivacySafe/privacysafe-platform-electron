/*
 Copyright (C) 2025 3NSoft Inc.

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

import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron';
import { IPC_CLIENT_SIDE, IPC_CORE_SIDE, IPC_SYNCED_W3N_LIST } from '../ipc-with-core/electron-ipc';
import { Envelope, callerSideJSONWrap as jsonCall } from 'core-3nweb-client-lib/build/ipc';
import { makeClientSideConnector } from './renderer-side-wrap';
import { ServiceProviderW3N } from './ipc-type';

const clientSide = makeClientSideConnector({
	listObjOnServiceSide: path => {
		return ipcRenderer.sendSync(IPC_SYNCED_W3N_LIST, path);
	},
	setHandlerOfMsgsFromCore: handler => {
		const ipcHandler = (
			_event: IpcRendererEvent, msg: Envelope
		) => {
			handler(msg);
		};
		ipcRenderer.on(IPC_CLIENT_SIDE, ipcHandler);
		const detachListener = () => ipcRenderer.removeListener(
			IPC_CLIENT_SIDE, ipcHandler
		);
		return detachListener;
	},
	sendMsgToCore: msg => {
		ipcRenderer.send(IPC_CORE_SIDE, msg);
	}
})

const w3n: ServiceProviderW3N = {
	giveSignupTokenToClientPlatform: jsonCall.makeReqRepFuncCaller(
		clientSide.caller, [ 'w3n', 'giveSignupTokenToClientPlatform' ]
	),
};

contextBridge.exposeInMainWorld('w3n', w3n);
