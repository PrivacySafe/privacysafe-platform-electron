/*
 Copyright (C) 2026 3NSoft Inc.
 
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

import { sleep } from './lib-common/processes/sleep.js';
import { addMsgToPage } from './test-page-utils.js';
import { stringifyErr } from './lib-common/exceptions/error.js';

type WritableFS = web3n.files.WritableFS;

addMsgToPage(`Providing CAPs`);

// we start listening with a time gap to test initially buffered calls
setTimeout(async () => {
	try {

		const syncFS = (await w3n.storage!.getUserFS!('synced'))!.item as WritableFS;

		w3n.rpc?.provideCAPtoSystem!(
			'w3n.shell.fileDialogs.openFileDialog',
			async (title, btnLabel, multiSelection, filters) => {
				addMsgToPage(`w3n.shell.fileDialogs.openFileDialog is called with arguments ${
					JSON.stringify({ title, btnLabel, multiSelection, filters }, undefined, 2)
				}`);
				await sleep(1000);
				return [ await syncFS.writableFile(title) ];
			}
		);
		addMsgToPage(`CAP w3n.shell.fileDialogs.openFileDialog is provided to rpc`);

		w3n.rpc?.provideCAPtoSystem!(
			'w3n.shell.fileDialogs.openFolderDialog',
			async (title, btnLabel, multiSelection, filters) => {
				addMsgToPage(`w3n.shell.fileDialogs.openFolderDialog is called with arguments ${
					JSON.stringify({ title, btnLabel, multiSelection, filters }, undefined, 2)
				}`);
				await sleep(1000);
				return [ await syncFS.writableSubRoot(title) ];
			}
		);
		addMsgToPage(`CAP w3n.shell.fileDialogs.openFolderDialog is provided to rpc`);

		w3n.rpc?.provideCAPtoSystem!(
			'w3n.shell.fileDialogs.saveFileDialog',
			async (title, btnLabel, multiSelection, filters) => {
				addMsgToPage(`w3n.shell.fileDialogs.saveFileDialog is called with arguments ${
					JSON.stringify({ title, btnLabel, multiSelection, filters }, undefined, 2)
				}`);
				await sleep(1000);
				return await syncFS.writableFile(title);
			}
		);
		addMsgToPage(`CAP w3n.shell.fileDialogs.saveFileDialog is provided to rpc`);

		w3n.rpc?.provideCAPtoSystem!(
			'w3n.shell.fileDialogs.saveFolderDialog',
			async (title, btnLabel, multiSelection, filters) => {
				addMsgToPage(`w3n.shell.fileDialogs.saveFolderDialog is called with arguments ${
					JSON.stringify({ title, btnLabel, multiSelection, filters }, undefined, 2)
				}`);
				await sleep(1000);
				return await syncFS.writableSubRoot(title);
			}
		);
		addMsgToPage(`CAP w3n.shell.fileDialogs.saveFolderDialog is provided to rpc`);

	} catch (err) {
		addMsgToPage(`❌ ${stringifyErr(err)}`);
	}
}, 100);
