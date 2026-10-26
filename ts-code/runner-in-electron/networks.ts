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
import { DnsResolver, wrapNetworkFns } from 'core-3nweb-client-lib/build/lib-client/networks';
import { makeRequestFromNode } from "core-3nweb-client-lib/build/lib-common-on-node/request-from-node";
import { makeServiceEventsSourceFromNode } from 'core-3nweb-client-lib/build/lib-common-on-node/websocket-from-node';
import { dohURLs } from './confs';
import type { Agent } from 'https';
import { OpenServiceEventsSource, RequestFn } from 'core-3nweb-client-lib/build/lib-client/request-utils';
import { SOCKS5_PROXY } from './process-args';

// import of this module wants newer ts module resolution, but browserifying we do for preloads isn't
// modernized, yet.
const { SocksProxyAgent } = require('socks-proxy-agent');
// const { HttpProxyAgent } = require('http-proxy-agent');

type Networks = web3n.system.networks.Networks;
type DnsAndIP = web3n.system.networks.DnsAndIP;
type ProxiesForDnsAndIP = web3n.system.networks.ProxiesForDnsAndIP;
type Socks5ProxySetup = web3n.system.networks.Socks5ProxySetup;
type Onion = web3n.system.networks.Onion;
type TorProxySetup = web3n.system.networks.TorProxySetup;


class DnsAndIPNet implements DnsAndIP {

	private proxySetup: ProxiesForDnsAndIP|undefined = undefined;

	private currentRequestFn: RequestFn<unknown>;
	private currentEventsSourceFn: OpenServiceEventsSource;
	private currentResolvers: DnsResolver[];

	constructor(
		private readonly onionRequestFn: RequestFn<unknown>,
		private readonly onionEventsSourceFn: OpenServiceEventsSource,
		initOpts?: ReturnType<typeof getSocksFromCLI>
	) {
		this.setRegularFns(initOpts?.agent);
		this.setDnsResolvers(!initOpts);
		this.proxySetup = initOpts?.proxySetup;
		Object.seal(this);
	}

	async currentProxy(): Promise<ProxiesForDnsAndIP|undefined> {
		return this.proxySetup;
	}

	private setRegularFns(agent: Agent|undefined): void {
		this.currentRequestFn = makeRequestFromNode(() => agent);
		this.currentEventsSourceFn = makeServiceEventsSourceFromNode(() => agent);
	}

	async setCurrentProxy(opts: ProxiesForDnsAndIP|undefined): Promise<void> {
		if (!opts) {
			this.setRegularFns(undefined);
			this.setDnsResolvers(true);
		} else if (opts === 'tor') {
			this.currentRequestFn = this.onionRequestFn;
			this.currentEventsSourceFn = this.onionEventsSourceFn;
			this.setDnsResolvers(false);
		} else if (opts.type === 'socks5') {
			const agent = new SocksProxyAgent(`socks://${opts.hostname}:${opts.port}`);

			// XXX testing should happen here

			this.setRegularFns(agent);
			this.setDnsResolvers(false);
		}
		this.proxySetup = opts;
	}

	private setDnsResolvers(useClassicDNS: boolean): void {
		this.currentResolvers = [
			...(useClassicDNS ? [{ resolveTxt: dns.resolveTxt }] : []),
			...dohURLs.map(({ url, type }) => dohAt(this.requests, url, type))
		];
	}

	wrapCAP(): Networks['dnsAndIP'] {
		return {
			currentProxy: this.currentProxy.bind(this),
			setCurrentProxy: this.setCurrentProxy.bind(this),
			testProxySetup: this.testProxySetup.bind(this)
		};
	}

	async testProxySetup(opts?: ProxiesForDnsAndIP): Promise<boolean> {

		// XXX testing should happen here

		return true;
	}

	readonly requests: RequestFn<unknown> = (opts, reqContentType, reqBody) => {
		return this.currentRequestFn(opts, reqContentType, reqBody);
	};

	readonly openServiceEventsSource: OpenServiceEventsSource = req => {
		return this.currentEventsSourceFn(req);
	};

	readonly namingFns = (): DnsResolver[] => {
		return this.currentResolvers;
	};

}
Object.freeze(DnsAndIPNet.prototype);
Object.freeze(DnsAndIPNet);


class OnionNet implements Onion {

	private proxySetup: TorProxySetup;

	private currentRequestFn: RequestFn<unknown>;
	private currentEventsSourceFn: OpenServiceEventsSource;

	constructor() {
		this.setCurrentFns();
		Object.seal(this);
	}

	private setCurrentFns(setup?: TorProxySetup): void {
		if (!setup) {
			setup = {
				localhostPort: 9050
			};
		}
		this.proxySetup = setup;
		const agent = new SocksProxyAgent(`socks://127.0.0.1:${this.proxySetup.localhostPort}`);
		this.currentRequestFn = makeRequestFromNode(() => agent);
		this.currentEventsSourceFn = makeServiceEventsSourceFromNode(() => agent);
	}

	wrapCAP(): NonNullable<Networks['onion']> {
		return {
			currentSetup: this.currentSetup.bind(this),
			setTorProxy: this.setTorProxy.bind(this),
			testConnection: this.testConnection.bind(this)
		};
	}

	async testConnection(opts?: TorProxySetup): Promise<boolean> {

		// XXX testing should happen here

		return true;
	}

	async currentSetup(): Promise<TorProxySetup> {
		return this.proxySetup;
	}

	async setTorProxy(opts: TorProxySetup): Promise<void> {

		// XXX testing should happen here

		this.setCurrentFns(opts);
	}

	readonly requests: RequestFn<unknown> = (opts, reqContentType, reqBody) => {
		return this.currentRequestFn(opts, reqContentType, reqBody);
	}

	readonly openServiceEventsSource: OpenServiceEventsSource = req => {
		return this.currentEventsSourceFn(req);
	}

}
Object.freeze(OnionNet.prototype);
Object.freeze(OnionNet);


function getSocksFromCLI(): { agent: Agent; proxySetup: Socks5ProxySetup }|undefined {
	if (!SOCKS5_PROXY) {
		return;
	}
	const { hostname, port } = new URL(`socks://${SOCKS5_PROXY}`);
	return {
		agent: new SocksProxyAgent(`socks://${SOCKS5_PROXY}`),
		proxySetup: {
			type: 'socks5',
			hostname,
			port: parseInt(port)
		}
	};
}

const onionNet = new OnionNet();
const dnsAndIPNet = new DnsAndIPNet(onionNet.requests, onionNet.openServiceEventsSource, getSocksFromCLI());

export const networks: Networks = {
	dnsAndIP: dnsAndIPNet.wrapCAP(),
	onion: onionNet.wrapCAP()
};

export const { makeNet: makeNetClient, makeLocator: makeServiceLocator } = wrapNetworkFns({
	regular: {
		requests: dnsAndIPNet.requests,
		openServiceEventsSource: dnsAndIPNet.openServiceEventsSource,
		naming: dnsAndIPNet.namingFns
	},
	onion: {
		requests: onionNet.requests,
		openServiceEventsSource: onionNet.openServiceEventsSource,
	}
});


Object.freeze(exports);