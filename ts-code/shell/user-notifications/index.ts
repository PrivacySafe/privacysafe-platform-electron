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

import { Notification, NotificationConstructorOptions } from 'electron';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { AppSetter } from '../../core/core-driver';
import { Component } from '../../components';
import { GUIComponent } from '../../components/gui-component';
import { toRxObserver } from '../../lib-common/utils-for-observables';

type UserNotifications = web3n.shell.notifications.UserNotifications;
type NotificationOpts = web3n.shell.notifications.NotificationOpts;
type UserNotificationEvent = web3n.shell.notifications.UserNotificationEvent;
type Observer<T> = web3n.Observer<T>;


export class Notifications {

	private lastNotificationId = Date.now();
	private readonly appNotifications = new Set<AppNotifications>();

	constructor() {
		Object.seal(this);
	}

	makeFor(
		appDomain: string, component: string
	): {
		notifications: UserNotifications; setApp: AppSetter; close: () => void;
	} {
		const appNotifs = new AppNotifications(
			appDomain, component, this.unregisterAppNotifs, this.makeElectronNotif
		);
		this.appNotifications.add(appNotifs);
		return appNotifs.wrap();
	}

	private newNotificationId(): number {
		const prevId = this.lastNotificationId;
		this.lastNotificationId = Date.now();
		while (prevId >= this.lastNotificationId) {
			this.lastNotificationId += 1;
		}
		return this.lastNotificationId;
	}

	private readonly makeElectronNotif = (
		opts: NotificationConstructorOptions
	): { notificationId: number; notif: Notification; } => {
		const notif = new Notification(opts);
		const notificationId = this.newNotificationId();
		return { notif, notificationId };
	};

	private readonly unregisterAppNotifs = (
		appNotifs: AppNotifications
	): void => {
		this.appNotifications.delete(appNotifs);
	};

	close(): void {
		for (const appNotifs of this.appNotifications.values()) {
			appNotifs.closeByCore();
		}
		this.appNotifications.clear();
	}

}
Object.freeze(Notifications.prototype);
Object.freeze(Notifications);


class AppNotifications {

	private readonly notifs = new Map<number, Notification>();
	private readonly eventSink = new Subject<UserNotificationEvent>();
	private readonly event$ = this.eventSink.asObservable().pipe(share());
	private focusOnClick: (() => void)|undefined = undefined;

	constructor(
		public readonly appDomain: string,
		public readonly component: string,
		private readonly unregisterOnClose: Notifications['unregisterAppNotifs'],
		private readonly makeElectronNotif: Notifications['makeElectronNotif'],
	) {
		Object.seal(this);
	}

	wrap(): {
		notifications: UserNotifications; setApp: AppSetter; close: () => void;
	} {
		const notifications: UserNotifications = {
			addNotification: this.addNotification.bind(this),
			removeNotification: this.removeNotification.bind(this),
			watch: this.watch.bind(this)
		};
		const setApp = this.setComponentToFocus.bind(this);
		const close = this.closeByApp.bind(this);
		return { notifications, setApp, close };
	}

	private setComponentToFocus(component: Component): void {
		if ((component as GUIComponent).window) {
			this.focusOnClick = () => (component as GUIComponent).window.focus();
		}
	}

	private async addNotification(opts: NotificationOpts): Promise<number> {
		const { notificationId, notif } = this.makeElectronNotif({
			title: opts.title,
			body: opts.body
		});
		notif.on('show', () => this.eventSink.next({
			notificationId, type: 'shown'
		}));
		notif.on('click', () => {
			this.notifs.delete(notificationId);
			this.eventSink.next({
				notificationId, type: 'clicked'
			});
			if (this.focusOnClick) {
				this.focusOnClick();
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