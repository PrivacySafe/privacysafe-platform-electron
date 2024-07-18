/*
 Copyright (C) 2024 3NSoft Inc.
 
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

import { Observable, share, Subject } from "rxjs";
import { isCallerAllowed, makeShellCmdException } from "../../lib-common/manifest-utils";

type StartAppWithParams = web3n.shell.commands.StartAppWithParams;
type CmdParams = web3n.shell.commands.CmdParams;
type CmdHandlerDef = NonNullable<web3n.caps.GUIComponent['startCmds']>;

export type StartAppWithCmd = (
	callerApp: string, callerComponent: string,
	appDomain: string, cmd: string, ...params: any[]
) => Promise<void>;

export interface CmdsHandler {
	handle(cmd: CmdParams, callerApp: string, callerComponent: string): void,
	canHandleCmd(cmd: string): boolean,
	complete(): void;
	cmd$: Observable<CmdParams>;
}

export function makeAppCmdsCaller(
	startAppWithCmd: StartAppWithCmd,
	callerApp: string, callerComponent: string,
	allowedApps: NonNullable<web3n.caps.ShellCAPsSetting['startAppCmds']>
): StartAppWithParams {
	return async (appDomain, cmd, ...params) => {
		if (!isCmdIn(appDomain, cmd, allowedApps)) {
			throw makeShellCmdException(
				(appDomain === null) ? callerApp : appDomain,
				cmd, {
					callerNotAllowed: true
				}
			);
		}
		await startAppWithCmd(
			callerApp, callerComponent,
			(appDomain === null) ? callerApp : appDomain,
			cmd, ...params
		);
	};
}

function isCmdIn(
	appDomain: string|null, cmd: string,
	allowedCmds: NonNullable<web3n.caps.ShellCAPsSetting['startAppCmds']>
): boolean {
	const allowCmds = ((appDomain === null) ?
		allowedCmds.thisApp : (allowedCmds.otherApps ?
			allowedCmds.otherApps[appDomain] : undefined
		)
	);
	return (
		(typeof allowCmds === 'string') && (allowCmds === cmd)
	) || (
		Array.isArray(allowCmds) && allowCmds.includes(cmd)
	);
}

export function makeCmdsHandler(
	appDomain: string, cmdHandlerDef: CmdHandlerDef
): CmdsHandler {
	const cmdSink = new Subject<CmdParams>();
	const cmd$ = cmdSink.asObservable().pipe(share());
	return {
		cmd$,
		handle: (cmd, callerApp, callerComponent) => {
			if (isCallerAllowed(
				appDomain, cmdHandlerDef[cmd.cmd], callerApp, callerComponent
			)) {
				cmdSink.next(cmd);
			} else {
				throw makeShellCmdException(appDomain, cmd.cmd, {
					callerNotAllowed: true
				});
			}
		},
		canHandleCmd: cmd => !!cmdHandlerDef[cmd],
		complete: () => cmdSink.complete()
	};
}


Object.freeze(exports);