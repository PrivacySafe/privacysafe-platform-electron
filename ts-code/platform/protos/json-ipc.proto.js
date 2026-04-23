/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.json_ipc = (function() {

    /**
     * Namespace json_ipc.
     * @exports json_ipc
     * @namespace
     */
    var json_ipc = {};

    json_ipc.ValuesSequence = (function() {

        /**
         * Properties of a ValuesSequence.
         * @memberof json_ipc
         * @interface IValuesSequence
         * @property {Array.<json_ipc.ValuesSequence.IValue>|null} [values] ValuesSequence values
         */

        /**
         * Constructs a new ValuesSequence.
         * @memberof json_ipc
         * @classdesc Represents a ValuesSequence.
         * @implements IValuesSequence
         * @constructor
         * @param {json_ipc.IValuesSequence=} [properties] Properties to set
         */
        function ValuesSequence(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValuesSequence values.
         * @member {Array.<json_ipc.ValuesSequence.IValue>} values
         * @memberof json_ipc.ValuesSequence
         * @instance
         */
        ValuesSequence.prototype.values = $util.emptyArray;

        /**
         * Creates a new ValuesSequence instance using the specified properties.
         * @function create
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {json_ipc.IValuesSequence=} [properties] Properties to set
         * @returns {json_ipc.ValuesSequence} ValuesSequence instance
         */
        ValuesSequence.create = function create(properties) {
            return new ValuesSequence(properties);
        };

        /**
         * Encodes the specified ValuesSequence message. Does not implicitly {@link json_ipc.ValuesSequence.verify|verify} messages.
         * @function encode
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {json_ipc.IValuesSequence} message ValuesSequence message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValuesSequence.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    $root.json_ipc.ValuesSequence.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ValuesSequence message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.verify|verify} messages.
         * @function encodeDelimited
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {json_ipc.IValuesSequence} message ValuesSequence message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValuesSequence.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValuesSequence message from the specified reader or buffer.
         * @function decode
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {json_ipc.ValuesSequence} ValuesSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValuesSequence.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.json_ipc.ValuesSequence();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.json_ipc.ValuesSequence.Value.decode(reader, reader.uint32()));
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
         * Decodes a ValuesSequence message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {json_ipc.ValuesSequence} ValuesSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValuesSequence.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValuesSequence message.
         * @function verify
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValuesSequence.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.json_ipc.ValuesSequence.Value.verify(message.values[i]);
                    if (error)
                        return "values." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ValuesSequence message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {json_ipc.ValuesSequence} ValuesSequence
         */
        ValuesSequence.fromObject = function fromObject(object) {
            if (object instanceof $root.json_ipc.ValuesSequence)
                return object;
            var message = new $root.json_ipc.ValuesSequence();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".json_ipc.ValuesSequence.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                        throw TypeError(".json_ipc.ValuesSequence.values: object expected");
                    message.values[i] = $root.json_ipc.ValuesSequence.Value.fromObject(object.values[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ValuesSequence message. Also converts values to other types if specified.
         * @function toObject
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {json_ipc.ValuesSequence} message ValuesSequence
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValuesSequence.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.json_ipc.ValuesSequence.Value.toObject(message.values[j], options);
            }
            return object;
        };

        /**
         * Converts this ValuesSequence to JSON.
         * @function toJSON
         * @memberof json_ipc.ValuesSequence
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValuesSequence.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ValuesSequence
         * @function getTypeUrl
         * @memberof json_ipc.ValuesSequence
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ValuesSequence.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/json_ipc.ValuesSequence";
        };

        ValuesSequence.BinaryValue = (function() {

            /**
             * Properties of a BinaryValue.
             * @memberof json_ipc.ValuesSequence
             * @interface IBinaryValue
             * @property {Uint8Array|null} [arr] BinaryValue arr
             * @property {Array.<string>|null} [objLocation] BinaryValue objLocation
             */

            /**
             * Constructs a new BinaryValue.
             * @memberof json_ipc.ValuesSequence
             * @classdesc Represents a BinaryValue.
             * @implements IBinaryValue
             * @constructor
             * @param {json_ipc.ValuesSequence.IBinaryValue=} [properties] Properties to set
             */
            function BinaryValue(properties) {
                this.objLocation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BinaryValue arr.
             * @member {Uint8Array} arr
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @instance
             */
            BinaryValue.prototype.arr = $util.newBuffer([]);

            /**
             * BinaryValue objLocation.
             * @member {Array.<string>} objLocation
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @instance
             */
            BinaryValue.prototype.objLocation = $util.emptyArray;

            /**
             * Creates a new BinaryValue instance using the specified properties.
             * @function create
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {json_ipc.ValuesSequence.IBinaryValue=} [properties] Properties to set
             * @returns {json_ipc.ValuesSequence.BinaryValue} BinaryValue instance
             */
            BinaryValue.create = function create(properties) {
                return new BinaryValue(properties);
            };

            /**
             * Encodes the specified BinaryValue message. Does not implicitly {@link json_ipc.ValuesSequence.BinaryValue.verify|verify} messages.
             * @function encode
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {json_ipc.ValuesSequence.IBinaryValue} message BinaryValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BinaryValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.arr != null && Object.hasOwnProperty.call(message, "arr"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.arr);
                if (message.objLocation != null && message.objLocation.length)
                    for (var i = 0; i < message.objLocation.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.objLocation[i]);
                return writer;
            };

            /**
             * Encodes the specified BinaryValue message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.BinaryValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {json_ipc.ValuesSequence.IBinaryValue} message BinaryValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BinaryValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BinaryValue message from the specified reader or buffer.
             * @function decode
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {json_ipc.ValuesSequence.BinaryValue} BinaryValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BinaryValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.json_ipc.ValuesSequence.BinaryValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.arr = reader.bytes();
                            break;
                        }
                    case 2: {
                            if (!(message.objLocation && message.objLocation.length))
                                message.objLocation = [];
                            message.objLocation.push(reader.string());
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
             * Decodes a BinaryValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {json_ipc.ValuesSequence.BinaryValue} BinaryValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BinaryValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BinaryValue message.
             * @function verify
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BinaryValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.arr != null && message.hasOwnProperty("arr"))
                    if (!(message.arr && typeof message.arr.length === "number" || $util.isString(message.arr)))
                        return "arr: buffer expected";
                if (message.objLocation != null && message.hasOwnProperty("objLocation")) {
                    if (!Array.isArray(message.objLocation))
                        return "objLocation: array expected";
                    for (var i = 0; i < message.objLocation.length; ++i)
                        if (!$util.isString(message.objLocation[i]))
                            return "objLocation: string[] expected";
                }
                return null;
            };

            /**
             * Creates a BinaryValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {json_ipc.ValuesSequence.BinaryValue} BinaryValue
             */
            BinaryValue.fromObject = function fromObject(object) {
                if (object instanceof $root.json_ipc.ValuesSequence.BinaryValue)
                    return object;
                var message = new $root.json_ipc.ValuesSequence.BinaryValue();
                if (object.arr != null)
                    if (typeof object.arr === "string")
                        $util.base64.decode(object.arr, message.arr = $util.newBuffer($util.base64.length(object.arr)), 0);
                    else if (object.arr.length >= 0)
                        message.arr = object.arr;
                if (object.objLocation) {
                    if (!Array.isArray(object.objLocation))
                        throw TypeError(".json_ipc.ValuesSequence.BinaryValue.objLocation: array expected");
                    message.objLocation = [];
                    for (var i = 0; i < object.objLocation.length; ++i)
                        message.objLocation[i] = String(object.objLocation[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a BinaryValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {json_ipc.ValuesSequence.BinaryValue} message BinaryValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BinaryValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.objLocation = [];
                if (options.defaults)
                    if (options.bytes === String)
                        object.arr = "";
                    else {
                        object.arr = [];
                        if (options.bytes !== Array)
                            object.arr = $util.newBuffer(object.arr);
                    }
                if (message.arr != null && message.hasOwnProperty("arr"))
                    object.arr = options.bytes === String ? $util.base64.encode(message.arr, 0, message.arr.length) : options.bytes === Array ? Array.prototype.slice.call(message.arr) : message.arr;
                if (message.objLocation && message.objLocation.length) {
                    object.objLocation = [];
                    for (var j = 0; j < message.objLocation.length; ++j)
                        object.objLocation[j] = message.objLocation[j];
                }
                return object;
            };

            /**
             * Converts this BinaryValue to JSON.
             * @function toJSON
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BinaryValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BinaryValue
             * @function getTypeUrl
             * @memberof json_ipc.ValuesSequence.BinaryValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BinaryValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/json_ipc.ValuesSequence.BinaryValue";
            };

            return BinaryValue;
        })();

        ValuesSequence.TransferredObj = (function() {

            /**
             * Properties of a TransferredObj.
             * @memberof json_ipc.ValuesSequence
             * @interface ITransferredObj
             * @property {Array.<string>|null} [objLocation] TransferredObj objLocation
             * @property {common.IObjectReference|null} [objRef] TransferredObj objRef
             */

            /**
             * Constructs a new TransferredObj.
             * @memberof json_ipc.ValuesSequence
             * @classdesc Represents a TransferredObj.
             * @implements ITransferredObj
             * @constructor
             * @param {json_ipc.ValuesSequence.ITransferredObj=} [properties] Properties to set
             */
            function TransferredObj(properties) {
                this.objLocation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransferredObj objLocation.
             * @member {Array.<string>} objLocation
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @instance
             */
            TransferredObj.prototype.objLocation = $util.emptyArray;

            /**
             * TransferredObj objRef.
             * @member {common.IObjectReference|null|undefined} objRef
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @instance
             */
            TransferredObj.prototype.objRef = null;

            /**
             * Creates a new TransferredObj instance using the specified properties.
             * @function create
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {json_ipc.ValuesSequence.ITransferredObj=} [properties] Properties to set
             * @returns {json_ipc.ValuesSequence.TransferredObj} TransferredObj instance
             */
            TransferredObj.create = function create(properties) {
                return new TransferredObj(properties);
            };

            /**
             * Encodes the specified TransferredObj message. Does not implicitly {@link json_ipc.ValuesSequence.TransferredObj.verify|verify} messages.
             * @function encode
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {json_ipc.ValuesSequence.ITransferredObj} message TransferredObj message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransferredObj.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objLocation != null && message.objLocation.length)
                    for (var i = 0; i < message.objLocation.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.objLocation[i]);
                if (message.objRef != null && Object.hasOwnProperty.call(message, "objRef"))
                    $root.common.ObjectReference.encode(message.objRef, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TransferredObj message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.TransferredObj.verify|verify} messages.
             * @function encodeDelimited
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {json_ipc.ValuesSequence.ITransferredObj} message TransferredObj message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransferredObj.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransferredObj message from the specified reader or buffer.
             * @function decode
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {json_ipc.ValuesSequence.TransferredObj} TransferredObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransferredObj.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.json_ipc.ValuesSequence.TransferredObj();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.objLocation && message.objLocation.length))
                                message.objLocation = [];
                            message.objLocation.push(reader.string());
                            break;
                        }
                    case 2: {
                            message.objRef = $root.common.ObjectReference.decode(reader, reader.uint32());
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
             * Decodes a TransferredObj message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {json_ipc.ValuesSequence.TransferredObj} TransferredObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransferredObj.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransferredObj message.
             * @function verify
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TransferredObj.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objLocation != null && message.hasOwnProperty("objLocation")) {
                    if (!Array.isArray(message.objLocation))
                        return "objLocation: array expected";
                    for (var i = 0; i < message.objLocation.length; ++i)
                        if (!$util.isString(message.objLocation[i]))
                            return "objLocation: string[] expected";
                }
                if (message.objRef != null && message.hasOwnProperty("objRef")) {
                    var error = $root.common.ObjectReference.verify(message.objRef);
                    if (error)
                        return "objRef." + error;
                }
                return null;
            };

            /**
             * Creates a TransferredObj message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {json_ipc.ValuesSequence.TransferredObj} TransferredObj
             */
            TransferredObj.fromObject = function fromObject(object) {
                if (object instanceof $root.json_ipc.ValuesSequence.TransferredObj)
                    return object;
                var message = new $root.json_ipc.ValuesSequence.TransferredObj();
                if (object.objLocation) {
                    if (!Array.isArray(object.objLocation))
                        throw TypeError(".json_ipc.ValuesSequence.TransferredObj.objLocation: array expected");
                    message.objLocation = [];
                    for (var i = 0; i < object.objLocation.length; ++i)
                        message.objLocation[i] = String(object.objLocation[i]);
                }
                if (object.objRef != null) {
                    if (typeof object.objRef !== "object")
                        throw TypeError(".json_ipc.ValuesSequence.TransferredObj.objRef: object expected");
                    message.objRef = $root.common.ObjectReference.fromObject(object.objRef);
                }
                return message;
            };

            /**
             * Creates a plain object from a TransferredObj message. Also converts values to other types if specified.
             * @function toObject
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {json_ipc.ValuesSequence.TransferredObj} message TransferredObj
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransferredObj.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.objLocation = [];
                if (options.defaults)
                    object.objRef = null;
                if (message.objLocation && message.objLocation.length) {
                    object.objLocation = [];
                    for (var j = 0; j < message.objLocation.length; ++j)
                        object.objLocation[j] = message.objLocation[j];
                }
                if (message.objRef != null && message.hasOwnProperty("objRef"))
                    object.objRef = $root.common.ObjectReference.toObject(message.objRef, options);
                return object;
            };

            /**
             * Converts this TransferredObj to JSON.
             * @function toJSON
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TransferredObj.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TransferredObj
             * @function getTypeUrl
             * @memberof json_ipc.ValuesSequence.TransferredObj
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TransferredObj.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/json_ipc.ValuesSequence.TransferredObj";
            };

            return TransferredObj;
        })();

        ValuesSequence.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof json_ipc.ValuesSequence
             * @interface IValue
             * @property {string|null} [json] Value json
             * @property {Array.<json_ipc.ValuesSequence.IBinaryValue>|null} [binaryInJson] Value binaryInJson
             * @property {Array.<json_ipc.ValuesSequence.ITransferredObj>|null} [transferredInJson] Value transferredInJson
             * @property {json_ipc.ValuesSequence.IBinaryValue|null} [arr] Value arr
             * @property {json_ipc.ValuesSequence.ITransferredObj|null} [transferred] Value transferred
             */

            /**
             * Constructs a new Value.
             * @memberof json_ipc.ValuesSequence
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {json_ipc.ValuesSequence.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                this.binaryInJson = [];
                this.transferredInJson = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value json.
             * @member {string} json
             * @memberof json_ipc.ValuesSequence.Value
             * @instance
             */
            Value.prototype.json = "";

            /**
             * Value binaryInJson.
             * @member {Array.<json_ipc.ValuesSequence.IBinaryValue>} binaryInJson
             * @memberof json_ipc.ValuesSequence.Value
             * @instance
             */
            Value.prototype.binaryInJson = $util.emptyArray;

            /**
             * Value transferredInJson.
             * @member {Array.<json_ipc.ValuesSequence.ITransferredObj>} transferredInJson
             * @memberof json_ipc.ValuesSequence.Value
             * @instance
             */
            Value.prototype.transferredInJson = $util.emptyArray;

            /**
             * Value arr.
             * @member {json_ipc.ValuesSequence.IBinaryValue|null|undefined} arr
             * @memberof json_ipc.ValuesSequence.Value
             * @instance
             */
            Value.prototype.arr = null;

            /**
             * Value transferred.
             * @member {json_ipc.ValuesSequence.ITransferredObj|null|undefined} transferred
             * @memberof json_ipc.ValuesSequence.Value
             * @instance
             */
            Value.prototype.transferred = null;

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {json_ipc.ValuesSequence.IValue=} [properties] Properties to set
             * @returns {json_ipc.ValuesSequence.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link json_ipc.ValuesSequence.Value.verify|verify} messages.
             * @function encode
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {json_ipc.ValuesSequence.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.json);
                if (message.binaryInJson != null && message.binaryInJson.length)
                    for (var i = 0; i < message.binaryInJson.length; ++i)
                        $root.json_ipc.ValuesSequence.BinaryValue.encode(message.binaryInJson[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.transferredInJson != null && message.transferredInJson.length)
                    for (var i = 0; i < message.transferredInJson.length; ++i)
                        $root.json_ipc.ValuesSequence.TransferredObj.encode(message.transferredInJson[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.arr != null && Object.hasOwnProperty.call(message, "arr"))
                    $root.json_ipc.ValuesSequence.BinaryValue.encode(message.arr, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.transferred != null && Object.hasOwnProperty.call(message, "transferred"))
                    $root.json_ipc.ValuesSequence.TransferredObj.encode(message.transferred, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link json_ipc.ValuesSequence.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {json_ipc.ValuesSequence.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {json_ipc.ValuesSequence.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.json_ipc.ValuesSequence.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.json = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.binaryInJson && message.binaryInJson.length))
                                message.binaryInJson = [];
                            message.binaryInJson.push($root.json_ipc.ValuesSequence.BinaryValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.transferredInJson && message.transferredInJson.length))
                                message.transferredInJson = [];
                            message.transferredInJson.push($root.json_ipc.ValuesSequence.TransferredObj.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            message.arr = $root.json_ipc.ValuesSequence.BinaryValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.transferred = $root.json_ipc.ValuesSequence.TransferredObj.decode(reader, reader.uint32());
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
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {json_ipc.ValuesSequence.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.json != null && message.hasOwnProperty("json"))
                    if (!$util.isString(message.json))
                        return "json: string expected";
                if (message.binaryInJson != null && message.hasOwnProperty("binaryInJson")) {
                    if (!Array.isArray(message.binaryInJson))
                        return "binaryInJson: array expected";
                    for (var i = 0; i < message.binaryInJson.length; ++i) {
                        var error = $root.json_ipc.ValuesSequence.BinaryValue.verify(message.binaryInJson[i]);
                        if (error)
                            return "binaryInJson." + error;
                    }
                }
                if (message.transferredInJson != null && message.hasOwnProperty("transferredInJson")) {
                    if (!Array.isArray(message.transferredInJson))
                        return "transferredInJson: array expected";
                    for (var i = 0; i < message.transferredInJson.length; ++i) {
                        var error = $root.json_ipc.ValuesSequence.TransferredObj.verify(message.transferredInJson[i]);
                        if (error)
                            return "transferredInJson." + error;
                    }
                }
                if (message.arr != null && message.hasOwnProperty("arr")) {
                    var error = $root.json_ipc.ValuesSequence.BinaryValue.verify(message.arr);
                    if (error)
                        return "arr." + error;
                }
                if (message.transferred != null && message.hasOwnProperty("transferred")) {
                    var error = $root.json_ipc.ValuesSequence.TransferredObj.verify(message.transferred);
                    if (error)
                        return "transferred." + error;
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {json_ipc.ValuesSequence.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.json_ipc.ValuesSequence.Value)
                    return object;
                var message = new $root.json_ipc.ValuesSequence.Value();
                if (object.json != null)
                    message.json = String(object.json);
                if (object.binaryInJson) {
                    if (!Array.isArray(object.binaryInJson))
                        throw TypeError(".json_ipc.ValuesSequence.Value.binaryInJson: array expected");
                    message.binaryInJson = [];
                    for (var i = 0; i < object.binaryInJson.length; ++i) {
                        if (typeof object.binaryInJson[i] !== "object")
                            throw TypeError(".json_ipc.ValuesSequence.Value.binaryInJson: object expected");
                        message.binaryInJson[i] = $root.json_ipc.ValuesSequence.BinaryValue.fromObject(object.binaryInJson[i]);
                    }
                }
                if (object.transferredInJson) {
                    if (!Array.isArray(object.transferredInJson))
                        throw TypeError(".json_ipc.ValuesSequence.Value.transferredInJson: array expected");
                    message.transferredInJson = [];
                    for (var i = 0; i < object.transferredInJson.length; ++i) {
                        if (typeof object.transferredInJson[i] !== "object")
                            throw TypeError(".json_ipc.ValuesSequence.Value.transferredInJson: object expected");
                        message.transferredInJson[i] = $root.json_ipc.ValuesSequence.TransferredObj.fromObject(object.transferredInJson[i]);
                    }
                }
                if (object.arr != null) {
                    if (typeof object.arr !== "object")
                        throw TypeError(".json_ipc.ValuesSequence.Value.arr: object expected");
                    message.arr = $root.json_ipc.ValuesSequence.BinaryValue.fromObject(object.arr);
                }
                if (object.transferred != null) {
                    if (typeof object.transferred !== "object")
                        throw TypeError(".json_ipc.ValuesSequence.Value.transferred: object expected");
                    message.transferred = $root.json_ipc.ValuesSequence.TransferredObj.fromObject(object.transferred);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {json_ipc.ValuesSequence.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.binaryInJson = [];
                    object.transferredInJson = [];
                }
                if (options.defaults) {
                    object.json = "";
                    object.arr = null;
                    object.transferred = null;
                }
                if (message.json != null && message.hasOwnProperty("json"))
                    object.json = message.json;
                if (message.binaryInJson && message.binaryInJson.length) {
                    object.binaryInJson = [];
                    for (var j = 0; j < message.binaryInJson.length; ++j)
                        object.binaryInJson[j] = $root.json_ipc.ValuesSequence.BinaryValue.toObject(message.binaryInJson[j], options);
                }
                if (message.transferredInJson && message.transferredInJson.length) {
                    object.transferredInJson = [];
                    for (var j = 0; j < message.transferredInJson.length; ++j)
                        object.transferredInJson[j] = $root.json_ipc.ValuesSequence.TransferredObj.toObject(message.transferredInJson[j], options);
                }
                if (message.arr != null && message.hasOwnProperty("arr"))
                    object.arr = $root.json_ipc.ValuesSequence.BinaryValue.toObject(message.arr, options);
                if (message.transferred != null && message.hasOwnProperty("transferred"))
                    object.transferred = $root.json_ipc.ValuesSequence.TransferredObj.toObject(message.transferred, options);
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof json_ipc.ValuesSequence.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Value
             * @function getTypeUrl
             * @memberof json_ipc.ValuesSequence.Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/json_ipc.ValuesSequence.Value";
            };

            return Value;
        })();

        return ValuesSequence;
    })();

    return json_ipc;
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
