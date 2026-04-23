/*
 Copyright (C) 2025 - 2026 3NSoft Inc.
 
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

import { DeviceFS } from "core-3nweb-client-lib";
import { shell } from "electron";
import { URL } from "url";
import { makeMountException, type Mounter } from "./mounts/user-mounts";
import { join } from "path";

export function makeOpenFileCAP(
	capsReq: web3n.caps.ShellCAPsSetting['openFile'], getPathInOS: Mounter['getPathInOS']|undefined
): {
	cap: NonNullable<web3n.shell.ShellCAPs['openFile']>;
}|undefined {
	if (capsReq === 'all') {
		return { cap: f => openFile(f, getPathInOS) };
	} else {
		return;
	}
}

export function makeOpenFolderCAP(
	capsReq: web3n.caps.ShellCAPsSetting['openFolder'], getPathInOS: Mounter['getPathInOS']|undefined
): {
	cap: NonNullable<web3n.shell.ShellCAPs['openFolder']>;
}|undefined {
	if (capsReq === 'all') {
		return { cap: f => openFolder(f, getPathInOS) };
	} else {
		return;
	}
}

export function openInMountedFolderCAP(
	capsReq: web3n.caps.ShellCAPsSetting['openInMountedFolder'], getPathInOS: Mounter['getPathInOS']|undefined
): {
	cap: NonNullable<web3n.shell.ShellCAPs['openInMounted']>;
}|undefined {
	if (!getPathInOS) {
		return;
	} else if (capsReq === 'all') {
		return { cap: (f, p) => openInMounted(f, p, getPathInOS) };
	} else {
		return;
	}
}

export function makeOpenURLCAP(capsReq: web3n.caps.ShellCAPsSetting['openURL']): {
	cap: NonNullable<web3n.shell.ShellCAPs['openURL']>;
}|undefined {
	if (Array.isArray(capsReq) && (capsReq.length > 0)) {
		return { cap: url => openURL(capsReq, url) };
	} else {
		return;
	}
}

type FS = web3n.files.FS;
type File = web3n.files.File;

async function openFile(file: File, getPathInOS: Mounter['getPathInOS']|undefined): Promise<void> {
	let pathOnDevice = DeviceFS.pathOf(file);
	if (typeof pathOnDevice !== 'string') {
		pathOnDevice = getPathInOS?.(file);
	}
	if (pathOnDevice) {
		await openInShell(pathOnDevice);
	} else {
		throw makeMountException({ notMounted: true });
	}
}

async function openFolder(fs: FS, getPathInOS: Mounter['getPathInOS']|undefined): Promise<void> {
	let pathOnDevice = DeviceFS.pathOf(fs);
	if (typeof pathOnDevice !== 'string') {
		pathOnDevice = getPathInOS?.(fs);
	}
	if (pathOnDevice) {
		await openInShell(pathOnDevice);
	} else {
		throw makeMountException({ notMounted: true });
	}
}

async function openInShell(pathOnDevice: string): Promise<void> {
	const errStr = await shell.openPath(pathOnDevice);
	if (errStr.length > 0) {
		console.error(errStr);
	}
}

async function openInMounted(
	mountedFS: FS, pathInFS: string[], getPathInOS: Mounter['getPathInOS']
): Promise<void> {
	const pathOnDevice = getPathInOS(mountedFS);
	if (!pathOnDevice) {
		throw makeMountException({ notMounted: true });
	}
	await openInShell(join(pathOnDevice, ...pathInFS));
}

type OpenURLWhitelistEntry = web3n.caps.OpenURLWhitelistEntry;

function urlFitsFilter({
	schema, anyDomain, domain, subdomains
}: OpenURLWhitelistEntry, url: URL): boolean {
	if (url.protocol !== `${schema}:`) { return false; }
	if (anyDomain) { return true; }
	if (domain) {
		if (subdomains) {
			for (const subd of subdomains) {
				const sections = subd.split('.');
				if (sections[0] === '*') {
					return url.hostname.endsWith(`${
						(sections.length === 1) ? '' : `.${sections.slice(1).join('.')}`
					}.${domain}`);
				} else {
					return (url.hostname === `${subd}.${domain}`);
				}
			}
		} else {
			return (domain === url.hostname);
		}
	}
	return false;
}

async function openURL(whitelist: OpenURLWhitelistEntry[], url: string): Promise<void> {
	const urlObj = new URL(url);
	for (const entry of whitelist) {
		if (urlFitsFilter(entry, urlObj)) {
			await shell.openExternal(url);
			return;
		}
	}
}
