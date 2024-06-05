/*
 Copyright (C) 2021 - 2024 3NSoft Inc.
 
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

import { FactoryOfFSs, reverseDomain, sysFolders } from 'core-3nweb-client-lib';
import { join } from 'path';
import { from, Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { BUNDLED_APP_PACKS_FOLDER } from '../../bundle-confs';
import { logError } from '../../confs';
import { assert } from '../../lib-common/assert';
import { FileException, readdir, stat } from '../../lib-common/async-fs-node';
import { makeRuntimeException } from '../../lib-common/exceptions/runtime';
import { checkAppManifest } from '../../lib-common/manifest-utils';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { readManifestFromZip, unzipAppVersion, APP_ROOT_FOLDER, MANIFEST_FILE } from './unpack-zipped-app';
import { SingleProc } from '../../lib-common/processes';

type Observer<T> = web3n.Observer<T>;
type ReadonlyFS = web3n.files.ReadonlyFS;
type WritableFS = web3n.files.WritableFS;
type ReadonlyFile = web3n.files.ReadonlyFile;
type FSCollection = web3n.files.FSCollection;
type StorageType = web3n.storage.StorageType;
type BundleUnpackProgress = web3n.apps.BundleUnpackProgress;
type AppInfo = web3n.apps.AppInfo;
type AppManifest = web3n.caps.AppManifest;

export type ExtAppInfo = AppInfo & { name: string; };

const CURRENT_FNAME = 'current';
const COMPLETE_PACKS_DIR = 'complete';
const PARTIAL_PACKS_DIR = 'partial';

const PLATFORM_PREFIX = 'computer.3nweb.platform';


export class SystemPlaces {

	constructor(
		private readonly storages: () => FactoryOfFSs
	) {
		Object.seal(this);
	}

	private async getSysFS(
		type: StorageType, folder: string
	): Promise<WritableFS> {
		const sysItems = await this.storages().getSysFSs(type);
		assert(!!sysItems.isCollection && !!sysItems.item);
		const item = await (sysItems.item as FSCollection).get(folder);
		assert(!!item && !!item.isFolder && !!item.item);
		return item!.item as WritableFS;
	}

	getAppsCodeFS(): Promise<WritableFS> {
		return this.getSysFS('synced', sysFolders.apps);
	}

	getPackagesFS(): Promise<WritableFS> {
		return this.getSysFS('synced', sysFolders.packages);
	}

	async getPlatformComponentFS(
		type: StorageType, platformComponentName: string
	): Promise<WritableFS> {
		const appsData = await this.getSysFS(type, sysFolders.appData);
		const reverseDomain = `${PLATFORM_PREFIX}.${platformComponentName}`;
		const componentFS = await appsData.writableSubRoot(reverseDomain);
		await appsData.close();
		return componentFS;
	}

	async listApps(): Promise<AppInfo[]> {
		const infos = new Map<string, AppInfo>();
		for (const info of await listInstalledApps(await this.getAppsCodeFS())) {
			infos.set(info.id, info);
		}
		for (const info of await listBundledApps()) {
			const existing = infos.get(info.id);
			if (existing) {
				existing.bundled = info.bundled;
			} else {
				infos.set(info.id, info);
			}
		}
		for (const info of await listCompletePacks(await this.getPackagesFS())) {
			const existing = infos.get(info.id);
			if (existing) {
				existing.packs = info.packs;
			} else {
				infos.set(info.id, info);
			}
		}
		return Array.from(infos.values());
	}

	async listInstalledApps(): Promise<ExtAppInfo[]> {

		// XXX should get installed with system, and installed in user's folder,
		//     AppInfo or AppVersionsInfo should pass this data.

		return await listInstalledApps(await this.getAppsCodeFS());
	}

	async getAppInfo(id: string): Promise<AppInfo|undefined> {
		const appFolder = reverseDomain(id);
		let info: AppInfo|undefined = await getInstalledAppInfo(
			await this.getAppsCodeFS(), appFolder
		);
		const bundled = await getBundledAppInfo(id);
		if (bundled) {
			if (info) {
				info.bundled = bundled.bundled;
			} else {
				info = bundled;
			}
		}
		const packs = await getAppPacksInfo(
			await this.getPackagesFS(), appFolder
		);
		if (packs) {
			if (info) {
				info.packs = packs.packs;
			} else {
				info = packs;
			}
		}
		return info;
	}

	async getAppIcon(id: string): Promise<ReadonlyFile> {
		const appsFolder = await this.getAppsCodeFS();
		const appFolder = reverseDomain(id);
		// ().readonlyFile(`${appFolder}/`)

		let info: AppInfo|undefined = await getInstalledAppInfo(
			appsFolder, appFolder
		);

		// XXX
		//  - read path from manifest's component's icon field
		//  - return file for current API
		//  - if file not found, return icon of a default component,
		//  - if default component has no icon, we should return some other.

		throw new Error("Method not implemented.");
	}

	unpackBundledApp(
		appDomain: string, observer: Observer<BundleUnpackProgress>
	): () => void {
		const sub = from(this.getPackagesFS())
		.pipe(
			mergeMap(packsFS => unpackBundledApp(appDomain, packsFS)),
			mergeMap(unpackProc => unpackProc)
		)
		.subscribe(toRxObserver(observer));
		return () => sub.unsubscribe();
	}

	async installApp(
		id: string, version: string
	): Promise<void> {
		try {
			const pack = await (await this.getPackagesFS()).readonlySubRoot(
				completePackAppVersionFolder(id, version)
			);
			await checkWebPackBeforeInstall(pack, id, version);
			const appsCode = await this.getAppsCodeFS();
			const current =`${reverseDomain(id)}/${CURRENT_FNAME}`;
			if (await appsCode.checkLinkPresence(current)) {
				await appsCode.deleteLink(current);
			}
			await appsCode.link(current, pack);
		} catch (err) {
			throw makeAppInitExc(id, { errAtInstall: true }, { cause: err });
		}
	}

	async findInstalledApp(
		appDomain: string
	): ReturnType<typeof appAndManifestFrom> {
		const appsCode = await this.getAppsCodeFS();
		const appAndManifest = await findInstalledApp(appDomain, appsCode);
		return appAndManifest;
	}

	async makeDownloadFolder(
		appDomain: string, version: string
	): Promise<{
		dir: WritableFS; rmDirOnErr: () => Promise<void>;
		mvDirOnCompletion: () => Promise<void>;
	}> {
		const packs = await this.getPackagesFS();
		const dlPath = `${PARTIAL_PACKS_DIR}/${appDomain}-${version}-download`;
		return {
			dir: await packs.writableSubRoot(
				dlPath, { create: true, exclusive: true }),
			rmDirOnErr: () => packs.deleteFolder(dlPath, true),
			mvDirOnCompletion: () => packs.move(
				dlPath, completePackAppVersionFolder(appDomain, version))
		};	
	}

}
Object.freeze(SystemPlaces.prototype);
Object.freeze(SystemPlaces);


export interface AppInitException extends web3n.RuntimeException {
	type: 'app-init',
	appDomain: string;
	entrypoint?: string;
	service?: string;
	command?: string;
	version?: string;
	badAppPack?: true;
	notInstalled?: true;
	noBundledPack?: true;
	errAtInstall?: true;
}

export function makeAppInitExc(
	appDomain: string, flags: Partial<AppInitException>,
	params?: Partial<AppInitException>
): AppInitException {
	if (params) {
		params.appDomain = appDomain;
	} else {
		params = { appDomain };
	}
	return makeRuntimeException<AppInitException>('app-init', params, flags);
}

async function checkWebPackBeforeInstall(
	pack: ReadonlyFS, id: string, version: string
): Promise<void> {
	const { manifest, appRoot } = await appAndManifestFrom(pack)
	.catch(exc => {
		throw makeRuntimeException<AppInitException>('app-init',
			{ appDomain: id, version, cause: exc }, { badAppPack: true });
	});
	try {
		checkAppManifest(manifest, id, version);
	} catch (exc) {
		throw makeRuntimeException<AppInitException>('app-init', {
			appDomain: id, version,
			message: `App versions don't match in manifest`,
			cause: exc
		}, { badAppPack: true });
	} finally {
		await appRoot.close();
	}
}

async function findInstalledApp(
	appDomain: string, appsCode: ReadonlyFS
): ReturnType<typeof appAndManifestFrom> {
	const current = await appsCode.readLink(
		`${reverseDomain(appDomain)}/${CURRENT_FNAME}`
	).catch((exc: FileException) => {
		throw (exc.notFound ?
			makeAppInitExc(appDomain, { notInstalled: true }) :
			exc
		);
	});
	if (!current.isFolder) {
		throw makeAppInitExc(
			appDomain, {},
			{ message: `${CURRENT_FNAME} is not a link to folder` }
		);
	}
	const appFS = await current.target() as WritableFS;
	return appAndManifestFrom(appFS);
}

export async function appAndManifestFrom(
	appFS: ReadonlyFS
): Promise<{ appRoot: ReadonlyFS; manifest: AppManifest; }> {
	const manifest = await appFS.readJSONFile<AppManifest>(MANIFEST_FILE);
	const appRoot = await appFS.readonlySubRoot(APP_ROOT_FOLDER);
	return { appRoot, manifest };
}

async function unpackBundledApp(
	appDomain: string, packsFS: WritableFS
): Promise<Observable<BundleUnpackProgress>> {
	const zipPath = join(BUNDLED_APP_PACKS_FOLDER, bundleZipName(appDomain));
	await checkPresenceOfBundledPackage(appDomain, zipPath);
	const unzipObs = new Subject<BundleUnpackProgress>();
	const forUnpack = await packsFS.writableSubRoot(PARTIAL_PACKS_DIR);
	unzipAppVersion(
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

// XXX we need to remove platform section in the middle, in code and user data,
// and keep this removal for backwards compatibility at least for some time.
// Platform can change to just 'web' constant, as it was the only one used.

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

function appDomainFromFolder(fName: string): string {
	return reverseDomain(fName);
}

async function listInstalledApps(codeFS: ReadonlyFS): Promise<ExtAppInfo[]> {
	const lst = await codeFS.listFolder('/');
	const infos: ExtAppInfo[] = [];
	for (const entry of lst) {
		const info = await getInstalledAppInfo(codeFS, entry.name)
		.catch(err => logError(
			err, `Error during listing app in ${entry.name} folder of installed`
		));
		if (info) {
			infos.push(info);
		}
	}
	return infos;
}

async function getInstalledAppInfo(
	codeFS: ReadonlyFS, appFolder: string
): Promise<ExtAppInfo|undefined> {
	const lstOfAppFolder = await codeFS.listFolder(appFolder)
	.then(async lst => {
		if (lst.find(item => (item.name === 'web'))) {
			await removeWebSectionInInstallLinks(codeFS as WritableFS, appFolder);
			return await codeFS.listFolder(appFolder);
		} else {
			return lst;
		}
	}, (exc: FileException) => {
		if (!exc.notFound) { throw exc; }
	});
	if (!lstOfAppFolder
	|| !lstOfAppFolder.find(item => (item.name === CURRENT_FNAME))) {
		return;
	}
	const current = await codeFS.readLink(`${appFolder}/${CURRENT_FNAME}`);
	const appFS = await current.target() as ReadonlyFS;
	const m = await appFS.readJSONFile<AppManifest>(MANIFEST_FILE);
	await appFS.close();
	return {
		id: m.appDomain,
		name: (m.name ? m.name : m.appDomain),
		installed: [
			{ version: m.version }
		]
	};
}

async function listBundledApps(): Promise<AppInfo[]> {
	const appInfoPromises = (await readdir(BUNDLED_APP_PACKS_FOLDER)
	.catch((exc: FileException) => {
		if (exc.notFound) { return [] as string[]; }
		else { throw exc; }
	}))
	.filter(fName => fName.endsWith(`.zip`))
	.map(fName => getAppInfoFromZip(join(BUNDLED_APP_PACKS_FOLDER, fName)));
	const infos = (await Promise.all(appInfoPromises))
	.filter(info => !!info) as AppInfo[];
	return infos;
}

async function getAppInfoFromZip(file: string): Promise<AppInfo|undefined> {
	const m = await readManifestFromZip(file);
	return (m ? {
		id: m.appDomain,
		bundled: [ {
			version: m.version
		} ]
	} : undefined);
}

function getBundledAppInfo(id: string): Promise<AppInfo|undefined> {
	return getAppInfoFromZip(join(BUNDLED_APP_PACKS_FOLDER, bundleZipName(id)));
}

async function listCompletePacks(packsFS: ReadonlyFS): Promise<AppInfo[]> {
	const lst = await packsFS.listFolder(COMPLETE_PACKS_DIR)
	.catch((exc: FileException) => {
		if (exc.notFound) { return []; }
		else { throw exc; }
	});
	const infos: AppInfo[] = [];
	for (const entry of lst) {
		const info = await getAppPacksInfo(packsFS, entry.name);
		if (info) {
			infos.push(info);
		}
	}
	return infos;
}

async function getAppPacksInfo(
	packsFS: ReadonlyFS, appFolder: string
): Promise<AppInfo|undefined> {
	const packsFolder = `${COMPLETE_PACKS_DIR}/${appFolder}`;
	const lstOfAppFolder = await packsFS.listFolder(packsFolder)
	.then(async lst => {
		if (lst.find(item => (item.name === 'web'))) {
			await removeWebSectionInInstallLinks(
				packsFS as WritableFS, packsFolder
			);
			return await packsFS.listFolder(packsFolder);
		} else {
			return lst;
		}
	}, async (exc: FileException) => {
		if (!exc.notFound) { throw exc; }
	});
	if (!lstOfAppFolder) { return; }
	const packs = (await packsFS.listFolder(packsFolder))
	.filter(entry => entry.isFolder)
	.map(entry => ({ version: entry.name }));
	return ((packs.length > 0) ? {
		id: appDomainFromFolder(appFolder),
		packs
	} : undefined);
}

const webSectionRemovalSyncProc = new SingleProc();
async function removeWebSectionInInstallLinks(
	codeFS: WritableFS, appFolder: string
): Promise<void> {
	await webSectionRemovalSyncProc.startOrChain(async () => {
		if (!(await codeFS.checkFolderPresence(`${appFolder}/web`))) {
			return;
		}
		for (const item of await codeFS.listFolder(`${appFolder}/web`)) {
			await codeFS.move(
				`${appFolder}/web/${item.name}`,
				`${appFolder}/${item.name}`
			);
		}
		await codeFS.deleteFolder(`${appFolder}/web`);
	})
	.catch(exc => logError(exc, `Exception thrown in removal of 'web' section from install path within ${appFolder} app folder`));
}


Object.freeze(exports);