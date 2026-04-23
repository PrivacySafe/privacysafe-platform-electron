import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace file. */
export namespace file {

    /** Properties of a File. */
    interface IFile {

        /** File writable */
        writable?: (boolean|null);

        /** File isVersioned */
        isVersioned?: (boolean|null);

        /** File name */
        name?: (string|null);

        /** File isNew */
        isNew?: (boolean|null);

        /** File impl */
        impl?: (common.IObjectReference|null);

        /** File isSynced */
        isSynced?: (boolean|null);
    }

    /** Represents a File. */
    class File implements IFile {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFile);

        /** File writable. */
        public writable: boolean;

        /** File isVersioned. */
        public isVersioned: boolean;

        /** File name. */
        public name: string;

        /** File isNew. */
        public isNew: boolean;

        /** File impl. */
        public impl?: (common.IObjectReference|null);

        /** File isSynced. */
        public isSynced: boolean;

        /**
         * Creates a new File instance using the specified properties.
         * @param [properties] Properties to set
         * @returns File instance
         */
        public static create(properties?: file.IFile): file.File;

        /**
         * Encodes the specified File message. Does not implicitly {@link file.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link file.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.File;

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.File;

        /**
         * Verifies a File message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns File
         */
        public static fromObject(object: { [k: string]: any }): file.File;

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @param message File
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this File to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for File
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncStatusMsg. */
    interface ISyncStatusMsg {

        /** SyncStatusMsg state */
        state?: (string|null);

        /** SyncStatusMsg local */
        local?: (file.ISyncVersionsBranchMsg|null);

        /** SyncStatusMsg synced */
        synced?: (file.ISyncVersionsBranchMsg|null);

        /** SyncStatusMsg remote */
        remote?: (file.ISyncVersionsBranchMsg|null);

        /** SyncStatusMsg existsInSyncedParent */
        existsInSyncedParent?: (common.IBooleanValue|null);

        /** SyncStatusMsg uploading */
        uploading?: (file.IUploadingStateMsg|null);
    }

    /** Represents a SyncStatusMsg. */
    class SyncStatusMsg implements ISyncStatusMsg {

        /**
         * Constructs a new SyncStatusMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.ISyncStatusMsg);

        /** SyncStatusMsg state. */
        public state: string;

        /** SyncStatusMsg local. */
        public local?: (file.ISyncVersionsBranchMsg|null);

        /** SyncStatusMsg synced. */
        public synced?: (file.ISyncVersionsBranchMsg|null);

        /** SyncStatusMsg remote. */
        public remote?: (file.ISyncVersionsBranchMsg|null);

        /** SyncStatusMsg existsInSyncedParent. */
        public existsInSyncedParent?: (common.IBooleanValue|null);

        /** SyncStatusMsg uploading. */
        public uploading?: (file.IUploadingStateMsg|null);

        /**
         * Creates a new SyncStatusMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncStatusMsg instance
         */
        public static create(properties?: file.ISyncStatusMsg): file.SyncStatusMsg;

        /**
         * Encodes the specified SyncStatusMsg message. Does not implicitly {@link file.SyncStatusMsg.verify|verify} messages.
         * @param message SyncStatusMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.ISyncStatusMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncStatusMsg message, length delimited. Does not implicitly {@link file.SyncStatusMsg.verify|verify} messages.
         * @param message SyncStatusMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.ISyncStatusMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncStatusMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncStatusMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.SyncStatusMsg;

        /**
         * Decodes a SyncStatusMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncStatusMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.SyncStatusMsg;

        /**
         * Verifies a SyncStatusMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncStatusMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncStatusMsg
         */
        public static fromObject(object: { [k: string]: any }): file.SyncStatusMsg;

        /**
         * Creates a plain object from a SyncStatusMsg message. Also converts values to other types if specified.
         * @param message SyncStatusMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.SyncStatusMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncStatusMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncStatusMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncVersionsBranchMsg. */
    interface ISyncVersionsBranchMsg {

        /** SyncVersionsBranchMsg latest */
        latest?: (common.IUInt64Value|null);

        /** SyncVersionsBranchMsg archived */
        archived?: ((number|Long)[]|null);

        /** SyncVersionsBranchMsg isArchived */
        isArchived?: (common.IBooleanValue|null);
    }

    /** Represents a SyncVersionsBranchMsg. */
    class SyncVersionsBranchMsg implements ISyncVersionsBranchMsg {

        /**
         * Constructs a new SyncVersionsBranchMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.ISyncVersionsBranchMsg);

        /** SyncVersionsBranchMsg latest. */
        public latest?: (common.IUInt64Value|null);

        /** SyncVersionsBranchMsg archived. */
        public archived: (number|Long)[];

        /** SyncVersionsBranchMsg isArchived. */
        public isArchived?: (common.IBooleanValue|null);

        /**
         * Creates a new SyncVersionsBranchMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncVersionsBranchMsg instance
         */
        public static create(properties?: file.ISyncVersionsBranchMsg): file.SyncVersionsBranchMsg;

        /**
         * Encodes the specified SyncVersionsBranchMsg message. Does not implicitly {@link file.SyncVersionsBranchMsg.verify|verify} messages.
         * @param message SyncVersionsBranchMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.ISyncVersionsBranchMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncVersionsBranchMsg message, length delimited. Does not implicitly {@link file.SyncVersionsBranchMsg.verify|verify} messages.
         * @param message SyncVersionsBranchMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.ISyncVersionsBranchMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncVersionsBranchMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncVersionsBranchMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.SyncVersionsBranchMsg;

        /**
         * Decodes a SyncVersionsBranchMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncVersionsBranchMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.SyncVersionsBranchMsg;

        /**
         * Verifies a SyncVersionsBranchMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncVersionsBranchMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncVersionsBranchMsg
         */
        public static fromObject(object: { [k: string]: any }): file.SyncVersionsBranchMsg;

        /**
         * Creates a plain object from a SyncVersionsBranchMsg message. Also converts values to other types if specified.
         * @param message SyncVersionsBranchMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.SyncVersionsBranchMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncVersionsBranchMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncVersionsBranchMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadingStateMsg. */
    interface IUploadingStateMsg {

        /** UploadingStateMsg localVersion */
        localVersion?: (number|Long|null);

        /** UploadingStateMsg remoteVersion */
        remoteVersion?: (number|Long|null);

        /** UploadingStateMsg bytesLeftToUpload */
        bytesLeftToUpload?: (number|Long|null);

        /** UploadingStateMsg uploadStarted */
        uploadStarted?: (boolean|null);
    }

    /** Represents an UploadingStateMsg. */
    class UploadingStateMsg implements IUploadingStateMsg {

        /**
         * Constructs a new UploadingStateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IUploadingStateMsg);

        /** UploadingStateMsg localVersion. */
        public localVersion: (number|Long);

        /** UploadingStateMsg remoteVersion. */
        public remoteVersion: (number|Long);

        /** UploadingStateMsg bytesLeftToUpload. */
        public bytesLeftToUpload: (number|Long);

        /** UploadingStateMsg uploadStarted. */
        public uploadStarted: boolean;

        /**
         * Creates a new UploadingStateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadingStateMsg instance
         */
        public static create(properties?: file.IUploadingStateMsg): file.UploadingStateMsg;

        /**
         * Encodes the specified UploadingStateMsg message. Does not implicitly {@link file.UploadingStateMsg.verify|verify} messages.
         * @param message UploadingStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IUploadingStateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadingStateMsg message, length delimited. Does not implicitly {@link file.UploadingStateMsg.verify|verify} messages.
         * @param message UploadingStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IUploadingStateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadingStateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadingStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.UploadingStateMsg;

        /**
         * Decodes an UploadingStateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadingStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.UploadingStateMsg;

        /**
         * Verifies an UploadingStateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadingStateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadingStateMsg
         */
        public static fromObject(object: { [k: string]: any }): file.UploadingStateMsg;

        /**
         * Creates a plain object from an UploadingStateMsg message. Also converts values to other types if specified.
         * @param message UploadingStateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.UploadingStateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadingStateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadingStateMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StatsMsg. */
    interface IStatsMsg {

        /** StatsMsg isFile */
        isFile?: (common.IBooleanValue|null);

        /** StatsMsg isFolder */
        isFolder?: (common.IBooleanValue|null);

        /** StatsMsg isLink */
        isLink?: (common.IBooleanValue|null);

        /** StatsMsg writable */
        writable?: (boolean|null);

        /** StatsMsg size */
        size?: (common.IUInt64Value|null);

        /** StatsMsg mtime */
        mtime?: (common.IUInt64Value|null);

        /** StatsMsg ctime */
        ctime?: (common.IUInt64Value|null);

        /** StatsMsg version */
        version?: (common.IUInt64Value|null);

        /** StatsMsg bytesNeedDownload */
        bytesNeedDownload?: (common.IUInt64Value|null);

        /** StatsMsg versionSyncBranch */
        versionSyncBranch?: (common.IStringValue|null);
    }

    /** Represents a StatsMsg. */
    class StatsMsg implements IStatsMsg {

        /**
         * Constructs a new StatsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IStatsMsg);

        /** StatsMsg isFile. */
        public isFile?: (common.IBooleanValue|null);

        /** StatsMsg isFolder. */
        public isFolder?: (common.IBooleanValue|null);

        /** StatsMsg isLink. */
        public isLink?: (common.IBooleanValue|null);

        /** StatsMsg writable. */
        public writable: boolean;

        /** StatsMsg size. */
        public size?: (common.IUInt64Value|null);

        /** StatsMsg mtime. */
        public mtime?: (common.IUInt64Value|null);

        /** StatsMsg ctime. */
        public ctime?: (common.IUInt64Value|null);

        /** StatsMsg version. */
        public version?: (common.IUInt64Value|null);

        /** StatsMsg bytesNeedDownload. */
        public bytesNeedDownload?: (common.IUInt64Value|null);

        /** StatsMsg versionSyncBranch. */
        public versionSyncBranch?: (common.IStringValue|null);

        /**
         * Creates a new StatsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatsMsg instance
         */
        public static create(properties?: file.IStatsMsg): file.StatsMsg;

        /**
         * Encodes the specified StatsMsg message. Does not implicitly {@link file.StatsMsg.verify|verify} messages.
         * @param message StatsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IStatsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatsMsg message, length delimited. Does not implicitly {@link file.StatsMsg.verify|verify} messages.
         * @param message StatsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IStatsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.StatsMsg;

        /**
         * Decodes a StatsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.StatsMsg;

        /**
         * Verifies a StatsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatsMsg
         */
        public static fromObject(object: { [k: string]: any }): file.StatsMsg;

        /**
         * Creates a plain object from a StatsMsg message. Also converts values to other types if specified.
         * @param message StatsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.StatsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StatsMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetXAttrRequestBody. */
    interface IGetXAttrRequestBody {

        /** GetXAttrRequestBody xaName */
        xaName?: (string|null);
    }

    /** Represents a GetXAttrRequestBody. */
    class GetXAttrRequestBody implements IGetXAttrRequestBody {

        /**
         * Constructs a new GetXAttrRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IGetXAttrRequestBody);

        /** GetXAttrRequestBody xaName. */
        public xaName: string;

        /**
         * Creates a new GetXAttrRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetXAttrRequestBody instance
         */
        public static create(properties?: file.IGetXAttrRequestBody): file.GetXAttrRequestBody;

        /**
         * Encodes the specified GetXAttrRequestBody message. Does not implicitly {@link file.GetXAttrRequestBody.verify|verify} messages.
         * @param message GetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetXAttrRequestBody message, length delimited. Does not implicitly {@link file.GetXAttrRequestBody.verify|verify} messages.
         * @param message GetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetXAttrRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.GetXAttrRequestBody;

        /**
         * Decodes a GetXAttrRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.GetXAttrRequestBody;

        /**
         * Verifies a GetXAttrRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetXAttrRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetXAttrRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.GetXAttrRequestBody;

        /**
         * Creates a plain object from a GetXAttrRequestBody message. Also converts values to other types if specified.
         * @param message GetXAttrRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.GetXAttrRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetXAttrRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetXAttrRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a XAttrValue. */
    interface IXAttrValue {

        /** XAttrValue str */
        str?: (common.IStringValue|null);

        /** XAttrValue json */
        json?: (common.IStringValue|null);

        /** XAttrValue bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a XAttrValue. */
    class XAttrValue implements IXAttrValue {

        /**
         * Constructs a new XAttrValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IXAttrValue);

        /** XAttrValue str. */
        public str?: (common.IStringValue|null);

        /** XAttrValue json. */
        public json?: (common.IStringValue|null);

        /** XAttrValue bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new XAttrValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XAttrValue instance
         */
        public static create(properties?: file.IXAttrValue): file.XAttrValue;

