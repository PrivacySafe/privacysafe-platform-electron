/*
 Copyright (C) 2020 - 2024 3NSoft Inc.
 
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

import { Driver } from "../core-driver";

type W3N = web3n.caps.W3N;
type RequestedCAPs = web3n.caps.RequestedCAPs;

export function makeLogoutCAP(
	logout: Driver['logout'], capsReq: RequestedCAPs
): W3N['logout'] {
	if (capsReq.logout === 'all') {
		return logout;
	}
}


Object.freeze(exports);