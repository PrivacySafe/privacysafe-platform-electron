import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace rpc. */
export namespace rpc {

    /** Properties of an AppRPCRequestBody. */
    interface IAppRPCRequestBody {

        /** AppRPCRequestBody service */
        service?: (string|null);
    }

    /** Represents an AppRPCRequestBody. */
    class AppRPCRequestBody implements IAppRPCRequestBody {

        /**
         * Constructs a new AppRPCRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IAppRPCRequestBody);

        /** AppRPCRequestBody service. */
        public service: string;

        /**
         * Creates a new AppRPCRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppRPCRequestBody instance
         */
        public static create(properties?: rpc.IAppRPCRequestBody): rpc.AppRPCRequestBody;

        /**
         * Encodes the specified AppRPCRequestBody message. Does not implicitly {@link rpc.AppRPCRequestBody.verify|verify} messages.
         * @param message AppRPCRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IAppRPCRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppRPCRequestBody message, length delimited. Does not implicitly {@link rpc.AppRPCRequestBody.verify|verify} messages.
         * @param message AppRPCRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IAppRPCRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppRPCRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppRPCRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.AppRPCRequestBody;

        /**
         * Decodes an AppRPCRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppRPCRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.AppRPCRequestBody;

        /**
         * Verifies an AppRPCRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppRPCRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppRPCRequestBody
         */
        public static fromObject(object: { [k: string]: any }): rpc.AppRPCRequestBody;

        /**
         * Creates a plain object from an AppRPCRequestBody message. Also converts values to other types if specified.
         * @param message AppRPCRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.AppRPCRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppRPCRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AppRPCRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OtherAppsRPCRequestBody. */
    interface IOtherAppsRPCRequestBody {

        /** OtherAppsRPCRequestBody appDomain */
        appDomain?: (string|null);

        /** OtherAppsRPCRequestBody service */
        service?: (string|null);
    }

    /** Represents an OtherAppsRPCRequestBody. */
    class OtherAppsRPCRequestBody implements IOtherAppsRPCRequestBody {

        /**
         * Constructs a new OtherAppsRPCRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IOtherAppsRPCRequestBody);

        /** OtherAppsRPCRequestBody appDomain. */
        public appDomain: string;

        /** OtherAppsRPCRequestBody service. */
        public service: string;

        /**
         * Creates a new OtherAppsRPCRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OtherAppsRPCRequestBody instance
         */
        public static create(properties?: rpc.IOtherAppsRPCRequestBody): rpc.OtherAppsRPCRequestBody;

        /**
         * Encodes the specified OtherAppsRPCRequestBody message. Does not implicitly {@link rpc.OtherAppsRPCRequestBody.verify|verify} messages.
         * @param message OtherAppsRPCRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IOtherAppsRPCRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OtherAppsRPCRequestBody message, length delimited. Does not implicitly {@link rpc.OtherAppsRPCRequestBody.verify|verify} messages.
         * @param message OtherAppsRPCRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IOtherAppsRPCRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OtherAppsRPCRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OtherAppsRPCRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.OtherAppsRPCRequestBody;

        /**
         * Decodes an OtherAppsRPCRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OtherAppsRPCRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.OtherAppsRPCRequestBody;

        /**
         * Verifies an OtherAppsRPCRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OtherAppsRPCRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OtherAppsRPCRequestBody
         */
        public static fromObject(object: { [k: string]: any }): rpc.OtherAppsRPCRequestBody;

        /**
         * Creates a plain object from an OtherAppsRPCRequestBody message. Also converts values to other types if specified.
         * @param message OtherAppsRPCRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.OtherAppsRPCRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OtherAppsRPCRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OtherAppsRPCRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AllocateProxyRequestBody. */
    interface IAllocateProxyRequestBody {

        /** AllocateProxyRequestBody objRef */
        objRef?: (number|null);

        /** AllocateProxyRequestBody members */
        members?: (rpc.AllocateProxyRequestBody.IMember[]|null);
    }

    /** Represents an AllocateProxyRequestBody. */
    class AllocateProxyRequestBody implements IAllocateProxyRequestBody {

        /**
         * Constructs a new AllocateProxyRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IAllocateProxyRequestBody);

        /** AllocateProxyRequestBody objRef. */
        public objRef: number;

        /** AllocateProxyRequestBody members. */
        public members: rpc.AllocateProxyRequestBody.IMember[];

        /**
         * Creates a new AllocateProxyRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllocateProxyRequestBody instance
         */
        public static create(properties?: rpc.IAllocateProxyRequestBody): rpc.AllocateProxyRequestBody;

        /**
         * Encodes the specified AllocateProxyRequestBody message. Does not implicitly {@link rpc.AllocateProxyRequestBody.verify|verify} messages.
         * @param message AllocateProxyRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IAllocateProxyRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllocateProxyRequestBody message, length delimited. Does not implicitly {@link rpc.AllocateProxyRequestBody.verify|verify} messages.
         * @param message AllocateProxyRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IAllocateProxyRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllocateProxyRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllocateProxyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.AllocateProxyRequestBody;

        /**
         * Decodes an AllocateProxyRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllocateProxyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.AllocateProxyRequestBody;

        /**
         * Verifies an AllocateProxyRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllocateProxyRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllocateProxyRequestBody
         */
        public static fromObject(object: { [k: string]: any }): rpc.AllocateProxyRequestBody;

        /**
         * Creates a plain object from an AllocateProxyRequestBody message. Also converts values to other types if specified.
         * @param message AllocateProxyRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.AllocateProxyRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllocateProxyRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AllocateProxyRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AllocateProxyRequestBody {

        /** Properties of a Member. */
        interface IMember {

            /** Member isObj */
            isObj?: (boolean|null);

            /** Member name */
            name?: (string|null);

            /** Member members */
            members?: (rpc.AllocateProxyRequestBody.IMember[]|null);
        }

        /** Represents a Member. */
        class Member implements IMember {

            /**
             * Constructs a new Member.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpc.AllocateProxyRequestBody.IMember);

            /** Member isObj. */
            public isObj: boolean;

            /** Member name. */
            public name: string;

            /** Member members. */
            public members: rpc.AllocateProxyRequestBody.IMember[];

            /**
             * Creates a new Member instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Member instance
             */
            public static create(properties?: rpc.AllocateProxyRequestBody.IMember): rpc.AllocateProxyRequestBody.Member;

            /**
             * Encodes the specified Member message. Does not implicitly {@link rpc.AllocateProxyRequestBody.Member.verify|verify} messages.
             * @param message Member message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpc.AllocateProxyRequestBody.IMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Member message, length delimited. Does not implicitly {@link rpc.AllocateProxyRequestBody.Member.verify|verify} messages.
             * @param message Member message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpc.AllocateProxyRequestBody.IMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Member message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Member
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.AllocateProxyRequestBody.Member;

            /**
             * Decodes a Member message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Member
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.AllocateProxyRequestBody.Member;

            /**
             * Verifies a Member message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Member message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Member
             */
            public static fromObject(object: { [k: string]: any }): rpc.AllocateProxyRequestBody.Member;

            /**
             * Creates a plain object from a Member message. Also converts values to other types if specified.
             * @param message Member
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpc.AllocateProxyRequestBody.Member, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Member to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Member
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CallStartRequestBody. */
    interface ICallStartRequestBody {

        /** CallStartRequestBody method */
        method?: (string|null);

        /** CallStartRequestBody req */
        req?: (rpc.IPassedDatum|null);
    }

    /** Represents a CallStartRequestBody. */
    class CallStartRequestBody implements ICallStartRequestBody {

        /**
         * Constructs a new CallStartRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICallStartRequestBody);

        /** CallStartRequestBody method. */
        public method: string;

        /** CallStartRequestBody req. */
        public req?: (rpc.IPassedDatum|null);

        /**
         * Creates a new CallStartRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallStartRequestBody instance
         */
        public static create(properties?: rpc.ICallStartRequestBody): rpc.CallStartRequestBody;

        /**
         * Encodes the specified CallStartRequestBody message. Does not implicitly {@link rpc.CallStartRequestBody.verify|verify} messages.
         * @param message CallStartRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICallStartRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallStartRequestBody message, length delimited. Does not implicitly {@link rpc.CallStartRequestBody.verify|verify} messages.
         * @param message CallStartRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICallStartRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallStartRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallStartRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.CallStartRequestBody;

        /**
         * Decodes a CallStartRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallStartRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.CallStartRequestBody;

        /**
         * Verifies a CallStartRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallStartRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallStartRequestBody
         */
        public static fromObject(object: { [k: string]: any }): rpc.CallStartRequestBody;

        /**
         * Creates a plain object from a CallStartRequestBody message. Also converts values to other types if specified.
         * @param message CallStartRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CallStartRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallStartRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CallStartRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PassedDatum. */
    interface IPassedDatum {

        /** PassedDatum bytes */
        bytes?: (Uint8Array|null);

        /** PassedDatum passedObjs */
        passedObjs?: (rpc.PassedDatum.IPassedObj[]|null);
    }

    /** Represents a PassedDatum. */
    class PassedDatum implements IPassedDatum {

        /**
         * Constructs a new PassedDatum.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IPassedDatum);

        /** PassedDatum bytes. */
        public bytes: Uint8Array;

        /** PassedDatum passedObjs. */
        public passedObjs: rpc.PassedDatum.IPassedObj[];

        /**
         * Creates a new PassedDatum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PassedDatum instance
         */
        public static create(properties?: rpc.IPassedDatum): rpc.PassedDatum;

        /**
         * Encodes the specified PassedDatum message. Does not implicitly {@link rpc.PassedDatum.verify|verify} messages.
         * @param message PassedDatum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IPassedDatum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PassedDatum message, length delimited. Does not implicitly {@link rpc.PassedDatum.verify|verify} messages.
         * @param message PassedDatum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IPassedDatum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PassedDatum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PassedDatum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.PassedDatum;

        /**
         * Decodes a PassedDatum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PassedDatum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.PassedDatum;

        /**
         * Verifies a PassedDatum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PassedDatum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PassedDatum
         */
        public static fromObject(object: { [k: string]: any }): rpc.PassedDatum;

        /**
         * Creates a plain object from a PassedDatum message. Also converts values to other types if specified.
         * @param message PassedDatum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.PassedDatum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PassedDatum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PassedDatum
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PassedDatum {

        /** Properties of a PassedObj. */
        interface IPassedObj {

            /** PassedObj ref */
            ref?: (common.IObjectReference|null);

            /** PassedObj fs */
            fs?: (fs.IFS|null);

            /** PassedObj file */
            file?: (file.IFile|null);
        }

        /** Represents a PassedObj. */
        class PassedObj implements IPassedObj {

            /**
             * Constructs a new PassedObj.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpc.PassedDatum.IPassedObj);

            /** PassedObj ref. */
            public ref?: (common.IObjectReference|null);

            /** PassedObj fs. */
            public fs?: (fs.IFS|null);

            /** PassedObj file. */
            public file?: (file.IFile|null);

            /**
             * Creates a new PassedObj instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PassedObj instance
             */
            public static create(properties?: rpc.PassedDatum.IPassedObj): rpc.PassedDatum.PassedObj;

            /**
             * Encodes the specified PassedObj message. Does not implicitly {@link rpc.PassedDatum.PassedObj.verify|verify} messages.
             * @param message PassedObj message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpc.PassedDatum.IPassedObj, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PassedObj message, length delimited. Does not implicitly {@link rpc.PassedDatum.PassedObj.verify|verify} messages.
             * @param message PassedObj message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpc.PassedDatum.IPassedObj, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PassedObj message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PassedObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.PassedDatum.PassedObj;

            /**
             * Decodes a PassedObj message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PassedObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.PassedDatum.PassedObj;

            /**
             * Verifies a PassedObj message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PassedObj message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PassedObj
             */
            public static fromObject(object: { [k: string]: any }): rpc.PassedDatum.PassedObj;

            /**
             * Creates a plain object from a PassedObj message. Also converts values to other types if specified.
             * @param message PassedObj
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpc.PassedDatum.PassedObj, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PassedObj to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PassedObj
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an ExposeSrvRequestBody. */
    interface IExposeSrvRequestBody {

        /** ExposeSrvRequestBody service */
        service?: (string|null);
    }

    /** Represents an ExposeSrvRequestBody. */
    class ExposeSrvRequestBody implements IExposeSrvRequestBody {

        /**
         * Constructs a new ExposeSrvRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IExposeSrvRequestBody);

        /** ExposeSrvRequestBody service. */
        public service: string;

        /**
         * Creates a new ExposeSrvRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExposeSrvRequestBody instance
         */
        public static create(properties?: rpc.IExposeSrvRequestBody): rpc.ExposeSrvRequestBody;

        /**
         * Encodes the specified ExposeSrvRequestBody message. Does not implicitly {@link rpc.ExposeSrvRequestBody.verify|verify} messages.
         * @param message ExposeSrvRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IExposeSrvRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExposeSrvRequestBody message, length delimited. Does not implicitly {@link rpc.ExposeSrvRequestBody.verify|verify} messages.
         * @param message ExposeSrvRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IExposeSrvRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExposeSrvRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExposeSrvRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.ExposeSrvRequestBody;

        /**
         * Decodes an ExposeSrvRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExposeSrvRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.ExposeSrvRequestBody;

        /**
         * Verifies an ExposeSrvRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExposeSrvRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExposeSrvRequestBody
         */
        public static fromObject(object: { [k: string]: any }): rpc.ExposeSrvRequestBody;

        /**
         * Creates a plain object from an ExposeSrvRequestBody message. Also converts values to other types if specified.
         * @param message ExposeSrvRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.ExposeSrvRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExposeSrvRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExposeSrvRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IncomingMsg. */
    interface IIncomingMsg {

        /** IncomingMsg msgType */
        msgType?: (string|null);

        /** IncomingMsg callNum */
        callNum?: (number|null);

        /** IncomingMsg method */
        method?: (string|null);

        /** IncomingMsg data */
        data?: (rpc.IPassedDatum|null);
    }

    /** Represents an IncomingMsg. */
    class IncomingMsg implements IIncomingMsg {

        /**
         * Constructs a new IncomingMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IIncomingMsg);

        /** IncomingMsg msgType. */
        public msgType: string;

        /** IncomingMsg callNum. */
        public callNum: number;

        /** IncomingMsg method. */
        public method: string;

        /** IncomingMsg data. */
        public data?: (rpc.IPassedDatum|null);

        /**
         * Creates a new IncomingMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IncomingMsg instance
         */
        public static create(properties?: rpc.IIncomingMsg): rpc.IncomingMsg;

        /**
         * Encodes the specified IncomingMsg message. Does not implicitly {@link rpc.IncomingMsg.verify|verify} messages.
         * @param message IncomingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IIncomingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IncomingMsg message, length delimited. Does not implicitly {@link rpc.IncomingMsg.verify|verify} messages.
         * @param message IncomingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IIncomingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IncomingMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IncomingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.IncomingMsg;

        /**
         * Decodes an IncomingMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IncomingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.IncomingMsg;

        /**
         * Verifies an IncomingMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IncomingMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IncomingMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.IncomingMsg;

        /**
         * Creates a plain object from an IncomingMsg message. Also converts values to other types if specified.
         * @param message IncomingMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.IncomingMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IncomingMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IncomingMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutgoingMsg. */
    interface IOutgoingMsg {

        /** OutgoingMsg callNum */
        callNum?: (number|null);

        /** OutgoingMsg callStatus */
        callStatus?: (string|null);

        /** OutgoingMsg data */
        data?: (rpc.IPassedDatum|null);

        /** OutgoingMsg err */
        err?: (common.IErrorValue|null);
    }

    /** Represents an OutgoingMsg. */
    class OutgoingMsg implements IOutgoingMsg {

        /**
         * Constructs a new OutgoingMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IOutgoingMsg);

        /** OutgoingMsg callNum. */
        public callNum: number;

        /** OutgoingMsg callStatus. */
        public callStatus: string;

        /** OutgoingMsg data. */
        public data?: (rpc.IPassedDatum|null);

        /** OutgoingMsg err. */
        public err?: (common.IErrorValue|null);

        /**
         * Creates a new OutgoingMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutgoingMsg instance
         */
        public static create(properties?: rpc.IOutgoingMsg): rpc.OutgoingMsg;

