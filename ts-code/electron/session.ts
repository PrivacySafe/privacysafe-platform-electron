/*
 Copyright (C) 2017, 2019, 2021 - 2022, 2024 - 2025 3NSoft Inc.
 
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

import { desktopCapturer, session, Session, MediaAccessPermissionRequest, DisplayMediaRequestHandlerHandlerRequest, DesktopCapturerSource, SourcesOptions, NativeImage, systemPreferences } from 'electron';
import { setAppProtocolIn, protoSchemas, W3NSetupType } from "./protocols";
import { logWarning, logError } from '../confs';
import { devToolsExtFilter } from '../init-proc/devtools';
import { platform } from 'os';
import { ensureDeviceAllowsScreenCapture } from '../media-devices';

type ReadonlyFS = web3n.files.ReadonlyFS;
type RequestedCAPs = web3n.caps.RequestedCAPs;
type SelectMediaForCapture = web3n.media.SelectDisplayMediaForCapture;
type DisplaySourceInfo = web3n.media.DisplaySourceInfo;

export interface SessionHandlers {
	selectMediaForCapture: SelectMediaForCapture;
}

export type HandlersGetter = <T extends keyof SessionHandlers>(
	type: T
) => SessionHandlers[T]|undefined;

export async function makeSessionForApp(
	appDomain: string, appFilesRoot: ReadonlyFS, w3nSetup: W3NSetupType,
	capsReq: RequestedCAPs|undefined, devTools: boolean,
	getHandler: HandlersGetter|undefined
): Promise<Session> {
	if (!appDomain) { throw new Error(`Bad app domain given: ${appDomain}`); }
	const appSes = generateSession(devTools);

	setAppProtocolIn(appSes, appFilesRoot, appDomain, w3nSetup);

	const allowUrl = makeUrlChecker(
		`${protoSchemas.W3N_APP.scheme}://${appDomain}`,
		devTools
	);

	appSes.webRequest.onBeforeRequest((details, cb) => {
		if (allowUrl(details.url)) {
			cb({ cancel: false });
		} else {
			logWarning(`Canceled unexpected ${details.method} request for ${details.url}`);
			cb({ cancel: true });
		}
	});

	await setPermissionsInSession(appSes, capsReq, getHandler);

	return appSes;
}

async function setPermissionsInSession(
	session: Session, capsReq: RequestedCAPs|undefined, getHandler: HandlersGetter|undefined
): Promise<void> {

	// DEBUG logging function
	function debugLog(msg: string): void {
		if (platform() === 'darwin') {
			logWarning(`DEBUG LOG: ${msg}`).catch(noop);
		}
		console.log(`DEBUG LOG: ${msg}
		`);
	}
	if (capsReq?.mediaDevices && (platform() === 'darwin')) {
		const microphone = systemPreferences.getMediaAccessStatus('microphone');
		const camera = systemPreferences.getMediaAccessStatus('camera');
		const screen = systemPreferences.getMediaAccessStatus('screen');
		debugLog(`Calls to systemPreferences.getMediaAccessStatus(mediaType) return: ${JSON.stringify(
			{ camera, microphone, screen }, null, 2
		)}`);
		if (microphone !== 'granted') {
			const granted = await systemPreferences.askForMediaAccess('microphone');
			debugLog(`microphone -> systemPreferences.askForMediaAccess() ${granted ? 'was' : "wasn't"} granted`);
		}
		if (camera !== 'granted') {
			const granted = await systemPreferences.askForMediaAccess('camera');
			debugLog(`camera -> systemPreferences.askForMediaAccess() ${granted ? 'was' : "wasn't"} granted`);
		}
		if (screen !== 'granted') {
			try {
				const granted = await ensureDeviceAllowsScreenCapture();
				debugLog(`screen -> ensureDeviceAllowsScreenCapture() ${granted ? 'was' : "wasn't"} granted`);
			} catch (err) {
				logError(err, `Error thrown attempting to allow scren share`).catch(noop);
			}
		}
	}

	session.setPermissionCheckHandler((_wContent, permission) => {
		switch (permission) {
			case 'background-sync' as any:
				return true;
			case 'clipboard-read':
				return clipboardReadPermissionFrom(capsReq);
			case 'clipboard-sanitized-write':
				return clipboardWritePermissionFrom(capsReq);
			case 'fullscreen':
				return true;
			case 'media':
				return userMediaPermissionFrom(capsReq);
			case 'openExternal':
				return openExternalUrlPermissionFrom(capsReq);
			case 'speaker-selection' as any:
				return speakerSelectionPermissionFrom(capsReq);
			default:
				debugLog(`session's permissionCheckHandler returns false for permission ${permission}`);
				return false;
		}
	});
	session.setPermissionRequestHandler((_wContent, permission, cb, details) => {
		switch (permission) {
			case 'clipboard-read':
				return cb(clipboardReadPermissionFrom(capsReq));
			case 'clipboard-sanitized-write':
				return cb(clipboardWritePermissionFrom(capsReq));
			case 'display-capture':
				return cb(displayCapturePermissionFrom(capsReq));
			case 'fullscreen':
				return cb(true);
			case 'media':
				return cb(mediaPermissionFrom(capsReq, details));
			case 'openExternal':
				return cb(openExternalUrlPermissionFrom(capsReq));
			case 'speaker-selection':
				return cb(speakerSelectionPermissionFrom(capsReq));
			default:
				debugLog(`session's permissionRequestHandler does cb(false) for permission ${permission}`);
				return cb(false);
		}
	});

	session.setDisplayMediaRequestHandler(async (req, cb) => {
		const types = allowedDisplayMediaTypes(req, capsReq);
		if (!types) {
			debugLog(`session's displayMediaRequestHandler has no allowed types`);
			cb(null as any);
			return;
		}
		const selectMediaToCapture = getHandler?.('selectMediaForCapture');
		if (!selectMediaToCapture) {
			debugLog(`session's displayMediaRequestHandler has no selectMediaToCapture handler`);
			cb(null as any);
			return;
		}
		const deskSrcs = await desktopCapturer.getSources({
			types: [ 'screen', 'window' ],
			fetchWindowIcons: true,
			thumbnailSize: { width: 256, height: 256 }
		});
		const choices = toDisplaySourceInfo(deskSrcs);
		const selectedId = await selectMediaToCapture(choices);
		const selected = deskSrcs.find(src => (src.id === selectedId))!;
		if (selected) {
			if (platform() === 'win32') {
				cb({
					video: (req.videoRequested ? selected : undefined),
					audio: (req.audioRequested ? 'loopback' : undefined)
				});
			} else {
				cb({
					video: (req.videoRequested ? selected : undefined)
				});
			}
		} else {
			cb(null as any);
		}
	});

	session.setDevicePermissionHandler(details => {
		debugLog(`session's devicePermissionHandler returns false for ${JSON.stringify(details, null, 2)}`);
		return false;
	});

}

function userMediaPermissionFrom(capsReq: RequestedCAPs|undefined): boolean {
	if (capsReq?.mediaDevices) {
		const { cameras, microphones, speakers } = capsReq.mediaDevices;
		return !!(cameras && microphones && speakers);
	} else {
		return false;
	}
}

function allowedDisplayMediaTypes(
	{ audioRequested, videoRequested }: DisplayMediaRequestHandlerHandlerRequest,
	capsReq: RequestedCAPs|undefined
): SourcesOptions['types']|undefined {
	if (!audioRequested && !videoRequested) {
		return undefined;
	} else if (capsReq?.mediaDevices) {
		const { windows, screens } = capsReq.mediaDevices;
		const types: SourcesOptions['types'] = [];
		if ((screens === 'all') || (screens === 'use')) {
			types.push('screen');
		}
		if ((windows === 'all') || (windows === 'use')) {
			types.push('window');
		}
		return ((types.length > 0) ? types : undefined);
	} else {
		return undefined;
	}
}

function mediaPermissionFrom(
	capsReq: RequestedCAPs|undefined, req: MediaAccessPermissionRequest
): boolean {
	if (capsReq?.mediaDevices && req.mediaTypes) {
		if (req.mediaTypes.length === 0) {
			// this is an implicit permission request for "display media", streams
			// generated by internal processes, not an external world.
			const { windows, screens } = capsReq.mediaDevices;
			return (
				(windows === 'all') || (windows === 'use') ||
				(screens === 'all') || (screens === 'use')
			);	
		} else {
			const { cameras, microphones } = capsReq.mediaDevices;
			let cumulative = false;
			if (req.mediaTypes.includes('audio')) {
				if ((microphones !== 'all') && (microphones !== 'use')) {
					return false;
				}
				cumulative = true;
			}
			if (req.mediaTypes.includes('video')) {
				if ((cameras !== 'all') && (cameras !== 'use')) {
					return false;
				}
				cumulative = true;
			}
			return cumulative;
		}
	} else {
		return false;
	}
}

function speakerSelectionPermissionFrom(capsReq: RequestedCAPs|undefined): boolean {
	return !!capsReq?.mediaDevices?.speakers;
}

let partitionCounter = Date.now();
function generateSession(devTools: boolean): Session {
	partitionCounter += 1;
	if (partitionCounter === Number.MAX_SAFE_INTEGER) {
		partitionCounter = Number.MAX_SAFE_INTEGER;
	}
	const partition = (devTools ?
		`persist:s${partitionCounter}` :
		`s${partitionCounter}`
	);
	return session.fromPartition(partition, { cache: false });
}

function toDisplaySourceInfo(srcs: DesktopCapturerSource[]): DisplaySourceInfo {
	const screens: DisplaySourceInfo['screens'] = srcs
	.filter(({ id, thumbnail }) => (id.startsWith('screen:') && !!thumbnail))
	.map(({ id, name, display_id, thumbnail }) => ({
		id, name, display_id,
		thumbnail: optImageToPNG(thumbnail)!,
	}));
	const windows: NonNullable<DisplaySourceInfo['windows']> = srcs
	.filter(({ id, thumbnail }) => (id.startsWith('window:') && !!thumbnail))
	.map(({ id, name, thumbnail, appIcon }) => ({
		id, name,
		thumbnail: optImageToPNG(thumbnail)!,
		appIcon: optImageToPNG(appIcon)
	}));
	return {
		screens: ((screens.length > 0) ? screens : undefined),
		windows: ((windows.length > 0) ? windows : undefined)
	};
}

function optImageToPNG(img: NativeImage|undefined): Uint8Array|undefined {
	const bytes = img?.toPNG();
	return ((bytes && (bytes.length > 0)) ? bytes : undefined);
}

function displayCapturePermissionFrom(capsReq: RequestedCAPs|undefined): boolean {
	const allowance = capsReq?.mediaDevices;
	return (!!allowance && (!!allowance.screens || !!allowance.windows));
}

function clipboardReadPermissionFrom(capsReq: RequestedCAPs|undefined): boolean {
	const allowed = capsReq?.shell?.clipboard;
	return (!!allowed && ((allowed === 'all') || (allowed === 'readonly')));
}

function clipboardWritePermissionFrom(capsReq: RequestedCAPs|undefined): boolean {
	const allowed = capsReq?.shell?.clipboard;
	return (!!allowed && ((allowed === 'all') || (allowed === 'writeonly')));
}

function openExternalUrlPermissionFrom(capsReq: RequestedCAPs|undefined): boolean {
	return !!capsReq?.shell?.openURL;
}

export function makeSessionFor3NComms(): Session {
	const commSes = generateSession(false);

	// XXX should we added anything else here, like setting a proxy for 3NWeb
	//     protocols' calls?

	return commSes;
}

function makeUrlChecker(
	appUrlStart: string, devTools: boolean
): (url: string) => boolean {
	if (devTools)  {
		return url => (url.startsWith(appUrlStart) || devToolsExtFilter(url));
	} else {
		return url => url.startsWith(appUrlStart);
	}
}

export function makeSessionForDevAppFromUrl(
	url: string, capsReq: RequestedCAPs|undefined,
	getHandler: HandlersGetter|undefined
): Electron.Session {
	const appSes = generateSession(true);

	// XXX there are absolutely no restrictions here.
	// Should we tighten this? Or should devs do further testing with folder
	// based load to feed out requests that won't run in production?

	setPermissionsInSession(appSes, capsReq, getHandler);

	return appSes;
}

function noop() {}

export async function makeSessionForSite(urlPrefix: string, devTools: boolean): Promise<Session> {
	const siteSess = generateSession(devTools);

	const allowUrl = makeUrlChecker(urlPrefix, devTools);

	siteSess.webRequest.onBeforeRequest((details, cb) => {
		if (allowUrl(details.url)) {
			cb({ cancel: false });
		} else {
			logWarning(`Canceled unexpected ${details.method} request for ${details.url}`);
			cb({ cancel: true });
		}
	});

	await setPermissionsInSession(siteSess, undefined, undefined);

	return siteSess;
}


Object.freeze(exports);