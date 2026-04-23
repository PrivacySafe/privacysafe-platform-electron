/*
 Copyright (C) 2021 - 2026 3NSoft Inc.
 
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

import { FactoryOfFSs, reverseDomain } from 'core-3nweb-client-lib';
import { join } from 'path';
import { Observable, Subject } from 'rxjs';
import { BUNDLED_APPS_FOLDER, BUNDLED_APP_PACKS_FOLDER, LAUNCHER_APP_DOMAIN, STARTUP_APP_DOMAIN, isBundledApp } from '../../../bundle-confs';
import { readManifestFromZip, unzipAppVersionFromFileOnDevice, readFileBytesFromZip, unzipAppVersionFromFile } from './unpack-zipped-app';
import * as utils from '../../../app-n-components/utils';
import { makeAppInitExc } from '../../../../platform/caps/shell';
import { SystemPlaces } from '../../../../platform/caps/system/system-places';
import type { Logging } from '../../../../platform/inject-defs/confs';
import { FileException, readdir, readFile, stat } from '../../../../platform/lib-common/async-fs-node';

type ReadonlyFile = web3n.files.ReadonlyFile;
type WritableFS = web3n.files.WritableFS;
type AppUnpackProgress = web3n.system.apps.AppUnpackProgress;
type AppManifest = web3n.caps.AppManifest;
type GeneralAppManifest = web3n.caps.GeneralAppManifest;

const COMPLETE_PACKS_DIR = 'complete';
const PARTIAL_PACKS_DIR = 'partial';
const MANIFEST_FILE = 'manifest.json';
const APP_ROOT_FOLDER = 'app';

const sysApps = [
	STARTUP_APP_DOMAIN, LAUNCHER_APP_DOMAIN
];


export function makeSystemPlaces(storages: () => FactoryOfFSs, logError: Logging['logError']): SystemPlaces {
	return new SystemPlaces(
		storages,
		() => listInstalledBundledApps(sysApps),
		listBundledAppPacks,
		listInstalledBundledAppsWithStartup,
		isBundledApp,
		utils.appManifestOnDev,
		utils.appAndManifestOnDev,
		getBundledPackManifest,
		getBundledPackFileBytes,
		unpackBundledApp,
		unpackAppFromFile,
		logError
	);
}

async function unpackBundledApp(
	appDomain: string, packsFS: WritableFS
): Promise<Observable<AppUnpackProgress>> {
	const zipPath = join(BUNDLED_APP_PACKS_FOLDER, bundleZipName(appDomain));
	await checkPresenceOfBundledPackage(appDomain, zipPath);
	const unzipObs = new Subject<AppUnpackProgress>();
	const forUnpack = await packsFS.writableSubRoot(PARTIAL_PACKS_DIR);
	unzipAppVersionFromFileOnDevice(
		zipPath, forUnpack, p => unzipObs.next(p)
	).then(async ({ unpackedFolder, version }) => {
		await packsFS.move(
			`${PARTIAL_PACKS_DIR}/${unpackedFolder}`,
			completePackAppVersionFolder(appDomain, version)
		);
		unzipObs.complete();
	})
	.catch(exc => unzipObs.error(exc))
	.then(() => forUnpack.close());
	return unzipObs.asObservable();
}

async function checkPresenceOfBundledPackage(
	appDomain: string, zipPath: string
): Promise<void> {
	const zipStat = await stat(zipPath).catch((exc: FileException) => {
		throw (exc.notFound ?
			makeAppInitExc(appDomain, { noBundledPack: true }) : exc);
	});
	if (!zipStat.isFile()) {
		throw makeAppInitExc(appDomain, { noBundledPack: true });
	}
}

function bundleZipName(appDomain: string): string {
	return `${reverseDomain(appDomain)}.zip`;
}

function appVersionFolder(
	appDomain: string, version: string
): string {
	return `${reverseDomain(appDomain)}/${version}`;
}

function completePackAppVersionFolder(
	appDomain: string, version: string
): string {
	return `${COMPLETE_PACKS_DIR}/${appVersionFolder(appDomain,  version)}`;
}

export async function listBundledAppPacks(): Promise<{
	id: string; version: string;
}[]> {
	const appManifestsPromises = (await readdir(BUNDLED_APP_PACKS_FOLDER)
	.catch((exc: FileException) => {
		if (exc.notFound) { return [] as string[]; }
		else { throw exc; }
	}))
	.filter(fName => fName.endsWith(`.zip`))
	.map(fName => readManifestFromZip(join(BUNDLED_APP_PACKS_FOLDER, fName)));
	const infos = (await Promise.all(appManifestsPromises))
	.filter(info => !!info)
	.map(m => ({
		id: m!.appDomain,
		version: m!.version
	}));
	return infos;
}

async function manifestsOfInstalledBundledApps(
	skipApps?: string[]
): Promise<AppManifest[]> {
	let lst = (await readdir(BUNDLED_APPS_FOLDER)
	.catch((exc: FileException) => {
		if (exc.notFound) { return [] as string[]; }
		else { throw exc; }
	}));
	if (skipApps) {
		lst = lst.filter(fName => !skipApps.includes(reverseDomain(fName)));
	}
	const appManifestsPromises = lst
	.map(fName => readFile(
		join(BUNDLED_APPS_FOLDER, fName, MANIFEST_FILE),
		{ encoding: 'utf8' }
	));
	const manifests = (await Promise.all(appManifestsPromises))
	.map(mFile => JSON.parse(mFile) as AppManifest);
	return manifests;
}

export async function listInstalledBundledApps(
	skipApps?: string[]
): Promise<{ id: string; version: string; }[]> {
	return (await manifestsOfInstalledBundledApps(skipApps))
	.map(m => ({
		id: m.appDomain,
		version: m.version
	}));
}

async function listInstalledBundledAppsWithStartup(
	skipApps?: string[]
): Promise<string[]> {
	return (await manifestsOfInstalledBundledApps(skipApps))
	.filter(m => {
		const launchers = (m as GeneralAppManifest).launchOnSystemStartup;
		return (launchers && (launchers.length > 0));
	})
	.map(({ appDomain }) => appDomain);
}

function getBundledPackManifest(id: string): Promise<AppManifest|undefined> {
	return readManifestFromZip(
		join(BUNDLED_APP_PACKS_FOLDER, bundleZipName(id))
	);
}

function getBundledPackFileBytes(
	id: string, path: string
): Promise<Uint8Array|undefined> {
	return readFileBytesFromZip(
		join(BUNDLED_APP_PACKS_FOLDER, bundleZipName(id)),
		join(APP_ROOT_FOLDER, path)
	);
}

async function unpackAppFromFile(
	file: ReadonlyFile, packsFS: WritableFS
): Promise<Observable<AppUnpackProgress>> {
	const unzipObs = new Subject<AppUnpackProgress>();
	const forUnpack = await packsFS.writableSubRoot(PARTIAL_PACKS_DIR);
	unzipAppVersionFromFile(
		file, forUnpack, p => unzipObs.next(p)
	).then(async ({ unpackedFolder, version, appDomain }) => {
		await packsFS.move(
			`${PARTIAL_PACKS_DIR}/${unpackedFolder}`,
			completePackAppVersionFolder(appDomain, version)
		);
		unzipObs.complete();
	})
	.catch(exc => unzipObs.error(exc))
	.then(() => forUnpack.close());
	return unzipObs.asObservable();
}


Object.freeze(exports);