        /**
         * Encodes the specified OutgoingMsg message. Does not implicitly {@link rpc.OutgoingMsg.verify|verify} messages.
         * @param message OutgoingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IOutgoingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutgoingMsg message, length delimited. Does not implicitly {@link rpc.OutgoingMsg.verify|verify} messages.
         * @param message OutgoingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IOutgoingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutgoingMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutgoingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.OutgoingMsg;

        /**
         * Decodes an OutgoingMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutgoingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.OutgoingMsg;

        /**
         * Verifies an OutgoingMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutgoingMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutgoingMsg
         */
        public static fromObject(object: { [k: string]: any }): rpc.OutgoingMsg;

        /**
         * Creates a plain object from an OutgoingMsg message. Also converts values to other types if specified.
         * @param message OutgoingMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.OutgoingMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutgoingMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutgoingMsg
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

/** Namespace fs. */
export namespace fs {

    /** Properties of a FS. */
    interface IFS {

        /** FS type */
        type?: (string|null);

        /** FS isVersioned */
        isVersioned?: (boolean|null);

        /** FS writable */
        writable?: (boolean|null);

        /** FS name */
        name?: (string|null);

        /** FS impl */
        impl?: (common.IObjectReference|null);

        /** FS isSynced */
        isSynced?: (boolean|null);
    }

    /** Represents a FS. */
    class FS implements IFS {

        /**
         * Constructs a new FS.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFS);

        /** FS type. */
        public type: string;

        /** FS isVersioned. */
        public isVersioned: boolean;

        /** FS writable. */
        public writable: boolean;

        /** FS name. */
        public name: string;

        /** FS impl. */
        public impl?: (common.IObjectReference|null);

        /** FS isSynced. */
        public isSynced: boolean;

        /**
         * Creates a new FS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FS instance
         */
        public static create(properties?: fs.IFS): fs.FS;

        /**
         * Encodes the specified FS message. Does not implicitly {@link fs.FS.verify|verify} messages.
         * @param message FS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FS message, length delimited. Does not implicitly {@link fs.FS.verify|verify} messages.
         * @param message FS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FS;

        /**
         * Decodes a FS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FS;

        /**
         * Verifies a FS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FS
         */
        public static fromObject(object: { [k: string]: any }): fs.FS;

        /**
         * Creates a plain object from a FS message. Also converts values to other types if specified.
         * @param message FS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CheckPresenceRequestBody. */
    interface ICheckPresenceRequestBody {

        /** CheckPresenceRequestBody path */
        path?: (string|null);

        /** CheckPresenceRequestBody throwIfMissing */
        throwIfMissing?: (common.IBooleanValue|null);
    }

    /** Represents a CheckPresenceRequestBody. */
    class CheckPresenceRequestBody implements ICheckPresenceRequestBody {

        /**
         * Constructs a new CheckPresenceRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ICheckPresenceRequestBody);

        /** CheckPresenceRequestBody path. */
        public path: string;

        /** CheckPresenceRequestBody throwIfMissing. */
        public throwIfMissing?: (common.IBooleanValue|null);

        /**
         * Creates a new CheckPresenceRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckPresenceRequestBody instance
         */
        public static create(properties?: fs.ICheckPresenceRequestBody): fs.CheckPresenceRequestBody;

        /**
         * Encodes the specified CheckPresenceRequestBody message. Does not implicitly {@link fs.CheckPresenceRequestBody.verify|verify} messages.
         * @param message CheckPresenceRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ICheckPresenceRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckPresenceRequestBody message, length delimited. Does not implicitly {@link fs.CheckPresenceRequestBody.verify|verify} messages.
         * @param message CheckPresenceRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ICheckPresenceRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckPresenceRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckPresenceRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.CheckPresenceRequestBody;

        /**
         * Decodes a CheckPresenceRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckPresenceRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.CheckPresenceRequestBody;

        /**
         * Verifies a CheckPresenceRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckPresenceRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckPresenceRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.CheckPresenceRequestBody;

        /**
         * Creates a plain object from a CheckPresenceRequestBody message. Also converts values to other types if specified.
         * @param message CheckPresenceRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.CheckPresenceRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckPresenceRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CheckPresenceRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PathOnlyRequestBody. */
    interface IPathOnlyRequestBody {

        /** PathOnlyRequestBody path */
        path?: (string|null);
    }

    /** Represents a PathOnlyRequestBody. */
    class PathOnlyRequestBody implements IPathOnlyRequestBody {

        /**
         * Constructs a new PathOnlyRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IPathOnlyRequestBody);

        /** PathOnlyRequestBody path. */
        public path: string;

        /**
         * Creates a new PathOnlyRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PathOnlyRequestBody instance
         */
        public static create(properties?: fs.IPathOnlyRequestBody): fs.PathOnlyRequestBody;

        /**
         * Encodes the specified PathOnlyRequestBody message. Does not implicitly {@link fs.PathOnlyRequestBody.verify|verify} messages.
         * @param message PathOnlyRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IPathOnlyRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PathOnlyRequestBody message, length delimited. Does not implicitly {@link fs.PathOnlyRequestBody.verify|verify} messages.
         * @param message PathOnlyRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IPathOnlyRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PathOnlyRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PathOnlyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.PathOnlyRequestBody;

        /**
         * Decodes a PathOnlyRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PathOnlyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.PathOnlyRequestBody;

        /**
         * Verifies a PathOnlyRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PathOnlyRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PathOnlyRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.PathOnlyRequestBody;

        /**
         * Creates a plain object from a PathOnlyRequestBody message. Also converts values to other types if specified.
         * @param message PathOnlyRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.PathOnlyRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PathOnlyRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PathOnlyRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetXAttrRequestBody. */
    interface IGetXAttrRequestBody {

        /** GetXAttrRequestBody path */
        path?: (string|null);

        /** GetXAttrRequestBody xaName */
        xaName?: (string|null);
    }

    /** Represents a GetXAttrRequestBody. */
    class GetXAttrRequestBody implements IGetXAttrRequestBody {

        /**
         * Constructs a new GetXAttrRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IGetXAttrRequestBody);

        /** GetXAttrRequestBody path. */
        public path: string;

        /** GetXAttrRequestBody xaName. */
        public xaName: string;

        /**
         * Creates a new GetXAttrRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetXAttrRequestBody instance
         */
        public static create(properties?: fs.IGetXAttrRequestBody): fs.GetXAttrRequestBody;

        /**
         * Encodes the specified GetXAttrRequestBody message. Does not implicitly {@link fs.GetXAttrRequestBody.verify|verify} messages.
         * @param message GetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetXAttrRequestBody message, length delimited. Does not implicitly {@link fs.GetXAttrRequestBody.verify|verify} messages.
         * @param message GetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetXAttrRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.GetXAttrRequestBody;

        /**
         * Decodes a GetXAttrRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.GetXAttrRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.GetXAttrRequestBody;

        /**
         * Creates a plain object from a GetXAttrRequestBody message. Also converts values to other types if specified.
         * @param message GetXAttrRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.GetXAttrRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a SymLink. */
    interface ISymLink {

        /** SymLink readonly */
        readonly?: (boolean|null);

        /** SymLink isFile */
        isFile?: (common.IBooleanValue|null);

        /** SymLink isFolder */
        isFolder?: (common.IBooleanValue|null);

        /** SymLink impl */
        impl?: (common.IObjectReference|null);
    }

    /** Represents a SymLink. */
    class SymLink implements ISymLink {

        /**
         * Constructs a new SymLink.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ISymLink);

        /** SymLink readonly. */
        public readonly: boolean;

        /** SymLink isFile. */
        public isFile?: (common.IBooleanValue|null);

        /** SymLink isFolder. */
        public isFolder?: (common.IBooleanValue|null);

        /** SymLink impl. */
        public impl?: (common.IObjectReference|null);

        /**
         * Creates a new SymLink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymLink instance
         */
        public static create(properties?: fs.ISymLink): fs.SymLink;

        /**
         * Encodes the specified SymLink message. Does not implicitly {@link fs.SymLink.verify|verify} messages.
         * @param message SymLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ISymLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymLink message, length delimited. Does not implicitly {@link fs.SymLink.verify|verify} messages.
         * @param message SymLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ISymLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymLink message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.SymLink;

        /**
         * Decodes a SymLink message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.SymLink;

        /**
         * Verifies a SymLink message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymLink message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymLink
         */
        public static fromObject(object: { [k: string]: any }): fs.SymLink;

        /**
         * Creates a plain object from a SymLink message. Also converts values to other types if specified.
         * @param message SymLink
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.SymLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymLink to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SymLink
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SymLinkTargetReplyBody. */
    interface ISymLinkTargetReplyBody {

        /** SymLinkTargetReplyBody fs */
        fs?: (fs.IFS|null);

        /** SymLinkTargetReplyBody file */
        file?: (file.IFile|null);
    }

    /** Represents a SymLinkTargetReplyBody. */
    class SymLinkTargetReplyBody implements ISymLinkTargetReplyBody {

        /**
         * Constructs a new SymLinkTargetReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ISymLinkTargetReplyBody);

        /** SymLinkTargetReplyBody fs. */
        public fs?: (fs.IFS|null);

        /** SymLinkTargetReplyBody file. */
        public file?: (file.IFile|null);

        /**
         * Creates a new SymLinkTargetReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymLinkTargetReplyBody instance
         */
        public static create(properties?: fs.ISymLinkTargetReplyBody): fs.SymLinkTargetReplyBody;

        /**
         * Encodes the specified SymLinkTargetReplyBody message. Does not implicitly {@link fs.SymLinkTargetReplyBody.verify|verify} messages.
         * @param message SymLinkTargetReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ISymLinkTargetReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymLinkTargetReplyBody message, length delimited. Does not implicitly {@link fs.SymLinkTargetReplyBody.verify|verify} messages.
         * @param message SymLinkTargetReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ISymLinkTargetReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymLinkTargetReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymLinkTargetReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.SymLinkTargetReplyBody;

        /**
         * Decodes a SymLinkTargetReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymLinkTargetReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.SymLinkTargetReplyBody;

        /**
         * Verifies a SymLinkTargetReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymLinkTargetReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymLinkTargetReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.SymLinkTargetReplyBody;

        /**
         * Creates a plain object from a SymLinkTargetReplyBody message. Also converts values to other types if specified.
         * @param message SymLinkTargetReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.SymLinkTargetReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymLinkTargetReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SymLinkTargetReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WatchTreeRequestBody. */
    interface IWatchTreeRequestBody {

        /** WatchTreeRequestBody path */
        path?: (string|null);

        /** WatchTreeRequestBody depth */
        depth?: (common.IUInt32Value|null);
    }

    /** Represents a WatchTreeRequestBody. */
    class WatchTreeRequestBody implements IWatchTreeRequestBody {

        /**
         * Constructs a new WatchTreeRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IWatchTreeRequestBody);

        /** WatchTreeRequestBody path. */
        public path: string;

        /** WatchTreeRequestBody depth. */
        public depth?: (common.IUInt32Value|null);

        /**
         * Creates a new WatchTreeRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WatchTreeRequestBody instance
         */
        public static create(properties?: fs.IWatchTreeRequestBody): fs.WatchTreeRequestBody;

        /**
         * Encodes the specified WatchTreeRequestBody message. Does not implicitly {@link fs.WatchTreeRequestBody.verify|verify} messages.
         * @param message WatchTreeRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IWatchTreeRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WatchTreeRequestBody message, length delimited. Does not implicitly {@link fs.WatchTreeRequestBody.verify|verify} messages.
         * @param message WatchTreeRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IWatchTreeRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WatchTreeRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WatchTreeRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.WatchTreeRequestBody;

        /**
         * Decodes a WatchTreeRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WatchTreeRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.WatchTreeRequestBody;

        /**
         * Verifies a WatchTreeRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WatchTreeRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WatchTreeRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.WatchTreeRequestBody;

        /**
         * Creates a plain object from a WatchTreeRequestBody message. Also converts values to other types if specified.
         * @param message WatchTreeRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.WatchTreeRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WatchTreeRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WatchTreeRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListFolderReplyBody. */
    interface IListFolderReplyBody {

        /** ListFolderReplyBody entries */
        entries?: (fs.IListingEntryMsg[]|null);
    }

    /** Represents a ListFolderReplyBody. */
    class ListFolderReplyBody implements IListFolderReplyBody {

        /**
         * Constructs a new ListFolderReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IListFolderReplyBody);

        /** ListFolderReplyBody entries. */
        public entries: fs.IListingEntryMsg[];

        /**
         * Creates a new ListFolderReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListFolderReplyBody instance
         */
        public static create(properties?: fs.IListFolderReplyBody): fs.ListFolderReplyBody;

        /**
         * Encodes the specified ListFolderReplyBody message. Does not implicitly {@link fs.ListFolderReplyBody.verify|verify} messages.
         * @param message ListFolderReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IListFolderReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListFolderReplyBody message, length delimited. Does not implicitly {@link fs.ListFolderReplyBody.verify|verify} messages.
         * @param message ListFolderReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IListFolderReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListFolderReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListFolderReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.ListFolderReplyBody;

        /**
         * Decodes a ListFolderReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListFolderReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.ListFolderReplyBody;

        /**
         * Verifies a ListFolderReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListFolderReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListFolderReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.ListFolderReplyBody;

        /**
         * Creates a plain object from a ListFolderReplyBody message. Also converts values to other types if specified.
         * @param message ListFolderReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.ListFolderReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListFolderReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListFolderReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListingEntryMsg. */
    interface IListingEntryMsg {

        /** ListingEntryMsg name */
        name?: (string|null);

        /** ListingEntryMsg isFile */
        isFile?: (common.IBooleanValue|null);

        /** ListingEntryMsg isFolder */
        isFolder?: (common.IBooleanValue|null);

        /** ListingEntryMsg isLink */
        isLink?: (common.IBooleanValue|null);
    }

    /** Represents a ListingEntryMsg. */
    class ListingEntryMsg implements IListingEntryMsg {

        /**
         * Constructs a new ListingEntryMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IListingEntryMsg);

        /** ListingEntryMsg name. */
        public name: string;

        /** ListingEntryMsg isFile. */
        public isFile?: (common.IBooleanValue|null);

        /** ListingEntryMsg isFolder. */
        public isFolder?: (common.IBooleanValue|null);

        /** ListingEntryMsg isLink. */
        public isLink?: (common.IBooleanValue|null);

        /**
         * Creates a new ListingEntryMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListingEntryMsg instance
         */
        public static create(properties?: fs.IListingEntryMsg): fs.ListingEntryMsg;

        /**
         * Encodes the specified ListingEntryMsg message. Does not implicitly {@link fs.ListingEntryMsg.verify|verify} messages.
         * @param message ListingEntryMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IListingEntryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListingEntryMsg message, length delimited. Does not implicitly {@link fs.ListingEntryMsg.verify|verify} messages.
         * @param message ListingEntryMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IListingEntryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListingEntryMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListingEntryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.ListingEntryMsg;

        /**
         * Decodes a ListingEntryMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListingEntryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.ListingEntryMsg;

        /**
         * Verifies a ListingEntryMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListingEntryMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListingEntryMsg
         */
        public static fromObject(object: { [k: string]: any }): fs.ListingEntryMsg;

        /**
         * Creates a plain object from a ListingEntryMsg message. Also converts values to other types if specified.
         * @param message ListingEntryMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.ListingEntryMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListingEntryMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListingEntryMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadBytesRequestBody. */
    interface IReadBytesRequestBody {

        /** ReadBytesRequestBody path */
        path?: (string|null);

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
        constructor(properties?: fs.IReadBytesRequestBody);

        /** ReadBytesRequestBody path. */
        public path: string;

        /** ReadBytesRequestBody start. */
        public start?: (common.IUInt64Value|null);

        /** ReadBytesRequestBody end. */
        public end?: (common.IUInt64Value|null);

        /**
         * Creates a new ReadBytesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadBytesRequestBody instance
         */
        public static create(properties?: fs.IReadBytesRequestBody): fs.ReadBytesRequestBody;

        /**
         * Encodes the specified ReadBytesRequestBody message. Does not implicitly {@link fs.ReadBytesRequestBody.verify|verify} messages.
         * @param message ReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadBytesRequestBody message, length delimited. Does not implicitly {@link fs.ReadBytesRequestBody.verify|verify} messages.
         * @param message ReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.ReadBytesRequestBody;

        /**
         * Decodes a ReadBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.ReadBytesRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.ReadBytesRequestBody;

        /**
         * Creates a plain object from a ReadBytesRequestBody message. Also converts values to other types if specified.
         * @param message ReadBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.ReadBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a SelectRequestBody. */
    interface ISelectRequestBody {

        /** SelectRequestBody path */
        path?: (string|null);

