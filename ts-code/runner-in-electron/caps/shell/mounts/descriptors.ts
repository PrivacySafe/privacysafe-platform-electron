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

import { join, sep } from 'path';
import { toBuffer } from '../../../../platform/lib-common/buffer-utils';
import { toCanonicalAddress } from '../../../../platform/lib-common/canonical-address';
import { makeFileException, Code } from '../../../../platform/lib-common/exceptions/file';
import { WeakCache } from '../../../../platform/lib-common/weak-cache';
import { FuserCallbacks, FileAttr, ForgetOpCB, GetAttrOpCB, SetAttrOpCB, OpenOpCB, ReadOpCB, ReleaseOpCB, OpenDirOpCB, ReadDirOpCB, ReleaseDirOpCB, GetXAttrOpCB, ListXAttrOpCB, AccessOpCB, DirectoryKind, FileKind, kindOf, DirEntry, MkNodOpCB, MkDirOpCB, UnlinkOpCB, RmDirOpCB, RenameOpCB, FSyncOpCB, FSyncDirOpCB, RemoveXAttrOpCB } from './native-mods';
import { Mounter } from './user-mounts';
import { defer, Deferred } from '../../../../platform/lib-common/processes/deferred';
import { FlushOpCB, XAttrBytesOrErr } from 'napi-fuser';

type FS = web3n.files.FS;
type File = web3n.files.File;
type Stats = web3n.files.Stats;
type FileException = web3n.files.FileException;
type ListingEntry = web3n.files.ListingEntry & { ino: number; };

const testStandMountpoint = `TestStand`;

const DIR_OPENING_FLAGS = 1;
const FILE_OPENING_FLAGS = 1;

