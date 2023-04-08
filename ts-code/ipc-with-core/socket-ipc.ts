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

import { Envelope } from "core-3nweb-client-lib/build/ipc";
import { base64, utf8, joinByteArrs } from "../lib-common/buffer-utils";
import { Reader } from "../lib-common/deno-like-socket";
import { ipc } from "../protos/ipc.proto";
import { packUintTo3Bytes, packUintTo8Bytes, uintFrom3Bytes, uintFrom8Bytes } from "./big-endian";
import { fixInt, ProtoType } from "./protobuf-msg";

export interface SocketConnectInfo {
	type: 'unix' | 'net';
	token: string;
	path?: string;
	netAddr?: {
		host: string;
		port: number;
	};
}

const msgTypeToByteValue = {
	'fst-auth': 1,
	'list-obj': 11,
	'ack-bunch': 12,
	'complete-msg': 21,
	'msg-header': 22,
	'body-chunk': 23,
	'last-body-chunk': 24,
};
type MsgType = keyof typeof msgTypeToByteValue;
const byteValueToMsgType = (() => {
	const map: { [key: number]: MsgType; } = {};
	for (const [ msgType, byteValue ] of Object.entries(msgTypeToByteValue)) {
		map[byteValue] = msgType as MsgType;
	}
	return map;
})();

function packMsg(msgType: MsgType, payload: Uint8Array): Uint8Array {
	const msg = new Uint8Array(4 + payload.length);
	msg[0] = msgTypeToByteValue[msgType];
	packUintTo3Bytes(payload.length, msg, 1);
	msg.set(payload, 4);
	return msg;
}

function packMsg2(
	msgType: MsgType, arr1: Uint8Array, arr2: Uint8Array
): Uint8Array {
	const msg = new Uint8Array(4 + arr1.length + arr2.length);
	msg[0] = msgTypeToByteValue[msgType];
	packUintTo3Bytes(arr1.length + arr2.length, msg, 1);
	msg.set(arr1, 4);
	msg.set(arr2, 4 + arr1.length);
	return msg;
}

export interface SocketIPCException extends web3n.RuntimeException {
	type: 'ipc-via-socks';
	malformedMsg?: true;
	authFail?: true;
	path?: string[];
	host?: string;
	port?: number;
	socketClosed?: true;
	unexpectedEOF?: true;
}

export function makeSocketIPCException(
	fields: Partial<SocketIPCException>
): SocketIPCException {
	const exc: SocketIPCException = {
		runtimeException: true,
		type: 'ipc-via-socks'
	};
	for (const [ field, value ] of Object.entries(fields)) {
		(exc as any)[field] = value;
	}
	return exc;
}

function malformedExc(
	message?: string, cause?: any
): SocketIPCException {
	return makeSocketIPCException({ malformedMsg: true, message, cause });
}

const envelopeType = ProtoType.for<Envelope>(ipc.Envelope);
const envHeadersType = ProtoType.for<Envelope['headers']>(ipc.EnvelopeHeaders);

export const MAX_NONACK_WRITES = 3;
export const MAX_NONACK_READS = 1;

export const MAX_MSG_SIZE = 0x1fffff;
const COMPLETE_MSG_MAX_BODY_DIFF = 0x400;

export function toAuthRequestChunk(token: string): Uint8Array {
	const tokenBytes = base64.open(token);
	return packMsg('fst-auth', tokenBytes);
}

export function toAuthReplyChunk(maxMsgSize: number|false): Uint8Array {
	const msgHead = new Uint8Array(4);
	msgHead[0] = msgTypeToByteValue['fst-auth'];
	packUintTo3Bytes((maxMsgSize ? maxMsgSize : 0), msgHead, 1);
	return msgHead;
}

export function toListObjRequestChunk(path: string[]): Uint8Array {
	const reqBytes = utf8.pack(JSON.stringify(path));
	return packMsg('list-obj', reqBytes);
}

export function toAckChunk(path: string[]): Uint8Array {
	const reqBytes = utf8.pack(JSON.stringify(path));
	return packMsg('ack-bunch', reqBytes);
}

export const ACK_CHUNK = packMsg('ack-bunch', new Uint8Array);

export interface ListObjReply {
	path: string[];
	lst?: string[];
}

export function toListObjReply(
	path: string[], lst: string[]|null
): Uint8Array {
	const reply: ListObjReply = { path };
	if (lst) {
		reply.lst = lst;
	}
	const reqBytes = utf8.pack(JSON.stringify(reply));
	return packMsg('list-obj', reqBytes);
}