        /** SelectRequestBody criteria */
        criteria?: (fs.SelectRequestBody.ISelectCriteria|null);
    }

    /** Represents a SelectRequestBody. */
    class SelectRequestBody implements ISelectRequestBody {

        /**
         * Constructs a new SelectRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ISelectRequestBody);

        /** SelectRequestBody path. */
        public path: string;

        /** SelectRequestBody criteria. */
        public criteria?: (fs.SelectRequestBody.ISelectCriteria|null);

        /**
         * Creates a new SelectRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectRequestBody instance
         */
        public static create(properties?: fs.ISelectRequestBody): fs.SelectRequestBody;

        /**
         * Encodes the specified SelectRequestBody message. Does not implicitly {@link fs.SelectRequestBody.verify|verify} messages.
         * @param message SelectRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ISelectRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SelectRequestBody message, length delimited. Does not implicitly {@link fs.SelectRequestBody.verify|verify} messages.
         * @param message SelectRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ISelectRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelectRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.SelectRequestBody;

        /**
         * Decodes a SelectRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelectRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.SelectRequestBody;

        /**
         * Verifies a SelectRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelectRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelectRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.SelectRequestBody;

        /**
         * Creates a plain object from a SelectRequestBody message. Also converts values to other types if specified.
         * @param message SelectRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.SelectRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelectRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SelectRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SelectRequestBody {

        /** Properties of a SelectCriteria. */
        interface ISelectCriteria {

            /** SelectCriteria exactName */
            exactName?: (common.IStringValue|null);

            /** SelectCriteria pattern */
            pattern?: (common.IStringValue|null);

            /** SelectCriteria regexp */
            regexp?: (common.IStringValue|null);

            /** SelectCriteria depth */
            depth?: (common.IUInt32Value|null);

            /** SelectCriteria type */
            type?: (string[]|null);

            /** SelectCriteria action */
            action?: (string|null);
        }

        /** Represents a SelectCriteria. */
        class SelectCriteria implements ISelectCriteria {

            /**
             * Constructs a new SelectCriteria.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.SelectRequestBody.ISelectCriteria);

            /** SelectCriteria exactName. */
            public exactName?: (common.IStringValue|null);

            /** SelectCriteria pattern. */
            public pattern?: (common.IStringValue|null);

            /** SelectCriteria regexp. */
            public regexp?: (common.IStringValue|null);

            /** SelectCriteria depth. */
            public depth?: (common.IUInt32Value|null);

            /** SelectCriteria type. */
            public type: string[];

            /** SelectCriteria action. */
            public action: string;

            /**
             * Creates a new SelectCriteria instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectCriteria instance
             */
            public static create(properties?: fs.SelectRequestBody.ISelectCriteria): fs.SelectRequestBody.SelectCriteria;

            /**
             * Encodes the specified SelectCriteria message. Does not implicitly {@link fs.SelectRequestBody.SelectCriteria.verify|verify} messages.
             * @param message SelectCriteria message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.SelectRequestBody.ISelectCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectCriteria message, length delimited. Does not implicitly {@link fs.SelectRequestBody.SelectCriteria.verify|verify} messages.
             * @param message SelectCriteria message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.SelectRequestBody.ISelectCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectCriteria message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectCriteria
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.SelectRequestBody.SelectCriteria;

            /**
             * Decodes a SelectCriteria message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectCriteria
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.SelectRequestBody.SelectCriteria;

            /**
             * Verifies a SelectCriteria message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectCriteria message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectCriteria
             */
            public static fromObject(object: { [k: string]: any }): fs.SelectRequestBody.SelectCriteria;

            /**
             * Creates a plain object from a SelectCriteria message. Also converts values to other types if specified.
             * @param message SelectCriteria
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.SelectRequestBody.SelectCriteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectCriteria to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectCriteria
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FSCGetRequestBody. */
    interface IFSCGetRequestBody {

        /** FSCGetRequestBody name */
        name?: (string|null);
    }

    /** Represents a FSCGetRequestBody. */
    class FSCGetRequestBody implements IFSCGetRequestBody {

        /**
         * Constructs a new FSCGetRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSCGetRequestBody);

        /** FSCGetRequestBody name. */
        public name: string;

        /**
         * Creates a new FSCGetRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSCGetRequestBody instance
         */
        public static create(properties?: fs.IFSCGetRequestBody): fs.FSCGetRequestBody;

        /**
         * Encodes the specified FSCGetRequestBody message. Does not implicitly {@link fs.FSCGetRequestBody.verify|verify} messages.
         * @param message FSCGetRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSCGetRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSCGetRequestBody message, length delimited. Does not implicitly {@link fs.FSCGetRequestBody.verify|verify} messages.
         * @param message FSCGetRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSCGetRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSCGetRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSCGetRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSCGetRequestBody;

        /**
         * Decodes a FSCGetRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSCGetRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSCGetRequestBody;

        /**
         * Verifies a FSCGetRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSCGetRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSCGetRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSCGetRequestBody;

        /**
         * Creates a plain object from a FSCGetRequestBody message. Also converts values to other types if specified.
         * @param message FSCGetRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSCGetRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSCGetRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSCGetRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSCGetReplyBody. */
    interface IFSCGetReplyBody {

        /** FSCGetReplyBody item */
        item?: (fs.IFSItem|null);
    }

    /** Represents a FSCGetReplyBody. */
    class FSCGetReplyBody implements IFSCGetReplyBody {

        /**
         * Constructs a new FSCGetReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSCGetReplyBody);

        /** FSCGetReplyBody item. */
        public item?: (fs.IFSItem|null);

        /**
         * Creates a new FSCGetReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSCGetReplyBody instance
         */
        public static create(properties?: fs.IFSCGetReplyBody): fs.FSCGetReplyBody;

        /**
         * Encodes the specified FSCGetReplyBody message. Does not implicitly {@link fs.FSCGetReplyBody.verify|verify} messages.
         * @param message FSCGetReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSCGetReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSCGetReplyBody message, length delimited. Does not implicitly {@link fs.FSCGetReplyBody.verify|verify} messages.
         * @param message FSCGetReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSCGetReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSCGetReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSCGetReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSCGetReplyBody;

        /**
         * Decodes a FSCGetReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSCGetReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSCGetReplyBody;

        /**
         * Verifies a FSCGetReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSCGetReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSCGetReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSCGetReplyBody;

        /**
         * Creates a plain object from a FSCGetReplyBody message. Also converts values to other types if specified.
         * @param message FSCGetReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSCGetReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSCGetReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSCGetReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSItem. */
    interface IFSItem {

        /** FSItem isFile */
        isFile?: (common.IBooleanValue|null);

        /** FSItem isFolder */
        isFolder?: (common.IBooleanValue|null);

        /** FSItem isLink */
        isLink?: (common.IBooleanValue|null);

        /** FSItem isCollection */
        isCollection?: (common.IBooleanValue|null);

        /** FSItem item */
        item?: (fs.FSItem.IItem|null);

        /** FSItem location */
        location?: (fs.FSItem.ILocation|null);
    }

    /** Represents a FSItem. */
    class FSItem implements IFSItem {

        /**
         * Constructs a new FSItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSItem);

        /** FSItem isFile. */
        public isFile?: (common.IBooleanValue|null);

        /** FSItem isFolder. */
        public isFolder?: (common.IBooleanValue|null);

        /** FSItem isLink. */
        public isLink?: (common.IBooleanValue|null);

        /** FSItem isCollection. */
        public isCollection?: (common.IBooleanValue|null);

        /** FSItem item. */
        public item?: (fs.FSItem.IItem|null);

        /** FSItem location. */
        public location?: (fs.FSItem.ILocation|null);

        /**
         * Creates a new FSItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSItem instance
         */
        public static create(properties?: fs.IFSItem): fs.FSItem;

        /**
         * Encodes the specified FSItem message. Does not implicitly {@link fs.FSItem.verify|verify} messages.
         * @param message FSItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSItem message, length delimited. Does not implicitly {@link fs.FSItem.verify|verify} messages.
         * @param message FSItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSItem;

        /**
         * Decodes a FSItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSItem;

        /**
         * Verifies a FSItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSItem
         */
        public static fromObject(object: { [k: string]: any }): fs.FSItem;

        /**
         * Creates a plain object from a FSItem message. Also converts values to other types if specified.
         * @param message FSItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FSItem {

        /** Properties of a Location. */
        interface ILocation {

            /** Location fs */
            fs?: (fs.IFS|null);

            /** Location path */
            path?: (string|null);

            /** Location storageUse */
            storageUse?: (string|null);

            /** Location storageType */
            storageType?: (string|null);
        }

        /** Represents a Location. */
        class Location implements ILocation {

            /**
             * Constructs a new Location.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.FSItem.ILocation);

            /** Location fs. */
            public fs?: (fs.IFS|null);

            /** Location path. */
            public path: string;

            /** Location storageUse. */
            public storageUse: string;

            /** Location storageType. */
            public storageType: string;

            /**
             * Creates a new Location instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Location instance
             */
            public static create(properties?: fs.FSItem.ILocation): fs.FSItem.Location;

            /**
             * Encodes the specified Location message. Does not implicitly {@link fs.FSItem.Location.verify|verify} messages.
             * @param message Location message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.FSItem.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Location message, length delimited. Does not implicitly {@link fs.FSItem.Location.verify|verify} messages.
             * @param message Location message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.FSItem.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Location message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSItem.Location;

            /**
             * Decodes a Location message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSItem.Location;

            /**
             * Verifies a Location message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Location message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Location
             */
            public static fromObject(object: { [k: string]: any }): fs.FSItem.Location;

            /**
             * Creates a plain object from a Location message. Also converts values to other types if specified.
             * @param message Location
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.FSItem.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Location to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Location
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Item. */
        interface IItem {

            /** Item fs */
            fs?: (fs.IFS|null);

            /** Item file */
            file?: (file.IFile|null);

            /** Item collection */
            collection?: (common.IObjectReference|null);
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.FSItem.IItem);

            /** Item fs. */
            public fs?: (fs.IFS|null);

            /** Item file. */
            public file?: (file.IFile|null);

            /** Item collection. */
            public collection?: (common.IObjectReference|null);

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: fs.FSItem.IItem): fs.FSItem.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link fs.FSItem.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.FSItem.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link fs.FSItem.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.FSItem.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSItem.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSItem.Item;

            /**
             * Verifies an Item message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): fs.FSItem.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.FSItem.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Item
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FSCGetAllReplyBody. */
    interface IFSCGetAllReplyBody {

        /** FSCGetAllReplyBody items */
        items?: (fs.INameAndItem[]|null);
    }

    /** Represents a FSCGetAllReplyBody. */
    class FSCGetAllReplyBody implements IFSCGetAllReplyBody {

        /**
         * Constructs a new FSCGetAllReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSCGetAllReplyBody);

        /** FSCGetAllReplyBody items. */
        public items: fs.INameAndItem[];

        /**
         * Creates a new FSCGetAllReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSCGetAllReplyBody instance
         */
        public static create(properties?: fs.IFSCGetAllReplyBody): fs.FSCGetAllReplyBody;

        /**
         * Encodes the specified FSCGetAllReplyBody message. Does not implicitly {@link fs.FSCGetAllReplyBody.verify|verify} messages.
         * @param message FSCGetAllReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSCGetAllReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSCGetAllReplyBody message, length delimited. Does not implicitly {@link fs.FSCGetAllReplyBody.verify|verify} messages.
         * @param message FSCGetAllReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSCGetAllReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSCGetAllReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSCGetAllReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSCGetAllReplyBody;

        /**
         * Decodes a FSCGetAllReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSCGetAllReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSCGetAllReplyBody;

        /**
         * Verifies a FSCGetAllReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSCGetAllReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSCGetAllReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSCGetAllReplyBody;

        /**
         * Creates a plain object from a FSCGetAllReplyBody message. Also converts values to other types if specified.
         * @param message FSCGetAllReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSCGetAllReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSCGetAllReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSCGetAllReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NameAndItem. */
    interface INameAndItem {

        /** NameAndItem name */
        name?: (string|null);

        /** NameAndItem item */
        item?: (fs.IFSItem|null);
    }

    /** Represents a NameAndItem. */
    class NameAndItem implements INameAndItem {

        /**
         * Constructs a new NameAndItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.INameAndItem);

        /** NameAndItem name. */
        public name: string;

        /** NameAndItem item. */
        public item?: (fs.IFSItem|null);

        /**
         * Creates a new NameAndItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NameAndItem instance
         */
        public static create(properties?: fs.INameAndItem): fs.NameAndItem;

        /**
         * Encodes the specified NameAndItem message. Does not implicitly {@link fs.NameAndItem.verify|verify} messages.
         * @param message NameAndItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.INameAndItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NameAndItem message, length delimited. Does not implicitly {@link fs.NameAndItem.verify|verify} messages.
         * @param message NameAndItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.INameAndItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NameAndItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NameAndItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.NameAndItem;

        /**
         * Decodes a NameAndItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NameAndItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.NameAndItem;

        /**
         * Verifies a NameAndItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NameAndItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NameAndItem
         */
        public static fromObject(object: { [k: string]: any }): fs.NameAndItem;

        /**
         * Creates a plain object from a NameAndItem message. Also converts values to other types if specified.
         * @param message NameAndItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.NameAndItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NameAndItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NameAndItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IterResMsg. */
    interface IIterResMsg {

        /** IterResMsg done */
        done?: (common.IBooleanValue|null);

        /** IterResMsg value */
        value?: (fs.INameAndItem|null);
    }

    /** Represents an IterResMsg. */
    class IterResMsg implements IIterResMsg {

        /**
         * Constructs a new IterResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IIterResMsg);

        /** IterResMsg done. */
        public done?: (common.IBooleanValue|null);

        /** IterResMsg value. */
        public value?: (fs.INameAndItem|null);

        /**
         * Creates a new IterResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IterResMsg instance
         */
        public static create(properties?: fs.IIterResMsg): fs.IterResMsg;

        /**
         * Encodes the specified IterResMsg message. Does not implicitly {@link fs.IterResMsg.verify|verify} messages.
         * @param message IterResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IIterResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IterResMsg message, length delimited. Does not implicitly {@link fs.IterResMsg.verify|verify} messages.
         * @param message IterResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IIterResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IterResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IterResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.IterResMsg;

        /**
         * Decodes an IterResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IterResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.IterResMsg;

        /**
         * Verifies an IterResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IterResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IterResMsg
         */
        public static fromObject(object: { [k: string]: any }): fs.IterResMsg;

        /**
         * Creates a plain object from an IterResMsg message. Also converts values to other types if specified.
         * @param message IterResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.IterResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IterResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IterResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CollectionEvent. */
    interface ICollectionEvent {

        /** CollectionEvent type */
        type?: (string|null);

        /** CollectionEvent path */
        path?: (common.IStringValue|null);

        /** CollectionEvent item */
        item?: (fs.IFSItem|null);
    }

    /** Represents a CollectionEvent. */
    class CollectionEvent implements ICollectionEvent {

        /**
         * Constructs a new CollectionEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ICollectionEvent);

        /** CollectionEvent type. */
        public type: string;

        /** CollectionEvent path. */
        public path?: (common.IStringValue|null);

        /** CollectionEvent item. */
        public item?: (fs.IFSItem|null);

        /**
         * Creates a new CollectionEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CollectionEvent instance
         */
        public static create(properties?: fs.ICollectionEvent): fs.CollectionEvent;

        /**
         * Encodes the specified CollectionEvent message. Does not implicitly {@link fs.CollectionEvent.verify|verify} messages.
         * @param message CollectionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ICollectionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CollectionEvent message, length delimited. Does not implicitly {@link fs.CollectionEvent.verify|verify} messages.
         * @param message CollectionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ICollectionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CollectionEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CollectionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.CollectionEvent;

        /**
         * Decodes a CollectionEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CollectionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.CollectionEvent;

        /**
         * Verifies a CollectionEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CollectionEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CollectionEvent
         */
        public static fromObject(object: { [k: string]: any }): fs.CollectionEvent;

        /**
         * Creates a plain object from a CollectionEvent message. Also converts values to other types if specified.
         * @param message CollectionEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.CollectionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CollectionEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CollectionEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetXAttrRequestBody. */
    interface IVersionedGetXAttrRequestBody {

        /** VersionedGetXAttrRequestBody path */
        path?: (string|null);

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
        constructor(properties?: fs.IVersionedGetXAttrRequestBody);

