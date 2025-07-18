/*
 Copyright (C) 2024 - 2025 3NSoft Inc.
 
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

describe('Generally app', () => {

	it('can get own version', async () => {
		const appVersion = await w3n.myVersion();
		expect(appVersion).toBe('1.2.3');
	});

	it('has function to close current component instance', async () => {
		expect(typeof w3n.closeSelf).toBe('function');
	});

	it(`has ui cap to provide info about operational environment`, async () => {
		const uiFF = await w3n.ui.uiFormFactor();
		expect((uiFF === 'desktop') || (uiFF === 'phone')).toBeTrue();
	});

});

export const commonTests = true; // to mark this as module in absence of import(s)
