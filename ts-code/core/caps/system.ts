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
type SystemMonitor = web3n.system.monitor.SystemMonitor;
type RequestedCAPs = web3n.system.RequestedCAPs;

export function makeSystemCAP(
	makeSystemCapFns: () => SysUtils, sysReq: RequestedCAPs['system']
): W3N['system'] {
	if (!sysReq) {
		return;
	}
	const systemCapFns = makeSystemCapFns();
	const apps = makeAppsCAP(systemCapFns.apps!, sysReq);
	const platform = makePlatformCAP(systemCapFns.platform!, sysReq);
	const monitor = makeSystemMonitorCAP(systemCapFns.monitor!, sysReq);
	if (apps || platform || monitor) {
		return {
			apps,
			platform,
			monitor
		};
	}
}

function makeAppsCAP(
	appsCapFns: Apps, sysReq: NonNullable<RequestedCAPs['system']>
): SysUtils['apps'] {
	if (sysReq.apps === 'all') {
		return appsCapFns;
	} else if (sysReq.apps) {
		const apps: SysUtils['apps'] = {};
		const appsReq = sysReq.apps;
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
	platCapFns: Platform, sysReq: NonNullable<RequestedCAPs['system']>
): SysUtils['platform'] {
	if (sysReq.platform === 'all') {
		return platCapFns;
	}
}

function makeSystemMonitorCAP(
	sysMonCapFns: SystemMonitor, sysReq: NonNullable<RequestedCAPs['system']>
): SysUtils['monitor'] {
	if (sysReq.monitor === 'all') {
		return sysMonCapFns;
	}
}


Object.freeze(exports);