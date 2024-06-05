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

import { screen, BrowserWindow } from 'electron';
import { Observable, debounceTime, fromEvent, map, mergeWith } from 'rxjs';
import { copyWinOpts } from '../components/gui-component';
import { makeTimedCache } from '../lib-common/timed-cache';
import { logError } from '../confs';

type GUIComponentDef = web3n.caps.GUIComponent;
type GUIServiceComponent = web3n.caps.GUIServiceComponent;
type WindowOptions = web3n.ui.WindowOptions;
type WritableFS = web3n.files.WritableFS;
type FileException = web3n.files.FileException;

export interface WindowSize {
	width: number;
	height: number;
}

export interface Location {
	x: number;
	y: number;
}

export interface Rectangle extends WindowSize, Location {}

export function startupOpts(
	windowOpts: GUIComponentDef['windowOpts']
): WindowOptions {
	const opts = copyWinOpts(windowOpts) as WindowOptions;
	const geometry = ((opts.width && opts.height) ?
		toDisplayWithCursor(opts as WindowSize).geometry :
		defaultSizeOnDisplayWithCursor()
	);
	applyGeometry(geometry, opts);
	return opts;
}


export class ScreenGUIPlacements {

	private initialization: Promise<void>|undefined;
	private fs: WritableFS = undefined as any;
	private readonly appsInfo = makeTimedCache<string, AppGeometriesFiles>(5000);

	constructor(
		fs: Promise<WritableFS>
	) {
		this.initialization = this.initialize(fs);
		Object.seal(this);
	}

	private async initialize(fs: Promise<WritableFS>): Promise<void> {
		this.fs = await fs;
		this.initialization = undefined;
	}

	async windowLocationFor(
		appDomain: string, entrypoint: string,
		component: GUIComponentDef|GUIServiceComponent,
		parentWindow: BrowserWindow|undefined
	): Promise<{
		windowOpts: WindowOptions,
		watchWindowGeometry?: (win: BrowserWindow) => void
	}> {
		if (this.initialization) {
			await this.initialization;
		}
		const windowOpts = await this.setInitialWindowGeometry(
			appDomain, entrypoint, component, parentWindow
		);
		if (parentWindow
		|| !component.windowOpts?.rememberWindowLocation) {
			return { windowOpts };
		} else {
			return {
				windowOpts,
				watchWindowGeometry: this.watchWindowGeometry(appDomain, entrypoint)
			}
		}
	}

	private async setInitialWindowGeometry(
		appDomain: string, entrypoint: string,
		component: GUIComponentDef|GUIServiceComponent,
		parentWindow: BrowserWindow|undefined
	): Promise<WindowOptions> {
		const opts = copyWinOpts(component.windowOpts) as WindowOptions;
		if (parentWindow) {
			const geometry = childRelativeToParent(
				parentWindow.getContentBounds(), opts as WindowSize
			);
			applyGeometry(geometry, opts);
			return opts;
		} else if (!opts.rememberWindowLocation) {
			const geometry = ((opts.width && opts.height) ?
				toDisplayWithCursor(opts as WindowSize).geometry :
				defaultSizeOnDisplayWithCursor()
			);
			applyGeometry(geometry, opts);
			return opts;
		} else {
			const compGeom = await this.readFromFile(appDomain, entrypoint);
			if (!compGeom) {
				if (opts.width && opts.height) {
					const { geometry } = toDisplayWithCursor(opts as WindowSize);
					applyGeometry(geometry, opts);
				} else {
					const geometry = defaultSizeOnDisplayWithCursor();
					applyGeometry(geometry, opts);
				}
				return opts;
			}
			const { newDisplay, geometry } = putGeometryToCurrentScreens(compGeom);
			if (newDisplay) {
				await this.saveGeometry(appDomain, entrypoint, {
					display: newDisplay,
					geometry
				});
			}
			applyGeometry(geometry, opts);
			return opts;
		}
	}

	private watchWindowGeometry(
		appDomain: string, entrypoint: string
	): (componentWindow: BrowserWindow) => void {
		return componentWindow => {
			const move$ = observeMoving(
				appDomain, entrypoint, componentWindow
			);
			const resize$ = observeResizing(
				appDomain, entrypoint, componentWindow
			);
			const proc = move$
			.pipe(
				mergeWith(resize$),
				debounceTime(500)
			)
			.subscribe({
				next: ev => this.recordWindowGeometryChange(ev)
			});
			componentWindow.once('close', () => proc.unsubscribe());
		};
	}

	private async recordWindowGeometryChange(
		ev: MoveEvent|ResizeEvent
	): Promise<void> {
		try {
			const { id, label } = screen.getDisplayMatching(ev.ownGeometry);
			await this.saveGeometry(ev.appDomain, ev.entrypoint, {
				geometry: ev.ownGeometry,
				display: { id, label }
			});
		} catch (err) {
			await logError(err, `Error in GUI placement platform component`);
		}
	}

	private async getAppInfo(
		appDomain: string
	): Promise<AppGeometriesFiles|undefined> {
		try {
			let info = this.appsInfo.get(appDomain);
			if (info) { return info; }
			info = await this.fs.readJSONFile<AppGeometriesFiles>(
				toGeomFileName(appDomain)
			);

			// XXX check info correctness, removing or fixing file in non-ok cases

			this.appsInfo.set(appDomain, info);
			return info;
		} catch (exc) {
			if (!(exc as FileException).notFound) { throw exc; }
		}
	}

