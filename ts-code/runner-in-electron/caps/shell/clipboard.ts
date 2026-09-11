/*
 Copyright (C) 2025 3NSoft Inc.
 
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

import { clipboard, ClipboardItem } from "electron";

type Clipboard = NonNullable<web3n.shell.ShellCAPs['clipboard']>;

export function makeClipboardCAP(capsReq: web3n.caps.ShellCAPsSetting['clipboard']): {
	cap: Clipboard;
}|undefined {
	switch (capsReq) {
		case 'all':
			return { cap: addReadMethodsTo(addWriteMethodsTo({})) };
		case 'readonly':
			return { cap: addReadMethodsTo({}) };
		case 'writeonly':
			return { cap: addWriteMethodsTo({}) };
		default:
			return;
	}
}

const htmlMime = 'text/html';
const rtfMime = 'text/rtf';

function addWriteMethodsTo(cap: Clipboard): Clipboard {
	cap.writeText = async (text) => {
		clipboard.writeText(text);
	};
	cap.writeHTML = async (markup) => {
		clipboard.write([
			new ClipboardItem({ htmlMime: markup })
		]);
	};
	cap.writeRTF = async (text) => {
		clipboard.write([
			new ClipboardItem({ 'text/rtf': text })
		]);
	};
	return cap;
}

function addReadMethodsTo(cap: Clipboard): Clipboard {
	cap.readText = async () => clipboard.readText();
	cap.readHTML = async () => {
		const items = await clipboard.read()
		for (const item of items) {
			const blob = await item.getType(htmlMime);
			return (blob as Blob).text();
		}
		return '';
	};
	cap.readRTF = async () => {
		const items = await clipboard.read()
		for (const item of items) {
			const blob = await item.getType(rtfMime);
			return (blob as Blob).text();
		}
		return '';
	};
	return cap;
}