export function makeMounting(rootMountpointPath: string): {
	getOrMakeUserMounts: (userId: string) => Promise<Mounter>;
	makeTestStandMount: () => Promise<Mounter>;
	implOfFuserCallbacks: () => FuserCallbacks;
	destroySignal: Promise<void>;
} {

	const userMounts = new Map<string, Mounter>();
	const deferredCompletion = defer<void>();

	let logsCounter = 0;
	function debugLog(...toLog: any[]): void {
		if (logsCounter > 20) {
			return;
		}
		logsCounter += 1;
		console.log(...toLog);
	}

	async function getOrMakeUserMounts(userId: string): Promise<Mounter> {
		const uId = toCanonicalAddress(userId);
		let mounts = userMounts.get(uId);
		if (!mounts) {
			mounts = new Mounter(
				userId, await descriptors.makeNodeInRoot(userId), join(rootMountpointPath, userId)
			);
			userMounts.set(uId, mounts);
		}
		return mounts;
	}

	async function makeTestStandMount(): Promise<Mounter> {
		const point = testStandMountpoint;
		return new Mounter(point, await descriptors.makeNodeInRoot(point), join(rootMountpointPath, point));
	}

	const descriptors = new Descriptors();

	const init: FuserCallbacks['init'] = (_err, rootIno) => {
		debugLog(` ▶ 👀 fuser init called with`, {_err, rootIno});
		descriptors.init(rootIno);
	};

	const destroy: FuserCallbacks['destroy'] = () => {
		debugLog(` 🏁 👀 removing mount at ${rootMountpointPath}`);
		descriptors.destroy();
		userMounts.clear();
		deferredCompletion.resolve();
	};

	const lookup: FuserCallbacks['lookup'] = async (_err, dirIno, childName) => {
		debugLog(` ▶ 👀 fuser lookup called with`, {_err, dirIno, childName});
		let dir = descriptors.getDirectory(dirIno);
		if (typeof dir === 'number') {
			return errReply(dir);
		}
		if (dir instanceof DirectoryInMounted) {
			if ((childName === '..') && !dir.pathInFS.includes('/')) {
				childName = '.';
				dir = dir.fsNode;
			} else {
				childName = `${dir.pathInFS}/${childName}`;
				dir = dir.fsNode;
			}
		}
		try {
			return { type: 'Attr', field0: await dir.lookup(childName) };
		} catch (exc) {
			return errReply(exc);
		}
	};

	const forget: ForgetOpCB = (_err, ino, nlookup) => {
		debugLog(` ▶ 👀 fuser forget called with`, {_err, ino, nlookup});
		descriptors?.forgetDescriptorBy(ino, nlookup);
	};

	const getattr: GetAttrOpCB = async (_err, ino, fh) => {
		debugLog(` ▶ 👀 fuser getattr called with`, {_err, ino, fh});
		let d = descriptors.get(ino);
		if (typeof d === 'number') {
			return errReply(d);
		}
		try {
			return { type: 'Attr', field0: await d.attrs() };
		} catch (exc) {
			return errReply(exc);
		}
	};

	const setattr: SetAttrOpCB = async (_err, ino, fh, changes) => {
		console.log(` ► setattr needs impl`, {ino, fh, changes});
		// XXX

		return errReply(ENOSYS);
	};

	const mknod: MkNodOpCB = async(_err, parent, name, mode, umask, rdev) => {
		console.log(` ► mknod needs impl`, {parent, name});
		// XXX

		return errReply(ENOSYS);
	};

	const mkdir: MkDirOpCB = async(_err, parent, name, mode, umask) => {
		console.log(` ► mkdir needs impl`, {parent, name});
		// XXX

		return errReply(ENOSYS);
	};

	const unlink: UnlinkOpCB = async(_err, parent, name) => {
		console.log(` ► unlink needs impl`, {parent, name});
		// XXX

		return ENOSYS;
	};

	const rmdir: RmDirOpCB = async(_err, parent, name) => {
		console.log(` ► rmdir needs impl`, {parent, name});
		// XXX

		return ENOSYS;
	};

	const rename: RenameOpCB = async(_err, parent, name, newparent, newname) => {
		console.log(` ► rename needs impl`, {parent, name, newparent, newname});
		// XXX

		return ENOSYS;
	};

	const open: OpenOpCB = async (_err, ino, flags) => {
		debugLog(` ▶ 👀 fuser open called with`, {_err, ino, flags});
		const d = descriptors.getFile(ino);
		if (typeof d === 'number') {
			return errReply(d);
		}
		try {
			const fh = d.handles.open(flags);
			return { type: 'Params', field0: { fh, flags: FILE_OPENING_FLAGS } };
		} catch (exc) {
			return errReply(exc);
		}
	};

	const read: ReadOpCB = async (_err, ino, fh, readArgs) => {
		debugLog(` ▶ 👀 fuser read called with`, {_err, ino, fh, readArgs});
		const d = descriptors.getFile(ino);
		if (typeof d === 'number') {
			return errReply(d);
		}
		try {
			const { offset, size, flags, lockOwner } = readArgs;
			const bytes = await d.readFileBytes(fh, offset, size);
			const buf = (bytes ? toBuffer(bytes) : Buffer.alloc(0));
			return { type: 'Ok', field0: buf };
		} catch (exc) {
			return errReply(exc);
		}
	};

	const flush: FlushOpCB = async (_err, ino, fh, lockOwner) => {
		console.log(` ► flush needs impl`, {ino, fh, lockOwner});
		// XXX

		return ENOSYS;
	};

	const release: ReleaseOpCB = async (_err, ino, fh, releaseArgs) => {
		debugLog(` ▶ 👀 fuser release called with`, {_err, ino, fh, releaseArgs});
		const d = descriptors.get(ino);
		if (typeof d !== 'number') {
			d.handles.drop(fh);
		}
		return 0;
	};

	const fsync: FSyncOpCB = async(_err, ino, fh, datasync) => {
		console.log(` ► fsync needs impl`, {ino, fh, datasync});
		// XXX

		return ENOSYS;
	};

	const opendir: OpenDirOpCB = async (_err, dirIno, flags) => {
		debugLog(` ▶ 👀 fuser opendir called with`, {_err, dirIno, flags});
		let dir = descriptors.getDirectory(dirIno);
		if (typeof dir === 'number') {
			return errReply(dir);
		}
		try {
			const fh = dir.handles.open(flags);
			return { type: 'Params', field0: { fh, flags: DIR_OPENING_FLAGS } };
		} catch (exc) {
			return errReply(exc);
		}
	};

	const readdir: ReadDirOpCB = async (_err, dirIno, fh, offset) => {
		debugLog(` ▶ 👀 fuser readdir called with`, {_err, dirIno, fh, offset});
		let dir = descriptors.getDirectory(dirIno);
		if (typeof dir === 'number') {
			return errReply(dir);
		}
		try {
			const h = dir.handles.get(fh);
			let entries = h?.lst;
			if (!entries) {
				entries = fsListingToFuse(await dir.list());
				if (h) {
					h.lst = entries;
				}
			}
			if (offset > 0) {
				entries = entries.slice(offset);
			}
			return { type: 'Lst', field0: entries };
		} catch (exc) {
			return errReply(exc);
		}
	};

	const releasedir: ReleaseDirOpCB = async (_err, dirIno, fh, flags) => {
		debugLog(` ▶ 👀 fuser releasedir called with`, {_err, dirIno, fh, flags});
		let dir = descriptors.getDirectory(dirIno);
		if (typeof dir !== 'number') {
			dir.handles.drop(fh);
		}
		return 0;
	};

	const fsyncdir: FSyncDirOpCB = async(_err, ino, fh, datasync) => {
		console.log(` ► fsyncdir needs impl`, {ino, fh, datasync});
		// XXX

		return ENOSYS;
	};

	const getxattr: GetXAttrOpCB = async (_err, ino, name, size) => {
		console.log(` ► 👀 fuser getxattr called with`, {ino, name, size});
		const d = descriptors.get(ino);
		if (typeof d === 'number') {
			return errReply(d);
		}
		try {
			const bytes = xattrValueToBytes(await d.getXAttr(name));
			return toXAttrReply(bytes, size);
		} catch (exc) {
			return errReply(exc);
		}
	};

	const listxattr: ListXAttrOpCB = async (_err, ino, size) => {
		console.log(` ► 👀 fuser listxattr called with`, {ino, size});
		const d = descriptors.get(ino);
		if (typeof d === 'number') {
			return errReply(d);
		}
		try {
			const lst = await d.listXAttrs();
			return toXAttrReply(stringArrToBuffer(lst), size);
		} catch (exc) {
			return errReply(exc);
		}
	};

	const removexattr: RemoveXAttrOpCB = async (_err, ino, name) => {
		console.log(` ► removexattr needs impl`, {ino, name});
		// XXX

		return ENOSYS;
	};

	const access: AccessOpCB = async (_err, ino, mask) => {
		debugLog(` ▶ 👀 fuser access called with`, {_err, ino, mask});
		const d = descriptors.get(ino);
		if (typeof d === 'number') {
			return d;
		}

		// XXX check access

		return 0;
	};

	return {
		getOrMakeUserMounts,
		makeTestStandMount,
		implOfFuserCallbacks: () => ({
			init, destroy, lookup, forget, getattr, setattr, mknod, mkdir, unlink, rmdir, rename,
			open, read, flush, release, fsync, opendir, readdir, releasedir, fsyncdir,
			getxattr, listxattr, removexattr, access
		}),
		destroySignal: deferredCompletion.promise
	};
}

