import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace json_ipc. */
export namespace json_ipc {

    /** Properties of a ValuesSequence. */
    interface IValuesSequence {

        /** ValuesSequence values */
        values?: (json_ipc.ValuesSequence.IValue[]|null);
    }

    /** Represents a ValuesSequence. */
    class ValuesSequence implements IValuesSequence {

        /**
         * Constructs a new ValuesSequence.
         * @param [properties] Properties to set
         */
        constructor(properties?: json_ipc.IValuesSequence);

        /** ValuesSequence values. */
        public values: json_ipc.ValuesSequence.IValue[];

        /**
         * Creates a new ValuesSequence instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValuesSequence instance
         */
        public static create(properties?: json_ipc.IValuesSequence): json_ipc.ValuesSequence;

        /**
         * Encodes the specified ValuesSequence message. Does not implicitly {@link json_ipc.ValuesSequence.verify|verify} messages.
         * @param message ValuesSequence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: json_ipc.IValuesSequence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValuesSequence message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.verify|verify} messages.
         * @param message ValuesSequence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: json_ipc.IValuesSequence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValuesSequence message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValuesSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): json_ipc.ValuesSequence;

        /**
         * Decodes a ValuesSequence message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValuesSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): json_ipc.ValuesSequence;

        /**
         * Verifies a ValuesSequence message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValuesSequence message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValuesSequence
         */
        public static fromObject(object: { [k: string]: any }): json_ipc.ValuesSequence;

        /**
         * Creates a plain object from a ValuesSequence message. Also converts values to other types if specified.
         * @param message ValuesSequence
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: json_ipc.ValuesSequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValuesSequence to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ValuesSequence
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ValuesSequence {

        /** Properties of a BinaryValue. */
        interface IBinaryValue {

            /** BinaryValue arr */
            arr?: (Uint8Array|null);

            /** BinaryValue objLocation */
            objLocation?: (string[]|null);
        }

        /** Represents a BinaryValue. */
        class BinaryValue implements IBinaryValue {

            /**
             * Constructs a new BinaryValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: json_ipc.ValuesSequence.IBinaryValue);

            /** BinaryValue arr. */
            public arr: Uint8Array;

            /** BinaryValue objLocation. */
            public objLocation: string[];

            /**
             * Creates a new BinaryValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BinaryValue instance
             */
            public static create(properties?: json_ipc.ValuesSequence.IBinaryValue): json_ipc.ValuesSequence.BinaryValue;

            /**
             * Encodes the specified BinaryValue message. Does not implicitly {@link json_ipc.ValuesSequence.BinaryValue.verify|verify} messages.
             * @param message BinaryValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: json_ipc.ValuesSequence.IBinaryValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BinaryValue message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.BinaryValue.verify|verify} messages.
             * @param message BinaryValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: json_ipc.ValuesSequence.IBinaryValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BinaryValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BinaryValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): json_ipc.ValuesSequence.BinaryValue;

            /**
             * Decodes a BinaryValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BinaryValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): json_ipc.ValuesSequence.BinaryValue;

            /**
             * Verifies a BinaryValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BinaryValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BinaryValue
             */
            public static fromObject(object: { [k: string]: any }): json_ipc.ValuesSequence.BinaryValue;

            /**
             * Creates a plain object from a BinaryValue message. Also converts values to other types if specified.
             * @param message BinaryValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: json_ipc.ValuesSequence.BinaryValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BinaryValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BinaryValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TransferredObj. */
        interface ITransferredObj {

            /** TransferredObj objLocation */
            objLocation?: (string[]|null);

            /** TransferredObj objRef */
            objRef?: (common.IObjectReference|null);
        }

        /** Represents a TransferredObj. */
        class TransferredObj implements ITransferredObj {

            /**
             * Constructs a new TransferredObj.
             * @param [properties] Properties to set
             */
            constructor(properties?: json_ipc.ValuesSequence.ITransferredObj);

            /** TransferredObj objLocation. */
            public objLocation: string[];

            /** TransferredObj objRef. */
            public objRef?: (common.IObjectReference|null);

            /**
             * Creates a new TransferredObj instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransferredObj instance
             */
            public static create(properties?: json_ipc.ValuesSequence.ITransferredObj): json_ipc.ValuesSequence.TransferredObj;

            /**
             * Encodes the specified TransferredObj message. Does not implicitly {@link json_ipc.ValuesSequence.TransferredObj.verify|verify} messages.
             * @param message TransferredObj message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: json_ipc.ValuesSequence.ITransferredObj, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransferredObj message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.TransferredObj.verify|verify} messages.
             * @param message TransferredObj message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: json_ipc.ValuesSequence.ITransferredObj, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransferredObj message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransferredObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): json_ipc.ValuesSequence.TransferredObj;

            /**
             * Decodes a TransferredObj message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransferredObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): json_ipc.ValuesSequence.TransferredObj;

            /**
             * Verifies a TransferredObj message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransferredObj message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransferredObj
             */
            public static fromObject(object: { [k: string]: any }): json_ipc.ValuesSequence.TransferredObj;

            /**
             * Creates a plain object from a TransferredObj message. Also converts values to other types if specified.
             * @param message TransferredObj
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: json_ipc.ValuesSequence.TransferredObj, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransferredObj to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TransferredObj
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value json */
            json?: (string|null);

            /** Value binaryInJson */
            binaryInJson?: (json_ipc.ValuesSequence.IBinaryValue[]|null);

            /** Value transferredInJson */
            transferredInJson?: (json_ipc.ValuesSequence.ITransferredObj[]|null);

            /** Value arr */
            arr?: (json_ipc.ValuesSequence.IBinaryValue|null);

            /** Value transferred */
            transferred?: (json_ipc.ValuesSequence.ITransferredObj|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: json_ipc.ValuesSequence.IValue);

            /** Value json. */
            public json: string;

            /** Value binaryInJson. */
            public binaryInJson: json_ipc.ValuesSequence.IBinaryValue[];

            /** Value transferredInJson. */
            public transferredInJson: json_ipc.ValuesSequence.ITransferredObj[];

            /** Value arr. */
            public arr?: (json_ipc.ValuesSequence.IBinaryValue|null);

            /** Value transferred. */
            public transferred?: (json_ipc.ValuesSequence.ITransferredObj|null);

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: json_ipc.ValuesSequence.IValue): json_ipc.ValuesSequence.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link json_ipc.ValuesSequence.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: json_ipc.ValuesSequence.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: json_ipc.ValuesSequence.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): json_ipc.ValuesSequence.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): json_ipc.ValuesSequence.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): json_ipc.ValuesSequence.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: json_ipc.ValuesSequence.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
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
