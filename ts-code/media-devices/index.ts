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

import { platform } from "os";
import { GUIComponent } from "../app-n-components/gui-component";
import { AppSetter } from "../core/caps";
import { hasScreenCapturePermission, openSystemPreferences } from "mac-screen-capture-permissions";
import { logWarning } from "../confs";

type MediaDevices = web3n.media.MediaDevices;

export function makeProxyToSelectDisplayMediaHandler(): {
	cap: MediaDevices['setSelectDisplayMediaForCaptureHandler'];
	setApp: AppSetter;
} {
	let guiApp: GUIComponent;
	return {
		cap: async handler => guiApp.setHandlerInSession(
			'selectMediaForCapture', handler
		),
		setApp: (app: GUIComponent) => {
			guiApp = app;
		}
	};
}

export async function isAudioCaptureAvailable(): Promise<boolean> {
	return (platform() === 'win32');
}

export async function ensureDeviceAllowsScreenCapture(): Promise<boolean> {
	if (platform() !== 'darwin') {
		return true;
	}
	let hasPermission = hasScreenCapturePermission();
	if (!hasPermission) {
		debugLogOnMac(`1st call to hasScreenCapturePermission() returned ${hasPermission}, now opening system preferences`);
		await openSystemPreferences();
		hasPermission = hasScreenCapturePermission();
		debugLogOnMac(`2nd call to hasScreenCapturePermission() returned ${hasPermission}`);
	}
	return hasPermission;
}

// DEBUG logging function
function debugLogOnMac(msg: string): void {
	logWarning(`DEBUG LOG: ${msg}`).catch(() => {});
	console.log(`DEBUG LOG: ${msg}
	`);
}
