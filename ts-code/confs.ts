/*
 Copyright (C) 2015 - 2018, 2020 - 2022, 2024 3NSoft Inc.

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

import { join } from 'path';
import { CUSTOM_DATA_DIR, CUSTOM_DENO_RUNTIME, CUSTOM_SIGNUP_URL, toAbsolute } from './process-args';
import { homedir } from 'os';
import { appDirs, makeLogger } from 'core-3nweb-client-lib';
import { spawn } from 'child_process';
import { defer, Deferred } from './lib-common/processes/deferred';
import { DATA_DIR_NAME, DEFAULT_SIGNUP_URL, isInAsar, toAsarUnpacked } from './bundle-confs';

export const SIGNUP_URL = (CUSTOM_SIGNUP_URL ?
	CUSTOM_SIGNUP_URL : DEFAULT_SIGNUP_URL
);

export const UTIL_DIR = 'util';

export const appDir = (() => {
	// either get value from parameters
	if (CUSTOM_DATA_DIR) { return toAbsolute(CUSTOM_DATA_DIR.folder); }
	// or generate default, based on platform version
	if (process.platform === 'win32') {
		const parentFolder = (process.env.PORTABLE_EXECUTABLE_DIR ?
			process.env.PORTABLE_EXECUTABLE_DIR :
			process.env.LOCALAPPDATA);
		return (parentFolder ?
			join(parentFolder, DATA_DIR_NAME) :
			join(homedir(), DATA_DIR_NAME));
	} else {
		return toAbsolute(join(homedir(), DATA_DIR_NAME));
	}
})();

export const utilDir = appDirs(appDir).getUtilFS();

export const {
	appLog, logError, logWarning, recordUnhandledRejectionsInProcess
} = makeLogger(utilDir);

export interface PackInfo {
	arch: 'x64' | 'arm64';
	variant: 'AppImage' | 'deb' | 'nsis' | 'exe' | 'dmg' | 'zip' | 'portable';
}

const PACKING_INFO_FNAME = 'packing-info.json';

export function findPackInfo(): PackInfo|undefined {
	if (!isInAsar(__dirname)) { return; }
	const infoFile = toAsarUnpacked(join(__dirname, PACKING_INFO_FNAME));
	try {
		return require(infoFile);
	} catch (err) {
		return;
	}
}

export const iconsFolder = toAsarUnpacked(join(__dirname, 'icons',
	(process.platform === 'win32') ?
		'windows' : ((process.platform === 'darwin') ? 'mac' : 'linux'
	)
));

const runtimesFolder = toAsarUnpacked(join(__dirname, 'runtimes',
	(process.platform === 'win32') ?
		'windows' : ((process.platform === 'darwin') ? 'mac' : process.platform
	)
));

const PACKED_DENO_BIN = join(runtimesFolder, process.arch,
	(process.platform === 'win32') ? 'deno.exe' : 'deno'
);

const DEFAULT_EXT_DENO_BIN = ((process.platform === 'win32') ?
	'deno.exe' : 'deno'
);

const DENO_PRELOAD = toAsarUnpacked(join(
	__dirname, 'runtime-deno', 'preload.bundle.js'
));

export interface DenoParams {
	bin: string;
	preload: string;
	spanWithShell: boolean;
	version: string;
}

let denoParams: DenoParams|null|undefined = undefined;
let denoParamsDiscoveryProc: Promise<void>|undefined = undefined;

export async function denoBinParams(): Promise<DenoParams|undefined> {
	if (denoParams) { return denoParams; }
	if (denoParams === null) { return; }
	if (!denoParamsDiscoveryProc) {
		denoParamsDiscoveryProc = (CUSTOM_DENO_RUNTIME ?
			testDenoBin(CUSTOM_DENO_RUNTIME, false) : Promise.reject()
		)
		.catch(() => testDenoBin(PACKED_DENO_BIN, false))
		.catch(() => testDenoBin(DEFAULT_EXT_DENO_BIN, true))
		.catch(() => null)
		.then(params => {
			denoParams = params;
		});
	}
	await denoParamsDiscoveryProc;
	return (denoParams ? denoParams : undefined);
}

function testDenoBin(bin: string, spanWithShell: boolean): Promise<DenoParams> {
	let deferred: Deferred<DenoParams>|undefined = defer();
	let version = '';
	const deno = spawn(bin, [ '--version' ], {
		shell: spanWithShell,
		timeout: 3000
	})
	.on('exit', (code, signal) => {
		if (!deferred) { return; }
		if ((signal === null) && (code === 0) && (version.length > 0)) {
			deferred.resolve({
				bin, spanWithShell, preload: DENO_PRELOAD, version
			});
		} else {
			deferred.reject(undefined);
		}
		deferred = undefined;
	})
	.on('error', err => {
		if (deferred) {
			deferred.reject(err);
			deferred = undefined;
		}
	});
	deno.stdout.on('data', str => { version += str; });
	return deferred.promise;
}


Object.freeze(exports);