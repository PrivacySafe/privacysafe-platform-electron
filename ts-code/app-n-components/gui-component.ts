/*
 Copyright (C) 2017 - 2022, 2024 3NSoft Inc.
 
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

import { BrowserWindow, NativeImage, nativeImage } from 'electron';
import { SessionHandlers, makeSessionForApp, makeSessionForDevAppFromUrl } from '../electron/session';
import { protoSchemas } from "../electron/protocols";
import { join } from 'path';
import { copy as jsonCopy } from '../lib-common/json-utils';
import { logError, logWarning } from '../confs';
import { AppCAPsAndSetup } from '../core/caps';
import { addDevToolsShortcuts } from '../init-proc/devtools';
import { Component, Service } from '.';
import { toBuffer } from '../lib-common/buffer-utils';
import { CmdsHandler } from '../shell/cmd-invocation';
import { PostponedValuesFixedKeysMap } from '../lib-common/postponed-values-map';
import { conformWinOptsToFormFactor } from '../ui';

type WindowOptions = web3n.ui.WindowOptions;
type Session = Electron.Session;
type W3N = web3n.caps.W3N;
type ReadonlyFS = web3n.files.ReadonlyFS;
type OpenConnectionInfo = web3n.system.monitor.OpenConnectionInfo;
type RequestedCAPs = web3n.caps.RequestedCAPs;

export type TitleGenerator = (contentTitle: string) => string;

const dirWithPreloads = join(__dirname, '..', 'runtime-web-gui');
const IPC_PRELOAD = join(dirWithPreloads, 'preload-ipc.bundle.js');

export class GUIComponent implements Component {

	public readonly runtime = 'web-gui';
	public readonly window: BrowserWindow;
	protected children: Set<GUIComponent>|undefined;
	public readonly w3n: W3N;
	public readonly devToolsEnabled: boolean;
	private contentTitle = '';
	private cmdHandlerImpl: CmdsHandler|undefined = undefined;
	private readonly sessionHandlers: Partial<SessionHandlers> = {};

	protected constructor(
		public readonly domain: string,
		public readonly parent: GUIComponent|undefined,
		public readonly entrypoint: string,
		caps: AppCAPsAndSetup|undefined,
		opts: Electron.BrowserWindowConstructorOptions,
		protected readonly generateTitle: TitleGenerator,
		private readonly services: PostponedValuesFixedKeysMap<string, Service>|undefined
	) {
		this.window = new BrowserWindow(opts);
		this.devToolsEnabled = !!opts.webPreferences!.devTools;
		this.setupWindow();
		if (caps) {
			this.w3n = caps.w3n;
			if (caps.close) {
				this.setCloseListener(caps.close);
			}
			caps.setApp(this);
		}
		// seal this in static make calls
	}

	private setupWindow(): void {

		// show window, once everything is ready
		this.window.once('ready-to-show', () => this.window.show());
		
		// prevent opening of new windows
		this.window.webContents.setWindowOpenHandler(() => {
			logWarning(`Preventing window ${
				this.window.id} from openning new window.`);
			return { action: 'deny' };
		});

		this.window.on('page-title-updated', (event, title, explicitSet) => {
			event.preventDefault();
			this.contentTitle = title;
			this.updateTitle();
		});

	}

	setCloseListener(onClose: () => void): void {
		this.window.on('closed', onClose);
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
		throw new Error(`Capturing of web contents' console.log is not implemented`);
	}

	get stdErr(): NodeJS.ReadableStream {
		throw new Error(`Capturing of web contents' console.error is not implemented`);
	}

	setCmdHandler(handler: CmdsHandler): void {
		this.cmdHandlerImpl = handler;
		this.setCloseListener(() => handler.complete());
	}

	get cmdsHandler(): CmdsHandler|undefined {
		return this.cmdHandlerImpl;
	}

	close(): void {
		this.window.close();
	}

	updateTitle(): void {
		const initTitle = this.window.getTitle();
		const newTitle = this.generateTitle(this.contentTitle);
		if (initTitle !== newTitle) {
			this.window.setTitle(newTitle);
		}
	}

	static async make(
		domain: string, appRoot: ReadonlyFS, entrypoint: string,
		caps: AppCAPsAndSetup, capsReq: RequestedCAPs|undefined,
		winOpts: WindowOptions|undefined, icon: string|undefined,
		parent: GUIComponent|undefined,
		devTools: boolean, generateTitle: TitleGenerator,
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	): Promise<GUIComponent> {
		const session = makeSessionForApp(
			domain, appRoot, 'regular', capsReq, devTools,
			handlerType => app.getHandlerInSession(handlerType)
		);
		const preload = ((Object.keys(caps.w3n).length > 0) ?
			IPC_PRELOAD : undefined
		);
		const formFactor = await caps.w3n.ui.uiFormFactor();
		const opts = prepareWindowOpts(
			session, preload, winOpts, parent?.window, devTools, formFactor
		);
		if (icon) {
			opts.icon = await nativeImageFromFile(appRoot, icon, domain);
		}
		const app = new GUIComponent(
			domain, parent, entrypoint, caps, opts, generateTitle, services
		);
		await app.attachDevTools(session);
		Object.seal(app);
		return app;
	}

	static async makeStartup(
		domain: string, appRoot: ReadonlyFS, entrypoint: string,
		winOpts: WindowOptions|undefined, icon: string|undefined,
		devTools: boolean
	): Promise<GUIComponent> {
		const session = makeSessionForApp(
			domain, appRoot, 'startup', undefined, devTools, undefined
		);
		const opts = prepareWindowOpts(
			session, IPC_PRELOAD, winOpts, undefined, devTools
		);
		if (icon) {
			opts.icon = await nativeImageFromFile(appRoot, icon, domain);
		}
		const app = new GUIComponent(
			domain, undefined, entrypoint, undefined, opts, t => t, undefined
		);
		await app.attachDevTools(session);
		Object.seal(app);
		return app;
	}

	protected async attachDevTools(session: Session): Promise<void> {
		if (this.devToolsEnabled) {
			addDevToolsShortcuts(this.window);
		}
	}

	async start(): Promise<void> {
		const path = (this.entrypoint.startsWith('/') ?
			this.entrypoint : `/${this.entrypoint}`
		);
		const url = `${protoSchemas.W3N_APP.scheme}://${this.domain}${path}`;
		await this.window.loadURL(url);
	}

	listServiceConnections(): OpenConnectionInfo[]|undefined {
		return this.services?.values().flatMap(
			srv => srv.listOpenConnections(this.entrypoint)
		);
	}

	protected getHandlerInSession<T extends keyof SessionHandlers>(
		type: T
	): SessionHandlers[T]|undefined {
		return this.sessionHandlers[type];
	}

	setHandlerInSession<T extends keyof SessionHandlers>(
		type: T, handler: SessionHandlers[T]
	): void {
		this.sessionHandlers[type] = handler;
	}

}
Object.freeze(GUIComponent.prototype);
Object.freeze(GUIComponent);


function prepareWindowOpts(
	session: Session, preload: string|undefined,
	winOpts: WindowOptions|undefined, parent: BrowserWindow|undefined,
	devTools: boolean, formFactor?: web3n.ui.FormFactor
): Electron.BrowserWindowConstructorOptions {

	winOpts = conformWinOptsToFormFactor(winOpts, formFactor);

	// make a sanitized copy
	const opts = copyWinOpts(winOpts);

	if (parent) {
		opts.parent = parent;
		opts.frame = true;
		opts.fullscreenable = false;
	} else {
		delete opts.skipTaskbar;
	}

	opts.webPreferences = {
		sandbox: true,
		contextIsolation: true,
		nodeIntegration: false,
		devTools,
		session,
		defaultEncoding: 'UTF-8'
	};
	if (preload) {
		opts.webPreferences.preload = preload;
	}
	opts.show = false;

	return opts;
}

/**
 * This makes a copy of only whitelisted options from given options, and
 * returns said copy as options for electron's window.
 * @param winOpts are window options that are copied in a sanitizing way.
 */