function fsListingToFuse(lst: ListingEntry[]): DirEntry[] {
	const entries: DirEntry[] = [];
	for (let i=0; i<lst.length; i+=1) {
		const entry = lst[i];
		entries.push({
			ino: entry.ino,
			offset: i+1,
			name: entry.name,
			kind: kindOf(entry)
		});
	}
	return entries;
}

function stringArrToBuffer(arr: string[]): Buffer|undefined {
	// XXX
	if (arr.length === 0) {
		return;
	}

}

function xattrValueToBytes(v: any): Buffer|undefined {
	if (v === undefined) {
		return;
	} else if (typeof v === 'string') {
		return ((v.length > 0) ? Buffer.from(v, 'utf-8') : undefined);
	} else if (Buffer.isBuffer(v)) {
		return v;
	} else if (ArrayBuffer.isView(v)) {
		return toBuffer(v as Uint8Array);
	} else {
		return Buffer.from(JSON.stringify(v), 'utf-8');
	}
}

/**
 * Forms reply following [fuser doc](https://docs.rs/fuser/latest/fuser/trait.Filesystem.html#method.listxattr),
 * as of v.0.17.0.
 * @param data is a non-empty buffer, or unefined
 * @param sizeLimit 
 */
function toXAttrReply(data: Buffer|undefined, sizeLimit: number): XAttrBytesOrErr {
	if (!data) {
		return { type: 'Size', field0: 0 };
	} else if (data.length > sizeLimit) {
		return errReply(ERANGE);
	} else {
		return { type: 'Data', field0: data };
	}

}

class Descriptors {

	private readonly descriptors = new WeakCache<number, INode<unknown, unknown>>();
	private rootNode: Node|undefined = undefined;
	private deferredInit: Deferred<void>|undefined = defer();

	init(rootIno: number) {
		this.rootNode = new Node(
			rootIno,
			undefined as any,
			nextRDev(),
			{
				newUniqueInoValue: this.newUniqueInoValue.bind(this),
				cacheNewNode: n => this.descriptors.set(n.ino, n)
			}
		);
		this.deferredInit?.resolve();
		this.deferredInit = undefined;
		this.descriptors.set(this.rootNode.ino, this.rootNode);
	}