        /**
         * Encodes the specified XAttrValue message. Does not implicitly {@link file.XAttrValue.verify|verify} messages.
         * @param message XAttrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IXAttrValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XAttrValue message, length delimited. Does not implicitly {@link file.XAttrValue.verify|verify} messages.
         * @param message XAttrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IXAttrValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XAttrValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.XAttrValue;

        /**
         * Decodes a XAttrValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.XAttrValue;

        /**
         * Verifies a XAttrValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XAttrValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XAttrValue
         */
        public static fromObject(object: { [k: string]: any }): file.XAttrValue;

        /**
         * Creates a plain object from a XAttrValue message. Also converts values to other types if specified.
         * @param message XAttrValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.XAttrValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XAttrValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for XAttrValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadBytesRequestBody. */
    interface IReadBytesRequestBody {

        /** ReadBytesRequestBody start */
        start?: (common.IUInt64Value|null);

        /** ReadBytesRequestBody end */
        end?: (common.IUInt64Value|null);
    }

    /** Represents a ReadBytesRequestBody. */
    class ReadBytesRequestBody implements IReadBytesRequestBody {

        /**
         * Constructs a new ReadBytesRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IReadBytesRequestBody);

        /** ReadBytesRequestBody start. */
        public start?: (common.IUInt64Value|null);

        /** ReadBytesRequestBody end. */
        public end?: (common.IUInt64Value|null);

        /**
         * Creates a new ReadBytesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadBytesRequestBody instance
         */
        public static create(properties?: file.IReadBytesRequestBody): file.ReadBytesRequestBody;

        /**
         * Encodes the specified ReadBytesRequestBody message. Does not implicitly {@link file.ReadBytesRequestBody.verify|verify} messages.
         * @param message ReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadBytesRequestBody message, length delimited. Does not implicitly {@link file.ReadBytesRequestBody.verify|verify} messages.
         * @param message ReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.ReadBytesRequestBody;

        /**
         * Decodes a ReadBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.ReadBytesRequestBody;

        /**
         * Verifies a ReadBytesRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadBytesRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.ReadBytesRequestBody;

        /**
         * Creates a plain object from a ReadBytesRequestBody message. Also converts values to other types if specified.
         * @param message ReadBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.ReadBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadBytesRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadBytesRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadBytesReplyBody. */
    interface IReadBytesReplyBody {

        /** ReadBytesReplyBody bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a ReadBytesReplyBody. */
    class ReadBytesReplyBody implements IReadBytesReplyBody {

        /**
         * Constructs a new ReadBytesReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IReadBytesReplyBody);

        /** ReadBytesReplyBody bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new ReadBytesReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadBytesReplyBody instance
         */
        public static create(properties?: file.IReadBytesReplyBody): file.ReadBytesReplyBody;

        /**
         * Encodes the specified ReadBytesReplyBody message. Does not implicitly {@link file.ReadBytesReplyBody.verify|verify} messages.
         * @param message ReadBytesReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IReadBytesReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadBytesReplyBody message, length delimited. Does not implicitly {@link file.ReadBytesReplyBody.verify|verify} messages.
         * @param message ReadBytesReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IReadBytesReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadBytesReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.ReadBytesReplyBody;

        /**
         * Decodes a ReadBytesReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.ReadBytesReplyBody;

        /**
         * Verifies a ReadBytesReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadBytesReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadBytesReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.ReadBytesReplyBody;

        /**
         * Creates a plain object from a ReadBytesReplyBody message. Also converts values to other types if specified.
         * @param message ReadBytesReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.ReadBytesReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadBytesReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadBytesReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedReadFlags. */
    interface IVersionedReadFlags {

        /** VersionedReadFlags archivedVersion */
        archivedVersion?: (common.IUInt64Value|null);

        /** VersionedReadFlags remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);
    }

    /** Represents a VersionedReadFlags. */
    class VersionedReadFlags implements IVersionedReadFlags {

        /**
         * Constructs a new VersionedReadFlags.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedReadFlags);

        /** VersionedReadFlags archivedVersion. */
        public archivedVersion?: (common.IUInt64Value|null);

        /** VersionedReadFlags remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new VersionedReadFlags instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedReadFlags instance
         */
        public static create(properties?: file.IVersionedReadFlags): file.VersionedReadFlags;

        /**
         * Encodes the specified VersionedReadFlags message. Does not implicitly {@link file.VersionedReadFlags.verify|verify} messages.
         * @param message VersionedReadFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedReadFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedReadFlags message, length delimited. Does not implicitly {@link file.VersionedReadFlags.verify|verify} messages.
         * @param message VersionedReadFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedReadFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedReadFlags message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedReadFlags;

        /**
         * Decodes a VersionedReadFlags message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedReadFlags;

        /**
         * Verifies a VersionedReadFlags message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedReadFlags message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedReadFlags
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedReadFlags;

        /**
         * Creates a plain object from a VersionedReadFlags message. Also converts values to other types if specified.
         * @param message VersionedReadFlags
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedReadFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedReadFlags to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedReadFlags
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestWithVersionedReadFlags. */
    interface IRequestWithVersionedReadFlags {

        /** RequestWithVersionedReadFlags flags */
        flags?: (file.IVersionedReadFlags|null);
    }

    /** Represents a RequestWithVersionedReadFlags. */
    class RequestWithVersionedReadFlags implements IRequestWithVersionedReadFlags {

        /**
         * Constructs a new RequestWithVersionedReadFlags.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IRequestWithVersionedReadFlags);

        /** RequestWithVersionedReadFlags flags. */
        public flags?: (file.IVersionedReadFlags|null);

        /**
         * Creates a new RequestWithVersionedReadFlags instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestWithVersionedReadFlags instance
         */
        public static create(properties?: file.IRequestWithVersionedReadFlags): file.RequestWithVersionedReadFlags;

        /**
         * Encodes the specified RequestWithVersionedReadFlags message. Does not implicitly {@link file.RequestWithVersionedReadFlags.verify|verify} messages.
         * @param message RequestWithVersionedReadFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IRequestWithVersionedReadFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestWithVersionedReadFlags message, length delimited. Does not implicitly {@link file.RequestWithVersionedReadFlags.verify|verify} messages.
         * @param message RequestWithVersionedReadFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IRequestWithVersionedReadFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestWithVersionedReadFlags message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestWithVersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.RequestWithVersionedReadFlags;

        /**
         * Decodes a RequestWithVersionedReadFlags message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestWithVersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.RequestWithVersionedReadFlags;

        /**
         * Verifies a RequestWithVersionedReadFlags message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestWithVersionedReadFlags message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestWithVersionedReadFlags
         */
        public static fromObject(object: { [k: string]: any }): file.RequestWithVersionedReadFlags;

        /**
         * Creates a plain object from a RequestWithVersionedReadFlags message. Also converts values to other types if specified.
         * @param message RequestWithVersionedReadFlags
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.RequestWithVersionedReadFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestWithVersionedReadFlags to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestWithVersionedReadFlags
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetXAttrRequestBody. */
    interface IVersionedGetXAttrRequestBody {

        /** VersionedGetXAttrRequestBody xaName */
        xaName?: (string|null);

        /** VersionedGetXAttrRequestBody flags */
        flags?: (file.IVersionedReadFlags|null);
    }

    /** Represents a VersionedGetXAttrRequestBody. */
    class VersionedGetXAttrRequestBody implements IVersionedGetXAttrRequestBody {

        /**
         * Constructs a new VersionedGetXAttrRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedGetXAttrRequestBody);

        /** VersionedGetXAttrRequestBody xaName. */
        public xaName: string;

        /** VersionedGetXAttrRequestBody flags. */
        public flags?: (file.IVersionedReadFlags|null);

        /**
         * Creates a new VersionedGetXAttrRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetXAttrRequestBody instance
         */
        public static create(properties?: file.IVersionedGetXAttrRequestBody): file.VersionedGetXAttrRequestBody;

        /**
         * Encodes the specified VersionedGetXAttrRequestBody message. Does not implicitly {@link file.VersionedGetXAttrRequestBody.verify|verify} messages.
         * @param message VersionedGetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetXAttrRequestBody message, length delimited. Does not implicitly {@link file.VersionedGetXAttrRequestBody.verify|verify} messages.
         * @param message VersionedGetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetXAttrRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedGetXAttrRequestBody;

        /**
         * Decodes a VersionedGetXAttrRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedGetXAttrRequestBody;

        /**
         * Verifies a VersionedGetXAttrRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedGetXAttrRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedGetXAttrRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedGetXAttrRequestBody;

        /**
         * Creates a plain object from a VersionedGetXAttrRequestBody message. Also converts values to other types if specified.
         * @param message VersionedGetXAttrRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedGetXAttrRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedGetXAttrRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedGetXAttrRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetXAttrReplyBody. */
    interface IVersionedGetXAttrReplyBody {

        /** VersionedGetXAttrReplyBody version */
        version?: (number|Long|null);

        /** VersionedGetXAttrReplyBody str */
        str?: (common.IStringValue|null);

        /** VersionedGetXAttrReplyBody json */
        json?: (common.IStringValue|null);

        /** VersionedGetXAttrReplyBody bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a VersionedGetXAttrReplyBody. */
    class VersionedGetXAttrReplyBody implements IVersionedGetXAttrReplyBody {

        /**
         * Constructs a new VersionedGetXAttrReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedGetXAttrReplyBody);

        /** VersionedGetXAttrReplyBody version. */
        public version: (number|Long);

        /** VersionedGetXAttrReplyBody str. */
        public str?: (common.IStringValue|null);

        /** VersionedGetXAttrReplyBody json. */
        public json?: (common.IStringValue|null);

        /** VersionedGetXAttrReplyBody bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new VersionedGetXAttrReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetXAttrReplyBody instance
         */
        public static create(properties?: file.IVersionedGetXAttrReplyBody): file.VersionedGetXAttrReplyBody;

        /**
         * Encodes the specified VersionedGetXAttrReplyBody message. Does not implicitly {@link file.VersionedGetXAttrReplyBody.verify|verify} messages.
         * @param message VersionedGetXAttrReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedGetXAttrReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetXAttrReplyBody message, length delimited. Does not implicitly {@link file.VersionedGetXAttrReplyBody.verify|verify} messages.
         * @param message VersionedGetXAttrReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedGetXAttrReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetXAttrReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetXAttrReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedGetXAttrReplyBody;

        /**
         * Decodes a VersionedGetXAttrReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetXAttrReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedGetXAttrReplyBody;

        /**
         * Verifies a VersionedGetXAttrReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedGetXAttrReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedGetXAttrReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedGetXAttrReplyBody;

        /**
         * Creates a plain object from a VersionedGetXAttrReplyBody message. Also converts values to other types if specified.
         * @param message VersionedGetXAttrReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedGetXAttrReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedGetXAttrReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedGetXAttrReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedListXAttrsReplyBody. */
    interface IVersionedListXAttrsReplyBody {

        /** VersionedListXAttrsReplyBody version */
        version?: (number|Long|null);

        /** VersionedListXAttrsReplyBody xaNames */
        xaNames?: (string[]|null);
    }

    /** Represents a VersionedListXAttrsReplyBody. */
    class VersionedListXAttrsReplyBody implements IVersionedListXAttrsReplyBody {

        /**
         * Constructs a new VersionedListXAttrsReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedListXAttrsReplyBody);

        /** VersionedListXAttrsReplyBody version. */
        public version: (number|Long);

        /** VersionedListXAttrsReplyBody xaNames. */
        public xaNames: string[];

        /**
         * Creates a new VersionedListXAttrsReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedListXAttrsReplyBody instance
         */
        public static create(properties?: file.IVersionedListXAttrsReplyBody): file.VersionedListXAttrsReplyBody;

        /**
         * Encodes the specified VersionedListXAttrsReplyBody message. Does not implicitly {@link file.VersionedListXAttrsReplyBody.verify|verify} messages.
         * @param message VersionedListXAttrsReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedListXAttrsReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedListXAttrsReplyBody message, length delimited. Does not implicitly {@link file.VersionedListXAttrsReplyBody.verify|verify} messages.
         * @param message VersionedListXAttrsReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedListXAttrsReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedListXAttrsReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedListXAttrsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedListXAttrsReplyBody;

        /**
         * Decodes a VersionedListXAttrsReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedListXAttrsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedListXAttrsReplyBody;

        /**
         * Verifies a VersionedListXAttrsReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedListXAttrsReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedListXAttrsReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedListXAttrsReplyBody;

        /**
         * Creates a plain object from a VersionedListXAttrsReplyBody message. Also converts values to other types if specified.
         * @param message VersionedListXAttrsReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedListXAttrsReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedListXAttrsReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedListXAttrsReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedReadBytesRequestBody. */
    interface IVersionedReadBytesRequestBody {

        /** VersionedReadBytesRequestBody start */
        start?: (common.IUInt64Value|null);

        /** VersionedReadBytesRequestBody end */
        end?: (common.IUInt64Value|null);

        /** VersionedReadBytesRequestBody flags */
        flags?: (file.IVersionedReadFlags|null);
    }

