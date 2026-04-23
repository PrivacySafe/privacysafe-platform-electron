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

import type { AccessOpCB, DestroyOpCB, ForgetOpCB, FSMounter, GetAttrOpCB, GetXAttrOpCB, InitOpCB, InodeKind, ListXAttrOpCB, LookupOpCB, OpenDirOpCB, OpenOpCB, ReadDirOpCB, ReadOpCB, ReleaseDirOpCB, ReleaseOpCB, SetAttrOpCB, MkNodOpCB, MkDirOpCB, UnlinkOpCB, RmDirOpCB, RenameOpCB, FSyncOpCB, FSyncDirOpCB, RemoveXAttrOpCB, FlushOpCB } from "napi-fuser";
import { mkdirSync } from "fs";

export type { AccessOpCB, DestroyOpCB, ForgetOpCB, FSMounter, GetAttrOpCB, GetXAttrOpCB, InitOpCB, InodeKind, ListXAttrOpCB, LookupOpCB, OpenDirOpCB, OpenOpCB, ReadDirOpCB, ReadOpCB, ReleaseDirOpCB, ReleaseOpCB, SetAttrOpCB, FileAttr, DirEntry, MkNodOpCB, MkDirOpCB, UnlinkOpCB, RmDirOpCB, RenameOpCB, FSyncOpCB, FSyncDirOpCB, RemoveXAttrOpCB } from "napi-fuser";

export interface FuserCallbacks {
	init: InitOpCB;
	destroy: DestroyOpCB;
	lookup: LookupOpCB;
	forget: ForgetOpCB;
	getattr: GetAttrOpCB;
	setattr: SetAttrOpCB;
	mknod: MkNodOpCB;
	mkdir: MkDirOpCB;
	unlink: UnlinkOpCB;
	rmdir: RmDirOpCB;
	rename: RenameOpCB;
	open: OpenOpCB;
	read: ReadOpCB;
	flush: FlushOpCB;
	release: ReleaseOpCB;
	fsync: FSyncOpCB;
	opendir: OpenDirOpCB;
	readdir: ReadDirOpCB;
	releasedir: ReleaseDirOpCB;
	fsyncdir: FSyncDirOpCB;
	getxattr: GetXAttrOpCB;
	listxattr: ListXAttrOpCB;
	removexattr: RemoveXAttrOpCB;
	access: AccessOpCB;
}

export function mountFuser(path: string, volumeName: string, fuserCBs: FuserCallbacks): (() => void) {
	const fuser = require("napi-fuser");
	const {
		init, destroy, lookup, forget, getattr, setattr, mknod, mkdir, unlink, rmdir, rename,
		open, read, flush, release, fsync, opendir, readdir, releasedir, fsyncdir,
		getxattr, listxattr, removexattr, access
	} = fuserCBs;
	mkdirSync(path, { recursive: true });
	const mounter = (fuser.FSMounter as typeof FSMounter).makeAndMount(
		path, volumeName,
		init, destroy, lookup, forget, getattr, setattr, mknod, mkdir, unlink, rmdir, rename,
		open, read, flush, release, fsync, opendir, readdir, releasedir, fsyncdir,
		getxattr, listxattr, removexattr, access
	);
	return () => {
		try {
			mounter.unmount();
		} catch (err) {
			console.error(`Error on unmounting fuser`);
		}
	};
}

export const DirectoryKind = 0 as InodeKind.Directory;
export const FileKind = 1 as InodeKind.File;
export const SymLinkKind = 2 as InodeKind.SymLink;
export function kindOf(entry: { isFolder?: boolean; isFile?: boolean; isLink?: boolean; }): InodeKind {
	return (entry.isFile ? FileKind : (entry.isFolder ? DirectoryKind : SymLinkKind));
}

Object.freeze(exports);