        /** VersionedGetXAttrRequestBody path. */
        public path: string;

        /** VersionedGetXAttrRequestBody xaName. */
        public xaName: string;

        /** VersionedGetXAttrRequestBody flags. */
        public flags?: (file.IVersionedReadFlags|null);

        /**
         * Creates a new VersionedGetXAttrRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetXAttrRequestBody instance
         */
        public static create(properties?: fs.IVersionedGetXAttrRequestBody): fs.VersionedGetXAttrRequestBody;

        /**
         * Encodes the specified VersionedGetXAttrRequestBody message. Does not implicitly {@link fs.VersionedGetXAttrRequestBody.verify|verify} messages.
         * @param message VersionedGetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetXAttrRequestBody message, length delimited. Does not implicitly {@link fs.VersionedGetXAttrRequestBody.verify|verify} messages.
         * @param message VersionedGetXAttrRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedGetXAttrRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetXAttrRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedGetXAttrRequestBody;

        /**
         * Decodes a VersionedGetXAttrRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedGetXAttrRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.VersionedGetXAttrRequestBody;

        /**
         * Creates a plain object from a VersionedGetXAttrRequestBody message. Also converts values to other types if specified.
         * @param message VersionedGetXAttrRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedGetXAttrRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a PathAndFlagsRequestBody. */
    interface IPathAndFlagsRequestBody {

        /** PathAndFlagsRequestBody path */
        path?: (string|null);

        /** PathAndFlagsRequestBody flags */
        flags?: (file.IVersionedReadFlags|null);
    }

    /** Represents a PathAndFlagsRequestBody. */
    class PathAndFlagsRequestBody implements IPathAndFlagsRequestBody {

        /**
         * Constructs a new PathAndFlagsRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IPathAndFlagsRequestBody);

        /** PathAndFlagsRequestBody path. */
        public path: string;

        /** PathAndFlagsRequestBody flags. */
        public flags?: (file.IVersionedReadFlags|null);

        /**
         * Creates a new PathAndFlagsRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PathAndFlagsRequestBody instance
         */
        public static create(properties?: fs.IPathAndFlagsRequestBody): fs.PathAndFlagsRequestBody;

        /**
         * Encodes the specified PathAndFlagsRequestBody message. Does not implicitly {@link fs.PathAndFlagsRequestBody.verify|verify} messages.
         * @param message PathAndFlagsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IPathAndFlagsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PathAndFlagsRequestBody message, length delimited. Does not implicitly {@link fs.PathAndFlagsRequestBody.verify|verify} messages.
         * @param message PathAndFlagsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IPathAndFlagsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PathAndFlagsRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PathAndFlagsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.PathAndFlagsRequestBody;

        /**
         * Decodes a PathAndFlagsRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PathAndFlagsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.PathAndFlagsRequestBody;

        /**
         * Verifies a PathAndFlagsRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PathAndFlagsRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PathAndFlagsRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.PathAndFlagsRequestBody;

        /**
         * Creates a plain object from a PathAndFlagsRequestBody message. Also converts values to other types if specified.
         * @param message PathAndFlagsRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.PathAndFlagsRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PathAndFlagsRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PathAndFlagsRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedListFolderReplyBody. */
    interface IVersionedListFolderReplyBody {

        /** VersionedListFolderReplyBody version */
        version?: (number|Long|null);

        /** VersionedListFolderReplyBody entries */
        entries?: (fs.IListingEntryMsg[]|null);
    }

    /** Represents a VersionedListFolderReplyBody. */
    class VersionedListFolderReplyBody implements IVersionedListFolderReplyBody {

        /**
         * Constructs a new VersionedListFolderReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IVersionedListFolderReplyBody);

        /** VersionedListFolderReplyBody version. */
        public version: (number|Long);

        /** VersionedListFolderReplyBody entries. */
        public entries: fs.IListingEntryMsg[];

        /**
         * Creates a new VersionedListFolderReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedListFolderReplyBody instance
         */
        public static create(properties?: fs.IVersionedListFolderReplyBody): fs.VersionedListFolderReplyBody;

        /**
         * Encodes the specified VersionedListFolderReplyBody message. Does not implicitly {@link fs.VersionedListFolderReplyBody.verify|verify} messages.
         * @param message VersionedListFolderReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedListFolderReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedListFolderReplyBody message, length delimited. Does not implicitly {@link fs.VersionedListFolderReplyBody.verify|verify} messages.
         * @param message VersionedListFolderReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedListFolderReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedListFolderReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedListFolderReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedListFolderReplyBody;

        /**
         * Decodes a VersionedListFolderReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedListFolderReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedListFolderReplyBody;

        /**
         * Verifies a VersionedListFolderReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedListFolderReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedListFolderReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.VersionedListFolderReplyBody;

        /**
         * Creates a plain object from a VersionedListFolderReplyBody message. Also converts values to other types if specified.
         * @param message VersionedListFolderReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedListFolderReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedListFolderReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedListFolderReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedReadBytesRequestBody. */
    interface IVersionedReadBytesRequestBody {

        /** VersionedReadBytesRequestBody path */
        path?: (string|null);

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
        constructor(properties?: fs.IVersionedReadBytesRequestBody);

        /** VersionedReadBytesRequestBody path. */
        public path: string;

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
        public static create(properties?: fs.IVersionedReadBytesRequestBody): fs.VersionedReadBytesRequestBody;

        /**
         * Encodes the specified VersionedReadBytesRequestBody message. Does not implicitly {@link fs.VersionedReadBytesRequestBody.verify|verify} messages.
         * @param message VersionedReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedReadBytesRequestBody message, length delimited. Does not implicitly {@link fs.VersionedReadBytesRequestBody.verify|verify} messages.
         * @param message VersionedReadBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedReadBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedReadBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedReadBytesRequestBody;

        /**
         * Decodes a VersionedReadBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedReadBytesRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.VersionedReadBytesRequestBody;

        /**
         * Creates a plain object from a VersionedReadBytesRequestBody message. Also converts values to other types if specified.
         * @param message VersionedReadBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedReadBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of an UpdateXAttrsRequestBody. */
    interface IUpdateXAttrsRequestBody {

        /** UpdateXAttrsRequestBody path */
        path?: (string|null);

        /** UpdateXAttrsRequestBody changes */
        changes?: (file.IXAttrsChanges|null);
    }

    /** Represents an UpdateXAttrsRequestBody. */
    class UpdateXAttrsRequestBody implements IUpdateXAttrsRequestBody {

        /**
         * Constructs a new UpdateXAttrsRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IUpdateXAttrsRequestBody);

        /** UpdateXAttrsRequestBody path. */
        public path: string;

        /** UpdateXAttrsRequestBody changes. */
        public changes?: (file.IXAttrsChanges|null);

        /**
         * Creates a new UpdateXAttrsRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateXAttrsRequestBody instance
         */
        public static create(properties?: fs.IUpdateXAttrsRequestBody): fs.UpdateXAttrsRequestBody;

        /**
         * Encodes the specified UpdateXAttrsRequestBody message. Does not implicitly {@link fs.UpdateXAttrsRequestBody.verify|verify} messages.
         * @param message UpdateXAttrsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IUpdateXAttrsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateXAttrsRequestBody message, length delimited. Does not implicitly {@link fs.UpdateXAttrsRequestBody.verify|verify} messages.
         * @param message UpdateXAttrsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IUpdateXAttrsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateXAttrsRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateXAttrsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.UpdateXAttrsRequestBody;

        /**
         * Decodes an UpdateXAttrsRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateXAttrsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.UpdateXAttrsRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.UpdateXAttrsRequestBody;

        /**
         * Creates a plain object from an UpdateXAttrsRequestBody message. Also converts values to other types if specified.
         * @param message UpdateXAttrsRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.UpdateXAttrsRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a MakeFolderRequestBody. */
    interface IMakeFolderRequestBody {

        /** MakeFolderRequestBody path */
        path?: (string|null);

        /** MakeFolderRequestBody exclusive */
        exclusive?: (common.IBooleanValue|null);
    }

    /** Represents a MakeFolderRequestBody. */
    class MakeFolderRequestBody implements IMakeFolderRequestBody {

        /**
         * Constructs a new MakeFolderRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IMakeFolderRequestBody);

        /** MakeFolderRequestBody path. */
        public path: string;

        /** MakeFolderRequestBody exclusive. */
        public exclusive?: (common.IBooleanValue|null);

        /**
         * Creates a new MakeFolderRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MakeFolderRequestBody instance
         */
        public static create(properties?: fs.IMakeFolderRequestBody): fs.MakeFolderRequestBody;

        /**
         * Encodes the specified MakeFolderRequestBody message. Does not implicitly {@link fs.MakeFolderRequestBody.verify|verify} messages.
         * @param message MakeFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IMakeFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MakeFolderRequestBody message, length delimited. Does not implicitly {@link fs.MakeFolderRequestBody.verify|verify} messages.
         * @param message MakeFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IMakeFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MakeFolderRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MakeFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.MakeFolderRequestBody;

        /**
         * Decodes a MakeFolderRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MakeFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.MakeFolderRequestBody;

        /**
         * Verifies a MakeFolderRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MakeFolderRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MakeFolderRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.MakeFolderRequestBody;

        /**
         * Creates a plain object from a MakeFolderRequestBody message. Also converts values to other types if specified.
         * @param message MakeFolderRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.MakeFolderRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MakeFolderRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MakeFolderRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteFolderRequestBody. */
    interface IDeleteFolderRequestBody {

        /** DeleteFolderRequestBody path */
        path?: (string|null);

        /** DeleteFolderRequestBody removeContent */
        removeContent?: (common.IBooleanValue|null);
    }

    /** Represents a DeleteFolderRequestBody. */
    class DeleteFolderRequestBody implements IDeleteFolderRequestBody {

        /**
         * Constructs a new DeleteFolderRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IDeleteFolderRequestBody);

        /** DeleteFolderRequestBody path. */
        public path: string;

        /** DeleteFolderRequestBody removeContent. */
        public removeContent?: (common.IBooleanValue|null);

        /**
         * Creates a new DeleteFolderRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteFolderRequestBody instance
         */
        public static create(properties?: fs.IDeleteFolderRequestBody): fs.DeleteFolderRequestBody;

        /**
         * Encodes the specified DeleteFolderRequestBody message. Does not implicitly {@link fs.DeleteFolderRequestBody.verify|verify} messages.
         * @param message DeleteFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IDeleteFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteFolderRequestBody message, length delimited. Does not implicitly {@link fs.DeleteFolderRequestBody.verify|verify} messages.
         * @param message DeleteFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IDeleteFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteFolderRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.DeleteFolderRequestBody;

        /**
         * Decodes a DeleteFolderRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.DeleteFolderRequestBody;

        /**
         * Verifies a DeleteFolderRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteFolderRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteFolderRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.DeleteFolderRequestBody;

        /**
         * Creates a plain object from a DeleteFolderRequestBody message. Also converts values to other types if specified.
         * @param message DeleteFolderRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.DeleteFolderRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteFolderRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteFolderRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MoveRequestBody. */
    interface IMoveRequestBody {

        /** MoveRequestBody src */
        src?: (string|null);

        /** MoveRequestBody dst */
        dst?: (string|null);
    }

    /** Represents a MoveRequestBody. */
    class MoveRequestBody implements IMoveRequestBody {

        /**
         * Constructs a new MoveRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IMoveRequestBody);

        /** MoveRequestBody src. */
        public src: string;

        /** MoveRequestBody dst. */
        public dst: string;

        /**
         * Creates a new MoveRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveRequestBody instance
         */
        public static create(properties?: fs.IMoveRequestBody): fs.MoveRequestBody;

        /**
         * Encodes the specified MoveRequestBody message. Does not implicitly {@link fs.MoveRequestBody.verify|verify} messages.
         * @param message MoveRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IMoveRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoveRequestBody message, length delimited. Does not implicitly {@link fs.MoveRequestBody.verify|verify} messages.
         * @param message MoveRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IMoveRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.MoveRequestBody;

        /**
         * Decodes a MoveRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.MoveRequestBody;

        /**
         * Verifies a MoveRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoveRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.MoveRequestBody;

        /**
         * Creates a plain object from a MoveRequestBody message. Also converts values to other types if specified.
         * @param message MoveRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.MoveRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoveRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MoveRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CopyFileRequestBody. */
    interface ICopyFileRequestBody {

        /** CopyFileRequestBody src */
        src?: (string|null);

        /** CopyFileRequestBody dst */
        dst?: (string|null);

        /** CopyFileRequestBody overwrite */
        overwrite?: (common.IBooleanValue|null);
    }

    /** Represents a CopyFileRequestBody. */
    class CopyFileRequestBody implements ICopyFileRequestBody {

        /**
         * Constructs a new CopyFileRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ICopyFileRequestBody);

        /** CopyFileRequestBody src. */
        public src: string;

        /** CopyFileRequestBody dst. */
        public dst: string;

        /** CopyFileRequestBody overwrite. */
        public overwrite?: (common.IBooleanValue|null);

        /**
         * Creates a new CopyFileRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CopyFileRequestBody instance
         */
        public static create(properties?: fs.ICopyFileRequestBody): fs.CopyFileRequestBody;

        /**
         * Encodes the specified CopyFileRequestBody message. Does not implicitly {@link fs.CopyFileRequestBody.verify|verify} messages.
         * @param message CopyFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ICopyFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CopyFileRequestBody message, length delimited. Does not implicitly {@link fs.CopyFileRequestBody.verify|verify} messages.
         * @param message CopyFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ICopyFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CopyFileRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.CopyFileRequestBody;

        /**
         * Decodes a CopyFileRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CopyFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.CopyFileRequestBody;

        /**
         * Verifies a CopyFileRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CopyFileRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyFileRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.CopyFileRequestBody;

        /**
         * Creates a plain object from a CopyFileRequestBody message. Also converts values to other types if specified.
         * @param message CopyFileRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.CopyFileRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyFileRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CopyFileRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CopyFolderRequestBody. */
    interface ICopyFolderRequestBody {

        /** CopyFolderRequestBody src */
        src?: (string|null);

        /** CopyFolderRequestBody dst */
        dst?: (string|null);

        /** CopyFolderRequestBody mergeAndOverwrite */
        mergeAndOverwrite?: (common.IBooleanValue|null);
    }

    /** Represents a CopyFolderRequestBody. */
    class CopyFolderRequestBody implements ICopyFolderRequestBody {

        /**
         * Constructs a new CopyFolderRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ICopyFolderRequestBody);

        /** CopyFolderRequestBody src. */
        public src: string;

        /** CopyFolderRequestBody dst. */
        public dst: string;

        /** CopyFolderRequestBody mergeAndOverwrite. */
        public mergeAndOverwrite?: (common.IBooleanValue|null);

        /**
         * Creates a new CopyFolderRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CopyFolderRequestBody instance
         */
        public static create(properties?: fs.ICopyFolderRequestBody): fs.CopyFolderRequestBody;

        /**
         * Encodes the specified CopyFolderRequestBody message. Does not implicitly {@link fs.CopyFolderRequestBody.verify|verify} messages.
         * @param message CopyFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ICopyFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CopyFolderRequestBody message, length delimited. Does not implicitly {@link fs.CopyFolderRequestBody.verify|verify} messages.
         * @param message CopyFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ICopyFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CopyFolderRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.CopyFolderRequestBody;

        /**
         * Decodes a CopyFolderRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CopyFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.CopyFolderRequestBody;

        /**
         * Verifies a CopyFolderRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CopyFolderRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CopyFolderRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.CopyFolderRequestBody;

        /**
         * Creates a plain object from a CopyFolderRequestBody message. Also converts values to other types if specified.
         * @param message CopyFolderRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.CopyFolderRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CopyFolderRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CopyFolderRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveFileRequestBody. */
    interface ISaveFileRequestBody {

        /** SaveFileRequestBody file */
        file?: (common.IObjectReference|null);

        /** SaveFileRequestBody dst */
        dst?: (string|null);

        /** SaveFileRequestBody overwrite */
        overwrite?: (common.IBooleanValue|null);
    }

    /** Represents a SaveFileRequestBody. */
    class SaveFileRequestBody implements ISaveFileRequestBody {

        /**
         * Constructs a new SaveFileRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ISaveFileRequestBody);

        /** SaveFileRequestBody file. */
        public file?: (common.IObjectReference|null);

        /** SaveFileRequestBody dst. */
        public dst: string;

        /** SaveFileRequestBody overwrite. */
        public overwrite?: (common.IBooleanValue|null);

