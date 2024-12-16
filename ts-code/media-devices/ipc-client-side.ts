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

import { Caller, ClientSideServices } from 'core-3nweb-client-lib/build/ipc';
import { setSelectDisplayMediaForCaptureHandler } from './handler-caps-ipc';

type MediaDevices = web3n.media.MediaDevices;

export function makeMediaDevices(
	caller: Caller, mediaDevPath: string[], expServices: ClientSideServices
): MediaDevices {
	if (!caller.listObj) {
		throw new Error(`Caller here expects to have method 'listObj'`);
	}
	const media: MediaDevices = {};
	const lstMediaDeviceCAP = caller.listObj(
		mediaDevPath
	) as (keyof MediaDevices)[];
	addHandlerSetters(
		caller, expServices, media, mediaDevPath, lstMediaDeviceCAP
	);
	return media;
}

export async function promiseMediaDevices(
	caller: Caller, mediaDevPath: string[], expServices: ClientSideServices
): Promise<MediaDevices> {
	if (!caller.listObjAsync) {
		throw new Error(`Caller here expects to have method 'listObjAsync'`);
	}
	const media: MediaDevices = {};
	const lstMediaDeviceCAP = (
		await caller.listObjAsync(mediaDevPath)
	) as (keyof MediaDevices)[];
	addHandlerSetters(
		caller, expServices, media, mediaDevPath, lstMediaDeviceCAP
	);
	return media;
}

function addHandlerSetters(
	caller: Caller, expServices: ClientSideServices, media: MediaDevices,
	mediaDevPath: string[], lst: (keyof MediaDevices)[]
): void {
	if (lst.includes('setSelectDisplayMediaForCaptureHandler')) {
		media.setSelectDisplayMediaForCaptureHandler = setSelectDisplayMediaForCaptureHandler.makeClient(
			caller,
			mediaDevPath.concat('setSelectDisplayMediaForCaptureHandler'),
			expServices
		);
	}
}