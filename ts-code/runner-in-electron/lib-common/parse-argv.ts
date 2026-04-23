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

import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";

export interface ArgDef {
	name: string;
	type: (typeof Boolean) | (typeof String) | (typeof Number) |
	((value: string) => any);
	alias?: string;
	description?: string;
	typeLabel?: string;
	multiple?: boolean;
	defaultOption?: boolean;
}

export interface ParseOptions {
	argv?: string[];
	partial?: boolean;
	stopAtFirstUnknown?: boolean;
	camelCase?: boolean;
	caseInsensitive?: boolean;
}

export function parseArgv<T>(
	argv: string[], argOpts: ArgDef[], opts?: ParseOptions
): T {
	if (opts) {
		opts.argv = argv;
	} else {
		opts = { argv };
	}
	return commandLineArgs(argOpts, opts) as T;
}

export interface CliUsageSection {
	header?: string;
	optionList?: ArgDef[];
	content?: string | string[] | UsageSectionContent
}

export interface UsageSectionContent {
	options: any;
	data: any
}

export function cliUsageToString(sections: CliUsageSection[]): string {
	return commandLineUsage(sections);
}


Object.freeze(exports);