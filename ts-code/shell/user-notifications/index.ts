/*
 Copyright (C) 2022, 2025 3NSoft Inc.

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

import { nativeImage, NativeImage, Notification, NotificationConstructorOptions } from 'electron';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { logError } from '../../confs';
import { toBuffer } from '../../lib-common/buffer-utils';

type UserNotifications = web3n.shell.notifications.UserNotifications;
type NotificationOpts = web3n.shell.notifications.NotificationOpts;
type UserNotificationEvent = web3n.shell.notifications.UserNotificationEvent;
type Observer<T> = web3n.Observer<T>;
type CmdParams = web3n.shell.commands.CmdParams;
type ReadonlyFile = web3n.files.ReadonlyFile;

export class Notifications {

	private lastNotificationId = Date.now();
	private readonly appNotifications = new Set<AppNotifications>();
	private userId = '';

	constructor(
		private readonly triggerCmd: (appDomain: string, cmd: CmdParams) => Promise<void>
	) {
		Object.seal(this);
	}

	makeFor(appDomain: string, component: string): {
		notifications: UserNotifications; close: () => void;
	} {
		const appNotifs = new AppNotifications(
			appDomain, component,
			this.unregisterAppNotifs.bind(this), this.makeElectronNotif.bind(this),
			cmd => this.triggerCmd(appDomain, cmd)
		);
		this.appNotifications.add(appNotifs);
		return appNotifs.wrap();
	}

	setUserId(id: string): void {
		if (this.userId.length === 0) {
			this.userId = id;
		} else {
			throw new Error(`User id has already been set`);
		}
	}

	private newNotificationId(): number {
		const prevId = this.lastNotificationId;
		this.lastNotificationId = Date.now();
		while (prevId >= this.lastNotificationId) {
			this.lastNotificationId += 1;
		}
		return this.lastNotificationId;
	}

	private makeElectronNotif (
		opts: NotificationConstructorOptions
	): { notificationId: number; notif: Notification; } {
		const notif = new Notification(opts);
		const notificationId = this.newNotificationId();
		return { notif, notificationId };
	}

	private unregisterAppNotifs(appNotifs: AppNotifications): void {
		this.appNotifications.delete(appNotifs);
	}

	close(): void {
		for (const appNotifs of this.appNotifications.values()) {
			appNotifs.closeByCore();
		}
		this.appNotifications.clear();
	}

}
Object.freeze(Notifications.prototype);
Object.freeze(Notifications);


async function toNativeImage(icon: NotificationOpts['icon']): Promise<NativeImage|undefined> {
	if (!icon) {
		return;
	} else if ((icon as Uint8Array).BYTES_PER_ELEMENT) {
		return nativeImage.createFromBuffer(toBuffer(icon as Uint8Array));
	} else {
		const bytes = await (icon as ReadonlyFile).readBytes();
		if (bytes) {
			throw new Error(`File is empty`);
		}
		return nativeImage.createFromBuffer(toBuffer(icon as Uint8Array));
	}

}


class AppNotifications {

	private readonly notifs = new Map<number, Notification>();
	private readonly eventSink = new Subject<UserNotificationEvent>();
	private readonly event$ = this.eventSink.asObservable().pipe(share());

	constructor(
		public readonly appDomain: string,
		public readonly component: string,
		private readonly unregisterOnClose: Notifications['unregisterAppNotifs'],
		private readonly makeElectronNotif: Notifications['makeElectronNotif'],
		private readonly triggerCmd: (cmd: CmdParams) => Promise<void>
	) {
		Object.seal(this);
	}

	wrap(): { notifications: UserNotifications; close: () => void; } {
		const notifications: UserNotifications = {
			addNotification: this.addNotification.bind(this),
			removeNotification: this.removeNotification.bind(this),
			watch: this.watch.bind(this)
		};
		const close = this.closeByApp.bind(this);
		return { notifications, close };
	}

	private async addNotification({ title, body, cmd, silent, icon }: NotificationOpts): Promise<number> {
		const { notificationId, notif } = this.makeElectronNotif({
			title, body, silent, icon: await toNativeImage(icon)
		});
		notif.on('show', () => this.eventSink.next({
			notificationId, type: 'shown'
		}));
		notif.on('click', () => {
			this.notifs.delete(notificationId);
			this.eventSink.next({
				notificationId, type: 'clicked'
			});
			if (cmd) {
				this.triggerCmd(cmd).catch(err => logError(err, `Notification triggered command failed`));
			}
		});
		notif.on('close', () => {
			this.notifs.delete(notificationId);
			this.eventSink.next({
				notificationId, type: 'closed'
			});
		});
		notif.on('failed', () => {
			this.notifs.delete(notificationId);
			this.eventSink.next({
				notificationId, type: 'closed'
			});
		});
		this.notifs.set(notificationId, notif);
		notif.show();
		return notificationId;
	}

	private async removeNotification(id: number): Promise<void> {
		const notif = this.notifs.get(id);
		if (!notif) { return; }
	}

	private watch(obs: Observer<UserNotificationEvent>): () => void {
		const sub = this.event$.subscribe(toRxObserver(obs));
		return () => sub.unsubscribe();
	}

	private closeByApp(): void {
		this.closeAllNotifications();
		this.unregisterOnClose(this);
	}

	private closeAllNotifications(): void {
		for (const notif of this.notifs.values()) {
			notif.close();
		}
		this.notifs.clear();
	}

	closeByCore(): void {
		this.eventSink.complete();
		this.closeAllNotifications();
	}

}
Object.freeze(AppNotifications.prototype);
Object.freeze(AppNotifications);


Object.freeze(exports);