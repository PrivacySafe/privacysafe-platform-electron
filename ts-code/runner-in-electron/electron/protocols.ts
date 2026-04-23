/*
 Copyright (C) 2017 - 2022, 2024, 2026 3NSoft Inc.
 
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
 
import { protocol, CustomScheme, Session } from 'electron';
import { toBuffer, EMPTY_BUFFER } from '../../platform/lib-common/buffer-utils';
import * as mime from 'mime';
import { logWarning } from '../confs';
import { join } from 'path';
import { readFile } from '../../platform/lib-common/async-fs-node';
import { AppFolder } from '../../platform/apps/app';

export const protoSchemas = {
	W3N_APP: {
		scheme: 'w3n-app',
		privileges: {
			standard: true,
			secure: true,
			supportFetchAPI: true
		}
	} as CustomScheme
};
Object.freeze(protoSchemas);

/**
 * This sets up our standard protocol schema(s).
 */
export function registerAllProtocolShemas(): void {
	protocol.registerSchemesAsPrivileged([
		protoSchemas.W3N_APP
	]);
}

type ReadonlyFS = web3n.files.ReadonlyFS;

export type W3NSetupType = 'regular'|'startup';

const dirWithPreloads = join(__dirname, '..', 'runtime-web-gui');
const REGULAR_W3N_SETUP_PATHNAME = '/setup-w3n.bundle.js';
const STARTUP_W3N_SETUP_PATHNAME = '/setup-w3n-for-startup.bundle.js';

function isW3NSetup(pathname: string, w3nSetup: W3NSetupType): boolean {
	if (w3nSetup === 'regular') {
		return (pathname === REGULAR_W3N_SETUP_PATHNAME);
	} else if (w3nSetup === 'startup') {
		return (pathname === STARTUP_W3N_SETUP_PATHNAME);
	} else {
		return false;
	}
}

async function getW3NSetup(w3nSetup: W3NSetupType): Promise<Buffer> {
	if (w3nSetup === 'regular') {
		return await readFile(
			join(dirWithPreloads, REGULAR_W3N_SETUP_PATHNAME.substring(1))
		);
	} else if (w3nSetup === 'startup') {
		return await readFile(
			join(dirWithPreloads, STARTUP_W3N_SETUP_PATHNAME.substring(1))
		);
	} else {
		throw new Error(`Unknown w3n setup type`);
	}
}

export function setAppProtocolIn(
	session: Session, appRoot: AppFolder, appDomain: string,
	w3nSetup: W3NSetupType
): void {
	if (session.protocol.isProtocolHandled(protoSchemas.W3N_APP.scheme)) {
		return;
	}
	const handler = makeAppProtoHandler(appRoot, appDomain, w3nSetup);
	session.protocol.registerBufferProtocol(
		protoSchemas.W3N_APP.scheme, handler
	);
}

function isGetOK(method: string, url: URL, appDomain: string): boolean {
	if (method.toUpperCase() !== 'GET') { return false; }
	if (url.host !== appDomain) { return false; }
	return true;
}

type FileException = web3n.files.FileException;

type BufferProtocolHandler = (
	request: Electron.ProtocolRequest,
	callback: (buffer: Buffer | Electron.ProtocolResponse) => void
) => void;

function makeAppProtoHandler(
	appRoot: AppFolder, appDomain: string, w3nSetup: W3NSetupType
): BufferProtocolHandler {
	return async (req, cb) => {
		try {
			const url = new URL(req.url);

			let isReqOK = isGetOK(req.method, url, appDomain);
			// url pasing does an encodeURI, that should be undone
			const pathname = decodeURI(url.pathname!);
			if (!isReqOK) {
				logWarning(`Canceled unexpected ${req.method} request for ${req.url}`);
				cb({ error: -10 });
				return;
			}

			const mimeType: string = mime.lookup(pathname);
			const content = await (isW3NSetup(pathname, w3nSetup) ?
				getW3NSetup(w3nSetup) :
				appRoot.readBytes(pathname)
			);
			cb({
				mimeType,
				data: (content ? toBuffer(content) : EMPTY_BUFFER)
			});
		} catch (err) {
			const exc = err as FileException;
			const errNum = ((exc.notFound || exc.notFile) ? -6 : -2);
			cb({ error: errNum });
		}
	}
}


Object.freeze(exports);