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

export function stringToUtf8Bytes(txt: string): Uint8Array {
	const encoder = new TextEncoder();
	return encoder.encode(txt);
}

export function utf8BytesToString(bytes: Uint8Array): string {
	const decoder = new TextDecoder();
	return decoder.decode(bytes);
}
