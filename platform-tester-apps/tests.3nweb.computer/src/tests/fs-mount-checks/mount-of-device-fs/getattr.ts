/*
 Copyright (C) 2018 3NSoft Inc.
 
 This program is free software: you can redistribute it and/or modify it under
 the terms of the GNU General Public License as published by the Free Software
 Foundation, either version 3 of the License, or (at your option) any later
 version.
 
 This program is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 See the GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License along with
 this program. If not, see <http://www.gnu.org/licenses/>. */

import { SpecDescribe, SpecIt } from '../../libs-for-tests/spec-module';
import * as nodeFS from '../../../lib-common/async-fs-node';

declare var mountPoint: string;
declare var fs: web3n.files.WritableFS;

export const specs: SpecDescribe = {
	description: 'getattr implementation',
	its: []
};

let it: SpecIt = { expectation: `stats root` };
it.func = async function() {

	const stats = await nodeFS.stat(mountPoint);
	expect(stats.isDirectory()).toBe(true);

};
specs.its.push(it);