	private newUniqueInoValue(): number {
		let ino = nextIno();
		while (this.descriptors.has(ino)) {
			ino = nextIno();
		}
		return ino;
	}

	async makeNodeInRoot(topName: string): Promise<Node> {
		if (!this.rootNode) {
			await this.deferredInit!.promise;
		}
		if (topName.includes(sep)) {
			topName = topName.split(sep).join(' ');
		}
		return this.rootNode!.makeNewChildNode(topName);
	}

	get(ino: number): Descriptor|number {
		if (this.rootNode) {
			const d = this.descriptors.get(ino);
			return (d as Descriptor ?? ENOENT);
		} else {
			return ENOSYS;
		}
	}

	getFile(ino: number): FileDescriptor|NodeWithFile|number {
		if (this.rootNode) {
			const d = this.descriptors.get(ino);
			if (!d) {
				return ENOENT;
			} else if (d.isDir) {
				return EISDIR;
			} else {
				return d as FileDescriptor|NodeWithFile;
			}
		} else {
			return ENOSYS;
		}
	}

	getDirectory(dirIno: number): DirectoryDescriptor|number {
		if (this.rootNode) {
			const d = this.descriptors.get(dirIno);
			if (!d) {
				return ENOENT;
			} else if ((d as DirectoryDescriptor).isDir) {
				return d as DirectoryDescriptor;
			} else {
				return EISDIR;
			}
		} else {
			return ENOSYS;
		}
	}

	destroy(): void {
		if (this.rootNode) {
			this.rootNode.destroy();
			this.descriptors.clear();
			this.rootNode = undefined;
		}
	}

	forgetDescriptorBy(ino: number, nlookup: number): void {
		const d = this.descriptors.get(ino);
		if (!d) {
			return;
		}
		if ((d instanceof Node) || d.parent instanceof Node) {
			return;
		}
		d.nlookup -= nlookup;
		if (d.nlookup < 1) {
			d.destroy();
		}
	}

}

class Handles<H> {

	private readonly handles = new Map<number, H>();
	private readonly nextFh = makeUIntGenerator();
	constructor(
		private readonly makeHandle: () => H
	) {}

	open(flagsOnOpening: number): number {
		let fh = this.nextFh();
		while (this.handles.has(fh)) {
			fh = this.nextFh();
		}
		this.handles.set(fh, this.makeHandle());
		return fh;
	}

	drop(fh: number): void {
		this.handles.delete(fh);
	}

	get(fh: number): H|undefined {
		return this.handles.get(fh);
	}

}

type Descriptor = DirectoryDescriptor | FileDescriptor;
type DirectoryDescriptor = Node | NodeWithFS | DirectoryInMounted;
export type Nodes = (NodeWithFS | NodeWithFile | Node)[];
type FileDescriptor = NodeWithFile | FileInMounted;

function makeUIntGenerator(): (() => number) {
	let nextNum = 1;
	return () => {
		let num = nextNum;
		nextNum += 1;
		if (nextNum >= Number.MAX_SAFE_INTEGER) {
			nextNum = 1;
		}
		return num;
	};
}

const nextIno = makeUIntGenerator();
const nextRDev = makeUIntGenerator();

const uid = process.getuid?.()!;
const gid = process.getgid?.()!;

abstract class INode<H, P> {
	readonly handles: Handles<H>;
	nlookup = 0;
	constructor(
		public readonly ino: number,
		public parent: P,
		public readonly rdev: number,
		makeHandle: () => H
	) {
		this.handles = new Handles(makeHandle);
	}
	get isDir(): boolean {
		return false;
	}
	destroy(): void {}
	removeFromTree(): void {
		(this.parent as INodeWithChildren<unknown, unknown, unknown>)?.removeChildNode(this);
	}
	abstract attrs(): Promise<FileAttr>;
	abstract listXAttrs(): Promise<string[]>;
	abstract getXAttr(name: string): Promise<any>;
}

