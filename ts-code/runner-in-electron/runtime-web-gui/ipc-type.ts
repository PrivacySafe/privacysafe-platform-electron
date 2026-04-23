import type { Envelope } from "core-3nweb-client-lib/build/ipc";

export interface InitIPC {
	listObjOnServiceSide: (path: string[]) => string[];
	setHandlerOfMsgsFromCore: (
		handler: (msg: Envelope) => void
	) => (() => void);
	sendMsgToCore: (msg: Envelope) => void;
	standardFileToPath?: (stdFile: File) => string;
}

export interface ServiceProviderW3N {
	giveSignupTokenToClientPlatform: (token: string) => Promise<void>;
}
