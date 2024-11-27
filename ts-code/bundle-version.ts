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

import { app } from 'electron';
import { parse as parseSemVer } from 'semver';

export const bundleVersion = (() => {
	const v = parseSemVer(app.getVersion());
	const platformVer = `${v!.major}.${v!.minor}.${Math.floor(v!.patch/1000)}`;
	const bundleNum = v!.patch%1000;
	return `${platformVer}+${bundleNum}`;
})();