abstract class INodeWithChildren<H, P, C> extends INode<H, P> {
	readonly children = new Map<string, C>();
	constructor(
		ino: number, parent: P, rdev: number, makeHandle: () => H,
	) {
		super(ino, parent, rdev, makeHandle);
	}
	get isDir(): boolean {
		return true;
	}
	abstract lookup(name: string): Promise<FileAttr>;
	destroy(): void {
		for (const child of this.children.values()) {
			(child as INode<unknown, unknown>).destroy();
		}
		this.children.clear();
	}
	removeChildNode(child: C): boolean {
		let found: string|undefined = undefined;
		for (const [name, node] of this.children.entries()) {
			if (node === child) {
				found = name;
				break;
			}
		}
		return ((found !== undefined) ? this.children.delete(found) : false);
	}
	removeFromTree(): void {
		super.removeFromTree();
		this.removeChildren();
	}
	private removeChildren(): void {
		const children = Array.from(this.children.values());
		this.children.clear();
		for (const node of children) {
			(node as INodeWithChildren<unknown, unknown, unknown>)?.removeChildren();
		}
	}
}

interface INodeRefs {
	newUniqueInoValue: () => number;
	cacheNewNode: (node: INode<unknown, unknown>) => void;
}

export class Node extends INodeWithChildren<DirectoryHandle, Node, Node|NodeWithFS|NodeWithFile> {
	btime = Date.now();
	ctime = Date.now();
	mtime = Date.now();
	constructor(
		ino: number, parent: Node, rdev: number,
		private readonly refs: INodeRefs
	) {
		super(ino, parent, rdev, Node.makeDirectoryHandle);
	}

	private static makeDirectoryHandle(): DirectoryHandle {
		return {};
	}

	makeNewChildNode(name: string): Node {
		if (this.children.has(name)) {
			throw makeFileException('alreadyExists', name);
		}
		const ino = this.refs.newUniqueInoValue();
		const node = new Node(ino, this, this.rdev, this.refs);
		this.children.set(name, node);
		this.refs.cacheNewNode(node);
		return node;
	}

	getOrMakeChildNode(name: string): Node {
		let child = this.children.get(name);
		if (!child) {
			return this.makeNewChildNode(name);
		} else if (child instanceof Node) {
			return child;
		} else {
			throw makeFileException('alreadyExists', name);
		}
	}

	mountFS(name:string, fs: FS): NodeWithFS {
		if (this.children.has(name)) {
			throw makeFileException('alreadyExists', name);
		}
		const ino = this.refs.newUniqueInoValue();
		const node = new NodeWithFS(ino, this, nextRDev(), this.refs, fs);
		this.children.set(name, node);
		this.refs.cacheNewNode(node);
		return node;
	}

	mountFile(name:string, file: File): NodeWithFile {
		if (this.children.has(name)) {
			throw makeFileException('alreadyExists', name);
		}
		const ino = this.refs.newUniqueInoValue();
		const node = new NodeWithFile(ino, this, nextRDev(), file);
		this.children.set(name, node);
		this.refs.cacheNewNode(node);
		return node;
	}

	async lookup(name: string): Promise<FileAttr> {
		if (name === '.') {
			return this.attrs(true);
		} else if (name === '..') {
			return this.parent.attrs(true);
		}
		const child = this.children.get(name);
		if (!child) {
			throw makeFileException('notFound', name);
		}
		return await child.attrs(true);
	}

	async attrs(onlookup?: boolean): Promise<FileAttr> {
		if (onlookup) {
			this.nlookup += 1;
		}
		let keysLen = 0;
		for (const s of this.children.keys()) {
			keysLen += s.length + 1;
		}
		return {
			ino: this.ino,
			rdev: this.rdev,
			uid,
			gid,
			kind: DirectoryKind,
			btime: this.btime,
			ctime: this.ctime,
			mtime: this.mtime,
			size: Math.max(255, keysLen),
			flags: 0,
			perm: 0o550,
		};
	}

	async listXAttrs(): Promise<string[]> {
		return [];
	}

	async getXAttr(_name: string): Promise<undefined> {
		return;
	}

	list(): ListingEntry[] {
		const lst: ListingEntry[] = [];
		for (const [name, node] of this.children.entries()) {
			const ino = node.ino;
			lst.push((node instanceof NodeWithFile) ? { ino, name, isFile: true } : { ino, name, isFolder: true });
		}
		return lst;
	}

	removeChildNode(child: NodeWithFS|NodeWithFile|Node): boolean {
		const changed = super.removeChildNode(child);
		if (changed) {
			this.mtime = Date.now();
		}
		return changed;
	}

}

type FsNode = DirectoryInMounted|FileInMounted|NodeWithFS|NodeWithFile;