    /** Represents a VersionedReadBytesRequestBody. */
    class VersionedReadBytesRequestBody implements IVersionedReadBytesRequestBody {

        /**
         * Constructs a new VersionedReadBytesRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedReadBytesRequestBody);

        /** VersionedReadBytesRequestBody start. */
        public start?: (common.IUInt64Value|null);

        /** VersionedReadBytesRequestBody end. */
        public end?: (common.IUInt64Value|null);

        /** VersionedReadBytesRequestBody flags. */
        public flags?: (file.IVersionedReadFlags|null);

        /**
         * Creates a new VersionedReadBytesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedReadBytesRequestBody instance
         */
        public static create(properties?: file.IVersionedReadBytesRequestBody): file.VersionedReadBytesRequestBody;

        /**
         * Encodes the specified VersionedReadBytesRequestBody message. Does not implicitly {@link file.VersionedReadBytesRequestBody.verify|verify} messages.
         * @param message VersionedReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedReadBytesRequestBody message, length delimited. Does not implicitly {@link file.VersionedReadBytesRequestBody.verify|verify} messages.
         * @param message VersionedReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedReadBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedReadBytesRequestBody;

        /**
         * Decodes a VersionedReadBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedReadBytesRequestBody;

        /**
         * Verifies a VersionedReadBytesRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedReadBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedReadBytesRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedReadBytesRequestBody;

        /**
         * Creates a plain object from a VersionedReadBytesRequestBody message. Also converts values to other types if specified.
         * @param message VersionedReadBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedReadBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedReadBytesRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedReadBytesRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedReadBytesReplyBody. */
    interface IVersionedReadBytesReplyBody {

        /** VersionedReadBytesReplyBody version */
        version?: (number|Long|null);

        /** VersionedReadBytesReplyBody bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a VersionedReadBytesReplyBody. */
    class VersionedReadBytesReplyBody implements IVersionedReadBytesReplyBody {

        /**
         * Constructs a new VersionedReadBytesReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedReadBytesReplyBody);

        /** VersionedReadBytesReplyBody version. */
        public version: (number|Long);

        /** VersionedReadBytesReplyBody bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new VersionedReadBytesReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedReadBytesReplyBody instance
         */
        public static create(properties?: file.IVersionedReadBytesReplyBody): file.VersionedReadBytesReplyBody;

        /**
         * Encodes the specified VersionedReadBytesReplyBody message. Does not implicitly {@link file.VersionedReadBytesReplyBody.verify|verify} messages.
         * @param message VersionedReadBytesReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedReadBytesReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedReadBytesReplyBody message, length delimited. Does not implicitly {@link file.VersionedReadBytesReplyBody.verify|verify} messages.
         * @param message VersionedReadBytesReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedReadBytesReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedReadBytesReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedReadBytesReplyBody;

        /**
         * Decodes a VersionedReadBytesReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedReadBytesReplyBody;

        /**
         * Verifies a VersionedReadBytesReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedReadBytesReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedReadBytesReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedReadBytesReplyBody;

        /**
         * Creates a plain object from a VersionedReadBytesReplyBody message. Also converts values to other types if specified.
         * @param message VersionedReadBytesReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedReadBytesReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedReadBytesReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedReadBytesReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedReadTxtReplyBody. */
    interface IVersionedReadTxtReplyBody {

        /** VersionedReadTxtReplyBody version */
        version?: (number|Long|null);

        /** VersionedReadTxtReplyBody txt */
        txt?: (string|null);
    }

    /** Represents a VersionedReadTxtReplyBody. */
    class VersionedReadTxtReplyBody implements IVersionedReadTxtReplyBody {

        /**
         * Constructs a new VersionedReadTxtReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedReadTxtReplyBody);

        /** VersionedReadTxtReplyBody version. */
        public version: (number|Long);

        /** VersionedReadTxtReplyBody txt. */
        public txt: string;

        /**
         * Creates a new VersionedReadTxtReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedReadTxtReplyBody instance
         */
        public static create(properties?: file.IVersionedReadTxtReplyBody): file.VersionedReadTxtReplyBody;

        /**
         * Encodes the specified VersionedReadTxtReplyBody message. Does not implicitly {@link file.VersionedReadTxtReplyBody.verify|verify} messages.
         * @param message VersionedReadTxtReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedReadTxtReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedReadTxtReplyBody message, length delimited. Does not implicitly {@link file.VersionedReadTxtReplyBody.verify|verify} messages.
         * @param message VersionedReadTxtReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedReadTxtReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedReadTxtReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedReadTxtReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedReadTxtReplyBody;

        /**
         * Decodes a VersionedReadTxtReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedReadTxtReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedReadTxtReplyBody;

        /**
         * Verifies a VersionedReadTxtReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedReadTxtReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedReadTxtReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedReadTxtReplyBody;

        /**
         * Creates a plain object from a VersionedReadTxtReplyBody message. Also converts values to other types if specified.
         * @param message VersionedReadTxtReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedReadTxtReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedReadTxtReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedReadTxtReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedReadJsonReplyBody. */
    interface IVersionedReadJsonReplyBody {

        /** VersionedReadJsonReplyBody version */
        version?: (number|Long|null);

        /** VersionedReadJsonReplyBody json */
        json?: (string|null);
    }

    /** Represents a VersionedReadJsonReplyBody. */
    class VersionedReadJsonReplyBody implements IVersionedReadJsonReplyBody {

        /**
         * Constructs a new VersionedReadJsonReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedReadJsonReplyBody);

        /** VersionedReadJsonReplyBody version. */
        public version: (number|Long);

        /** VersionedReadJsonReplyBody json. */
        public json: string;

        /**
         * Creates a new VersionedReadJsonReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedReadJsonReplyBody instance
         */
        public static create(properties?: file.IVersionedReadJsonReplyBody): file.VersionedReadJsonReplyBody;

        /**
         * Encodes the specified VersionedReadJsonReplyBody message. Does not implicitly {@link file.VersionedReadJsonReplyBody.verify|verify} messages.
         * @param message VersionedReadJsonReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedReadJsonReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedReadJsonReplyBody message, length delimited. Does not implicitly {@link file.VersionedReadJsonReplyBody.verify|verify} messages.
         * @param message VersionedReadJsonReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedReadJsonReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedReadJsonReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedReadJsonReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedReadJsonReplyBody;

        /**
         * Decodes a VersionedReadJsonReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedReadJsonReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedReadJsonReplyBody;

        /**
         * Verifies a VersionedReadJsonReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedReadJsonReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedReadJsonReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedReadJsonReplyBody;

        /**
         * Creates a plain object from a VersionedReadJsonReplyBody message. Also converts values to other types if specified.
         * @param message VersionedReadJsonReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedReadJsonReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedReadJsonReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedReadJsonReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetByteSourceReplyBody. */
    interface IVersionedGetByteSourceReplyBody {

        /** VersionedGetByteSourceReplyBody version */
        version?: (number|Long|null);

        /** VersionedGetByteSourceReplyBody src */
        src?: (common.IObjectReference|null);
    }

    /** Represents a VersionedGetByteSourceReplyBody. */
    class VersionedGetByteSourceReplyBody implements IVersionedGetByteSourceReplyBody {

        /**
         * Constructs a new VersionedGetByteSourceReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedGetByteSourceReplyBody);

        /** VersionedGetByteSourceReplyBody version. */
        public version: (number|Long);

        /** VersionedGetByteSourceReplyBody src. */
        public src?: (common.IObjectReference|null);

        /**
         * Creates a new VersionedGetByteSourceReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetByteSourceReplyBody instance
         */
        public static create(properties?: file.IVersionedGetByteSourceReplyBody): file.VersionedGetByteSourceReplyBody;

        /**
         * Encodes the specified VersionedGetByteSourceReplyBody message. Does not implicitly {@link file.VersionedGetByteSourceReplyBody.verify|verify} messages.
         * @param message VersionedGetByteSourceReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedGetByteSourceReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetByteSourceReplyBody message, length delimited. Does not implicitly {@link file.VersionedGetByteSourceReplyBody.verify|verify} messages.
         * @param message VersionedGetByteSourceReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedGetByteSourceReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetByteSourceReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetByteSourceReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedGetByteSourceReplyBody;

        /**
         * Decodes a VersionedGetByteSourceReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetByteSourceReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedGetByteSourceReplyBody;

        /**
         * Verifies a VersionedGetByteSourceReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedGetByteSourceReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedGetByteSourceReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedGetByteSourceReplyBody;

        /**
         * Creates a plain object from a VersionedGetByteSourceReplyBody message. Also converts values to other types if specified.
         * @param message VersionedGetByteSourceReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedGetByteSourceReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedGetByteSourceReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedGetByteSourceReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListVersionsReplyBody. */
    interface IListVersionsReplyBody {

        /** ListVersionsReplyBody current */
        current?: (common.IUInt64Value|null);

        /** ListVersionsReplyBody archived */
        archived?: ((number|Long)[]|null);
    }

    /** Represents a ListVersionsReplyBody. */
    class ListVersionsReplyBody implements IListVersionsReplyBody {

        /**
         * Constructs a new ListVersionsReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IListVersionsReplyBody);

        /** ListVersionsReplyBody current. */
        public current?: (common.IUInt64Value|null);

        /** ListVersionsReplyBody archived. */
        public archived: (number|Long)[];

        /**
         * Creates a new ListVersionsReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListVersionsReplyBody instance
         */
        public static create(properties?: file.IListVersionsReplyBody): file.ListVersionsReplyBody;

        /**
         * Encodes the specified ListVersionsReplyBody message. Does not implicitly {@link file.ListVersionsReplyBody.verify|verify} messages.
         * @param message ListVersionsReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IListVersionsReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListVersionsReplyBody message, length delimited. Does not implicitly {@link file.ListVersionsReplyBody.verify|verify} messages.
         * @param message ListVersionsReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IListVersionsReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListVersionsReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListVersionsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.ListVersionsReplyBody;

        /**
         * Decodes a ListVersionsReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListVersionsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.ListVersionsReplyBody;

        /**
         * Verifies a ListVersionsReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListVersionsReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListVersionsReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.ListVersionsReplyBody;

        /**
         * Creates a plain object from a ListVersionsReplyBody message. Also converts values to other types if specified.
         * @param message ListVersionsReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.ListVersionsReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListVersionsReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListVersionsReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateXAttrsRequestBody. */
    interface IUpdateXAttrsRequestBody {

        /** UpdateXAttrsRequestBody changes */
        changes?: (file.IXAttrsChanges|null);
    }

    /** Represents an UpdateXAttrsRequestBody. */
    class UpdateXAttrsRequestBody implements IUpdateXAttrsRequestBody {

        /**
         * Constructs a new UpdateXAttrsRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IUpdateXAttrsRequestBody);

        /** UpdateXAttrsRequestBody changes. */
        public changes?: (file.IXAttrsChanges|null);

        /**
         * Creates a new UpdateXAttrsRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateXAttrsRequestBody instance
         */
        public static create(properties?: file.IUpdateXAttrsRequestBody): file.UpdateXAttrsRequestBody;

        /**
         * Encodes the specified UpdateXAttrsRequestBody message. Does not implicitly {@link file.UpdateXAttrsRequestBody.verify|verify} messages.
         * @param message UpdateXAttrsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IUpdateXAttrsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateXAttrsRequestBody message, length delimited. Does not implicitly {@link file.UpdateXAttrsRequestBody.verify|verify} messages.
         * @param message UpdateXAttrsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IUpdateXAttrsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateXAttrsRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateXAttrsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.UpdateXAttrsRequestBody;

        /**
         * Decodes an UpdateXAttrsRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateXAttrsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.UpdateXAttrsRequestBody;

        /**
         * Verifies an UpdateXAttrsRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateXAttrsRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateXAttrsRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.UpdateXAttrsRequestBody;

        /**
         * Creates a plain object from an UpdateXAttrsRequestBody message. Also converts values to other types if specified.
         * @param message UpdateXAttrsRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.UpdateXAttrsRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateXAttrsRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateXAttrsRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NameAndXAttrValue. */
    interface INameAndXAttrValue {

        /** NameAndXAttrValue xaName */
        xaName?: (string|null);

        /** NameAndXAttrValue str */
        str?: (common.IStringValue|null);

        /** NameAndXAttrValue json */
        json?: (common.IStringValue|null);

        /** NameAndXAttrValue bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a NameAndXAttrValue. */
    class NameAndXAttrValue implements INameAndXAttrValue {

        /**
         * Constructs a new NameAndXAttrValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.INameAndXAttrValue);

        /** NameAndXAttrValue xaName. */
        public xaName: string;

        /** NameAndXAttrValue str. */
        public str?: (common.IStringValue|null);

