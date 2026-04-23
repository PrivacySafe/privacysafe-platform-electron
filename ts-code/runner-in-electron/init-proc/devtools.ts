/*
 Copyright (C) 2017, 2019, 2021, 2025 3NSoft Inc.
 
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

import { BrowserWindow, WebContents, WebContentsView } from 'electron';
import * as shorts from 'electron-localshortcut';

const openedDevTools = new WeakSet<BrowserWindow>();

function devToolsFor(win: BrowserWindow): void {
	if (openedDevTools.has(win)) {
		// dev tools window doesn't need dev tools
		return;
	}
	const numOfChildViews = win.contentView.children.length;
	makeOrOpenDevToolsForWebContents(
		win.webContents, `DevTools${(numOfChildViews < 1) ? '' : ' main'} @ ${win.getTitle()}`
	);
	for (let i=0; i<numOfChildViews; i+=1) {
		const view = win.contentView.children[i];
		makeOrOpenDevToolsForWebContents(
			(view as WebContentsView).webContents, `DevTools child-${i+1} @ ${win.getTitle()}`
		);
	}
}

function makeOrOpenDevToolsForWebContents(webContents: WebContents, devToolsTitle: string): void {
	if (webContents.devToolsWebContents) {
		webContents.devToolsWebContents.focus();
		return;
	}
	const devtools = new BrowserWindow({
		webPreferences: {
			session: webContents.session
		}
	});
	setTimeout(() => {
		devtools.setTitle(devToolsTitle);
	}, 500);
	webContents.setDevToolsWebContents(devtools.webContents);
	webContents.openDevTools({ mode: 'detach' });
	openedDevTools.add(devtools);
	const closeDevTools = () => devtools.close();
	webContents.on('destroyed', closeDevTools);
	devtools.on('close', () => webContents.removeListener('destroyed', closeDevTools));
}

function refresh(win: BrowserWindow): void {
	// XXX here we should signal and drop all refs at rpc boundary, and then reload,
	//     as, it looks like this reload does reload code in preload
	win.webContents.reloadIgnoringCache();
}

const isMacOS = process.platform === 'darwin';

export function addDevToolsShortcuts(win: BrowserWindow): void {
	const devToolKeys = [ 'F12', isMacOS ? 'Cmd+Alt+I' : 'Ctrl+Shift+I' ];
	const refreshKeys = [ 'F5', 'CmdOrCtrl+R' ];
	shorts.register(win, devToolKeys, () => devToolsFor(win));
	shorts.register(win, refreshKeys, () => refresh(win));
}

const devToolsProto = 'devtools://';
const chromeDevTools = 'chrome-devtools://';
const chromeExtensions = 'chrome-extension://';
export function devToolsExtFilter(url: string): boolean {
	return (url.startsWith(devToolsProto) ||
		url.startsWith(chromeDevTools) ||
		url.startsWith(chromeExtensions));
}

Object.freeze(exports);