export function* toChunksForSending(
	envelope: Envelope, maxMsgSize: number
): Generator<Uint8Array, void, unknown> {
	if (!envelope.body
	|| (envelope.body.value.length <= (maxMsgSize - COMPLETE_MSG_MAX_BODY_DIFF))) {
		const allBytes = envelopeType.pack(envelope);
		yield packMsg('complete-msg', allBytes);
	} else {
		const body = envelope.body!.value;
		const headerBytes = envHeadersType.pack(envelope.headers);
		yield packMsg('msg-header', headerBytes);
		const callNumBytes = new Uint8Array(8);
		packUintTo8Bytes(envelope.headers.fnCallNum!.value, callNumBytes, 0);
		let ofs = 0;
		while (ofs < body.length) {
			const end = Math.min(body.length, ofs + maxMsgSize - MSG_HEAD_SIZE - 8);
			const chunk = body.slice(ofs, end);
			const msgType = (end < body.length) ? 'body-chunk' : 'last-body-chunk';
			yield packMsg2(msgType, callNumBytes, chunk);
			ofs = end;
		}
	}
}

export interface MsgHead {
	msgType: MsgType;
	msgSize: number;
}

const MSG_HEAD_SIZE = 4;

function unpackMsgHead(x: Uint8Array): MsgHead {
	const msgType = byteValueToMsgType[x[0]];
	if (!msgType) {
		throw malformedExc(`Unknown message type byte value ${x[0]}`);
	}
	const msgSize = uintFrom3Bytes(x, 1);
	return { msgType, msgSize };
}

function unpackListObjRequest(bytes: Uint8Array): string[] {
	const json = utf8.open(bytes);
	try {
		const arr = JSON.parse(json) as string[];
		if (!Array.isArray(arr)) { throw `Request is not an array`; }
		for (const s of arr) {
			if (typeof s !== 'string') { throw `path contains non-string`; }
		}
		return arr;
	} catch (err) {
		throw malformedExc(`Invalid request for object listing`, err);
	}
}

function unpackListObjReply(bytes: Uint8Array): ListObjReply {
	const json = utf8.open(bytes);
	try {
		const reply = JSON.parse(json) as ListObjReply;
		if (typeof reply !== 'object') { throw `Reply is not an object`; }
		if (!Array.isArray(reply.path)) { throw `path is not an array`; }
		for (const s of reply.path) {
			if (typeof s !== 'string') { throw `path contains non-string`; }
		}
		if (reply.lst) {
			if (!Array.isArray(reply.lst)) { throw `path is not an array`; }
			for (const s of reply.lst) {
				if (typeof s !== 'string') { throw `listing contains non-string`; }
			}
		}
		return reply;
	} catch (err) {
		throw malformedExc(`Invalid reply to object listing request`, err);
	}
}

function unpackBodyChunk(
	bytes: Uint8Array
): { fnCallNum: number; chunk: Uint8Array; } {
	const fnCallNum = uintFrom8Bytes(bytes);
	return { fnCallNum, chunk: bytes.slice(8) };
}

async function readMsgHead(connection: Reader): Promise<MsgHead> {
	const headBytes = await readExpectedBytes(connection, MSG_HEAD_SIZE);
	return unpackMsgHead(headBytes);
}

async function readExpectedBytes(
	connection: Reader, len: number
): Promise<Uint8Array> {
	if (len < 1) { throw malformedExc(`Zero length on-socket message body`); }
	const bytes = new Uint8Array(len);
	let bytesRead = await connection.read(bytes);
	if (!bytesRead) {
		throw makeSocketIPCException({
			unexpectedEOF: true,
			message: `Fail to read on-socket message`
		});
	}
	return bytes;
}

async function unpackCommonBinaryMsgs(
	connection: Reader, { msgSize, msgType }: MsgHead
): Promise<MsgPartsWithEnvelope|undefined> {
	if (msgType === 'complete-msg') {
		const buffer = await readExpectedBytes(connection, msgSize);
		const envelope = envelopeType.unpack(buffer as Buffer);
		return { msgType, envelope };
	} else if (msgType === 'msg-header') {
		const buffer = await readExpectedBytes(connection, msgSize);
		const headers = envHeadersType.unpack(buffer as Buffer);
		if (!headers.fnCallNum) {
			throw makeSocketIPCException({
				malformedMsg: true,
				message: `Separate headers doesn't have call number`
			});
		}
		const fnCallNum = fixInt(headers.fnCallNum.value);
		return { msgType, headers, fnCallNum };
	} else if ((msgType === 'body-chunk') || (msgType === 'last-body-chunk')) {
		const buffer = await readExpectedBytes(connection, msgSize);
		const { chunk, fnCallNum } = unpackBodyChunk(buffer);
		return { msgType, chunk, fnCallNum };
	}
}