export class NodeWithFS extends INodeWithChildren<DirectoryHandle, DirectoryDescriptor, FsNode> {
	constructor(
		ino: number, parent: DirectoryDescriptor, rdev: number,
		private readonly refs: INodeRefs,
		public readonly fs: FS
	) {
		super(ino, parent, rdev, NodeWithFS.makeDirectoryHandle);
	}

	static makeDirectoryHandle(): DirectoryHandle {
		return {};
	}

	async lookup(name: string): Promise<FileAttr> {
		if (name === '.') {
			return this.attrs(true);
		} else if (name === '..') {
			return this.parent.attrs(true);
		}
		const stats = await this.fs.stat(name);
		let child = this.children.get(name);
		if (child) {
			if (!(await typesMatch(stats, child, this.fs, name))) {
				this.children.delete(name);
				child = undefined;
			}
		}
		if (!child) {
			child = await this.makeNodeForPath(name, stats);
			this.children.set(name, child);
		}
		return child.attrs(true);
	}

	async makeNodeForPath(path: string, stats?: Stats): Promise<FsNode> {
		if (!stats) {
			stats = await this.fs.stat(path);
		}
		let node: FsNode;
		const ino = this.refs.newUniqueInoValue();
		if (stats.isFolder) {
			node = new DirectoryInMounted(ino, this, this.rdev, this, path);
		} else if (stats.isFile) {
			node = new FileInMounted(ino, this, this.rdev, this, path);
		} else {
			const link = await this.fs.readLink(path);
			if (link.isFolder) {
				node = new NodeWithFS(ino, this, nextIno(), this.refs, (await link.target()) as FS);
			} else {
				node = new NodeWithFile(ino, this, nextIno(), (await link.target()) as File);
			}
		}
		this.refs.cacheNewNode(node);
		return node;
	}

	async attrs(onlookup = false): Promise<FileAttr> {
		if (onlookup) {
			this.nlookup += 1;
		}
		return this.attrsOf('', this.ino);
	}

	async attrsOf(pathInFS: string, ino: number): Promise<FileAttr> {
		const stats = await this.fs.stat(pathInFS);
		return {
			ino,
			rdev: this.rdev,
			uid,
			gid,
			kind: kindOf(stats),
			// XXX this needs to change, when core returns proper b(irth)time
			btime: stats.ctime?.valueOf() ?? 0,
			ctime: stats.ctime?.valueOf() ?? 0,
			mtime: stats.mtime?.valueOf() ?? 0,
			size: stats.size ?? 0,
			flags: 0,
			perm: (stats.isFolder ? 0o550 : 0o440)
		};
	}

	listXAttrs(): Promise<string[]> {
		return this.fs.listXAttrs('');
	}

	getXAttr(name: string): Promise<any> {
		return this.fs.getXAttr('', name);
	}

	async list(): Promise<ListingEntry[]> {
		return this.fs.listFolder('').then(async lst => {
			const children: ListingEntry[] = [];
			for (const entry of lst) {
				try {
					let node = this.children.get(entry.name);
					if (node && !(await typesMatch(entry, node, this.fs, entry.name))) {
						this.children.delete(entry.name);
						node = undefined;
					}
					if (!node) {
						node = await this.makeNodeForPath(entry.name);
						this.children.set(entry.name, node);
					}
					(entry as ListingEntry).ino = node.ino;
					children.push(entry as ListingEntry);
				} catch (err) {}
			}
			return children;
		});
	}

}

async function typesMatch(
	stats: { isFile?: boolean; isFolder?: boolean; }, node: FsNode, fs: FS, path: string
): Promise<boolean> {
	if (stats.isFile) {
		return !node.isDir;
	} else if (stats.isFolder) {
		return node.isDir;
	} else {
		const link = await this.fs.readLink(path);
		if (link.isFile) {
			return !node.isDir;
		} else {
			return node.isDir;
		}
	}
}

export class NodeWithFile extends INode<FileHandle, DirectoryDescriptor> {
	constructor(
		ino: number, parent: DirectoryDescriptor, rdev: number,
		public readonly file: File
	) {
		super(ino, parent, rdev, NodeWithFile.makeFileHandle);
	}

	static makeFileHandle(): FileHandle {
		return {};
	}

	async attrs(): Promise<FileAttr> {
		const stats = await this.file.stat();
		return {
			ino: this.ino,
			rdev: this.rdev,
			uid,
			gid,
			kind: FileKind,
			// XXX this needs to change, when core returns proper b(irth)time
			btime: stats.ctime?.valueOf() ?? 0,
			ctime: stats.ctime?.valueOf() ?? 0,
			mtime: stats.mtime?.valueOf() ?? 0,
			size: stats.size ?? 0,
			flags: 0,
			perm: 0o440,
		};
	}

