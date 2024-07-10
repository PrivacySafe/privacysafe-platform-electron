/*
 Copyright (C) 2022 3NSoft Inc.
 
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

import { UserAppInfo } from ".";
import { stringOfB64CharsSync } from "../lib-common/random-node";

export interface ExtCmd {
	token: string;
	type: 'open-app';
	userId: string;
	app: string;
	component?: string;
}


export class ExternallyTriggeredCmds {

	private readonly cmds = new Map<string, ExtCmd>();
	private cmdsViewByUserAndApp = new Map<string, Map<string, ExtCmd>>();

	constructor() {
		Object.seal(this);
	}

	findCmd(cmdToken: string): ExtCmd|undefined {
		return this.cmds.get(cmdToken);
	}

	getAll(): Map<string, Map<string, ExtCmd>> {
		return this.cmdsViewByUserAndApp;
	}

	addUserCmds(userId: string, apps: UserAppInfo[]): void {
		for (const app of apps) {
			const cmd = this.makeCmd(userId, app);
			this.cmds.set(cmd.token, cmd);
		}
		this.updateIndexedView();
	}

	deleteUserCmds(userId: string): void {
		const userCmds = this.cmdsViewByUserAndApp.get(userId);
		if (!userCmds) { return; }
		for (const cmd of userCmds.values()) {
			this.cmds.delete(cmd.token);
		}
		this.updateIndexedView();
	}

	addUserAppCmd(userId: string, app: UserAppInfo): boolean {
		const existingCmd = this.cmdsViewByUserAndApp.get(userId)?.get(app.id);
		if (existingCmd) {
			return false;
		} else {
			const cmd = this.makeCmd(userId, app);
			this.cmds.set(cmd.token, cmd);
			this.updateIndexedView();
			return true;
		}
	}

	deleteAppCmds(userId: string, app: string): void {
		const cmd = this.cmdsViewByUserAndApp.get(userId)?.get(app);
		if (!cmd) { return; }
		this.cmds.delete(cmd.token);
		this.updateIndexedView();
	}

	private updateIndexedView(): void {
		this.cmdsViewByUserAndApp = new Map<string, Map<string, ExtCmd>>();
		for (const cmd of this.cmds.values()) {
			let byApp = this.cmdsViewByUserAndApp.get(cmd.userId);
			if (!byApp) {
				byApp = new Map<string, ExtCmd>;
				this.cmdsViewByUserAndApp.set(cmd.userId, byApp);
			}
			byApp.set(cmd.app, cmd);
		}
	}

	private makeCmd(userId: string, appInfo: UserAppInfo): ExtCmd {
		const { id: app, isDevApp } = appInfo;
		return {
			token: this.generateNewToken(),
			type: 'open-app',
			userId,
			app
		};
	}

	private generateNewToken(): string {
		let token: string;
		do {
			token = stringOfB64CharsSync(24).replace(/[\/=\+]/g, '');
		} while (this.cmds.has(token));
		return token;
	}

}
Object.freeze(ExternallyTriggeredCmds.prototype);
Object.freeze(ExternallyTriggeredCmds);


Object.freeze(exports);