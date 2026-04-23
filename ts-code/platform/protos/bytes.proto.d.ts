import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace bytes. */
export namespace bytes {

    /** Properties of a SpliceRequestBody. */
    interface ISpliceRequestBody {

        /** SpliceRequestBody pos */
        pos?: (number|Long|null);

        /** SpliceRequestBody del */
        del?: (number|Long|null);

        /** SpliceRequestBody bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a SpliceRequestBody. */
    class SpliceRequestBody implements ISpliceRequestBody {

        /**
         * Constructs a new SpliceRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.ISpliceRequestBody);

        /** SpliceRequestBody pos. */
        public pos: (number|Long);

        /** SpliceRequestBody del. */
        public del: (number|Long);

        /** SpliceRequestBody bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new SpliceRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpliceRequestBody instance
         */
        public static create(properties?: bytes.ISpliceRequestBody): bytes.SpliceRequestBody;

        /**
         * Encodes the specified SpliceRequestBody message. Does not implicitly {@link bytes.SpliceRequestBody.verify|verify} messages.
         * @param message SpliceRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.ISpliceRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpliceRequestBody message, length delimited. Does not implicitly {@link bytes.SpliceRequestBody.verify|verify} messages.
         * @param message SpliceRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.ISpliceRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpliceRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpliceRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.SpliceRequestBody;

        /**
         * Decodes a SpliceRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpliceRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.SpliceRequestBody;

        /**
         * Verifies a SpliceRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpliceRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpliceRequestBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.SpliceRequestBody;

        /**
         * Creates a plain object from a SpliceRequestBody message. Also converts values to other types if specified.
         * @param message SpliceRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.SpliceRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpliceRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SpliceRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TruncateRequestBody. */
    interface ITruncateRequestBody {

        /** TruncateRequestBody size */
        size?: (number|Long|null);
    }

    /** Represents a TruncateRequestBody. */
    class TruncateRequestBody implements ITruncateRequestBody {

        /**
         * Constructs a new TruncateRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.ITruncateRequestBody);

        /** TruncateRequestBody size. */
        public size: (number|Long);

        /**
         * Creates a new TruncateRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TruncateRequestBody instance
         */
        public static create(properties?: bytes.ITruncateRequestBody): bytes.TruncateRequestBody;

        /**
         * Encodes the specified TruncateRequestBody message. Does not implicitly {@link bytes.TruncateRequestBody.verify|verify} messages.
         * @param message TruncateRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.ITruncateRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TruncateRequestBody message, length delimited. Does not implicitly {@link bytes.TruncateRequestBody.verify|verify} messages.
         * @param message TruncateRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.ITruncateRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TruncateRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TruncateRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.TruncateRequestBody;

        /**
         * Decodes a TruncateRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TruncateRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.TruncateRequestBody;

        /**
         * Verifies a TruncateRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TruncateRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TruncateRequestBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.TruncateRequestBody;

        /**
         * Creates a plain object from a TruncateRequestBody message. Also converts values to other types if specified.
         * @param message TruncateRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.TruncateRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TruncateRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TruncateRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileLayoutMsg. */
    interface IFileLayoutMsg {

        /** FileLayoutMsg base */
        base?: (common.IUInt64Value|null);

        /** FileLayoutMsg sections */
        sections?: (bytes.FileLayoutMsg.ILayoutSection[]|null);
    }

    /** Represents a FileLayoutMsg. */
    class FileLayoutMsg implements IFileLayoutMsg {

        /**
         * Constructs a new FileLayoutMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.IFileLayoutMsg);

        /** FileLayoutMsg base. */
        public base?: (common.IUInt64Value|null);

        /** FileLayoutMsg sections. */
        public sections: bytes.FileLayoutMsg.ILayoutSection[];

        /**
         * Creates a new FileLayoutMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileLayoutMsg instance
         */
        public static create(properties?: bytes.IFileLayoutMsg): bytes.FileLayoutMsg;

        /**
         * Encodes the specified FileLayoutMsg message. Does not implicitly {@link bytes.FileLayoutMsg.verify|verify} messages.
         * @param message FileLayoutMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.IFileLayoutMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileLayoutMsg message, length delimited. Does not implicitly {@link bytes.FileLayoutMsg.verify|verify} messages.
         * @param message FileLayoutMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.IFileLayoutMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileLayoutMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileLayoutMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.FileLayoutMsg;

        /**
         * Decodes a FileLayoutMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileLayoutMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.FileLayoutMsg;

        /**
         * Verifies a FileLayoutMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileLayoutMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileLayoutMsg
         */
        public static fromObject(object: { [k: string]: any }): bytes.FileLayoutMsg;

