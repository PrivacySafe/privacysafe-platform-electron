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

import { Cryptor } from "core-3nweb-client-lib/build/cryptors";
import { LogError, LogWarning } from "core-3nweb-client-lib/build/lib-client/logging/log-to-file";
import { Cryptor as NativeCryptor } from "../native-modules/cryptor-mod";
import { toBuffer } from "../lib-common/buffer-utils";
import { cpus } from "os";

export function makeNativeCryptor(
	logErr: LogError, logWarning: LogWarning, maxThreads = cpus().length
): {
	 cryptor: Cryptor;
	 close: () => Promise<void>;
} {
	const nativeCryptor = NativeCryptor.makeTreaded(
		Math.max(maxThreads, 2), '3nweb-core-encryptor'
	);
	const cryptor: Cryptor = {
		box: {
			calc_dhshared_key: (pk, sk) => nativeCryptor.pbox.calcDhsharedKey(toBuffer(pk), toBuffer(sk)),
			generate_pubkey: sk => nativeCryptor.pbox.generatePubkey(toBuffer(sk))
		},
		sbox: {
			canStartUnderWorkLabel: wl => nativeCryptor.sbox.canStartUnderWorkLabel(wl),
			open: (c, n, k, wl) => nativeCryptor.sbox.open(toBuffer(c), toBuffer(n), toBuffer(k), wl),
			pack: (m, n, k, wl) => nativeCryptor.sbox.pack(toBuffer(m), toBuffer(n), toBuffer(k), wl),
			formatWN: {
				open: (cn, k, wl) => nativeCryptor.sbox.openFormatWN(toBuffer(cn), toBuffer(k), wl),
				pack: (m, n, k, wl) => nativeCryptor.sbox.packFormatWN(toBuffer(m), toBuffer(n), toBuffer(k), wl)
			}
		},
		scrypt: async (passwd, salt, logN, r, p, dkLen, progressCB) => nativeCryptor.scrypt(
			toBuffer(passwd), toBuffer(salt), logN, r, p, dkLen, (_, p) => progressCB(p)
		),
		signing: {
			generate_keypair: async seed => {
				const { pkey, skey } = await nativeCryptor.signing.generateKeypair(toBuffer(seed));
				return {
					pkey: new Uint8Array(pkey),
					skey: new Uint8Array(skey)
				};
			},
			signature: (m, sk) => nativeCryptor.signing.signature(toBuffer(m), toBuffer(sk)),
			verify: (sig, m, pk) => nativeCryptor.signing.verify(toBuffer(sig), toBuffer(m), toBuffer(pk))
		}
	};

	return { cryptor, close: async () => {} };
}