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

import { ClientSideConnector, ServiceConnector } from "../../rpc";
import { makeAppInitExc } from "../../system/apps/installer/system-places";
import { Component } from "../../app-n-components";
import { makeRPCException } from "../../lib-common/manifest-utils";

type W3N = web3n.caps.W3N;
type SitesW3N = web3n.caps.sites.W3N;
type AppComponent = web3n.caps.AppComponent;
type GUIServiceComponent = web3n.caps.GUIServiceComponent;
type ServiceComponent = web3n.caps.ServiceComponent;
type RequestedCAPs = web3n.caps.RequestedCAPs;
type ExposeService = web3n.rpc.service.ExposeService;

export interface AppCAPsAndSetup {
	w3n: W3N;
	close: () => void;
	setApp: AppSetter;
}

export interface SiteCAPsAndSetup {
	w3n: SitesW3N;
}

export type AppSetter = (app: Component) => void;


class ClientSideRPCConnections {

	private readonly connections = new Set<web3n.rpc.client.RPCConnection>();

	constructor(
		private readonly caller: Component,
		private readonly rpcClientSide: ClientSideConnector,
		private readonly appRPC: RequestedCAPs['appRPC'],
		private readonly otherAppsRPC: RequestedCAPs['otherAppsRPC']
	) {
		Object.freeze(this);
	}

	async makeConnection(
		appDomain: string|undefined, service: string
	): Promise<web3n.rpc.client.RPCConnection> {

		if (appDomain) {
			if (!this.otherAppsRPC || !this.otherAppsRPC.find(
				r => ((r.app === appDomain) && (r.service === service))
			)) {
				throw makeRPCException(
					appDomain, service, { callerNotAllowed: true }
				);
			}
		} else {
			if (!this.appRPC || !this.appRPC.includes(service)) {
				throw makeRPCException(
					this.caller.domain, service, { callerNotAllowed: true }
				);
			}
		}

		const { connection, doOnClose } = await this.rpcClientSide(
			this.caller,
			(appDomain ? appDomain : this.caller.domain),
			service
		);
		this.connections.add(connection);
		doOnClose(() => this.connections.delete(connection));
		return connection;
	}

	close(): void {
		if (this.connections.size > 0) {
			for (const c of this.connections) {
				c.close();
			}
			this.connections.clear();
		}
	}

}
Object.freeze(ClientSideRPCConnections.prototype);
Object.freeze(ClientSideRPCConnections);


type RPC = NonNullable<W3N['rpc']>;

function makeAppRPC(
	rpcClientSide: ClientSideConnector, capsReq: RequestedCAPs
): {
	cap: NonNullable<RPC['thisApp']>; setApp: AppSetter; close(): void;
}|undefined {
	if (!capsReq.appRPC || (capsReq.appRPC.length === 0)) { return; }
	let connections: ClientSideRPCConnections|undefined = undefined;
	return {
		cap: service => connections!.makeConnection(undefined, service),
		setApp: app => {
			connections = new ClientSideRPCConnections(
				app, rpcClientSide, capsReq.appRPC, undefined
			);
		},
		close: () => connections?.close()
	};
}

function makeOtherAppsRPC(
	rpcClientSide: ClientSideConnector, capsReq: RequestedCAPs
): {
	cap: NonNullable<RPC['otherAppsRPC']>; setApp: AppSetter; close(): void;
}|undefined {
	if (!capsReq.otherAppsRPC || (capsReq.otherAppsRPC.length === 0)) { return; }
	let connections: ClientSideRPCConnections|undefined = undefined;
	return {
		cap: (appDomain, service) => connections!.makeConnection(
			appDomain, service
		),
		setApp: app => {
			connections = new ClientSideRPCConnections(
				app, rpcClientSide, undefined, capsReq.otherAppsRPC
			);
		},
		close: () => connections?.close()
	};
}

export function makeRpcCAP(
	rpcClientSide: ClientSideConnector,
	appDomain: string, componentDef: AppComponent, capsReq: RequestedCAPs
): {
	cap: RPC; setApp: AppSetter; close: () => void;
}|undefined {
	const exposeService = exposeServiceCAP(
		appDomain, componentDef as GUIServiceComponent|ServiceComponent
	);
	const appRPC = makeAppRPC(rpcClientSide, capsReq);
	const otherAppsRPC = makeOtherAppsRPC(rpcClientSide, capsReq);
	if (!exposeService && !appRPC && !otherAppsRPC) { return; }
	const cap: RPC = {
		thisApp: appRPC?.cap,
		otherAppsRPC: otherAppsRPC?.cap,
		exposeService: exposeService?.cap,
	};
	return {
		cap,
		setApp: app => {
			exposeService?.setApp(app);
			appRPC?.setApp(app);
			otherAppsRPC?.setApp(app);
		},
		close: () => {
			exposeService?.close();
			appRPC?.close();
			otherAppsRPC?.close();
		}
	};
}

function exposeServiceCAP(
	appDomain: string, componentDef: ServiceComponent
): { cap: ExposeService; setApp: AppSetter; close: () => void; }|undefined {
	const expectedSrvs = servicesIn(componentDef);
	if (!expectedSrvs) { return; }
	const connectors: { [srvName: string]: ServiceConnector; } = {};
	for (const srvName of expectedSrvs) {
		connectors[srvName] = new ServiceConnector(
			appDomain, srvName, componentDef.services[srvName],
			!!componentDef.forOneConnectionOnly
		);
	}
	const setApp: AppSetter = app => {
		for (const [srvName, connector] of Object.entries(connectors)) {
			app.addService(srvName, connector.wrap());
		}
	};
	const close = (): void => {
		for (const connector of Object.values(connectors)) {
			connector.close();
		}
	};
	const cap: ExposeService = (service, obs) => {
		const connector = connectors[service];
		if (!connector) {
			throw makeAppInitExc(appDomain, {}, {
				message: `Service ${service} is not found in app setting`
			});
		}
		connector.setSinkForConnections(obs);
		return () => connector.close();
	};
	return { cap, setApp, close };
}

function servicesIn(componentDef: ServiceComponent): string[]|undefined {
	if (componentDef.services) {
		const serviceNames = Object.keys(componentDef.services);
		return ((serviceNames.length === 0) ? undefined : serviceNames);
	} else {
		return;
	}
}


Object.freeze(exports);