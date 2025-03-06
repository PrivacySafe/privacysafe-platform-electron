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
import { mergeMap, share } from 'rxjs/operators';
import { BUNDLED_APPS_FOLDER, BUNDLED_APP_PACKS_FOLDER, LAUNCHER_APP_DOMAIN, STARTUP_APP_DOMAIN, isBundledApp } from '../../bundle-confs';
import { logError } from '../../confs';
import { assert } from '../../lib-common/assert';
import { FileException, readdir, stat, readFile } from '../../lib-common/async-fs-node';
import { makeRuntimeException } from '../../lib-common/exceptions/runtime';
import { checkAppManifest, hasStartupLaunchersDefined } from '../../lib-common/manifest-utils';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { readManifestFromZip, unzipAppVersion, APP_ROOT_FOLDER, MANIFEST_FILE, readFileBytesFromZip } from './unpack-zipped-app';
import { SingleProc } from '../../lib-common/processes/single';
import { appAndManifestOnDev, appManifestOnDev } from '../../app-n-components/utils';

type Observer<T> = web3n.Observer<T>;
type ReadonlyFS = web3n.files.ReadonlyFS;
type WritableFS = web3n.files.WritableFS;
type FSCollection = web3n.files.FSCollection;
type StorageType = web3n.storage.StorageType;
type BundleUnpackProgress = web3n.system.apps.BundleUnpackProgress;
type AppVersions = web3n.system.apps.AppVersions;
type AppState = web3n.system.apps.AppState;
type AppEvent = web3n.system.apps.AppEvent;
type SystemParamsForInstalledApp = web3n.system.apps.SystemParamsForInstalledApp;
type AppManifest = web3n.caps.AppManifest;
type GeneralAppManifest = web3n.caps.GeneralAppManifest;

const CURRENT_FNAME = 'current';
const COMPLETE_PACKS_DIR = 'complete';
const PARTIAL_PACKS_DIR = 'partial';

const PLATFORM_PREFIX = 'computer.3nweb.platform';

const INSTALLED_APP_SYSTEM_PARAMS_ATTR = 'installed_app_system_params';

const sysApps = [
	STARTUP_APP_DOMAIN, LAUNCHER_APP_DOMAIN
];


export class SystemPlaces {

	private readonly appEventSink = new Subject<AppEvent>();
	private readonly appEvent$ = this.appEventSink.asObservable().pipe(share());

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

	async listApps(filter?: AppState[]): Promise<AppVersions[]> {
		const infos = new Map<string, AppVersions>();
		if (!filter || filter.includes('current')) {
			for (const info of await listInstalledApps(
				await this.getAppsCodeFS()
			)) {
				infos.set(info.id, info);
			}
			for (const info of await listInstalledBundledApps(sysApps)) {
				infos.set(info.id, info);
			}
		}
		if (!filter || filter.includes('packs')) {
			for (const info of await listCompleteAppPacks(
				await this.getPackagesFS()
			)) {
				const existing = infos.get(info.id);
				if (existing) {
					existing.packs = info.packs;
				} else {
					infos.set(info.id, info);
				}
			}
			for (const { id, version } of await listBundledAppPacks()) {
				const existing = infos.get(id);
				if (!existing) {
					infos.set(id, { id, packs: [ version ] });
				} else if (!existing.packs) {
					existing.packs = [ version ];
				} else if (!existing.packs.includes(version)) {
					existing.packs.push(version);
				}
			}
		}
		return Array.from(infos.values());
	}

	async getAppVersions(
		id: string, filter?: AppState[]
	): Promise<AppVersions|undefined> {
		const appFolder = reverseDomain(id);
		const info: AppVersions = { id };
		if (!filter || filter.includes('current')) {
			const bundledAppManifest = await appManifestOnDev(id)
			.catch((exc: FileException) => {
				if (exc.notFound) { return; }
				else { throw exc; }
			});
			if (bundledAppManifest) {
				info.current = bundledAppManifest.version;
			} else {
				const appFS = await getInstalledAppDir(
					await this.getAppsCodeFS(), appFolder
				);
				if (appFS) {
					const m = await appFS.readJSONFile<AppManifest>(MANIFEST_FILE);
					info.current = m.version;
				}
			}
		}
		if (!filter || filter.includes('packs')) {
			const completePacks = await getAppPacksVersions(
				await this.getPackagesFS(), appFolder
			);
			if (completePacks) {
				info.packs = completePacks.packs;
			}
			const m = await getBundledPackManifest(id);
			if (m) {
				if (!info.packs) {
					info.packs = [ m.version ];
				} else if (!info.packs.includes(m.version)) {
					info.packs.push(m.version);
				}
			}
		}
		return ((!info.current && !info.packs) ?
			undefined : info
		);
	}

