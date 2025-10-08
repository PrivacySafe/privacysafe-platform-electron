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

export const appUrlSchema = 'w3n-app';

export function ensureAppUrlProtocolIsSetInOS(): void {
	if (app.isDefaultProtocolClient(appUrlSchema)) {
		console.log(`Protocol schema ${appUrlSchema} is already set`);
		return;
	}
	const protocolSet = app.setAsDefaultProtocolClient(appUrlSchema);
	console.log(`Call to set protocol schema ${appUrlSchema} returned ${protocolSet}`);
}
