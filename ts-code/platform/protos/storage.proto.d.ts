import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace storage. */
export namespace storage {

    /** Properties of a GetAppLocalFSRequestBody. */
    interface IGetAppLocalFSRequestBody {

        /** GetAppLocalFSRequestBody appName */
        appName?: (common.IStringValue|null);
    }

    /** Represents a GetAppLocalFSRequestBody. */
    class GetAppLocalFSRequestBody implements IGetAppLocalFSRequestBody {

        /**
         * Constructs a new GetAppLocalFSRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IGetAppLocalFSRequestBody);

        /** GetAppLocalFSRequestBody appName. */
        public appName?: (common.IStringValue|null);

        /**
         * Creates a new GetAppLocalFSRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAppLocalFSRequestBody instance
         */
        public static create(properties?: storage.IGetAppLocalFSRequestBody): storage.GetAppLocalFSRequestBody;

        /**
         * Encodes the specified GetAppLocalFSRequestBody message. Does not implicitly {@link storage.GetAppLocalFSRequestBody.verify|verify} messages.
         * @param message GetAppLocalFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IGetAppLocalFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAppLocalFSRequestBody message, length delimited. Does not implicitly {@link storage.GetAppLocalFSRequestBody.verify|verify} messages.
         * @param message GetAppLocalFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IGetAppLocalFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAppLocalFSRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAppLocalFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.GetAppLocalFSRequestBody;

        /**
         * Decodes a GetAppLocalFSRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAppLocalFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.GetAppLocalFSRequestBody;

        /**
         * Verifies a GetAppLocalFSRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAppLocalFSRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAppLocalFSRequestBody
         */
        public static fromObject(object: { [k: string]: any }): storage.GetAppLocalFSRequestBody;

        /**
         * Creates a plain object from a GetAppLocalFSRequestBody message. Also converts values to other types if specified.
         * @param message GetAppLocalFSRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.GetAppLocalFSRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAppLocalFSRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetAppLocalFSRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetAppSyncedFSRequestBody. */
    interface IGetAppSyncedFSRequestBody {

        /** GetAppSyncedFSRequestBody appName */
        appName?: (common.IStringValue|null);
    }

    /** Represents a GetAppSyncedFSRequestBody. */
    class GetAppSyncedFSRequestBody implements IGetAppSyncedFSRequestBody {

        /**
         * Constructs a new GetAppSyncedFSRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IGetAppSyncedFSRequestBody);

        /** GetAppSyncedFSRequestBody appName. */
        public appName?: (common.IStringValue|null);

        /**
         * Creates a new GetAppSyncedFSRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAppSyncedFSRequestBody instance
         */
        public static create(properties?: storage.IGetAppSyncedFSRequestBody): storage.GetAppSyncedFSRequestBody;

        /**
         * Encodes the specified GetAppSyncedFSRequestBody message. Does not implicitly {@link storage.GetAppSyncedFSRequestBody.verify|verify} messages.
         * @param message GetAppSyncedFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IGetAppSyncedFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAppSyncedFSRequestBody message, length delimited. Does not implicitly {@link storage.GetAppSyncedFSRequestBody.verify|verify} messages.
         * @param message GetAppSyncedFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IGetAppSyncedFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAppSyncedFSRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAppSyncedFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.GetAppSyncedFSRequestBody;

        /**
         * Decodes a GetAppSyncedFSRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAppSyncedFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.GetAppSyncedFSRequestBody;

        /**
         * Verifies a GetAppSyncedFSRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAppSyncedFSRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAppSyncedFSRequestBody
         */
        public static fromObject(object: { [k: string]: any }): storage.GetAppSyncedFSRequestBody;

        /**
         * Creates a plain object from a GetAppSyncedFSRequestBody message. Also converts values to other types if specified.
         * @param message GetAppSyncedFSRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.GetAppSyncedFSRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAppSyncedFSRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetAppSyncedFSRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserFSRequestBody. */
    interface IGetUserFSRequestBody {

        /** GetUserFSRequestBody type */
        type?: (string|null);

        /** GetUserFSRequestBody path */
        path?: (common.IStringValue|null);
    }

    /** Represents a GetUserFSRequestBody. */
    class GetUserFSRequestBody implements IGetUserFSRequestBody {

        /**
         * Constructs a new GetUserFSRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IGetUserFSRequestBody);

        /** GetUserFSRequestBody type. */
        public type: string;

        /** GetUserFSRequestBody path. */
        public path?: (common.IStringValue|null);

        /**
         * Creates a new GetUserFSRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserFSRequestBody instance
         */
        public static create(properties?: storage.IGetUserFSRequestBody): storage.GetUserFSRequestBody;

        /**
         * Encodes the specified GetUserFSRequestBody message. Does not implicitly {@link storage.GetUserFSRequestBody.verify|verify} messages.
         * @param message GetUserFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IGetUserFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserFSRequestBody message, length delimited. Does not implicitly {@link storage.GetUserFSRequestBody.verify|verify} messages.
         * @param message GetUserFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IGetUserFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserFSRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.GetUserFSRequestBody;

        /**
         * Decodes a GetUserFSRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.GetUserFSRequestBody;

        /**
         * Verifies a GetUserFSRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserFSRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserFSRequestBody
         */
        public static fromObject(object: { [k: string]: any }): storage.GetUserFSRequestBody;

        /**
         * Creates a plain object from a GetUserFSRequestBody message. Also converts values to other types if specified.
         * @param message GetUserFSRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.GetUserFSRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserFSRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserFSRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetSysFSRequestBody. */
    interface IGetSysFSRequestBody {

        /** GetSysFSRequestBody type */
        type?: (string|null);

        /** GetSysFSRequestBody path */
        path?: (common.IStringValue|null);
    }

    /** Represents a GetSysFSRequestBody. */
    class GetSysFSRequestBody implements IGetSysFSRequestBody {

        /**
         * Constructs a new GetSysFSRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IGetSysFSRequestBody);

        /** GetSysFSRequestBody type. */
        public type: string;

        /** GetSysFSRequestBody path. */
        public path?: (common.IStringValue|null);

        /**
         * Creates a new GetSysFSRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSysFSRequestBody instance
         */
        public static create(properties?: storage.IGetSysFSRequestBody): storage.GetSysFSRequestBody;

        /**
         * Encodes the specified GetSysFSRequestBody message. Does not implicitly {@link storage.GetSysFSRequestBody.verify|verify} messages.
         * @param message GetSysFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IGetSysFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSysFSRequestBody message, length delimited. Does not implicitly {@link storage.GetSysFSRequestBody.verify|verify} messages.
         * @param message GetSysFSRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IGetSysFSRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSysFSRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSysFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.GetSysFSRequestBody;

        /**
         * Decodes a GetSysFSRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSysFSRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.GetSysFSRequestBody;

        /**
         * Verifies a GetSysFSRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSysFSRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSysFSRequestBody
         */
        public static fromObject(object: { [k: string]: any }): storage.GetSysFSRequestBody;

        /**
         * Creates a plain object from a GetSysFSRequestBody message. Also converts values to other types if specified.
         * @param message GetSysFSRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.GetSysFSRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSysFSRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetSysFSRequestBody
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
