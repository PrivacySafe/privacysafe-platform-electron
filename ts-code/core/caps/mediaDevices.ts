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

import { makeProxyToSelectDisplayMediaHandler } from "../../media-devices";
import { AppSetter, CAPsSetupFns, makeCAPsSetAppAndCloseFns } from "./index";

type W3N = web3n.caps.W3N;
type RequestedCAPs = web3n.caps.RequestedCAPs;
type MediaDevices = web3n.media.MediaDevices;

export function makeMediaDevicesCAP(
	mediaDevReq: RequestedCAPs['mediaDevices']
): {
	cap: NonNullable<W3N['mediaDevices']>; setApp: AppSetter; close: () => void;
}|undefined {
	if (!mediaDevReq) {
		return;
	}
	const cap: MediaDevices = {};
	const capsSetupFns: CAPsSetupFns[] = [];
	const setSelectDisplayMediaForCaptureHandler = makeSelectorOfDesktopMedia(
		mediaDevReq
	);
	if (setSelectDisplayMediaForCaptureHandler) {
		cap.setSelectDisplayMediaForCaptureHandler = setSelectDisplayMediaForCaptureHandler.cap;
		capsSetupFns.push(setSelectDisplayMediaForCaptureHandler);
	}
	if (Object.keys(cap).length > 0) {
		const { close, setApp } = makeCAPsSetAppAndCloseFns(...capsSetupFns);
		return { cap, close, setApp };
	}
}

function makeSelectorOfDesktopMedia(
	mediaDevReq: NonNullable<RequestedCAPs['mediaDevices']>
): {
	cap: MediaDevices['setSelectDisplayMediaForCaptureHandler'];
	setApp: AppSetter;
}|undefined {
	const { screens, windows } = mediaDevReq;
	if ((screens === 'all') || (screens === 'select')
	|| (windows === 'all') || (windows === 'select')) {
		return makeProxyToSelectDisplayMediaHandler();
	} else {
		return;
	}
}


Object.freeze(exports);