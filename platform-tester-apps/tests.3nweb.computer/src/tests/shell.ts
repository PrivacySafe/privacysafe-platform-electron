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

import { getOneMsgFromProcess } from "./libs-for-tests/proc-messaging.js";
import { deepEqual } from "../lib-common/json-utils.js";

interface CmdEcho {
	cmdCount: number;
	cmd: web3n.shell.commands.CmdParams;
}

describe(`shell.userNotifications`, () => {

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.shell).toBe('object');
		expect(typeof w3n.shell!.userNotifications).toBe('object');
		expect(typeof w3n.shell!.userNotifications!.addNotification).toBe('function');
		expect(typeof w3n.shell!.userNotifications!.removeNotification).toBe('function');
		expect(typeof w3n.shell!.userNotifications!.watch).toBe('function');
	});

});

describe(`shell.startAppWithParams`, () => {

	const timeout = 15000;
	const testCommTimeout = timeout - 1000;

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.shell).toBe('object');
		expect(typeof w3n.shell!.startAppWithParams).toBe('function');
	});

	it(`passes commands to this app's components`, async () => {
		const fstCmdEchoPromise = getOneMsgFromProcess<CmdEcho>(
			undefined, undefined, '/started-by-command.html', testCommTimeout
		);
		const c1 = 'command-1';
		const cmdArgs = [
			'arg1', 2,
			[ 'array', 'argument' ],
			{ 'object': 'field' }
		];

		await w3n.shell!.startAppWithParams!(null, c1, ...cmdArgs);
		const fstCmdEcho = await fstCmdEchoPromise;

		expect(fstCmdEcho.cmdCount).toBe(1);
		expect(fstCmdEcho.cmd.cmd).toBe(c1);
		for (let i=0; i<cmdArgs.length; i+=1) {
			expect(deepEqual(
				cmdArgs[i],
				fstCmdEcho.cmd.params[i]
			)).toBeTruthy();
		}

		const sndCmdEchoPromise = getOneMsgFromProcess<CmdEcho>(
			undefined, undefined, '/started-by-command.html', testCommTimeout
		);
		const c2 = 'command-2';
		await w3n.shell!.startAppWithParams!(null, c2, ...cmdArgs);
		const sndCmdEcho = await sndCmdEchoPromise;

		expect(sndCmdEcho.cmdCount).toBe(2);
		expect(sndCmdEcho.cmd.cmd).toBe(c2);
		for (let i=0; i<cmdArgs.length; i+=1) {
			expect(deepEqual(
				cmdArgs[i],
				sndCmdEcho.cmd.params[i]
			)).toBeTruthy();
		}

	}, timeout);

	const otherApp = 'start-by-cmd.3nweb.computer';

	it(`passes commands to other app`, async () => {
		const fstCmdEchoPromise = getOneMsgFromProcess<CmdEcho>(
			undefined, otherApp, '/index.html', testCommTimeout
		);
		const c1 = 'app-cmd-1';
		const cmdArgs = [
			'arg1', 2,
			[ 'array', 'argument' ],
			{ 'object': 'field' }
		];

		await w3n.shell!.startAppWithParams!(otherApp, c1, ...cmdArgs);
		const fstCmdEcho = await fstCmdEchoPromise;

		expect(fstCmdEcho.cmdCount).toBe(1);
		expect(fstCmdEcho.cmd.cmd).toBe(c1);
		for (let i=0; i<cmdArgs.length; i+=1) {
			expect(deepEqual(
				cmdArgs[i],
				fstCmdEcho.cmd.params[i]
			)).toBeTruthy();
		}

		const sndCmdEchoPromise = getOneMsgFromProcess<CmdEcho>(
			undefined, otherApp, '/index.html', testCommTimeout
		);
		const c2 = 'app-cmd-2';
		await w3n.shell!.startAppWithParams!(otherApp, c2, ...cmdArgs);
		const sndCmdEcho = await sndCmdEchoPromise;

		expect(sndCmdEcho.cmdCount).toBe(2);
		expect(sndCmdEcho.cmd.cmd).toBe(c2);
		for (let i=0; i<cmdArgs.length; i+=1) {
			expect(deepEqual(
				cmdArgs[i],
				sndCmdEcho.cmd.params[i]
			)).toBeTruthy();
		}

	}, timeout);

});

export const tests = true; // to mark this as module in absence of import(s)
