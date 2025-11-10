/*
 Copyright (C) 2022 - 2023 3NSoft Inc.
 
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
import { logError } from "../confs";
import { MULTI_INSTANCE_FLAG } from "../process-args";
import { DeskTray } from "./desktop-tray";
import { ExtCmd, ExternallyTriggeredCmds as ExternalCmds } from "./external-cmds";
import { FreeDesktopMenu } from "./freedesktop-apps-menu";

export type UserCmd = UserSystemCmd | UserAppOpenCmd |
	'add-user' | 'exit';

export interface UserSystemCmd {
	item: 'logout' | 'close-all-apps';
	userId: string;
}

export interface UserAppOpenCmd {
	app: string;
	userId: string;
}

export interface UserAppInfo {
	name: string;
	id: string;
	isInstalled: boolean;
	isDevApp?: true;
}

export interface AppInfoForUI {}

export type AppInfoGetter = (
	userId: string, appDomain: string
) => Promise<AppInfoForUI>;


export class DesktopUI {

	private tray: DeskTray|undefined = undefined;
	private readonly users = new Map<string, Map<string, UserAppInfo>>();
	private mainMenu: FreeDesktopMenu|undefined = undefined;
	private readonly extCmds = new ExternalCmds();

	constructor(
		private readonly onCmdEvent: (click: UserCmd) => Promise<void>,
		private readonly getAppInfo: AppInfoGetter
	) {
		Object.seal(this);
	}

	async start(): Promise<void> {
		try {
			if (!this.tray) {
				this.setupTray();
				if (!MULTI_INSTANCE_FLAG) {
					await this.setupMainMenu();
				}
			}
		} catch (err) {
			logError(err);
		}
	}

	private setupTray(): void {
		this.tray = new DeskTray();
		this.tray.event$.subscribe(this.onCmdEvent);
		this.tray.updateMenu(this.users);
		if (platform() === 'linux') {
			setInterval(() => this.tray?.resetImage(), 1000).unref();
		}
	}

	private async setupMainMenu(): Promise<void> {
		if (process.platform === 'linux') {
			this.mainMenu = await FreeDesktopMenu.makeIfSystemWithFD(
				this.getAppInfo
			);
		}
	}

	async close(): Promise<void> {
		this.tray?.close();
		await this.mainMenu?.close();
	}

	removeUser(userId: string): void {
		this.users.delete(userId);
		this.extCmds.deleteUserCmds(userId);
		this.updateDesktopElements();
	}

	async addUser(userId: string, apps: UserAppInfo[]): Promise<void> {
		try {
			const userApps = new Map<string, UserAppInfo>();
			for (const app of apps) {
				userApps.set(app.id, app);
			}
			this.users.set(userId, userApps);
			this.extCmds.addUserCmds(userId, apps);
			this.updateDesktopElements();
		} catch (err) {
			logError(err);
		}
	}

	addOrUpdateApp(userId: string, app: UserAppInfo): void {
		const userApps = this.users.get(userId);
		if (!userApps) { return; }
		userApps.set(userId, app);
		this.extCmds.addUserAppCmd(userId, app);
		this.updateDesktopElements();
	}

	uninstallApp(userId: string, appId: string): void {
		const userApps = this.users.get(userId);
		if (!userApps) { return; }
		userApps.delete(appId);
		this.extCmds.deleteAppCmds(userId, appId);
		this.updateDesktopElements();
	}

	private async updateDesktopElements(): Promise<void> {
		try {
			this.tray?.updateMenu(this.users);
			await this.mainMenu?.updateItems(this.extCmds.getAll());
		} catch (err) {
			logError(err);
		}
	}

	findCmd(cmdToken: string): ExtCmd|undefined {
		return this.extCmds.findCmd(cmdToken);
	}

}
Object.freeze(DesktopUI.prototype);
Object.freeze(DesktopUI);


Object.freeze(exports);