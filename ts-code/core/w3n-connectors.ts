/*
 Copyright (C) 2020 - 2022 3NSoft Inc.
 
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

import { Subject, Unsubscribable } from "rxjs";
import { Envelope, ObjectsConnector, exposeStartupW3N, exposeW3N } from 'core-3nweb-client-lib/build/ipc';
import { ipcMain, WebContents } from 'electron';
import { IPC_CORE_SIDE, IPC_CLIENT_SIDE, IPC_SYNCED_W3N_LIST } from "../ipc-with-core/electron-ipc";
import { closeSelf } from "../init-proc/close-cap-ipc";
import { base64, toBuffer } from "../lib-common/buffer-utils";
import { exposeLogoutCAP } from "../init-proc/logout-cap-ipc";
import { exposeStartupTestStandCAP, exposeTestStandCAP } from "../test-stand/test-stand-cap-ipc";
import { bytes as randomBytes, stringOfB64UrlSafeChars } from "../lib-common/random-node";
import { createServer, Server, Socket } from "net";
import { EnvelopesBuffer, makeSocketIPCException, MsgOnCoreSide, readMsgOnCoreSide, toAuthReplyChunk, toListObjReply, SocketConnectInfo, toChunksForSending, MAX_MSG_SIZE, MAX_NONACK_WRITES, MAX_NONACK_READS, ACK_CHUNK } from "../ipc-with-core/socket-ipc";
import { logError } from "../confs";
import { platform } from "process";
import { assert } from "../lib-common/assert";
import { defer, Deferred } from "../lib-common/processes/deferred";
import { SingleProc } from "../lib-common/processes/single";
import { DenoLikeSocket } from "../lib-common/deno-like-socket";
import { getPortPromise } from "portfinder";
import { exposeConnectivityCAP } from "../connectivity/connectivity-cap-ipc";
import { exposeAppsCAP } from "../apps/ipc-core-side";
import { exposeShellCAPs } from "../shell/ipc-core-side";
import { exposeRpcCAP } from "../rpc/ipc-core-side";

type StartupW3N = web3n.startup.W3N;
type W3N = web3n.caps.W3N;


export class ElectronIPCConnectors {

	private readonly connectors = new Map<WebContents, Connector>();

	constructor() {
		this.listenMainIPC();
		Object.freeze(this);
	}

	private listenMainIPC(): void {
		ipcMain.on(IPC_CORE_SIDE, (event, msg: Envelope) => {
			const connector = this.connectors.get(event.sender);
			if (!connector) { return; }
			if (msg.body) {
				msg.body.value = toBuffer(msg.body.value);
			}
			connector.fromClient.next(msg);
		});
		ipcMain.on(IPC_SYNCED_W3N_LIST, (event, path: string[]) => {
			const connector = this.connectors.get(event.sender);
			if (!connector) { return; }
			event.returnValue = connector.coreSide.exposedServices.listObj(path);
		});
	}

	connectStartupW3N(coreW3N: StartupW3N, client: WebContents): void {
		const coreSide = this.makeCoreSideConnector(client);
		exposeStartupW3N(
			coreSide.exposedServices,
			coreW3N as web3n.testing.StartupW3N,
			extraStartupCAPs
		);
	}

	connectW3N(coreW3N: W3N, client: WebContents): void {
		const coreSide = this.makeCoreSideConnector(client);
		ipcMain.on(IPC_SYNCED_W3N_LIST, (event, path) => {
			event.returnValue = coreSide.exposedServices.listObj(path);
		});
		exposeW3N(
			coreSide.exposedServices,
			coreW3N as web3n.testing.CommonW3N,
			extraCAPs
		);
	}

	private makeCoreSideConnector(client: WebContents): ObjectsConnector {
		const fromCore = new Subject<Envelope>();
		const fromClient = new Subject<Envelope>();
		const toCore = fromClient.asObservable();
		const removeConnector = () => this.connectors.delete(client);
		fromCore.asObservable().subscribe({
			next: msg => client.send(IPC_CLIENT_SIDE, msg),
			error: removeConnector,
			complete: removeConnector
		});
		const coreSide = new ObjectsConnector(fromCore, toCore, 'services');
		this.connectors.set(client, { coreSide, fromClient });
		client.on('destroyed', () => coreSide.close());
		return coreSide;
	}

}
Object.freeze(ElectronIPCConnectors.prototype);
Object.freeze(ElectronIPCConnectors);


interface Connector {
	coreSide: ObjectsConnector;
	fromClient: Subject<Envelope>;
}

const extraStartupCAPs = Object.freeze({
	testStand: exposeStartupTestStandCAP,
});

const extraCAPs = Object.freeze({
	closeSelf: closeSelf.expose,
	apps: exposeAppsCAP,
	logout: exposeLogoutCAP,
	testStand: exposeTestStandCAP,
	shell: exposeShellCAPs,
	rpc: exposeRpcCAP,
	connectivity: exposeConnectivityCAP,
});

const IPC_TOKEN_LEN = 30;
const STR_TOKEN_PART = 6;

function strTokenPart(token: Uint8Array): string {
	return base64.pack(token.slice(0, STR_TOKEN_PART));
}


export class SocketIPCConnectors {

	private addr: string|{ host: string, port: number; }|undefined = undefined;
	private server: Server|undefined = undefined;
	private readonly caps = new Map<string, CAPsSocket|null>();
	private initProc: Promise<void>|undefined = undefined;

	async createConnector(): Promise<{
		connectInfo: SocketConnectInfo; connect: (caps: W3N) => (() => void);
	}> {
		if (!this.addr) {
			if (this.initProc) {
				await this.initProc;
			} else {
				this.initProc = this.lazyInit();
				try {
					await this.initProc;
				} finally {
					this.initProc = undefined;
				}
			}
		}
		if (typeof this.addr === 'string') {
			const connectInfo: SocketConnectInfo = {
				type: 'unix',
				token: await this.generateToken(),
				path: this.addr
			};
			return {
				connectInfo,
				connect: caps => this.connectCAPs(caps, connectInfo)
			};
		} else if (typeof this.addr === 'object') {
			const connectInfo: SocketConnectInfo = {
				type: 'net',
				token: await this.generateToken(),
				netAddr: this.addr
			};
			return {
				connectInfo,
				connect: caps => this.connectCAPs(caps, connectInfo)
			};
		} else {
			throw new Error(`this branch should not be reachable`);
		}
	}

	private async generateToken(): Promise<string> {
		const token = await randomBytes(IPC_TOKEN_LEN);
		const capKey = strTokenPart(token);
		if (this.caps.has(capKey)) {
			return this.generateToken();
		} else {
			this.caps.set(capKey, null);
			return base64.pack(token);
		}
	}

	private async lazyInit(): Promise<void> {
		assert(!this.addr && !this.server);
		if (platform === 'linux') {
			const sockName = `w3n-sock-${await stringOfB64UrlSafeChars(32)}`;
			// Unix socket path has a historic limit.
			// As a work around we start all processes, including this one, with
			// the same current directory (utilDir), and keep sockets there,
			// passing only relative paths.
			this.addr = sockName;
		} else {
			// XXX looks like macOS isn't piping big chunks via unix sockets
			// XXX Are BSD's like macOS?
			// XXX when on windows deno can talk to named pipes switch to it,
			//     like `\\\\?\\pipe\\${sockName}`.
			const host = '127.0.0.1';
			const port = await getPortPromise({ port: 18000, host });
			this.addr = { host, port };
		}
		this.server = await this.startServer();
	}

	private async startServer(): Promise<Server> {
		let starting: Deferred<void>|undefined = defer();
		const server = createServer(socket => this.incomingConnection(socket))
		.once('listening', () => {
			starting!.resolve();
		})
		.on('error', err => {
			starting?.reject(err);
		})
		.on('close', () => {
			// XXX what should be here?
		})
		.unref();
		if (typeof this.addr === 'string') {
			server.listen(this.addr);
		} else {
			const { host, port } = this.addr!;
			server.listen(port, host);
		}
		try {
			await starting.promise;
			return server;
		} finally {
			starting = undefined;
		}
	}

	private connectCAPs(
		caps: W3N, connectInfo: SocketConnectInfo
	): (() => void) {
		const token = base64.open(connectInfo.token);
		const capKey = strTokenPart(token);
		assert(!!this.caps.has(capKey));
		const connector = new CAPsSocket(token, caps);
		this.caps.set(capKey, connector);
		return () => {
			connector.disconnect();
			if (this.caps.get(capKey) === connector) {
				this.caps.delete(capKey);
			}
		};
	}

	private async incomingConnection(socket: Socket): Promise<void> {
		const niceSock = new DenoLikeSocket(socket);
		try {
			const { msgType, authToken } = await readMsgOnCoreSide(niceSock);
			if (msgType !== 'fst-auth') {
				niceSock.close();
				return;
			}
			const connector = this.caps.get(strTokenPart(authToken!));
			if (connector && connector.tokenSame(authToken!)) {
				connector.setSocket(niceSock);
				const maxMsgSize = niceSock.rawSocket().readableHighWaterMark - 0xff;
				await niceSock.write(toAuthReplyChunk(maxMsgSize));
			} else {
				await niceSock.write(toAuthReplyChunk(false));
				niceSock.close();
			}
		} catch (err) {
			await logError(err);
			niceSock.close();
		}
	}

}
Object.freeze(SocketIPCConnectors.prototype);
Object.freeze(SocketIPCConnectors);


class CAPsSocket {

	private niceSock: DenoLikeSocket|undefined = undefined;
	private readonly coreSide: ObjectsConnector;
	private readonly fromClient = new Subject<Envelope>();
	private sendingProc: Unsubscribable|undefined = undefined;
	private readonly envelopeParts = new EnvelopesBuffer();
	private readonly syncOfSendingToClient = new SingleProc();
	private maxWriteMsgSize = MAX_MSG_SIZE;
	private numOfNonAckWrites = 0;
	private numOfNonAckReads = 0;
	private writeBackpressure: Deferred<void>|undefined = undefined;

	constructor(
		private readonly token: Uint8Array,
		private readonly caps: W3N
	) {
		const fromCore = new Subject<Envelope>();
		const toCore = this.fromClient.asObservable();
		const disconnect = this.disconnect.bind(this);
		this.sendingProc = fromCore.asObservable().subscribe({
			next: this.sendToClient.bind(this),
			error: disconnect,
			complete: disconnect
		});
		this.coreSide = new ObjectsConnector(fromCore, toCore, 'services');
		exposeW3N(
			this.coreSide.exposedServices,
			this.caps as web3n.testing.CommonW3N,
			extraCAPs
		);
		Object.seal(this);
	}

	setSocket(niceSock: DenoLikeSocket): void {
		this.niceSock = niceSock;
		this.maxWriteMsgSize = this.niceSock.rawSocket().writableHighWaterMark - 0xff;
		this.niceSock.rawSocket()
		.on('close', () => this.fromClient.complete())
		.on('end', () => this.fromClient.complete())
		.on('error', err => this.fromClient.error(err));
		this.startContinuousReading();
	}

	private async startContinuousReading(): Promise<void> {
		while (this.niceSock) {
			try {
				await this.readNext();
			} catch (err) {
				this.coreSide.close(err);
				break;
			}
		}
	}

	private async readNext(): Promise<void> {
		if (!this.niceSock) { return; }
		const msg = await readMsgOnCoreSide(this.niceSock);
		if (this.numOfNonAckReads < MAX_NONACK_READS) {
			this.numOfNonAckReads += 1;
		} else {
			this.numOfNonAckReads = 0;
			await this.orderlySendChunk(ACK_CHUNK);
		}
		const envOrFlag = this.envelopeParts.processIfCommonBinaryMsg(msg);
		if (typeof envOrFlag === 'object') {
			this.fromClient.next(envOrFlag);
		} else if (envOrFlag === true) {
			return;	// explicit return for buffered msg
		} else {
			await this.processMsgAtConnectorLevel(msg);
		}
	}

	private async processMsgAtConnectorLevel(msg: MsgOnCoreSide): Promise<void> {
		if (!this.niceSock) { return; }
		if (msg.msgType === 'ack-bunch') {
			this.numOfNonAckWrites = 0;
			this.clearWriteBackpressure();
		} else if (msg.msgType === 'list-obj') {
			const path = msg.objLst!;
			const lst = this.coreSide.exposedServices.listObj(path);
			await this.orderlySendChunk(toListObjReply(path, lst));
		} else {
			// XXX log/warn or fail of unknown/unhandled msg type
		}
	}

	private clearWriteBackpressure(): void {
		if (this.writeBackpressure) {
			this.writeBackpressure.resolve();
			this.writeBackpressure = undefined;
		}
	}

	private async feelWriteBackpressure(): Promise<void> {
		if (this.writeBackpressure) {
			await this.writeBackpressure.promise;
			return this.feelWriteBackpressure();
		} else {
			this.numOfNonAckWrites += 1;
			if (this.numOfNonAckWrites >= MAX_NONACK_WRITES) {
				this.writeBackpressure = defer();
			}
		}
	}

	private async sendToClient(msg: Envelope): Promise<void> {
		try {
			for (const chunk of toChunksForSending(msg, this.maxWriteMsgSize)) {
				await this.feelWriteBackpressure();
				await this.orderlySendChunk(chunk);
			}
		} catch (err) {
			this.coreSide.close(err);
		}
	}

	private orderlySendChunk(chunk: Uint8Array): Promise<void> {
		return this.syncOfSendingToClient.startOrChain(async () => {
			if (!this.niceSock) {
				throw makeSocketIPCException({ socketClosed: true });
			}
			await this.niceSock!.write(chunk);
		});
	}

	tokenSame(token: Uint8Array): boolean {
		if (this.token.length !== token.length) { return false; }
		let differentbits = 0;
		for (let i=0; i<this.token.length; i+=1) {
			differentbits |= this.token[i] ^ token[i];
		}
		return (differentbits === 0);
	}
	
	strTokenPart(): string {
		return strTokenPart(this.token);
	}
	
	disconnect(): void {
		if (!this.niceSock) { return; }
		this.niceSock.close();
		this.niceSock = undefined;
		this.clearWriteBackpressure();
		if (this.sendingProc) {
			this.sendingProc.unsubscribe();
			this.sendingProc = undefined;
		}
	}

}
Object.freeze(CAPsSocket.prototype);
Object.freeze(CAPsSocket);


Object.freeze(exports);