	private async getAppFS(
		id: string, version: string|undefined
	): Promise<ReadonlyFS|undefined> {
		const appFolder = reverseDomain(id);
		return await (version ?
			getAppDirInPacks(await this.getPackagesFS(), appFolder, version) :
			getInstalledAppDir(await this.getAppsCodeFS(), appFolder)
		);
	}

	async getAppManifest(
		id: string, version?: string
	): Promise<AppManifest|undefined> {
		if (isBundledApp(id)) {
			const m = await appManifestOnDev(id);
			if (!version || (m.version === version)) {
				return m;
			} else {
				const appFS = await this.getAppFS(id, version);
				return await appFS?.readJSONFile<AppManifest>(MANIFEST_FILE);
			}
		} else {
			const appFS = await this.getAppFS(id, version);
			if (appFS) {
				return await appFS.readJSONFile<AppManifest>(MANIFEST_FILE);
			} else if (version) {
				const bundledM = await getBundledPackManifest(id);
				if (bundledM && (bundledM.version === version)) {
					return bundledM;
				}
			}
		}
	}

	async getAppFileBytes(
		id: string, path: string, appVersion?: string
	): Promise<Uint8Array|undefined> {
		try {
			if (isBundledApp(id)) {
				const { appRoot, manifest: m } = await appAndManifestOnDev(id);
				if (!appVersion || (m.version === appVersion)) {
					return await appRoot.readBytes(path);
				} else {
					const appFS = await this.getAppFS(id, appVersion);
					return await appFS?.readBytes(`${APP_ROOT_FOLDER}/${path}`);
				}
			} else {
				const appFS = await this.getAppFS(id, appVersion);
				if (appFS) {
					return await appFS.readBytes(`${APP_ROOT_FOLDER}/${path}`);
				} else if (appVersion) {
					const bundledM = await getBundledPackManifest(id);
					if (bundledM && (bundledM.version === appVersion)) {
						return await getBundledPackFileBytes(id, path);
					}
				}
			}
		} catch (exc) {
			if ((exc as FileException).notFound) {
				return;
			} else {
				throw exc;
			}
		}
	}

