/*
 Copyright (C) 2022, 2024 3NSoft Inc.
 
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

import { Component, Service } from '../app-n-components';
import { isCallerAllowed, makeRPCException } from '../lib-common/manifest-utils';
import { Deferred, defer } from '../lib-common/processes/deferred';

type PassedDatum = web3n.rpc.PassedDatum;
type Datum = PassedDatum|undefined;
type RPCConnection = web3n.rpc.client.RPCConnection;
type IncomingConnection = web3n.rpc.service.IncomingConnection;
type IncomingMsg = web3n.rpc.service.IncomingMsg;
type OutgoingMsg = web3n.rpc.service.OutgoingMsg;
type Observer<T> = web3n.Observer<T>;
type AllowedCallers = web3n.caps.AllowedCallers;
type RPCException = web3n.rpc.RPCException;

export type GetServiceToHandleNewCall = (
	caller: Component, appDomain: string, service: string
) => Promise<Service>;

export type ClientSideConnector = (
	caller: Component, appDomain: string, service: string
) => Promise<{
	connection: RPCConnection;
	doOnClose: (cleanup: ()=>void) => void;
}>;

export function makeClientSideConnector(
	srvToHandleCall: GetServiceToHandleNewCall
): ClientSideConnector {
	return async (caller, appDomain, service) => {
		const instance = await srvToHandleCall(caller, appDomain, service);
		instance.ensureCallerAllowed(caller.domain, caller.entrypoint);
		return await instance.connect();
	};
}


class Connection {

	private nextCallNum = 1;
	private readonly calls = new Map<number, Deferred<Datum>|Observer<Datum>>();
	private initBuffer: IncomingMsg[]|undefined = [];
	private srvSink: Observer<IncomingMsg>|undefined = undefined;
	private readonly onCloseFns = new Set<()=>void>();
	private constructor(
		public readonly appDomain: string,
		public readonly srvName: string
	) {
		Object.seal(this);
	}

	static makePair(appDomain: string, srvName: string): {
		clientSide: RPCConnection; srvSide: IncomingConnection;
		doOnClose: (cleanup: ()=>void) => void;
	} {
		const connection = new Connection(appDomain, srvName);
		const close = connection.close.bind(connection);
		const srvSide: IncomingConnection = {
			close,
			send: connection.send.bind(connection),
			watch: connection.watch.bind(connection),
		};
		const clientSide: RPCConnection = {
			close,
			makeRequestReplyCall: connection.makeRequestReplyCall.bind(connection),
			startObservableCall: connection.startObservableCall.bind(connection),
		};
		return {
			clientSide, srvSide,
			doOnClose: cleanup => connection.onCloseFns.add(cleanup)
		};
	}

	async close(): Promise<void> {
		if (!this.acceptsMsgs()) { return; }
		this.initBuffer = undefined;
		if (this.srvSink) {
			this.srvSink.complete!();
			this.srvSink = undefined;
		}
		if (this.calls.size === 0) { return; }
		const exc = this.makeExc({ connectionClosed: true });
		for (const [ callNum, call ] of Array.from(this.calls.entries())) {
			this.calls.delete(callNum);
			if ((call as Deferred<PassedDatum>).promise) {
				(call as Deferred<PassedDatum>).reject(exc);
			} else {
				(call as Observer<PassedDatum>).error!(exc);
			}
		}
		for (const cleanup of this.onCloseFns) {
			cleanup();
		}
	}

	private numForCall(): number {
		let callNum: number;
		do {
			callNum = this.nextCallNum;
			if (this.nextCallNum >= 0xffffffff) {
				this.nextCallNum = 1;
			} else {
				this.nextCallNum += 1;
			}
		} while (this.calls.has(callNum));
		return callNum;
	}

	private passToService(msg: IncomingMsg): void {
		if (this.initBuffer) {
			this.initBuffer.push(msg);
		} else {
			this.srvSink!.next!(msg);
		}
	}

	private acceptsMsgs(): boolean {
		return !!(this.srvSink || this.initBuffer);
	}

	watch(obs: Observer<IncomingMsg>): () => void {
		if (!this.acceptsMsgs()) {
			obs.complete!();
			return noop;
		}
		if (this.srvSink) {
			throw this.makeExc({ connectionAlreadyWatched: true });
		}
		this.srvSink = obs;
		this.drainInitBuffer();
		return () => this.close();
	}

	private drainInitBuffer(): void {
		process.nextTick(() => {
			if (!this.initBuffer) { return; }
			const msg = this.initBuffer.shift();
			if (!msg) {
				this.initBuffer = undefined;
				return;
			}
			if (!this.srvSink) { return; }
			this.srvSink.next!(msg);
			this.drainInitBuffer();
		});
	}

	private makeExc(
		flags: Partial<RPCException>, params?: Partial<RPCException>
	): RPCException {
		return makeRPCException(this.appDomain, this.srvName, flags, params);
	}

	async send({ callNum, callStatus, data, err }: OutgoingMsg): Promise<void> {
		const call = this.calls.get(callNum);
		if (!call) { return; }
		if ((call as Deferred<Datum>).promise) {
			if (callStatus === 'end') {
				(call as Deferred<Datum>).resolve(data);
			} else if (callStatus === 'error') {
				(call as Deferred<Datum>).reject(err);
			} else {
				(call as Deferred<Datum>).reject(this.makeExc({}, {
					message: `Unexpected call status ${
						callStatus} for request-reply call`
				}));
			}
			this.calls.delete(callNum);
		} else {
			if (callStatus === 'interim') {
				(call as Observer<Datum>).next!(data);
			} else if (callStatus === 'end') {
				(call as Observer<Datum>).complete!();
				this.calls.delete(callNum);
			} else if (callStatus === 'error') {
				(call as Observer<Datum>).error!(err);
				this.calls.delete(callNum);
			} else {
				(call as Deferred<Datum>).reject(this.makeExc({}, {
					message: `Unexpected call status ${
						callStatus} for request-reply call`
				}));
				this.calls.delete(callNum);
			}
		}
	}

	makeRequestReplyCall(
		method: string, req: Datum
	): Promise<Datum> {
		if (!this.acceptsMsgs()) {
			throw Promise.reject(this.makeExc({ connectionClosed: true }));
		}
		const deferred = defer<Datum>();
		const callNum = this.numForCall();
		this.calls.set(callNum, deferred);
		this.passToService({
			msgType: 'start', callNum, method, data: req
		});
		return deferred.promise;
	}

	startObservableCall(
		method: string, req: Datum, obs: Observer<Datum>
	): () => void {
		if (!this.acceptsMsgs()) {
			obs.error!(this.makeExc({ connectionClosed: true }));
			return noop;
		}
		const callNum = this.numForCall();
		this.calls.set(callNum, obs);
		this.passToService({
			msgType: 'start', callNum, method, data: req
		});
		return () => {
			this.calls.delete(callNum);
			this.passToService({ msgType: 'cancel', callNum });
		};
	}

}
Object.freeze(Connection.prototype);
Object.freeze(Connection);


export class ServiceConnector implements Service {

	private connectionSink: Observer<IncomingConnection>|undefined = undefined;
	private  deferredSink: Deferred<Observer<IncomingConnection>>|undefined =
		defer();
	private acceptingCalls = true;

	constructor(
		public readonly appDomain: string,
		public readonly srvName: string,
		private readonly allowedCallers: AllowedCallers,
		private readonly forOneConnectionOnly: boolean,
	) {
		Object.seal(this);
	}

	wrap(): Service {
		return {
			canHandleCall: this.canHandleCall.bind(this),
			ensureCallerAllowed: this.ensureCallerAllowed.bind(this),
			connect: this.connect.bind(this),
		};
	}

	canHandleCall(): boolean {
		return this.acceptingCalls;
	}

	private async getConnectionSink(): Promise<Observer<IncomingConnection>> {
		if (this.connectionSink) {
			return this.connectionSink;
		} else {
			return await this.deferredSink!.promise;
		}
	}

	ensureCallerAllowed(callerApp: string, callerComponent: string): void {
		if (!isCallerAllowed(
			this.appDomain, this.allowedCallers, callerApp, callerComponent
		)) {
			throw makeRPCException(
				this.appDomain, this.srvName,
				{ callerNotAllowed: true },
				{ callerApp, callerComponent }
			);
		}	
	}

	setSinkForConnections(sink: Observer<IncomingConnection>): void {
		if (!this.connectionSink && this.deferredSink) {
			this.connectionSink = sink;
			this.deferredSink.resolve(sink);
			this.deferredSink = undefined;
		} else {
			throw this.makeExc({ serviceAlreadyExposed: true });
		}
	}

	private makeExc(flags: Partial<RPCException>): RPCException {
		return makeRPCException(this.appDomain, this.srvName, flags);
	}

	async connect(): Promise<{
		connection: RPCConnection;
		doOnClose: (cleanup: ()=>void) => void;
	}> {
		if (this.acceptingCalls) {
			if (this.forOneConnectionOnly) {
				this.acceptingCalls = false;
			}
		} else {
			throw this.makeExc({ connectionNotAccepted: true });
		}
		const srvSideSink = await this.getConnectionSink();
		const {
			clientSide: connection, srvSide, doOnClose
		} = Connection.makePair(this.appDomain, this.srvName);
		srvSideSink.next!(srvSide);
		return { connection, doOnClose };
	}

	close(): void {
		if (!this.acceptingCalls) { return; }
		this.acceptingCalls = false;
		if (this.connectionSink) {
			this.connectionSink.complete!();
			this.connectionSink = undefined;
		}
		if (this.deferredSink) {
			this.deferredSink.promise.then(srv => srv.complete!()).catch(noop);
			this.deferredSink = undefined;
		}
	}

}
Object.freeze(ServiceConnector.prototype);
Object.freeze(ServiceConnector);


function noop() {}


Object.freeze(exports);