/*
 Copyright (C) 2017, 2019, 2021 - 2022, 2024 3NSoft Inc.
 
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

import { desktopCapturer, session, Session, MediaAccessPermissionRequest } from 'electron';
import { setAppProtocolIn, protoSchemas, W3NSetupType } from "./protocols";
import { logWarning } from '../confs';
import { devToolsExtFilter } from '../init-proc/devtools';

type ReadonlyFS = web3n.files.ReadonlyFS;
type RequestedCAPs = web3n.caps.RequestedCAPs;

export function makeSessionForApp(
	appDomain: string, appFilesRoot: ReadonlyFS, w3nSetup: W3NSetupType,
	capsReq: RequestedCAPs|undefined, devTools: boolean
): Session {
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

	setPermissionsInSession(appSes, capsReq);

	return appSes;
}

function setPermissionsInSession(
	session: Session, capsReq: RequestedCAPs|undefined
): void {

	session.setPermissionCheckHandler((_wContent, permission) => {
		switch (permission) {
			case 'background-sync' as any:
				return true;
			case 'fullscreen':
				return true;
			case 'media':
				return mediaPermission(capsReq);
			case 'speaker-selection' as any:
				return speakerSelectionPermission(capsReq);
			default:
				return false;
		}
	});
	session.setPermissionRequestHandler((_wContent, permission, cb, details) => {
		switch (permission) {
			case 'fullscreen':
				return cb(true);
			case 'media':
				return cb(mediaPermissionRequest(capsReq, details));
			case 'speaker-selection':
				return cb(speakerSelectionPermission(capsReq));
			default:
				return cb(false);
		}
	});

	session.setDisplayMediaRequestHandler(async (
		{ audioRequested, videoRequested }, cb
	) => {

		console.log(` 🛠️ (need implementation) -> displayMediaRequestHandler, audioRequested is ${audioRequested}, videoRequested is ${videoRequested}`);

		const deskSrcs = await desktopCapturer.getSources({
			types: [ 'screen', 'window' ]
		});
		cb({ video: deskSrcs[0] });

	});

}

function mediaPermission(capsReq: RequestedCAPs|undefined): boolean {
	if (capsReq?.mediaDevices) {
		const { cameras, microphones, speakers } = capsReq.mediaDevices;
		return !!(cameras && microphones && speakers);
	} else {
		return false;
	}
}

function mediaPermissionRequest(
	capsReq: RequestedCAPs|undefined, req: MediaAccessPermissionRequest
): boolean {
	if (capsReq?.mediaDevices && req.mediaTypes) {
		if (req.mediaTypes.length === 0) {
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

function speakerSelectionPermission(capsReq: RequestedCAPs|undefined): boolean {
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

export function makeSessionFor3NComms(): Session {
	const commSes = generateSession(false);

	// XXX should we added anything else here?

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
	url: string, capsReq: RequestedCAPs|undefined
): Electron.Session {
	const appSes = generateSession(true);

	// XXX there are absolutely no restrictions here.
	// Should we tighten this? Or should devs do further testing with folder
	// based load to feed out requests that won't run in production?

	setPermissionsInSession(appSes, capsReq);

	return appSes;
}


Object.freeze(exports);