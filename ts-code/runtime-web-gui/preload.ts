/*
 Copyright (C) 2020 - 2021 3NSoft Inc.

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

import { makeW3N } from './renderer-side-wrap';
// import { contextBridge } from 'electron';

// XXX
// w3n is created in this isolated place with imports and signals from core.
// Can we have connector created in main world, getting messages from this
// isolated one.
// Creation of weakref inside main world will let it work properly.
// Weakref breaks across context boundary.

// contextBridge.exposeInMainWorld('w3n', makeW3N());

(window as any).w3n = makeW3N();