        /** NameAndXAttrValue json. */
        public json?: (common.IStringValue|null);

        /** NameAndXAttrValue bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new NameAndXAttrValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NameAndXAttrValue instance
         */
        public static create(properties?: file.INameAndXAttrValue): file.NameAndXAttrValue;

        /**
         * Encodes the specified NameAndXAttrValue message. Does not implicitly {@link file.NameAndXAttrValue.verify|verify} messages.
         * @param message NameAndXAttrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.INameAndXAttrValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NameAndXAttrValue message, length delimited. Does not implicitly {@link file.NameAndXAttrValue.verify|verify} messages.
         * @param message NameAndXAttrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.INameAndXAttrValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NameAndXAttrValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NameAndXAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.NameAndXAttrValue;

        /**
         * Decodes a NameAndXAttrValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NameAndXAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.NameAndXAttrValue;

        /**
         * Verifies a NameAndXAttrValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NameAndXAttrValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NameAndXAttrValue
         */
        public static fromObject(object: { [k: string]: any }): file.NameAndXAttrValue;

        /**
         * Creates a plain object from a NameAndXAttrValue message. Also converts values to other types if specified.
         * @param message NameAndXAttrValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.NameAndXAttrValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NameAndXAttrValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NameAndXAttrValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a XAttrsChanges. */
    interface IXAttrsChanges {

        /** XAttrsChanges set */
        set?: (file.INameAndXAttrValue[]|null);

        /** XAttrsChanges remove */
        remove?: (string[]|null);
    }

    /** Represents a XAttrsChanges. */
    class XAttrsChanges implements IXAttrsChanges {

        /**
         * Constructs a new XAttrsChanges.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IXAttrsChanges);

        /** XAttrsChanges set. */
        public set: file.INameAndXAttrValue[];

        /** XAttrsChanges remove. */
        public remove: string[];

        /**
         * Creates a new XAttrsChanges instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XAttrsChanges instance
         */
        public static create(properties?: file.IXAttrsChanges): file.XAttrsChanges;

        /**
         * Encodes the specified XAttrsChanges message. Does not implicitly {@link file.XAttrsChanges.verify|verify} messages.
         * @param message XAttrsChanges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IXAttrsChanges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XAttrsChanges message, length delimited. Does not implicitly {@link file.XAttrsChanges.verify|verify} messages.
         * @param message XAttrsChanges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IXAttrsChanges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XAttrsChanges message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XAttrsChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.XAttrsChanges;

        /**
         * Decodes a XAttrsChanges message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XAttrsChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.XAttrsChanges;

        /**
         * Verifies a XAttrsChanges message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XAttrsChanges message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XAttrsChanges
         */
        public static fromObject(object: { [k: string]: any }): file.XAttrsChanges;

        /**
         * Creates a plain object from a XAttrsChanges message. Also converts values to other types if specified.
         * @param message XAttrsChanges
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.XAttrsChanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XAttrsChanges to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for XAttrsChanges
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteBytesRequestBody. */
    interface IWriteBytesRequestBody {

        /** WriteBytesRequestBody bytes */
        bytes?: (Uint8Array|null);
    }

    /** Represents a WriteBytesRequestBody. */
    class WriteBytesRequestBody implements IWriteBytesRequestBody {

        /**
         * Constructs a new WriteBytesRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IWriteBytesRequestBody);

        /** WriteBytesRequestBody bytes. */
        public bytes: Uint8Array;

        /**
         * Creates a new WriteBytesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteBytesRequestBody instance
         */
        public static create(properties?: file.IWriteBytesRequestBody): file.WriteBytesRequestBody;

        /**
         * Encodes the specified WriteBytesRequestBody message. Does not implicitly {@link file.WriteBytesRequestBody.verify|verify} messages.
         * @param message WriteBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IWriteBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteBytesRequestBody message, length delimited. Does not implicitly {@link file.WriteBytesRequestBody.verify|verify} messages.
         * @param message WriteBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IWriteBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.WriteBytesRequestBody;

        /**
         * Decodes a WriteBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.WriteBytesRequestBody;

        /**
         * Verifies a WriteBytesRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteBytesRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.WriteBytesRequestBody;

        /**
         * Creates a plain object from a WriteBytesRequestBody message. Also converts values to other types if specified.
         * @param message WriteBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.WriteBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteBytesRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WriteBytesRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteTxtRequestBody. */
    interface IWriteTxtRequestBody {

        /** WriteTxtRequestBody txt */
        txt?: (string|null);
    }

    /** Represents a WriteTxtRequestBody. */
    class WriteTxtRequestBody implements IWriteTxtRequestBody {

        /**
         * Constructs a new WriteTxtRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IWriteTxtRequestBody);

        /** WriteTxtRequestBody txt. */
        public txt: string;

        /**
         * Creates a new WriteTxtRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteTxtRequestBody instance
         */
        public static create(properties?: file.IWriteTxtRequestBody): file.WriteTxtRequestBody;

        /**
         * Encodes the specified WriteTxtRequestBody message. Does not implicitly {@link file.WriteTxtRequestBody.verify|verify} messages.
         * @param message WriteTxtRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IWriteTxtRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteTxtRequestBody message, length delimited. Does not implicitly {@link file.WriteTxtRequestBody.verify|verify} messages.
         * @param message WriteTxtRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IWriteTxtRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteTxtRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteTxtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.WriteTxtRequestBody;

        /**
         * Decodes a WriteTxtRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteTxtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.WriteTxtRequestBody;

        /**
         * Verifies a WriteTxtRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteTxtRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteTxtRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.WriteTxtRequestBody;

        /**
         * Creates a plain object from a WriteTxtRequestBody message. Also converts values to other types if specified.
         * @param message WriteTxtRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.WriteTxtRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteTxtRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WriteTxtRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteJsonRequestBody. */
    interface IWriteJsonRequestBody {

        /** WriteJsonRequestBody json */
        json?: (string|null);
    }

    /** Represents a WriteJsonRequestBody. */
    class WriteJsonRequestBody implements IWriteJsonRequestBody {

        /**
         * Constructs a new WriteJsonRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IWriteJsonRequestBody);

        /** WriteJsonRequestBody json. */
        public json: string;

        /**
         * Creates a new WriteJsonRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteJsonRequestBody instance
         */
        public static create(properties?: file.IWriteJsonRequestBody): file.WriteJsonRequestBody;

        /**
         * Encodes the specified WriteJsonRequestBody message. Does not implicitly {@link file.WriteJsonRequestBody.verify|verify} messages.
         * @param message WriteJsonRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IWriteJsonRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteJsonRequestBody message, length delimited. Does not implicitly {@link file.WriteJsonRequestBody.verify|verify} messages.
         * @param message WriteJsonRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IWriteJsonRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteJsonRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteJsonRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.WriteJsonRequestBody;

        /**
         * Decodes a WriteJsonRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteJsonRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.WriteJsonRequestBody;

        /**
         * Verifies a WriteJsonRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteJsonRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteJsonRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.WriteJsonRequestBody;

        /**
         * Creates a plain object from a WriteJsonRequestBody message. Also converts values to other types if specified.
         * @param message WriteJsonRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.WriteJsonRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteJsonRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WriteJsonRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetByteSinkRequestBody. */
    interface IGetByteSinkRequestBody {

        /** GetByteSinkRequestBody truncateFile */
        truncateFile?: (common.IBooleanValue|null);
    }

    /** Represents a GetByteSinkRequestBody. */
    class GetByteSinkRequestBody implements IGetByteSinkRequestBody {

        /**
         * Constructs a new GetByteSinkRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IGetByteSinkRequestBody);

        /** GetByteSinkRequestBody truncateFile. */
        public truncateFile?: (common.IBooleanValue|null);

        /**
         * Creates a new GetByteSinkRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetByteSinkRequestBody instance
         */
        public static create(properties?: file.IGetByteSinkRequestBody): file.GetByteSinkRequestBody;

        /**
         * Encodes the specified GetByteSinkRequestBody message. Does not implicitly {@link file.GetByteSinkRequestBody.verify|verify} messages.
         * @param message GetByteSinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IGetByteSinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetByteSinkRequestBody message, length delimited. Does not implicitly {@link file.GetByteSinkRequestBody.verify|verify} messages.
         * @param message GetByteSinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IGetByteSinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetByteSinkRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.GetByteSinkRequestBody;

        /**
         * Decodes a GetByteSinkRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.GetByteSinkRequestBody;

        /**
         * Verifies a GetByteSinkRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetByteSinkRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetByteSinkRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.GetByteSinkRequestBody;

        /**
         * Creates a plain object from a GetByteSinkRequestBody message. Also converts values to other types if specified.
         * @param message GetByteSinkRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.GetByteSinkRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetByteSinkRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetByteSinkRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CopyRequestBody. */
    interface ICopyRequestBody {

        /** CopyRequestBody file */
        file?: (common.IObjectReference|null);
    }

    /** Represents a CopyRequestBody. */
    class CopyRequestBody implements ICopyRequestBody {

        /**
         * Constructs a new CopyRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.ICopyRequestBody);

        /** CopyRequestBody file. */
        public file?: (common.IObjectReference|null);

        /**
         * Creates a new CopyRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CopyRequestBody instance
         */
        public static create(properties?: file.ICopyRequestBody): file.CopyRequestBody;

        /**
         * Encodes the specified CopyRequestBody message. Does not implicitly {@link file.CopyRequestBody.verify|verify} messages.
         * @param message CopyRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.ICopyRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CopyRequestBody message, length delimited. Does not implicitly {@link file.CopyRequestBody.verify|verify} messages.
         * @param message CopyRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.ICopyRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CopyRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.CopyRequestBody;

        /**
         * Decodes a CopyRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CopyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.CopyRequestBody;

        /**
         * Verifies a CopyRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CopyRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.CopyRequestBody;

        /**
         * Creates a plain object from a CopyRequestBody message. Also converts values to other types if specified.
         * @param message CopyRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.CopyRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CopyRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetByteSinkRequestBody. */
    interface IVersionedGetByteSinkRequestBody {

        /** VersionedGetByteSinkRequestBody truncateFile */
        truncateFile?: (common.IBooleanValue|null);

        /** VersionedGetByteSinkRequestBody currentVersion */
        currentVersion?: (common.IUInt64Value|null);
    }

    /** Represents a VersionedGetByteSinkRequestBody. */
    class VersionedGetByteSinkRequestBody implements IVersionedGetByteSinkRequestBody {

        /**
         * Constructs a new VersionedGetByteSinkRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedGetByteSinkRequestBody);

        /** VersionedGetByteSinkRequestBody truncateFile. */
        public truncateFile?: (common.IBooleanValue|null);

        /** VersionedGetByteSinkRequestBody currentVersion. */
        public currentVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new VersionedGetByteSinkRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetByteSinkRequestBody instance
         */
        public static create(properties?: file.IVersionedGetByteSinkRequestBody): file.VersionedGetByteSinkRequestBody;

        /**
         * Encodes the specified VersionedGetByteSinkRequestBody message. Does not implicitly {@link file.VersionedGetByteSinkRequestBody.verify|verify} messages.
         * @param message VersionedGetByteSinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedGetByteSinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetByteSinkRequestBody message, length delimited. Does not implicitly {@link file.VersionedGetByteSinkRequestBody.verify|verify} messages.
         * @param message VersionedGetByteSinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedGetByteSinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetByteSinkRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedGetByteSinkRequestBody;

        /**
         * Decodes a VersionedGetByteSinkRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedGetByteSinkRequestBody;

        /**
         * Verifies a VersionedGetByteSinkRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedGetByteSinkRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedGetByteSinkRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedGetByteSinkRequestBody;

        /**
         * Creates a plain object from a VersionedGetByteSinkRequestBody message. Also converts values to other types if specified.
         * @param message VersionedGetByteSinkRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedGetByteSinkRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedGetByteSinkRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedGetByteSinkRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetByteSinkReplyBody. */
    interface IVersionedGetByteSinkReplyBody {

        /** VersionedGetByteSinkReplyBody version */
        version?: (number|Long|null);

        /** VersionedGetByteSinkReplyBody sink */
        sink?: (common.IObjectReference|null);
    }

    /** Represents a VersionedGetByteSinkReplyBody. */
    class VersionedGetByteSinkReplyBody implements IVersionedGetByteSinkReplyBody {

        /**
         * Constructs a new VersionedGetByteSinkReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IVersionedGetByteSinkReplyBody);

        /** VersionedGetByteSinkReplyBody version. */
        public version: (number|Long);

        /** VersionedGetByteSinkReplyBody sink. */
        public sink?: (common.IObjectReference|null);

        /**
         * Creates a new VersionedGetByteSinkReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetByteSinkReplyBody instance
         */
        public static create(properties?: file.IVersionedGetByteSinkReplyBody): file.VersionedGetByteSinkReplyBody;

