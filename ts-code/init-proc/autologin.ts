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

import { join } from "path";
import { logError, utilDir } from "../confs";
import { FileException, readFile, writeFile } from "../lib-common/async-fs-node";
import { areAddressesEqual, toCanonicalAddress } from "../lib-common/canonical-address";
import { base64, toBuffer } from "../lib-common/buffer-utils";
import { safeStorage } from "electron";
import { platform } from "os";
import { rm } from "fs/promises";
import { isAutoStartupAvailable, setAutoStartup } from "./auto-startup";

const AUTOLOGIN_FNAME = 'autologin.json';

export interface UserKey {
	userId: string;
	key: Uint8Array;
}

interface UserKeyJSON {
	userId: string;
	packedKey: string;
	// XXX should we add here a packed master key, for OS's API to never see root/master key,
	//     but only random key that packs master key here.
}

export async function lookForAutologinUsers(): Promise<UserKey[]|undefined> {
	const filePath = join(utilDir, AUTOLOGIN_FNAME);
	try {
		const users = parseAndCheckCredentials(await readFile(filePath, { encoding: 'utf8' }));
		return ((users.length > 0) ? users : undefined);
	} catch (exc) {
		if ((exc as FileException).notFound) {
			return;
		} else {
			await logError(exc, `Failed to read and parse ${AUTOLOGIN_FNAME} file`);
		}
	}
}

function parseAndCheckCredentials(str: string): UserKey[] {
	const jsons = JSON.parse(str) as UserKeyJSON[];
	const checked: UserKey[] = [];
	if (!Array.isArray(jsons)) {
		throw `This isn't an array with login credentials`;
	}
	const canonicalIds = new Set<string>();
	for (const { userId, packedKey } of jsons) {
		// implicit check of user id
		canonicalIds.add(toCanonicalAddress(userId));
		checked.push({
			userId,
			key: unpackKeyWithSafeStorage(packedKey)
		});
	}
	if (canonicalIds.size !== checked.length) {
		throw `There are non-unique user ids in ${AUTOLOGIN_FNAME} file`;
	}
	return checked;
}

function packKeyWithSafeStorage(key: Uint8Array): string {
	const keyB64 = (base64.pack(key));
	const ecrypted = safeStorage.encryptString(keyB64);
	return base64.pack(ecrypted);
}

function unpackKeyWithSafeStorage(packedKey: string): Uint8Array {
	const encrypted = base64.open(packedKey);
	const keyB64 = safeStorage.decryptString(toBuffer(encrypted));
	return base64.open(keyB64);
}

async function saveAutologinData(data: UserKey[]): Promise<void> {
	const str = JSON.stringify(data.map(({ userId, key }) => ({
		userId,
		packedKey: packKeyWithSafeStorage(key)
	} as UserKeyJSON)), null, 2);
	const filePath = join(utilDir, AUTOLOGIN_FNAME);
	await writeFile(filePath, str);
	if (await isAutoStartupAvailable()) {
		await setAutoStartup(true);
	}
}

export async function saveUserKeyForAutologin(userKey: UserKey): Promise<void> {
	const existing = await lookForAutologinUsers();
	if (existing) {
		const ind = existing.findIndex(creds => areAddressesEqual(creds.userId, userKey.userId));
		if (ind < 0) {
			existing.push(userKey);
		} else {
			existing[ind] = userKey;
		}
		await saveAutologinData(existing);
	} else {
		await saveAutologinData([ userKey ]);
	}
}

export function isAutologinAvailableFromOS(): boolean {
	if (!safeStorage.isEncryptionAvailable()) {
		return false;
	} else if (platform() === 'linux') {
		const storeType = safeStorage.getSelectedStorageBackend();
		if ((storeType === 'basic_text') || (storeType === 'unknown')) {
			return false;
		}
	}
	return true;
}

export async function removeFromAutologin(userId: string): Promise<void> {
	const existing = await lookForAutologinUsers();
	if (!existing) {
		return;
	}
	const filePath = join(utilDir, AUTOLOGIN_FNAME);
	const ind = existing.findIndex(creds => areAddressesEqual(creds.userId, userId));
	if (ind < 0) {
		return;
	}
	if (existing.length === 1) {
		await rm(filePath).catch(noop);
	} else {
		existing.splice(ind, 1);
		await saveAutologinData(existing);
	}
}

function noop() {}


Object.freeze(exports);