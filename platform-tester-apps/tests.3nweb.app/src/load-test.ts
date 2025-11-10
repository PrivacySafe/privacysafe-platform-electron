/*
 Copyright (C) 2021 - 2025 3NSoft Inc.
 
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
import { addMsgToPage, ClosingParams } from './test-page-utils.js';

declare const w3n: web3n.testing.CommonW3N;

(async () => {
	const { userId, userNum } = await w3n.testStand.staticTestInfo();
	if (userNum == 1) {
		(window as any).preTestProc = sleep(1000)
		.then(() => {
			(window as any).preTestProc = undefined;
			w3n.testStand.focusThisWindow!();
		});
		(window as any).closeW3NAfterTests = {
			waitSecs: 15
		} as ClosingParams;
		addMsgToPage(`Main test user '${userId}'`);
		document.getElementById('cancel-autoclose')!.hidden = false;
		await import('./tests/common-caps.js');
		await import('./tests/mailerid.js');
		await import('./tests/storage.js');
		await import('./tests/keyrings.js');
		await import('./tests/asmail.js');
		await import('./tests/rpc/thisApp.js');
		await import('./tests/services/fs-usage.js');
		await import('./tests/rpc/transferable-objects.js');
		await import('./tests/shell.js');
		await import('./tests/fs-resource.js');
		await import('./tests/system.js');
	} else {
		(window as any).skipW3NTests = true;
		addMsgToPage(`Secondary test user '${userId}'`);
		const { setupSecondUserASMailTestReactions } = await import(
			'./tests/asmail/second-user.js'
		);
		const { setupSecondUserRPCTestReactions } = await import(
			'./tests/rpc/second-user.js'
		);
		await setupSecondUserASMailTestReactions();
		setupSecondUserRPCTestReactions();
	}
})().catch(err =>{
	addMsgToPage(`❌ Error occured in test loading: ${err.stack}`);
});
