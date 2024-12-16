/*
 Copyright (C) 2024 3NSoft Inc.
 
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

import { Component } from "../../app-n-components";

type W3N = web3n.caps.W3N;
type SitesW3N = web3n.caps.sites.W3N;

export interface AppCAPsAndSetup {
	w3n: W3N;
	close: () => void;
	setApp: AppSetter;
}

export interface SiteCAPsAndSetup {
	w3n: SitesW3N;
}

export type AppSetter = (app: Component) => void;

export interface CAPsSetupFns {
	close?: () => void;
	setApp?: AppSetter;
}

export function makeCAPsSetAppAndCloseFns(...fns: (CAPsSetupFns|undefined)[]): {
	close: () => void; setApp: AppSetter;
} {
	const closeFns: (() => void)[] = [];
	const setAppFns: AppSetter[] = [];
	for (const setupFns of fns) {
		if (setupFns) {
			const { close, setApp } = setupFns;
			if (close) {
				closeFns.push(close);
			}
			if (setApp) {
				setAppFns.push(setApp);
			}
		}
	}
	return {
		close: ((closeFns.length > 0) ?
			() => {
				try {
					for (const closeFn of closeFns) {
						closeFn();
					}
				} catch (err) {
					console.error(err);
				}
			} :
			noop
		),
		setApp: ((setAppFns.length > 0) ?
			app => {
				for (const setApp of setAppFns) {
					setApp(app);
				}
			} :
			noop
		)
	};
}

function noop() {}
