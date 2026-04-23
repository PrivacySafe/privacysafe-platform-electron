/*
 Copyright (C) 2022, 2026 3NSoft Inc.

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

/// <reference path="../../../ts-code/platform/api-defs/w3n.d.ts" />

import { Envelope, makeIPCException, ObjectsConnector, ClientSide } from "core-3nweb-client-lib/build/ipc";
import { SocketConnectInfo, makeSocketIPCException, toAuthRequestChunk, readMsgOnClientSide, toListObjRequestChunk, EnvelopesBuffer, SocketIPCException, MsgOnClientSide, toChunksForSending, MAX_MSG_SIZE, toBytesAck } from "../ipc-with-core/socket-ipc";
import { Subject, Unsubscribable } from "rxjs";
import { DenoLikeSocket, WriteBackPressure } from "../app-n-components/deno-like-socket";
import { defer, Deferred } from "../../platform/lib-common/processes/deferred";
import { SingleProc } from "../../platform/lib-common/processes/single";
import { sleep } from "../../platform/lib-common/processes/sleep";

// ts -> js compilation will be done before browserification, needing this type
namespace Deno {
	export type Conn = DenoLikeSocket;
	export var connect: (opts: any) => Promise<Conn>;
}


export class ClientSocketIPC {

	private openConnection: Deno.Conn|undefined = undefined;
	private openningConnection: Deferred<Deno.Conn>|undefined = undefined;

	private readonly fromCore = new Subject<Envelope>();
	private readonly toCore = new Subject<Envelope>();
	private readonly sendingProc = new SingleProc();
	private sendingToCoreProc: Unsubscribable|undefined;
	private readonly clientSide: ClientSide;

	private listRequests = new Map<string, Deferred<string[]>>();
	private readonly envelopeParts = new EnvelopesBuffer();

	private maxWriteMsg = MAX_MSG_SIZE;

	private writeBackpressure: WriteBackPressure|undefined = undefined;
	private numOfBytesToAck = 0;

	private readonly connDebounce = new ConnectionDebounceLimitter();

	constructor(
		private readonly sockParam: SocketConnectInfo
	) {
		this.sendingToCoreProc = this.toCore.asObservable().subscribe({
			next: env => this.sendToCore(env),
			complete: () => {
				this.sendingToCoreProc?.unsubscribe();
				this.sendingToCoreProc = undefined;
				this.fromCore.complete();
			},
			error: err => {
				this.sendingToCoreProc?.unsubscribe();
				this.sendingToCoreProc = undefined;
				this.fromCore.error(err);
			},
		});
		this.clientSide = ObjectsConnector.makeClientSide(
			this.toCore, this.fromCore.asObservable(),
			undefined, this.listObjAsync.bind(this)
		);
		this.startContinuousReading();
		Object.seal(this);
	}

	static denoConnect: typeof Deno.connect = undefined as any;

	static makeConnector(sockParam: SocketConnectInfo): ClientSide {
		const ipc = new ClientSocketIPC(sockParam);
		return ipc.clientSide;
	}

	private async connection(): Promise<Deno.Conn> {
		if (this.openConnection) { return this.openConnection; }
		if (this.openningConnection) { return this.openningConnection.promise; }
		if (!this.sendingToCoreProc) {
			throw makeIPCException({ ipcNotConnected: true });
		}
		this.openningConnection = defer();
		if (!(await this.connDebounce.canConnect())) {
			sleep(500).then(() => globalThis.close?.());
			throw makeIPCException({ ipcNotConnected: true });
		}
		try {
			let connection: Deno.Conn;
			if (this.sockParam.type === 'unix') {
				connection = await ClientSocketIPC.denoConnect({
					transport: 'unix', path: this.sockParam.path!
				});
			} else if (this.sockParam.type === 'net') {
				const { host: hostname, port } = this.sockParam.netAddr!;
				connection = await ClientSocketIPC.denoConnect({
					transport: 'tcp', hostname, port
				});
			} else {
				throw new Error(`Unknown connection type ${this.sockParam.type}`);
			}
			await this.authenticate(connection);
			this.openConnection = connection;
			this.openningConnection.resolve(connection);
			return this.openConnection;
		} catch (err) {
			this.openningConnection.reject(err);
			throw err;
		} finally {
			this.openningConnection = undefined;
		}
	}

	private async authenticate(connection: Deno.Conn): Promise<void> {
		const authReqChunk = toAuthRequestChunk(this.sockParam.token);
		await connection.write(authReqChunk);
		const { msg: { msgType, authMaxMsgSize } } = await readMsgOnClientSide(connection);
		if (msgType !== 'fst-auth') {
			throw makeSocketIPCException({
				malformedMsg: true,
				message: `Expected auth reply, but got ${msgType}`
			});
		}
		if (authMaxMsgSize) {
			this.maxWriteMsg = authMaxMsgSize;
			this.writeBackpressure = new WriteBackPressure(this.maxWriteMsg*2);
		} else {
			throw makeSocketIPCException({
				authFail: true
			});
		}
	}

	private async sendToCore(msg: Envelope): Promise<void> {
		for (const chunk of toChunksForSending(msg, this.maxWriteMsg)) {
			await this.orderlySendChunk(chunk);
		}
	}

	private orderlySendChunk(chunk: Uint8Array): Promise<void> {
		return this.sendingProc.startOrChain(async () => {
			const conn = await this.connection();
			await this.writeBackpressure?.feel();
			this.writeBackpressure!.addNumOfWrittenBytes(chunk.length);
			await conn.write(chunk);
		});
	}

	private scheduleBytesAck(numOfBytes: number): void {
		this.numOfBytesToAck += numOfBytes;
		if (this.numOfBytesToAck > this.maxWriteMsg/10) {
			const ackMsg = toBytesAck(this.numOfBytesToAck);
			this.numOfBytesToAck = 0;
			this.orderlySendChunk(ackMsg).catch(noop);
		}
	}

	private async listObjAsync(path: string[]): Promise<string[]> {
		const reqKey = path.join('.');
		let req = this.listRequests.get(reqKey);
		if (req) {
			return req.promise;
		}
		req = defer<string[]>();
		this.listRequests.set(reqKey, req);
		try {
			await this.orderlySendChunk(toListObjRequestChunk(path));
		} catch (err) {
			if (this.listRequests.get(reqKey) === req) {
				this.listRequests.delete(reqKey);
			}
			req.reject(err);
		}
		return req.promise;
	}

	private async startContinuousReading(): Promise<void> {
		while (this.sendingToCoreProc) {
			try {
				await this.readNext();
			} catch (err) {
				if (((err as SocketIPCException).type === 'ipc-via-socks')
				&& ((err as SocketIPCException).unexpectedEOF || (err as SocketIPCException).socketClosed)) {
					this.clientSide.close();
				} else {
					this.clientSide.close(err);
				}
				break;
			}
		}
	}

	private async readNext(): Promise<void> {
		const connection = await this.connection();
		const { msg, bytesRead } = await readMsgOnClientSide(connection);
		const envelopeOrFlag = this.envelopeParts.processIfCommonBinaryMsg(msg);
		if (envelopeOrFlag === false) {
			await this.processMsgAtConnectorLevel(msg);
		} else {
			this.scheduleBytesAck(bytesRead);
			if (envelopeOrFlag === true) {
				return;	// explicit return for buffered msg
			} else {
				this.fromCore.next(envelopeOrFlag);
				return;
			}
		}
	}

	private async processMsgAtConnectorLevel(
		msg: MsgOnClientSide
	): Promise<void> {
		if (msg.msgType === 'ack-bytes') {
			this.writeBackpressure?.ackBytes(msg.ackBytes!);
		} else if (msg.msgType === 'list-obj') {
			const reply = msg.objLst!;
			const reqKey = reply.path.join('.');
			const req = this.listRequests.get(reqKey);
			if (req) {
				this.listRequests.delete(reqKey);
				if (reply.lst) {
					req.resolve(reply.lst);
				} else {
					req.reject(makeIPCException({ objectNotFound: true }));
				}
			} else {
				// XXX log/warn call that wasn't found
			}
		} else {
			throw new Error(`unknown/unhandled socket ipc msg type`);
		}
	}

}
Object.freeze(ClientSocketIPC.prototype);


function noop() {}

const CONNECTION_ATTEMPT_WAIT_MILLIS = 50;
const MAX_NUM_OF_CONNECTION_ATTEMPTS  = 100;
const RESTART_PERIOD = 10 * CONNECTION_ATTEMPT_WAIT_MILLIS * MAX_NUM_OF_CONNECTION_ATTEMPTS;


class ConnectionDebounceLimitter {

	private numOfAttempts = 0;
	private latestAttemtptTS = 0;

	constructor() {
		Object.seal(this);
	}

	async canConnect(): Promise<boolean> {
		const now = Date.now();
		if ((this.latestAttemtptTS + RESTART_PERIOD) < now) {
			this.numOfAttempts = 1;
			this.latestAttemtptTS = now;
			return true;
		} else if (this.numOfAttempts > MAX_NUM_OF_CONNECTION_ATTEMPTS) {
			await sleep(CONNECTION_ATTEMPT_WAIT_MILLIS);
			return false;
		} else {
			this.numOfAttempts += 1;
			await sleep(CONNECTION_ATTEMPT_WAIT_MILLIS);
			return true;
		}
	}

}
Object.freeze(ConnectionDebounceLimitter.prototype);
Object.freeze(ConnectionDebounceLimitter);


Object.freeze(exports);