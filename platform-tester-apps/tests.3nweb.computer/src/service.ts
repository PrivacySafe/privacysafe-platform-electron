/*
 Copyright (C) 2022 - 2023 3NSoft Inc.
 
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

import { jsonFromBytes, jsonToBytes, strFromBytes, strToBytes } from './test-page-utils.js';

type IncomingConnection = web3n.rpc.service.IncomingConnection;
type CallStart = web3n.rpc.service.CallStart;
type PassedDatum = web3n.rpc.PassedDatum;
type WritableFS = web3n.files.WritableFS;
type WritableFile = web3n.files.WritableFile;

export class Service {

	public readonly disconnect: () => void;

	constructor(
		private readonly connection: IncomingConnection,
		public readonly syncFS: WritableFS,
		public readonly localFS: WritableFS
		) {
		this.disconnect = this.connection.watch({
			next: async call => {
				if (call.msgType === 'start') {
					await this.serveCallStart(call);
				} else if (call.msgType === 'cancel') {
				} else {
					await w3n.testStand.log('error',
						`Got unknown message type '${(call as any).msgType}'`);
					w3n.closeSelf!();
				}
			},
			complete: () => w3n.closeSelf!(),
			error: async err => {
				await w3n.testStand.log(
					'error', `Error in listening for calls`, err);
				w3n.closeSelf!();
			}
		});
		Object.seal(this);
	}

	static singleton: Service|undefined = undefined;

	private async serveCallStart(
		{ callNum, method, data }: CallStart
	): Promise<void> {
		try {
			if ((method as keyof Service) === 'foo') {
				this.foo();
				await this.connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'addToBytes') {
				const reply = this.addToBytes(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: reply
				});
			} else if ((method as keyof Service) === 'writeFileInSyncFS') {
				await this.writeFileInSyncFS(data!);
				await this.connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readFileFromSyncFS') {
				const content = await this.readFileFromSyncFS(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'writeJSONFileInSyncFS') {
				await this.writeJSONFileInSyncFS(data!);
				await this.connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readJSONFileFromSyncFS') {
				const content = await this.readJSONFileFromSyncFS(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'writeFileInLocalFS') {
				await this.writeFileInLocalFS(data!);
				await this.connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readFileFromLocalFS') {
				const content = await this.readFileFromLocalFS(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'writeJSONFileInLocalFS') {
				await this.writeJSONFileInLocalFS(data!);
				await this.connection.send({ callNum, callStatus: 'end' });
			} else if ((method as keyof Service) === 'readJSONFileFromLocalFS') {
				const content = await this.readJSONFileFromLocalFS(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: content
				});
			} else if ((method as keyof Service) === 'getUserId') {
				const data = await this.getUserId();
				await this.connection.send({
					callNum, callStatus: 'end', data
				});
			} else if ((method as keyof Service) === 'readAndPassFile') {
				const reply = await this.readAndPassFile(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: reply
				});
			} else if ((method as keyof Service) === 'readAndPassFS') {
				const reply = await this.readAndPassFS(data!);
				await this.connection.send({
					callNum, callStatus: 'end', data: reply
				});
			} else {
				await this.connection.send({
					callNum, callStatus: 'error', err: `Method ${method} not found`
				});
			}
		} catch (err) {
			await this.connection.send({
				callNum, callStatus: 'error', err
			});
		}
	}

	public foo(): void {}

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
	): Promise<PassedDatum> {
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
	): Promise<PassedDatum> {
		const { path } = parsePathAndBody(bytes!);
		const data = await this.localFS.readJSONFile(path);
		return { bytes: jsonToBytes(data) };
	}

	public async getUserId(): Promise<PassedDatum> {
		const userId = await w3n.mailerid!.getUserId();
		return { bytes: strToBytes(userId) };
	}

	public async readAndPassFile(
		{ passedByReference }: PassedDatum
	): Promise<PassedDatum> {
		const file = passedByReference![0] as WritableFile;
		if (file !== passedByReference![1]) {
			throw new Error(`Duplicate reference should produce same file object`);
		}
		const txtContent = await file.readTxt();
		return {
			bytes: strToBytes(txtContent),
			passedByReference: [ file, passedByReference![1] ]
		};
	}

	public async readAndPassFS(
		{ bytes, passedByReference }: PassedDatum
	): Promise<PassedDatum> {
		const fs = passedByReference![0] as WritableFS;
		if (fs !== passedByReference![1]) {
			throw new Error(`Duplicate reference should produce same fs object`);
		}
		const filePath = strFromBytes(bytes!);
		const txtContent = await fs.readTxtFile(filePath);
		return {
			bytes: strToBytes(txtContent),
			passedByReference: [ fs, passedByReference![1] ]
		};
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
