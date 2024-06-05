/*
 Copyright (C) 2020, 2022, 2024 3NSoft Inc.
 
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

import { Type as PBType } from 'protobufjs';
import { makeIPCException, EnvelopeBody } from 'core-3nweb-client-lib/build/ipc';
import { stringifyErr, errWithCause, ErrorWithCause } from '../lib-common/exceptions/error';
import { common as pb } from '../protos/common.proto';
import { toBuffer } from '../lib-common/buffer-utils';

type RuntimeException = web3n.RuntimeException;


export class ProtoType<T extends object> {

	private constructor(
		private readonly type: PBType
	) {
		this.type = type;
		Object.freeze(this);
	}

	static for<T extends object>(type: any): ProtoType<T> {
		return new ProtoType<T>(type);
	}

	pack(msg: T): Buffer {
		const err = this.type.verify(msg);
		if (err) { throw new Error(err); }
		return this.type.encode(msg).finish() as Buffer;
	}

	unpack(bytes: Buffer|void): T {
		if (!bytes) { throw makeIPCException({ missingBodyBytes: true }); }
		return this.type.decode(bytes) as T;
	}

	packToBase64(msg: T): string {
		return this.pack(msg).toString('base64');
	}

	unpackFromBase64(str: string): T {
		return this.unpack(Buffer.from(str, 'base64'));
	}

}
Object.freeze(ProtoType.prototype);
Object.freeze(ProtoType);


export interface ObjectReference<T> {
	objType: T;
	path: string[];
}
export const objRefType = ProtoType.for<ObjectReference<any>>(
	pb.ObjectReference);

export interface BooleanValue {
	value: boolean;
}
export const boolValType = ProtoType.for<BooleanValue>(pb.BooleanValue);

export interface StringArrayValue {
	values: string[];
}
export const strArrValType = ProtoType.for<StringArrayValue>(
	pb.StringArrayValue);

export const strValType = ProtoType.for<Value<string>>(pb.StringValue);

export function fixArray<T>(arr: T[]): T[] {
	return (arr ? arr : []);
}

const MAX_HIGH = 0b111111111111111111111;
export function fixInt(uint64: number): number {
	if (typeof uint64 === 'object') {
		const { high, low } = uint64;
		if (high > MAX_HIGH) {
				throw makeIPCException({
					invalidNumInBody: true,
					message: 'Integer is greater than 2^53-1'
				});
		}
		const fixedInt = 0x100000000*high + ((low < 0) ? 0x100000000+low : low);
		if (isNaN(fixedInt)) {
				throw new TypeError(`Can't construct integer from a given object`);
		} else {
				return fixedInt;
		}
	} else if (typeof uint64 === 'string') {
		return Number.parseInt(uint64);
	} else if (typeof uint64 === 'number') {
		return uint64;
	} else {
		throw new TypeError(`Can't extract integer from ${typeof uint64}`);
	}
}
export function valOfOptInt(uint64: Value<number>|undefined): number|undefined {
	if (!uint64) { return; }
	return fixInt(valOf(uint64));
}

const numValType = ProtoType.for<Value<number>>(pb.UInt64Value);
export function packInt(uint64: number): Buffer {
	return numValType.pack({ value: uint64 });
}
export function unpackInt(buf: EnvelopeBody): number {
	return fixInt(valOf(numValType.unpack(buf)));
}

export interface ErrorValue {
	runtimeExcJson?: string;
	err?: string;
}
export const errBodyType = ProtoType.for<ErrorValue>(pb.ErrorValue);

export function errToMsg(err: any): ErrorValue {
	if (typeof err !== 'object') {
		return { err: JSON.stringify(err) };
	} else if ((err as RuntimeException).runtimeException) {
		return { runtimeExcJson: JSON.stringify(err) };
	} else {
		return { err: stringifyErr(err) };
	}
}
export function errFromMsg(msg: ErrorValue): RuntimeException|ErrorWithCause {
	if (msg.runtimeExcJson) {
		return JSON.parse(msg.runtimeExcJson) as RuntimeException;
	} else {
		return errWithCause(msg.err, 'Error from other side of ipc');
	}
}

export interface Value<T> {
	value: T;
}

export function toVal<T>(value: T): Value<T> {
	return { value };
}

export function toOptVal<T>(value: T|undefined): Value<T>|undefined {
	return ((value === undefined) ? undefined : { value });
}

export function valOf<T>(valObj: Value<T>): T {
	return valObj.value;
}

export function valOfOpt<T>(valObj: Value<T>|undefined): T|undefined {
	return (valObj ? valObj.value : undefined);
}

export function valOfOptJson(valObj: Value<string>|undefined): any|undefined {
	try {
		return (valObj ? JSON.parse(valObj.value) : undefined);
	} catch (err) {
		throw makeIPCException({ cause: err, badReply: true });
	}
}

export function toOptJson(json: any): Value<string>|undefined {
	return ((json === undefined) ?
		undefined : toVal(JSON.stringify(json)));
}

export interface AnyValue {
	json?: Value<string>;
	bytes?: Value<Buffer>;
}

export function toAnyValue(value: any): AnyValue {
	if (Buffer.isBuffer(value)) {
		return { bytes: toVal(value) };
	} else if (ArrayBuffer.isView(value)) {
		return { bytes: toVal(toBuffer(value as Buffer)) };
	} else {
		return { json: toVal(JSON.stringify(value)) };
	}
}

export function valOfAny(valObj: AnyValue): any {
	if (valObj.json) {
		return JSON.parse(valOf(valObj.json));
	} else {
		return valOfOpt(valObj.bytes);
	}
}


Object.freeze(exports);