export function copyWinOpts(
	winOpts: WindowOptions|undefined
): Electron.BrowserWindowConstructorOptions {
	const opts: Electron.BrowserWindowConstructorOptions = {};
	if (!winOpts) { return opts; }
	for (const optName of Object.keys(winOpts)) {
		if (!winOptsToCopy.has(optName as keyof WindowOptions)) { continue; }
		opts[optName] = jsonCopy(winOpts[optName]);
	}
	return opts;
}
const winOptsToCopy = new Set<keyof WindowOptions>([
	'width', 'height', 'x', 'y', 'center',
	'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
	'resizable', 'movable', 'minimizable', 'maximizable',
	'skipTaskbar', 'frame', 'modal',
	'rememberWindowLocation'
]);

async function nativeImageFromFile(
	appRoot: ReadonlyFS, imgPath: string, domain: string
): Promise<NativeImage|undefined> {
	try {
		if (!(await appRoot.checkFilePresence(imgPath))) { return; }
		const imgBytes = await appRoot.readBytes(imgPath);
		if (!imgBytes) { return; }
		return nativeImage.createFromBuffer(toBuffer(imgBytes));
	} catch (err) {
		await logError(err, `Error in using image from ${imgPath} in app ${domain}`);
	}
}


export class DevAppInstanceFromUrl extends GUIComponent {

