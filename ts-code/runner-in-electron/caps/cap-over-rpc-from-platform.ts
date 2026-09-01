/*
 Copyright (C) 2026 3NSoft Inc.
 
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

import { systemCAPsDomain } from '../../platform/caps/rpc';
import type { Component, Service } from '../../platform/inject-defs/apps';
import { makeRPCException } from '../../platform/lib-common/manifest-utils';
import { defaultServiceForFileDialogsCAPs } from './shell/file-dialogs';

export async function getServiceForCAP(caller: Component, capName: string): Promise<Service> {
	if (capName.startsWith('w3n.shell.fileDialogs.')) {
		return await defaultServiceForFileDialogsCAPs(caller, capName);
	} else {
		throw makeRPCException(
			systemCAPsDomain, capName,
			{ capImplementingServiceNotFound: true },
			{ callerApp: caller.domain, callerComponent: caller.entrypoint }
		);
	}
}
