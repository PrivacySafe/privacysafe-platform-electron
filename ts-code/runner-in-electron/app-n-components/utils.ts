/*
 Copyright (C) 2022 - 2024, 2026 3NSoft Inc.
 
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
import { BUNDLED_APPS_FOLDER } from "../bundle-confs";
import { DeviceFS, reverseDomain } from "core-3nweb-client-lib";
import { hasStartupLaunchersDefined } from "../../platform/lib-common/manifest-utils";
import { appAndManifestFrom, type InstalledAppParams } from "../../platform/caps/system/system-places";

type AppManifest = web3n.caps.AppManifest;

const MANIFEST_FILE = 'manifest.json';

export async function appAndManifestOnDev(appDomain: string): Promise<InstalledAppParams> {
	const path = join(BUNDLED_APPS_FOLDER, reverseDomain(appDomain));
	const appFS = await DeviceFS.makeReadonly(path);
	const { appRoot, manifest } = await appAndManifestFrom(appFS);
	const hasStartupLaunchers = hasStartupLaunchersDefined(manifest);
	return {
		appRoot, manifest, sysParamsForApp: { hasStartupLaunchers }
	};
}

export async function appManifestOnDev(appDomain: string): Promise<AppManifest> {
	const path = join(
		BUNDLED_APPS_FOLDER, reverseDomain(appDomain)
	);
	const appFS = await DeviceFS.makeReadonly(path);
	return await appFS.readJSONFile<AppManifest>(MANIFEST_FILE);
}
