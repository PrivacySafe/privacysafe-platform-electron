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

import { ExposedFn, Caller, EnvelopeBody } from 'core-3nweb-client-lib/build/ipc';
import { toVal } from 'core-3nweb-client-lib/build/ipc-via-protobuf/protobuf-msg';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnyValue, ProtoType, toAnyValue, valOfAny, valOfOpt, Value } from '../../ipc-with-core/protobuf-msg';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { shell_cmd as pb } from '../../protos/shell_cmd.proto';

type ShellCAPs = web3n.shell.ShellCAPs;
type GetStartedCmd = NonNullable<ShellCAPs['getStartedCmd']>;
type WatchStartCmds = NonNullable<ShellCAPs['watchStartCmds']>;
type StartAppWithParams = NonNullable<ShellCAPs['startAppWithParams']>;
type CmdParams = web3n.shell.commands.CmdParams;

const cmdParamsType = ProtoType.for<{
	cmd: string;
	params: AnyValue[];
}>(pb.CmdParams);


namespace getStartedCmd {

	export function wrapService(
		fn: GetStartedCmd
	): ExposedFn {
		return () => {
			const promise = fn()
			.then(cmdParams => {
				if (!cmdParams) { return; }
				const { cmd, params } = cmdParams;
				return cmdParamsType.pack({
					cmd, params: params.map(toAnyValue)
				});
			});
			return { promise };
		}
	}

	export function makeCaller(
		caller: Caller, path: string[]
	): GetStartedCmd {
		return async () => {
			const buf = await caller.startPromiseCall(path, undefined);
			if (!buf || (buf.length === 0)) { return; }
			const { cmd, params } = cmdParamsType.unpack(buf);
			return { cmd, params: params.map(valOfAny) };
		};
	}

}
Object.freeze(getStartedCmd);


namespace watchStartCmds {

	export function wrapService(
		fn: WatchStartCmds
	): ExposedFn {
		return () => {
			const s = new Subject<CmdParams>();
			const obs = s.asObservable().pipe(
				map(({ cmd, params }) => cmdParamsType.pack({
					cmd, params: params.map(toAnyValue)
				}))
			);
			const onCancel = fn(s);
			return { obs, onCancel };
		};
	}

	export function makeCaller(
		caller: Caller, path: string[]
	): WatchStartCmds {
		return obs => {
			const s = new Subject<EnvelopeBody>();
			const unsub = caller.startObservableCall(path, undefined, s);
			s.asObservable()
			.pipe(
				map(buf => {
					const { cmd, params } = cmdParamsType.unpack(buf);
					return {
						cmd, params: params.map(valOfAny)
					};
				})
			)
			.subscribe(toRxObserver(obs));
			return unsub;
		};
	}

}
Object.freeze(watchStartCmds);


namespace startAppWithParams {

	const requestType = ProtoType.for<{
		appDomain: Value<string>|undefined;
		cmd: string;
		params: AnyValue[];
	}>(pb.StartAppWithParamsRequestBody);

	export function wrapService(
		fn: StartAppWithParams
	): ExposedFn {
		return bytes => {
			const { appDomain, cmd, params } = requestType.unpack(bytes);
			const paramValues = params.map(valOfAny);
			const appDomainValue = valOfOpt(appDomain);
			const promise = fn(
				(appDomainValue === undefined) ? null : appDomainValue,
				cmd, ...paramValues
			);
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, path: string[]
	): StartAppWithParams {
		return async (appDomain, cmd, ...params) => {
			const req = requestType.pack({
				appDomain: (
					(typeof appDomain !== 'string') ? undefined : toVal(appDomain)
				),
				cmd,
				params: params.map(toAnyValue)
			});
			await caller.startPromiseCall(path, req);
		};
	}

}
Object.freeze(startAppWithParams);


export const exposeGetStartedCmdCAP = getStartedCmd.wrapService;
export const makeGetStartedCmd = getStartedCmd.makeCaller;
export const exposeWatchStartCmdsCAP = watchStartCmds.wrapService;
export const makeWatchStartCmds = watchStartCmds.makeCaller;
export const exposeStartAppWithParams = startAppWithParams.wrapService;
export const makeStartAppWithParams = startAppWithParams.makeCaller;


Object.freeze(exports);