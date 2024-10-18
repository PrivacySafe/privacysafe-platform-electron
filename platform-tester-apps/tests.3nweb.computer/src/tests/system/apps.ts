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

describe(`system.platform`, () => {

	it(`has all methods`, () => {
		const platform = w3n.system!.platform!;
		expect(platform).toBeDefined();
		expect(typeof platform.availableUpdateType).toBe('function');
		expect(typeof platform.downloadAndApplyUpdate).toBe('function');
		expect(typeof platform.getChannels).toBe('function');
		expect(typeof platform.getCurrentVersion).toBe('function');
		expect(typeof platform.getLatestVersion).toBe('function');
		expect(typeof platform.getVersionList).toBe('function');
	});

	it('can get platform version', async () => {
		const platformVersion = await w3n.system!.platform!.getCurrentVersion();
		expect(typeof platformVersion).toBe('string');
	});

});

describe(`system.apps`, () => {

	it(`has all methods`, () => {
		const apps = w3n.system!.apps!;
		expect(apps).toBeDefined();
		expect(apps.opener).toBeDefined();
		expect(typeof apps.opener!.getAppManifest).toBe('function');
		expect(typeof apps.opener!.getAppFileBytes).toBe('function');
		expect(typeof apps.opener!.listApps).toBe('function');
		expect(typeof apps.opener!.openApp).toBe('function');
		expect(apps.downloader).toBeDefined();
		expect(typeof apps.downloader!.downloadWebApp).toBe('function');
		expect(typeof apps.downloader!.getAppChannels).toBe('function');
		expect(typeof apps.downloader!.getAppVersionFilesList).toBe('function');
		expect(typeof apps.downloader!.getLatestAppVersion).toBe('function');
		expect(apps.installer).toBeDefined();
		expect(typeof apps.installer!.unpackBundledApp).toBe('function');
		expect(typeof apps.installer!.installApp).toBe('function');
		expect(typeof apps.installer!.uninstallApp).toBe('function');
		expect(typeof apps.installer!.removeAppPack).toBe('function');
	});

});

describe(`system.apps.opener`, () => {

	it(`.listApps lists installed apps`, async () => {
		const lst = await w3n.system!.apps!.opener!.listApps();
		expect(Array.isArray(lst)).toBeTrue();
	});

});

export const appsTests = true; // to mark this as module in absence of import(s)
