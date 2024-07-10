/*
 Copyright (C) 2022 - 2024 3NSoft Inc.
 
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

/// <reference path="../../../ts-code/api-defs/w3n.d.ts" />

declare const w3n: web3n.testing.CommonW3N;

type IncomingConnection = web3n.rpc.service.IncomingConnection;
type CallStart = web3n.rpc.service.CallStart;
type PassedDatum = web3n.rpc.PassedDatum;
type WritableFS = web3n.files.WritableFS;

interface IPCException extends web3n.RuntimeException {
	type: 'ipc';
	duplicateFnCallNum?: true;
	objectNotFound?: true;
	callFnNotFound?: true;
	invalidCallNum?: true;
	invalidPath?: true;
	invalidType?: true;
	invalidReference?: true;
	missingBodyBytes?: true;
	badReply?: true;
	stopFromOtherSide?: true;
	connectorStop?: true;
	ipcNotConnected?: true;
	invalidNumInBody?: true;
	path?: string[];
}


export class Service {

	constructor(
		private readonly serveManyConnections: boolean,
		public readonly syncFS: WritableFS,
		public readonly localFS: WritableFS
	) {
		Object.seal(this);
	}

	public handleConnection(connection: IncomingConnection): void {
		connection.watch({
			next: async call => {
				if (call.msgType === 'start') {
					await this.serveCallStart(connection, call);
				} else if (call.msgType === 'cancel') {
				} else {
					await w3n.testStand.log('error',
						`Got unknown message type '${(call as any).msgType}'`);
					w3n.closeSelf!();
				}
			},
			complete: () => {
				if (!this.serveManyConnections) {
					w3n.closeSelf!();
				}
			},
			error: async err => {
				await w3n.testStand.log(
					'error', `Error in listening for calls`, err);
				w3n.closeSelf!();
			}
		});
	}

	static singleton: Service|undefined = undefined;

	private async serveCallStart(
		connection: IncomingConnection, { callNum, method, data }: CallStart
	): Promise<void> {
		try {
			if ((method as keyof Service) === 'foo') {
				this.foo();
				await connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'getUniqueIdentifier') {
				const reply = this.getUniqueIdentifier();
				await connection.send({
					callNum, callStatus: 'end', data: reply
				});
			} else if ((method as keyof Service) === 'addToBytes') {
				const reply = this.addToBytes(data!);
				await connection.send({
					callNum, callStatus: 'end', data: reply
				});
			} else if ((method as keyof Service) === 'writeFileInSyncFS') {
				await this.writeFileInSyncFS(data!);
				await connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readFileFromSyncFS') {
				const content = await this.readFileFromSyncFS(data!);
				await connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'writeJSONFileInSyncFS') {
				await this.writeJSONFileInSyncFS(data!);
				await connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readJSONFileFromSyncFS') {
				const content = await this.readJSONFileFromSyncFS(data!);
				await connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'writeFileInLocalFS') {
				await this.writeFileInLocalFS(data!);
				await connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readFileFromLocalFS') {
				const content = await this.readFileFromLocalFS(data!);
				await connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'writeJSONFileInLocalFS') {
				await this.writeJSONFileInLocalFS(data!);
				await connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readJSONFileFromLocalFS') {
				const content = await this.readJSONFileFromLocalFS(data!);
				await connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'getUserId') {
				const data = await this.getUserId();
				await connection.send({
					callNum, callStatus: 'end', data
				});

			} else {
				await connection.send({
					callNum, callStatus: 'error', err: `Method ${method} not found`
				});
			}
		} catch (err) {
			await connection.send({
				callNum, callStatus: 'error', err
			});
		}
	}

	public foo(): void {}

	public readonly uid = `${Math.floor(Number.MAX_SAFE_INTEGER * Math.random())}`;

	public getUniqueIdentifier(): PassedDatum|undefined {
		return { bytes: strToBytes(this.uid) };
	}

	public addToBytes({ bytes }: PassedDatum): PassedDatum {
		for (let i=0; i<bytes!.length; i+=1) {
			bytes![i] += i;
		}
		return { bytes };
	}

	public async writeFileInSyncFS({ bytes }: PassedDatum): Promise<void> {
		const { path, body } = parsePathAndBody(bytes!);
		await this.syncFS.writeBytes(path, body);
	}

	public async readFileFromSyncFS(
		{ bytes }: PassedDatum
	): Promise<PassedDatum|undefined> {
		const { path } = parsePathAndBody(bytes!);
		const data = await this.syncFS.readBytes(path);
		return (data ? { bytes: data } : undefined);
	}

	public async writeFileInLocalFS({ bytes }: PassedDatum): Promise<void> {
		const { path, body } = parsePathAndBody(bytes!);
		await this.localFS.writeBytes(path, body);
	}

	public async readFileFromLocalFS(
		{ bytes }: PassedDatum
	): Promise<PassedDatum|undefined> {
		const { path } = parsePathAndBody(bytes!);
		const data = await this.localFS.readBytes(path);
		return (data ? { bytes: data } : undefined);
	}

	public async writeJSONFileInSyncFS({ bytes }: PassedDatum): Promise<void> {
		const { path, json } = parsePathAndJSONBody(bytes!);
		await this.syncFS.writeJSONFile(path, json);
	}

	public async readJSONFileFromSyncFS(
		{ bytes }: PassedDatum
	): Promise<PassedDatum|undefined> {
		const { path } = parsePathAndBody(bytes!);
		const data = await this.syncFS.readJSONFile(path);
		return { bytes: jsonToBytes(data) };
	}

	public async writeJSONFileInLocalFS({ bytes }: PassedDatum): Promise<void> {
		const { path, json } = parsePathAndJSONBody(bytes!);
		await this.localFS.writeJSONFile(path, json);
	}

	public async readJSONFileFromLocalFS(
		{ bytes }: PassedDatum
	): Promise<PassedDatum|undefined> {
		const { path } = parsePathAndBody(bytes!);
		const data = await this.localFS.readJSONFile(path);
		return { bytes: jsonToBytes(data) };
	}

	public async getUserId(): Promise<PassedDatum> {
		const userId = await w3n.mailerid!.getUserId();
		return { bytes: strToBytes(userId) };
	}

}


function parsePathAndBody(
	bytes: Uint8Array
): { path: string; body: Uint8Array; } {
	const pathLen = bytes[0];
	const path = strFromBytes(bytes.slice(1, pathLen+1));
	const body = bytes.slice(pathLen+1);
	return { path, body };
}

function parsePathAndJSONBody(bytes: Uint8Array): { path: string; json: any; } {
	const { path, body } = parsePathAndBody(bytes);
	return { path, json: jsonFromBytes(body) };
}

function jsonFromBytes(bytes: Uint8Array): any {
	return JSON.parse(strFromBytes(bytes));
}

function jsonToBytes(json: any): Uint8Array {
	return strToBytes(JSON.stringify(json));
}

function strToBytes(str: string): Uint8Array {
	const enc = new TextEncoder();
	return enc.encode(str);
}

function strFromBytes(bytes: Uint8Array): string {
	const dec = new TextDecoder();
	return dec.decode(bytes);
}
