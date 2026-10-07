/*
 Copyright (C) 2026 3NSoft Inc.

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

import { dohAt } from 'core-3nweb-client-lib';
import { promises as dns } from 'dns';
import { wrapNetworkFns } from 'core-3nweb-client-lib/build/lib-client/networks';
import { makeRequestFromNode } from "core-3nweb-client-lib/build/lib-common-on-node/request-from-node";
import { makeServiceEventsSourceFromNode } from 'core-3nweb-client-lib/build/lib-common-on-node/websocket-from-node';
import { dohURLs } from './confs';

// import of this module wants newer ts module resolution, but browserifying we do for preloads isn't
// modernized, yet.
const { SocksProxyAgent } = require('socks-proxy-agent');
const { HttpProxyAgent } = require('http-proxy-agent');

const agent = new SocksProxyAgent('socks://127.0.0.1:9050');
// const agent = new HttpProxyAgent('http://127.0.0.1:4444');
function getAgent() {
	// return agent;
	return undefined;
}

const getOnionProxy = () => {
	return new SocksProxyAgent('socks://127.0.0.1:9050');
};

const requestsViaOnion = makeRequestFromNode(getOnionProxy);

const eventsSrcViaOnion = makeServiceEventsSourceFromNode(getOnionProxy);

export const { makeNet: makeNetClient, makeLocator: makeServiceLocator } = wrapNetworkFns({
	regular: {
		requests: makeRequestFromNode(getAgent),
		openServiceEventsSource: makeServiceEventsSourceFromNode(getAgent),
		naming: [
			{ resolveTxt: dns.resolveTxt },
			...dohURLs.map(url => dohAt(makeRequestFromNode(), url))
		]
	},
	onion: {
		requests: requestsViaOnion,
		openServiceEventsSource: eventsSrcViaOnion,
	}
});


Object.freeze(exports);