	private async readFromFile(
		appDomain: string, entrypoint: string
	): Promise<ComponentOnScreens|undefined> {
		const app = await this.getAppInfo(appDomain);
		if (!app) { return; } 
		const compGeom = app.components[entrypoint];
		return compGeom;
	}

	private async saveGeometry(
		appDomain: string, entrypoint: string, compInfo: ComponentOnScreens
	): Promise<void> {
		let info = this.appsInfo.get(appDomain);
		if (info) {
			info.components[entrypoint] = compInfo;
		} else {
			info = {
				appDomain,
				components: {
					[entrypoint]: compInfo
				}
			};
			this.appsInfo.set(appDomain, info);
		}
		await this.fs.writeJSONFile(toGeomFileName(appDomain), info);
	}

}
Object.freeze(ScreenGUIPlacements.prototype);
Object.freeze(ScreenGUIPlacements);


interface MoveEvent {
	event: 'move';
	appDomain: string;
	entrypoint: string;
	ownGeometry: Rectangle;
}

interface ResizeEvent {
	event: 'resize';
	appDomain: string;
	entrypoint: string;
	ownGeometry: Rectangle;
}

function geometryOf(w: BrowserWindow): Rectangle {
	const [ x, y ] = w.getPosition();
	const [ width, height ] = w.getSize();
	return { x, y, width, height };
}

function makeMoveEvent(
	appDomain: string, entrypoint: string, ownWindow: BrowserWindow
): MoveEvent {
	return {
		event: 'move',
		appDomain,
		entrypoint,
		ownGeometry: geometryOf(ownWindow)
	};
}

function makeResizeEvent(
	appDomain: string, entrypoint: string, ownWindow: BrowserWindow
): ResizeEvent {
	return {
		event: 'resize',
		appDomain,
		entrypoint,
		ownGeometry: geometryOf(ownWindow)
	};
}

function observeMoving(
	appDomain: string, entrypoint: string, componentWindow: BrowserWindow
): Observable<MoveEvent> {
	return fromEvent(componentWindow, 'move')
	.pipe(
		map(() => makeMoveEvent(appDomain, entrypoint, componentWindow))
	);
}

function observeResizing(
	appDomain: string, entrypoint: string, componentWindow: BrowserWindow
): Observable<ResizeEvent> {
	return fromEvent(componentWindow, 'resize')
	.pipe(
		map(() => makeResizeEvent(appDomain, entrypoint, componentWindow))
	);
}

const GEOM_FILE_EXT = 'geom.json';

function toGeomFileName(appDomain: string): string {
	return `${appDomain}.${GEOM_FILE_EXT}`;
}

interface AppGeometriesFiles {
	appDomain: string;
	components: { [ entrypoint: string ]: ComponentOnScreens; };
}

interface ComponentOnScreens {
	geometry: Rectangle;
	display: {
		id: number;
		label: string;
	};
}

function putGeometryToCurrentScreens(
	{ geometry, display }: ComponentOnScreens
): {
	newDisplay?: ComponentOnScreens['display'];
	geometry: Rectangle;
} {
	let { id, label } = screen.getDisplayMatching(geometry);
	if ((id === display.id) && (label === display.label)) {
		return { geometry };
	} else {
		const atCursor = toDisplayWithCursor(geometry);
		return { newDisplay: atCursor.display, geometry: atCursor.geometry };
	}
}

function toDisplayWithCursor(
	{ width, height }: WindowSize
): ComponentOnScreens {
	let { x, y } = screen.getCursorScreenPoint();
	let { id, label, workArea } = screen.getDisplayMatching({
		x, y, width, height
	});
	const geometry = centerToArea({ width, height }, workArea);
	return { geometry, display: { id, label } };
}

function applyGeometry(geometry: Rectangle, opts: WindowOptions): void {
	opts.x = geometry.x;
	opts.y = geometry.y;
	if (opts.minWidth && (opts.minWidth > geometry.width)) {
		opts.width = opts.minWidth;
	} else if (opts.maxWidth && (opts.maxWidth < geometry.width)) {
		opts.width = opts.maxWidth;
	} else {
		opts.width = geometry.width;
	}
	if (opts.minHeight && (opts.minHeight > geometry.height)) {
		opts.height = opts.minHeight;
	} else if (opts.maxHeight && (opts.maxHeight < geometry.height)) {
		opts.height = opts.maxHeight;
	} else {
		opts.height = geometry.height;
	}
}

const DEFUALT_WIDTH = 800;
const DEFUALT_HEIGHT = 600;

function defaultSizeOnDisplayWithCursor(): Rectangle {
	let { x, y } = screen.getCursorScreenPoint();
	let { workArea: wa } = screen.getDisplayMatching({
		x, y, width: DEFUALT_WIDTH, height: DEFUALT_HEIGHT
	});
	return centerToArea({ width: DEFUALT_WIDTH, height: DEFUALT_HEIGHT }, wa);
}

function centerToArea(
	{ width, height }: WindowSize, area: Rectangle
): Rectangle {
	width = Math.min(width, area.width);
	height = Math.min(height, area.height);
	return {
		x: area.x + Math.floor((area.width - width)/2),
		y: area.y + Math.floor((area.height - height)/2),
		width, height
	};
}

const PARENT_Y_SHIFT = 20;

function childRelativeToParent(
	parent: Rectangle, size: WindowSize
): Rectangle {
	parent.y += PARENT_Y_SHIFT;
	if (!size.width || !size.width) {
		size = { width: DEFUALT_WIDTH, height: DEFUALT_HEIGHT }
	}
	return centerToArea(size, parent);
}


Object.freeze(exports);