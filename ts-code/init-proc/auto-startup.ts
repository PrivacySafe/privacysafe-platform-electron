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

import { app } from "electron";
import { platform } from "os";
import { SKIP_DASH_AT_AUTOLOGIN_FLAG } from "../process-args";
import { logWarning } from "../confs";

type AutoStartup = web3n.system.AutoStartupSettings;

export function shouldSkipDashboard(): boolean {
	const skipDashboard = SKIP_DASH_AT_AUTOLOGIN_FLAG;
	if (skipDashboard) {
		return true;
	} else if (platform() === 'darwin') {
		const { wasOpenedAtLogin } = app.getLoginItemSettings();
		return wasOpenedAtLogin;
	} else {
		return false;
	}
}

export async function isAutoStartupAvailable(): Promise<boolean> {
	return ((platform() === 'win32') || (platform() === 'darwin'));
}

export async function isAutoStartupSet(): Promise<boolean> {
	const { openAtLogin } = app.getLoginItemSettings();
	return openAtLogin;
}

export async function setAutoStartup(enable: boolean): Promise<void> {
	app.setLoginItemSettings({
		openAtLogin: enable,
		args: [ '--', '--skip-dashboard-on-autologin' ]
	});
	logWarning(`Attepmting to set auto startup to ${enable}. Result is ${JSON.stringify(app.getLoginItemSettings(), null, 2)}`);
}

export function makeAutoStartupCAP(): AutoStartup {
	return {
		isAutoStartupAvailable,
		isAutoStartupSet,
		setAutoStartup
	};
}


Object.freeze(exports);