	watchApps(observer: Observer<AppEvent>): () => void {
		const sub = this.appEvent$.subscribe(observer);
		return () => sub.unsubscribe();
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
			const hasStartupLaunchers = await checkAppPack(pack, id, version);
			const appsCode = await this.getAppsCodeFS();
			const current =`${reverseDomain(id)}/${CURRENT_FNAME}`;
			let sysParamsForApp: SystemParamsForInstalledApp|undefined = undefined;
			if (await appsCode.checkLinkPresence(current)) {
				sysParamsForApp = await appsCode.getXAttr(
					current, INSTALLED_APP_SYSTEM_PARAMS_ATTR
				);
				await appsCode.deleteLink(current);
			}
			if (!sysParamsForApp) {
				sysParamsForApp = {
					hasStartupLaunchers
				};
			}
			await appsCode.link(current, pack);
			await appsCode.updateXAttrs(current, { set: {
				[INSTALLED_APP_SYSTEM_PARAMS_ATTR]: sysParamsForApp
			} });
			// 
			// XXX need to sync, from link and up to appsCode, as needed
			// 
			this.appEventSink.next({ type: 'installed', id, version });
		} catch (err) {
			throw makeAppInitExc(id, { errAtInstall: true }, { cause: err });
		}
	}

	async uninstallApp(id: string): Promise<void> {
		try {
			const appsCode = await this.getAppsCodeFS();
			const current =`${reverseDomain(id)}/${CURRENT_FNAME}`;
			if (await appsCode.checkLinkPresence(current)) {
				const { version } = await appsCode.readLink(current)
				.then(link => link.target())
				.then((
					appFS: ReadonlyFS
				) => appFS.readJSONFile<AppManifest>(MANIFEST_FILE));
				await appsCode.deleteLink(current);
				this.appEventSink.next({ type: 'uninstalled', id, version });
			}
		} catch (err) {
			throw makeAppInitExc(id, { errAtUninstall: true }, { cause: err });
		}		
	}

	async findInstalledApp(
		appDomain: string
	): Promise<InstalledAppParams> {
		const appsCode = await this.getAppsCodeFS();
		const appParams = await findInstalledApp(appDomain, appsCode);
		return appParams;
	}

	async appsToLaunchOnSystemStartup(): Promise<string[]> {
		const appsCode = await this.getAppsCodeFS();
		const userApps: string[] = [];
		const lst = await appsCode.listFolder('.');
		for (const { name, isFolder } of lst) {
			if (isFolder) {
				const sysParamsForApp = await appsCode.getXAttr(
					`${name}/${CURRENT_FNAME}`, INSTALLED_APP_SYSTEM_PARAMS_ATTR
				).catch(noop) as SystemParamsForInstalledApp|undefined;
				if (sysParamsForApp && sysParamsForApp.hasStartupLaunchers) {
					userApps.push(reverseDomain(name));
				}
			}
		}
		const bundledApps = await listInstalledBundledAppsWithStartup();
		return userApps.concat(bundledApps);
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
				dlPath, { create: true, exclusive: true }
			),
			rmDirOnErr: () => packs.deleteFolder(dlPath, true),
			mvDirOnCompletion: () => packs.move(
				dlPath, completePackAppVersionFolder(appDomain, version)
			)
		};	
	}

	async removeAppPack(id: string, version: string): Promise<void> {
		const appVersions = await this.getAppVersions(id, [ 'current', 'packs' ]);
		if (!appVersions || !appVersions.packs
		|| !appVersions.packs.includes(version)) {
			return;
		}
		if (appVersions.current === version) {
			throw makeAppInitExc(id, { errAtPackRemoval: true }, {
				version,
				message: `Can't remove pack version that is installed as current. Uninstall it first.`
			});
		}
		try {
			const packsFS = await this.getPackagesFS();
			await packsFS.deleteFolder(
				completePackAppVersionFolder(id, version), true
			);
		} catch (err) {
			throw makeAppInitExc(
				id, { errAtPackRemoval: true }, { cause: err, version }
			);
		}
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
	errAtUninstall?: true;
	errAtPackRemoval?: true;
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

async function checkAppPack(
	pack: ReadonlyFS, id: string, version: string
): Promise<boolean> {
	const { manifest, appRoot } = await appAndManifestFrom(pack)
	.catch(exc => {
		throw makeRuntimeException<AppInitException>('app-init',
			{ appDomain: id, version, cause: exc }, { badAppPack: true });
	});
	try {
		checkAppManifest(manifest, id, version);
		return hasStartupLaunchersDefined(manifest);
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

export interface InstalledAppParams {
	appRoot: ReadonlyFS;
	manifest: AppManifest;
	sysParamsForApp: SystemParamsForInstalledApp;
}

async function findInstalledApp(
	appDomain: string, appsCode: ReadonlyFS
): Promise<InstalledAppParams> {
	const pathToLink = `${reverseDomain(appDomain)}/${CURRENT_FNAME}`;
	const current = await appsCode.readLink(pathToLink)
	.catch((exc: FileException) => {
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
	const { appRoot, manifest } = await appAndManifestFrom(appFS);
	let sysParamsForApp: SystemParamsForInstalledApp = await appsCode.getXAttr(
		pathToLink, INSTALLED_APP_SYSTEM_PARAMS_ATTR
	);
	if (!sysParamsForApp) {
		sysParamsForApp = {
			hasStartupLaunchers: hasStartupLaunchersDefined(manifest)
		};
	}
	return { appRoot, manifest, sysParamsForApp };
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

async function listInstalledApps(codeFS: ReadonlyFS): Promise<AppVersions[]> {
	const lst = await codeFS.listFolder('/');
	const infos: AppVersions[] = [];
	for (const entry of lst) {
		const appFS = await getInstalledAppDir(codeFS, entry.name)
		.catch(err => logError(
			err, `Error during listing app in ${entry.name} folder of installed`
		));
		if (!appFS) {
			continue;
		}
		const {
			appDomain: id, version: current
		} = await appFS.readJSONFile<AppManifest>(MANIFEST_FILE);
		infos.push({ id, current });
	}
	return infos;
}

async function getInstalledAppDir(
	codeFS: ReadonlyFS, appFolder: string
): Promise<ReadonlyFS|undefined> {
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
	return await current.target() as ReadonlyFS;
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
): Promise<AppVersions[]> {
	return (await manifestsOfInstalledBundledApps(skipApps))
	.map(m => ({
		id: m.appDomain,
		current: m.version
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

async function listCompleteAppPacks(
	packsFS: ReadonlyFS
): Promise<AppVersions[]> {
	const lst = await packsFS.listFolder(COMPLETE_PACKS_DIR)
	.catch((exc: FileException) => {
		if (exc.notFound) { return []; }
		else { throw exc; }
	});
	const infos: AppVersions[] = [];
	for (const entry of lst) {
		const info = await getAppPacksVersions(packsFS, entry.name);
		if (info) {
			infos.push(info);
		}
	}
	return infos;
}

async function getAppPacksVersions(
	packsFS: ReadonlyFS, appFolder: string
): Promise<AppVersions|undefined> {
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
	.map(entry => entry.name);
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

async function getAppDirInPacks(
	packsFS: ReadonlyFS, appFolder: string, version: string
): Promise<ReadonlyFS|undefined> {
	try {
		return await packsFS.readonlySubRoot(
			`${COMPLETE_PACKS_DIR}/${appFolder}/${version}`
		);
	} catch (exc) {
		if (!(exc as FileException).notFound) { throw exc; }
	}
}

function noop() {}


Object.freeze(exports);