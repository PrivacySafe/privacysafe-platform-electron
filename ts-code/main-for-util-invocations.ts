/*
 Copyright (C) 2024 3NSoft Inc.

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

import { PLATFORM_NAME } from "./bundle-confs";
import { bundleVersion } from "./bundle-version";
import { UTIL_INVOCATION_ARGS, cliUsageTxt } from "./process-args";
import { listInstalledBundledApps } from "./system/system-places";


export function processOfUtilityArgsIfGiven(): Promise<void>|undefined {

	if (UTIL_INVOCATION_ARGS['help']) {
		console.log(cliUsageTxt());
		return Promise.resolve();
	} else if (UTIL_INVOCATION_ARGS['version']) {
		return collectAndDisplayVersionsInfo();
	} else {
		return;	// explicit undefined
	}
}

async function collectAndDisplayVersionsInfo(): Promise<void> {
	const platformVersion = bundleVersion.substring(
		0, bundleVersion.indexOf('+')
	);
	const msg = `
${PLATFORM_NAME} bundle version: ${bundleVersion}
Bundle includes:
  Platform version: ${platformVersion}
  Integrated 3NWeb app versions:
${
	(await listInstalledBundledApps())
	.map(({
		id, version
	}) => `    • ${id}: ${version}`)
	.join('\n')
}
`;
	console.log(msg);
}