        /**
         * Encodes the specified VersionedGetByteSinkReplyBody message. Does not implicitly {@link file.VersionedGetByteSinkReplyBody.verify|verify} messages.
         * @param message VersionedGetByteSinkReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IVersionedGetByteSinkReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetByteSinkReplyBody message, length delimited. Does not implicitly {@link file.VersionedGetByteSinkReplyBody.verify|verify} messages.
         * @param message VersionedGetByteSinkReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IVersionedGetByteSinkReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetByteSinkReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetByteSinkReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.VersionedGetByteSinkReplyBody;

        /**
         * Decodes a VersionedGetByteSinkReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetByteSinkReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.VersionedGetByteSinkReplyBody;

        /**
         * Verifies a VersionedGetByteSinkReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedGetByteSinkReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedGetByteSinkReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.VersionedGetByteSinkReplyBody;

        /**
         * Creates a plain object from a VersionedGetByteSinkReplyBody message. Also converts values to other types if specified.
         * @param message VersionedGetByteSinkReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.VersionedGetByteSinkReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedGetByteSinkReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedGetByteSinkReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ArchiveCurrentRequestBody. */
    interface IArchiveCurrentRequestBody {

        /** ArchiveCurrentRequestBody version */
        version?: (common.IUInt64Value|null);
    }

    /** Represents an ArchiveCurrentRequestBody. */
    class ArchiveCurrentRequestBody implements IArchiveCurrentRequestBody {

        /**
         * Constructs a new ArchiveCurrentRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IArchiveCurrentRequestBody);

        /** ArchiveCurrentRequestBody version. */
        public version?: (common.IUInt64Value|null);

        /**
         * Creates a new ArchiveCurrentRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArchiveCurrentRequestBody instance
         */
        public static create(properties?: file.IArchiveCurrentRequestBody): file.ArchiveCurrentRequestBody;

        /**
         * Encodes the specified ArchiveCurrentRequestBody message. Does not implicitly {@link file.ArchiveCurrentRequestBody.verify|verify} messages.
         * @param message ArchiveCurrentRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IArchiveCurrentRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArchiveCurrentRequestBody message, length delimited. Does not implicitly {@link file.ArchiveCurrentRequestBody.verify|verify} messages.
         * @param message ArchiveCurrentRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IArchiveCurrentRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArchiveCurrentRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArchiveCurrentRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.ArchiveCurrentRequestBody;

        /**
         * Decodes an ArchiveCurrentRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArchiveCurrentRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.ArchiveCurrentRequestBody;

        /**
         * Verifies an ArchiveCurrentRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArchiveCurrentRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArchiveCurrentRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.ArchiveCurrentRequestBody;

        /**
         * Creates a plain object from an ArchiveCurrentRequestBody message. Also converts values to other types if specified.
         * @param message ArchiveCurrentRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.ArchiveCurrentRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArchiveCurrentRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ArchiveCurrentRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileSyncIsOnDiskRequestBody. */
    interface IFileSyncIsOnDiskRequestBody {

        /** FileSyncIsOnDiskRequestBody version */
        version?: (number|Long|null);
    }

    /** Represents a FileSyncIsOnDiskRequestBody. */
    class FileSyncIsOnDiskRequestBody implements IFileSyncIsOnDiskRequestBody {

        /**
         * Constructs a new FileSyncIsOnDiskRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncIsOnDiskRequestBody);

        /** FileSyncIsOnDiskRequestBody version. */
        public version: (number|Long);

        /**
         * Creates a new FileSyncIsOnDiskRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncIsOnDiskRequestBody instance
         */
        public static create(properties?: file.IFileSyncIsOnDiskRequestBody): file.FileSyncIsOnDiskRequestBody;

        /**
         * Encodes the specified FileSyncIsOnDiskRequestBody message. Does not implicitly {@link file.FileSyncIsOnDiskRequestBody.verify|verify} messages.
         * @param message FileSyncIsOnDiskRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncIsOnDiskRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncIsOnDiskRequestBody message, length delimited. Does not implicitly {@link file.FileSyncIsOnDiskRequestBody.verify|verify} messages.
         * @param message FileSyncIsOnDiskRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncIsOnDiskRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncIsOnDiskRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncIsOnDiskRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncIsOnDiskRequestBody;

        /**
         * Decodes a FileSyncIsOnDiskRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncIsOnDiskRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncIsOnDiskRequestBody;

        /**
         * Verifies a FileSyncIsOnDiskRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncIsOnDiskRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncIsOnDiskRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncIsOnDiskRequestBody;

        /**
         * Creates a plain object from a FileSyncIsOnDiskRequestBody message. Also converts values to other types if specified.
         * @param message FileSyncIsOnDiskRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncIsOnDiskRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncIsOnDiskRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncIsOnDiskRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileSyncIsOnDiskReplyBody. */
    interface IFileSyncIsOnDiskReplyBody {

        /** FileSyncIsOnDiskReplyBody status */
        status?: (string|null);
    }

    /** Represents a FileSyncIsOnDiskReplyBody. */
    class FileSyncIsOnDiskReplyBody implements IFileSyncIsOnDiskReplyBody {

        /**
         * Constructs a new FileSyncIsOnDiskReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncIsOnDiskReplyBody);

        /** FileSyncIsOnDiskReplyBody status. */
        public status: string;

        /**
         * Creates a new FileSyncIsOnDiskReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncIsOnDiskReplyBody instance
         */
        public static create(properties?: file.IFileSyncIsOnDiskReplyBody): file.FileSyncIsOnDiskReplyBody;

        /**
         * Encodes the specified FileSyncIsOnDiskReplyBody message. Does not implicitly {@link file.FileSyncIsOnDiskReplyBody.verify|verify} messages.
         * @param message FileSyncIsOnDiskReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncIsOnDiskReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncIsOnDiskReplyBody message, length delimited. Does not implicitly {@link file.FileSyncIsOnDiskReplyBody.verify|verify} messages.
         * @param message FileSyncIsOnDiskReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncIsOnDiskReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncIsOnDiskReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncIsOnDiskReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncIsOnDiskReplyBody;

        /**
         * Decodes a FileSyncIsOnDiskReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncIsOnDiskReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncIsOnDiskReplyBody;

        /**
         * Verifies a FileSyncIsOnDiskReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncIsOnDiskReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncIsOnDiskReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncIsOnDiskReplyBody;

        /**
         * Creates a plain object from a FileSyncIsOnDiskReplyBody message. Also converts values to other types if specified.
         * @param message FileSyncIsOnDiskReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncIsOnDiskReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncIsOnDiskReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncIsOnDiskReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileSyncStartDownloadRequestBody. */
    interface IFileSyncStartDownloadRequestBody {

        /** FileSyncStartDownloadRequestBody version */
        version?: (number|Long|null);
    }

    /** Represents a FileSyncStartDownloadRequestBody. */
    class FileSyncStartDownloadRequestBody implements IFileSyncStartDownloadRequestBody {

        /**
         * Constructs a new FileSyncStartDownloadRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncStartDownloadRequestBody);

        /** FileSyncStartDownloadRequestBody version. */
        public version: (number|Long);

        /**
         * Creates a new FileSyncStartDownloadRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncStartDownloadRequestBody instance
         */
        public static create(properties?: file.IFileSyncStartDownloadRequestBody): file.FileSyncStartDownloadRequestBody;

        /**
         * Encodes the specified FileSyncStartDownloadRequestBody message. Does not implicitly {@link file.FileSyncStartDownloadRequestBody.verify|verify} messages.
         * @param message FileSyncStartDownloadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncStartDownloadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncStartDownloadRequestBody message, length delimited. Does not implicitly {@link file.FileSyncStartDownloadRequestBody.verify|verify} messages.
         * @param message FileSyncStartDownloadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncStartDownloadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncStartDownloadRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncStartDownloadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncStartDownloadRequestBody;

        /**
         * Decodes a FileSyncStartDownloadRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncStartDownloadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncStartDownloadRequestBody;

        /**
         * Verifies a FileSyncStartDownloadRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncStartDownloadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncStartDownloadRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncStartDownloadRequestBody;

        /**
         * Creates a plain object from a FileSyncStartDownloadRequestBody message. Also converts values to other types if specified.
         * @param message FileSyncStartDownloadRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncStartDownloadRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncStartDownloadRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncStartDownloadRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileSyncStartDownloadReplyBody. */
    interface IFileSyncStartDownloadReplyBody {

        /** FileSyncStartDownloadReplyBody startedDownload */
        startedDownload?: (file.FileSyncStartDownloadReplyBody.IDownloadInfo|null);
    }

    /** Represents a FileSyncStartDownloadReplyBody. */
    class FileSyncStartDownloadReplyBody implements IFileSyncStartDownloadReplyBody {

        /**
         * Constructs a new FileSyncStartDownloadReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncStartDownloadReplyBody);

        /** FileSyncStartDownloadReplyBody startedDownload. */
        public startedDownload?: (file.FileSyncStartDownloadReplyBody.IDownloadInfo|null);

        /**
         * Creates a new FileSyncStartDownloadReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncStartDownloadReplyBody instance
         */
        public static create(properties?: file.IFileSyncStartDownloadReplyBody): file.FileSyncStartDownloadReplyBody;

        /**
         * Encodes the specified FileSyncStartDownloadReplyBody message. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.verify|verify} messages.
         * @param message FileSyncStartDownloadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncStartDownloadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncStartDownloadReplyBody message, length delimited. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.verify|verify} messages.
         * @param message FileSyncStartDownloadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncStartDownloadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncStartDownloadReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncStartDownloadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncStartDownloadReplyBody;

        /**
         * Decodes a FileSyncStartDownloadReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncStartDownloadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncStartDownloadReplyBody;

        /**
         * Verifies a FileSyncStartDownloadReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncStartDownloadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncStartDownloadReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncStartDownloadReplyBody;

        /**
         * Creates a plain object from a FileSyncStartDownloadReplyBody message. Also converts values to other types if specified.
         * @param message FileSyncStartDownloadReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncStartDownloadReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncStartDownloadReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncStartDownloadReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileSyncStartDownloadReplyBody {

        /** Properties of a DownloadInfo. */
        interface IDownloadInfo {

            /** DownloadInfo downloadTaskId */
            downloadTaskId?: (number|Long|null);
        }

        /** Represents a DownloadInfo. */
        class DownloadInfo implements IDownloadInfo {

            /**
             * Constructs a new DownloadInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: file.FileSyncStartDownloadReplyBody.IDownloadInfo);

            /** DownloadInfo downloadTaskId. */
            public downloadTaskId: (number|Long);

            /**
             * Creates a new DownloadInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DownloadInfo instance
             */
            public static create(properties?: file.FileSyncStartDownloadReplyBody.IDownloadInfo): file.FileSyncStartDownloadReplyBody.DownloadInfo;

            /**
             * Encodes the specified DownloadInfo message. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.DownloadInfo.verify|verify} messages.
             * @param message DownloadInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: file.FileSyncStartDownloadReplyBody.IDownloadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DownloadInfo message, length delimited. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.DownloadInfo.verify|verify} messages.
             * @param message DownloadInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: file.FileSyncStartDownloadReplyBody.IDownloadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DownloadInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DownloadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncStartDownloadReplyBody.DownloadInfo;

            /**
             * Decodes a DownloadInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DownloadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncStartDownloadReplyBody.DownloadInfo;

            /**
             * Verifies a DownloadInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DownloadInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DownloadInfo
             */
            public static fromObject(object: { [k: string]: any }): file.FileSyncStartDownloadReplyBody.DownloadInfo;

            /**
             * Creates a plain object from a DownloadInfo message. Also converts values to other types if specified.
             * @param message DownloadInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: file.FileSyncStartDownloadReplyBody.DownloadInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DownloadInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DownloadInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AdoptRemoteRequestBody. */
    interface IAdoptRemoteRequestBody {

        /** AdoptRemoteRequestBody opts */
        opts?: (file.IOptionsToAdopteRemote|null);
    }

    /** Represents an AdoptRemoteRequestBody. */
    class AdoptRemoteRequestBody implements IAdoptRemoteRequestBody {

        /**
         * Constructs a new AdoptRemoteRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IAdoptRemoteRequestBody);

        /** AdoptRemoteRequestBody opts. */
        public opts?: (file.IOptionsToAdopteRemote|null);

        /**
         * Creates a new AdoptRemoteRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdoptRemoteRequestBody instance
         */
        public static create(properties?: file.IAdoptRemoteRequestBody): file.AdoptRemoteRequestBody;