export interface MsgOnClientSide extends MsgPartsWithEnvelope {
	authMaxMsgSize?: number|false;
	objLst?: ListObjReply;
	ackBunch?: true;
}

export async function readMsgOnClientSide(
	connection: Reader
): Promise<MsgOnClientSide> {
	const msgHead = await readMsgHead(connection);
	const msg = await unpackCommonBinaryMsgs(connection, msgHead);
	if (msg) { return msg; }
	const { msgSize, msgType } = msgHead;
	if (msgHead.msgType === 'ack-bunch') {
		return { msgType, ackBunch: true };
	} else if (msgType === 'list-obj') {
		const buffer = await readExpectedBytes(connection, msgSize);
		const objLst = unpackListObjReply(buffer);
		return { msgType, objLst };
	} else if (msgType === 'fst-auth') {
		return {
			msgType,
			authMaxMsgSize: ((msgSize > 0) ? msgSize : false)
		};
	} else {
		throw malformedExc(`Unexpected message type ${msgType}`);
	}
}

export interface MsgOnCoreSide extends MsgPartsWithEnvelope {
	authToken?: Uint8Array;
	objLst?: string[];
	ackBunch?: true;
}

export async function readMsgOnCoreSide(
	connection: Reader
): Promise<MsgOnCoreSide> {
	const msgHead = await readMsgHead(connection);
	const { msgSize, msgType } = msgHead;
	const msg = await unpackCommonBinaryMsgs(connection, msgHead);
	if (msg) { return msg; }
	if (msgHead.msgType === 'ack-bunch') {
		return { msgType, ackBunch: true };
	} else if (msgType === 'list-obj') {
		const buffer = await readExpectedBytes(connection, msgSize);
		const objLst = unpackListObjRequest(buffer);
		return { msgType, objLst };
	} else if (msgType === 'fst-auth') {
		const authToken = await readExpectedBytes(connection, msgSize);
		return { msgType, authToken };
	} else {
		throw malformedExc(`Unexpected message type ${msgType}`);
	}
}

export interface MsgPartsWithEnvelope {
	msgType: MsgType;
	envelope?: Envelope;
	fnCallNum?: number;
	headers?: Envelope['headers'];
	chunk?: Uint8Array;
}


export class EnvelopesBuffer {

	private calls = new Map<number, { env: Envelope, body: Uint8Array[]}>();

	processIfCommonBinaryMsg(
		{ msgType, chunk, envelope, fnCallNum, headers }: MsgPartsWithEnvelope
	): boolean|Envelope {
		switch (msgType) {
			case 'complete-msg':
				return envelope!;
			case 'msg-header':
				return this.processMsgHeader(fnCallNum!, headers!);
			case 'body-chunk':
				return this.processBodyChunk(fnCallNum!, chunk!);
			case 'last-body-chunk':
				return this.processLastBodyChunk(fnCallNum!, chunk!);
			default:
				return false;
		}
	}

	private processMsgHeader(
		fnCallNum: number, headers: NonNullable<MsgPartsWithEnvelope['headers']>
	): boolean {
		this.calls.set(fnCallNum, { env: { headers }, body: [] });
		return true;
	}

	private processBodyChunk(
		fnCallNum: number, chunk: Uint8Array
	): boolean {
		const envParts = this.calls.get(fnCallNum);
		if (envParts) {
			envParts.body.push(chunk);
		} else {
			// XXX log/warn call that wasn't found
		}
		return true;
	}

	private processLastBodyChunk(
		fnCallNum: number, chunk: Uint8Array
	): boolean|Envelope {
		const envParts = this.calls.get(fnCallNum);
		if (envParts) {
			this.calls.delete(fnCallNum);
			envParts.body.push(chunk);
			const bodyArr = joinByteArrs(envParts.body) as Buffer;
			envParts.env.body = { value: bodyArr };
			return envParts.env;
		} else {
			// XXX log/warn call that wasn't found
			return true;
		}
	}

}
Object.freeze(EnvelopesBuffer.prototype);
Object.freeze(EnvelopesBuffer);


Object.freeze(exports);