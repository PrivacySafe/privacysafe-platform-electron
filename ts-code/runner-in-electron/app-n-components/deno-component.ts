/*
 Copyright (C) 2022, 2024, 2026 3NSoft Inc.
 
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

import { spawn, ChildProcess } from "child_process";
import { createReadStream, WriteStream, createWriteStream, ReadStream, promises as fs } from "fs";
import { denoBinParams, DenoParams, logError, utilDir } from "../confs";
import { SocketConnectInfo } from "../ipc-with-core/socket-ipc";
import { assert } from "../../platform/lib-common/assert";
import { utf8 } from "../../platform/lib-common/buffer-utils";
import { defer } from "../../platform/lib-common/processes/deferred";
import { PostponedValuesFixedKeysMap } from "../../platform/lib-common/postponed-values-map";
import { AppCAPsAndSetup, Service } from "../../platform/inject-defs/apps";
import { AppComponentBase, AppFolder } from "../../platform/apps/app";
import { stringOfB64UrlSafeChars } from "../lib-common/random-node";
import { join } from "path";

type FileByteSource = web3n.files.FileByteSource;
type W3N = web3n.caps.W3N;


export class DenoComponent extends AppComponentBase {

	private proc: ChildProcess|undefined = undefined;
	private readonly closureListeners: ((code: number|null, signal: NodeJS.Signals|null) => void)[] = [];

	private constructor(
		domain: string,
		entrypoint: string,
		public readonly connectInfo: SocketConnectInfo,
		private readonly denoBin: DenoParams,
		caps: AppCAPsAndSetup,
		services: PostponedValuesFixedKeysMap<string, Service>|undefined,
		private fileToLoad: string|undefined
	) {
		super('deno', domain, entrypoint, services);
		this.closureListeners.push(caps.close);
		caps.setApp(this);
		Object.seal(this);
	}

	static async makeLoadConnectAndStart(
		domain: string, appRoot: AppFolder, entrypoint: string,
		caps: AppCAPsAndSetup, connectInfo: SocketConnectInfo,
		connect: (caps: W3N) => (() => void),
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	): Promise<DenoComponent> {
		const component = await DenoComponent.make(
			domain, appRoot, entrypoint, caps, connectInfo, services
		);
		const disconnectIPC = connect(caps.w3n);
		component.setCloseListener(disconnectIPC);
		await component.start();
		return component;
	}

	private static async make(
		domain: string, appRoot: AppFolder, entrypoint: string,
		caps: AppCAPsAndSetup, connectInfo: SocketConnectInfo,
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	): Promise<DenoComponent> {
		const denoBin = await denoBinParams();
		if (!denoBin) { throw new Error(`Deno runtime is not available`); }
		const fileToLoad = await writeFileForLoading(
			connectInfo, denoBin.preload, appRoot, entrypoint
		);
		setTimeout(() => fs.unlink(fileToLoad), 5000);
		return new DenoComponent(
			domain, entrypoint, connectInfo, denoBin, caps, services, fileToLoad
		);
	}

	private spawnProc(): void {
		assert(!!this.fileToLoad);
		const fileToLoad = this.fileToLoad!;
		this.fileToLoad = undefined;
		let privArgs: string[];
		if (this.connectInfo.type === 'unix') {
			const sockPath = this.connectInfo.path!;
			privArgs = [
				`--allow-read=${sockPath}`,
				`--allow-write=${sockPath}`
			];
		} else if (this.connectInfo.type === 'net') {
			const { host, port } = this.connectInfo.netAddr!;
			privArgs = [
				`--allow-net=${host}:${port}`
			];
		} else {
			throw new Error(
				`Invalid connection type in ${JSON.stringify(this.connectInfo)}`);
		}
		this.proc = spawn(
			this.denoBin.bin,
			[ 'run', ...privArgs, '--no-code-cache', '--no-lock', '--no-check', fileToLoad ],
			{
				cwd: utilDir,
				shell: this.denoBin.spanWithShell
			}
		);
		this.proc.on('error', this.onError.bind(this));
		this.proc.on('exit', this.onExit.bind(this));
	}

	private onError(err: any): void {
		if (!this.proc) { return; }
		this.triggerClosureListeners(null, null);
		this.proc = undefined;
		logError(err, `Deno component ${this.domain}:${this.entrypoint}`);
	}

	private onExit(code: number|null, signal: NodeJS.Signals|null): void {
		if (!this.proc) { return; }
		this.triggerClosureListeners(code, signal);
		this.proc = undefined;
	}

	async start(): Promise<void> {
		if (this.fileToLoad) {
			this.spawnProc();
		} else {
			throw new Error(`Deno component ${
				this.domain}:${this.entrypoint} was already started`);
		}
	}

	setCloseListener(onClose: (code: number|null, signal: NodeJS.Signals|null) => void): void {
		this.closureListeners.push(onClose);
	}

	close(): void {
		if (!this.proc) { return; }
		if (!this.proc.killed) {
			this.proc.kill();
		}
	}

	private triggerClosureListeners(
		code: number|null, signal: NodeJS.Signals|null
	): void {
		if (this.closureListeners.length === 0) { return; }
		for (const onClose of this.closureListeners) {
			try {
				onClose(code, signal);
			} catch (err) {
				logError(err, `Error in closing deno component ${
					this.domain}:${this.entrypoint}`);
			}
		}
		this.closureListeners.splice(0, this.closureListeners.length);
	}

	get stdOut(): NodeJS.ReadableStream {
		return this.proc!.stdout!;
	}

	get stdErr(): NodeJS.ReadableStream {
		return this.proc!.stderr!;
	}

	get pid(): number|undefined {
		return this.proc?.pid;
	}

}
Object.freeze(DenoComponent.prototype);
Object.freeze(DenoComponent);


async function writeFileForLoading(
	connectInfo: SocketConnectInfo, preload: string, appRoot: AppFolder, entrypoint: string
): Promise<string> {
	const fileToLoad = join(utilDir, `w3n-deno-${await stringOfB64UrlSafeChars(10)}.js`);
	const sink = createWriteStream(fileToLoad);
	await injectCode(`globalThis.w3n=${JSON.stringify(connectInfo)};\n`, sink);
	await pipeReaderTo(createReadStream(preload), sink);
	await injectCode(`\nglobalThis.w3n.then(async function(){\n`, sink);
	await pipeBytesTo(await appRoot.getByteSource(entrypoint), sink);
	await injectCode(`\n});\n`, sink);
	await new Promise((resolve) => sink.end(resolve));
	return fileToLoad;
}

function pipeReaderTo(src: ReadStream, dst: WriteStream): Promise<void> {
	const deferred = defer<void>();
	src.pipe(dst, { end: false });
	src.once('end', () => deferred.resolve());
	src.once('error', err => deferred.reject(err));
	return deferred.promise;
}

async function pipeBytesTo(src: FileByteSource, dst: WriteStream): Promise<void> {
	let bytesLeft = await src.getSize();
	while (bytesLeft > 0) {
		const lenToRead = Math.min(bytesLeft, dst.writableHighWaterMark);
		const chunk = await src.readNext(lenToRead);
		if (!chunk) { return; }
		await writeInto(chunk, dst);
		bytesLeft -= chunk.length;
	}
}

function writeInto(chunk: Uint8Array, dst: WriteStream): Promise<void> {
	const deferred = defer<void>();
	dst.write(chunk, err => {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve();
		}
	});
	return deferred.promise;
}

function injectCode(jsCode: string, dst: WriteStream): Promise<void> {
	return writeInto(utf8.pack(jsCode), dst);
}


Object.freeze(exports);