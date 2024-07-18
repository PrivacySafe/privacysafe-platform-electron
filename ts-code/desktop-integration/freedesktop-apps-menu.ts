/*
 Copyright (C) 2021 - 2022 3NSoft Inc.
 
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

import { homedir } from "os";
import { join } from "path";
import { AppInfoGetter } from ".";
import { readdir, unlink, writeFile } from "../lib-common/async-fs-node";
import { SingleProc } from "../lib-common/processes/single";
import { PLATFORM_CALL_CMD } from "../process-args";
import { ExtCmd } from "./external-cmds";

async function getFreedesktopMenuFolder(): Promise<string|undefined> {
	const platform = process.platform;
	if ((platform !== 'linux')
	&& (platform !== 'freebsd')
	&& (platform !== 'openbsd')
	&& (platform !== 'netbsd')) {
		return;
	}
	try {
		const inUserHome = join(homedir(), '.local', 'share', 'applications');
		await readdir(inUserHome);
		return inUserHome;
	} catch (exc) {
		return;
	}
}

export interface DesktopEntry {
	cmdId: string;
	platformExec: string;
	name: string;
	comment: string;
	icon: string;
}

export async function writeDesktopEntryFile(
	entriesFolder: string, entry: DesktopEntry
): Promise<void> {
	await writeFile(
		join(entriesFolder, desktopEntryFileNameFor(entry.cmdId)),
		desktopEntryContentFor(entry),
		{ encoding: 'utf8' }
	);
}

function desktopEntryFileNameFor(cmdId: string): string {
	return `w3n-cmd_${cmdId}.desktop`
}

function desktopEntryContentFor({
	name, platformExec, cmdId, comment, icon
}: DesktopEntry): string {
	return `#!/usr/bin/env xdg-open

[Desktop Entry]
Version=1.0
Type=Application
Terminal=true
Exec=${platformExec} -- ${PLATFORM_CALL_CMD}${cmdId}
Name=${name}
Comment=${comment}
Icon=${icon}
Categories=X-PrivacySafe;
`;
}

export async function removeDesktopEntryFile(
	entriesFolder: string, cmdId: string
): Promise<void> {
	try {
		await unlink(join(entriesFolder, desktopEntryFileNameFor(cmdId)));
	} catch (exc) {}
}

export interface DesktopDirectory {
	directoryId: string;
	name: string;
	comment: string;
	icon: string;
}

function desktopDirectoryContentFor({
	comment, icon, name
}: DesktopDirectory): string {
	return `[Desktop Entry]
Name=${name}
Comment=${comment}
Icon=${icon}
Type=Directory`;
}

// XXX Insertion into ~/.config/menus/cinnamon-applications.menu
const intoApplicationsMenu = `
<!-- PrivacySafe menu ... -->
<Menu>
	<Name>privacy-safe</Name>
	<Directory>privacy-safe.directory</Directory>
	<Include>
		<Category>X-PrivacySafe</Category>
	</Include>
	<AppDir>/home/mikalai/.local/share/applications</AppDir>
</Menu> <!-- End PrivacySafe menu ... -->
`;


export class FreeDesktopMenu {

	private readonly updateProc = new SingleProc();
	private readonly cmdsInDesktopFiles = new Set<string>();

	private constructor(
		private readonly deskEntriesDir: string,
		private readonly getAppInfo: AppInfoGetter
	) {
		Object.freeze(this);
	}

	static async makeIfSystemWithFD(
		getAppInfo: AppInfoGetter
	): Promise<FreeDesktopMenu|undefined> {
		if (process.platform !== 'linux') { return; }
		const deskEntriesDir = await getFreedesktopMenuFolder();
		if (!deskEntriesDir) { return; }
		return new FreeDesktopMenu(deskEntriesDir, getAppInfo);
	}

	async close(): Promise<void> {
		return this.updateProc.startOrChain(async () => {
			for (const cmdId of this.cmdsInDesktopFiles.values()) {
				await removeDesktopEntryFile(this.deskEntriesDir, cmdId);
			}
		});
	}

	updateItems(
		cmdsViewByUserAndApp: Map<string, Map<string, ExtCmd>>
	): Promise<void> {
		return this.updateProc.startOrChain(async () => {
			for (const cmd of valuesFrom(cmdsViewByUserAndApp)) {
				if (this.cmdsInDesktopFiles.has(cmd.token)) { continue; }
				await writeDesktopEntryFile(this.deskEntriesDir, {
					cmdId: cmd.token,
					comment: `This opens ${cmd.app} 3NWeb app`,
					icon: ``,
					name: cmd.app,
					platformExec: `/some/binary/from/args/as/constant/of/this/instance`
				});
				this.cmdsInDesktopFiles.add(cmd.token);
			}


		});
	}

}
Object.freeze(FreeDesktopMenu.prototype);
Object.freeze(FreeDesktopMenu);


function* valuesFrom<T>(mapOfMaps: Map<any, Map<any, T>>) {
	for (const innerMap of mapOfMaps.values()) {
		for (const value of innerMap.values()) {
			yield value;
		}
	}
}


Object.freeze(exports);