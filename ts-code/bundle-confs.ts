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

import { join } from 'path';
import { assert } from './lib-common/assert';
import { platform } from 'os';

const asar = 'app.asar';
const asarUnpacked = 'app.asar.unpacked';

export function isInAsar(path: string): boolean {
	return path.includes(asar);
}

/**
 * Packing info is placed into prepackaged folder into app.asar.unpacked.
 * To get it out, we need to mangle current path, and if this wasn't packed,
 * like in code-test cycle, we return undefined values instead of throwing.
 * @param p 
 */
export function toAsarUnpacked(p: string): string {
	const asarInd = p.lastIndexOf(asar);
	if ((asarInd < 0)
	|| (asarInd === p.lastIndexOf(asarUnpacked))) {
		return p;
	} else {
		const before = p.substring(0, asarInd);
		const after = p.substring(asarInd + asar.length);
		return `${before}${asarUnpacked}${after}`;
	}
}

export const BUNDLED_APPS_FOLDER = toAsarUnpacked(
	join(__dirname, 'bundled-apps')
);

export const BUNDLED_APP_PACKS_FOLDER = toAsarUnpacked(
	join(__dirname, 'bundled-app-packs')
);

interface ConfigurableConstants {
	'launcher-app': string;
	'startup-app': string;
	'signup-url': string;
	'platform-name': string;
	'bundled-apps': string[];
	'bundled-app-packs': string[];
	'data-dir-name': string;
	'bundle-base-url': string;
}
const confConstants = require('./configuration.json') as ConfigurableConstants;
function getConfStringConst(
	key: keyof ConfigurableConstants
): string {
	const confValue = confConstants[key];
	assert(
		!Array.isArray(confValue) && (confValue.length > 0),
		`Value of "${key}" in configurations.json is not a string`
	);
	return (confValue as string).trim();
}
assert(
	Array.isArray(confConstants['bundled-app-packs']) &&
	Array.isArray(confConstants['bundled-apps']),
	`configuration.json must have arrays fields`
);

export const DEFAULT_SIGNUP_URL = getConfStringConst('signup-url');

export const STARTUP_APP_DOMAIN = getConfStringConst('startup-app');
export const LAUNCHER_APP_DOMAIN = getConfStringConst('launcher-app');

export const PLATFORM_NAME = getConfStringConst('platform-name');

export const DATA_DIR_NAME = (() => {
	let dirName = getConfStringConst('data-dir-name');
	if ((platform() === 'win32') && dirName.startsWith('.')) {
		dirName = dirName.substring(1);
	}
	assert((dirName !== '.') && (dirName !== '..'));
	return dirName;
})();

export const PLATFORM_BUNDLE_URL = getConfStringConst('bundle-base-url');

export function isBundledApp(appDomain: string): boolean {
	// XXX debug comment of bundled here
	return (
		(appDomain === LAUNCHER_APP_DOMAIN) //||
		//confConstants['bundled-apps'].includes(appDomain)
	);
}


Object.freeze(exports);