	private constructor(
		domain: string, parent: GUIComponent|undefined,
		private readonly appFilesDevUrl: string,
		public readonly entrypoint: string,
		caps: AppCAPsAndSetup|undefined,
		opts: Electron.BrowserWindowConstructorOptions,
		generateTitle: TitleGenerator,
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	) {
		super(domain, parent, entrypoint, caps, opts, generateTitle, services);
	}

	static async makeForUrl(
		domain: string, appUrl: string, entrypoint: string,
		caps: AppCAPsAndSetup, capsReq: RequestedCAPs|undefined,
		winOpts: WindowOptions|undefined, icon: string|undefined,
		parent: GUIComponent|undefined,
		generateTitle: TitleGenerator,
		services: PostponedValuesFixedKeysMap<string, Service>|undefined
	): Promise<GUIComponent> {
		const session = makeSessionForDevAppFromUrl(
			appUrl, capsReq, handlerType => app.getHandlerInSession(handlerType)
		);
		const preload = ((Object.keys(caps.w3n).length > 0) ?
			IPC_PRELOAD : undefined
		);
		const formFactor = await caps.w3n.ui.uiFormFactor();
		const opts = prepareWindowOpts(
			session, preload, winOpts, parent?.window, true, formFactor
		);
		if (icon) {
			opts.icon = await nativeImageFromURL(appUrl, icon, domain);
		}
		const app = new DevAppInstanceFromUrl(
			domain, parent, appUrl, entrypoint, caps, opts,
			generateTitle, services
		);
		await app.attachDevTools(session);
		Object.seal(app);
		return app;
	}

	static async makeStartupFor(
		domain: string, appUrl: string, entrypoint: string,
		winOpts: WindowOptions|undefined, icon: string|undefined
	): Promise<GUIComponent> {
		const session = makeSessionForDevAppFromUrl(appUrl, undefined, undefined);
		const opts = prepareWindowOpts(
			session, IPC_PRELOAD, winOpts, undefined, true
		);
		const app = new DevAppInstanceFromUrl(
			domain, undefined, appUrl, entrypoint, undefined, opts, t => t,
			undefined
		);
		if (icon) {
			opts.icon = await nativeImageFromURL(appUrl, icon, domain);
		}
		await app.attachDevTools(session);
		Object.seal(app);
		return app;
	}

	async start(): Promise<void> {
		const path = (this.entrypoint.startsWith('/') ?
			this.entrypoint : `/${this.entrypoint}`);
		const url = `${this.appFilesDevUrl}${path}`;
		await this.window.loadURL(url);
	}

}
Object.freeze(DevAppInstanceFromUrl.prototype);
Object.freeze(DevAppInstanceFromUrl);


async function nativeImageFromURL(
	appUrl: string, imgPath: string, domain: string
): Promise<NativeImage|undefined> {
	try {
		const url = `${appUrl}${(imgPath.startsWith('/') ? '' : '/')}${imgPath}`;
		const blob = await (await fetch(url)).blob();
		// XXX hoping this buffer-bytes-blob shovelling is correct. Needs test.
		const imgBytes = await blob.arrayBuffer();
		return nativeImage.createFromBuffer(toBuffer(new Uint8Array(imgBytes)));
	} catch (err) {
		await logError(err, `Error in using image ${imgPath} in app ${domain}`);
	}
}


Object.freeze(exports);