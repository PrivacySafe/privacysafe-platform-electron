/*
 Copyright (C) 2020, 2022 3NSoft Inc.
 
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

import { ExposedFn, Caller, ExposedObj, FileMsg, exposeFileService, ExposedServices, makeFileCaller, FSMsg, exposeFSService, makeFSCaller } from 'core-3nweb-client-lib/build/ipc';
import { ProtoType } from '../../ipc-with-core/protobuf-msg';
import { file_dialogs as pb } from '../../protos/file_dialogs.proto';

type FileDialogs = web3n.shell.files.Dialogs;

export function exposeFileDialogsCAP(
	cap: FileDialogs, expServices: ExposedServices
): ExposedObj<FileDialogs> {
	const exposed: ExposedObj<FileDialogs> = {};
	if (cap.openFileDialog) {
		exposed.openFileDialog = openFileDialog.wrapService(
			cap.openFileDialog, expServices);
	}
	if (cap.openFolderDialog) {
		exposed.openFolderDialog = openFolderDialog.wrapService(
			cap.openFolderDialog, expServices);
	}
	if (cap.saveFileDialog) {
		exposed.saveFileDialog = saveFileDialog.wrapService(
			cap.saveFileDialog, expServices);
	}
	if (cap.saveFolderDialog) {
		exposed.saveFolderDialog = saveFolderDialog.wrapService(
			cap.saveFolderDialog, expServices);
	}
	return exposed;
}

export function makeFileDialogs(
	caller: Caller, objPath: string[], exposed: (keyof FileDialogs)[]
): FileDialogs {
	const dialogs: FileDialogs = {};
	if (exposed.includes('openFileDialog')) {
		dialogs.openFileDialog = openFileDialog.makeCaller(caller, objPath);
	}
	if (exposed.includes('openFolderDialog')) {
		dialogs.openFolderDialog = openFolderDialog.makeCaller(caller, objPath);
	}
	if (exposed.includes('saveFileDialog')) {
		dialogs.saveFileDialog = saveFileDialog.makeCaller(caller, objPath);
	}
	if (exposed.includes('saveFolderDialog')) {
		dialogs.saveFolderDialog = saveFolderDialog.makeCaller(caller, objPath);
	}
	return dialogs;
}


type FileTypeFilter = web3n.shell.files.FileTypeFilter;

interface SaveDialogArgs {
	title: string;
	btnLabel: string;
	defaultPath: string;
	filters?: FileTypeFilter[];
}
const saveDialogArgsType = ProtoType.for<SaveDialogArgs>(pb.SaveDialogArgs);


namespace saveFileDialog {

	const replyType = ProtoType.for<{
		file?: FileMsg;
	}>(pb.SaveFileDialogReplyBody);

	export function wrapService(
		fn: NonNullable<FileDialogs['saveFileDialog']>,
		expServices: ExposedServices
	): ExposedFn {
		return bytes => {
			const { btnLabel, defaultPath, title, filters } =
				saveDialogArgsType.unpack(bytes);
			const promise = fn(title, btnLabel, defaultPath, filters)
			.then(fileObj => {
				const file = (fileObj ?
					exposeFileService(fileObj, expServices) : undefined);
				return replyType.pack({ file });
			});
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): FileDialogs['saveFileDialog'] {
		const path = objPath.concat('saveFileDialog');
		return async (title, btnLabel, defaultPath, filters) => {
			const req = saveDialogArgsType.pack({
				title, btnLabel, defaultPath, filters
			});
			const buf = await caller.startPromiseCall(path, req);
			const reply = replyType.unpack(buf);
			return (reply.file ?
				makeFileCaller(caller, reply.file) as web3n.files.WritableFile :
				undefined);
		};
	}

}
Object.freeze(saveFileDialog);


namespace saveFolderDialog {

	const replyType = ProtoType.for<{
		folder?: FSMsg;
	}>(pb.SaveFolderDialogReplyBody);

	export function wrapService(
		fn: NonNullable<FileDialogs['saveFolderDialog']>,
		expServices: ExposedServices
	): ExposedFn {
		return bytes => {
			const { btnLabel, defaultPath, title, filters } =
				saveDialogArgsType.unpack(bytes);
			const promise = fn(title, btnLabel, defaultPath, filters)
			.then(fsObj => {
				const folder = (fsObj ?
					exposeFSService(fsObj, expServices) : undefined);
				return replyType.pack({ folder });
			});
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): FileDialogs['saveFolderDialog'] {
		const path = objPath.concat('saveFolderDialog');
		return async (title, btnLabel, defaultPath, filters) => {
			const req = saveDialogArgsType.pack({
				title, btnLabel, defaultPath, filters
			});
			const buf = await caller.startPromiseCall(path, req);
			const reply = replyType.unpack(buf);
			return (reply.folder ?
				makeFSCaller(caller, reply.folder) as web3n.files.WritableFS :
				undefined);
		};
	}

}
Object.freeze(saveFolderDialog);


interface OpenDialogArgs {
	title: string;
	btnLabel: string;
	multiSelections: boolean;
	filters?: FileTypeFilter[];
}
const openDialogArgsType = ProtoType.for<OpenDialogArgs>(pb.OpenDialogArgs);


namespace openFileDialog {

	const replyType = ProtoType.for<{
		files?: FileMsg[];
	}>(pb.OpenFileDialogReplyBody);

	export function wrapService(
		fn: NonNullable<FileDialogs['openFileDialog']>,
		expServices: ExposedServices
	): ExposedFn {
		return bytes => {
			const { btnLabel, multiSelections, title, filters } =
				openDialogArgsType.unpack(bytes);
			const promise = fn(title, btnLabel, multiSelections, filters)
			.then(fileObjs => {
				const files = (fileObjs ?
					fileObjs.map(f => exposeFileService(f, expServices)) :
					undefined);
				return replyType.pack({ files });
			});
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): FileDialogs['openFileDialog'] {
		const path = objPath.concat('openFileDialog');
		return async (title, btnLabel, multiSelections, filters) => {
			const req = openDialogArgsType.pack({
				title, btnLabel, multiSelections, filters
			});
			const buf = await caller.startPromiseCall(path, req);
			const reply = replyType.unpack(buf);
			if (reply.files && (reply.files.length > 0)) {
				return reply.files.map(fMsg => makeFileCaller(caller, fMsg));
			} else {
				return undefined;
			}
		};
	}

}
Object.freeze(openFileDialog);


namespace openFolderDialog {

	const replyType = ProtoType.for<{
		folders?: FSMsg[];
	}>(pb.OpenFolderDialogReplyBody);

	export function wrapService(
		fn: NonNullable<FileDialogs['openFolderDialog']>,
		expServices: ExposedServices
	): ExposedFn {
		return bytes => {
			const { btnLabel, multiSelections, title, filters } =
				openDialogArgsType.unpack(bytes);
			const promise = fn(title, btnLabel, multiSelections, filters)
			.then(fsObjs => {
				const folders = (fsObjs ?
					fsObjs.map(f => exposeFSService(f, expServices)) :
					undefined);
				return replyType.pack({ folders });
			});
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): FileDialogs['openFolderDialog'] {
		const path = objPath.concat('openFolderDialog');
		return async (title, btnLabel, multiSelections, filters) => {
			const req = openDialogArgsType.pack({
				title, btnLabel, multiSelections, filters
			});
			const buf = await caller.startPromiseCall(path, req);
			const reply = replyType.unpack(buf);
			if (reply.folders && (reply.folders.length > 0)) {
				const folders = reply.folders.map(
					fsMsg => makeFSCaller(caller, fsMsg));
				return folders as web3n.files.WritableFS[];
			} else {
				return undefined;
			}
		};
	}

}
Object.freeze(openFolderDialog);


Object.freeze(exports);