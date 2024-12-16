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

/// <reference path="../api-defs/w3n.d.ts" />

import { Envelope, makeIPCException, ObjectsConnector, ClientSide } from "core-3nweb-client-lib/build/ipc";
import { SocketConnectInfo, makeSocketIPCException, toAuthRequestChunk, readMsgOnClientSide, toListObjRequestChunk, EnvelopesBuffer, SocketIPCException, MsgOnClientSide, toChunksForSending, MAX_MSG_SIZE, MAX_NONACK_WRITES, MAX_NONACK_READS, ACK_CHUNK } from "../ipc-with-core/socket-ipc";
import { Subject, Unsubscribable } from "rxjs";
import { DenoLikeSocket } from "../lib-common/deno-like-socket";
import { defer, Deferred } from "../lib-common/processes/deferred";
import { SingleProc } from "../lib-common/processes/single";

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

	private numOfNonAckWrites = 0;
	private numOfNonAckReads = 0;
	private writeBackpressure: Deferred<void>|undefined = undefined;

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
		const { msgType, authMaxMsgSize } = await readMsgOnClientSide(connection);
		if (msgType !== 'fst-auth') {
			throw makeSocketIPCException({
				malformedMsg: true,
				message: `Expected auth reply, but got ${msgType}`
			});
		}
		if (authMaxMsgSize) {
			this.maxWriteMsg = authMaxMsgSize;
		} else {
			throw makeSocketIPCException({
				authFail: true
			});
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

	private async sendToCore(msg: Envelope): Promise<void> {
		for (const chunk of toChunksForSending(msg, this.maxWriteMsg)) {
			await this.feelWriteBackpressure();
			await this.orderlySendChunk(chunk);
		}
	}

	private orderlySendChunk(chunk: Uint8Array): Promise<void> {
		return this.sendingProc.startOrChain(async () => {
			const conn = await this.connection();
			await conn.write(chunk);
		});
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
		const msg = await readMsgOnClientSide(connection);
		if (this.numOfNonAckReads < MAX_NONACK_READS) {
			this.numOfNonAckReads += 1;
		} else {
			this.numOfNonAckReads = 0;
			await this.orderlySendChunk(ACK_CHUNK);
		}
		const envelopeOrFlag = this.envelopeParts.processIfCommonBinaryMsg(msg);
		if (typeof envelopeOrFlag === 'object') {
			this.fromCore.next(envelopeOrFlag);
			return;
		} else if (envelopeOrFlag === true) {
			return;	// explicit return for buffered msg
		} else {
			await this.processMsgAtConnectorLevel(msg);
		}
	}

	private async processMsgAtConnectorLevel(
		msg: MsgOnClientSide
	): Promise<void> {
		if (msg.msgType === 'ack-bunch') {
			this.numOfNonAckWrites = 0;
			this.clearWriteBackpressure();
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
			// XXX log/warn or fail of unknown/unhandled msg type
		}
	}

}
Object.freeze(ClientSocketIPC.prototype);


Object.freeze(exports);