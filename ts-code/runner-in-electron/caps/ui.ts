/*
 Copyright (C) 2025 3NSoft Inc.
 
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

import { screen } from 'electron';
import { FORM_FACTOR_OVERRIDE } from '../process-args';

type UI = web3n.ui.UI;
type WindowOptions = web3n.ui.WindowOptions;
type FormFactor = web3n.ui.FormFactor;

export function makeUICap(): UI {
	return {
		uiFormFactor: async () => getSytemFormFactor()
	};
}

export function getSytemFormFactor(): FormFactor {
	if (FORM_FACTOR_OVERRIDE) {
		return FORM_FACTOR_OVERRIDE;
	} else {
		return getDeviceFormFactor();
	}
}

function getDeviceFormFactor(): FormFactor {
	const { size } = screen.getPrimaryDisplay();
	if (size.width < 600) {
		return 'phone';
	} else if (size.width < 800) {
		return 'tablet';
	} else {
		return 'desktop';
	}
}

export function makeTestStandUICap(uiFF: FormFactor): UI {
	return {
		uiFormFactor: async () => uiFF
	};
}

export function conformWinOptsToFormFactor(
	winOpts: WindowOptions|undefined, requiredFF: FormFactor|undefined
): WindowOptions|undefined {
	if (!requiredFF) {
		requiredFF = getSytemFormFactor();
	}

	const deviceFF = getDeviceFormFactor();
	if (requiredFF === deviceFF) {
		if (winOpts && (deviceFF === 'phone')) {
			removeSizeParamsIn(winOpts);
		}
	} else if ((requiredFF === 'phone')
	&& ((deviceFF === 'desktop') || (deviceFF === 'tablet'))) {
		if (!winOpts) {
			winOpts = {};
		}
		setFixedsizeIn(winOpts, { width: 360, height: 768 });
	} else if ((requiredFF === 'tablet')
	&& (deviceFF === 'desktop')) {
		if (!winOpts) {
			winOpts = {};
		}
		setFixedsizeIn(winOpts, { width: 800, height: 600 });
	}

	return winOpts;
}

function removeSizeParamsIn(winOpts: WindowOptions): void {
	delete winOpts.height;
	delete winOpts.width;
	delete winOpts.minHeight;
	delete winOpts.minWidth;
	delete winOpts.maxHeight;
	delete winOpts.maxWidth;
}

function setFixedsizeIn(
	winOpts: WindowOptions,
	{ width, height }: { width: number, height: number }
): void {
	winOpts.width = width;
	winOpts.minWidth = width;
	winOpts.maxWidth = width;
	winOpts.height = height;
	winOpts.minHeight = height;
	winOpts.maxHeight = height;
}