        /**
         * Encodes the specified AdoptRemoteRequestBody message. Does not implicitly {@link file.AdoptRemoteRequestBody.verify|verify} messages.
         * @param message AdoptRemoteRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IAdoptRemoteRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdoptRemoteRequestBody message, length delimited. Does not implicitly {@link file.AdoptRemoteRequestBody.verify|verify} messages.
         * @param message AdoptRemoteRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IAdoptRemoteRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdoptRemoteRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdoptRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.AdoptRemoteRequestBody;

        /**
         * Decodes an AdoptRemoteRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdoptRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.AdoptRemoteRequestBody;

        /**
         * Verifies an AdoptRemoteRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdoptRemoteRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdoptRemoteRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.AdoptRemoteRequestBody;

        /**
         * Creates a plain object from an AdoptRemoteRequestBody message. Also converts values to other types if specified.
         * @param message AdoptRemoteRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.AdoptRemoteRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdoptRemoteRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AdoptRemoteRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OptionsToAdopteRemote. */
    interface IOptionsToAdopteRemote {

        /** OptionsToAdopteRemote dropLocalVer */
        dropLocalVer?: (common.IBooleanValue|null);

        /** OptionsToAdopteRemote remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);
    }

    /** Represents an OptionsToAdopteRemote. */
    class OptionsToAdopteRemote implements IOptionsToAdopteRemote {

        /**
         * Constructs a new OptionsToAdopteRemote.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IOptionsToAdopteRemote);

        /** OptionsToAdopteRemote dropLocalVer. */
        public dropLocalVer?: (common.IBooleanValue|null);

        /** OptionsToAdopteRemote remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new OptionsToAdopteRemote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionsToAdopteRemote instance
         */
        public static create(properties?: file.IOptionsToAdopteRemote): file.OptionsToAdopteRemote;

        /**
         * Encodes the specified OptionsToAdopteRemote message. Does not implicitly {@link file.OptionsToAdopteRemote.verify|verify} messages.
         * @param message OptionsToAdopteRemote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IOptionsToAdopteRemote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionsToAdopteRemote message, length delimited. Does not implicitly {@link file.OptionsToAdopteRemote.verify|verify} messages.
         * @param message OptionsToAdopteRemote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IOptionsToAdopteRemote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionsToAdopteRemote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionsToAdopteRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.OptionsToAdopteRemote;

        /**
         * Decodes an OptionsToAdopteRemote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionsToAdopteRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.OptionsToAdopteRemote;

        /**
         * Verifies an OptionsToAdopteRemote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionsToAdopteRemote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionsToAdopteRemote
         */
        public static fromObject(object: { [k: string]: any }): file.OptionsToAdopteRemote;

        /**
         * Creates a plain object from an OptionsToAdopteRemote message. Also converts values to other types if specified.
         * @param message OptionsToAdopteRemote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.OptionsToAdopteRemote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionsToAdopteRemote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OptionsToAdopteRemote
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiffCurrentAndRemoteRequestBody. */
    interface IDiffCurrentAndRemoteRequestBody {

        /** DiffCurrentAndRemoteRequestBody opts */
        opts?: (file.IOptionsToDiffFileVersions|null);
    }

    /** Represents a DiffCurrentAndRemoteRequestBody. */
    class DiffCurrentAndRemoteRequestBody implements IDiffCurrentAndRemoteRequestBody {

        /**
         * Constructs a new DiffCurrentAndRemoteRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDiffCurrentAndRemoteRequestBody);

        /** DiffCurrentAndRemoteRequestBody opts. */
        public opts?: (file.IOptionsToDiffFileVersions|null);

        /**
         * Creates a new DiffCurrentAndRemoteRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiffCurrentAndRemoteRequestBody instance
         */
        public static create(properties?: file.IDiffCurrentAndRemoteRequestBody): file.DiffCurrentAndRemoteRequestBody;

        /**
         * Encodes the specified DiffCurrentAndRemoteRequestBody message. Does not implicitly {@link file.DiffCurrentAndRemoteRequestBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IDiffCurrentAndRemoteRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiffCurrentAndRemoteRequestBody message, length delimited. Does not implicitly {@link file.DiffCurrentAndRemoteRequestBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IDiffCurrentAndRemoteRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiffCurrentAndRemoteRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiffCurrentAndRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DiffCurrentAndRemoteRequestBody;

        /**
         * Decodes a DiffCurrentAndRemoteRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiffCurrentAndRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.DiffCurrentAndRemoteRequestBody;

        /**
         * Verifies a DiffCurrentAndRemoteRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiffCurrentAndRemoteRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiffCurrentAndRemoteRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.DiffCurrentAndRemoteRequestBody;

        /**
         * Creates a plain object from a DiffCurrentAndRemoteRequestBody message. Also converts values to other types if specified.
         * @param message DiffCurrentAndRemoteRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.DiffCurrentAndRemoteRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiffCurrentAndRemoteRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiffCurrentAndRemoteRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiffCurrentAndRemoteReplyBody. */
    interface IDiffCurrentAndRemoteReplyBody {

        /** DiffCurrentAndRemoteReplyBody diff */
        diff?: (file.IFileDiff|null);
    }

    /** Represents a DiffCurrentAndRemoteReplyBody. */
    class DiffCurrentAndRemoteReplyBody implements IDiffCurrentAndRemoteReplyBody {

        /**
         * Constructs a new DiffCurrentAndRemoteReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDiffCurrentAndRemoteReplyBody);

        /** DiffCurrentAndRemoteReplyBody diff. */
        public diff?: (file.IFileDiff|null);

        /**
         * Creates a new DiffCurrentAndRemoteReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiffCurrentAndRemoteReplyBody instance
         */
        public static create(properties?: file.IDiffCurrentAndRemoteReplyBody): file.DiffCurrentAndRemoteReplyBody;

        /**
         * Encodes the specified DiffCurrentAndRemoteReplyBody message. Does not implicitly {@link file.DiffCurrentAndRemoteReplyBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IDiffCurrentAndRemoteReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiffCurrentAndRemoteReplyBody message, length delimited. Does not implicitly {@link file.DiffCurrentAndRemoteReplyBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IDiffCurrentAndRemoteReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiffCurrentAndRemoteReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiffCurrentAndRemoteReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DiffCurrentAndRemoteReplyBody;

        /**
         * Decodes a DiffCurrentAndRemoteReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiffCurrentAndRemoteReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.DiffCurrentAndRemoteReplyBody;

        /**
         * Verifies a DiffCurrentAndRemoteReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiffCurrentAndRemoteReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiffCurrentAndRemoteReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.DiffCurrentAndRemoteReplyBody;

        /**
         * Creates a plain object from a DiffCurrentAndRemoteReplyBody message. Also converts values to other types if specified.
         * @param message DiffCurrentAndRemoteReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.DiffCurrentAndRemoteReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiffCurrentAndRemoteReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiffCurrentAndRemoteReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OptionsToDiffFileVersions. */
    interface IOptionsToDiffFileVersions {

        /** OptionsToDiffFileVersions remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);

        /** OptionsToDiffFileVersions compareContentIfSameMTime */
        compareContentIfSameMTime?: (common.IBooleanValue|null);
    }

    /** Represents an OptionsToDiffFileVersions. */
    class OptionsToDiffFileVersions implements IOptionsToDiffFileVersions {

        /**
         * Constructs a new OptionsToDiffFileVersions.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IOptionsToDiffFileVersions);

        /** OptionsToDiffFileVersions remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /** OptionsToDiffFileVersions compareContentIfSameMTime. */
        public compareContentIfSameMTime?: (common.IBooleanValue|null);

        /**
         * Creates a new OptionsToDiffFileVersions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionsToDiffFileVersions instance
         */
        public static create(properties?: file.IOptionsToDiffFileVersions): file.OptionsToDiffFileVersions;

        /**
         * Encodes the specified OptionsToDiffFileVersions message. Does not implicitly {@link file.OptionsToDiffFileVersions.verify|verify} messages.
         * @param message OptionsToDiffFileVersions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IOptionsToDiffFileVersions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionsToDiffFileVersions message, length delimited. Does not implicitly {@link file.OptionsToDiffFileVersions.verify|verify} messages.
         * @param message OptionsToDiffFileVersions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IOptionsToDiffFileVersions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionsToDiffFileVersions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionsToDiffFileVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.OptionsToDiffFileVersions;

        /**
         * Decodes an OptionsToDiffFileVersions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionsToDiffFileVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.OptionsToDiffFileVersions;

        /**
         * Verifies an OptionsToDiffFileVersions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionsToDiffFileVersions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionsToDiffFileVersions
         */
        public static fromObject(object: { [k: string]: any }): file.OptionsToDiffFileVersions;

        /**
         * Creates a plain object from an OptionsToDiffFileVersions message. Also converts values to other types if specified.
         * @param message OptionsToDiffFileVersions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.OptionsToDiffFileVersions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionsToDiffFileVersions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OptionsToDiffFileVersions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TimeStampsDiff. */
    interface ITimeStampsDiff {

        /** TimeStampsDiff current */
        current?: (number|Long|null);

        /** TimeStampsDiff remote */
        remote?: (number|Long|null);

        /** TimeStampsDiff synced */
        synced?: (number|Long|null);
    }

    /** Represents a TimeStampsDiff. */
    class TimeStampsDiff implements ITimeStampsDiff {

        /**
         * Constructs a new TimeStampsDiff.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.ITimeStampsDiff);

        /** TimeStampsDiff current. */
        public current: (number|Long);

        /** TimeStampsDiff remote. */
        public remote: (number|Long);

        /** TimeStampsDiff synced. */
        public synced: (number|Long);

        /**
         * Creates a new TimeStampsDiff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeStampsDiff instance
         */
        public static create(properties?: file.ITimeStampsDiff): file.TimeStampsDiff;

        /**
         * Encodes the specified TimeStampsDiff message. Does not implicitly {@link file.TimeStampsDiff.verify|verify} messages.
         * @param message TimeStampsDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.ITimeStampsDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeStampsDiff message, length delimited. Does not implicitly {@link file.TimeStampsDiff.verify|verify} messages.
         * @param message TimeStampsDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.ITimeStampsDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeStampsDiff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeStampsDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.TimeStampsDiff;

        /**
         * Decodes a TimeStampsDiff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeStampsDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.TimeStampsDiff;

        /**
         * Verifies a TimeStampsDiff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeStampsDiff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeStampsDiff
         */
        public static fromObject(object: { [k: string]: any }): file.TimeStampsDiff;

        /**
         * Creates a plain object from a TimeStampsDiff message. Also converts values to other types if specified.
         * @param message TimeStampsDiff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.TimeStampsDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeStampsDiff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TimeStampsDiff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a XAttrDiff. */
    interface IXAttrDiff {

        /** XAttrDiff name */
        name?: (string|null);

        /** XAttrDiff addedIn */
        addedIn?: (common.IStringValue|null);

        /** XAttrDiff removedIn */
        removedIn?: (common.IStringValue|null);

        /** XAttrDiff changedIn */
        changedIn?: (common.IStringValue|null);
    }

    /** Represents a XAttrDiff. */
    class XAttrDiff implements IXAttrDiff {

        /**
         * Constructs a new XAttrDiff.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IXAttrDiff);

        /** XAttrDiff name. */
        public name: string;

        /** XAttrDiff addedIn. */
        public addedIn?: (common.IStringValue|null);

        /** XAttrDiff removedIn. */
        public removedIn?: (common.IStringValue|null);

        /** XAttrDiff changedIn. */
        public changedIn?: (common.IStringValue|null);

        /**
         * Creates a new XAttrDiff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XAttrDiff instance
         */
        public static create(properties?: file.IXAttrDiff): file.XAttrDiff;

        /**
         * Encodes the specified XAttrDiff message. Does not implicitly {@link file.XAttrDiff.verify|verify} messages.
         * @param message XAttrDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IXAttrDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XAttrDiff message, length delimited. Does not implicitly {@link file.XAttrDiff.verify|verify} messages.
         * @param message XAttrDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IXAttrDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XAttrDiff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XAttrDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.XAttrDiff;

        /**
         * Decodes a XAttrDiff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XAttrDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.XAttrDiff;

        /**
         * Verifies a XAttrDiff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XAttrDiff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XAttrDiff
         */
        public static fromObject(object: { [k: string]: any }): file.XAttrDiff;

        /**
         * Creates a plain object from a XAttrDiff message. Also converts values to other types if specified.
         * @param message XAttrDiff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.XAttrDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XAttrDiff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for XAttrDiff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileDiff. */
    interface IFileDiff {

        /** FileDiff currentVersion */
        currentVersion?: (number|Long|null);

        /** FileDiff isCurrentLocal */
        isCurrentLocal?: (boolean|null);

        /** FileDiff remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);

        /** FileDiff syncedVersion */
        syncedVersion?: (common.IUInt64Value|null);

        /** FileDiff isRemoteRemoved */
        isRemoteRemoved?: (boolean|null);

        /** FileDiff ctime */
        ctime?: (file.ITimeStampsDiff|null);

        /** FileDiff mtime */
        mtime?: (file.ITimeStampsDiff|null);

        /** FileDiff xattrs */
        xattrs?: (file.IXAttrDiff[]|null);

        /** FileDiff areContentsSame */
        areContentsSame?: (boolean|null);

