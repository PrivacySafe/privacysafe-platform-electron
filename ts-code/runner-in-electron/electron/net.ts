/*
 Copyright (C) 2017, 2026 3NSoft Inc.
 
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
 
import { net } from 'electron';
import * as https from 'https';
import { RequestOpts, Reply, ContentType, processRequest, formHttpsReqOpts } from './request-utils';
import { makeSessionFor3NComms } from './session';
import { NetClient, makeNetClient as makeClient } from 'core-3nweb-client-lib';
import { openSocketFromNode } from "core-3nweb-client-lib/build/lib-common-on-node/websocket-from-node";

export { makeException, Reply, RequestOpts, extractIntHeader } from './request-utils';

type NetRequestOpts = https.RequestOptions & {
	session: Electron.Session;
	redirect: 'error';
}

export function makeNetClient(session?: Electron.Session): NetClient {
	if (!session) {
		session = makeSessionFor3NComms();
	}
	const requester = opts => net.request(opts);

	function request<T>(opts: RequestOpts, contentType?: ContentType, reqBody?: Uint8Array): Promise<Reply<T>> {
		const netReqOpts = formHttpsReqOpts(opts, contentType) as NetRequestOpts;
		netReqOpts.session = session!;
		netReqOpts.redirect = 'error';
		return processRequest<T>(requester as any, netReqOpts, opts, reqBody);
	}

	function reset() {
		session = makeSessionFor3NComms();
	}

	return makeClient(request, openSocketFromNode, reset);
}

Object.freeze(exports);