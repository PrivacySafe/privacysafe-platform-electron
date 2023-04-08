/*
 Copyright (C) 2023 3NSoft Inc.
 
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

type AppRPCFn = NonNullable<web3n.caps.W3N['appRPC']>;
type OtherAppsRPCFn = NonNullable<web3n.caps.W3N['otherAppsRPC']>;
type ExposeServiceFn = NonNullable<web3n.caps.W3N['exposeService']>;
type ClientSideConnection = web3n.rpc.client.RPCConnection;
type ServiceSideConnection = web3n.rpc.service.IncomingConnection;


export class RPCLogger {

	private clientSideConnId = 0;
	private serviceSideConnId = 0;

	constructor(
		public readonly appDomain: string,
		public readonly entrypoint: string
	) {
		Object.seal(this);
	}

	private log(msg: string, ...objsToLog: any[]): void {
		console.log(msg, ...objsToLog);
	}

	wrapAppRPC(fn: AppRPCFn): AppRPCFn {
		return async (service) => {
			try {
				const conn = await fn(service);
				this.clientSideConnId += 1;
				this.log(`RPC created connection c-${this.clientSideConnId} from ${this.appDomain}${this.entrypoint} to service ${service}`);
				return this.wrapClientConnection(
					this.clientSideConnId, undefined, service, conn
				);
			} catch (err) {
				this.log(`RPC fails to connect in ${this.appDomain}, ${this.entrypoint} with service ${service}`);
				throw err;
			}
		};
	}

	wrapOtherAppsRPC(fn: OtherAppsRPCFn): OtherAppsRPCFn {
		return async (serviceApp, service) => {
			try {
				const conn = await fn(serviceApp, service);
				this.clientSideConnId += 1;
				console.log(`RPC created connection c-${this.clientSideConnId} from ${this.appDomain}${this.entrypoint} to service ${service} @ ${serviceApp}`);
				return this.wrapClientConnection(
					this.clientSideConnId, serviceApp, service, conn
				);
			} catch (err) {
				this.log(`RPC fails to connect ${this.appDomain}${this.entrypoint} with service ${service} @ ${serviceApp}\n`, err);
				throw err;
			}
		};
	}

	private wrapClientConnection(
		loggingConnId: number, serviceApp: string|undefined, service: string,
		conn: ClientSideConnection
	): ClientSideConnection {
		const logPrefix = `RPC c-${loggingConnId}:`;
		let clientSideCallId = 0;
		const wrap: ClientSideConnection = {
			close: async () => {
				this.log(`${logPrefix} close called`);
				try {
					await conn.close();
				} catch (err) {
					this.log(`${logPrefix} close threw an error\n`, err);
					throw err;
				}
			},
			makeRequestReplyCall: async (method, req) => {
				clientSideCallId += 1;
				this.log(`${logPrefix} method ${method} is called${(req?.bytes ? ` with ${req.bytes.length} bytes` : '')}, as request-reply call c-${loggingConnId}-${clientSideCallId}`);
				try {
					const reply = await conn.makeRequestReplyCall(method, req);
					this.log(`${logPrefix} method ${method} call c-${loggingConnId}-${clientSideCallId} returns ${(reply?.bytes ? `${reply.bytes.length} bytes`: '')}`);
					return reply;
				} catch (err) {
					this.log(`${logPrefix} method ${method} call c-${loggingConnId}-${clientSideCallId} threw an error\n`, err);
					throw err;
				}
			},
			startObservableCall: (method, req, obs) => {
				clientSideCallId += 1;
				this.log(`${logPrefix} method ${method} is called${(req?.bytes ? ` with ${req.bytes.length} bytes` : '')}, starting observable call c-${loggingConnId}-${clientSideCallId}`);
				const obsWrap: web3n.Observer<web3n.rpc.PassedDatum> = {
					next: d => {
						this.log(`${logPrefix} method ${method} call c-${loggingConnId}-${clientSideCallId} has next event${(d?.bytes ? ` with ${d.bytes.length} bytes` : '')}`);
						if (obs.next) {
							obs.next(d);
						}
					},
					complete: () => {
						this.log(`${logPrefix} method ${method} observable call c-${loggingConnId}-${clientSideCallId} completes`);
						if (obs.complete) {
							obs.complete();
						}
					},
					error: err => {
						this.log(`${logPrefix} method ${method} observable call c-${loggingConnId}-${clientSideCallId} threw error\n`, err);
						if (obs.error) {
							obs.error(err);
						}
					}
				};
				const stopCall = conn.startObservableCall(method, req, obsWrap);
				return () => {
					this.log(`${logPrefix} method ${method} observable call c-${loggingConnId}-${clientSideCallId} is stopped by callee`);
					stopCall();
				};
			}
		};
		return wrap;	
	}

	wrapExposeService(fn: ExposeServiceFn): ExposeServiceFn {
		return (service, obs) => {
			this.log(`RPC: ${this.appDomain}${this.entrypoint} exposes service ${service}`);
			const logPrefix = `RPC: ${this.appDomain}${this.entrypoint}, service ${service}`;
			const wrap: web3n.Observer<ServiceSideConnection> = {
				next: conn => {
					this.serviceSideConnId += 1;
					if (obs.next) {
						this.log(`${logPrefix} receives incoming connection s-${this.serviceSideConnId}`);
						obs.next(this.wrapServiceSideConnection(
							this.serviceSideConnId, conn
						));
					}
				},
				complete: () => {
					this.log(`${logPrefix} is stopped from getting new incoming connections`);
					if (obs.complete) {
						obs.complete();
					}
				},
				error: err => {
					this.log(`${logPrefix} listening for incoming connections threw an error:\n`, err);
					if (obs.error) {
						obs.error(err);
					}
				}
			};
			const detach = fn(service, wrap);
			return () => {
				this.log(`${logPrefix} stops listening for new incoming connection`);
				detach();
			};
		}
	}
	
	private wrapServiceSideConnection(
		loggingConnId: number, conn: ServiceSideConnection
	): ServiceSideConnection {
		const logPrefix = `RPC s-${loggingConnId}:`;
		const wrap: ServiceSideConnection = {
			watch: obs => conn.watch({
				next: msg => {
					if (obs.next) {
						this.log(`${logPrefix} received ${msg.msgType}${((msg.msgType === 'start') ? ` of method ${msg.method}`: '')} in call s-${loggingConnId}-${msg.callNum} ${((msg.msgType === 'start') ? (msg.data?.bytes ? `with ${msg.data.bytes.length} bytes`: ''): '')}`);
						obs.next(msg);
					}
				},
				complete: () => {
					this.log(`${logPrefix} connection completed`);
					if (obs.complete) {
						obs.complete();
					}
				},
				error: err => {
					this.log(`${logPrefix} connection got an error:\n`, err);
					if (obs.error) {
						obs.error(err);
					}
				}
			}),
			send: async msg => {
				try {
					this.log(`${logPrefix} sends ${msg.callStatus} to call s-${loggingConnId}-${msg.callNum} with ${(msg.data?.bytes ? msg.data.bytes.length: 0)} bytes`);
					await conn.send(msg);
				} catch (err) {
					this.log(`${logPrefix} got an error when sending ${msg.callStatus} to call s-${loggingConnId}-${msg.callNum}`, err);
				}
			},
			close: async () => {
				this.log(`${logPrefix} closes connection`);
				await conn.close();
			}
		};
		return wrap;
	}
	

}
Object.freeze(RPCLogger.prototype);
Object.freeze(RPCLogger);


Object.freeze(exports);