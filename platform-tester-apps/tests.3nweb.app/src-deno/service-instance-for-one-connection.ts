/*
 Copyright (C) 2022, 2024 3NSoft Inc.
 
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
import { sleep } from './sleep.ts';

declare const w3n: web3n.testing.CommonW3N;

const nonGuiSrvInThisApp = 'ServiceInDeno';

const syncFS = await w3n.storage!.getAppSyncedFS();
const localFS = await w3n.storage!.getAppLocalFS();

// we start listening with a delay to test initially buffered/awaiting calls
await sleep(100);

const stopListening = w3n.rpc!.exposeService!(nonGuiSrvInThisApp, {

	next: async connection => {
		// note parameter 0 tells service to closeSelf() when connection closes
		Service.singleton = new Service(syncFS, localFS, 0);
		Service.singleton.handleConnection(connection);
		stopListening(); // we expect to serve only one connection
	},

	complete: () => w3n.closeSelf!(),

	error: async err => {
		await w3n.testStand.log(
			'error', `Error in listening for incoming connections`, err
		);
		w3n.closeSelf!();
	}

});