        /**
         * Creates a new SaveFileRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveFileRequestBody instance
         */
        public static create(properties?: fs.ISaveFileRequestBody): fs.SaveFileRequestBody;

        /**
         * Encodes the specified SaveFileRequestBody message. Does not implicitly {@link fs.SaveFileRequestBody.verify|verify} messages.
         * @param message SaveFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ISaveFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveFileRequestBody message, length delimited. Does not implicitly {@link fs.SaveFileRequestBody.verify|verify} messages.
         * @param message SaveFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ISaveFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveFileRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.SaveFileRequestBody;

        /**
         * Decodes a SaveFileRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.SaveFileRequestBody;

        /**
         * Verifies a SaveFileRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveFileRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveFileRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.SaveFileRequestBody;

        /**
         * Creates a plain object from a SaveFileRequestBody message. Also converts values to other types if specified.
         * @param message SaveFileRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.SaveFileRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveFileRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveFileRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveFolderRequestBody. */
    interface ISaveFolderRequestBody {

        /** SaveFolderRequestBody folder */
        folder?: (common.IObjectReference|null);

        /** SaveFolderRequestBody dst */
        dst?: (string|null);

        /** SaveFolderRequestBody mergeAndOverwrite */
        mergeAndOverwrite?: (common.IBooleanValue|null);
    }

    /** Represents a SaveFolderRequestBody. */
    class SaveFolderRequestBody implements ISaveFolderRequestBody {

        /**
         * Constructs a new SaveFolderRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ISaveFolderRequestBody);

        /** SaveFolderRequestBody folder. */
        public folder?: (common.IObjectReference|null);

        /** SaveFolderRequestBody dst. */
        public dst: string;

        /** SaveFolderRequestBody mergeAndOverwrite. */
        public mergeAndOverwrite?: (common.IBooleanValue|null);

        /**
         * Creates a new SaveFolderRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveFolderRequestBody instance
         */
        public static create(properties?: fs.ISaveFolderRequestBody): fs.SaveFolderRequestBody;

        /**
         * Encodes the specified SaveFolderRequestBody message. Does not implicitly {@link fs.SaveFolderRequestBody.verify|verify} messages.
         * @param message SaveFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ISaveFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveFolderRequestBody message, length delimited. Does not implicitly {@link fs.SaveFolderRequestBody.verify|verify} messages.
         * @param message SaveFolderRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ISaveFolderRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveFolderRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.SaveFolderRequestBody;

        /**
         * Decodes a SaveFolderRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveFolderRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.SaveFolderRequestBody;

        /**
         * Verifies a SaveFolderRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveFolderRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveFolderRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.SaveFolderRequestBody;

        /**
         * Creates a plain object from a SaveFolderRequestBody message. Also converts values to other types if specified.
         * @param message SaveFolderRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.SaveFolderRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveFolderRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveFolderRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LinkRequestBody. */
    interface ILinkRequestBody {

        /** LinkRequestBody path */
        path?: (string|null);

        /** LinkRequestBody target */
        target?: (common.IObjectReference|null);
    }

    /** Represents a LinkRequestBody. */
    class LinkRequestBody implements ILinkRequestBody {

        /**
         * Constructs a new LinkRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.ILinkRequestBody);

        /** LinkRequestBody path. */
        public path: string;

        /** LinkRequestBody target. */
        public target?: (common.IObjectReference|null);

        /**
         * Creates a new LinkRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinkRequestBody instance
         */
        public static create(properties?: fs.ILinkRequestBody): fs.LinkRequestBody;

        /**
         * Encodes the specified LinkRequestBody message. Does not implicitly {@link fs.LinkRequestBody.verify|verify} messages.
         * @param message LinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.ILinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkRequestBody message, length delimited. Does not implicitly {@link fs.LinkRequestBody.verify|verify} messages.
         * @param message LinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.ILinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.LinkRequestBody;

        /**
         * Decodes a LinkRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.LinkRequestBody;

        /**
         * Verifies a LinkRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinkRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinkRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.LinkRequestBody;

        /**
         * Creates a plain object from a LinkRequestBody message. Also converts values to other types if specified.
         * @param message LinkRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.LinkRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinkRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LinkRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PathAndOptFileFlags. */
    interface IPathAndOptFileFlags {

        /** PathAndOptFileFlags path */
        path?: (string|null);

        /** PathAndOptFileFlags flags */
        flags?: (fs.IFileFlags|null);
    }

    /** Represents a PathAndOptFileFlags. */
    class PathAndOptFileFlags implements IPathAndOptFileFlags {

        /**
         * Constructs a new PathAndOptFileFlags.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IPathAndOptFileFlags);

        /** PathAndOptFileFlags path. */
        public path: string;

        /** PathAndOptFileFlags flags. */
        public flags?: (fs.IFileFlags|null);

        /**
         * Creates a new PathAndOptFileFlags instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PathAndOptFileFlags instance
         */
        public static create(properties?: fs.IPathAndOptFileFlags): fs.PathAndOptFileFlags;

        /**
         * Encodes the specified PathAndOptFileFlags message. Does not implicitly {@link fs.PathAndOptFileFlags.verify|verify} messages.
         * @param message PathAndOptFileFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IPathAndOptFileFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PathAndOptFileFlags message, length delimited. Does not implicitly {@link fs.PathAndOptFileFlags.verify|verify} messages.
         * @param message PathAndOptFileFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IPathAndOptFileFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PathAndOptFileFlags message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PathAndOptFileFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.PathAndOptFileFlags;

        /**
         * Decodes a PathAndOptFileFlags message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PathAndOptFileFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.PathAndOptFileFlags;

        /**
         * Verifies a PathAndOptFileFlags message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PathAndOptFileFlags message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PathAndOptFileFlags
         */
        public static fromObject(object: { [k: string]: any }): fs.PathAndOptFileFlags;

        /**
         * Creates a plain object from a PathAndOptFileFlags message. Also converts values to other types if specified.
         * @param message PathAndOptFileFlags
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.PathAndOptFileFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PathAndOptFileFlags to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PathAndOptFileFlags
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileFlags. */
    interface IFileFlags {

        /** FileFlags truncate */
        truncate?: (common.IBooleanValue|null);

        /** FileFlags create */
        create?: (common.IBooleanValue|null);

        /** FileFlags exclusive */
        exclusive?: (common.IBooleanValue|null);
    }

    /** Represents a FileFlags. */
    class FileFlags implements IFileFlags {

        /**
         * Constructs a new FileFlags.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFileFlags);

        /** FileFlags truncate. */
        public truncate?: (common.IBooleanValue|null);

        /** FileFlags create. */
        public create?: (common.IBooleanValue|null);

        /** FileFlags exclusive. */
        public exclusive?: (common.IBooleanValue|null);

        /**
         * Creates a new FileFlags instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileFlags instance
         */
        public static create(properties?: fs.IFileFlags): fs.FileFlags;

        /**
         * Encodes the specified FileFlags message. Does not implicitly {@link fs.FileFlags.verify|verify} messages.
         * @param message FileFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFileFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileFlags message, length delimited. Does not implicitly {@link fs.FileFlags.verify|verify} messages.
         * @param message FileFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFileFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileFlags message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FileFlags;

        /**
         * Decodes a FileFlags message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FileFlags;

        /**
         * Verifies a FileFlags message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileFlags message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileFlags
         */
        public static fromObject(object: { [k: string]: any }): fs.FileFlags;

        /**
         * Creates a plain object from a FileFlags message. Also converts values to other types if specified.
         * @param message FileFlags
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FileFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileFlags to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileFlags
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteJsonFileRequestBody. */
    interface IWriteJsonFileRequestBody {

        /** WriteJsonFileRequestBody path */
        path?: (string|null);

        /** WriteJsonFileRequestBody json */
        json?: (string|null);

        /** WriteJsonFileRequestBody flags */
        flags?: (fs.IFileFlags|null);
    }

    /** Represents a WriteJsonFileRequestBody. */
    class WriteJsonFileRequestBody implements IWriteJsonFileRequestBody {

        /**
         * Constructs a new WriteJsonFileRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IWriteJsonFileRequestBody);

        /** WriteJsonFileRequestBody path. */
        public path: string;

        /** WriteJsonFileRequestBody json. */
        public json: string;

        /** WriteJsonFileRequestBody flags. */
        public flags?: (fs.IFileFlags|null);

        /**
         * Creates a new WriteJsonFileRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteJsonFileRequestBody instance
         */
        public static create(properties?: fs.IWriteJsonFileRequestBody): fs.WriteJsonFileRequestBody;

        /**
         * Encodes the specified WriteJsonFileRequestBody message. Does not implicitly {@link fs.WriteJsonFileRequestBody.verify|verify} messages.
         * @param message WriteJsonFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IWriteJsonFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteJsonFileRequestBody message, length delimited. Does not implicitly {@link fs.WriteJsonFileRequestBody.verify|verify} messages.
         * @param message WriteJsonFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IWriteJsonFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteJsonFileRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteJsonFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.WriteJsonFileRequestBody;

        /**
         * Decodes a WriteJsonFileRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteJsonFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.WriteJsonFileRequestBody;

        /**
         * Verifies a WriteJsonFileRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteJsonFileRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteJsonFileRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.WriteJsonFileRequestBody;

        /**
         * Creates a plain object from a WriteJsonFileRequestBody message. Also converts values to other types if specified.
         * @param message WriteJsonFileRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.WriteJsonFileRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteJsonFileRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WriteJsonFileRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteTxtFileRequestBody. */
    interface IWriteTxtFileRequestBody {

        /** WriteTxtFileRequestBody path */
        path?: (string|null);

        /** WriteTxtFileRequestBody txt */
        txt?: (string|null);

        /** WriteTxtFileRequestBody flags */
        flags?: (fs.IFileFlags|null);
    }

    /** Represents a WriteTxtFileRequestBody. */
    class WriteTxtFileRequestBody implements IWriteTxtFileRequestBody {

        /**
         * Constructs a new WriteTxtFileRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IWriteTxtFileRequestBody);

        /** WriteTxtFileRequestBody path. */
        public path: string;

        /** WriteTxtFileRequestBody txt. */
        public txt: string;

        /** WriteTxtFileRequestBody flags. */
        public flags?: (fs.IFileFlags|null);

        /**
         * Creates a new WriteTxtFileRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteTxtFileRequestBody instance
         */
        public static create(properties?: fs.IWriteTxtFileRequestBody): fs.WriteTxtFileRequestBody;

        /**
         * Encodes the specified WriteTxtFileRequestBody message. Does not implicitly {@link fs.WriteTxtFileRequestBody.verify|verify} messages.
         * @param message WriteTxtFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IWriteTxtFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteTxtFileRequestBody message, length delimited. Does not implicitly {@link fs.WriteTxtFileRequestBody.verify|verify} messages.
         * @param message WriteTxtFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IWriteTxtFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteTxtFileRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteTxtFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.WriteTxtFileRequestBody;

        /**
         * Decodes a WriteTxtFileRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteTxtFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.WriteTxtFileRequestBody;

        /**
         * Verifies a WriteTxtFileRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteTxtFileRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteTxtFileRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.WriteTxtFileRequestBody;

        /**
         * Creates a plain object from a WriteTxtFileRequestBody message. Also converts values to other types if specified.
         * @param message WriteTxtFileRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.WriteTxtFileRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteTxtFileRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WriteTxtFileRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteBytesRequestBody. */
    interface IWriteBytesRequestBody {

        /** WriteBytesRequestBody path */
        path?: (string|null);

        /** WriteBytesRequestBody bytes */
        bytes?: (Uint8Array|null);

        /** WriteBytesRequestBody flags */
        flags?: (fs.IFileFlags|null);
    }

    /** Represents a WriteBytesRequestBody. */
    class WriteBytesRequestBody implements IWriteBytesRequestBody {

        /**
         * Constructs a new WriteBytesRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IWriteBytesRequestBody);

        /** WriteBytesRequestBody path. */
        public path: string;

        /** WriteBytesRequestBody bytes. */
        public bytes: Uint8Array;

        /** WriteBytesRequestBody flags. */
        public flags?: (fs.IFileFlags|null);

        /**
         * Creates a new WriteBytesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteBytesRequestBody instance
         */
        public static create(properties?: fs.IWriteBytesRequestBody): fs.WriteBytesRequestBody;

        /**
         * Encodes the specified WriteBytesRequestBody message. Does not implicitly {@link fs.WriteBytesRequestBody.verify|verify} messages.
         * @param message WriteBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IWriteBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteBytesRequestBody message, length delimited. Does not implicitly {@link fs.WriteBytesRequestBody.verify|verify} messages.
         * @param message WriteBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IWriteBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.WriteBytesRequestBody;

        /**
         * Decodes a WriteBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.WriteBytesRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.WriteBytesRequestBody;

        /**
         * Creates a plain object from a WriteBytesRequestBody message. Also converts values to other types if specified.
         * @param message WriteBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.WriteBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a VersionedWriteJsonFileRequestBody. */
    interface IVersionedWriteJsonFileRequestBody {

        /** VersionedWriteJsonFileRequestBody path */
        path?: (string|null);

        /** VersionedWriteJsonFileRequestBody json */
        json?: (string|null);

        /** VersionedWriteJsonFileRequestBody flags */
        flags?: (fs.IVersionedFileWriteFlags|null);
    }

    /** Represents a VersionedWriteJsonFileRequestBody. */
    class VersionedWriteJsonFileRequestBody implements IVersionedWriteJsonFileRequestBody {

        /**
         * Constructs a new VersionedWriteJsonFileRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IVersionedWriteJsonFileRequestBody);

        /** VersionedWriteJsonFileRequestBody path. */
        public path: string;

        /** VersionedWriteJsonFileRequestBody json. */
        public json: string;

        /** VersionedWriteJsonFileRequestBody flags. */
        public flags?: (fs.IVersionedFileWriteFlags|null);

        /**
         * Creates a new VersionedWriteJsonFileRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedWriteJsonFileRequestBody instance
         */
        public static create(properties?: fs.IVersionedWriteJsonFileRequestBody): fs.VersionedWriteJsonFileRequestBody;

        /**
         * Encodes the specified VersionedWriteJsonFileRequestBody message. Does not implicitly {@link fs.VersionedWriteJsonFileRequestBody.verify|verify} messages.
         * @param message VersionedWriteJsonFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedWriteJsonFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedWriteJsonFileRequestBody message, length delimited. Does not implicitly {@link fs.VersionedWriteJsonFileRequestBody.verify|verify} messages.
         * @param message VersionedWriteJsonFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedWriteJsonFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedWriteJsonFileRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedWriteJsonFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedWriteJsonFileRequestBody;

        /**
         * Decodes a VersionedWriteJsonFileRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedWriteJsonFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedWriteJsonFileRequestBody;

        /**
         * Verifies a VersionedWriteJsonFileRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedWriteJsonFileRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedWriteJsonFileRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.VersionedWriteJsonFileRequestBody;

        /**
         * Creates a plain object from a VersionedWriteJsonFileRequestBody message. Also converts values to other types if specified.
         * @param message VersionedWriteJsonFileRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedWriteJsonFileRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedWriteJsonFileRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedWriteJsonFileRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedFileWriteFlags. */
    interface IVersionedFileWriteFlags {

        /** VersionedFileWriteFlags truncate */
        truncate?: (common.IBooleanValue|null);

        /** VersionedFileWriteFlags create */
        create?: (common.IBooleanValue|null);

        /** VersionedFileWriteFlags exclusive */
        exclusive?: (common.IBooleanValue|null);

        /** VersionedFileWriteFlags currentVersion */
        currentVersion?: (common.IUInt64Value|null);
    }

    /** Represents a VersionedFileWriteFlags. */
    class VersionedFileWriteFlags implements IVersionedFileWriteFlags {

        /**
         * Constructs a new VersionedFileWriteFlags.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IVersionedFileWriteFlags);

        /** VersionedFileWriteFlags truncate. */
        public truncate?: (common.IBooleanValue|null);

        /** VersionedFileWriteFlags create. */
        public create?: (common.IBooleanValue|null);

        /** VersionedFileWriteFlags exclusive. */
        public exclusive?: (common.IBooleanValue|null);

        /** VersionedFileWriteFlags currentVersion. */
        public currentVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new VersionedFileWriteFlags instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedFileWriteFlags instance
         */
        public static create(properties?: fs.IVersionedFileWriteFlags): fs.VersionedFileWriteFlags;

