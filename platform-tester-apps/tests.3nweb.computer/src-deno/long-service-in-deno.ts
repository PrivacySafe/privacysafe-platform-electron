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

/// <reference path="../../../ts-code/api-defs/w3n.d.ts" />

import { Service } from './service.ts';

declare const w3n: web3n.testing.CommonW3N;

const longNonGuiSrvInThisApp = 'LongServiceInDeno';

// we start listening with a time gap to test initially buffered calls
setTimeout(() => {

	const stopListening = w3n.rpc!.exposeService!(longNonGuiSrvInThisApp, {

		next: async connection => {
			const syncFS = await w3n.storage!.getAppSyncedFS();
			const localFS = await w3n.storage!.getAppLocalFS();
			Service.singleton = new Service(connection, syncFS, localFS);
		},

		complete: () => w3n.closeSelf!(),

		error: async err => {
			await w3n.testStand.log(
				'error', `Error in listening for incoming connections`, err);
			w3n.closeSelf!();
		}

	});

}, 100);
