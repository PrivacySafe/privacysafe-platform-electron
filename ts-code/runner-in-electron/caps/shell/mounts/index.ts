/*
 Copyright (C) 2026 3NSoft Inc.

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

import { platform } from "os";
import type { MakeUserMount, MakeTestStandMount } from "../../../../platform/core";
import { makeMounting } from "./descriptors";
import { mountFuser } from "./native-mods";
import { volumeMountDir } from "../../../confs";
import { Mounter } from "./user-mounts";
import { SKIP_FS_MOUNTING_FLAG } from "../../../process-args";

type MountsIntoOS = web3n.shell.mounts.MountsIntoOS;

const volumeName = 'PrivacySafe';

export function mountIntoOS(): {
	makeUserMount: MakeUserMount;
	makeTestStandMount: MakeTestStandMount;
	unmount: () => Promise<void>;
}|undefined {
	const os = platform();
	if (SKIP_FS_MOUNTING_FLAG) {
		console.log(`Skipping mounting into OS, on ${os}`);
		return;
	}
	let volumePath: string;
	if ((os === 'linux') || (os === 'darwin')) {
		volumePath = volumeMountDir;
	} else {
		// XXX windows will have something like P:
		console.log(`Skipping mounting into ${os} OS filesystems.`);
		return;
	}
	try {
		const {
			getOrMakeUserMounts, implOfFuserCallbacks, destroySignal, makeTestStandMount
		} = makeMounting(volumePath);
		const callUnmount = mountFuser(volumePath, volumeName, implOfFuserCallbacks());
		console.log(`Mount successful at ${volumePath}`);
		return {
			makeUserMount: getOrMakeUserMounts,
			makeTestStandMount,
			unmount: async () => {
				callUnmount();
				await destroySignal;
			}
		};
	} catch (err) {
		console.error(`Fail to mount into ${os} OS filesystems:`, err);
		return;
	}
}

export function makeMountsCAP(
	appDomain: string, capsReq: web3n.caps.ShellCAPsSetting['mounts'], userMounts: Mounter|undefined
): {
	cap: NonNullable<web3n.shell.ShellCAPs['mounts']>
}|undefined {
	if (!userMounts) {
		return;
	} else if (capsReq) {
		const cap = makeCAP(appDomain, capsReq, userMounts);
		if (cap) {
			return { cap };
		} else {
			return;
		}
	} else {
		return;
	}
}

function makeCAP(
	appDomain: string, section: NonNullable<web3n.caps.DeviceMountFSCAPSetting>, userMounts: Mounter
): MountsIntoOS|undefined {
	switch (section) {
		case 'any':
			return {
				mountFile: async (p, f) => userMounts.mountFile(p, f),
				mountFolder: async (p, f) => userMounts.mountFS(p, f),
				unmountPath: async p => userMounts.unmountPath(p),
				unmountFile: async f => userMounts.unmountFile(f),
				unmountFolder: async f => userMounts.unmountFolder(f)
			};
		case 'app':
			return mountsInSection(['apps', appDomain], userMounts);
		case 'mail':
			return mountsInSection(['mail'], userMounts);
		case 'chat':
			return mountsInSection(['chat'], userMounts);
		default:
			return;
	}
}

function mountsInSection(pathPrefix: string[], userMounts: Mounter): MountsIntoOS {
	return {
		mountFile: async (p, f) => userMounts.mountFile(pathPrefix.concat(p), f),
		mountFolder: async (p, f) => userMounts.mountFS(pathPrefix.concat(p), f),
		unmountPath: async p => userMounts.unmountPath(pathPrefix.concat(p)),
		unmountFile: async f => userMounts.unmountFile(f),
		unmountFolder: async f => userMounts.unmountFolder(f)
	};
}


Object.freeze(exports);