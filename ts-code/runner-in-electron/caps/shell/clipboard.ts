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

import { clipboard } from "electron";

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

function addWriteMethodsTo(cap: Clipboard): Clipboard {
	cap.writeText = async (text, type) => {
		clipboard.writeText(text, type);
	};
	cap.writeHTML = async (markup, type) => {
		clipboard.writeHTML(markup, type);
	};
	cap.writeRTF = async (text, type) => {
		clipboard.writeRTF(text, type);
	};
	return cap;
}

function addReadMethodsTo(cap: Clipboard): Clipboard {
	cap.readText = async (type) => clipboard.readText(type);
	cap.readHTML = async (type) => clipboard.readHTML(type);
	cap.readRTF = async (type) => clipboard.readRTF(type);
	return cap;
}
