/*
 Copyright (C) 2024 - 2026 3NSoft Inc.
 
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

import { defer, Deferred } from "../../lib-common/processes/deferred.js";

export function getOneMsgFromProcess<T>(
	userNum: number|undefined, appDomain: string|undefined,
	component: string|undefined,
	timeout = 4900
): Promise<T> {

	// XXX redo this with getMsgsFromProcess(...., 1)

	return new Promise<T>((resolve, reject) => {
		let promiseCompleted = false;
		setTimeout(() => {
			if (!promiseCompleted) {
				promiseCompleted = true;
				reject(new Error(
					`Timeout in ${timeout/1000} seconds in getting messages from another local test process`
				));
			}
		}, timeout);
		const unsub = w3n.testStand.observeMsgsFromOtherLocalTestProcess({
				next: msg => {
					if (!promiseCompleted) {
						promiseCompleted = true;
						resolve(msg);
					}
					unsub();
				},
				error: err => {
					if (!promiseCompleted) {
						promiseCompleted = true;
						reject(err);
					}
				},
				complete: () => {
					if (!promiseCompleted) {
						promiseCompleted = true;
						reject(new Error(
							`Observation of messages from another local test process completed without any messages`
						));
					}
				}
			},
			userNum, appDomain, component
		);
	});
}

export async function* getMsgsFromProcess<T>(
	userNum: number|undefined, appDomain: string|undefined, component: string|undefined, numOfMsgsToGet: number
) {

	// XXX add timeout

	let msgCounter = 0;
	let expectedMsg: Deferred<T|undefined>|undefined = defer();
	const unsub = w3n.testStand.observeMsgsFromOtherLocalTestProcess(
		{
			next: (msg: T) => {
				expectedMsg?.resolve(msg);
				msgCounter += 1;
				expectedMsg = ((msgCounter < numOfMsgsToGet) ? defer() : undefined);
			},
			error: err => {
				expectedMsg?.reject(err);
				expectedMsg = undefined;
			},
			complete: () => {
				expectedMsg?.resolve(undefined);
				expectedMsg = undefined;
			}
		},
		userNum, appDomain, component
	);
	try {
		while (expectedMsg) {
			const msg = await expectedMsg?.promise;
			if (msg) {
				yield msg;
			} else {
				break;
			}
		}
	} finally {
		unsub();
	}
}
