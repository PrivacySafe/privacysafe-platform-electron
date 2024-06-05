/*
 Copyright (C) 2022, 2024 3NSoft Inc.
 
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

describe(`apps`, () => {

	it(`has all methods`, () => {
		expect(w3n.apps).toBeDefined();
		expect(w3n.apps!.opener).toBeDefined();
		expect(typeof w3n.apps!.opener!.getAppIcon).toBe('function');
		expect(typeof w3n.apps!.opener!.getAppInfo).toBe('function');
		expect(typeof w3n.apps!.opener!.listApps).toBe('function');
		expect(typeof w3n.apps!.opener!.openApp).toBe('function');
		expect(w3n.apps!.downloader).toBeDefined();
		expect(typeof w3n.apps!.downloader!.downloadWebApp).toBe('function');
		expect(typeof w3n.apps!.downloader!.getAppChannels).toBe('function');
		expect(typeof w3n.apps!.downloader!.getAppVersionFilesList).toBe('function');
		expect(typeof w3n.apps!.downloader!.getLatestAppVersion).toBe('function');
		expect(w3n.apps!.installer).toBeDefined();
		expect(typeof w3n.apps!.installer!.installWebApp).toBe('function');
		expect(typeof w3n.apps!.installer!.unpackBundledWebApp).toBe('function');
		expect(w3n.apps!.platform).toBeDefined();
		expect(typeof w3n.apps!.platform!.availableUpdateType).toBe('function');
		expect(typeof w3n.apps!.platform!.downloadAndApplyUpdate).toBe('function');
		expect(typeof w3n.apps!.platform!.getChannels).toBe('function');
		expect(typeof w3n.apps!.platform!.getCurrentVersion).toBe('function');
		expect(typeof w3n.apps!.platform!.getLatestVersion).toBe('function');
		expect(typeof w3n.apps!.platform!.getVersionList).toBe('function');
	});

});

describe(`apps.opener`, () => {

	it(`.listApps lists installed apps`, async () => {
		const lst = await w3n.apps!.opener!.listApps();
		expect(Array.isArray(lst)).toBeTrue();
		for (const appInfo of lst) {
			// XXX add check here
		}
	});

});

export const appsTests = true; // to mark this as module in absence of import(s)