        /**
         * Encodes the specified VersionedFileWriteFlags message. Does not implicitly {@link fs.VersionedFileWriteFlags.verify|verify} messages.
         * @param message VersionedFileWriteFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedFileWriteFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedFileWriteFlags message, length delimited. Does not implicitly {@link fs.VersionedFileWriteFlags.verify|verify} messages.
         * @param message VersionedFileWriteFlags message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedFileWriteFlags, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedFileWriteFlags message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedFileWriteFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedFileWriteFlags;

        /**
         * Decodes a VersionedFileWriteFlags message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedFileWriteFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedFileWriteFlags;

        /**
         * Verifies a VersionedFileWriteFlags message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedFileWriteFlags message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedFileWriteFlags
         */
        public static fromObject(object: { [k: string]: any }): fs.VersionedFileWriteFlags;

        /**
         * Creates a plain object from a VersionedFileWriteFlags message. Also converts values to other types if specified.
         * @param message VersionedFileWriteFlags
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedFileWriteFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedFileWriteFlags to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedFileWriteFlags
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedWriteTxtFileRequestBody. */
    interface IVersionedWriteTxtFileRequestBody {

        /** VersionedWriteTxtFileRequestBody path */
        path?: (string|null);

        /** VersionedWriteTxtFileRequestBody txt */
        txt?: (string|null);

        /** VersionedWriteTxtFileRequestBody flags */
        flags?: (fs.IVersionedFileWriteFlags|null);
    }

    /** Represents a VersionedWriteTxtFileRequestBody. */
    class VersionedWriteTxtFileRequestBody implements IVersionedWriteTxtFileRequestBody {

        /**
         * Constructs a new VersionedWriteTxtFileRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IVersionedWriteTxtFileRequestBody);

        /** VersionedWriteTxtFileRequestBody path. */
        public path: string;

        /** VersionedWriteTxtFileRequestBody txt. */
        public txt: string;

        /** VersionedWriteTxtFileRequestBody flags. */
        public flags?: (fs.IVersionedFileWriteFlags|null);

        /**
         * Creates a new VersionedWriteTxtFileRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedWriteTxtFileRequestBody instance
         */
        public static create(properties?: fs.IVersionedWriteTxtFileRequestBody): fs.VersionedWriteTxtFileRequestBody;

        /**
         * Encodes the specified VersionedWriteTxtFileRequestBody message. Does not implicitly {@link fs.VersionedWriteTxtFileRequestBody.verify|verify} messages.
         * @param message VersionedWriteTxtFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedWriteTxtFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedWriteTxtFileRequestBody message, length delimited. Does not implicitly {@link fs.VersionedWriteTxtFileRequestBody.verify|verify} messages.
         * @param message VersionedWriteTxtFileRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedWriteTxtFileRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedWriteTxtFileRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedWriteTxtFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedWriteTxtFileRequestBody;

        /**
         * Decodes a VersionedWriteTxtFileRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedWriteTxtFileRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedWriteTxtFileRequestBody;

        /**
         * Verifies a VersionedWriteTxtFileRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedWriteTxtFileRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedWriteTxtFileRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.VersionedWriteTxtFileRequestBody;

        /**
         * Creates a plain object from a VersionedWriteTxtFileRequestBody message. Also converts values to other types if specified.
         * @param message VersionedWriteTxtFileRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedWriteTxtFileRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedWriteTxtFileRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedWriteTxtFileRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedWriteBytesRequestBody. */
    interface IVersionedWriteBytesRequestBody {

        /** VersionedWriteBytesRequestBody path */
        path?: (string|null);

        /** VersionedWriteBytesRequestBody bytes */
        bytes?: (Uint8Array|null);

        /** VersionedWriteBytesRequestBody flags */
        flags?: (fs.IVersionedFileWriteFlags|null);
    }

    /** Represents a VersionedWriteBytesRequestBody. */
    class VersionedWriteBytesRequestBody implements IVersionedWriteBytesRequestBody {

        /**
         * Constructs a new VersionedWriteBytesRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IVersionedWriteBytesRequestBody);

        /** VersionedWriteBytesRequestBody path. */
        public path: string;

        /** VersionedWriteBytesRequestBody bytes. */
        public bytes: Uint8Array;

        /** VersionedWriteBytesRequestBody flags. */
        public flags?: (fs.IVersionedFileWriteFlags|null);

        /**
         * Creates a new VersionedWriteBytesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedWriteBytesRequestBody instance
         */
        public static create(properties?: fs.IVersionedWriteBytesRequestBody): fs.VersionedWriteBytesRequestBody;

        /**
         * Encodes the specified VersionedWriteBytesRequestBody message. Does not implicitly {@link fs.VersionedWriteBytesRequestBody.verify|verify} messages.
         * @param message VersionedWriteBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedWriteBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedWriteBytesRequestBody message, length delimited. Does not implicitly {@link fs.VersionedWriteBytesRequestBody.verify|verify} messages.
         * @param message VersionedWriteBytesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedWriteBytesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedWriteBytesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedWriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedWriteBytesRequestBody;

        /**
         * Decodes a VersionedWriteBytesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedWriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedWriteBytesRequestBody;

        /**
         * Verifies a VersionedWriteBytesRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedWriteBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedWriteBytesRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.VersionedWriteBytesRequestBody;

        /**
         * Creates a plain object from a VersionedWriteBytesRequestBody message. Also converts values to other types if specified.
         * @param message VersionedWriteBytesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedWriteBytesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedWriteBytesRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionedWriteBytesRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionedGetByteSinkRequestBody. */
    interface IVersionedGetByteSinkRequestBody {

        /** VersionedGetByteSinkRequestBody path */
        path?: (string|null);

        /** VersionedGetByteSinkRequestBody flags */
        flags?: (fs.IVersionedFileWriteFlags|null);
    }

    /** Represents a VersionedGetByteSinkRequestBody. */
    class VersionedGetByteSinkRequestBody implements IVersionedGetByteSinkRequestBody {

        /**
         * Constructs a new VersionedGetByteSinkRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IVersionedGetByteSinkRequestBody);

        /** VersionedGetByteSinkRequestBody path. */
        public path: string;

        /** VersionedGetByteSinkRequestBody flags. */
        public flags?: (fs.IVersionedFileWriteFlags|null);

        /**
         * Creates a new VersionedGetByteSinkRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedGetByteSinkRequestBody instance
         */
        public static create(properties?: fs.IVersionedGetByteSinkRequestBody): fs.VersionedGetByteSinkRequestBody;

        /**
         * Encodes the specified VersionedGetByteSinkRequestBody message. Does not implicitly {@link fs.VersionedGetByteSinkRequestBody.verify|verify} messages.
         * @param message VersionedGetByteSinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IVersionedGetByteSinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedGetByteSinkRequestBody message, length delimited. Does not implicitly {@link fs.VersionedGetByteSinkRequestBody.verify|verify} messages.
         * @param message VersionedGetByteSinkRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IVersionedGetByteSinkRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedGetByteSinkRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionedGetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.VersionedGetByteSinkRequestBody;

        /**
         * Decodes a VersionedGetByteSinkRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionedGetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.VersionedGetByteSinkRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.VersionedGetByteSinkRequestBody;

        /**
         * Creates a plain object from a VersionedGetByteSinkRequestBody message. Also converts values to other types if specified.
         * @param message VersionedGetByteSinkRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.VersionedGetByteSinkRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of an ArchiveCurrentRequestBody. */
    interface IArchiveCurrentRequestBody {

        /** ArchiveCurrentRequestBody path */
        path?: (string|null);

        /** ArchiveCurrentRequestBody version */
        version?: (common.IUInt64Value|null);
    }

    /** Represents an ArchiveCurrentRequestBody. */
    class ArchiveCurrentRequestBody implements IArchiveCurrentRequestBody {

        /**
         * Constructs a new ArchiveCurrentRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IArchiveCurrentRequestBody);

        /** ArchiveCurrentRequestBody path. */
        public path: string;

        /** ArchiveCurrentRequestBody version. */
        public version?: (common.IUInt64Value|null);

        /**
         * Creates a new ArchiveCurrentRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArchiveCurrentRequestBody instance
         */
        public static create(properties?: fs.IArchiveCurrentRequestBody): fs.ArchiveCurrentRequestBody;

        /**
         * Encodes the specified ArchiveCurrentRequestBody message. Does not implicitly {@link fs.ArchiveCurrentRequestBody.verify|verify} messages.
         * @param message ArchiveCurrentRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IArchiveCurrentRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArchiveCurrentRequestBody message, length delimited. Does not implicitly {@link fs.ArchiveCurrentRequestBody.verify|verify} messages.
         * @param message ArchiveCurrentRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IArchiveCurrentRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArchiveCurrentRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArchiveCurrentRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.ArchiveCurrentRequestBody;

        /**
         * Decodes an ArchiveCurrentRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArchiveCurrentRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.ArchiveCurrentRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.ArchiveCurrentRequestBody;

        /**
         * Creates a plain object from an ArchiveCurrentRequestBody message. Also converts values to other types if specified.
         * @param message ArchiveCurrentRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.ArchiveCurrentRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a FSSyncStatusRequestBody. */
    interface IFSSyncStatusRequestBody {

        /** FSSyncStatusRequestBody path */
        path?: (string|null);

        /** FSSyncStatusRequestBody skipServerCheck */
        skipServerCheck?: (boolean|null);
    }

    /** Represents a FSSyncStatusRequestBody. */
    class FSSyncStatusRequestBody implements IFSSyncStatusRequestBody {

        /**
         * Constructs a new FSSyncStatusRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSSyncStatusRequestBody);

        /** FSSyncStatusRequestBody path. */
        public path: string;

        /** FSSyncStatusRequestBody skipServerCheck. */
        public skipServerCheck: boolean;

        /**
         * Creates a new FSSyncStatusRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSSyncStatusRequestBody instance
         */
        public static create(properties?: fs.IFSSyncStatusRequestBody): fs.FSSyncStatusRequestBody;

        /**
         * Encodes the specified FSSyncStatusRequestBody message. Does not implicitly {@link fs.FSSyncStatusRequestBody.verify|verify} messages.
         * @param message FSSyncStatusRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSSyncStatusRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSSyncStatusRequestBody message, length delimited. Does not implicitly {@link fs.FSSyncStatusRequestBody.verify|verify} messages.
         * @param message FSSyncStatusRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSSyncStatusRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSSyncStatusRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSSyncStatusRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSSyncStatusRequestBody;

        /**
         * Decodes a FSSyncStatusRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSSyncStatusRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSSyncStatusRequestBody;

        /**
         * Verifies a FSSyncStatusRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSSyncStatusRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSSyncStatusRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSSyncStatusRequestBody;

        /**
         * Creates a plain object from a FSSyncStatusRequestBody message. Also converts values to other types if specified.
         * @param message FSSyncStatusRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSSyncStatusRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSSyncStatusRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSSyncStatusRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSSyncIsOnDiskRequestBody. */
    interface IFSSyncIsOnDiskRequestBody {

        /** FSSyncIsOnDiskRequestBody path */
        path?: (string|null);

        /** FSSyncIsOnDiskRequestBody version */
        version?: (number|Long|null);
    }

    /** Represents a FSSyncIsOnDiskRequestBody. */
    class FSSyncIsOnDiskRequestBody implements IFSSyncIsOnDiskRequestBody {

        /**
         * Constructs a new FSSyncIsOnDiskRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSSyncIsOnDiskRequestBody);

        /** FSSyncIsOnDiskRequestBody path. */
        public path: string;

        /** FSSyncIsOnDiskRequestBody version. */
        public version: (number|Long);

        /**
         * Creates a new FSSyncIsOnDiskRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSSyncIsOnDiskRequestBody instance
         */
        public static create(properties?: fs.IFSSyncIsOnDiskRequestBody): fs.FSSyncIsOnDiskRequestBody;

        /**
         * Encodes the specified FSSyncIsOnDiskRequestBody message. Does not implicitly {@link fs.FSSyncIsOnDiskRequestBody.verify|verify} messages.
         * @param message FSSyncIsOnDiskRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSSyncIsOnDiskRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSSyncIsOnDiskRequestBody message, length delimited. Does not implicitly {@link fs.FSSyncIsOnDiskRequestBody.verify|verify} messages.
         * @param message FSSyncIsOnDiskRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSSyncIsOnDiskRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSSyncIsOnDiskRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSSyncIsOnDiskRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSSyncIsOnDiskRequestBody;

        /**
         * Decodes a FSSyncIsOnDiskRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSSyncIsOnDiskRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSSyncIsOnDiskRequestBody;

        /**
         * Verifies a FSSyncIsOnDiskRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSSyncIsOnDiskRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSSyncIsOnDiskRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSSyncIsOnDiskRequestBody;

        /**
         * Creates a plain object from a FSSyncIsOnDiskRequestBody message. Also converts values to other types if specified.
         * @param message FSSyncIsOnDiskRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSSyncIsOnDiskRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSSyncIsOnDiskRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSSyncIsOnDiskRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSSyncIsOnDiskReplyBody. */
    interface IFSSyncIsOnDiskReplyBody {

        /** FSSyncIsOnDiskReplyBody status */
        status?: (string|null);
    }

    /** Represents a FSSyncIsOnDiskReplyBody. */
    class FSSyncIsOnDiskReplyBody implements IFSSyncIsOnDiskReplyBody {

        /**
         * Constructs a new FSSyncIsOnDiskReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSSyncIsOnDiskReplyBody);

        /** FSSyncIsOnDiskReplyBody status. */
        public status: string;

        /**
         * Creates a new FSSyncIsOnDiskReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSSyncIsOnDiskReplyBody instance
         */
        public static create(properties?: fs.IFSSyncIsOnDiskReplyBody): fs.FSSyncIsOnDiskReplyBody;

        /**
         * Encodes the specified FSSyncIsOnDiskReplyBody message. Does not implicitly {@link fs.FSSyncIsOnDiskReplyBody.verify|verify} messages.
         * @param message FSSyncIsOnDiskReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSSyncIsOnDiskReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSSyncIsOnDiskReplyBody message, length delimited. Does not implicitly {@link fs.FSSyncIsOnDiskReplyBody.verify|verify} messages.
         * @param message FSSyncIsOnDiskReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSSyncIsOnDiskReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSSyncIsOnDiskReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSSyncIsOnDiskReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSSyncIsOnDiskReplyBody;

        /**
         * Decodes a FSSyncIsOnDiskReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSSyncIsOnDiskReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSSyncIsOnDiskReplyBody;

        /**
         * Verifies a FSSyncIsOnDiskReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSSyncIsOnDiskReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSSyncIsOnDiskReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSSyncIsOnDiskReplyBody;

        /**
         * Creates a plain object from a FSSyncIsOnDiskReplyBody message. Also converts values to other types if specified.
         * @param message FSSyncIsOnDiskReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSSyncIsOnDiskReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSSyncIsOnDiskReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSSyncIsOnDiskReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSSyncStartDownloadRequestBody. */
    interface IFSSyncStartDownloadRequestBody {

        /** FSSyncStartDownloadRequestBody path */
        path?: (string|null);

        /** FSSyncStartDownloadRequestBody version */
        version?: (number|Long|null);
    }

    /** Represents a FSSyncStartDownloadRequestBody. */
    class FSSyncStartDownloadRequestBody implements IFSSyncStartDownloadRequestBody {

        /**
         * Constructs a new FSSyncStartDownloadRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSSyncStartDownloadRequestBody);

        /** FSSyncStartDownloadRequestBody path. */
        public path: string;

        /** FSSyncStartDownloadRequestBody version. */
        public version: (number|Long);

        /**
         * Creates a new FSSyncStartDownloadRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSSyncStartDownloadRequestBody instance
         */
        public static create(properties?: fs.IFSSyncStartDownloadRequestBody): fs.FSSyncStartDownloadRequestBody;

        /**
         * Encodes the specified FSSyncStartDownloadRequestBody message. Does not implicitly {@link fs.FSSyncStartDownloadRequestBody.verify|verify} messages.
         * @param message FSSyncStartDownloadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSSyncStartDownloadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSSyncStartDownloadRequestBody message, length delimited. Does not implicitly {@link fs.FSSyncStartDownloadRequestBody.verify|verify} messages.
         * @param message FSSyncStartDownloadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSSyncStartDownloadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSSyncStartDownloadRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSSyncStartDownloadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSSyncStartDownloadRequestBody;

        /**
         * Decodes a FSSyncStartDownloadRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSSyncStartDownloadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSSyncStartDownloadRequestBody;

        /**
         * Verifies a FSSyncStartDownloadRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSSyncStartDownloadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSSyncStartDownloadRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSSyncStartDownloadRequestBody;

        /**
         * Creates a plain object from a FSSyncStartDownloadRequestBody message. Also converts values to other types if specified.
         * @param message FSSyncStartDownloadRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSSyncStartDownloadRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSSyncStartDownloadRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSSyncStartDownloadRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AdoptRemoteRequestBody. */
    interface IAdoptRemoteRequestBody {

