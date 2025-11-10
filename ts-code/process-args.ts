/*
 Copyright (C) 2018, 2020 - 2024 3NSoft Inc.

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

import { readdirSync, readFileSync } from "fs";
import { isAbsolute, join } from "path";
import { assert } from "./lib-common/assert";
import { parseArgv, ArgDef, cliUsageToString, CliUsageSection } from "./lib-common/parse-argv";
import { PLATFORM_NAME } from "./bundle-confs";
import { AppCallViaURL, appUrlSchema, parse3NWebURL, parseAppURL, SignupParamsViaURL, web3nUrlSchema } from "./electron/app-url-protocol";

type TestStandConfig = web3n.testing.config.TestStandConfig;
type FormFactor = web3n.ui.FormFactor;

function checkedFolderArgType(
	folder: string
): { folder: string; exists: boolean; } {
	try {
		readdirSync(folder);
		return { folder, exists: true };
	} catch (err) {
		if (err.code === 'ENOENT') {
			return { folder, exists: false };
		} else {
			throw err;
		}
	}
}

function testStandConfigType(
	file: string
): { conf: TestStandConfig; filePath: string; } {
	try {
		const filePath = toAbsolute(file);
		const str = readFileSync(filePath, { encoding: 'utf8' });
		const testStand = JSON.parse(str) as TestStandConfig;
		assert(
			typeof testStand === 'object',
			`Test stand configuration should be an object.`
		);	
		return { conf: testStand, filePath };
	} catch (err) {
		if (err.code === 'ENOENT') {
			console.error(`\n❌ Test stand configuration file ${file} is not found`);
			console.error(err);
			process.exit(-2);
		} else {
			console.error(`\n❌ Problem in reading test stand configuration file ${file}`);
			console.error(err);
			process.exit(-1);
		}
	}
}

function formFactorType(uiFF: FormFactor): FormFactor {
	switch (uiFF) {
		case 'phone':
		case 'phone+screen':
		case 'tablet':
		case 'tablet+screen':
		case 'desktop':
			return uiFF;
		default:
			console.error(`\n❌ Form factor ${uiFF} is not a known form factor`);
			process.exit(-1);
	}
}

function httpsUrlType(value: string): string {
	return (value.startsWith(`https://`) ?  value : `https://${value}`);
}

export function toAbsolute(p: string): string {
	return (isAbsolute(p) ? p : join(process.cwd(), p));
}

const platformArgDefs: ArgDef[] = [
	{
		name: 'help',
		alias: 'h',
		type: Boolean,
		description: `Display this usage help.`
	},
	{
		name: 'data-dir',
		type: checkedFolderArgType,
		typeLabel: '{underline <folder>}',
		description: `Data directory to use instead of default values.`
	},
	{
		name: 'devtools',
		type: Boolean,
		description: `Enable chrome devtools in web-gui components. Pressing usual shotcuts: F12, Ctrl+Shift+I or Cmd+Alt+I on Mac -- will open devtool in each particular component window.`
	},
	{
		name: 'signup-url',
		type: httpsUrlType,
		typeLabel: '{underline <url>}',
		description: `Custom signup url to use instead of a default value.`
	},
	{
		name: 'console-log-http',
		type: Boolean,
		description: `Log to console http requests.`
	},
	{
		name: 'allow-multi-instances',
		type: Boolean,
		description: `Allows to run as a second instance, ignoring single instance lock. Multiple instances messes up user experience, but it can be useful in tests and development.`
	},
	{
		name: 'check-signup-url',
		type: String,
		typeLabel: '{underline <signup url>}',
		description: `Checks signup service, and presence of services on related domain(s).`
	},
	{
		name: 'test-stand',
		type: testStandConfigType,
		typeLabel: '{underline <conf file>}',
		description: `Test stand configuration file.`
	},
	{
		name: 'form-factor',
		type: formFactorType,
		description: `Form factor overrides device-derived value, useful for testing.`
	},
	{
		name: 'skip-app-error-dialog',
		type: Boolean,
		description: `Outputs startup error into console instead of showing GUI dialog box that awaits for a human to click. This skipping is useful in automated testing and development.`
	},
	{
		name: 'skip-dashboard-on-autologin',
		type: Boolean,
		description: `Skip opening of dashboard(s) when users are automatically logged in.`
	},
	{
		name: 'platform-cmd',
		type: String,
		description: `Command code to pass to an already running instance.`
	},
	{
		name: 'runtime-deno',
		type: String,
		typeLabel: '{underline <deno binary>}',
		description: `Custom binary for components that start in Deno runtime.`
	},
	{
		name: 'socks5-proxy',
		type: String,
		typeLabel: '{underline <address:port>}',
		description: `SOCKS5 proxy to use for connectivity.`
	},
	{
		name: 'version',
		alias: 'v',
		type: Boolean,
		description: `Displays platform and bundle versions information`
	},
];

const usage: CliUsageSection[] = [
	{
		header: PLATFORM_NAME,
		content: `${PLATFORM_NAME} is a 3NWeb client-side platform.`
	},
	{
		header: `Options:`,
		optionList: platformArgDefs
	}
];

export function cliUsageTxt(): string {
	return cliUsageToString(usage);
}

const parsedCliArgs = parseArgv<any>(
	process.argv, platformArgDefs, { partial: true }
);

export const UTIL_INVOCATION_ARGS = {
	help: parsedCliArgs['help'] as boolean|undefined,
	version: parsedCliArgs['version'] as boolean|undefined,
	"check-signup": parsedCliArgs['check-signup-url'] as string|undefined
};

export const HTTP_LOG_TO_CONSOLE_FLAG = !!parsedCliArgs['console-log-http'];

export const MULTI_INSTANCE_FLAG = !!parsedCliArgs['allow-multi-instances'];

export const CUSTOM_DATA_DIR = parsedCliArgs['data-dir'] as ReturnType<typeof checkedFolderArgType>|undefined;

export const TEST_STAND_CONF = parsedCliArgs['test-stand'] as ReturnType<typeof testStandConfigType>|undefined;

export const FORM_FACTOR_OVERRIDE = parsedCliArgs['form-factor'] as ReturnType<typeof formFactorType>|undefined;

export const PLATFORM_CALL_CMD = parsedCliArgs['platform-cmd'] as string|undefined;

export const SKIP_APP_ERR_DIALOG_FLAG = !!parsedCliArgs['skip-app-error-dialog'];

export const SKIP_DASH_AT_AUTOLOGIN_FLAG = !!parsedCliArgs['skip-dashboard-on-autologin'];

export const CUSTOM_DENO_RUNTIME = parsedCliArgs['runtime-deno'] as string|undefined;

export const SOCKS5_PROXY = parsedCliArgs['socks5-proxy'] as string|undefined;

export const CUSTOM_SIGNUP_URL =  parsedCliArgs['signup-url'] as string|undefined;

const DEV_TOOL_FLAG = !!parsedCliArgs['devtools'];

export function urlFromArgs(argv: string[]): {
	appCallViaURL?: AppCallViaURL;
	signupParams?: SignupParamsViaURL;
} {
	const appUrlArg = argv.find(arg => arg.startsWith(`${appUrlSchema}://`));
	if (appUrlArg) {
		return {
			appCallViaURL: parseAppURL(appUrlArg)
		};
	}

	const web3nUrl = argv.find(arg => arg.startsWith(`${web3nUrlSchema}://`));
	if (web3nUrl) {
		return {
			signupParams: parse3NWebURL(web3nUrl)
		};
	}

	return {};
}


if (!TEST_STAND_CONF
&& (MULTI_INSTANCE_FLAG && !CUSTOM_DATA_DIR)) {
	console.error(`❌ Data dir argument is required on invokation that allows multiple instances, and is not given now.`);
	process.exit(-1);
}

export type DevToolsAppAllowance = (appDomain: string) => boolean;

export function devToolsFromARGs(): DevToolsAppAllowance {
	return (appDomain: string) => {
		return DEV_TOOL_FLAG;
	};
}

export function cmdTokenFromCli(argv: string[]): string|undefined {
	const parsed = parseArgv<any>(argv, platformArgDefs, { partial: true });
	return parsed['platform-cmd'];
}


Object.freeze(exports);