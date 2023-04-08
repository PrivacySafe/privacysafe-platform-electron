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

import { screen, Display } from 'electron';


export interface WindowSize {
	width: number;
	height: number;
}

export interface Location {
	x: number;
	y: number;
}

export interface Rectangle extends WindowSize, Location {}


export class ScreenGUIPlacements {

	constructor() {

// DEBUG exploratory printouts
console.log(`\nAll screens:`, screen.getAllDisplays());
console.log(`\nPrimary screen:`, screen.getPrimaryDisplay());
console.log(`\nCursor screen point:`, screen.getCursorScreenPoint());

		Object.seal(this);
	}

	private onDisplayAdded(newDisplay: Display): void {
		// XXX
		//  - is this a new geometry?
		//  - do window changes their locations, or do we get & record new values?
		//  - should we reshuffle windows if this is recalled geometry?

	}

	private onDisplayRemoved(oldDisplay: Display): void {

		// XXX
		//  - is this a new geometry? is it similar to existing geometry?
		//  - do window changes their locations, or do we get & record new values?
		//  - should we reshuffle windows if this is recalled geometry?

	}

	private onDisplayMetricsChanged(display: Display): void {

		// XXX
		//  - is this a new geometry? is it similar to existing geometry?
		//  - do window changes their locations, or do we get & record new values?
		//  - should we reshuffle windows if this is recalled geometry?

	}

	private onWindowResize(): void {

		// XXX
		//  - individual

	}

	private onWindowMove(): void {

		// XXX
		//  - individual

	}

}
Object.freeze(ScreenGUIPlacements.prototype);
Object.freeze(ScreenGUIPlacements);


export type PlacementStrategy = 'memorized' | 'target-cursor' | 'target-parent' | 'target-primary-screen';

export function placementStrategyFor(): PlacementStrategy {

	// XXX
	//  - based on manifest should decide if window placements should be

	throw new Error(`placementStrategyFor() needs implementation`);
}


Object.freeze(exports);