        /** AdoptRemoteRequestBody path */
        path?: (string|null);

        /** AdoptRemoteRequestBody opts */
        opts?: (file.IOptionsToAdopteRemote|null);
    }

    /** Represents an AdoptRemoteRequestBody. */
    class AdoptRemoteRequestBody implements IAdoptRemoteRequestBody {

        /**
         * Constructs a new AdoptRemoteRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IAdoptRemoteRequestBody);

        /** AdoptRemoteRequestBody path. */
        public path: string;

        /** AdoptRemoteRequestBody opts. */
        public opts?: (file.IOptionsToAdopteRemote|null);

        /**
         * Creates a new AdoptRemoteRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdoptRemoteRequestBody instance
         */
        public static create(properties?: fs.IAdoptRemoteRequestBody): fs.AdoptRemoteRequestBody;

        /**
         * Encodes the specified AdoptRemoteRequestBody message. Does not implicitly {@link fs.AdoptRemoteRequestBody.verify|verify} messages.
         * @param message AdoptRemoteRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IAdoptRemoteRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdoptRemoteRequestBody message, length delimited. Does not implicitly {@link fs.AdoptRemoteRequestBody.verify|verify} messages.
         * @param message AdoptRemoteRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IAdoptRemoteRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdoptRemoteRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdoptRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.AdoptRemoteRequestBody;

        /**
         * Decodes an AdoptRemoteRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdoptRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.AdoptRemoteRequestBody;

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
        public static fromObject(object: { [k: string]: any }): fs.AdoptRemoteRequestBody;

        /**
         * Creates a plain object from an AdoptRemoteRequestBody message. Also converts values to other types if specified.
         * @param message AdoptRemoteRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.AdoptRemoteRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a DiffCurrentAndRemoteFileVersionsRequestBody. */
    interface IDiffCurrentAndRemoteFileVersionsRequestBody {

        /** DiffCurrentAndRemoteFileVersionsRequestBody path */
        path?: (string|null);

        /** DiffCurrentAndRemoteFileVersionsRequestBody opts */
        opts?: (file.IOptionsToDiffFileVersions|null);
    }

    /** Represents a DiffCurrentAndRemoteFileVersionsRequestBody. */
    class DiffCurrentAndRemoteFileVersionsRequestBody implements IDiffCurrentAndRemoteFileVersionsRequestBody {

        /**
         * Constructs a new DiffCurrentAndRemoteFileVersionsRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IDiffCurrentAndRemoteFileVersionsRequestBody);

        /** DiffCurrentAndRemoteFileVersionsRequestBody path. */
        public path: string;

        /** DiffCurrentAndRemoteFileVersionsRequestBody opts. */
        public opts?: (file.IOptionsToDiffFileVersions|null);

        /**
         * Creates a new DiffCurrentAndRemoteFileVersionsRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiffCurrentAndRemoteFileVersionsRequestBody instance
         */
        public static create(properties?: fs.IDiffCurrentAndRemoteFileVersionsRequestBody): fs.DiffCurrentAndRemoteFileVersionsRequestBody;

        /**
         * Encodes the specified DiffCurrentAndRemoteFileVersionsRequestBody message. Does not implicitly {@link fs.DiffCurrentAndRemoteFileVersionsRequestBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteFileVersionsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IDiffCurrentAndRemoteFileVersionsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiffCurrentAndRemoteFileVersionsRequestBody message, length delimited. Does not implicitly {@link fs.DiffCurrentAndRemoteFileVersionsRequestBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteFileVersionsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IDiffCurrentAndRemoteFileVersionsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiffCurrentAndRemoteFileVersionsRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiffCurrentAndRemoteFileVersionsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.DiffCurrentAndRemoteFileVersionsRequestBody;

        /**
         * Decodes a DiffCurrentAndRemoteFileVersionsRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiffCurrentAndRemoteFileVersionsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.DiffCurrentAndRemoteFileVersionsRequestBody;

        /**
         * Verifies a DiffCurrentAndRemoteFileVersionsRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiffCurrentAndRemoteFileVersionsRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiffCurrentAndRemoteFileVersionsRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.DiffCurrentAndRemoteFileVersionsRequestBody;

        /**
         * Creates a plain object from a DiffCurrentAndRemoteFileVersionsRequestBody message. Also converts values to other types if specified.
         * @param message DiffCurrentAndRemoteFileVersionsRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.DiffCurrentAndRemoteFileVersionsRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiffCurrentAndRemoteFileVersionsRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiffCurrentAndRemoteFileVersionsRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiffCurrentAndRemoteFolderVersionsRequestBody. */
    interface IDiffCurrentAndRemoteFolderVersionsRequestBody {

        /** DiffCurrentAndRemoteFolderVersionsRequestBody path */
        path?: (string|null);

        /** DiffCurrentAndRemoteFolderVersionsRequestBody remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);
    }

    /** Represents a DiffCurrentAndRemoteFolderVersionsRequestBody. */
    class DiffCurrentAndRemoteFolderVersionsRequestBody implements IDiffCurrentAndRemoteFolderVersionsRequestBody {

        /**
         * Constructs a new DiffCurrentAndRemoteFolderVersionsRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IDiffCurrentAndRemoteFolderVersionsRequestBody);

        /** DiffCurrentAndRemoteFolderVersionsRequestBody path. */
        public path: string;

        /** DiffCurrentAndRemoteFolderVersionsRequestBody remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new DiffCurrentAndRemoteFolderVersionsRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiffCurrentAndRemoteFolderVersionsRequestBody instance
         */
        public static create(properties?: fs.IDiffCurrentAndRemoteFolderVersionsRequestBody): fs.DiffCurrentAndRemoteFolderVersionsRequestBody;

        /**
         * Encodes the specified DiffCurrentAndRemoteFolderVersionsRequestBody message. Does not implicitly {@link fs.DiffCurrentAndRemoteFolderVersionsRequestBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteFolderVersionsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IDiffCurrentAndRemoteFolderVersionsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiffCurrentAndRemoteFolderVersionsRequestBody message, length delimited. Does not implicitly {@link fs.DiffCurrentAndRemoteFolderVersionsRequestBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteFolderVersionsRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IDiffCurrentAndRemoteFolderVersionsRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiffCurrentAndRemoteFolderVersionsRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiffCurrentAndRemoteFolderVersionsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.DiffCurrentAndRemoteFolderVersionsRequestBody;

        /**
         * Decodes a DiffCurrentAndRemoteFolderVersionsRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiffCurrentAndRemoteFolderVersionsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.DiffCurrentAndRemoteFolderVersionsRequestBody;

        /**
         * Verifies a DiffCurrentAndRemoteFolderVersionsRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiffCurrentAndRemoteFolderVersionsRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiffCurrentAndRemoteFolderVersionsRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.DiffCurrentAndRemoteFolderVersionsRequestBody;

        /**
         * Creates a plain object from a DiffCurrentAndRemoteFolderVersionsRequestBody message. Also converts values to other types if specified.
         * @param message DiffCurrentAndRemoteFolderVersionsRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.DiffCurrentAndRemoteFolderVersionsRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiffCurrentAndRemoteFolderVersionsRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiffCurrentAndRemoteFolderVersionsRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiffCurrentAndRemoteReplyBody. */
    interface IDiffCurrentAndRemoteReplyBody {

        /** DiffCurrentAndRemoteReplyBody diff */
        diff?: (fs.IFolderDiff|null);
    }

    /** Represents a DiffCurrentAndRemoteReplyBody. */
    class DiffCurrentAndRemoteReplyBody implements IDiffCurrentAndRemoteReplyBody {

        /**
         * Constructs a new DiffCurrentAndRemoteReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IDiffCurrentAndRemoteReplyBody);

        /** DiffCurrentAndRemoteReplyBody diff. */
        public diff?: (fs.IFolderDiff|null);

        /**
         * Creates a new DiffCurrentAndRemoteReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiffCurrentAndRemoteReplyBody instance
         */
        public static create(properties?: fs.IDiffCurrentAndRemoteReplyBody): fs.DiffCurrentAndRemoteReplyBody;

        /**
         * Encodes the specified DiffCurrentAndRemoteReplyBody message. Does not implicitly {@link fs.DiffCurrentAndRemoteReplyBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IDiffCurrentAndRemoteReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiffCurrentAndRemoteReplyBody message, length delimited. Does not implicitly {@link fs.DiffCurrentAndRemoteReplyBody.verify|verify} messages.
         * @param message DiffCurrentAndRemoteReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IDiffCurrentAndRemoteReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiffCurrentAndRemoteReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiffCurrentAndRemoteReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.DiffCurrentAndRemoteReplyBody;

        /**
         * Decodes a DiffCurrentAndRemoteReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiffCurrentAndRemoteReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.DiffCurrentAndRemoteReplyBody;

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
        public static fromObject(object: { [k: string]: any }): fs.DiffCurrentAndRemoteReplyBody;

        /**
         * Creates a plain object from a DiffCurrentAndRemoteReplyBody message. Also converts values to other types if specified.
         * @param message DiffCurrentAndRemoteReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.DiffCurrentAndRemoteReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a FolderDiff. */
    interface IFolderDiff {

        /** FolderDiff currentVersion */
        currentVersion?: (number|Long|null);

        /** FolderDiff isCurrentLocal */
        isCurrentLocal?: (boolean|null);

        /** FolderDiff remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);

        /** FolderDiff syncedVersion */
        syncedVersion?: (common.IUInt64Value|null);

        /** FolderDiff isRemoteRemoved */
        isRemoteRemoved?: (boolean|null);

        /** FolderDiff ctime */
        ctime?: (file.ITimeStampsDiff|null);

        /** FolderDiff mtime */
        mtime?: (file.ITimeStampsDiff|null);

        /** FolderDiff xattrs */
        xattrs?: (file.IXAttrDiff[]|null);

        /** FolderDiff removed */
        removed?: (fs.FolderDiff.IItemsByBranches|null);

        /** FolderDiff renamed */
        renamed?: (fs.FolderDiff.IRenamed[]|null);

        /** FolderDiff added */
        added?: (fs.FolderDiff.IItemsByBranches|null);

        /** FolderDiff rekeyed */
        rekeyed?: (fs.FolderDiff.IRekeyed[]|null);

        /** FolderDiff nameOverlaps */
        nameOverlaps?: (string[]|null);
    }

    /** Represents a FolderDiff. */
    class FolderDiff implements IFolderDiff {

        /**
         * Constructs a new FolderDiff.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFolderDiff);

        /** FolderDiff currentVersion. */
        public currentVersion: (number|Long);

        /** FolderDiff isCurrentLocal. */
        public isCurrentLocal: boolean;

        /** FolderDiff remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /** FolderDiff syncedVersion. */
        public syncedVersion?: (common.IUInt64Value|null);

        /** FolderDiff isRemoteRemoved. */
        public isRemoteRemoved: boolean;

        /** FolderDiff ctime. */
        public ctime?: (file.ITimeStampsDiff|null);

        /** FolderDiff mtime. */
        public mtime?: (file.ITimeStampsDiff|null);

        /** FolderDiff xattrs. */
        public xattrs: file.IXAttrDiff[];

        /** FolderDiff removed. */
        public removed?: (fs.FolderDiff.IItemsByBranches|null);

        /** FolderDiff renamed. */
        public renamed: fs.FolderDiff.IRenamed[];

        /** FolderDiff added. */
        public added?: (fs.FolderDiff.IItemsByBranches|null);

        /** FolderDiff rekeyed. */
        public rekeyed: fs.FolderDiff.IRekeyed[];

        /** FolderDiff nameOverlaps. */
        public nameOverlaps: string[];

        /**
         * Creates a new FolderDiff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FolderDiff instance
         */
        public static create(properties?: fs.IFolderDiff): fs.FolderDiff;

        /**
         * Encodes the specified FolderDiff message. Does not implicitly {@link fs.FolderDiff.verify|verify} messages.
         * @param message FolderDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFolderDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FolderDiff message, length delimited. Does not implicitly {@link fs.FolderDiff.verify|verify} messages.
         * @param message FolderDiff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFolderDiff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FolderDiff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FolderDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FolderDiff;

        /**
         * Decodes a FolderDiff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FolderDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FolderDiff;

        /**
         * Verifies a FolderDiff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FolderDiff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FolderDiff
         */
        public static fromObject(object: { [k: string]: any }): fs.FolderDiff;

        /**
         * Creates a plain object from a FolderDiff message. Also converts values to other types if specified.
         * @param message FolderDiff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FolderDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FolderDiff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FolderDiff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FolderDiff {

        /** Properties of an ItemsByBranches. */
        interface IItemsByBranches {

            /** ItemsByBranches inLocal */
            inLocal?: (string[]|null);

            /** ItemsByBranches inRemote */
            inRemote?: (string[]|null);
        }

        /** Represents an ItemsByBranches. */
        class ItemsByBranches implements IItemsByBranches {

            /**
             * Constructs a new ItemsByBranches.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.FolderDiff.IItemsByBranches);

            /** ItemsByBranches inLocal. */
            public inLocal: string[];

            /** ItemsByBranches inRemote. */
            public inRemote: string[];

            /**
             * Creates a new ItemsByBranches instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ItemsByBranches instance
             */
            public static create(properties?: fs.FolderDiff.IItemsByBranches): fs.FolderDiff.ItemsByBranches;

            /**
             * Encodes the specified ItemsByBranches message. Does not implicitly {@link fs.FolderDiff.ItemsByBranches.verify|verify} messages.
             * @param message ItemsByBranches message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.FolderDiff.IItemsByBranches, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ItemsByBranches message, length delimited. Does not implicitly {@link fs.FolderDiff.ItemsByBranches.verify|verify} messages.
             * @param message ItemsByBranches message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.FolderDiff.IItemsByBranches, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ItemsByBranches message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemsByBranches
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FolderDiff.ItemsByBranches;

            /**
             * Decodes an ItemsByBranches message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ItemsByBranches
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FolderDiff.ItemsByBranches;

            /**
             * Verifies an ItemsByBranches message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ItemsByBranches message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ItemsByBranches
             */
            public static fromObject(object: { [k: string]: any }): fs.FolderDiff.ItemsByBranches;

            /**
             * Creates a plain object from an ItemsByBranches message. Also converts values to other types if specified.
             * @param message ItemsByBranches
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.FolderDiff.ItemsByBranches, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ItemsByBranches to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ItemsByBranches
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Renamed. */
        interface IRenamed {

            /** Renamed local */
            local?: (string|null);

            /** Renamed remote */
            remote?: (string|null);

            /** Renamed renamedIn */
            renamedIn?: (string|null);
        }

        /** Represents a Renamed. */
        class Renamed implements IRenamed {

            /**
             * Constructs a new Renamed.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.FolderDiff.IRenamed);

            /** Renamed local. */
            public local: string;

            /** Renamed remote. */
            public remote: string;

            /** Renamed renamedIn. */
            public renamedIn: string;

            /**
             * Creates a new Renamed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Renamed instance
             */
            public static create(properties?: fs.FolderDiff.IRenamed): fs.FolderDiff.Renamed;

            /**
             * Encodes the specified Renamed message. Does not implicitly {@link fs.FolderDiff.Renamed.verify|verify} messages.
             * @param message Renamed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.FolderDiff.IRenamed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Renamed message, length delimited. Does not implicitly {@link fs.FolderDiff.Renamed.verify|verify} messages.
             * @param message Renamed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.FolderDiff.IRenamed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Renamed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Renamed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FolderDiff.Renamed;

            /**
             * Decodes a Renamed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Renamed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FolderDiff.Renamed;

            /**
             * Verifies a Renamed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Renamed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Renamed
             */
            public static fromObject(object: { [k: string]: any }): fs.FolderDiff.Renamed;

            /**
             * Creates a plain object from a Renamed message. Also converts values to other types if specified.
             * @param message Renamed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.FolderDiff.Renamed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Renamed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Renamed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Rekeyed. */
        interface IRekeyed {

            /** Rekeyed local */
            local?: (string|null);

            /** Rekeyed remote */
            remote?: (string|null);

            /** Rekeyed rekeyedIn */
            rekeyedIn?: (string|null);
        }

        /** Represents a Rekeyed. */
        class Rekeyed implements IRekeyed {

            /**
             * Constructs a new Rekeyed.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.FolderDiff.IRekeyed);

            /** Rekeyed local. */
            public local: string;

            /** Rekeyed remote. */
            public remote: string;

            /** Rekeyed rekeyedIn. */
            public rekeyedIn: string;