        /** FileDiff size */
        size?: (file.FileDiff.ISize|null);
    }

    /** Represents a FileDiff. */
    class FileDiff implements IFileDiff {

        /**
         * Constructs a new FileDiff.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileDiff);

        /** FileDiff currentVersion. */
        public currentVersion: (number|Long);

        /** FileDiff isCurrentLocal. */
        public isCurrentLocal: boolean;

        /** FileDiff remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /** FileDiff syncedVersion. */
        public syncedVersion?: (common.IUInt64Value|null);

        /** FileDiff isRemoteRemoved. */
        public isRemoteRemoved: boolean;

        /** FileDiff ctime. */
        public ctime?: (file.ITimeStampsDiff|null);

        /** FileDiff mtime. */
        public mtime?: (file.ITimeStampsDiff|null);

        /** FileDiff xattrs. */
        public xattrs: file.IXAttrDiff[];

        /** FileDiff areContentsSame. */
        public areContentsSame: boolean;

        /** FileDiff size. */
        public size?: (file.FileDiff.ISize|null);

        /**
         * Creates a new FileDiff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileDiff instance
         */
        public static create(properties?: file.IFileDiff): file.FileDiff;

        /**
         * Encodes the specified FileDiff message. Does not implicitly {@link file.FileDiff.verify|verify} messages.
         * @param message FileDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileDiff message, length delimited. Does not implicitly {@link file.FileDiff.verify|verify} messages.
         * @param message FileDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileDiff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileDiff;

        /**
         * Decodes a FileDiff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileDiff;

        /**
         * Verifies a FileDiff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileDiff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileDiff
         */
        public static fromObject(object: { [k: string]: any }): file.FileDiff;

        /**
         * Creates a plain object from a FileDiff message. Also converts values to other types if specified.
         * @param message FileDiff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileDiff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileDiff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileDiff {

        /** Properties of a Size. */
        interface ISize {

            /** Size current */
            current?: (number|Long|null);

            /** Size remote */
            remote?: (number|Long|null);
        }

        /** Represents a Size. */
        class Size implements ISize {

            /**
             * Constructs a new Size.
             * @param [properties] Properties to set
             */
            constructor(properties?: file.FileDiff.ISize);

            /** Size current. */
            public current: (number|Long);

            /** Size remote. */
            public remote: (number|Long);

            /**
             * Creates a new Size instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Size instance
             */
            public static create(properties?: file.FileDiff.ISize): file.FileDiff.Size;

            /**
             * Encodes the specified Size message. Does not implicitly {@link file.FileDiff.Size.verify|verify} messages.
             * @param message Size message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: file.FileDiff.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Size message, length delimited. Does not implicitly {@link file.FileDiff.Size.verify|verify} messages.
             * @param message Size message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: file.FileDiff.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Size message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Size
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileDiff.Size;

            /**
             * Decodes a Size message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Size
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileDiff.Size;

            /**
             * Verifies a Size message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Size message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Size
             */
            public static fromObject(object: { [k: string]: any }): file.FileDiff.Size;

            /**
             * Creates a plain object from a Size message. Also converts values to other types if specified.
             * @param message Size
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: file.FileDiff.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Size to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Size
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FileSyncUploadRequestBody. */
    interface IFileSyncUploadRequestBody {

        /** FileSyncUploadRequestBody opts */
        opts?: (file.IOptionsToUploadLocal|null);
    }

    /** Represents a FileSyncUploadRequestBody. */
    class FileSyncUploadRequestBody implements IFileSyncUploadRequestBody {

        /**
         * Constructs a new FileSyncUploadRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncUploadRequestBody);

        /** FileSyncUploadRequestBody opts. */
        public opts?: (file.IOptionsToUploadLocal|null);

        /**
         * Creates a new FileSyncUploadRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncUploadRequestBody instance
         */
        public static create(properties?: file.IFileSyncUploadRequestBody): file.FileSyncUploadRequestBody;

        /**
         * Encodes the specified FileSyncUploadRequestBody message. Does not implicitly {@link file.FileSyncUploadRequestBody.verify|verify} messages.
         * @param message FileSyncUploadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncUploadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncUploadRequestBody message, length delimited. Does not implicitly {@link file.FileSyncUploadRequestBody.verify|verify} messages.
         * @param message FileSyncUploadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncUploadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncUploadRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncUploadRequestBody;

        /**
         * Decodes a FileSyncUploadRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncUploadRequestBody;

        /**
         * Verifies a FileSyncUploadRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncUploadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncUploadRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncUploadRequestBody;

        /**
         * Creates a plain object from a FileSyncUploadRequestBody message. Also converts values to other types if specified.
         * @param message FileSyncUploadRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncUploadRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncUploadRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncUploadRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileSyncUploadReplyBody. */
    interface IFileSyncUploadReplyBody {

        /** FileSyncUploadReplyBody uploadedVersion */
        uploadedVersion?: (common.IUInt64Value|null);
    }

    /** Represents a FileSyncUploadReplyBody. */
    class FileSyncUploadReplyBody implements IFileSyncUploadReplyBody {

        /**
         * Constructs a new FileSyncUploadReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncUploadReplyBody);

        /** FileSyncUploadReplyBody uploadedVersion. */
        public uploadedVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new FileSyncUploadReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncUploadReplyBody instance
         */
        public static create(properties?: file.IFileSyncUploadReplyBody): file.FileSyncUploadReplyBody;

        /**
         * Encodes the specified FileSyncUploadReplyBody message. Does not implicitly {@link file.FileSyncUploadReplyBody.verify|verify} messages.
         * @param message FileSyncUploadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncUploadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncUploadReplyBody message, length delimited. Does not implicitly {@link file.FileSyncUploadReplyBody.verify|verify} messages.
         * @param message FileSyncUploadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncUploadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncUploadReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncUploadReplyBody;

        /**
         * Decodes a FileSyncUploadReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncUploadReplyBody;

        /**
         * Verifies a FileSyncUploadReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncUploadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncUploadReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncUploadReplyBody;

        /**
         * Creates a plain object from a FileSyncUploadReplyBody message. Also converts values to other types if specified.
         * @param message FileSyncUploadReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncUploadReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncUploadReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncUploadReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileSyncStartUploadReplyBody. */
    interface IFileSyncStartUploadReplyBody {

        /** FileSyncStartUploadReplyBody startedUpload */
        startedUpload?: (file.FileSyncStartUploadReplyBody.IUploadInfo|null);
    }

    /** Represents a FileSyncStartUploadReplyBody. */
    class FileSyncStartUploadReplyBody implements IFileSyncStartUploadReplyBody {

        /**
         * Constructs a new FileSyncStartUploadReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFileSyncStartUploadReplyBody);

        /** FileSyncStartUploadReplyBody startedUpload. */
        public startedUpload?: (file.FileSyncStartUploadReplyBody.IUploadInfo|null);

        /**
         * Creates a new FileSyncStartUploadReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileSyncStartUploadReplyBody instance
         */
        public static create(properties?: file.IFileSyncStartUploadReplyBody): file.FileSyncStartUploadReplyBody;

        /**
         * Encodes the specified FileSyncStartUploadReplyBody message. Does not implicitly {@link file.FileSyncStartUploadReplyBody.verify|verify} messages.
         * @param message FileSyncStartUploadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFileSyncStartUploadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileSyncStartUploadReplyBody message, length delimited. Does not implicitly {@link file.FileSyncStartUploadReplyBody.verify|verify} messages.
         * @param message FileSyncStartUploadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFileSyncStartUploadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileSyncStartUploadReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileSyncStartUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncStartUploadReplyBody;

        /**
         * Decodes a FileSyncStartUploadReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileSyncStartUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncStartUploadReplyBody;

        /**
         * Verifies a FileSyncStartUploadReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileSyncStartUploadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileSyncStartUploadReplyBody
         */
        public static fromObject(object: { [k: string]: any }): file.FileSyncStartUploadReplyBody;

        /**
         * Creates a plain object from a FileSyncStartUploadReplyBody message. Also converts values to other types if specified.
         * @param message FileSyncStartUploadReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FileSyncStartUploadReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileSyncStartUploadReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileSyncStartUploadReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileSyncStartUploadReplyBody {

        /** Properties of an UploadInfo. */
        interface IUploadInfo {

            /** UploadInfo uploadVersion */
            uploadVersion?: (number|Long|null);

            /** UploadInfo uploadTaskId */
            uploadTaskId?: (number|Long|null);
        }

        /** Represents an UploadInfo. */
        class UploadInfo implements IUploadInfo {

            /**
             * Constructs a new UploadInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: file.FileSyncStartUploadReplyBody.IUploadInfo);

            /** UploadInfo uploadVersion. */
            public uploadVersion: (number|Long);

            /** UploadInfo uploadTaskId. */
            public uploadTaskId: (number|Long);

            /**
             * Creates a new UploadInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UploadInfo instance
             */
            public static create(properties?: file.FileSyncStartUploadReplyBody.IUploadInfo): file.FileSyncStartUploadReplyBody.UploadInfo;

            /**
             * Encodes the specified UploadInfo message. Does not implicitly {@link file.FileSyncStartUploadReplyBody.UploadInfo.verify|verify} messages.
             * @param message UploadInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: file.FileSyncStartUploadReplyBody.IUploadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UploadInfo message, length delimited. Does not implicitly {@link file.FileSyncStartUploadReplyBody.UploadInfo.verify|verify} messages.
             * @param message UploadInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: file.FileSyncStartUploadReplyBody.IUploadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UploadInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UploadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FileSyncStartUploadReplyBody.UploadInfo;

            /**
             * Decodes an UploadInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UploadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FileSyncStartUploadReplyBody.UploadInfo;

            /**
             * Verifies an UploadInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UploadInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UploadInfo
             */
            public static fromObject(object: { [k: string]: any }): file.FileSyncStartUploadReplyBody.UploadInfo;

            /**
             * Creates a plain object from an UploadInfo message. Also converts values to other types if specified.
             * @param message UploadInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: file.FileSyncStartUploadReplyBody.UploadInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UploadInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UploadInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an OptionsToUploadLocal. */
    interface IOptionsToUploadLocal {

        /** OptionsToUploadLocal localVersion */
        localVersion?: (common.IUInt64Value|null);

        /** OptionsToUploadLocal uploadVersion */
        uploadVersion?: (common.IUInt64Value|null);
    }

    /** Represents an OptionsToUploadLocal. */
    class OptionsToUploadLocal implements IOptionsToUploadLocal {

        /**
         * Constructs a new OptionsToUploadLocal.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IOptionsToUploadLocal);

        /** OptionsToUploadLocal localVersion. */
        public localVersion?: (common.IUInt64Value|null);

        /** OptionsToUploadLocal uploadVersion. */
        public uploadVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new OptionsToUploadLocal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionsToUploadLocal instance
         */
        public static create(properties?: file.IOptionsToUploadLocal): file.OptionsToUploadLocal;

        /**
         * Encodes the specified OptionsToUploadLocal message. Does not implicitly {@link file.OptionsToUploadLocal.verify|verify} messages.
         * @param message OptionsToUploadLocal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IOptionsToUploadLocal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionsToUploadLocal message, length delimited. Does not implicitly {@link file.OptionsToUploadLocal.verify|verify} messages.
         * @param message OptionsToUploadLocal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IOptionsToUploadLocal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionsToUploadLocal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionsToUploadLocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.OptionsToUploadLocal;

        /**
         * Decodes an OptionsToUploadLocal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionsToUploadLocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.OptionsToUploadLocal;

        /**
         * Verifies an OptionsToUploadLocal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionsToUploadLocal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionsToUploadLocal
         */
        public static fromObject(object: { [k: string]: any }): file.OptionsToUploadLocal;

        /**
         * Creates a plain object from an OptionsToUploadLocal message. Also converts values to other types if specified.
         * @param message OptionsToUploadLocal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.OptionsToUploadLocal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionsToUploadLocal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OptionsToUploadLocal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WatchUploadRequestBody. */
    interface IWatchUploadRequestBody {

        /** WatchUploadRequestBody uploadTaskId */
        uploadTaskId?: (number|Long|null);
    }

    /** Represents a WatchUploadRequestBody. */
    class WatchUploadRequestBody implements IWatchUploadRequestBody {

        /**
         * Constructs a new WatchUploadRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IWatchUploadRequestBody);

        /** WatchUploadRequestBody uploadTaskId. */
        public uploadTaskId: (number|Long);

        /**
         * Creates a new WatchUploadRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WatchUploadRequestBody instance
         */
        public static create(properties?: file.IWatchUploadRequestBody): file.WatchUploadRequestBody;