	listXAttrs(): Promise<string[]> {
		return this.file.listXAttrs();
	}

	getXAttr(name: string): Promise<any> {
		return this.file.getXAttr(name);
	}

	readFileBytes(fh: number, ofs: number, len: number) {
		// XXX add work with file handler
		return this.file.readBytes(ofs, ofs+len);
	}

	removeFromTree(): void {
		this.parent.removeChildNode(this);
	}

}

interface DirectoryHandle {
	lst?: DirEntry[];
	version?: number;
}

interface FileHandle {}

interface SymLinkHandle {}

class DirectoryInMounted extends INodeWithChildren<DirectoryHandle, NodeWithFS|DirectoryInMounted, FsNode> {
	readonly handles = new Handles(NodeWithFS.makeDirectoryHandle);
	constructor(
		ino: number, parent: NodeWithFS|DirectoryInMounted, rdev: number,
		public readonly fsNode: NodeWithFS,
		public readonly pathInFS: string
	) {
		super(ino, parent, rdev, NodeWithFS.makeDirectoryHandle);
	}

	async lookup(name: string): Promise<FileAttr> {
		if (name === '.') {
			return this.attrs(true);
		} else if (name === '..') {
			return this.parent.attrs(true);
		}
		const childPath = `${this.pathInFS}/${name}`;
		const stats = await this.fsNode.fs.stat(childPath);
		let child = this.children.get(name);
		if (child && !(await typesMatch(stats, child, this.fsNode.fs, childPath))) {
			this.children.delete(name);
			child = undefined;
		}
		if (!child) {
			child = await this.fsNode.makeNodeForPath(name, stats);
			this.children.set(name, child);
		}
		return child.attrs(true);
	}

	attrs(onlookup?: boolean): Promise<FileAttr> {
		if (onlookup) {
			this.nlookup += 1;
		}
		return this.fsNode.attrsOf(this.pathInFS, this.ino);
	}

	listXAttrs(): Promise<string[]> {
		return this.fsNode.fs.listXAttrs(this.pathInFS);
	}

	getXAttr(name: string): Promise<any> {
		return this.fsNode.fs.getXAttr(this.pathInFS, name);
	}

	list(): Promise<ListingEntry[]> {
		return this.fsNode.fs.listFolder(this.pathInFS).then(async lst => {
			const children: ListingEntry[] = [];
			for (const entry of lst) {
				try {
					let node = this.children.get(entry.name);
					const childPath = `${this.pathInFS}/${entry.name}`;
					if (node && !(await typesMatch(entry, node, this.fsNode.fs, childPath))) {
						this.children.delete(entry.name);
						node = undefined;
					}
					if (!node) {
						node = await this.fsNode.makeNodeForPath(childPath);
						this.children.set(entry.name, node);
					}
					(entry as ListingEntry).ino = node.ino;
					children.push(entry as ListingEntry);
				} catch (err) {}
			}
			return children;
		});
	}

}

class FileInMounted extends INode<FileHandle, NodeWithFS|DirectoryInMounted> {
	constructor(
		ino: number, parent: NodeWithFS|DirectoryInMounted, rdev: number,
		public readonly fsNode: NodeWithFS,
		public readonly pathInFS: string
	) {
		super(ino, parent, rdev, NodeWithFile.makeFileHandle);
	}

	attrs(onlookup?: boolean): Promise<FileAttr> {
		if (onlookup) {
			this.nlookup += 1;
		}
		return this.fsNode.attrsOf(this.pathInFS, this.ino);
	}

	listXAttrs(): Promise<string[]> {
		return this.fsNode.fs.listXAttrs(this.pathInFS);
	}

	getXAttr(name: string): Promise<any> {
		return this.fsNode.fs.getXAttr(this.pathInFS, name);
	}

	readFileBytes(fh: number, ofs: number, len: number) {
		// XXX add work with file handler
		return this.fsNode.fs.readBytes(this.pathInFS, ofs, ofs+len);
	}

}

