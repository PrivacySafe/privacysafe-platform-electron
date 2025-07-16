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

import { Tray, Menu, nativeImage, NativeImage } from 'electron';
import { join } from 'path';
import { Subject } from 'rxjs';
import { UserAppInfo, UserCmd } from '.';
import { LAUNCHER_APP_DOMAIN, PLATFORM_NAME } from '../bundle-confs';
import { iconsFolder } from '../confs';


function getTrayIconImage(): NativeImage {
	let trayIconPath: string;
	if (process.platform === 'win32') {
		trayIconPath = join(iconsFolder, '256x256.ico');
	} else if (process.platform === 'darwin') {
		trayIconPath = join(iconsFolder, 'tray', '16x16.png');
	} else {
		trayIconPath = join(iconsFolder, '256x256.png');
	}
	return nativeImage.createFromPath(trayIconPath);
}


export class DeskTray {

	private readonly tray: Tray;
	private closed = false;
	private readonly clicks = new Subject<UserCmd>();
	readonly event$ = this.clicks.asObservable();

	constructor() {
		this.tray = new Tray(getTrayIconImage());
		this.tray.setToolTip(PLATFORM_NAME);
		Object.seal(this);
	}

	close(): void {
		if (!this.closed) {
			this.closed = true;
			this.clicks.complete();
			this.tray.destroy();
		}
	}

	updateMenu(userApps: Map<string, Map<string, UserAppInfo>>): void {
		if (this.closed) { return; }
		let menuItems: Electron.MenuItemConstructorOptions[];
		if (userApps.size === 0) {
			menuItems = this.noUser();
		} else if (userApps.size === 1) {
			const [ userId, apps ] = Array.from(userApps.entries())[0];
			menuItems = this.singleUser(userId, toArr(apps));
		} else {
			menuItems = this.multiUser(userApps);
		}
		this.tray.setContextMenu(Menu.buildFromTemplate(menuItems));	
	}

	private noUser(): Electron.MenuItemConstructorOptions[] {
		return this.commonCmdItems();
	}

	private singleUser(
		userId: string, apps: UserAppInfo[]
	): Electron.MenuItemConstructorOptions[] {
		const { appItems, cmdItems } = this.itemsForUser(userId, apps);
		return [
			...appItems,
			{ type: 'separator' },
			{ label: userId, submenu: cmdItems },
			{ type: 'separator' },
			{ label: PLATFORM_NAME, submenu: this.commonCmdItems() }
		];
	}

	private multiUser(
		userApps: Map<string, Map<string, UserAppInfo>>
	): Electron.MenuItemConstructorOptions[] {
		const items: Electron.MenuItemConstructorOptions[] = [];
		for (const [ userId, apps ] of userApps.entries()) {
			const { appItems, cmdItems } = this.itemsForUser(userId, toArr(apps));
			items.push(
				{ label: userId, submenu: [
					...appItems, { type: 'separator' }, ...cmdItems
				] },
				{ type: 'separator' }
			);
		}
		items.push({ label: PLATFORM_NAME, submenu: this.commonCmdItems() });
		return items;
	}

	private itemsForUser(userId: string, apps: UserAppInfo[]): {
		appItems: Electron.MenuItemConstructorOptions[];
		cmdItems: Electron.MenuItemConstructorOptions[];
	} {
		const appItems: Electron.MenuItemConstructorOptions[] = [
			{
				label: 'Dashboard',
				click: () => this.clicks.next({ userId, app: LAUNCHER_APP_DOMAIN })
			}
		];
		apps = apps.filter(({ id }) => (id !== LAUNCHER_APP_DOMAIN));
		for (const app of apps) {
			appItems.push({
				label: (app.isDevApp ? `${app.name} 🛠️ dev app` : app.name),
				click: () => this.clicks.next({ userId, app: app.id })
			})
		}
		const cmdItems: Electron.MenuItemConstructorOptions[] = [
			{
				label: `Close Apps`,
				click: () => this.clicks.next({ userId, item: 'close-all-apps' })
			},
			{
				label: `Sign Out`,
				click: () => this.clicks.next({ userId, item: 'logout' })
			}
		];
		return { appItems, cmdItems };
	}

	private commonCmdItems(): Electron.MenuItemConstructorOptions[] {
		return [
			{
				label: `Add Account`,
				click: () => this.clicks.next('add-user')
			},
			{
				label: `Exit`,
				click: () => this.clicks.next('exit')
			}
		];
	}

}
Object.freeze(DeskTray.prototype);
Object.freeze(DeskTray);


function toArr(apps: Map<string, UserAppInfo>): UserAppInfo[] {
	const arr = Array.from(apps.values());
	arr.sort((a, b) => {
		if (a.id < b.id) {
			return -1;
		} else if (a.id > b.id) {
			return 1;
		} else {
			return 0;
		}
	});
	return arr;
}


Object.freeze(exports);