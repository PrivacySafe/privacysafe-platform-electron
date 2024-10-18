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

describe(`shell.getFSResource`, () => {

	it(`fails on unknown app and resource`, async () => {
		await w3n.shell!.getFSResource!(null, 'unknown-resource')
		.then(
			() => fail(`unknown resource should throw`),
			(exc: web3n.shell.FSResourceException) => {
				expect(exc.type).toBe('fs-resource');
				expect(exc.notAllowed).toBeTrue();
			}
		);
		await w3n.shell!.getFSResource!('unknown.example.local', 'some-resource')
		.then(
			() => fail(`unknown app should throw`),
			(exc: web3n.RuntimeException) => {
				expect(exc.runtimeException).toBeTrue();
			}
		);
	});

	it(`returns fs item`, async () => {
		const confFile = await w3n.shell!.getFSResource!(
			'start-by-cmd.3nweb.computer', 'sample-config'
		) as web3n.files.ReadonlyFile;
		const conf = await confFile.readJSON<any>();
		expect(conf.numValue).toBe(42);
		expect(conf.theme).toBe('dark');
	});

});

export const tests = true; // to mark this as module in absence of import(s)
