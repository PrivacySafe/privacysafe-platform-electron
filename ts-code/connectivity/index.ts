/*
 Copyright (C) 2022, 2025 3NSoft Inc.

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

import { Core } from 'core-3nweb-client-lib';
import { net } from 'electron';
import { interval, map, merge, Subscription } from 'rxjs';
import { ObserversSet } from '../lib-common/observer-utils';

type ConnectivityEvent = web3n.connectivity.ConnectivityEvent;
type ConnectivityCAP = web3n.connectivity.Connectivity;

const CHECK_INTERVAL_MILLIS = 3*1000;

export function makeConnectivity(
	connectivityEvents: Promise<Core['connectivityEvents']>
) {

	const observers = new ObserversSet<ConnectivityEvent>();
	let checkProc: Subscription|undefined = undefined;
	connectivityEvents.then(({ inbox$ }) => {
		checkProc = merge(
			interval(CHECK_INTERVAL_MILLIS)
			.pipe(
				map(() => ({
					isOnline: net.isOnline()
				}))
			),
			inbox$
			.pipe(
				map(({ service, ping, error, slowSocket, socketClosed }) => ({
					isOnline: net.isOnline(),
					wsEvent: { service, ping, error, slowSocket, socketClosed }
				}))
			)
		)
		.subscribe(observers);
	})
	.catch(() => {});

	function close() {
		checkProc?.unsubscribe();
		checkProc = undefined;
	}

	return {
		makeCAP: () => makeConnectivityCAP(observers),
		close
	};
}

function makeConnectivityCAP(observers: ObserversSet<ConnectivityEvent>): { cap: ConnectivityCAP; } {

	async function isOnline() {
		return (net.isOnline() ? 'online_80%' : 'offline_99%');
	}

	function watch(obs: web3n.Observer<ConnectivityEvent>): () => void {
		observers.add(obs);
		return () => observers.delete(obs);
	}

	return {
		cap: {
			isOnline,
			watch
		}
	};
}

export type Connectivity = ReturnType<typeof makeConnectivity>;


Object.freeze(exports);