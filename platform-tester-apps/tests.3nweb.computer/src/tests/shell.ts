/*
 Copyright (C) 2022 3NSoft Inc.
 
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

describe(`shell.userNotifications`, () => {

	it(`app manifest requests the cap, and it is expected`, async () => {
		expect(typeof w3n.shell).toBe('object');
		expect(typeof w3n.shell!.userNotifications).toBe('object');
		expect(typeof w3n.shell!.userNotifications!.addNotification).toBe('function');
		expect(typeof w3n.shell!.userNotifications!.removeNotification).toBe('function');
		expect(typeof w3n.shell!.userNotifications!.watch).toBe('function');
	});

});

export const tests = true; // to mark this as module in absence of import(s)