function errReply(err: number|FileException): { type: 'Err', field0: number } {
	if (typeof err === 'number') {
		return { type: 'Err', field0: err };
	}
	switch (err?.code) {
		case Code.notFound:
			return errReply(ENOENT);
		case Code.ioError:
			return errReply(EIO);
		case Code.notImplemented:
			return errReply(ENOSYS);
		case Code.alreadyExists:
			return errReply(EEXIST);
		case Code.notDirectory:
			return errReply(ENOTDIR);
		case Code.notFile:
			return errReply(ENOENT);
		case Code.isDirectory:
			return errReply(EISDIR);
		case Code.notEmpty:
			return errReply(ENOTEMPTY);
		case Code.opNotPermitted:
			return errReply(EPERM);
		case Code.busy:
			return errReply(EBUSY);
		default:
			return errReply(ENOSYS);
	}
}

// constants for errors that FUSE callback gives to kernel driver
const EPERM = 1;
const ENOENT = 2;
const ESRCH = 3;
const EINTR = 4;
const EIO = 5;
const ENXIO = 6;
const E2BIG = 7;
const ENOEXEC = 8;
const EBADF = 9;
const ECHILD = 10;
const EAGAIN = 11;
const ENOMEM = 12;
const EACCES = 13;
const EFAULT = 14;
const ENOTBLK = 15;
const EBUSY = 16;
const EEXIST = 17;
const EXDEV = 18;
const ENODEV = 19;
const ENOTDIR = 20;
const EISDIR = 21;
const EINVAL = 22;
const ENFILE = 23;
const EMFILE = 24;
const ENOTTY = 25;
const ETXTBSY = 26;
const EFBIG = 27;
const ENOSPC = 28;
const ESPIPE = 29;
const EROFS = 30;
const EMLINK = 31;
const EPIPE = 32;
const EDOM = 33;
const ERANGE = 34;
const EDEADLK = 35;
const ENAMETOOLONG = 36;
const ENOLCK = 37;
const ENOSYS = 38;
const ENOTEMPTY = 39;
const ELOOP = 40;
const EWOULDBLOCK = 11;
const ENOMSG = 42;
const EIDRM = 43;
const ECHRNG = 44;
const EL2NSYNC = 45;
const EL3HLT = 46;
const EL3RST = 47;
const ELNRNG = 48;
const EUNATCH = 49;
const ENOCSI = 50;
const EL2HLT = 51;
const EBADE = 52;
const EBADR = 53;
const EXFULL = 54;
const ENOANO = 55;
const EBADRQC = 56;
const EBADSLT = 57;
const EDEADLOCK = 35;
const EBFONT = 59;
const ENOSTR = 60;
const ENODATA = 61;
const ETIME = 62;
const ENOSR = 63;
const ENONET = 64;
const ENOPKG = 65;
const EREMOTE = 66;
const ENOLINK = 67;
const EADV = 68;
const ESRMNT = 69;
const ECOMM = 70;
const EPROTO = 71;
const EMULTIHOP = 72;
const EDOTDOT = 73;
const EBADMSG = 74;
const EOVERFLOW = 75;
const ENOTUNIQ = 76;
const EBADFD = 77;
const EREMCHG = 78;
const ELIBACC = 79;
const ELIBBAD = 80;
const ELIBSCN = 81;
const ELIBMAX = 82;
const ELIBEXEC = 83;
const EILSEQ = 84;
const ERESTART = 85;
const ESTRPIPE = 86;
const EUSERS = 87;
const ENOTSOCK = 88;
const EDESTADDRREQ = 89;
const EMSGSIZE = 90;
const EPROTOTYPE = 91;
const ENOPROTOOPT = 92;
const EPROTONOSUPPORT = 93;
const ESOCKTNOSUPPORT = 94;
const EOPNOTSUPP = 95;
const EPFNOSUPPORT = 96;
const EAFNOSUPPORT = 97;
const EADDRINUSE = 98;
const EADDRNOTAVAIL = 99;
const ENETDOWN = 100;
const ENETUNREACH = 101;
const ENETRESET = 102;
const ECONNABORTED = 103;
const ECONNRESET = 104;
const ENOBUFS = 105;
const EISCONN = 106;
const ENOTCONN = 107;
const ESHUTDOWN = 108;
const ETOOMANYREFS = 109;
const ETIMEDOUT = 110;
const ECONNREFUSED = 111;
const EHOSTDOWN = 112;
const EHOSTUNREACH = 113;
const EALREADY = 114;
const EINPROGRESS = 115;
const ESTALE = 116;
const EUCLEAN = 117;
const ENOTNAM = 118;
const ENAVAIL = 119;
const EISNAM = 120;
const EREMOTEIO = 121;
const EDQUOT = 122;
const ENOMEDIUM = 123;
const EMEDIUMTYPE = 124;


Object.freeze(exports);