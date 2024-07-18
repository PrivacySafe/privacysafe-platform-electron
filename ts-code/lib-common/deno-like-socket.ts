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

import { Socket } from "net";
import { makeRuntimeException } from "./exceptions/runtime";
import { defer, Deferred } from "./processes/deferred";


export interface Reader {
	/** Reads up to `p.byteLength` bytes into `p`. It resolves to the number of
	 * bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error
	 * encountered. Even if `read()` resolves to `n` < `p.byteLength`, it may
	 * use all of `p` as scratch space during the call. If some data is
	 * available but not `p.byteLength` bytes, `read()` conventionally resolves
	 * to what is available instead of waiting for more.
	 *
	 * When `read()` encounters end-of-file condition, it resolves to EOF
	 * (`null`).
	 *
	 * When `read()` encounters an error, it rejects with an error.
	 *
	 * Callers should always process the `n` > `0` bytes returned before
	 * considering the EOF (`null`). Doing so correctly handles I/O errors that
	 * happen after reading some bytes and also both of the allowed EOF
	 * behaviors.
	 *
	 * Implementations should not retain a reference to `p`.
	 *
	 * Use iter() from https://deno.land/std/io/util.ts to turn a Reader into an
	 * AsyncIterator.
	 */
	read(p: Uint8Array): Promise<number | null>;
}

export interface Writer {
	/** Writes `p.byteLength` bytes from `p` to the underlying data stream. It
	 * resolves to the number of bytes written from `p` (`0` <= `n` <=
	 * `p.byteLength`) or reject with the error encountered that caused the
	 * write to stop early. `write()` must reject with a non-null error if
	 * would resolve to `n` < `p.byteLength`. `write()` must not modify the
	 * slice data, even temporarily.
	 *
	 * Implementations should not retain a reference to `p`.
	 */
	write(p: Uint8Array): Promise<number>;
}

export interface Closer {
	close(): void;
}


export class DenoLikeSocket implements Reader, Writer, Closer {

	private socket: Socket|undefined;
	private readonly fromSocket = new ChunksFromNodeSocket();
	private writeInProgress = false;
	private drainWait: Deferred<void>|undefined = undefined;

	constructor(socket: Socket) {
		this.socket = socket
		.on('data', bytes => this.fromSocket.absorbFromSocket(bytes))
		.on('end', () => this.onEnd())
		.on('error', err => this.onEnd(err))
		.on('drain', () => this.onDrain());
		Object.seal(this);
	}

	close(): void {
		if (this.socket) {
			this.socket.end();
			this.socket = undefined;
			this.fromSocket.cancelReadIfAny();
		}
	}

	async write(p: Uint8Array): Promise<number> {
		if (!this.socket) {
			throw makeRuntimeException(
				'socket', { message: `Socket is closed` }, {}
			);
		}
		if (this.writeInProgress) {
			throw new Error(`Write is called before completion of previous one`);
		}

		try {
			this.writeInProgress = true;
			if (!this.socket!.write(p)) {
				this.drainWait = defer();
				await this.drainWait.promise;
			}
			return p.length;
		} finally {
			this.writeInProgress = false;
		}
	}

	private onDrain(): void {
		if (this.drainWait) {
			this.drainWait.resolve();
			this.drainWait = undefined;
		} 
	}

	read(p: Uint8Array): Promise<number | null> {
		return this.fromSocket.read(p);
	}

	private onEnd(err?: any): void {
		if (!this.socket) { return; }
		this.socket = undefined;
		this.fromSocket.cancelReadIfAny(err);
	}

	rawSocket(): Socket {
		return this.socket!;
	}

}
Object.freeze(DenoLikeSocket.prototype);
Object.freeze(DenoLikeSocket);


class ChunksFromNodeSocket {

	private currentRead: {
		bucket: Uint8Array;
		ofs: number;
		deferred: Deferred<number|null>;
	}|undefined = undefined;

	private readonly buffered: Buffer[] = [];

	constructor() {
		Object.seal(this);
	}

	async read(p: Uint8Array): Promise<number | null> {
		if (this.currentRead) {
			throw new Error(`Read is called before completion of previous one`);
		}
		const ofs = this.fillWithBufferedBytes(p);
		if (ofs === p.length) {
			return ofs;
		} else {
			this.currentRead = {
				bucket: p,
				ofs,
				deferred: defer()
			};
			return this.currentRead.deferred.promise;
		}
	}

	cancelReadIfAny(err?: any): void {
		if (this.currentRead) {
			if (err) {
				this.currentRead.deferred.reject(err);
			} else {
				const ofs = this.currentRead.ofs;
				this.currentRead.deferred.resolve((ofs > 0) ? ofs : null);
			}
			this.currentRead = undefined;
		} else if (this.buffered.length > 0) {
			this.buffered.splice(0, this.buffered.length);
		}
	}

	private fillWithBufferedBytes(p: Uint8Array): number {
		let ofs = 0;
		let leftToCopy = p.length;
		while ((this.buffered.length > 0) && (leftToCopy > 0)) {
			const chunk = this.buffered[0];
			if (leftToCopy >= chunk.length) {
				p.set(chunk, ofs);
				ofs += chunk.length;
				this.buffered.shift();
			} else {
				const toCopy = chunk.slice(0, leftToCopy);
				const leaveInBuffer = chunk.slice(leftToCopy);
				p.set(toCopy, ofs);
				ofs += toCopy.length;
				this.buffered[0] = leaveInBuffer;
			}
			leftToCopy = p.length - ofs;
		}

		return ofs;
	}

	absorbFromSocket(chunk: Buffer): void {
		if (this.currentRead) {
			const { ofs, bucket } = this.currentRead;
			const leftToRead = bucket.length - ofs;
			if (leftToRead > chunk.length) {
				bucket.set(chunk, ofs);
				this.currentRead.ofs += chunk.length;
			} else if (leftToRead === chunk.length) {
				bucket.set(chunk, ofs);
				this.currentRead.deferred.resolve(bucket.length);
				this.currentRead = undefined;
			} else {
				const toCopy = chunk.slice(0, leftToRead);
				const toBuffer = chunk.slice(leftToRead);
				bucket.set(toCopy, ofs);
				this.currentRead.deferred.resolve(bucket.length);
				this.currentRead = undefined;
				this.buffered.push(toBuffer);
			}
		} else {
			this.buffered.push(chunk);
		}
	}

}
Object.freeze(ChunksFromNodeSocket.prototype);
Object.freeze(ChunksFromNodeSocket);


Object.freeze(exports);