        /**
         * Creates a plain object from a FileLayoutMsg message. Also converts values to other types if specified.
         * @param message FileLayoutMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.FileLayoutMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileLayoutMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileLayoutMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileLayoutMsg {

        /** Properties of a LayoutSection. */
        interface ILayoutSection {

            /** LayoutSection src */
            src?: (string|null);

            /** LayoutSection ofs */
            ofs?: (number|Long|null);

            /** LayoutSection len */
            len?: (number|Long|null);
        }

        /** Represents a LayoutSection. */
        class LayoutSection implements ILayoutSection {

            /**
             * Constructs a new LayoutSection.
             * @param [properties] Properties to set
             */
            constructor(properties?: bytes.FileLayoutMsg.ILayoutSection);

            /** LayoutSection src. */
            public src: string;

            /** LayoutSection ofs. */
            public ofs: (number|Long);

            /** LayoutSection len. */
            public len: (number|Long);

            /**
             * Creates a new LayoutSection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LayoutSection instance
             */
            public static create(properties?: bytes.FileLayoutMsg.ILayoutSection): bytes.FileLayoutMsg.LayoutSection;

            /**
             * Encodes the specified LayoutSection message. Does not implicitly {@link bytes.FileLayoutMsg.LayoutSection.verify|verify} messages.
             * @param message LayoutSection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bytes.FileLayoutMsg.ILayoutSection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LayoutSection message, length delimited. Does not implicitly {@link bytes.FileLayoutMsg.LayoutSection.verify|verify} messages.
             * @param message LayoutSection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bytes.FileLayoutMsg.ILayoutSection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LayoutSection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LayoutSection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.FileLayoutMsg.LayoutSection;

            /**
             * Decodes a LayoutSection message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LayoutSection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.FileLayoutMsg.LayoutSection;

            /**
             * Verifies a LayoutSection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LayoutSection message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LayoutSection
             */
            public static fromObject(object: { [k: string]: any }): bytes.FileLayoutMsg.LayoutSection;

            /**
             * Creates a plain object from a LayoutSection message. Also converts values to other types if specified.
             * @param message LayoutSection
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bytes.FileLayoutMsg.LayoutSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LayoutSection to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LayoutSection
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a DoneRequestBody. */
    interface IDoneRequestBody {

        /** DoneRequestBody err */
        err?: (common.IErrorValue|null);
    }

    /** Represents a DoneRequestBody. */
    class DoneRequestBody implements IDoneRequestBody {

        /**
         * Constructs a new DoneRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.IDoneRequestBody);

        /** DoneRequestBody err. */
        public err?: (common.IErrorValue|null);

        /**
         * Creates a new DoneRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoneRequestBody instance
         */
        public static create(properties?: bytes.IDoneRequestBody): bytes.DoneRequestBody;

        /**
         * Encodes the specified DoneRequestBody message. Does not implicitly {@link bytes.DoneRequestBody.verify|verify} messages.
         * @param message DoneRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.IDoneRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DoneRequestBody message, length delimited. Does not implicitly {@link bytes.DoneRequestBody.verify|verify} messages.
         * @param message DoneRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.IDoneRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoneRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoneRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.DoneRequestBody;

        /**
         * Decodes a DoneRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoneRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.DoneRequestBody;

        /**
         * Verifies a DoneRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DoneRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DoneRequestBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.DoneRequestBody;

        /**
         * Creates a plain object from a DoneRequestBody message. Also converts values to other types if specified.
         * @param message DoneRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.DoneRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DoneRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DoneRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadReplyBody. */
    interface IReadReplyBody {

        /** ReadReplyBody bytes */
        bytes?: (common.IBytesValue|null);
    }

    /** Represents a ReadReplyBody. */
    class ReadReplyBody implements IReadReplyBody {

        /**
         * Constructs a new ReadReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.IReadReplyBody);

        /** ReadReplyBody bytes. */
        public bytes?: (common.IBytesValue|null);

        /**
         * Creates a new ReadReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadReplyBody instance
         */
        public static create(properties?: bytes.IReadReplyBody): bytes.ReadReplyBody;

        /**
         * Encodes the specified ReadReplyBody message. Does not implicitly {@link bytes.ReadReplyBody.verify|verify} messages.
         * @param message ReadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.IReadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadReplyBody message, length delimited. Does not implicitly {@link bytes.ReadReplyBody.verify|verify} messages.
         * @param message ReadReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.IReadReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.ReadReplyBody;

        /**
         * Decodes a ReadReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.ReadReplyBody;

        /**
         * Verifies a ReadReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadReplyBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.ReadReplyBody;

        /**
         * Creates a plain object from a ReadReplyBody message. Also converts values to other types if specified.
         * @param message ReadReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.ReadReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadNextRequestBody. */
    interface IReadNextRequestBody {

