/*
 Copyright (C) 2016 - 2024 3NSoft Inc.
 
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

/**
 * This script starts electron framework and sets up main process.
 */

import { SKIP_APP_ERR_DIALOG_FLAG, MULTI_INSTANCE_FLAG, TEST_STAND_CONF, devToolsFromARGs, cmdTokenFromCli, SOCKS5_PROXY } from './process-args';
import { app, dialog } from 'electron';
import { InitProc } from './init-proc';
import { registerAllProtocolShemas } from "./electron/protocols";
import { fromEvent, lastValueFrom } from 'rxjs';
import { appDir, logError, recordUnhandledRejectionsInProcess, SIGNUP_URL, utilDir } from './confs';
import { take } from 'rxjs/operators';
import { makeCoreDriver } from './core/core-driver';
import { clearDefaultWindowMenu } from './window-utils/window-menu';
import { mkdirSync } from 'fs';
import { sleep } from './lib-common/processes';
import { EventEmitter } from 'events';

EventEmitter.defaultMaxListeners = 100;

// The reason for changing this process' work directory is that down the line
// unix sockets are used, but these are limited in length for historic reasons.
// Work around this limitation is in having all processes working directories
// in our own data and use relative paths whenever it is necessary.
mkdirSync(utilDir, { recursive: true });
process.chdir(utilDir);

if (SOCKS5_PROXY) {
	app.commandLine.appendSwitch('proxy-server', `socks5://${SOCKS5_PROXY}`);
}

function setupAndStartMainInstance(): InitProc {

	registerAllProtocolShemas();

	const init = new InitProc(
		makeCoreDriver,
		{
			signUpUrl: SIGNUP_URL,
			dataDir: appDir
		},
		devToolsFromARGs(),
		TEST_STAND_CONF
	);

	// Removing default menu
	clearDefaultWindowMenu();

	// Opening process
	lastValueFrom(fromEvent(app, 'ready').pipe(take(1)))
	.then(async () => {

		recordUnhandledRejectionsInProcess();

		// Prevent closing when all windows are closed by setting listener
		app.on('window-all-closed', () => {});

		try {
			await init.boot();
		} catch (err) {
			await logError(err);
			if (!SKIP_APP_ERR_DIALOG_FLAG) {
				dialog.showErrorBox(
					`Restart 3NWeb application`,
					`Error occured on 3NWeb core's initialization. Please restart application.`);
			}
			await init.exit(1);
			return;
		}

		process.on('SIGINT', () => init.exit(0));
		process.on('SIGTERM', () => init.exit(0));

	});

	return init;
}

try {

	// XXX
	// Use if OPEN_APP_CMD to open only single app, talking via socket.
	// Note that caller should give --data-dir (always?).

	if (MULTI_INSTANCE_FLAG) {
		setupAndStartMainInstance();
	} else {
		const isFstInstance = app.requestSingleInstanceLock();
		if (isFstInstance) {
			app.on('second-instance', async (event, argv, workDir) => {
				const cmdToken = cmdTokenFromCli(argv);
				if (cmdToken && !init.runCmd(cmdToken)) {
					await init.openAllLaunchers();
				}
			});
			const init = setupAndStartMainInstance();
		} else {
			sleep(300).then(() => app.quit());
		}
	}

} catch (err) {
	console.error(`\n❌ Error occured during loading`);
	console.error(err);
	process.exit(-1);
}