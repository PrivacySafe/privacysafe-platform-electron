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

import { addMsgToPage } from './test-page-utils.js';
import { Service } from './service.js';

const guiLongSrvInThisApp = 'LongDialog';

addMsgToPage(`Long service's window`);

// we start listening with a time gap to test initially buffered calls
setTimeout(async () => {

	const syncFS = await w3n.storage!.getAppSyncedFS();
	const localFS = await w3n.storage!.getAppLocalFS();
	Service.singleton = new Service(syncFS, localFS, 5000);

	w3n.rpc!.exposeService!(guiLongSrvInThisApp, {

		next: async connection => {
			Service.singleton!.handleConnection(connection);
			addMsgToPage(`Instance UID: ${Service.singleton!.uid}`);
		},

		complete: () => {
			w3n.closeSelf!()
		},

		error: async err => {
			await w3n.testStand.log(
				'error', `Error in listening for incoming connections`, err
			);
			w3n.closeSelf!();
		}

	});

}, 100);
