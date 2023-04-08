/*
 Copyright (C) 2020 - 2021 3NSoft Inc.
 
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

import { ExposedFn, Caller } from 'core-3nweb-client-lib/build/ipc';

type CloseSelf = NonNullable<web3n.caps.W3N['closeSelf']>;


export namespace closeSelf {

	export function expose(fn: CloseSelf): ExposedFn {
		return () => fn();
	}

	export function makeClient(caller: Caller, objPath: string[]): CloseSelf {
		return () => {
			caller.startPromiseCall(objPath, undefined);
		};
	}

}
Object.freeze(closeSelf);


Object.freeze(exports);