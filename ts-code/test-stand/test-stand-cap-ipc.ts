/*
 Copyright (C) 2021 - 2022 3NSoft Inc.
 
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

import { ExposedFn, Caller, ExposedObj, exposeLogger, makeLogCaller, EnvelopeBody } from 'core-3nweb-client-lib/build/ipc';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProtoType, strValType, toVal, unpackInt, packInt, Value, toOptVal, valOfOpt } from '../ipc-with-core/protobuf-msg';
import { test_stand as pb } from '../protos/test_stand.proto';

type StartupTestStand = web3n.testing.StartupTestStand;
type TestStand = web3n.testing.TestStand;

export function exposeStartupTestStandCAP(
	cap: StartupTestStand
): ExposedObj<StartupTestStand> {
	return {
		log: exposeLogger(cap.log),
		record: record.wrapService(cap.record),
		exitAll: exitAll.wrapService(cap.exitAll),
		staticTestInfo: staticTestInfo.wrapService(cap.staticTestInfo),
	};
}

export function exposeTestStandCAP(cap: TestStand): ExposedObj<TestStand> {
	return {
		log: exposeLogger(cap.log),
		record: record.wrapService(cap.record),
		exitAll: exitAll.wrapService(cap.exitAll),
		staticTestInfo: staticTestInfo.wrapService(cap.staticTestInfo),
		idOfTestUser: idOfTestUser.wrapService(cap.idOfTestUser),
		sendMsgToOtherLocalTestProcess:
			sendMsgToOtherLocalTestProcess.wrapService(
				cap.sendMsgToOtherLocalTestProcess
			),
		observeMsgsFromOtherLocalTestProcess:
			observeMsgsFromOtherLocalTestProcess.wrapService(
				cap.observeMsgsFromOtherLocalTestProcess
			),
	};
}

export function makeStartupTestStandCaller(
	caller: Caller, objPath: string[]
): StartupTestStand {
	return {
		log: makeLogCaller(caller, objPath.concat('log')),
		record: record.makeCaller(caller, objPath),
		exitAll: exitAll.makeCaller(caller, objPath),
		staticTestInfo: staticTestInfo.makeCaller(
			caller, objPath) as StartupTestStand['staticTestInfo'],
	};
}

export function makeTestStandCaller(
	caller: Caller, objPath: string[]
): TestStand {
	return {
		log: makeLogCaller(caller, objPath.concat('log')),
		record: record.makeCaller(caller, objPath),
		exitAll: exitAll.makeCaller(caller, objPath),
		staticTestInfo: staticTestInfo.makeCaller(caller, objPath),
		idOfTestUser: idOfTestUser.makeCaller(caller, objPath),
		sendMsgToOtherLocalTestProcess: sendMsgToOtherLocalTestProcess.makeCaller(
			caller, objPath
		),
		observeMsgsFromOtherLocalTestProcess:
			observeMsgsFromOtherLocalTestProcess.makeCaller(caller, objPath),
	};
}


namespace exitAll {

	export function wrapService(fn: StartupTestStand['exitAll']): ExposedFn {
		return () => {
			const promise = fn();
			return { promise };
		}
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): StartupTestStand['exitAll'] {
		const path = objPath.concat('exitAll');
		return () => caller.startPromiseCall(path, undefined)
		.then(noop);
	}

}
Object.freeze(exitAll);


function noop() {}


namespace record {

	interface Request {
		type: web3n.testing.TestRecordType,
		msg?: string;
	}

	const requestType = ProtoType.for<Request>(pb.RecordRequestBody);

	export function wrapService(fn: StartupTestStand['record']): ExposedFn {
		return (reqBody: Buffer) => {
			const { type, msg } = requestType.unpack(reqBody);
			const promise = fn(type, msg);
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): StartupTestStand['record'] {
		const path = objPath.concat('record');
		return (type, msg) => {
			const req: Request = { type, msg };
			return caller.startPromiseCall(path, requestType.pack(req))
			.then(noop);
		};
	}

}
Object.freeze(record);


namespace staticTestInfo {

	export function wrapService(
		fn: StartupTestStand['staticTestInfo'] | TestStand['staticTestInfo']
	): ExposedFn {
		return () => {
			const promise = fn()
			.then(info => strValType.pack(toVal(JSON.stringify(info))));
			return { promise };
		}
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): TestStand['staticTestInfo'] {
		const path = objPath.concat('staticTestInfo');
		return () => caller.startPromiseCall(path, undefined)
		.then(buf => JSON.parse(strValType.unpack(buf).value));
	}

}
Object.freeze(staticTestInfo);


namespace idOfTestUser {

	export function wrapService(fn: TestStand['idOfTestUser']): ExposedFn {
		return buf => {
			const promise = fn(unpackInt(buf))
			.then(userId => strValType.pack(toVal(userId)));
			return { promise };
		}
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): TestStand['idOfTestUser'] {
		const path = objPath.concat('idOfTestUser');
		return userNum => caller.startPromiseCall(path, packInt(userNum))
		.then(buf => strValType.unpack(buf).value);
	}

}
Object.freeze(idOfTestUser);


namespace sendMsgToOtherLocalTestProcess {

	const requestType = ProtoType.for<{
		userNum?: Value<number>;
		appDomain?: Value<string>;
		appComponent?: Value<string>;
		msgJson: string;
	}>(pb.SendMsgToOtherLocalTestProcessRequestBody);

	export function wrapService(
		fn: TestStand['sendMsgToOtherLocalTestProcess']
	): ExposedFn {
		return buf => {
			const {
				userNum, appDomain, appComponent, msgJson
			} = requestType.unpack(buf);
			const msg = JSON.parse(msgJson);
			const promise = fn(
				valOfOpt(userNum), valOfOpt(appDomain), valOfOpt(appComponent), msg
			);
			return { promise };
		}
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): TestStand['sendMsgToOtherLocalTestProcess'] {
		const path = objPath.concat('sendMsgToOtherLocalTestProcess');
		return (userNum, appDomain, appComponent, msg) => caller.startPromiseCall(
			path,
			requestType.pack({
				userNum: toOptVal(userNum),
				appDomain: toOptVal(appDomain),
				appComponent: toOptVal(appComponent),
				msgJson: JSON.stringify(msg)
			}))
		.then(noop);
	}

}
Object.freeze(sendMsgToOtherLocalTestProcess);


namespace observeMsgsFromOtherLocalTestProcess {

	const requestType = ProtoType.for<{
		userNum?: Value<number>;
		appDomain?: Value<string>;
		appComponent?: Value<string>;
	}>(pb.ObserveOtherTestProcessRequestBody);

	export function wrapService(
		fn: TestStand['observeMsgsFromOtherLocalTestProcess']
	): ExposedFn {
		return buf => {
			const { userNum, appDomain, appComponent } = requestType.unpack(buf);
			const s = new Subject<any>();
			const obs = s.asObservable().pipe(
				map(msg => strValType.pack(toVal(JSON.stringify(msg))))
			);
			const onCancel = fn(
				valOfOpt(userNum), valOfOpt(appDomain), valOfOpt(appComponent), s
			);
			return { obs, onCancel };
		}
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): TestStand['observeMsgsFromOtherLocalTestProcess'] {
		const path = objPath.concat('observeMsgsFromOtherLocalTestProcess');
		return (userNum, appDomain, appComponent, obs) => {
			const s = new Subject<EnvelopeBody>();
			const unsub = caller.startObservableCall(
				path, requestType.pack({
					userNum: toOptVal(userNum),
					appDomain: toOptVal(appDomain),
					appComponent: toOptVal(appComponent)
				}), s);
			s.subscribe({
				next: buf => {
					if (obs.next) {
						obs.next(JSON.parse(strValType.unpack(buf).value));
					}
				},
				complete: obs.complete,
				error: obs.error
			});
			return unsub;
		};
	}

}
Object.freeze(observeMsgsFromOtherLocalTestProcess);


Object.freeze(exports);