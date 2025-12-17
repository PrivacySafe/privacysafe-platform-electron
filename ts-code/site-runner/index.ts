/*
 Copyright (C) 2023 3NSoft Inc.
 
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

import { TitleGenerator } from "../app-n-components/gui-component";
import { CoreDriver } from "../core";
import { ElectronIPCConnectors } from "../core/w3n-connectors";
import { DevSiteParamsGetter } from "../test-stand";


export class SiteRunner {

	focusOnSiteComponent(entrypoint: string): void {}

	isComponentOpened(entrypoint: string): boolean {
		throw new Error(`SiteRunner.isComponentOpened() is not implemented`);
	}

}
Object.freeze(SiteRunner.prototype);
Object.freeze(SiteRunner);


// XXX Electron's BrowserView should be used to display components
//     docs: https://www.electronjs.org/docs/latest/api/browser-view
class SiteComponentTab {}
Object.freeze(SiteComponentTab.prototype);
Object.freeze(SiteComponentTab);


export class Sites {

	private readonly runners = new Map<string, SiteRunner>();

	constructor(
		private readonly guiConnectors: ElectronIPCConnectors,
		private readonly titleMaker: TitleGenerator,
		private readonly makeSiteCAPs: CoreDriver['makeCAPsForSiteComponent']
	) {
		Object.seal(this);
	}

	focusOnSiteComponentIfOpened(
		siteDomain: string, entrypoint: string
	): boolean {
		const site = this.runners.get(siteDomain);
		if (site?.isComponentOpened(entrypoint)) {
			site.focusOnSiteComponent(entrypoint);
			return true;
		} else {
			return false;
		}
	}

	async openSiteComponent(
		siteDomain: string, entrypoint: string
	): Promise<void> {

		console.log(` ----- missing site opening implementation -----`);


	}

	async devOpenSiteComponent(
		dev: NonNullable<ReturnType<DevSiteParamsGetter>>, entrypoint: string
	): Promise<void> {

		console.log(` ----- missing dev site opening with runner, using sample -----`);

	}

}
Object.freeze(Sites.prototype);
Object.freeze(Sites);


Object.freeze(exports);