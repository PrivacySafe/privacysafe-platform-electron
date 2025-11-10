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

import { isAutologinAvailableFromOS, lookForAutologinUsers, removeFromAutologin, saveUserKeyForAutologin } from "../../init-proc/autologin";
import { areAddressesEqual } from "../../lib-common/canonical-address";

type UserLoginSettings = web3n.system.UserLoginSettings;
type ProgressCB = web3n.startup.ProgressCB;

export class UserLogin {

	constructor(
		private readonly userId: string,
		private readonly getKeyFromPass: (pass: string, progressCB: ProgressCB) => Promise<Uint8Array|undefined>
	) {
		Object.freeze(this);
	}

	async isAutoLoginSet(): Promise<boolean> {
		if (!isAutologinAvailableFromOS()) {
			return false;
		}
		const setUsers = await lookForAutologinUsers();
		return !!setUsers?.find(({ userId }) => areAddressesEqual(userId, this.userId))
	}

	async removeAutoLogin(): Promise<void> {
		await removeFromAutologin(this.userId);
	}

	async setAutoLogin(password: string, progressCB: ProgressCB): Promise<void> {
		if (!isAutologinAvailableFromOS()) {
			throw `Can't set autologin when it isn't available in OS environment`;
		}
		const key = await this.getKeyFromPass(password, progressCB);
		if (!key) {
			throw `Is password correct?`;
		}
		await saveUserKeyForAutologin({
			userId: this.userId,
			key
		});
	}

	async isAutoLoginAvailable(): Promise<boolean> {
		return isAutologinAvailableFromOS();
	}

	wrapCAP(): UserLoginSettings {
		return {
			isAutoLoginSet: this.isAutoLoginSet.bind(this),
			removeAutoLogin: this.removeAutoLogin.bind(this),
			setAutoLogin: this.setAutoLogin.bind(this),
			isAutoLoginAvailable: this.isAutoLoginAvailable.bind(this),
		}
	}

}
Object.freeze(UserLogin.prototype);
Object.freeze(UserLogin);


Object.freeze(exports);