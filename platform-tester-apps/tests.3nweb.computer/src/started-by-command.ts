/*
 Copyright (C) 2024 - 2025 3NSoft Inc.
 
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

const mainTestAppComponent = '/main-tester.html';

const fstCmd = await w3n.shell!.getStartedCmd!();
addMsgToPage(`w3n.shell.getStartedCmd is`);
addMsgToPage(JSON.stringify(fstCmd, undefined, 2));

let cmdCount = (!!fstCmd ? 1 : 0);

const unsub = w3n.shell!.watchStartCmds!({
	next: sndCmd => {
		cmdCount += 1;
		addMsgToPage(`Received second command:`);
		addMsgToPage(JSON.stringify(sndCmd, undefined, 2));
		unsub();
		addMsgToPage(`Will close soon`);
		setTimeout(() => w3n.closeSelf!(), 1000);
		w3n.testStand.sendMsgToOtherLocalTestProcess(
			undefined, undefined, mainTestAppComponent, { cmdCount, cmd: sndCmd }
		);
	},
	error: err => {},
	complete: () => {}
});

await w3n.testStand.sendMsgToOtherLocalTestProcess(
	undefined, undefined, mainTestAppComponent, { cmdCount, cmd: fstCmd }
);