        /** ReadNextRequestBody len */
        len?: (common.IUInt64Value|null);
    }

    /** Represents a ReadNextRequestBody. */
    class ReadNextRequestBody implements IReadNextRequestBody {

        /**
         * Constructs a new ReadNextRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.IReadNextRequestBody);

        /** ReadNextRequestBody len. */
        public len?: (common.IUInt64Value|null);

        /**
         * Creates a new ReadNextRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadNextRequestBody instance
         */
        public static create(properties?: bytes.IReadNextRequestBody): bytes.ReadNextRequestBody;

        /**
         * Encodes the specified ReadNextRequestBody message. Does not implicitly {@link bytes.ReadNextRequestBody.verify|verify} messages.
         * @param message ReadNextRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.IReadNextRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadNextRequestBody message, length delimited. Does not implicitly {@link bytes.ReadNextRequestBody.verify|verify} messages.
         * @param message ReadNextRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.IReadNextRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadNextRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadNextRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.ReadNextRequestBody;

        /**
         * Decodes a ReadNextRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadNextRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.ReadNextRequestBody;

        /**
         * Verifies a ReadNextRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadNextRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadNextRequestBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.ReadNextRequestBody;

        /**
         * Creates a plain object from a ReadNextRequestBody message. Also converts values to other types if specified.
         * @param message ReadNextRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.ReadNextRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadNextRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadNextRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadAtRequestBody. */
    interface IReadAtRequestBody {

        /** ReadAtRequestBody pos */
        pos?: (number|Long|null);

        /** ReadAtRequestBody len */
        len?: (common.IUInt64Value|null);
    }

    /** Represents a ReadAtRequestBody. */
    class ReadAtRequestBody implements IReadAtRequestBody {

        /**
         * Constructs a new ReadAtRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.IReadAtRequestBody);

        /** ReadAtRequestBody pos. */
        public pos: (number|Long);

        /** ReadAtRequestBody len. */
        public len?: (common.IUInt64Value|null);

        /**
         * Creates a new ReadAtRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadAtRequestBody instance
         */
        public static create(properties?: bytes.IReadAtRequestBody): bytes.ReadAtRequestBody;

        /**
         * Encodes the specified ReadAtRequestBody message. Does not implicitly {@link bytes.ReadAtRequestBody.verify|verify} messages.
         * @param message ReadAtRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.IReadAtRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadAtRequestBody message, length delimited. Does not implicitly {@link bytes.ReadAtRequestBody.verify|verify} messages.
         * @param message ReadAtRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.IReadAtRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadAtRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadAtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.ReadAtRequestBody;

        /**
         * Decodes a ReadAtRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadAtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.ReadAtRequestBody;

        /**
         * Verifies a ReadAtRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadAtRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadAtRequestBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.ReadAtRequestBody;

        /**
         * Creates a plain object from a ReadAtRequestBody message. Also converts values to other types if specified.
         * @param message ReadAtRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.ReadAtRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadAtRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadAtRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SeekRequestBody. */
    interface ISeekRequestBody {

        /** SeekRequestBody offset */
        offset?: (number|Long|null);
    }

    /** Represents a SeekRequestBody. */
    class SeekRequestBody implements ISeekRequestBody {

        /**
         * Constructs a new SeekRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: bytes.ISeekRequestBody);

        /** SeekRequestBody offset. */
        public offset: (number|Long);

        /**
         * Creates a new SeekRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SeekRequestBody instance
         */
        public static create(properties?: bytes.ISeekRequestBody): bytes.SeekRequestBody;

        /**
         * Encodes the specified SeekRequestBody message. Does not implicitly {@link bytes.SeekRequestBody.verify|verify} messages.
         * @param message SeekRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bytes.ISeekRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SeekRequestBody message, length delimited. Does not implicitly {@link bytes.SeekRequestBody.verify|verify} messages.
         * @param message SeekRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bytes.ISeekRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SeekRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SeekRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bytes.SeekRequestBody;

        /**
         * Decodes a SeekRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SeekRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bytes.SeekRequestBody;

        /**
         * Verifies a SeekRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SeekRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SeekRequestBody
         */
        public static fromObject(object: { [k: string]: any }): bytes.SeekRequestBody;

        /**
         * Creates a plain object from a SeekRequestBody message. Also converts values to other types if specified.
         * @param message SeekRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bytes.SeekRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SeekRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SeekRequestBody
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
