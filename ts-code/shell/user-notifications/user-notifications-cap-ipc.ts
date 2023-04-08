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

import { ExposedFn, Caller, ExposedObj, EnvelopeBody } from 'core-3nweb-client-lib/build/ipc';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { fixInt, ProtoType, toOptVal, valOfOpt, Value } from '../../ipc-with-core/protobuf-msg';
import { toRxObserver } from '../../lib-common/utils-for-observables';
import { user_notifications as pb } from '../../protos/user_notifications.proto';

type UserNotifications = web3n.shell.notifications.UserNotifications;
type NotificationOpts = web3n.shell.notifications.NotificationOpts;
type UserNotificationEvent = web3n.shell.notifications.UserNotificationEvent;

export function exposeUserNotificationsCAP(
	cap: UserNotifications
): ExposedObj<UserNotifications> {
	return {
		addNotification: addNotification.wrapService(cap.addNotification),
		removeNotification: removeNotification.wrapService(
			cap.removeNotification),
		watch: watch.wrapService(cap.watch)
	};
}

export function makeUserNotifications(
	caller: Caller, objPath: string[]
): UserNotifications {
	return {
		addNotification: addNotification.makeCaller(caller, objPath),
		removeNotification: removeNotification.makeCaller(caller, objPath),
		watch: watch.makeCaller(caller, objPath)
	};
}


interface NotificationOptsMsg {
	title?: Value<string>;
	body?: Value<string>;
	focusAppWindow: boolean;
}

function notifOptsToMsg(opts: NotificationOpts): NotificationOptsMsg {
	return {
		body: toOptVal(opts.body),
		title: toOptVal(opts.title),
		focusAppWindow: opts.focusAppWindow
	};
}

function notifOptsFromMsg(msg: NotificationOptsMsg): NotificationOpts {
	return {
		body: valOfOpt(msg.body),
		title: valOfOpt(msg.title),
		focusAppWindow: msg.focusAppWindow
	};
}


namespace addNotification {

	const requestType = ProtoType.for<{
		opts: NotificationOptsMsg;
	}>(pb.AddNotificationRequestBody);

	const replyType = ProtoType.for<{
		notificationId: number;
	}>(pb.AddNotificationReplyBody);

	export function wrapService(
		fn: UserNotifications['addNotification']
	): ExposedFn {
		return buf => {
			const opts = notifOptsFromMsg(requestType.unpack(buf).opts);
			const promise = fn(opts)
			.then(notificationId => replyType.pack({ notificationId }));
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): UserNotifications['addNotification'] {
		const ipcPath = objPath.concat('addNotification');
		return opts => caller.startPromiseCall(ipcPath, requestType.pack({
			opts: notifOptsToMsg(opts)
		}))
		.then(buf => fixInt(replyType.unpack(buf).notificationId));
	}

}
Object.freeze(addNotification);


namespace removeNotification {

	const requestType = ProtoType.for<{
		id: number;
	}>(pb.RemoveNotificationRequestBody);

	export function wrapService(
		fn: UserNotifications['removeNotification']
	): ExposedFn {
		return buf => {
			const id = fixInt(requestType.unpack(buf).id);
			const promise = fn(id);
			return { promise };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): UserNotifications['removeNotification'] {
		const ipcPath = objPath.concat('removeNotification');
		return id => caller.startPromiseCall(ipcPath, requestType.pack({
			id
		})) as Promise<void>;
	}

}
Object.freeze(removeNotification);


namespace watch {

	const eventType = ProtoType.for<UserNotificationEvent>(
		pb.UserNotificationEvent);

	export function wrapService(fn: UserNotifications['watch']): ExposedFn {
		return () => {
			const s = new Subject<UserNotificationEvent>();
			const obs = s.asObservable().pipe(
				map(ev => eventType.pack(ev))
			);
			const onCancel = fn(s);
			return { obs, onCancel };
		};
	}

	export function makeCaller(
		caller: Caller, objPath: string[]
	): UserNotifications['watch'] {
		const ipcPath = objPath.concat('watch');
		return obs => {
			const s = new Subject<EnvelopeBody>();
			const unsub = caller.startObservableCall(ipcPath, undefined, s);
			s.pipe(
				map(buf => {
					const { notificationId, type } = eventType.unpack(buf);
					return { notificationId: fixInt(notificationId), type };
				})
			)
			.subscribe(toRxObserver(obs));
			return unsub;
		};
	}

}
Object.freeze(watch);


Object.freeze(exports);