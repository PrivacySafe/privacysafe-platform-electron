/*
 Copyright (C) 2022, 2024 - 2026 3NSoft Inc.
 
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

describe(`shell.fileDialogs`, () => {

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.shell).toBe('object');
		expect(typeof w3n.shell!.fileDialogs).toBe('object');
		expect(typeof w3n.shell!.fileDialogs!.openFileDialog).toBe('function');
		expect(typeof w3n.shell!.fileDialogs!.openFolderDialog).toBe('function');
		expect(typeof w3n.shell!.fileDialogs!.saveFileDialog).toBe('function');
		expect(typeof w3n.shell!.fileDialogs!.saveFolderDialog).toBe('function');
	});

	it(`.openFileDialog`, async () => {
		const title = `Pick file ${Date.now()}`;
		const files = (await w3n.shell!.fileDialogs!.openFileDialog?.(title, 'Open', false))!;
		expect(files[0].name).withContext(`test component names file with title`).toBe(title);
		expect(typeof files[0].readTxt).toBe('function');
	});

	it(`.openFolderDialog`, async () => {
		const title = `Pick file ${Date.now()}`;
		const folders = (await w3n.shell!.fileDialogs!.openFolderDialog?.(title, 'Open', false))!;
		expect(folders[0].name).withContext(`test component names folder with title`).toBe(title);
		expect(typeof folders[0].readTxtFile).toBe('function');
	});

	it(`.saveFileDialog`, async () => {
		const title = `Pick file ${Date.now()}`;
		const file = (await w3n.shell!.fileDialogs!.saveFileDialog?.(title, 'Open', ''))!;
		expect(file.name).withContext(`test component names file with title`).toBe(title);
		expect(typeof file.writeTxt).toBe('function');
	});

	it(`.saveFolderDialog`, async () => {
		const title = `Pick file ${Date.now()}`;
		const folder = (await w3n.shell!.fileDialogs!.saveFolderDialog?.(title, 'Open', ''))!;
		expect(folder.name).withContext(`test component names folder with title`).toBe(title);
		expect(typeof folder.writeTxtFile).toBe('function');
	});

});

describe(`shell.startAppWithParams`, () => {

	const timeout = 15000;
	const testCommTimeout = timeout - 1000;

	let cmdProcComponent: string;

	const otherApp = 'start-by-cmd.3nweb.app';
	let otherAppCmdProcComponent: string;

	beforeAll(async () => {
		const uiFF = await w3n.ui.uiFormFactor();
		if (uiFF === 'phone') {
			cmdProcComponent = '/started-by-command-phone.html';
			otherAppCmdProcComponent = '/index-phone.html'
		} else {
			cmdProcComponent = '/started-by-command.html';
			otherAppCmdProcComponent = '/index.html'
		}
	})

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.shell).toBe('object');
		expect(typeof w3n.shell!.startAppWithParams).toBe('function');
	});

	it(`passes commands to this app's components`, async () => {
		const fstCmdEchoPromise = getOneMsgFromProcess<CmdEcho>(
			undefined, undefined, cmdProcComponent, testCommTimeout
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
			undefined, undefined, cmdProcComponent, testCommTimeout
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

	it(`passes commands to other app`, async () => {
		const fstCmdEchoPromise = getOneMsgFromProcess<CmdEcho>(
			undefined, otherApp, otherAppCmdProcComponent, testCommTimeout
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
			undefined, otherApp, otherAppCmdProcComponent, testCommTimeout
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