        /**
         * Encodes the specified WatchUploadRequestBody message. Does not implicitly {@link file.WatchUploadRequestBody.verify|verify} messages.
         * @param message WatchUploadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IWatchUploadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WatchUploadRequestBody message, length delimited. Does not implicitly {@link file.WatchUploadRequestBody.verify|verify} messages.
         * @param message WatchUploadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IWatchUploadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WatchUploadRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WatchUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.WatchUploadRequestBody;

        /**
         * Decodes a WatchUploadRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WatchUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.WatchUploadRequestBody;

        /**
         * Verifies a WatchUploadRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WatchUploadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WatchUploadRequestBody
         */
        public static fromObject(object: { [k: string]: any }): file.WatchUploadRequestBody;

        /**
         * Creates a plain object from a WatchUploadRequestBody message. Also converts values to other types if specified.
         * @param message WatchUploadRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.WatchUploadRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WatchUploadRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WatchUploadRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadEventMsg. */
    interface IUploadEventMsg {

        /** UploadEventMsg type */
        type?: (string|null);

        /** UploadEventMsg uploadTaskId */
        uploadTaskId?: (number|Long|null);

        /** UploadEventMsg localVersion */
        localVersion?: (number|Long|null);

        /** UploadEventMsg uploadVersion */
        uploadVersion?: (number|Long|null);
    }

    /** Represents an UploadEventMsg. */
    class UploadEventMsg implements IUploadEventMsg {

        /**
         * Constructs a new UploadEventMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IUploadEventMsg);

        /** UploadEventMsg type. */
        public type: string;

        /** UploadEventMsg uploadTaskId. */
        public uploadTaskId: (number|Long);

        /** UploadEventMsg localVersion. */
        public localVersion: (number|Long);

        /** UploadEventMsg uploadVersion. */
        public uploadVersion: (number|Long);

        /**
         * Creates a new UploadEventMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadEventMsg instance
         */
        public static create(properties?: file.IUploadEventMsg): file.UploadEventMsg;

        /**
         * Encodes the specified UploadEventMsg message. Does not implicitly {@link file.UploadEventMsg.verify|verify} messages.
         * @param message UploadEventMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IUploadEventMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadEventMsg message, length delimited. Does not implicitly {@link file.UploadEventMsg.verify|verify} messages.
         * @param message UploadEventMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IUploadEventMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadEventMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadEventMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.UploadEventMsg;

        /**
         * Decodes an UploadEventMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadEventMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.UploadEventMsg;

        /**
         * Verifies an UploadEventMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadEventMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadEventMsg
         */
        public static fromObject(object: { [k: string]: any }): file.UploadEventMsg;

        /**
         * Creates a plain object from an UploadEventMsg message. Also converts values to other types if specified.
         * @param message UploadEventMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.UploadEventMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadEventMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadEventMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an ObjectReference. */
    interface IObjectReference {

        /** ObjectReference objType */
        objType?: (string|null);

        /** ObjectReference path */
        path?: (string[]|null);
    }

    /** Represents an ObjectReference. */
    class ObjectReference implements IObjectReference {

        /**
         * Constructs a new ObjectReference.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IObjectReference);

        /** ObjectReference objType. */
        public objType: string;

        /** ObjectReference path. */
        public path: string[];

        /**
         * Creates a new ObjectReference instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectReference instance
         */
        public static create(properties?: common.IObjectReference): common.ObjectReference;

        /**
         * Encodes the specified ObjectReference message. Does not implicitly {@link common.ObjectReference.verify|verify} messages.
         * @param message ObjectReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IObjectReference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectReference message, length delimited. Does not implicitly {@link common.ObjectReference.verify|verify} messages.
         * @param message ObjectReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IObjectReference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectReference message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ObjectReference;

        /**
         * Decodes an ObjectReference message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ObjectReference;

        /**
         * Verifies an ObjectReference message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectReference message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectReference
         */
        public static fromObject(object: { [k: string]: any }): common.ObjectReference;

        /**
         * Creates a plain object from an ObjectReference message. Also converts values to other types if specified.
         * @param message ObjectReference
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ObjectReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectReference to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ObjectReference
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BooleanValue. */
    interface IBooleanValue {

        /** BooleanValue value */
        value?: (boolean|null);
    }

    /** Represents a BooleanValue. */
    class BooleanValue implements IBooleanValue {

        /**
         * Constructs a new BooleanValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBooleanValue);

        /** BooleanValue value. */
        public value: boolean;

        /**
         * Creates a new BooleanValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BooleanValue instance
         */
        public static create(properties?: common.IBooleanValue): common.BooleanValue;

        /**
         * Encodes the specified BooleanValue message. Does not implicitly {@link common.BooleanValue.verify|verify} messages.
         * @param message BooleanValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBooleanValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BooleanValue message, length delimited. Does not implicitly {@link common.BooleanValue.verify|verify} messages.
         * @param message BooleanValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBooleanValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BooleanValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BooleanValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BooleanValue;

        /**
         * Decodes a BooleanValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BooleanValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BooleanValue;

        /**
         * Verifies a BooleanValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BooleanValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BooleanValue
         */
        public static fromObject(object: { [k: string]: any }): common.BooleanValue;

        /**
         * Creates a plain object from a BooleanValue message. Also converts values to other types if specified.
         * @param message BooleanValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BooleanValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BooleanValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BooleanValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StringArrayValue. */
    interface IStringArrayValue {

        /** StringArrayValue values */
        values?: (string[]|null);
    }

    /** Represents a StringArrayValue. */
    class StringArrayValue implements IStringArrayValue {

        /**
         * Constructs a new StringArrayValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IStringArrayValue);

        /** StringArrayValue values. */
        public values: string[];

        /**
         * Creates a new StringArrayValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringArrayValue instance
         */
        public static create(properties?: common.IStringArrayValue): common.StringArrayValue;

        /**
         * Encodes the specified StringArrayValue message. Does not implicitly {@link common.StringArrayValue.verify|verify} messages.
         * @param message StringArrayValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IStringArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringArrayValue message, length delimited. Does not implicitly {@link common.StringArrayValue.verify|verify} messages.
         * @param message StringArrayValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IStringArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringArrayValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringArrayValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.StringArrayValue;

        /**
         * Decodes a StringArrayValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringArrayValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.StringArrayValue;

        /**
         * Verifies a StringArrayValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringArrayValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringArrayValue
         */
        public static fromObject(object: { [k: string]: any }): common.StringArrayValue;

        /**
         * Creates a plain object from a StringArrayValue message. Also converts values to other types if specified.
         * @param message StringArrayValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.StringArrayValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringArrayValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StringArrayValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UInt64Value. */
    interface IUInt64Value {

        /** UInt64Value value */
        value?: (number|Long|null);
    }

    /** Represents a UInt64Value. */
    class UInt64Value implements IUInt64Value {

        /**
         * Constructs a new UInt64Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUInt64Value);

        /** UInt64Value value. */
        public value: (number|Long);

        /**
         * Creates a new UInt64Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UInt64Value instance
         */
        public static create(properties?: common.IUInt64Value): common.UInt64Value;

        /**
         * Encodes the specified UInt64Value message. Does not implicitly {@link common.UInt64Value.verify|verify} messages.
         * @param message UInt64Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link common.UInt64Value.verify|verify} messages.
         * @param message UInt64Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UInt64Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UInt64Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UInt64Value;

        /**
         * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UInt64Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UInt64Value;

        /**
         * Verifies a UInt64Value message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UInt64Value
         */
        public static fromObject(object: { [k: string]: any }): common.UInt64Value;

        /**
         * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
         * @param message UInt64Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UInt64Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UInt64Value
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UInt32Value. */
    interface IUInt32Value {

        /** UInt32Value value */
        value?: (number|null);
    }

    /** Represents a UInt32Value. */
    class UInt32Value implements IUInt32Value {

        /**
         * Constructs a new UInt32Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUInt32Value);

        /** UInt32Value value. */
        public value: number;

        /**
         * Creates a new UInt32Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UInt32Value instance
         */
        public static create(properties?: common.IUInt32Value): common.UInt32Value;

        /**
         * Encodes the specified UInt32Value message. Does not implicitly {@link common.UInt32Value.verify|verify} messages.
         * @param message UInt32Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link common.UInt32Value.verify|verify} messages.
         * @param message UInt32Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UInt32Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UInt32Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UInt32Value;

        /**
         * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UInt32Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UInt32Value;

        /**
         * Verifies a UInt32Value message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UInt32Value
         */
        public static fromObject(object: { [k: string]: any }): common.UInt32Value;

        /**
         * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
         * @param message UInt32Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UInt32Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UInt32Value
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StringValue. */
    interface IStringValue {

        /** StringValue value */
        value?: (string|null);
    }

    /** Represents a StringValue. */
    class StringValue implements IStringValue {

        /**
         * Constructs a new StringValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IStringValue);

        /** StringValue value. */
        public value: string;

        /**
         * Creates a new StringValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringValue instance
         */
        public static create(properties?: common.IStringValue): common.StringValue;

        /**
         * Encodes the specified StringValue message. Does not implicitly {@link common.StringValue.verify|verify} messages.
         * @param message StringValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringValue message, length delimited. Does not implicitly {@link common.StringValue.verify|verify} messages.
         * @param message StringValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.StringValue;

        /**
         * Decodes a StringValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.StringValue;

        /**
         * Verifies a StringValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringValue
         */
        public static fromObject(object: { [k: string]: any }): common.StringValue;

        /**
         * Creates a plain object from a StringValue message. Also converts values to other types if specified.
         * @param message StringValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StringValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BytesValue. */
    interface IBytesValue {

        /** BytesValue value */
        value?: (Uint8Array|null);
    }

    /** Represents a BytesValue. */
    class BytesValue implements IBytesValue {

        /**
         * Constructs a new BytesValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBytesValue);

        /** BytesValue value. */
        public value: Uint8Array;

        /**
         * Creates a new BytesValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BytesValue instance
         */
        public static create(properties?: common.IBytesValue): common.BytesValue;

        /**
         * Encodes the specified BytesValue message. Does not implicitly {@link common.BytesValue.verify|verify} messages.
         * @param message BytesValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link common.BytesValue.verify|verify} messages.
         * @param message BytesValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BytesValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BytesValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BytesValue;

        /**
         * Decodes a BytesValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BytesValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BytesValue;

        /**
         * Verifies a BytesValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BytesValue
         */
        public static fromObject(object: { [k: string]: any }): common.BytesValue;

        /**
         * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
         * @param message BytesValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BytesValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BytesValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ErrorValue. */
    interface IErrorValue {

        /** ErrorValue runtimeExcJson */
        runtimeExcJson?: (string|null);

        /** ErrorValue err */
        err?: (string|null);
    }

    /** Represents an ErrorValue. */
    class ErrorValue implements IErrorValue {

        /**
         * Constructs a new ErrorValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IErrorValue);

        /** ErrorValue runtimeExcJson. */
        public runtimeExcJson: string;

        /** ErrorValue err. */
        public err: string;

        /**
         * Creates a new ErrorValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorValue instance
         */
        public static create(properties?: common.IErrorValue): common.ErrorValue;

        /**
         * Encodes the specified ErrorValue message. Does not implicitly {@link common.ErrorValue.verify|verify} messages.
         * @param message ErrorValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IErrorValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorValue message, length delimited. Does not implicitly {@link common.ErrorValue.verify|verify} messages.
         * @param message ErrorValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IErrorValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ErrorValue;

        /**
         * Decodes an ErrorValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ErrorValue;

        /**
         * Verifies an ErrorValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorValue
         */
        public static fromObject(object: { [k: string]: any }): common.ErrorValue;

        /**
         * Creates a plain object from an ErrorValue message. Also converts values to other types if specified.
         * @param message ErrorValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ErrorValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ErrorValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AnyValue. */
    interface IAnyValue {

        /** AnyValue type */
        type?: (string|null);

        /** AnyValue json */
        json?: (common.IStringValue|null);

        /** AnyValue bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents an AnyValue. */
    class AnyValue implements IAnyValue {

        /**
         * Constructs a new AnyValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAnyValue);

        /** AnyValue type. */
        public type: string;

        /** AnyValue json. */
        public json?: (common.IStringValue|null);

        /** AnyValue bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new AnyValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnyValue instance
         */
        public static create(properties?: common.IAnyValue): common.AnyValue;

        /**
         * Encodes the specified AnyValue message. Does not implicitly {@link common.AnyValue.verify|verify} messages.
         * @param message AnyValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAnyValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnyValue message, length delimited. Does not implicitly {@link common.AnyValue.verify|verify} messages.
         * @param message AnyValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAnyValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnyValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AnyValue;

        /**
         * Decodes an AnyValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AnyValue;

        /**
         * Verifies an AnyValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnyValue
         */
        public static fromObject(object: { [k: string]: any }): common.AnyValue;

        /**
         * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
         * @param message AnyValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AnyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnyValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AnyValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
