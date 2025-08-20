/*
 Copyright (C) 2021 - 2025 3NSoft Inc.
 
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

import { assert } from "../lib-common/assert";
import { checkAndTransformAddress, toCanonicalAddress, areAddressesEqual } from "../lib-common/canonical-address";
import { APP_ROOT_FOLDER, MANIFEST_FILE, SITE_ROOT_FOLDER } from "../system/system-places/unpack-zipped-app";
import { dirname, isAbsolute, join, resolve } from "path";
import { readFileSync, statSync, writeFileSync } from "fs";
import { errWithCause } from "../lib-common/exceptions/error";
import { CoreDriver } from "../core";
import { AppCAPsAndSetup, AppSetter, SiteCAPsAndSetup } from "../core/caps";
import { Code } from "../lib-common/exceptions/file";
import { stringOfB64CharsSync, stringOfB64UrlSafeCharsSync } from "../lib-common/random-node";
import { MAIN_GUI_ENTRYPOINT } from "../lib-common/manifest-utils";
import { MapOfSets } from "../lib-common/map-of-sets";
import { DesktopUI, UserAppInfo } from "../desktop-integration";
import { RPCLogger } from "./log-rpc";
import { makeTestStandUICap } from "../ui";

type AppManifest = web3n.caps.AppManifest;
type SiteManifest = web3n.caps.SiteManifest;
type TestStandConfig = web3n.testing.config.TestStandConfig;
type DevUserParams = web3n.testing.config.DevUserParams;
type DevUser = web3n.testing.config.DevUser;
type DevAppParams = web3n.testing.config.DevAppParams;
type DevApp = web3n.testing.config.DevApp;
type DevSiteParams = web3n.testing.config.DevSiteParams;
type DevSite = web3n.testing.config.DevSite;

export interface AppsRunnerForTesting {
	runStartupDevApp: (
		params: DevAppParams, addTestStandCAP: WrapStartupCAPs
	) => Promise<{ init: Promise<boolean>; }>;
	initForDirectStartup: () => ReturnType<CoreDriver['start']>;
	openApp: (appDomain: string, entrypoint?: string) => Promise<void>;
	openSite: (siteDomain: string) => Promise<void>;
	listInstalled(): Promise<UserAppInfo[]>;
}

export type WrapAppCAPsAndSetup = (
	entrypoint: string, cap: AppCAPsAndSetup,
	focusThisWindow: (() => Promise<void>)|undefined
) => { w3n: web3n.testing.CommonW3N; close: () => void; setApp: AppSetter; };

export type WrapSiteCAPsAndSetup = (
	cap: SiteCAPsAndSetup
) => { w3n: web3n.testing.CommonW3N; close: () => void; };

export type WrapStartupCAPs =
	(cap: web3n.startup.W3N) => web3n.testing.StartupW3N;

export type MakeRunner = (userId: string) => AppsRunnerForTesting;

export type StartDevStartupApp = (
	params: DevAppParams, wrapStandCAP: WrapStartupCAPs
) => Promise<void>;

export type DevAppParamsGetter = (appDomain: string) => {
	params: DevAppParams;
	capsWrapper: WrapAppCAPsAndSetup;
}|undefined;

export type DevSiteParamsGetter = (
	appDomain: string, entrypoint: string|undefined
) => { params: DevSiteParams; wrapCAPs: WrapSiteCAPsAndSetup; }|undefined;

export class TestStand {

	private readonly devUsers: DevUserParams[];
	private readonly devApps: Map<string, DevAppParams>;
	private readonly devSites: Map<string, DevSiteParams>;
	private readonly devStartupApp: DevAppParams|undefined;
	private readonly listeners = new MapOfSets<string, TestMsgListeners>();
	private testsStarted = false;
	private someSpecsExecuted = false;
	private haveFailedTests = false;

	constructor(
		conf: TestStandConfig, confFile: string,
		private readonly exitAll: (exitCode?: number) => void
	) {
		this.devUsers = parseUsersAndCreds(conf, confFile);
		this.devApps = parseApps(conf, confFile);
		this.devSites = parseSites(conf, confFile);
		this.devStartupApp = parseStartupApp(conf, confFile);
		if ((this.devApps.size === 0)
		&& !this.devStartupApp
		&& (this.devSites.size === 0)) {
			throw new Error(`At least one test app or site should be set in test stand configuration.`);
		}
		Object.seal(this);
	}

	async bootAndStartDevApps(
		makeRunner: MakeRunner, deskUI: DesktopUI,
		startDevStartupApp: StartDevStartupApp
	): Promise<void> {
		try {
			const devUsers = this.devUsers.slice(1);
			if (devUsers.length === 0) {
				await this.startTestingStartupApp(startDevStartupApp);
			} else {
				await this.startForUsers(devUsers, makeRunner, deskUI);
			}
		} catch (err) {
			console.error(`❌ booting test-stand threw an error:`, '\n', err);
			this.exitAll(5);
		}
	}

	private async startTestingStartupApp(
		startDevStartupApp: StartDevStartupApp
	): Promise<void> {
		const testStartupApp = this.devStartupApp?.manifest.appDomain;
		assert(
			!!testStartupApp,
			`No startupApp found in a test setup file.`
		);
		const basicTestStand = this.makeBasicTestStand(
			testStartupApp!, 'default', undefined
		);
		await startUserWithDevStartupApp(
			{
				pass: '',
				userNum: 0,
				userId: 'default'
			}, this.devStartupApp!, startDevStartupApp, basicTestStand
		);
	}

	private async startForUsers(
		devUsers: DevUserParams[], makeRunner: MakeRunner, deskUI: DesktopUI
	): Promise<void> {
		const userParamsAndRunners = devUsers.map(
			userParams => ({ userParams, runner: makeRunner(userParams.userId)})
		);
		for (const { userParams, runner } of userParamsAndRunners) {
			await this.startCoreForUser(userParams, runner, deskUI);
		}
		for (const { userParams, runner } of userParamsAndRunners) {
			await this.startDevAppsForUser(userParams, runner);
		}
		for (const { userParams, runner } of userParamsAndRunners) {
			await this.startDevSitesForUser(userParams, runner);
		}
	}

	private async startCoreForUser(
		userParams: DevUserParams, runner: AppsRunnerForTesting, deskUI: DesktopUI
	): Promise<void> {
		if (userParams.testStartup) {
			const testStartupApp = this.devStartupApp?.manifest.appDomain;
			assert(
				!!testStartupApp,
				`Test user #${userParams.userNum} should be used with startup test, but there is no startupApp in a setup file.`
			);
			const basicTestStand = this.makeBasicTestStand(testStartupApp!, userParams.userId, undefined);
			console.log(`🏁 starting ${testStartupApp} with 🗝️  login for test user ${userParams.userId}`);
			await startUserWithDevStartupApp(
				userParams, this.devStartupApp!, runner.runStartupDevApp, basicTestStand
			);
		} else {
			await startUserDirectly(userParams, runner);
		}
		await deskUI.addUser(
			userParams.userId,
			this.listDevAppsWith(await runner.listInstalled())
		);
	}

	private listDevAppsWith(apps: UserAppInfo[]): UserAppInfo[] {
		for (const devApp of this.devApps.values()) {
			const { appDomain: id, name } = devApp.manifest;
			const info: UserAppInfo = {
				id,
				isInstalled: true,
				name: name!,
				isDevApp: true
			};
			const inNonDev = apps.findIndex(app => (app.id === info.id));
			if (inNonDev >= 0) {
				apps[inNonDev] = info;
			} else {
				apps.push(info);
			}
		}
		return apps;
	}

	private async startDevAppsForUser(
		userParams: DevUserParams, runner: AppsRunnerForTesting
	): Promise<void> {
		if (this.devApps.size === 0) { return; }
		console.log(`\n🏁 opening apps for test user ${userParams.userId}`);
		const testStartupApp = this.devStartupApp?.manifest.appDomain;
		let devAppsOpened = 0;
		for (const [
			appDomain, { skipAutoLaunch, launchComponent, formFactor }
		] of this.devApps.entries()) {
			if ((appDomain !== testStartupApp) && !skipAutoLaunch) {
				console.log(`▶ starting app ${appDomain}${launchComponent ? ` component ${launchComponent}` : ''}${formFactor ? ` in ${formFactor} form factor` : ''}`);
				await runner.openApp(appDomain, launchComponent);
				devAppsOpened += 1;
			}
		}
		console.log(`✔️ opened ${devAppsOpened} app(s) for test user ${userParams.userId}\n`);
	}

	private async startDevSitesForUser(
		userParams: DevUserParams, runner: AppsRunnerForTesting
	): Promise<void> {
		if (this.devSites.size === 0) { return; }
		console.log(`\n🏁 opening sites for test user ${userParams.userId}`);
		const testStartupApp = this.devStartupApp?.manifest.appDomain;
		let devSitesOpened = 0;
		for (const siteDomain of this.devSites.keys()) {
			console.log(`▶ starting site ${siteDomain}`);
			await runner.openSite(siteDomain);
			devSitesOpened += 1;
		}
		console.log(`✔️ opened ${devSitesOpened} site(s) for test user ${userParams.userId}\n`);
	}

	devAppsGetter(userId: string): DevAppParamsGetter {
		const userParams = this.devUsers.slice(1).find(
			u => areAddressesEqual(u.userId, userId)
		)!;
		assert(!!userParams);
		return appDomain => {
			const params = this.devApps.get(appDomain);
			if (!params) { return; }
			return {
				params,
				capsWrapper: (
					entrypoint, { w3n, setApp, close }, focusThisWindow
				) => {
					const { testStand, closeCAP } = this.makeTestStandCAP(
						userParams, appDomain, entrypoint, focusThisWindow
					);
					const rpcLogger = (params.logRPC ?
						new RPCLogger(appDomain, entrypoint!) : undefined
					);
					const w3nWithStand = { testStand } as web3n.testing.CommonW3N;
					for (const cap in w3n) {
						if ((cap === 'rpc') && rpcLogger) {
							w3nWithStand[cap] = rpcLogger.wrapRPC(w3n[cap]!);
						} else if ((cap === 'ui') && params.formFactor) {
							w3nWithStand[cap] = makeTestStandUICap(params.formFactor);
						} else {
							w3nWithStand[cap] = w3n[cap];
						}
					}
					const wrappedClose = () => {
						close();
						closeCAP();
					};
					return { w3n: w3nWithStand, setApp, close: wrappedClose };
				}
			};
		};
	}

	devSiteGetter(userId: string): DevSiteParamsGetter {
		const userParams = this.devUsers.slice(1).find(
			u => areAddressesEqual(u.userId, userId)
		)!;
		assert(!!userParams);
		return (appDomain, entrypoint) => {
			const params = this.devSites.get(appDomain);
			if (!params) { return; }
			// if (!entrypoint) {
			// 	assert(!!service, `service must be given`);
			// 	entrypoint = entrypointOfService(params.manifest, service!);
			// }
			const { testStand, closeCAP } = this.makeTestStandCAP(
				userParams, appDomain, entrypoint, undefined
			);
			// const rpcLogger = (params.logRPC ?
			// 	new RPCLogger(appDomain, entrypoint!) : undefined
			// );
			const wrapCAPs: WrapSiteCAPsAndSetup = ({ w3n }) => {
				const w3nWithStand = { testStand } as web3n.testing.CommonW3N;
				for (const cap in w3n) {
					// if ((cap === 'appRPC') && rpcLogger) {
					// 	w3nWithStand[cap] = rpcLogger.wrapAppRPC(w3n[cap]!);
					// } else if ((cap === 'otherAppsRPC') && rpcLogger) {
					// 	w3nWithStand[cap] = rpcLogger.wrapOtherAppsRPC(w3n[cap]!);
					// } else if ((cap === 'exposeService') && rpcLogger) {
					// 	w3nWithStand[cap] = rpcLogger.wrapExposeService(w3n[cap]!);
					// } else {
					// 	w3nWithStand[cap] = w3n[cap];
					// }
					w3nWithStand[cap] = w3n[cap];
				}
				return { w3n: w3nWithStand, close: closeCAP };
			}
			return { params, wrapCAPs };
		};
	}

	private makeBasicTestStand(
		app: string, userId: string, component: string|undefined
	): web3n.testing.BasicTestStand {
		return {

			log: async (type, msg, err) => {
				if (type === 'error') {
					console.log(`ERROR in ${app}${component ? component : ''}, user '${userId}'\n${msg}\n`, err);
				} else if (type === 'info') {
					console.log(`INFO from ${app}${component ? component : ''}, user '${userId}'\n${msg}\n`);
				} else if (type === 'warning') {
					console.log(`WARNING in ${app}${component ? component : ''}, user '${userId}'\n${msg}\n`);
				}
			},

			record: async (type, msg) => {
				if (type === 'spec-pass') {
					this.someSpecsExecuted = true;
					console.log(`✔️ PASS: ${msg}`);
				} else if (type === 'spec-pending') {
					console.log(`⏸️ PENDING: ${msg}`);
				} else if (type === 'spec-fail') {
					this.someSpecsExecuted = true;
					this.haveFailedTests = true;
					console.log(`❌ FAIL: ${msg}`);
				} else if (type === 'suite-fail') {
					this.haveFailedTests = true;
					console.log(`❌ FAIL: ${msg}`);
				} else if (type === 'tests-start') {
					this.testsStarted = true;
					console.log(`\n▶️ Tests started in ${app}\nwith test user '${userId}'.\n`);
				} else if (type === 'tests-pass') {
					console.log(`\n✔️ Tests passed in ${app}\nwith test user '${userId}'.\n${msg}`);
				} else if (type === 'tests-fail') {
					this.haveFailedTests = true;
					console.log(`\n❌ Tests failed in ${app}\nwith test user '${userId}'.\n${msg}`);
				} else {
					assert(false, `Type ${type} is unknown`);
				}
			},

			exitAll: async () => {
				const ok = (this.testsStarted ?
					(!(this.haveFailedTests || !this.someSpecsExecuted)) : true);
				this.exitAll(ok ? 0 : 2);
			},

		};
	}

	private makeTestStandCAP(
		{ userId, userNum }: DevUserParams, appDomain: string,
		component = MAIN_GUI_ENTRYPOINT,
		focusThisWindow: (() => Promise<void>)|undefined
	): { testStand: web3n.testing.TestStand; closeCAP: () => void; } {
		const capId = capIdFor(userNum, appDomain, component);
		const listeners = new TestMsgListeners();
		this.listeners.add(capId, listeners);

		const { log, record, exitAll } = this.makeBasicTestStand(
			appDomain, userId, component
		);

		const testStand: web3n.testing.TestStand = {

			log,
			record,
			exitAll,

			staticTestInfo: async () => ({ userId, userNum }),

			idOfTestUser: async userNum => {
				const user = this.devUsers[userNum];
				if (user) {
					return user.userId;
				} else {
					throw new Error(`No user found with number ${userNum}`);
				}
			},

			observeMsgsFromOtherLocalTestProcess: (
				obs, sender, senderApp, senderComponent
			) => {
				if (!sender) {
					sender = userNum;
				}
				if (!senderApp) {
					senderApp = appDomain;
				}
				if (!senderComponent) {
					senderComponent = component;
				}
				if (capIdFor(sender, senderApp, senderComponent) === capId) {
					throw new Error(`Can't listen for test signal from the same instance. At least one of address part should be different: user, app, or component`);
				}
				return listeners.addListenerOf(
					sender, senderApp, senderComponent, obs
				)
			},

			sendMsgToOtherLocalTestProcess: async (
				recipient, recipientApp, recipientComponent, msg
			) => {
				if (!recipient) {
					recipient = userNum;
				}
				if (!recipientApp) {
					recipientApp = appDomain;
				}
				if (!recipientComponent) {
					recipientComponent = component;
				}
				const recipientListenerId = capIdFor(
					recipient, recipientApp, recipientComponent
				);
				if (recipientListenerId === capId) {
					throw new Error(`Can't send test signal to the same instance. At least one of address part should be different: user, app, or component`);
				}
				const recipientListeners = this.listeners.get(recipientListenerId);
				if (!recipientListeners) { return; }
				for (const l of recipientListeners) {
					l.passMsgFrom(userNum, appDomain, component, msg);
				}
			},

			focusThisWindow

		};

		const closeCAP = () => this.listeners.remove(capId, listeners);

		return { testStand, closeCAP };
	}

}
Object.freeze(TestStand.prototype);
Object.freeze(TestStand);


function parseApps(
	conf: TestStandConfig, confFile: string
): Map<string, DevAppParams> {
	const apps = new Map<string, DevAppParams>();
	if (conf.apps) {
		for (const appDomain of Object.keys(conf.apps)) {
			const app = conf.apps[appDomain];
			const params = toDevAppParams(confFile, appDomain, app);
			apps.set(appDomain, params);
		}
	}
	return apps;
}

function parseStartupApp(
	conf: TestStandConfig, confFile: string
): DevAppParams|undefined {
	return (conf.startupApp ? toDevAppParams(
		confFile, conf.startupApp.domain, conf.startupApp
	) : undefined);
}

function toDevAppParams(
	confFile: string, appDomain: string, app: DevApp
): DevAppParams {
	assert(
		typeof app === 'object',
		`Test stand app configuration should be an object.`
	);
	const {
		dir, url, logRPC, skipAutoLaunch, launchComponent, formFactor
	} = app;
	assertMandatoryString('dir', dir);
	assertOptionalString('url', url);
	assertOptionalString('launchComponent', launchComponent);
	assertOptionalString('formFactor', formFactor);
	const { appDir, manifest } = checkAppDir(
		isAbsolute(dir) ? dir : resolve(dirname(confFile), dir)
	);
	assert(
		manifest.appDomain === appDomain,
		`App domain '${appDomain}' in test stand configuration should be equal to appDomain value in manifest file '${join(app.dir, MANIFEST_FILE)}'.`
	);
	return {
		manifest, dir: appDir, url, launchComponent, formFactor,
		logRPC: (logRPC === true) || undefined,
		skipAutoLaunch: (skipAutoLaunch === true) || undefined
	};
}

function assertMandatoryString(name: string, value: string): void {
	assert(
		typeof value === 'string',
		`Test stand app configuration should have string '${name}' field.`
	);
}

function assertOptionalString(name: string, value: string|undefined): void {
	assert(
		(value === undefined) || (typeof value === 'string'),
		`If '${name}' field is present in test stand app configuration, it should be a string.`
	);
}

function checkAppDir(dir: string): { manifest: AppManifest; appDir: string; } {
	try {
		const appDir = join(dir, APP_ROOT_FOLDER);
		const stats = statSync(appDir);
		if (!stats.isDirectory()) { throw new Error(
			`Path ${appDir} is not a directory with UI app code`
		); }
		const manifFile = join(dir, MANIFEST_FILE);
		const str = readFileSync(manifFile, { encoding: 'utf8' });
		const manifest = JSON.parse(str) as AppManifest;
		return { manifest, appDir };
	} catch (err) {
		throw errWithCause(err, `${dir} doesn't seem to be a folder with UI app code and app manifest`);
	}
}

function parseSites(
	conf: TestStandConfig, confFile: string
): Map<string, DevSiteParams> {
	const sites = new Map<string, DevSiteParams>();
	if (conf.sites) {
		for (const siteDomain of Object.keys(conf.sites)) {
			const site = conf.sites[siteDomain];
			const params = toDevSiteParams(confFile, siteDomain, site);
			sites.set(siteDomain, params);
		}
	}
	return sites;
}

function toDevSiteParams(
	confFile: string, siteDomain: string, site: DevSite
): DevSiteParams {
	assert(
		typeof site === 'object',
		`Test stand site configuration should be an object.`
	);
	const { dir, url, logRPC } = site;
	assert(
		typeof dir === 'string',
		`Test stand app configuration should have string 'dir' field.`
	);
	assert(
		(url === undefined) || (typeof url === 'string'),
		`If 'url' field is present in test stand app configuration, it should be a string.`
	);
	const { siteDir, manifest } = checkSiteDir(
		isAbsolute(dir) ? dir : resolve(dirname(confFile), dir)
	);
	assert(
		manifest.siteDomain === siteDomain,
		`App domain '${siteDir}' in test stand configuration should be equal to appDomain value in manifest file '${join(site.dir, MANIFEST_FILE)}'.`
	);
	return {
		manifest, dir: siteDir, url, logRPC: (logRPC === true) || undefined
	};
}

function checkSiteDir(
	dir: string
): { manifest: SiteManifest; siteDir: string; } {
	try {
		const siteDir = join(dir, SITE_ROOT_FOLDER);
		const stats = statSync(siteDir);
		if (!stats.isDirectory()) { throw new Error(
			`Path ${siteDir} is not a directory with site code`
		); }
		const manifFile = join(dir, MANIFEST_FILE);
		const str = readFileSync(manifFile, { encoding: 'utf8' });
		const manifest = JSON.parse(str) as SiteManifest;
		return { manifest, siteDir };
	} catch (err) {
		throw errWithCause(err, `${dir} doesn't seem to be a folder with site code and site manifest`);
	}
}

function parseUsersAndCreds(
	conf: TestStandConfig, confFile: string
): DevUserParams[] {
	const users: DevUserParams[] = [];
	if (!Array.isArray(conf.users) || (conf.users.length === 0)) {
		if (!conf.startupApp) {
			throw new Error(`At least one test user should be set in test stand configuration. Only tests with identified startup app can have no users configured.`);
		}
		return users;
	}
	const creds = readOrGenerateCreds(confFile, conf.userCreds, conf.users);
	assert(
		conf.users.length >= creds.length,
		`Number of users in configuration file, ${conf?.users?.length}, should be same as number creds, ${creds?.length}.`
	);
	creds.slice(0, conf.users.length).map(({ userId, pass }, i) => {
		const user = conf.users![i];
		const userNum = i + 1;

		const canonicalAddress = checkAndTransformAddress(userId);
		assert(
			!!canonicalAddress,
			`Test stand user id '${userId}' in configuration is not a valid 3NWeb address.`
		);
		assert(
			typeof user === 'object',
			`Test stand user configuration should be an object.`
		);
		const { signupToken, testStartup } = user;
		assert(
			typeof userNum === 'number',
			`Test stand user configuration should have numeric 'numId' field.`
		);
		assert(
			(signupToken === undefined) || (typeof signupToken === 'string'),
			`If 'signupToken' field is present in test stand user configuration, it should be a string.`
		);
		users[userNum] = { userId, userNum, signupToken, pass, testStartup };
	});
	return users;
}

const DEFAULT_CREDS_FILE = "test-user-creds.json";

type FileException = web3n.files.FileException;

type UserCreds = [string, string][];

function readOrGenerateCreds(
	confFile: string, credsFile: string|undefined, users: DevUser[]
): { userId: string; pass: string; }[] {
	if (!credsFile) {
		credsFile = resolve(dirname(confFile), DEFAULT_CREDS_FILE);
	} else if (!isAbsolute(credsFile)) {
		credsFile = resolve(dirname(confFile), credsFile);
	}

	let creds: UserCreds;
	let credsUpdated = false;
	try {
		creds = JSON.parse(readFileSync(credsFile, { encoding: 'utf8' }));
		assert(
			Array.isArray(creds),
			`Content of creds file ${credsFile} should be an array.`
		);
	} catch (err) {
		if ((err as FileException).code === Code.notFound) {
			creds = [];
		} else {
			throw errWithCause(err, `Problem reading test user creds file at ${credsFile}`);
		}
	}

	for (let i=0; i<users.length; i+=1) {
		let idAndPass = creds[i];
		if (idAndPass) {
			assert(
				Array.isArray(idAndPass) && (idAndPass.length === 2),
				`Element ${i+1} in creds file ${credsFile} should be a two-element array with user id and a pass.`
			);
			const [ userId, pass ] = idAndPass;
			assert(
				(typeof userId === 'string') && !!checkAndTransformAddress(userId),
				`Element ${i+1} in creds file ${credsFile} should have a valid user id at its first position.`
			);
			assert(
				typeof pass === 'string',
				`Test user '${idAndPass[0]}' credential is not a string in file '${credsFile}'.`
			);
		} else {
			const { idTemplate } = users[i];
			assert(
				typeof idTemplate === 'string',
				`Test stand user configuration should have string idTemplate in user ${i+1}.`
			)
			const userId = idTemplate.replace('%d', `${stringOfB64CharsSync(12)}`);
			assert(
				!!checkAndTransformAddress(userId),
				`idTemplate for user ${i+1} in configuration doesn't yield valid address`
			);
			const pass = stringOfB64UrlSafeCharsSync(20);
			creds.push([ userId, pass ]);
			credsUpdated = true;
		}
	}

	if (credsUpdated) {
		writeFileSync(
			credsFile, JSON.stringify(creds, null, 2), { encoding: 'utf8' }
		);
	}
	return creds.map(([ userId, pass ]) => ({ userId, pass }));
}

async function startUserWithDevStartupApp(
	{ userId, pass, userNum, signupToken }: DevUserParams,
	appParams: DevAppParams,
	runStartupDevApp: StartDevStartupApp|AppsRunnerForTesting['runStartupDevApp'],
	baseStand: web3n.testing.BasicTestStand
): Promise<void> {
	const addTestCAP: WrapStartupCAPs = ({ signIn, signUp }) => {
		const testStand: web3n.testing.StartupTestStand = {
			staticTestInfo: async () => ({ userId, pass, userNum, signupToken }),
			log: baseStand.log,
			record: baseStand.record,
			exitAll: baseStand.exitAll,
		};
		return { signIn, signUp, testStand };
	};
	const initSteps = await runStartupDevApp(appParams, addTestCAP);
	await initSteps?.init;
	console.log(`▶ core started for ${userId}\n`);
}

async function startUserDirectly(
	{ userId, pass, signupToken }: DevUserParams, runner: AppsRunnerForTesting
): Promise<void> {
	const canonicalAddress = toCanonicalAddress(userId);
	const {
		capsForStartup: { signIn, signUp },
		coreInit
	} = runner.initForDirectStartup();
	const usersOnDisk = await signIn.getUsersOnDisk();
	if (usersOnDisk.find(u => areAddressesEqual(u, userId))) {
		console.log(`Login of '${userId}' with existing storage cache:`);
		let progressIndicated = false;
		const ok = await signIn.useExistingStorage(userId, pass, p => {
			if (!progressIndicated) {
				console.log(`Login of '${userId}' in progress`);
				progressIndicated = true;
			}
		});
		assert(ok, `Configuration should have correct password for '${userId}'.`);
		console.log(`🗝️  User '${userId}' logged in.`);
	} else {
		const indOfAt = canonicalAddress.lastIndexOf('@');
		assert(
			indOfAt > 0,
			`Test signup assumes full address with name, but '${userId}' isn't.`
		);
		const nonNameLen = canonicalAddress.length - indOfAt;
		const name = userId.slice(0, userId.length - nonNameLen);
		const unused = await signUp.getAvailableAddresses(name, signupToken);
		if (unused.includes(userId)) {
			console.log(`Creating user '${userId}':`);
			let progressIndicated = false;
			await signUp.createUserParams(pass, p => {
				if (!progressIndicated) {
					console.log(`Creation of '${userId}' in progress`);
					progressIndicated = true;
				}
			});
			const ok = await signUp.addUser(userId, signupToken);
			assert(ok, `User creation failed.`);
			console.log(`🗝️  User '${userId}' created.`);
		} else {
			console.log(`Login of '${userId}' without local storage cache:`);
			const userKnown = await signIn.startLoginToRemoteStorage(userId);
			assert(userKnown, `Configuration should have correct password for '${userId}'.`);
			let progressIndicated = false;
			const ok = await signIn.completeLoginAndLocalSetup(pass, p => {
				if (!progressIndicated) {
					console.log(`Login of '${userId}' in progress`);
					progressIndicated = true;
				}
			});
			assert(ok);
			console.log(`🗝️  User '${userId}' logged in.`);
		}
	}
	await coreInit;
	console.log(`▶ core started for ${userId}`);
}

function capIdFor(
	userNum: number, appDomain: string, component: string
): string {
	return `${userNum}/${appDomain}/${component}`;
}


class TestMsgListeners {

	private readonly srcIdToObservers =
		new MapOfSets<string, web3n.Observer<any>>();

	constructor() {
		Object.freeze(this);
	}

	addListenerOf(
		userNum: number, appDomain: string, component: string,
		obs: web3n.Observer<any>
	): (() => void) {
		const srcId = capIdFor(userNum, appDomain, component);
		this.srcIdToObservers.add(srcId, obs);
		return () => {
			obs.complete?.();
			this.srcIdToObservers.remove(srcId, obs);
		};
	}

	passMsgFrom(
		userNum: number, appDomain: string, component: string, msg: any
	): void {
		const srcId = capIdFor(userNum, appDomain, component);
		const observers = this.srcIdToObservers.get(srcId);
		if (!observers) { return; }
		for (const obs of observers) {
			obs.next!(msg);
		}
	}

}
Object.freeze(TestMsgListeners.prototype);
Object.freeze(TestMsgListeners);


Object.freeze(exports);