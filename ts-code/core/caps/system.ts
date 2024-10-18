/*
 Copyright (C) 2020 - 2024 3NSoft Inc.
 
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

type W3N = web3n.system.W3N;
type SysUtils = web3n.system.SysUtils;
type Apps = web3n.system.apps.Apps;
type Platform = web3n.system.platform.Platform;
type RequestedCAPs = web3n.system.RequestedCAPs;

export function makeSystemCAP(
	systemCapFns: SysUtils, capsReq: RequestedCAPs
): W3N['system'] {
	const apps = makeAppsCAP(systemCapFns.apps!, capsReq);
	const platform = makePlatformCAP(systemCapFns.platform!, capsReq);
	if (apps || platform) {
		return {
			apps,
			platform
		};
	}
}

function makeAppsCAP(
	appsCapFns: Apps, capsReq: RequestedCAPs
): SysUtils['apps'] {
	if (capsReq.system?.apps === 'all') {
		return appsCapFns;
	} else if (capsReq.system?.apps) {
		const apps: SysUtils['apps'] = {};
		const appsReq = capsReq.system.apps;
		if (Array.isArray(appsReq)) {
			for (const key of appsReq) {
				apps[key] = appsCapFns[key] as any;
			}
		} else if ((typeof appsReq === 'string') && appsCapFns[appsReq]) {
			const key = appsReq as any;
			apps[key] = appsCapFns[key] as any;
		}
		return ((Object.keys(apps).length > 0) ? apps : undefined);
	}
}

function makePlatformCAP(
	platCapFns: Platform, capsReq: RequestedCAPs
): SysUtils['platform'] {
	if (capsReq.system?.platform === 'all') {
		return platCapFns;
	}
}


Object.freeze(exports);