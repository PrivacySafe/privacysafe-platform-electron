/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bytes = (function() {

    /**
     * Namespace bytes.
     * @exports bytes
     * @namespace
     */
    var bytes = {};

    bytes.SpliceRequestBody = (function() {

        /**
         * Properties of a SpliceRequestBody.
         * @memberof bytes
         * @interface ISpliceRequestBody
         * @property {number|Long|null} [pos] SpliceRequestBody pos
         * @property {number|Long|null} [del] SpliceRequestBody del
         * @property {common.IBytesValue|null} [bytes] SpliceRequestBody bytes
         */

        /**
         * Constructs a new SpliceRequestBody.
         * @memberof bytes
         * @classdesc Represents a SpliceRequestBody.
         * @implements ISpliceRequestBody
         * @constructor
         * @param {bytes.ISpliceRequestBody=} [properties] Properties to set
         */
        function SpliceRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpliceRequestBody pos.
         * @member {number|Long} pos
         * @memberof bytes.SpliceRequestBody
         * @instance
         */
        SpliceRequestBody.prototype.pos = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SpliceRequestBody del.
         * @member {number|Long} del
         * @memberof bytes.SpliceRequestBody
         * @instance
         */
        SpliceRequestBody.prototype.del = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SpliceRequestBody bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof bytes.SpliceRequestBody
         * @instance
         */
        SpliceRequestBody.prototype.bytes = null;

        /**
         * Creates a new SpliceRequestBody instance using the specified properties.
         * @function create
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {bytes.ISpliceRequestBody=} [properties] Properties to set
         * @returns {bytes.SpliceRequestBody} SpliceRequestBody instance
         */
        SpliceRequestBody.create = function create(properties) {
            return new SpliceRequestBody(properties);
        };

        /**
         * Encodes the specified SpliceRequestBody message. Does not implicitly {@link bytes.SpliceRequestBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {bytes.ISpliceRequestBody} message SpliceRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpliceRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pos);
            if (message.del != null && Object.hasOwnProperty.call(message, "del"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.del);
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpliceRequestBody message, length delimited. Does not implicitly {@link bytes.SpliceRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {bytes.ISpliceRequestBody} message SpliceRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpliceRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpliceRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.SpliceRequestBody} SpliceRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpliceRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.SpliceRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pos = reader.uint64();
                        break;
                    }
                case 2: {
                        message.del = reader.uint64();
                        break;
                    }
                case 3: {
                        message.bytes = $root.common.BytesValue.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpliceRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.SpliceRequestBody} SpliceRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpliceRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpliceRequestBody message.
         * @function verify
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpliceRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos) && !(message.pos && $util.isInteger(message.pos.low) && $util.isInteger(message.pos.high)))
                    return "pos: integer|Long expected";
            if (message.del != null && message.hasOwnProperty("del"))
                if (!$util.isInteger(message.del) && !(message.del && $util.isInteger(message.del.low) && $util.isInteger(message.del.high)))
                    return "del: integer|Long expected";
            if (message.bytes != null && message.hasOwnProperty("bytes")) {
                var error = $root.common.BytesValue.verify(message.bytes);
                if (error)
                    return "bytes." + error;
            }
            return null;
        };

        /**
         * Creates a SpliceRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.SpliceRequestBody} SpliceRequestBody
         */
        SpliceRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.SpliceRequestBody)
                return object;
            var message = new $root.bytes.SpliceRequestBody();
            if (object.pos != null)
                if ($util.Long)
                    (message.pos = $util.Long.fromValue(object.pos)).unsigned = true;
                else if (typeof object.pos === "string")
                    message.pos = parseInt(object.pos, 10);
                else if (typeof object.pos === "number")
                    message.pos = object.pos;
                else if (typeof object.pos === "object")
                    message.pos = new $util.LongBits(object.pos.low >>> 0, object.pos.high >>> 0).toNumber(true);
            if (object.del != null)
                if ($util.Long)
                    (message.del = $util.Long.fromValue(object.del)).unsigned = true;
                else if (typeof object.del === "string")
                    message.del = parseInt(object.del, 10);
                else if (typeof object.del === "number")
                    message.del = object.del;
                else if (typeof object.del === "object")
                    message.del = new $util.LongBits(object.del.low >>> 0, object.del.high >>> 0).toNumber(true);
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".bytes.SpliceRequestBody.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a SpliceRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {bytes.SpliceRequestBody} message SpliceRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpliceRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pos = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pos = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.del = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.del = options.longs === String ? "0" : 0;
                object.bytes = null;
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (typeof message.pos === "number")
                    object.pos = options.longs === String ? String(message.pos) : message.pos;
                else
                    object.pos = options.longs === String ? $util.Long.prototype.toString.call(message.pos) : options.longs === Number ? new $util.LongBits(message.pos.low >>> 0, message.pos.high >>> 0).toNumber(true) : message.pos;
            if (message.del != null && message.hasOwnProperty("del"))
                if (typeof message.del === "number")
                    object.del = options.longs === String ? String(message.del) : message.del;
                else
                    object.del = options.longs === String ? $util.Long.prototype.toString.call(message.del) : options.longs === Number ? new $util.LongBits(message.del.low >>> 0, message.del.high >>> 0).toNumber(true) : message.del;
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this SpliceRequestBody to JSON.
         * @function toJSON
         * @memberof bytes.SpliceRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpliceRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpliceRequestBody
         * @function getTypeUrl
         * @memberof bytes.SpliceRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpliceRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.SpliceRequestBody";
        };

        return SpliceRequestBody;
    })();

    bytes.TruncateRequestBody = (function() {

        /**
         * Properties of a TruncateRequestBody.
         * @memberof bytes
         * @interface ITruncateRequestBody
         * @property {number|Long|null} [size] TruncateRequestBody size
         */

        /**
         * Constructs a new TruncateRequestBody.
         * @memberof bytes
         * @classdesc Represents a TruncateRequestBody.
         * @implements ITruncateRequestBody
         * @constructor
         * @param {bytes.ITruncateRequestBody=} [properties] Properties to set
         */
        function TruncateRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TruncateRequestBody size.
         * @member {number|Long} size
         * @memberof bytes.TruncateRequestBody
         * @instance
         */
        TruncateRequestBody.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TruncateRequestBody instance using the specified properties.
         * @function create
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {bytes.ITruncateRequestBody=} [properties] Properties to set
         * @returns {bytes.TruncateRequestBody} TruncateRequestBody instance
         */
        TruncateRequestBody.create = function create(properties) {
            return new TruncateRequestBody(properties);
        };

        /**
         * Encodes the specified TruncateRequestBody message. Does not implicitly {@link bytes.TruncateRequestBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {bytes.ITruncateRequestBody} message TruncateRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TruncateRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.size);
            return writer;
        };

        /**
         * Encodes the specified TruncateRequestBody message, length delimited. Does not implicitly {@link bytes.TruncateRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {bytes.ITruncateRequestBody} message TruncateRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TruncateRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TruncateRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.TruncateRequestBody} TruncateRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TruncateRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.TruncateRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.size = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TruncateRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.TruncateRequestBody} TruncateRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TruncateRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TruncateRequestBody message.
         * @function verify
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TruncateRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            return null;
        };

        /**
         * Creates a TruncateRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.TruncateRequestBody} TruncateRequestBody
         */
        TruncateRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.TruncateRequestBody)
                return object;
            var message = new $root.bytes.TruncateRequestBody();
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TruncateRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {bytes.TruncateRequestBody} message TruncateRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TruncateRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
            return object;
        };

        /**
         * Converts this TruncateRequestBody to JSON.
         * @function toJSON
         * @memberof bytes.TruncateRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TruncateRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TruncateRequestBody
         * @function getTypeUrl
         * @memberof bytes.TruncateRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TruncateRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.TruncateRequestBody";
        };

        return TruncateRequestBody;
    })();

    bytes.FileLayoutMsg = (function() {

        /**
         * Properties of a FileLayoutMsg.
         * @memberof bytes
         * @interface IFileLayoutMsg
         * @property {common.IUInt64Value|null} [base] FileLayoutMsg base
         * @property {Array.<bytes.FileLayoutMsg.ILayoutSection>|null} [sections] FileLayoutMsg sections
         */

        /**
         * Constructs a new FileLayoutMsg.
         * @memberof bytes
         * @classdesc Represents a FileLayoutMsg.
         * @implements IFileLayoutMsg
         * @constructor
         * @param {bytes.IFileLayoutMsg=} [properties] Properties to set
         */
        function FileLayoutMsg(properties) {
            this.sections = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileLayoutMsg base.
         * @member {common.IUInt64Value|null|undefined} base
         * @memberof bytes.FileLayoutMsg
         * @instance
         */
        FileLayoutMsg.prototype.base = null;

        /**
         * FileLayoutMsg sections.
         * @member {Array.<bytes.FileLayoutMsg.ILayoutSection>} sections
         * @memberof bytes.FileLayoutMsg
         * @instance
         */
        FileLayoutMsg.prototype.sections = $util.emptyArray;

        /**
         * Creates a new FileLayoutMsg instance using the specified properties.
         * @function create
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {bytes.IFileLayoutMsg=} [properties] Properties to set
         * @returns {bytes.FileLayoutMsg} FileLayoutMsg instance
         */
        FileLayoutMsg.create = function create(properties) {
            return new FileLayoutMsg(properties);
        };

        /**
         * Encodes the specified FileLayoutMsg message. Does not implicitly {@link bytes.FileLayoutMsg.verify|verify} messages.
         * @function encode
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {bytes.IFileLayoutMsg} message FileLayoutMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileLayoutMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.common.UInt64Value.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sections != null && message.sections.length)
                for (var i = 0; i < message.sections.length; ++i)
                    $root.bytes.FileLayoutMsg.LayoutSection.encode(message.sections[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileLayoutMsg message, length delimited. Does not implicitly {@link bytes.FileLayoutMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {bytes.IFileLayoutMsg} message FileLayoutMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileLayoutMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileLayoutMsg message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.FileLayoutMsg} FileLayoutMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileLayoutMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.FileLayoutMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.sections && message.sections.length))
                            message.sections = [];
                        message.sections.push($root.bytes.FileLayoutMsg.LayoutSection.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileLayoutMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.FileLayoutMsg} FileLayoutMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileLayoutMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileLayoutMsg message.
         * @function verify
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileLayoutMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                var error = $root.common.UInt64Value.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.sections != null && message.hasOwnProperty("sections")) {
                if (!Array.isArray(message.sections))
                    return "sections: array expected";
                for (var i = 0; i < message.sections.length; ++i) {
                    var error = $root.bytes.FileLayoutMsg.LayoutSection.verify(message.sections[i]);
                    if (error)
                        return "sections." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FileLayoutMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.FileLayoutMsg} FileLayoutMsg
         */
        FileLayoutMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.FileLayoutMsg)
                return object;
            var message = new $root.bytes.FileLayoutMsg();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".bytes.FileLayoutMsg.base: object expected");
                message.base = $root.common.UInt64Value.fromObject(object.base);
            }
            if (object.sections) {
                if (!Array.isArray(object.sections))
                    throw TypeError(".bytes.FileLayoutMsg.sections: array expected");
                message.sections = [];
                for (var i = 0; i < object.sections.length; ++i) {
                    if (typeof object.sections[i] !== "object")
                        throw TypeError(".bytes.FileLayoutMsg.sections: object expected");
                    message.sections[i] = $root.bytes.FileLayoutMsg.LayoutSection.fromObject(object.sections[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FileLayoutMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {bytes.FileLayoutMsg} message FileLayoutMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileLayoutMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sections = [];
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.common.UInt64Value.toObject(message.base, options);
            if (message.sections && message.sections.length) {
                object.sections = [];
                for (var j = 0; j < message.sections.length; ++j)
                    object.sections[j] = $root.bytes.FileLayoutMsg.LayoutSection.toObject(message.sections[j], options);
            }
            return object;
        };

        /**
         * Converts this FileLayoutMsg to JSON.
         * @function toJSON
         * @memberof bytes.FileLayoutMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileLayoutMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileLayoutMsg
         * @function getTypeUrl
         * @memberof bytes.FileLayoutMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileLayoutMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.FileLayoutMsg";
        };

        FileLayoutMsg.LayoutSection = (function() {

            /**
             * Properties of a LayoutSection.
             * @memberof bytes.FileLayoutMsg
             * @interface ILayoutSection
             * @property {string|null} [src] LayoutSection src
             * @property {number|Long|null} [ofs] LayoutSection ofs
             * @property {number|Long|null} [len] LayoutSection len
             */

            /**
             * Constructs a new LayoutSection.
             * @memberof bytes.FileLayoutMsg
             * @classdesc Represents a LayoutSection.
             * @implements ILayoutSection
             * @constructor
             * @param {bytes.FileLayoutMsg.ILayoutSection=} [properties] Properties to set
             */
            function LayoutSection(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LayoutSection src.
             * @member {string} src
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @instance
             */
            LayoutSection.prototype.src = "";

            /**
             * LayoutSection ofs.
             * @member {number|Long} ofs
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @instance
             */
            LayoutSection.prototype.ofs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * LayoutSection len.
             * @member {number|Long} len
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @instance
             */
            LayoutSection.prototype.len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new LayoutSection instance using the specified properties.
             * @function create
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {bytes.FileLayoutMsg.ILayoutSection=} [properties] Properties to set
             * @returns {bytes.FileLayoutMsg.LayoutSection} LayoutSection instance
             */
            LayoutSection.create = function create(properties) {
                return new LayoutSection(properties);
            };

            /**
             * Encodes the specified LayoutSection message. Does not implicitly {@link bytes.FileLayoutMsg.LayoutSection.verify|verify} messages.
             * @function encode
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {bytes.FileLayoutMsg.ILayoutSection} message LayoutSection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayoutSection.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.src);
                if (message.ofs != null && Object.hasOwnProperty.call(message, "ofs"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ofs);
                if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.len);
                return writer;
            };

            /**
             * Encodes the specified LayoutSection message, length delimited. Does not implicitly {@link bytes.FileLayoutMsg.LayoutSection.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {bytes.FileLayoutMsg.ILayoutSection} message LayoutSection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayoutSection.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LayoutSection message from the specified reader or buffer.
             * @function decode
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bytes.FileLayoutMsg.LayoutSection} LayoutSection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayoutSection.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.FileLayoutMsg.LayoutSection();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.src = reader.string();
                            break;
                        }
                    case 2: {
                            message.ofs = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.len = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LayoutSection message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bytes.FileLayoutMsg.LayoutSection} LayoutSection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayoutSection.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LayoutSection message.
             * @function verify
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LayoutSection.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.src != null && message.hasOwnProperty("src"))
                    if (!$util.isString(message.src))
                        return "src: string expected";
                if (message.ofs != null && message.hasOwnProperty("ofs"))
                    if (!$util.isInteger(message.ofs) && !(message.ofs && $util.isInteger(message.ofs.low) && $util.isInteger(message.ofs.high)))
                        return "ofs: integer|Long expected";
                if (message.len != null && message.hasOwnProperty("len"))
                    if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                        return "len: integer|Long expected";
                return null;
            };

            /**
             * Creates a LayoutSection message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bytes.FileLayoutMsg.LayoutSection} LayoutSection
             */
            LayoutSection.fromObject = function fromObject(object) {
                if (object instanceof $root.bytes.FileLayoutMsg.LayoutSection)
                    return object;
                var message = new $root.bytes.FileLayoutMsg.LayoutSection();
                if (object.src != null)
                    message.src = String(object.src);
                if (object.ofs != null)
                    if ($util.Long)
                        (message.ofs = $util.Long.fromValue(object.ofs)).unsigned = true;
                    else if (typeof object.ofs === "string")
                        message.ofs = parseInt(object.ofs, 10);
                    else if (typeof object.ofs === "number")
                        message.ofs = object.ofs;
                    else if (typeof object.ofs === "object")
                        message.ofs = new $util.LongBits(object.ofs.low >>> 0, object.ofs.high >>> 0).toNumber(true);
                if (object.len != null)
                    if ($util.Long)
                        (message.len = $util.Long.fromValue(object.len)).unsigned = true;
                    else if (typeof object.len === "string")
                        message.len = parseInt(object.len, 10);
                    else if (typeof object.len === "number")
                        message.len = object.len;
                    else if (typeof object.len === "object")
                        message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a LayoutSection message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {bytes.FileLayoutMsg.LayoutSection} message LayoutSection
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LayoutSection.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.src = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.ofs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ofs = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.len = options.longs === String ? "0" : 0;
                }
                if (message.src != null && message.hasOwnProperty("src"))
                    object.src = message.src;
                if (message.ofs != null && message.hasOwnProperty("ofs"))
                    if (typeof message.ofs === "number")
                        object.ofs = options.longs === String ? String(message.ofs) : message.ofs;
                    else
                        object.ofs = options.longs === String ? $util.Long.prototype.toString.call(message.ofs) : options.longs === Number ? new $util.LongBits(message.ofs.low >>> 0, message.ofs.high >>> 0).toNumber(true) : message.ofs;
                if (message.len != null && message.hasOwnProperty("len"))
                    if (typeof message.len === "number")
                        object.len = options.longs === String ? String(message.len) : message.len;
                    else
                        object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber(true) : message.len;
                return object;
            };

            /**
             * Converts this LayoutSection to JSON.
             * @function toJSON
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LayoutSection.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LayoutSection
             * @function getTypeUrl
             * @memberof bytes.FileLayoutMsg.LayoutSection
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LayoutSection.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bytes.FileLayoutMsg.LayoutSection";
            };

            return LayoutSection;
        })();

        return FileLayoutMsg;
    })();

    bytes.DoneRequestBody = (function() {

        /**
         * Properties of a DoneRequestBody.
         * @memberof bytes
         * @interface IDoneRequestBody
         * @property {common.IErrorValue|null} [err] DoneRequestBody err
         */

        /**
         * Constructs a new DoneRequestBody.
         * @memberof bytes
         * @classdesc Represents a DoneRequestBody.
         * @implements IDoneRequestBody
         * @constructor
         * @param {bytes.IDoneRequestBody=} [properties] Properties to set
         */
        function DoneRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DoneRequestBody err.
         * @member {common.IErrorValue|null|undefined} err
         * @memberof bytes.DoneRequestBody
         * @instance
         */
        DoneRequestBody.prototype.err = null;

        /**
         * Creates a new DoneRequestBody instance using the specified properties.
         * @function create
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {bytes.IDoneRequestBody=} [properties] Properties to set
         * @returns {bytes.DoneRequestBody} DoneRequestBody instance
         */
        DoneRequestBody.create = function create(properties) {
            return new DoneRequestBody(properties);
        };

        /**
         * Encodes the specified DoneRequestBody message. Does not implicitly {@link bytes.DoneRequestBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {bytes.IDoneRequestBody} message DoneRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoneRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                $root.common.ErrorValue.encode(message.err, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DoneRequestBody message, length delimited. Does not implicitly {@link bytes.DoneRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {bytes.IDoneRequestBody} message DoneRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoneRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DoneRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.DoneRequestBody} DoneRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoneRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.DoneRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.err = $root.common.ErrorValue.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DoneRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.DoneRequestBody} DoneRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoneRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DoneRequestBody message.
         * @function verify
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DoneRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err")) {
                var error = $root.common.ErrorValue.verify(message.err);
                if (error)
                    return "err." + error;
            }
            return null;
        };

        /**
         * Creates a DoneRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.DoneRequestBody} DoneRequestBody
         */
        DoneRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.DoneRequestBody)
                return object;
            var message = new $root.bytes.DoneRequestBody();
            if (object.err != null) {
                if (typeof object.err !== "object")
                    throw TypeError(".bytes.DoneRequestBody.err: object expected");
                message.err = $root.common.ErrorValue.fromObject(object.err);
            }
            return message;
        };

        /**
         * Creates a plain object from a DoneRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {bytes.DoneRequestBody} message DoneRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DoneRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = null;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = $root.common.ErrorValue.toObject(message.err, options);
            return object;
        };

        /**
         * Converts this DoneRequestBody to JSON.
         * @function toJSON
         * @memberof bytes.DoneRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DoneRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DoneRequestBody
         * @function getTypeUrl
         * @memberof bytes.DoneRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DoneRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.DoneRequestBody";
        };

        return DoneRequestBody;
    })();

    bytes.ReadReplyBody = (function() {

        /**
         * Properties of a ReadReplyBody.
         * @memberof bytes
         * @interface IReadReplyBody
         * @property {common.IBytesValue|null} [bytes] ReadReplyBody bytes
         */

        /**
         * Constructs a new ReadReplyBody.
         * @memberof bytes
         * @classdesc Represents a ReadReplyBody.
         * @implements IReadReplyBody
         * @constructor
         * @param {bytes.IReadReplyBody=} [properties] Properties to set
         */
        function ReadReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadReplyBody bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof bytes.ReadReplyBody
         * @instance
         */
        ReadReplyBody.prototype.bytes = null;

        /**
         * Creates a new ReadReplyBody instance using the specified properties.
         * @function create
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {bytes.IReadReplyBody=} [properties] Properties to set
         * @returns {bytes.ReadReplyBody} ReadReplyBody instance
         */
        ReadReplyBody.create = function create(properties) {
            return new ReadReplyBody(properties);
        };

        /**
         * Encodes the specified ReadReplyBody message. Does not implicitly {@link bytes.ReadReplyBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {bytes.IReadReplyBody} message ReadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadReplyBody message, length delimited. Does not implicitly {@link bytes.ReadReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {bytes.IReadReplyBody} message ReadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.ReadReplyBody} ReadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.ReadReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.bytes = $root.common.BytesValue.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.ReadReplyBody} ReadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadReplyBody message.
         * @function verify
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bytes != null && message.hasOwnProperty("bytes")) {
                var error = $root.common.BytesValue.verify(message.bytes);
                if (error)
                    return "bytes." + error;
            }
            return null;
        };

        /**
         * Creates a ReadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.ReadReplyBody} ReadReplyBody
         */
        ReadReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.ReadReplyBody)
                return object;
            var message = new $root.bytes.ReadReplyBody();
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".bytes.ReadReplyBody.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {bytes.ReadReplyBody} message ReadReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.bytes = null;
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this ReadReplyBody to JSON.
         * @function toJSON
         * @memberof bytes.ReadReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadReplyBody
         * @function getTypeUrl
         * @memberof bytes.ReadReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.ReadReplyBody";
        };

        return ReadReplyBody;
    })();

    bytes.ReadNextRequestBody = (function() {

        /**
         * Properties of a ReadNextRequestBody.
         * @memberof bytes
         * @interface IReadNextRequestBody
         * @property {common.IUInt64Value|null} [len] ReadNextRequestBody len
         */

        /**
         * Constructs a new ReadNextRequestBody.
         * @memberof bytes
         * @classdesc Represents a ReadNextRequestBody.
         * @implements IReadNextRequestBody
         * @constructor
         * @param {bytes.IReadNextRequestBody=} [properties] Properties to set
         */
        function ReadNextRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadNextRequestBody len.
         * @member {common.IUInt64Value|null|undefined} len
         * @memberof bytes.ReadNextRequestBody
         * @instance
         */
        ReadNextRequestBody.prototype.len = null;

        /**
         * Creates a new ReadNextRequestBody instance using the specified properties.
         * @function create
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {bytes.IReadNextRequestBody=} [properties] Properties to set
         * @returns {bytes.ReadNextRequestBody} ReadNextRequestBody instance
         */
        ReadNextRequestBody.create = function create(properties) {
            return new ReadNextRequestBody(properties);
        };

        /**
         * Encodes the specified ReadNextRequestBody message. Does not implicitly {@link bytes.ReadNextRequestBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {bytes.IReadNextRequestBody} message ReadNextRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadNextRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                $root.common.UInt64Value.encode(message.len, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadNextRequestBody message, length delimited. Does not implicitly {@link bytes.ReadNextRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {bytes.IReadNextRequestBody} message ReadNextRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadNextRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadNextRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.ReadNextRequestBody} ReadNextRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadNextRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.ReadNextRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.len = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadNextRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.ReadNextRequestBody} ReadNextRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadNextRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadNextRequestBody message.
         * @function verify
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadNextRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.len != null && message.hasOwnProperty("len")) {
                var error = $root.common.UInt64Value.verify(message.len);
                if (error)
                    return "len." + error;
            }
            return null;
        };

        /**
         * Creates a ReadNextRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.ReadNextRequestBody} ReadNextRequestBody
         */
        ReadNextRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.ReadNextRequestBody)
                return object;
            var message = new $root.bytes.ReadNextRequestBody();
            if (object.len != null) {
                if (typeof object.len !== "object")
                    throw TypeError(".bytes.ReadNextRequestBody.len: object expected");
                message.len = $root.common.UInt64Value.fromObject(object.len);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadNextRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {bytes.ReadNextRequestBody} message ReadNextRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadNextRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.len = null;
            if (message.len != null && message.hasOwnProperty("len"))
                object.len = $root.common.UInt64Value.toObject(message.len, options);
            return object;
        };

        /**
         * Converts this ReadNextRequestBody to JSON.
         * @function toJSON
         * @memberof bytes.ReadNextRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadNextRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadNextRequestBody
         * @function getTypeUrl
         * @memberof bytes.ReadNextRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadNextRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.ReadNextRequestBody";
        };

        return ReadNextRequestBody;
    })();

    bytes.ReadAtRequestBody = (function() {

        /**
         * Properties of a ReadAtRequestBody.
         * @memberof bytes
         * @interface IReadAtRequestBody
         * @property {number|Long|null} [pos] ReadAtRequestBody pos
         * @property {common.IUInt64Value|null} [len] ReadAtRequestBody len
         */

        /**
         * Constructs a new ReadAtRequestBody.
         * @memberof bytes
         * @classdesc Represents a ReadAtRequestBody.
         * @implements IReadAtRequestBody
         * @constructor
         * @param {bytes.IReadAtRequestBody=} [properties] Properties to set
         */
        function ReadAtRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadAtRequestBody pos.
         * @member {number|Long} pos
         * @memberof bytes.ReadAtRequestBody
         * @instance
         */
        ReadAtRequestBody.prototype.pos = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReadAtRequestBody len.
         * @member {common.IUInt64Value|null|undefined} len
         * @memberof bytes.ReadAtRequestBody
         * @instance
         */
        ReadAtRequestBody.prototype.len = null;

        /**
         * Creates a new ReadAtRequestBody instance using the specified properties.
         * @function create
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {bytes.IReadAtRequestBody=} [properties] Properties to set
         * @returns {bytes.ReadAtRequestBody} ReadAtRequestBody instance
         */
        ReadAtRequestBody.create = function create(properties) {
            return new ReadAtRequestBody(properties);
        };

        /**
         * Encodes the specified ReadAtRequestBody message. Does not implicitly {@link bytes.ReadAtRequestBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {bytes.IReadAtRequestBody} message ReadAtRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadAtRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pos);
            if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                $root.common.UInt64Value.encode(message.len, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadAtRequestBody message, length delimited. Does not implicitly {@link bytes.ReadAtRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {bytes.IReadAtRequestBody} message ReadAtRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadAtRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadAtRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.ReadAtRequestBody} ReadAtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadAtRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.ReadAtRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pos = reader.uint64();
                        break;
                    }
                case 2: {
                        message.len = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadAtRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.ReadAtRequestBody} ReadAtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadAtRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadAtRequestBody message.
         * @function verify
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadAtRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos) && !(message.pos && $util.isInteger(message.pos.low) && $util.isInteger(message.pos.high)))
                    return "pos: integer|Long expected";
            if (message.len != null && message.hasOwnProperty("len")) {
                var error = $root.common.UInt64Value.verify(message.len);
                if (error)
                    return "len." + error;
            }
            return null;
        };

        /**
         * Creates a ReadAtRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.ReadAtRequestBody} ReadAtRequestBody
         */
        ReadAtRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.ReadAtRequestBody)
                return object;
            var message = new $root.bytes.ReadAtRequestBody();
            if (object.pos != null)
                if ($util.Long)
                    (message.pos = $util.Long.fromValue(object.pos)).unsigned = true;
                else if (typeof object.pos === "string")
                    message.pos = parseInt(object.pos, 10);
                else if (typeof object.pos === "number")
                    message.pos = object.pos;
                else if (typeof object.pos === "object")
                    message.pos = new $util.LongBits(object.pos.low >>> 0, object.pos.high >>> 0).toNumber(true);
            if (object.len != null) {
                if (typeof object.len !== "object")
                    throw TypeError(".bytes.ReadAtRequestBody.len: object expected");
                message.len = $root.common.UInt64Value.fromObject(object.len);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadAtRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {bytes.ReadAtRequestBody} message ReadAtRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadAtRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pos = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pos = options.longs === String ? "0" : 0;
                object.len = null;
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (typeof message.pos === "number")
                    object.pos = options.longs === String ? String(message.pos) : message.pos;
                else
                    object.pos = options.longs === String ? $util.Long.prototype.toString.call(message.pos) : options.longs === Number ? new $util.LongBits(message.pos.low >>> 0, message.pos.high >>> 0).toNumber(true) : message.pos;
            if (message.len != null && message.hasOwnProperty("len"))
                object.len = $root.common.UInt64Value.toObject(message.len, options);
            return object;
        };

        /**
         * Converts this ReadAtRequestBody to JSON.
         * @function toJSON
         * @memberof bytes.ReadAtRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadAtRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadAtRequestBody
         * @function getTypeUrl
         * @memberof bytes.ReadAtRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadAtRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.ReadAtRequestBody";
        };

        return ReadAtRequestBody;
    })();

    bytes.SeekRequestBody = (function() {

        /**
         * Properties of a SeekRequestBody.
         * @memberof bytes
         * @interface ISeekRequestBody
         * @property {number|Long|null} [offset] SeekRequestBody offset
         */

        /**
         * Constructs a new SeekRequestBody.
         * @memberof bytes
         * @classdesc Represents a SeekRequestBody.
         * @implements ISeekRequestBody
         * @constructor
         * @param {bytes.ISeekRequestBody=} [properties] Properties to set
         */
        function SeekRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SeekRequestBody offset.
         * @member {number|Long} offset
         * @memberof bytes.SeekRequestBody
         * @instance
         */
        SeekRequestBody.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SeekRequestBody instance using the specified properties.
         * @function create
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {bytes.ISeekRequestBody=} [properties] Properties to set
         * @returns {bytes.SeekRequestBody} SeekRequestBody instance
         */
        SeekRequestBody.create = function create(properties) {
            return new SeekRequestBody(properties);
        };

        /**
         * Encodes the specified SeekRequestBody message. Does not implicitly {@link bytes.SeekRequestBody.verify|verify} messages.
         * @function encode
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {bytes.ISeekRequestBody} message SeekRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeekRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.offset);
            return writer;
        };

        /**
         * Encodes the specified SeekRequestBody message, length delimited. Does not implicitly {@link bytes.SeekRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {bytes.ISeekRequestBody} message SeekRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeekRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SeekRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bytes.SeekRequestBody} SeekRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeekRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bytes.SeekRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.offset = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SeekRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bytes.SeekRequestBody} SeekRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeekRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SeekRequestBody message.
         * @function verify
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SeekRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                    return "offset: integer|Long expected";
            return null;
        };

        /**
         * Creates a SeekRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bytes.SeekRequestBody} SeekRequestBody
         */
        SeekRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.bytes.SeekRequestBody)
                return object;
            var message = new $root.bytes.SeekRequestBody();
            if (object.offset != null)
                if ($util.Long)
                    (message.offset = $util.Long.fromValue(object.offset)).unsigned = true;
                else if (typeof object.offset === "string")
                    message.offset = parseInt(object.offset, 10);
                else if (typeof object.offset === "number")
                    message.offset = object.offset;
                else if (typeof object.offset === "object")
                    message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SeekRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {bytes.SeekRequestBody} message SeekRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SeekRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.offset = options.longs === String ? "0" : 0;
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (typeof message.offset === "number")
                    object.offset = options.longs === String ? String(message.offset) : message.offset;
                else
                    object.offset = options.longs === String ? $util.Long.prototype.toString.call(message.offset) : options.longs === Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber(true) : message.offset;
            return object;
        };

        /**
         * Converts this SeekRequestBody to JSON.
         * @function toJSON
         * @memberof bytes.SeekRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SeekRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SeekRequestBody
         * @function getTypeUrl
         * @memberof bytes.SeekRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SeekRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bytes.SeekRequestBody";
        };

        return SeekRequestBody;
    })();

    return bytes;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.ObjectReference = (function() {

        /**
         * Properties of an ObjectReference.
         * @memberof common
         * @interface IObjectReference
         * @property {string|null} [objType] ObjectReference objType
         * @property {Array.<string>|null} [path] ObjectReference path
         */

        /**
         * Constructs a new ObjectReference.
         * @memberof common
         * @classdesc Represents an ObjectReference.
         * @implements IObjectReference
         * @constructor
         * @param {common.IObjectReference=} [properties] Properties to set
         */
        function ObjectReference(properties) {
            this.path = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectReference objType.
         * @member {string} objType
         * @memberof common.ObjectReference
         * @instance
         */
        ObjectReference.prototype.objType = "";

        /**
         * ObjectReference path.
         * @member {Array.<string>} path
         * @memberof common.ObjectReference
         * @instance
         */
        ObjectReference.prototype.path = $util.emptyArray;

        /**
         * Creates a new ObjectReference instance using the specified properties.
         * @function create
         * @memberof common.ObjectReference
         * @static
         * @param {common.IObjectReference=} [properties] Properties to set
         * @returns {common.ObjectReference} ObjectReference instance
         */
        ObjectReference.create = function create(properties) {
            return new ObjectReference(properties);
        };

        /**
         * Encodes the specified ObjectReference message. Does not implicitly {@link common.ObjectReference.verify|verify} messages.
         * @function encode
         * @memberof common.ObjectReference
         * @static
         * @param {common.IObjectReference} message ObjectReference message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectReference.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objType != null && Object.hasOwnProperty.call(message, "objType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.objType);
            if (message.path != null && message.path.length)
                for (var i = 0; i < message.path.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.path[i]);
            return writer;
        };

        /**
         * Encodes the specified ObjectReference message, length delimited. Does not implicitly {@link common.ObjectReference.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ObjectReference
         * @static
         * @param {common.IObjectReference} message ObjectReference message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectReference.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObjectReference message from the specified reader or buffer.
         * @function decode
         * @memberof common.ObjectReference
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ObjectReference} ObjectReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectReference.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ObjectReference();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.objType = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.path && message.path.length))
                            message.path = [];
                        message.path.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObjectReference message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ObjectReference
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ObjectReference} ObjectReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectReference.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObjectReference message.
         * @function verify
         * @memberof common.ObjectReference
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObjectReference.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objType != null && message.hasOwnProperty("objType"))
                if (!$util.isString(message.objType))
                    return "objType: string expected";
            if (message.path != null && message.hasOwnProperty("path")) {
                if (!Array.isArray(message.path))
                    return "path: array expected";
                for (var i = 0; i < message.path.length; ++i)
                    if (!$util.isString(message.path[i]))
                        return "path: string[] expected";
            }
            return null;
        };

        /**
         * Creates an ObjectReference message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ObjectReference
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ObjectReference} ObjectReference
         */
        ObjectReference.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ObjectReference)
                return object;
            var message = new $root.common.ObjectReference();
            if (object.objType != null)
                message.objType = String(object.objType);
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError(".common.ObjectReference.path: array expected");
                message.path = [];
                for (var i = 0; i < object.path.length; ++i)
                    message.path[i] = String(object.path[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an ObjectReference message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ObjectReference
         * @static
         * @param {common.ObjectReference} message ObjectReference
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjectReference.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.path = [];
            if (options.defaults)
                object.objType = "";
            if (message.objType != null && message.hasOwnProperty("objType"))
                object.objType = message.objType;
            if (message.path && message.path.length) {
                object.path = [];
                for (var j = 0; j < message.path.length; ++j)
                    object.path[j] = message.path[j];
            }
            return object;
        };

        /**
         * Converts this ObjectReference to JSON.
         * @function toJSON
         * @memberof common.ObjectReference
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjectReference.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ObjectReference
         * @function getTypeUrl
         * @memberof common.ObjectReference
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ObjectReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ObjectReference";
        };

        return ObjectReference;
    })();

    common.BooleanValue = (function() {

        /**
         * Properties of a BooleanValue.
         * @memberof common
         * @interface IBooleanValue
         * @property {boolean|null} [value] BooleanValue value
         */

        /**
         * Constructs a new BooleanValue.
         * @memberof common
         * @classdesc Represents a BooleanValue.
         * @implements IBooleanValue
         * @constructor
         * @param {common.IBooleanValue=} [properties] Properties to set
         */
        function BooleanValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BooleanValue value.
         * @member {boolean} value
         * @memberof common.BooleanValue
         * @instance
         */
        BooleanValue.prototype.value = false;

        /**
         * Creates a new BooleanValue instance using the specified properties.
         * @function create
         * @memberof common.BooleanValue
         * @static
         * @param {common.IBooleanValue=} [properties] Properties to set
         * @returns {common.BooleanValue} BooleanValue instance
         */
        BooleanValue.create = function create(properties) {
            return new BooleanValue(properties);
        };

        /**
         * Encodes the specified BooleanValue message. Does not implicitly {@link common.BooleanValue.verify|verify} messages.
         * @function encode
         * @memberof common.BooleanValue
         * @static
         * @param {common.IBooleanValue} message BooleanValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BooleanValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
            return writer;
        };

        /**
         * Encodes the specified BooleanValue message, length delimited. Does not implicitly {@link common.BooleanValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.BooleanValue
         * @static
         * @param {common.IBooleanValue} message BooleanValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BooleanValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BooleanValue message from the specified reader or buffer.
         * @function decode
         * @memberof common.BooleanValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.BooleanValue} BooleanValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BooleanValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.BooleanValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BooleanValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.BooleanValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.BooleanValue} BooleanValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BooleanValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BooleanValue message.
         * @function verify
         * @memberof common.BooleanValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BooleanValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "boolean")
                    return "value: boolean expected";
            return null;
        };

        /**
         * Creates a BooleanValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.BooleanValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.BooleanValue} BooleanValue
         */
        BooleanValue.fromObject = function fromObject(object) {
            if (object instanceof $root.common.BooleanValue)
                return object;
            var message = new $root.common.BooleanValue();
            if (object.value != null)
                message.value = Boolean(object.value);
            return message;
        };

        /**
         * Creates a plain object from a BooleanValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.BooleanValue
         * @static
         * @param {common.BooleanValue} message BooleanValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BooleanValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = false;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this BooleanValue to JSON.
         * @function toJSON
         * @memberof common.BooleanValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BooleanValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BooleanValue
         * @function getTypeUrl
         * @memberof common.BooleanValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BooleanValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.BooleanValue";
        };

        return BooleanValue;
    })();

    common.StringArrayValue = (function() {

        /**
         * Properties of a StringArrayValue.
         * @memberof common
         * @interface IStringArrayValue
         * @property {Array.<string>|null} [values] StringArrayValue values
         */

        /**
         * Constructs a new StringArrayValue.
         * @memberof common
         * @classdesc Represents a StringArrayValue.
         * @implements IStringArrayValue
         * @constructor
         * @param {common.IStringArrayValue=} [properties] Properties to set
         */
        function StringArrayValue(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringArrayValue values.
         * @member {Array.<string>} values
         * @memberof common.StringArrayValue
         * @instance
         */
        StringArrayValue.prototype.values = $util.emptyArray;

        /**
         * Creates a new StringArrayValue instance using the specified properties.
         * @function create
         * @memberof common.StringArrayValue
         * @static
         * @param {common.IStringArrayValue=} [properties] Properties to set
         * @returns {common.StringArrayValue} StringArrayValue instance
         */
        StringArrayValue.create = function create(properties) {
            return new StringArrayValue(properties);
        };

        /**
         * Encodes the specified StringArrayValue message. Does not implicitly {@link common.StringArrayValue.verify|verify} messages.
         * @function encode
         * @memberof common.StringArrayValue
         * @static
         * @param {common.IStringArrayValue} message StringArrayValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringArrayValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
            return writer;
        };

        /**
         * Encodes the specified StringArrayValue message, length delimited. Does not implicitly {@link common.StringArrayValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.StringArrayValue
         * @static
         * @param {common.IStringArrayValue} message StringArrayValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringArrayValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringArrayValue message from the specified reader or buffer.
         * @function decode
         * @memberof common.StringArrayValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.StringArrayValue} StringArrayValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringArrayValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.StringArrayValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringArrayValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.StringArrayValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.StringArrayValue} StringArrayValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringArrayValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringArrayValue message.
         * @function verify
         * @memberof common.StringArrayValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringArrayValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i)
                    if (!$util.isString(message.values[i]))
                        return "values: string[] expected";
            }
            return null;
        };

        /**
         * Creates a StringArrayValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.StringArrayValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.StringArrayValue} StringArrayValue
         */
        StringArrayValue.fromObject = function fromObject(object) {
            if (object instanceof $root.common.StringArrayValue)
                return object;
            var message = new $root.common.StringArrayValue();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".common.StringArrayValue.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i)
                    message.values[i] = String(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StringArrayValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.StringArrayValue
         * @static
         * @param {common.StringArrayValue} message StringArrayValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringArrayValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this StringArrayValue to JSON.
         * @function toJSON
         * @memberof common.StringArrayValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringArrayValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StringArrayValue
         * @function getTypeUrl
         * @memberof common.StringArrayValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StringArrayValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.StringArrayValue";
        };

        return StringArrayValue;
    })();

    common.UInt64Value = (function() {

        /**
         * Properties of a UInt64Value.
         * @memberof common
         * @interface IUInt64Value
         * @property {number|Long|null} [value] UInt64Value value
         */

        /**
         * Constructs a new UInt64Value.
         * @memberof common
         * @classdesc Represents a UInt64Value.
         * @implements IUInt64Value
         * @constructor
         * @param {common.IUInt64Value=} [properties] Properties to set
         */
        function UInt64Value(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UInt64Value value.
         * @member {number|Long} value
         * @memberof common.UInt64Value
         * @instance
         */
        UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new UInt64Value instance using the specified properties.
         * @function create
         * @memberof common.UInt64Value
         * @static
         * @param {common.IUInt64Value=} [properties] Properties to set
         * @returns {common.UInt64Value} UInt64Value instance
         */
        UInt64Value.create = function create(properties) {
            return new UInt64Value(properties);
        };

        /**
         * Encodes the specified UInt64Value message. Does not implicitly {@link common.UInt64Value.verify|verify} messages.
         * @function encode
         * @memberof common.UInt64Value
         * @static
         * @param {common.IUInt64Value} message UInt64Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UInt64Value.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
            return writer;
        };

        /**
         * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link common.UInt64Value.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.UInt64Value
         * @static
         * @param {common.IUInt64Value} message UInt64Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UInt64Value message from the specified reader or buffer.
         * @function decode
         * @memberof common.UInt64Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.UInt64Value} UInt64Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UInt64Value.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.UInt64Value();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.UInt64Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.UInt64Value} UInt64Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UInt64Value.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UInt64Value message.
         * @function verify
         * @memberof common.UInt64Value
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UInt64Value.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        /**
         * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.UInt64Value
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.UInt64Value} UInt64Value
         */
        UInt64Value.fromObject = function fromObject(object) {
            if (object instanceof $root.common.UInt64Value)
                return object;
            var message = new $root.common.UInt64Value();
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (typeof object.value === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.UInt64Value
         * @static
         * @param {common.UInt64Value} message UInt64Value
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UInt64Value.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value = options.longs === String ? "0" : 0;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
            return object;
        };

        /**
         * Converts this UInt64Value to JSON.
         * @function toJSON
         * @memberof common.UInt64Value
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UInt64Value.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UInt64Value
         * @function getTypeUrl
         * @memberof common.UInt64Value
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.UInt64Value";
        };

        return UInt64Value;
    })();

    common.UInt32Value = (function() {

        /**
         * Properties of a UInt32Value.
         * @memberof common
         * @interface IUInt32Value
         * @property {number|null} [value] UInt32Value value
         */

        /**
         * Constructs a new UInt32Value.
         * @memberof common
         * @classdesc Represents a UInt32Value.
         * @implements IUInt32Value
         * @constructor
         * @param {common.IUInt32Value=} [properties] Properties to set
         */
        function UInt32Value(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UInt32Value value.
         * @member {number} value
         * @memberof common.UInt32Value
         * @instance
         */
        UInt32Value.prototype.value = 0;

        /**
         * Creates a new UInt32Value instance using the specified properties.
         * @function create
         * @memberof common.UInt32Value
         * @static
         * @param {common.IUInt32Value=} [properties] Properties to set
         * @returns {common.UInt32Value} UInt32Value instance
         */
        UInt32Value.create = function create(properties) {
            return new UInt32Value(properties);
        };

        /**
         * Encodes the specified UInt32Value message. Does not implicitly {@link common.UInt32Value.verify|verify} messages.
         * @function encode
         * @memberof common.UInt32Value
         * @static
         * @param {common.IUInt32Value} message UInt32Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UInt32Value.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link common.UInt32Value.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.UInt32Value
         * @static
         * @param {common.IUInt32Value} message UInt32Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UInt32Value message from the specified reader or buffer.
         * @function decode
         * @memberof common.UInt32Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.UInt32Value} UInt32Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UInt32Value.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.UInt32Value();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.UInt32Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.UInt32Value} UInt32Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UInt32Value.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UInt32Value message.
         * @function verify
         * @memberof common.UInt32Value
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UInt32Value.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.UInt32Value
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.UInt32Value} UInt32Value
         */
        UInt32Value.fromObject = function fromObject(object) {
            if (object instanceof $root.common.UInt32Value)
                return object;
            var message = new $root.common.UInt32Value();
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.UInt32Value
         * @static
         * @param {common.UInt32Value} message UInt32Value
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UInt32Value.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this UInt32Value to JSON.
         * @function toJSON
         * @memberof common.UInt32Value
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UInt32Value.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UInt32Value
         * @function getTypeUrl
         * @memberof common.UInt32Value
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.UInt32Value";
        };

        return UInt32Value;
    })();

    common.StringValue = (function() {

        /**
         * Properties of a StringValue.
         * @memberof common
         * @interface IStringValue
         * @property {string|null} [value] StringValue value
         */

        /**
         * Constructs a new StringValue.
         * @memberof common
         * @classdesc Represents a StringValue.
         * @implements IStringValue
         * @constructor
         * @param {common.IStringValue=} [properties] Properties to set
         */
        function StringValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringValue value.
         * @member {string} value
         * @memberof common.StringValue
         * @instance
         */
        StringValue.prototype.value = "";

        /**
         * Creates a new StringValue instance using the specified properties.
         * @function create
         * @memberof common.StringValue
         * @static
         * @param {common.IStringValue=} [properties] Properties to set
         * @returns {common.StringValue} StringValue instance
         */
        StringValue.create = function create(properties) {
            return new StringValue(properties);
        };

        /**
         * Encodes the specified StringValue message. Does not implicitly {@link common.StringValue.verify|verify} messages.
         * @function encode
         * @memberof common.StringValue
         * @static
         * @param {common.IStringValue} message StringValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified StringValue message, length delimited. Does not implicitly {@link common.StringValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.StringValue
         * @static
         * @param {common.IStringValue} message StringValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringValue message from the specified reader or buffer.
         * @function decode
         * @memberof common.StringValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.StringValue} StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.StringValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.StringValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.StringValue} StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringValue message.
         * @function verify
         * @memberof common.StringValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.StringValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.StringValue} StringValue
         */
        StringValue.fromObject = function fromObject(object) {
            if (object instanceof $root.common.StringValue)
                return object;
            var message = new $root.common.StringValue();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a StringValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.StringValue
         * @static
         * @param {common.StringValue} message StringValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this StringValue to JSON.
         * @function toJSON
         * @memberof common.StringValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StringValue
         * @function getTypeUrl
         * @memberof common.StringValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.StringValue";
        };

        return StringValue;
    })();

    common.BytesValue = (function() {

        /**
         * Properties of a BytesValue.
         * @memberof common
         * @interface IBytesValue
         * @property {Uint8Array|null} [value] BytesValue value
         */

        /**
         * Constructs a new BytesValue.
         * @memberof common
         * @classdesc Represents a BytesValue.
         * @implements IBytesValue
         * @constructor
         * @param {common.IBytesValue=} [properties] Properties to set
         */
        function BytesValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BytesValue value.
         * @member {Uint8Array} value
         * @memberof common.BytesValue
         * @instance
         */
        BytesValue.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new BytesValue instance using the specified properties.
         * @function create
         * @memberof common.BytesValue
         * @static
         * @param {common.IBytesValue=} [properties] Properties to set
         * @returns {common.BytesValue} BytesValue instance
         */
        BytesValue.create = function create(properties) {
            return new BytesValue(properties);
        };

        /**
         * Encodes the specified BytesValue message. Does not implicitly {@link common.BytesValue.verify|verify} messages.
         * @function encode
         * @memberof common.BytesValue
         * @static
         * @param {common.IBytesValue} message BytesValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link common.BytesValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.BytesValue
         * @static
         * @param {common.IBytesValue} message BytesValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BytesValue message from the specified reader or buffer.
         * @function decode
         * @memberof common.BytesValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.BytesValue} BytesValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.BytesValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BytesValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.BytesValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.BytesValue} BytesValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BytesValue message.
         * @function verify
         * @memberof common.BytesValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BytesValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };

        /**
         * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.BytesValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.BytesValue} BytesValue
         */
        BytesValue.fromObject = function fromObject(object) {
            if (object instanceof $root.common.BytesValue)
                return object;
            var message = new $root.common.BytesValue();
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.BytesValue
         * @static
         * @param {common.BytesValue} message BytesValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BytesValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this BytesValue to JSON.
         * @function toJSON
         * @memberof common.BytesValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BytesValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BytesValue
         * @function getTypeUrl
         * @memberof common.BytesValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.BytesValue";
        };

        return BytesValue;
    })();

    common.ErrorValue = (function() {

        /**
         * Properties of an ErrorValue.
         * @memberof common
         * @interface IErrorValue
         * @property {string|null} [runtimeExcJson] ErrorValue runtimeExcJson
         * @property {string|null} [err] ErrorValue err
         */

        /**
         * Constructs a new ErrorValue.
         * @memberof common
         * @classdesc Represents an ErrorValue.
         * @implements IErrorValue
         * @constructor
         * @param {common.IErrorValue=} [properties] Properties to set
         */
        function ErrorValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorValue runtimeExcJson.
         * @member {string} runtimeExcJson
         * @memberof common.ErrorValue
         * @instance
         */
        ErrorValue.prototype.runtimeExcJson = "";

        /**
         * ErrorValue err.
         * @member {string} err
         * @memberof common.ErrorValue
         * @instance
         */
        ErrorValue.prototype.err = "";

        /**
         * Creates a new ErrorValue instance using the specified properties.
         * @function create
         * @memberof common.ErrorValue
         * @static
         * @param {common.IErrorValue=} [properties] Properties to set
         * @returns {common.ErrorValue} ErrorValue instance
         */
        ErrorValue.create = function create(properties) {
            return new ErrorValue(properties);
        };

        /**
         * Encodes the specified ErrorValue message. Does not implicitly {@link common.ErrorValue.verify|verify} messages.
         * @function encode
         * @memberof common.ErrorValue
         * @static
         * @param {common.IErrorValue} message ErrorValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.runtimeExcJson != null && Object.hasOwnProperty.call(message, "runtimeExcJson"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.runtimeExcJson);
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified ErrorValue message, length delimited. Does not implicitly {@link common.ErrorValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ErrorValue
         * @static
         * @param {common.IErrorValue} message ErrorValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorValue message from the specified reader or buffer.
         * @function decode
         * @memberof common.ErrorValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ErrorValue} ErrorValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ErrorValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.runtimeExcJson = reader.string();
                        break;
                    }
                case 2: {
                        message.err = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ErrorValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ErrorValue} ErrorValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorValue message.
         * @function verify
         * @memberof common.ErrorValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.runtimeExcJson != null && message.hasOwnProperty("runtimeExcJson"))
                if (!$util.isString(message.runtimeExcJson))
                    return "runtimeExcJson: string expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates an ErrorValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ErrorValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ErrorValue} ErrorValue
         */
        ErrorValue.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ErrorValue)
                return object;
            var message = new $root.common.ErrorValue();
            if (object.runtimeExcJson != null)
                message.runtimeExcJson = String(object.runtimeExcJson);
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from an ErrorValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ErrorValue
         * @static
         * @param {common.ErrorValue} message ErrorValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.runtimeExcJson = "";
                object.err = "";
            }
            if (message.runtimeExcJson != null && message.hasOwnProperty("runtimeExcJson"))
                object.runtimeExcJson = message.runtimeExcJson;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this ErrorValue to JSON.
         * @function toJSON
         * @memberof common.ErrorValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ErrorValue
         * @function getTypeUrl
         * @memberof common.ErrorValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ErrorValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ErrorValue";
        };

        return ErrorValue;
    })();

    common.AnyValue = (function() {

        /**
         * Properties of an AnyValue.
         * @memberof common
         * @interface IAnyValue
         * @property {string|null} [type] AnyValue type
         * @property {common.IStringValue|null} [json] AnyValue json
         * @property {common.IBytesValue|null} [bytes] AnyValue bytes
         */

        /**
         * Constructs a new AnyValue.
         * @memberof common
         * @classdesc Represents an AnyValue.
         * @implements IAnyValue
         * @constructor
         * @param {common.IAnyValue=} [properties] Properties to set
         */
        function AnyValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnyValue type.
         * @member {string} type
         * @memberof common.AnyValue
         * @instance
         */
        AnyValue.prototype.type = "";

        /**
         * AnyValue json.
         * @member {common.IStringValue|null|undefined} json
         * @memberof common.AnyValue
         * @instance
         */
        AnyValue.prototype.json = null;

        /**
         * AnyValue bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof common.AnyValue
         * @instance
         */
        AnyValue.prototype.bytes = null;

        /**
         * Creates a new AnyValue instance using the specified properties.
         * @function create
         * @memberof common.AnyValue
         * @static
         * @param {common.IAnyValue=} [properties] Properties to set
         * @returns {common.AnyValue} AnyValue instance
         */
        AnyValue.create = function create(properties) {
            return new AnyValue(properties);
        };

        /**
         * Encodes the specified AnyValue message. Does not implicitly {@link common.AnyValue.verify|verify} messages.
         * @function encode
         * @memberof common.AnyValue
         * @static
         * @param {common.IAnyValue} message AnyValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnyValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                $root.common.StringValue.encode(message.json, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnyValue message, length delimited. Does not implicitly {@link common.AnyValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.AnyValue
         * @static
         * @param {common.IAnyValue} message AnyValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnyValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnyValue message from the specified reader or buffer.
         * @function decode
         * @memberof common.AnyValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.AnyValue} AnyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnyValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.AnyValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.json = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.bytes = $root.common.BytesValue.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnyValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.AnyValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.AnyValue} AnyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnyValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnyValue message.
         * @function verify
         * @memberof common.AnyValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnyValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.json != null && message.hasOwnProperty("json")) {
                var error = $root.common.StringValue.verify(message.json);
                if (error)
                    return "json." + error;
            }
            if (message.bytes != null && message.hasOwnProperty("bytes")) {
                var error = $root.common.BytesValue.verify(message.bytes);
                if (error)
                    return "bytes." + error;
            }
            return null;
        };

        /**
         * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.AnyValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.AnyValue} AnyValue
         */
        AnyValue.fromObject = function fromObject(object) {
            if (object instanceof $root.common.AnyValue)
                return object;
            var message = new $root.common.AnyValue();
            if (object.type != null)
                message.type = String(object.type);
            if (object.json != null) {
                if (typeof object.json !== "object")
                    throw TypeError(".common.AnyValue.json: object expected");
                message.json = $root.common.StringValue.fromObject(object.json);
            }
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".common.AnyValue.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.AnyValue
         * @static
         * @param {common.AnyValue} message AnyValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnyValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.json = null;
                object.bytes = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = $root.common.StringValue.toObject(message.json, options);
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this AnyValue to JSON.
         * @function toJSON
         * @memberof common.AnyValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnyValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AnyValue
         * @function getTypeUrl
         * @memberof common.AnyValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AnyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.AnyValue";
        };

        return AnyValue;
    })();

    return common;
})();

module.exports = $root;
