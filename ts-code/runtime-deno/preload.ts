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

// Note. This preload file is browserified, cause it packs everything into
// browser-like environment and can be loaded before deno component code.


import { promiseClientSideW3N } from "../core/client-side-w3n";
import { SocketConnectInfo } from "../ipc-with-core/socket-ipc";
import { ClientSocketIPC } from "./ipc-socks";

type W3N = web3n.caps.W3N;

// browserified module doesn't have Deno inside, and it needs to be passed
declare var Deno: any;
ClientSocketIPC.denoConnect = Deno.connect;
Object.freeze(ClientSocketIPC);

async function makeW3N(
	sockParam: SocketConnectInfo
): Promise<W3N> {
	const clientSide = ClientSocketIPC.makeConnector(sockParam);
	const w3n = await promiseClientSideW3N(clientSide);
	return w3n;
}

(window as any).w3n = makeW3N((window as any).w3n as SocketConnectInfo)
.then(w3n => {
	(window as any).w3n = w3n;
});
