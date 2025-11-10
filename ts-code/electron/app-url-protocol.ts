/*
 Copyright (C) 2025 3NSoft Inc.
 
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

import { app } from "electron";
import { DEFAULT_SIGNUP_URL, PLATFORM_NAME } from "../bundle-confs";

export const appUrlSchema = 'w3n-app';
export const web3nUrlSchema = 'w3n';

export function ensure3NWebProtocolsAreSetInOS(): void {
	for (const proto of [ appUrlSchema, web3nUrlSchema ]) {
		if (app.isDefaultProtocolClient(proto)) {
			console.log(`Protocol schema ${proto} is already set`);
		} else {
			const protocolSet = app.setAsDefaultProtocolClient(proto);
			console.log(`Call to set protocol schema ${proto} returned ${protocolSet}`);
		}
	}
}

export interface SignupParamsViaURL {
	signupUrl: string;
	isStandardService?: true;
	token: string|undefined;
}

export function parse3NWebURL(urlStr: string): SignupParamsViaURL|undefined {
	const stdSignup = `${web3nUrlSchema}://${PLATFORM_NAME.toLowerCase()}/signup/`;
	const customSignup = `${web3nUrlSchema}://signup/`;
	const indOfLastSlash = urlStr.lastIndexOf('/');
	if (indOfLastSlash < 0) {
		return;
	}
	const token = urlStr.substring(indOfLastSlash+1);
	if (urlStr.startsWith(customSignup)) {
		return {
			signupUrl: (new URL(`https://${urlStr.substring(customSignup.length, indOfLastSlash+1)}`)).href,
			token
		};
	} else if (urlStr.startsWith(stdSignup)) {
		return {
			signupUrl: DEFAULT_SIGNUP_URL,
			isStandardService: true,
			token
		};
	}
}

export interface AppCallViaURL {
	appDomain: string;
	path: string;
	hash: string|undefined;
}

export function parseAppURL(urlStr: string): AppCallViaURL|undefined {
	if (!urlStr.startsWith(`${appUrlSchema}://`)) {
		return;
	}
	const url = new URL(urlStr);
	return {
		appDomain: url.hostname,
		path: url.pathname,
		hash: (url.hash ? url.hash : undefined)
	};
}
