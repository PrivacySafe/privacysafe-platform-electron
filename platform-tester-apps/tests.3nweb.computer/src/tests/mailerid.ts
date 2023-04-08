/*
 Copyright (C) 2020 - 2021 3NSoft Inc.
 
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

// const serviceUrl = ``;
// function isSessionValid(sessionId: string): Promise<boolean> {
// 	// XXX app should be allowed to talk https://someplace/allowed
// }

describe('MailerId', () => {

	it('gets current user id', async () => {
		const userId = await w3n.mailerid!.getUserId();
		expect(typeof userId).toBe('string');
	});

	// XXX app should be allowed to talk https://someplace/allowed
	// it('performs MailerId login', async () => {
	// 	const sessionId = await w3n.mailerid!.login(serviceUrl);
	// 	expect(await isSessionValid(sessionId)).toBe(true);
	// });

});

export const midTests = true; // to mark this as module in absence of import(s)