            /**
             * Creates a new Rekeyed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Rekeyed instance
             */
            public static create(properties?: fs.FolderDiff.IRekeyed): fs.FolderDiff.Rekeyed;

            /**
             * Encodes the specified Rekeyed message. Does not implicitly {@link fs.FolderDiff.Rekeyed.verify|verify} messages.
             * @param message Rekeyed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.FolderDiff.IRekeyed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Rekeyed message, length delimited. Does not implicitly {@link fs.FolderDiff.Rekeyed.verify|verify} messages.
             * @param message Rekeyed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.FolderDiff.IRekeyed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Rekeyed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Rekeyed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FolderDiff.Rekeyed;

            /**
             * Decodes a Rekeyed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Rekeyed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FolderDiff.Rekeyed;

            /**
             * Verifies a Rekeyed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Rekeyed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Rekeyed
             */
            public static fromObject(object: { [k: string]: any }): fs.FolderDiff.Rekeyed;

            /**
             * Creates a plain object from a Rekeyed message. Also converts values to other types if specified.
             * @param message Rekeyed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.FolderDiff.Rekeyed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Rekeyed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Rekeyed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a RemoteChildRequestBody. */
    interface IRemoteChildRequestBody {

        /** RemoteChildRequestBody path */
        path?: (string|null);

        /** RemoteChildRequestBody remoteItemName */
        remoteItemName?: (string|null);

        /** RemoteChildRequestBody remoteVersion */
        remoteVersion?: (common.IUInt64Value|null);
    }

    /** Represents a RemoteChildRequestBody. */
    class RemoteChildRequestBody implements IRemoteChildRequestBody {

        /**
         * Constructs a new RemoteChildRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IRemoteChildRequestBody);

        /** RemoteChildRequestBody path. */
        public path: string;

        /** RemoteChildRequestBody remoteItemName. */
        public remoteItemName: string;

        /** RemoteChildRequestBody remoteVersion. */
        public remoteVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new RemoteChildRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoteChildRequestBody instance
         */
        public static create(properties?: fs.IRemoteChildRequestBody): fs.RemoteChildRequestBody;

        /**
         * Encodes the specified RemoteChildRequestBody message. Does not implicitly {@link fs.RemoteChildRequestBody.verify|verify} messages.
         * @param message RemoteChildRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IRemoteChildRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoteChildRequestBody message, length delimited. Does not implicitly {@link fs.RemoteChildRequestBody.verify|verify} messages.
         * @param message RemoteChildRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IRemoteChildRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoteChildRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoteChildRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.RemoteChildRequestBody;

        /**
         * Decodes a RemoteChildRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoteChildRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.RemoteChildRequestBody;

        /**
         * Verifies a RemoteChildRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoteChildRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoteChildRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.RemoteChildRequestBody;

        /**
         * Creates a plain object from a RemoteChildRequestBody message. Also converts values to other types if specified.
         * @param message RemoteChildRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.RemoteChildRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoteChildRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoteChildRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSSyncUploadRequestBody. */
    interface IFSSyncUploadRequestBody {

        /** FSSyncUploadRequestBody path */
        path?: (string|null);

        /** FSSyncUploadRequestBody opts */
        opts?: (file.IOptionsToUploadLocal|null);
    }

    /** Represents a FSSyncUploadRequestBody. */
    class FSSyncUploadRequestBody implements IFSSyncUploadRequestBody {

        /**
         * Constructs a new FSSyncUploadRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IFSSyncUploadRequestBody);

        /** FSSyncUploadRequestBody path. */
        public path: string;

        /** FSSyncUploadRequestBody opts. */
        public opts?: (file.IOptionsToUploadLocal|null);

        /**
         * Creates a new FSSyncUploadRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSSyncUploadRequestBody instance
         */
        public static create(properties?: fs.IFSSyncUploadRequestBody): fs.FSSyncUploadRequestBody;

        /**
         * Encodes the specified FSSyncUploadRequestBody message. Does not implicitly {@link fs.FSSyncUploadRequestBody.verify|verify} messages.
         * @param message FSSyncUploadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IFSSyncUploadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSSyncUploadRequestBody message, length delimited. Does not implicitly {@link fs.FSSyncUploadRequestBody.verify|verify} messages.
         * @param message FSSyncUploadRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IFSSyncUploadRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSSyncUploadRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSSyncUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.FSSyncUploadRequestBody;

        /**
         * Decodes a FSSyncUploadRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSSyncUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.FSSyncUploadRequestBody;

        /**
         * Verifies a FSSyncUploadRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSSyncUploadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSSyncUploadRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.FSSyncUploadRequestBody;

        /**
         * Creates a plain object from a FSSyncUploadRequestBody message. Also converts values to other types if specified.
         * @param message FSSyncUploadRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.FSSyncUploadRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSSyncUploadRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSSyncUploadRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AdoptRemoteFolderItemRequestBody. */
    interface IAdoptRemoteFolderItemRequestBody {

        /** AdoptRemoteFolderItemRequestBody path */
        path?: (string|null);

        /** AdoptRemoteFolderItemRequestBody itemName */
        itemName?: (string|null);

        /** AdoptRemoteFolderItemRequestBody opts */
        opts?: (fs.AdoptRemoteFolderItemRequestBody.IOptions|null);
    }

    /** Represents an AdoptRemoteFolderItemRequestBody. */
    class AdoptRemoteFolderItemRequestBody implements IAdoptRemoteFolderItemRequestBody {

        /**
         * Constructs a new AdoptRemoteFolderItemRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IAdoptRemoteFolderItemRequestBody);

        /** AdoptRemoteFolderItemRequestBody path. */
        public path: string;

        /** AdoptRemoteFolderItemRequestBody itemName. */
        public itemName: string;

        /** AdoptRemoteFolderItemRequestBody opts. */
        public opts?: (fs.AdoptRemoteFolderItemRequestBody.IOptions|null);

        /**
         * Creates a new AdoptRemoteFolderItemRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdoptRemoteFolderItemRequestBody instance
         */
        public static create(properties?: fs.IAdoptRemoteFolderItemRequestBody): fs.AdoptRemoteFolderItemRequestBody;

        /**
         * Encodes the specified AdoptRemoteFolderItemRequestBody message. Does not implicitly {@link fs.AdoptRemoteFolderItemRequestBody.verify|verify} messages.
         * @param message AdoptRemoteFolderItemRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IAdoptRemoteFolderItemRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdoptRemoteFolderItemRequestBody message, length delimited. Does not implicitly {@link fs.AdoptRemoteFolderItemRequestBody.verify|verify} messages.
         * @param message AdoptRemoteFolderItemRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IAdoptRemoteFolderItemRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdoptRemoteFolderItemRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdoptRemoteFolderItemRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.AdoptRemoteFolderItemRequestBody;

        /**
         * Decodes an AdoptRemoteFolderItemRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdoptRemoteFolderItemRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.AdoptRemoteFolderItemRequestBody;

        /**
         * Verifies an AdoptRemoteFolderItemRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdoptRemoteFolderItemRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdoptRemoteFolderItemRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.AdoptRemoteFolderItemRequestBody;

        /**
         * Creates a plain object from an AdoptRemoteFolderItemRequestBody message. Also converts values to other types if specified.
         * @param message AdoptRemoteFolderItemRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.AdoptRemoteFolderItemRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdoptRemoteFolderItemRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AdoptRemoteFolderItemRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AdoptRemoteFolderItemRequestBody {

        /** Properties of an Options. */
        interface IOptions {

            /** Options localVersion */
            localVersion?: (common.IUInt64Value|null);

            /** Options uploadVersion */
            uploadVersion?: (common.IUInt64Value|null);

            /** Options replaceLocalItem */
            replaceLocalItem?: (common.IBooleanValue|null);

            /** Options newItemName */
            newItemName?: (common.IStringValue|null);
        }

        /** Represents an Options. */
        class Options implements IOptions {

            /**
             * Constructs a new Options.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.AdoptRemoteFolderItemRequestBody.IOptions);

            /** Options localVersion. */
            public localVersion?: (common.IUInt64Value|null);

            /** Options uploadVersion. */
            public uploadVersion?: (common.IUInt64Value|null);

            /** Options replaceLocalItem. */
            public replaceLocalItem?: (common.IBooleanValue|null);

            /** Options newItemName. */
            public newItemName?: (common.IStringValue|null);

            /**
             * Creates a new Options instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Options instance
             */
            public static create(properties?: fs.AdoptRemoteFolderItemRequestBody.IOptions): fs.AdoptRemoteFolderItemRequestBody.Options;

            /**
             * Encodes the specified Options message. Does not implicitly {@link fs.AdoptRemoteFolderItemRequestBody.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.AdoptRemoteFolderItemRequestBody.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Options message, length delimited. Does not implicitly {@link fs.AdoptRemoteFolderItemRequestBody.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.AdoptRemoteFolderItemRequestBody.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Options message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.AdoptRemoteFolderItemRequestBody.Options;

            /**
             * Decodes an Options message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.AdoptRemoteFolderItemRequestBody.Options;

            /**
             * Verifies an Options message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Options message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Options
             */
            public static fromObject(object: { [k: string]: any }): fs.AdoptRemoteFolderItemRequestBody.Options;

            /**
             * Creates a plain object from an Options message. Also converts values to other types if specified.
             * @param message Options
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.AdoptRemoteFolderItemRequestBody.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Options to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Options
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AbsorbRemoteFolderChangesRequestBody. */
    interface IAbsorbRemoteFolderChangesRequestBody {

        /** AbsorbRemoteFolderChangesRequestBody path */
        path?: (string|null);

        /** AbsorbRemoteFolderChangesRequestBody opts */
        opts?: (fs.AbsorbRemoteFolderChangesRequestBody.IOptions|null);
    }

    /** Represents an AbsorbRemoteFolderChangesRequestBody. */
    class AbsorbRemoteFolderChangesRequestBody implements IAbsorbRemoteFolderChangesRequestBody {

        /**
         * Constructs a new AbsorbRemoteFolderChangesRequestBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IAbsorbRemoteFolderChangesRequestBody);

        /** AbsorbRemoteFolderChangesRequestBody path. */
        public path: string;

        /** AbsorbRemoteFolderChangesRequestBody opts. */
        public opts?: (fs.AbsorbRemoteFolderChangesRequestBody.IOptions|null);

        /**
         * Creates a new AbsorbRemoteFolderChangesRequestBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AbsorbRemoteFolderChangesRequestBody instance
         */
        public static create(properties?: fs.IAbsorbRemoteFolderChangesRequestBody): fs.AbsorbRemoteFolderChangesRequestBody;

        /**
         * Encodes the specified AbsorbRemoteFolderChangesRequestBody message. Does not implicitly {@link fs.AbsorbRemoteFolderChangesRequestBody.verify|verify} messages.
         * @param message AbsorbRemoteFolderChangesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IAbsorbRemoteFolderChangesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AbsorbRemoteFolderChangesRequestBody message, length delimited. Does not implicitly {@link fs.AbsorbRemoteFolderChangesRequestBody.verify|verify} messages.
         * @param message AbsorbRemoteFolderChangesRequestBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IAbsorbRemoteFolderChangesRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AbsorbRemoteFolderChangesRequestBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AbsorbRemoteFolderChangesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.AbsorbRemoteFolderChangesRequestBody;

        /**
         * Decodes an AbsorbRemoteFolderChangesRequestBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AbsorbRemoteFolderChangesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.AbsorbRemoteFolderChangesRequestBody;

        /**
         * Verifies an AbsorbRemoteFolderChangesRequestBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AbsorbRemoteFolderChangesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AbsorbRemoteFolderChangesRequestBody
         */
        public static fromObject(object: { [k: string]: any }): fs.AbsorbRemoteFolderChangesRequestBody;

        /**
         * Creates a plain object from an AbsorbRemoteFolderChangesRequestBody message. Also converts values to other types if specified.
         * @param message AbsorbRemoteFolderChangesRequestBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.AbsorbRemoteFolderChangesRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AbsorbRemoteFolderChangesRequestBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AbsorbRemoteFolderChangesRequestBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AbsorbRemoteFolderChangesRequestBody {

        /** Properties of an Options. */
        interface IOptions {

            /** Options localVersion */
            localVersion?: (common.IUInt64Value|null);

            /** Options postfixForNameOverlaps */
            postfixForNameOverlaps?: (common.IStringValue|null);

            /** Options remoteVersion */
            remoteVersion?: (common.IUInt64Value|null);
        }

        /** Represents an Options. */
        class Options implements IOptions {

            /**
             * Constructs a new Options.
             * @param [properties] Properties to set
             */
            constructor(properties?: fs.AbsorbRemoteFolderChangesRequestBody.IOptions);

            /** Options localVersion. */
            public localVersion?: (common.IUInt64Value|null);

            /** Options postfixForNameOverlaps. */
            public postfixForNameOverlaps?: (common.IStringValue|null);

            /** Options remoteVersion. */
            public remoteVersion?: (common.IUInt64Value|null);

            /**
             * Creates a new Options instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Options instance
             */
            public static create(properties?: fs.AbsorbRemoteFolderChangesRequestBody.IOptions): fs.AbsorbRemoteFolderChangesRequestBody.Options;

            /**
             * Encodes the specified Options message. Does not implicitly {@link fs.AbsorbRemoteFolderChangesRequestBody.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: fs.AbsorbRemoteFolderChangesRequestBody.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Options message, length delimited. Does not implicitly {@link fs.AbsorbRemoteFolderChangesRequestBody.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: fs.AbsorbRemoteFolderChangesRequestBody.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Options message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.AbsorbRemoteFolderChangesRequestBody.Options;

            /**
             * Decodes an Options message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.AbsorbRemoteFolderChangesRequestBody.Options;

            /**
             * Verifies an Options message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Options message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Options
             */
            public static fromObject(object: { [k: string]: any }): fs.AbsorbRemoteFolderChangesRequestBody.Options;

            /**
             * Creates a plain object from an Options message. Also converts values to other types if specified.
             * @param message Options
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: fs.AbsorbRemoteFolderChangesRequestBody.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Options to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Options
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AbsorbRemoteFolderChangesReplyBody. */
    interface IAbsorbRemoteFolderChangesReplyBody {

        /** AbsorbRemoteFolderChangesReplyBody newVersion */
        newVersion?: (common.IUInt64Value|null);
    }

    /** Represents an AbsorbRemoteFolderChangesReplyBody. */
    class AbsorbRemoteFolderChangesReplyBody implements IAbsorbRemoteFolderChangesReplyBody {

        /**
         * Constructs a new AbsorbRemoteFolderChangesReplyBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: fs.IAbsorbRemoteFolderChangesReplyBody);

        /** AbsorbRemoteFolderChangesReplyBody newVersion. */
        public newVersion?: (common.IUInt64Value|null);

        /**
         * Creates a new AbsorbRemoteFolderChangesReplyBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AbsorbRemoteFolderChangesReplyBody instance
         */
        public static create(properties?: fs.IAbsorbRemoteFolderChangesReplyBody): fs.AbsorbRemoteFolderChangesReplyBody;

        /**
         * Encodes the specified AbsorbRemoteFolderChangesReplyBody message. Does not implicitly {@link fs.AbsorbRemoteFolderChangesReplyBody.verify|verify} messages.
         * @param message AbsorbRemoteFolderChangesReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fs.IAbsorbRemoteFolderChangesReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AbsorbRemoteFolderChangesReplyBody message, length delimited. Does not implicitly {@link fs.AbsorbRemoteFolderChangesReplyBody.verify|verify} messages.
         * @param message AbsorbRemoteFolderChangesReplyBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fs.IAbsorbRemoteFolderChangesReplyBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AbsorbRemoteFolderChangesReplyBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AbsorbRemoteFolderChangesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fs.AbsorbRemoteFolderChangesReplyBody;

        /**
         * Decodes an AbsorbRemoteFolderChangesReplyBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AbsorbRemoteFolderChangesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fs.AbsorbRemoteFolderChangesReplyBody;

        /**
         * Verifies an AbsorbRemoteFolderChangesReplyBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AbsorbRemoteFolderChangesReplyBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AbsorbRemoteFolderChangesReplyBody
         */
        public static fromObject(object: { [k: string]: any }): fs.AbsorbRemoteFolderChangesReplyBody;

        /**
         * Creates a plain object from an AbsorbRemoteFolderChangesReplyBody message. Also converts values to other types if specified.
         * @param message AbsorbRemoteFolderChangesReplyBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fs.AbsorbRemoteFolderChangesReplyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AbsorbRemoteFolderChangesReplyBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AbsorbRemoteFolderChangesReplyBody
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
