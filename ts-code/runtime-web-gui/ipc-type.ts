import { Envelope } from "core-3nweb-client-lib/build/ipc";

export interface InitIPC {
	listObjOnServiceSide: (path: string[]) => string[];
	setHandlerOfMsgsFromCore: (
		handler: (msg: Envelope) => void
	) => (() => void);
	sendMsgToCore: (msg: Envelope) => void;
}

