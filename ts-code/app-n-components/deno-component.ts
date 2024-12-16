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

import { spawn, ChildProcess } from "child_process";
import { createReadStream, ReadStream } from "fs";
import { Component, Service } from "./index";
import { denoBinParams, DenoParams, logError, utilDir } from "../confs";
import { AppCAPsAndSetup } from "../core/caps";
import { SocketConnectInfo } from "../ipc-with-core/socket-ipc";
import { assert } from "../lib-common/assert";
import { utf8 } from "../lib-common/buffer-utils";
import { defer, Deferred } from "../lib-common/processes/deferred";
import { PostponedValuesFixedKeysMap } from "../lib-common/postponed-values-map";

type ReadonlyFS = web3n.files.ReadonlyFS;
type FileByteSource = web3n.files.FileByteSource;
type W3N = web3n.caps.W3N;
type OpenConnectionInfo = web3n.system.monitor.OpenConnectionInfo;


export class DenoComponent implements Component {

	public readonly runtime = 'deno';
	private proc: ChildProcess|undefined = undefined;
	private readonly closureListeners: ((code: number|null, signal: NodeJS.Signals|null) => void)[] = [];
	public readonly w3n: W3N;
	private srvFileToLoad: FileByteSource|undefined = undefined;
	private deferredLoad: Deferred<void>|undefined = defer();

	private constructor(
		public readonly domain: string,
		public readonly entrypoint: string,
		public readonly connectInfo: SocketConnectInfo,
		private readonly denoBin: DenoParams,
		srvFile: FileByteSource, caps: AppCAPsAndSetup,
		private readonly services: PostponedValuesFixedKeysMap<string, Service>|undefined
	) {
		this.srvFileToLoad = srvFile;
		this.w3n = caps.w3n;
		this.closureListeners.push(caps.close);
		caps.setApp(this);
		Object.seal(this);
	}

	static async makeLoadConnectAndStart(
		domain: string, appRoot: ReadonlyFS, entrypoint: string,
		caps: AppCAPsAndSetup, connectInfo: SocketConnectInfo,
		connect: (caps: W3N) => (() => void),
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	): Promise<DenoComponent> {
		const component = await DenoComponent.make(
			domain, appRoot, entrypoint, caps, connectInfo, services
		);
		const disconnectIPC = connect(component.w3n);
		component.setCloseListener(disconnectIPC);
		await component.start();
		return component;
	}

	private static async make(
		domain: string, appRoot: ReadonlyFS, entrypoint: string,
		caps: AppCAPsAndSetup, connectInfo: SocketConnectInfo,
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	): Promise<DenoComponent> {
		const srvFile = await appRoot.getByteSource(entrypoint);
		const denoBin = await denoBinParams();
		if (!denoBin) { throw new Error(`Deno runtime is not available`); }
		return new DenoComponent(
			domain, entrypoint, connectInfo, denoBin, srvFile, caps, services
		);
	}

	private setupProc(): void {
		assert(!!this.srvFileToLoad);
		const srvFile = this.srvFileToLoad!;
		this.srvFileToLoad = undefined;
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
			[ 'run', ...privArgs, '--no-check', '-' ],
			{
				cwd: utilDir,
				shell: this.denoBin.spanWithShell
			}
		);
		this.proc.once('spawn', () => this.load(srvFile));
		this.proc.on('error', err => this.onError(err));
		this.proc.on('exit', (code, signal) => this.onExit(code, signal));
	}

	private async load(srvFile: FileByteSource): Promise<void> {
		try {
			const stdin = this.proc!.stdin!;
			await injectCode(
				`window.w3n=${JSON.stringify(this.connectInfo)};`, stdin
			);
			await pipeReaderTo(
				createReadStream(this.denoBin.preload, { encoding: 'utf8' }),
				stdin
			);
			await injectCode(`\nwindow.w3n.then(async function(){\n`, stdin);
			await pipeBytesTo(srvFile, stdin);
			await injectCode(`\n});\n`, stdin);
			stdin.end();
			this.deferredLoad?.resolve();
		} catch (err) {
			this.onError(err);
		}
	}

	private onError(err: any): void {
		if (this.deferredLoad) {
			this.deferredLoad.reject(err);
			this.deferredLoad = undefined;
		}
		if (!this.proc) { return; }
		this.triggerClosureListeners(null, null);
		this.proc = undefined;
		logError(err, `Deno component ${this.domain}:${this.entrypoint}`);
	}

	private onExit(code: number|null, signal: NodeJS.Signals|null): void {
		if (this.deferredLoad) {
			this.deferredLoad.reject(
				`Deno process exited with code ${code} and signal ${signal}`
			);
			this.deferredLoad = undefined;
		}
		if (!this.proc) { return; }
		this.triggerClosureListeners(code, signal);
		this.proc = undefined;
	}

	async start(): Promise<void> {
		if (this.srvFileToLoad) {
			this.setupProc();
			try {
				await this.deferredLoad!.promise;
			} finally {
				this.deferredLoad = undefined;
			}
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

	addService(name: string, service: Service): void {
		if (!this.services) {
			throw new Error(`Component is not expected to implement any services`);
		}
		this.services.set(name, service);
	}

	getService(name: string): Promise<Service> {
		if (!this.services) {
			throw new Error(`Component is not expected to implement any services`);
		}
		return this.services.get(name);
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

	listServiceConnections(): OpenConnectionInfo[]|undefined {
		return this.services?.values().flatMap(
			srv => srv.listOpenConnections(this.entrypoint)
		);
	}

}
Object.freeze(DenoComponent.prototype);
Object.freeze(DenoComponent);


type StdIn = NonNullable<ChildProcess['stdin']>;

function pipeReaderTo(src: ReadStream, dst: StdIn): Promise<void> {
	const deferred = defer<void>();
	src.pipe(dst, { end: false });
	src.once('end', () => deferred.resolve());
	src.once('error', err => deferred.reject(err));
	return deferred.promise;
}

async function pipeBytesTo(src: FileByteSource, dst: StdIn): Promise<void> {
	let bytesLeft = await src.getSize();
	while (bytesLeft > 0) {
		const lenToRead = Math.min(bytesLeft, dst.writableHighWaterMark);
		const chunk = await src.readNext(lenToRead);
		if (!chunk) { return; }
		await writeInto(chunk, dst);
		bytesLeft -= chunk.length;
	}
}

function writeInto(chunk: Uint8Array, dst: StdIn): Promise<void> {
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

function injectCode(jsCode: string, dst: StdIn): Promise<void> {
	return writeInto(utf8.pack(jsCode), dst);
}


Object.freeze(exports);