/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.file = (function() {

    /**
     * Namespace file.
     * @exports file
     * @namespace
     */
    var file = {};

    file.File = (function() {

        /**
         * Properties of a File.
         * @memberof file
         * @interface IFile
         * @property {boolean|null} [writable] File writable
         * @property {boolean|null} [isVersioned] File isVersioned
         * @property {string|null} [name] File name
         * @property {boolean|null} [isNew] File isNew
         * @property {common.IObjectReference|null} [impl] File impl
         * @property {boolean|null} [isSynced] File isSynced
         */

        /**
         * Constructs a new File.
         * @memberof file
         * @classdesc Represents a File.
         * @implements IFile
         * @constructor
         * @param {file.IFile=} [properties] Properties to set
         */
        function File(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * File writable.
         * @member {boolean} writable
         * @memberof file.File
         * @instance
         */
        File.prototype.writable = false;

        /**
         * File isVersioned.
         * @member {boolean} isVersioned
         * @memberof file.File
         * @instance
         */
        File.prototype.isVersioned = false;

        /**
         * File name.
         * @member {string} name
         * @memberof file.File
         * @instance
         */
        File.prototype.name = "";

        /**
         * File isNew.
         * @member {boolean} isNew
         * @memberof file.File
         * @instance
         */
        File.prototype.isNew = false;

        /**
         * File impl.
         * @member {common.IObjectReference|null|undefined} impl
         * @memberof file.File
         * @instance
         */
        File.prototype.impl = null;

        /**
         * File isSynced.
         * @member {boolean} isSynced
         * @memberof file.File
         * @instance
         */
        File.prototype.isSynced = false;

        /**
         * Creates a new File instance using the specified properties.
         * @function create
         * @memberof file.File
         * @static
         * @param {file.IFile=} [properties] Properties to set
         * @returns {file.File} File instance
         */
        File.create = function create(properties) {
            return new File(properties);
        };

        /**
         * Encodes the specified File message. Does not implicitly {@link file.File.verify|verify} messages.
         * @function encode
         * @memberof file.File
         * @static
         * @param {file.IFile} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.writable != null && Object.hasOwnProperty.call(message, "writable"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.writable);
            if (message.isVersioned != null && Object.hasOwnProperty.call(message, "isVersioned"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isVersioned);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.isNew != null && Object.hasOwnProperty.call(message, "isNew"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isNew);
            if (message.impl != null && Object.hasOwnProperty.call(message, "impl"))
                $root.common.ObjectReference.encode(message.impl, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.isSynced != null && Object.hasOwnProperty.call(message, "isSynced"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isSynced);
            return writer;
        };

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link file.File.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.File
         * @static
         * @param {file.IFile} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a File message from the specified reader or buffer.
         * @function decode
         * @memberof file.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.File();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.writable = reader.bool();
                        break;
                    }
                case 2: {
                        message.isVersioned = reader.bool();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.isNew = reader.bool();
                        break;
                    }
                case 5: {
                        message.impl = $root.common.ObjectReference.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.isSynced = reader.bool();
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
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a File message.
         * @function verify
         * @memberof file.File
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        File.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.writable != null && message.hasOwnProperty("writable"))
                if (typeof message.writable !== "boolean")
                    return "writable: boolean expected";
            if (message.isVersioned != null && message.hasOwnProperty("isVersioned"))
                if (typeof message.isVersioned !== "boolean")
                    return "isVersioned: boolean expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                if (typeof message.isNew !== "boolean")
                    return "isNew: boolean expected";
            if (message.impl != null && message.hasOwnProperty("impl")) {
                var error = $root.common.ObjectReference.verify(message.impl);
                if (error)
                    return "impl." + error;
            }
            if (message.isSynced != null && message.hasOwnProperty("isSynced"))
                if (typeof message.isSynced !== "boolean")
                    return "isSynced: boolean expected";
            return null;
        };

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.File
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.File} File
         */
        File.fromObject = function fromObject(object) {
            if (object instanceof $root.file.File)
                return object;
            var message = new $root.file.File();
            if (object.writable != null)
                message.writable = Boolean(object.writable);
            if (object.isVersioned != null)
                message.isVersioned = Boolean(object.isVersioned);
            if (object.name != null)
                message.name = String(object.name);
            if (object.isNew != null)
                message.isNew = Boolean(object.isNew);
            if (object.impl != null) {
                if (typeof object.impl !== "object")
                    throw TypeError(".file.File.impl: object expected");
                message.impl = $root.common.ObjectReference.fromObject(object.impl);
            }
            if (object.isSynced != null)
                message.isSynced = Boolean(object.isSynced);
            return message;
        };

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.File
         * @static
         * @param {file.File} message File
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        File.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.writable = false;
                object.isVersioned = false;
                object.name = "";
                object.isNew = false;
                object.impl = null;
                object.isSynced = false;
            }
            if (message.writable != null && message.hasOwnProperty("writable"))
                object.writable = message.writable;
            if (message.isVersioned != null && message.hasOwnProperty("isVersioned"))
                object.isVersioned = message.isVersioned;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                object.isNew = message.isNew;
            if (message.impl != null && message.hasOwnProperty("impl"))
                object.impl = $root.common.ObjectReference.toObject(message.impl, options);
            if (message.isSynced != null && message.hasOwnProperty("isSynced"))
                object.isSynced = message.isSynced;
            return object;
        };

        /**
         * Converts this File to JSON.
         * @function toJSON
         * @memberof file.File
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        File.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for File
         * @function getTypeUrl
         * @memberof file.File
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        File.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.File";
        };

        return File;
    })();

    file.SyncStatusMsg = (function() {

        /**
         * Properties of a SyncStatusMsg.
         * @memberof file
         * @interface ISyncStatusMsg
         * @property {string|null} [state] SyncStatusMsg state
         * @property {file.ISyncVersionsBranchMsg|null} [local] SyncStatusMsg local
         * @property {file.ISyncVersionsBranchMsg|null} [synced] SyncStatusMsg synced
         * @property {file.ISyncVersionsBranchMsg|null} [remote] SyncStatusMsg remote
         * @property {common.IBooleanValue|null} [existsInSyncedParent] SyncStatusMsg existsInSyncedParent
         * @property {file.IUploadingStateMsg|null} [uploading] SyncStatusMsg uploading
         */

        /**
         * Constructs a new SyncStatusMsg.
         * @memberof file
         * @classdesc Represents a SyncStatusMsg.
         * @implements ISyncStatusMsg
         * @constructor
         * @param {file.ISyncStatusMsg=} [properties] Properties to set
         */
        function SyncStatusMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncStatusMsg state.
         * @member {string} state
         * @memberof file.SyncStatusMsg
         * @instance
         */
        SyncStatusMsg.prototype.state = "";

        /**
         * SyncStatusMsg local.
         * @member {file.ISyncVersionsBranchMsg|null|undefined} local
         * @memberof file.SyncStatusMsg
         * @instance
         */
        SyncStatusMsg.prototype.local = null;

        /**
         * SyncStatusMsg synced.
         * @member {file.ISyncVersionsBranchMsg|null|undefined} synced
         * @memberof file.SyncStatusMsg
         * @instance
         */
        SyncStatusMsg.prototype.synced = null;

        /**
         * SyncStatusMsg remote.
         * @member {file.ISyncVersionsBranchMsg|null|undefined} remote
         * @memberof file.SyncStatusMsg
         * @instance
         */
        SyncStatusMsg.prototype.remote = null;

        /**
         * SyncStatusMsg existsInSyncedParent.
         * @member {common.IBooleanValue|null|undefined} existsInSyncedParent
         * @memberof file.SyncStatusMsg
         * @instance
         */
        SyncStatusMsg.prototype.existsInSyncedParent = null;

        /**
         * SyncStatusMsg uploading.
         * @member {file.IUploadingStateMsg|null|undefined} uploading
         * @memberof file.SyncStatusMsg
         * @instance
         */
        SyncStatusMsg.prototype.uploading = null;

        /**
         * Creates a new SyncStatusMsg instance using the specified properties.
         * @function create
         * @memberof file.SyncStatusMsg
         * @static
         * @param {file.ISyncStatusMsg=} [properties] Properties to set
         * @returns {file.SyncStatusMsg} SyncStatusMsg instance
         */
        SyncStatusMsg.create = function create(properties) {
            return new SyncStatusMsg(properties);
        };

        /**
         * Encodes the specified SyncStatusMsg message. Does not implicitly {@link file.SyncStatusMsg.verify|verify} messages.
         * @function encode
         * @memberof file.SyncStatusMsg
         * @static
         * @param {file.ISyncStatusMsg} message SyncStatusMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncStatusMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.state);
            if (message.local != null && Object.hasOwnProperty.call(message, "local"))
                $root.file.SyncVersionsBranchMsg.encode(message.local, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.synced != null && Object.hasOwnProperty.call(message, "synced"))
                $root.file.SyncVersionsBranchMsg.encode(message.synced, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.remote != null && Object.hasOwnProperty.call(message, "remote"))
                $root.file.SyncVersionsBranchMsg.encode(message.remote, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.existsInSyncedParent != null && Object.hasOwnProperty.call(message, "existsInSyncedParent"))
                $root.common.BooleanValue.encode(message.existsInSyncedParent, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.uploading != null && Object.hasOwnProperty.call(message, "uploading"))
                $root.file.UploadingStateMsg.encode(message.uploading, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncStatusMsg message, length delimited. Does not implicitly {@link file.SyncStatusMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.SyncStatusMsg
         * @static
         * @param {file.ISyncStatusMsg} message SyncStatusMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncStatusMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncStatusMsg message from the specified reader or buffer.
         * @function decode
         * @memberof file.SyncStatusMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.SyncStatusMsg} SyncStatusMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncStatusMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.SyncStatusMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.string();
                        break;
                    }
                case 2: {
                        message.local = $root.file.SyncVersionsBranchMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.synced = $root.file.SyncVersionsBranchMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.remote = $root.file.SyncVersionsBranchMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.existsInSyncedParent = $root.common.BooleanValue.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.uploading = $root.file.UploadingStateMsg.decode(reader, reader.uint32());
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
         * Decodes a SyncStatusMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.SyncStatusMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.SyncStatusMsg} SyncStatusMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncStatusMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncStatusMsg message.
         * @function verify
         * @memberof file.SyncStatusMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncStatusMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.local != null && message.hasOwnProperty("local")) {
                var error = $root.file.SyncVersionsBranchMsg.verify(message.local);
                if (error)
                    return "local." + error;
            }
            if (message.synced != null && message.hasOwnProperty("synced")) {
                var error = $root.file.SyncVersionsBranchMsg.verify(message.synced);
                if (error)
                    return "synced." + error;
            }
            if (message.remote != null && message.hasOwnProperty("remote")) {
                var error = $root.file.SyncVersionsBranchMsg.verify(message.remote);
                if (error)
                    return "remote." + error;
            }
            if (message.existsInSyncedParent != null && message.hasOwnProperty("existsInSyncedParent")) {
                var error = $root.common.BooleanValue.verify(message.existsInSyncedParent);
                if (error)
                    return "existsInSyncedParent." + error;
            }
            if (message.uploading != null && message.hasOwnProperty("uploading")) {
                var error = $root.file.UploadingStateMsg.verify(message.uploading);
                if (error)
                    return "uploading." + error;
            }
            return null;
        };

        /**
         * Creates a SyncStatusMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.SyncStatusMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.SyncStatusMsg} SyncStatusMsg
         */
        SyncStatusMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.file.SyncStatusMsg)
                return object;
            var message = new $root.file.SyncStatusMsg();
            if (object.state != null)
                message.state = String(object.state);
            if (object.local != null) {
                if (typeof object.local !== "object")
                    throw TypeError(".file.SyncStatusMsg.local: object expected");
                message.local = $root.file.SyncVersionsBranchMsg.fromObject(object.local);
            }
            if (object.synced != null) {
                if (typeof object.synced !== "object")
                    throw TypeError(".file.SyncStatusMsg.synced: object expected");
                message.synced = $root.file.SyncVersionsBranchMsg.fromObject(object.synced);
            }
            if (object.remote != null) {
                if (typeof object.remote !== "object")
                    throw TypeError(".file.SyncStatusMsg.remote: object expected");
                message.remote = $root.file.SyncVersionsBranchMsg.fromObject(object.remote);
            }
            if (object.existsInSyncedParent != null) {
                if (typeof object.existsInSyncedParent !== "object")
                    throw TypeError(".file.SyncStatusMsg.existsInSyncedParent: object expected");
                message.existsInSyncedParent = $root.common.BooleanValue.fromObject(object.existsInSyncedParent);
            }
            if (object.uploading != null) {
                if (typeof object.uploading !== "object")
                    throw TypeError(".file.SyncStatusMsg.uploading: object expected");
                message.uploading = $root.file.UploadingStateMsg.fromObject(object.uploading);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncStatusMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.SyncStatusMsg
         * @static
         * @param {file.SyncStatusMsg} message SyncStatusMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncStatusMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = "";
                object.local = null;
                object.synced = null;
                object.remote = null;
                object.existsInSyncedParent = null;
                object.uploading = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.local != null && message.hasOwnProperty("local"))
                object.local = $root.file.SyncVersionsBranchMsg.toObject(message.local, options);
            if (message.synced != null && message.hasOwnProperty("synced"))
                object.synced = $root.file.SyncVersionsBranchMsg.toObject(message.synced, options);
            if (message.remote != null && message.hasOwnProperty("remote"))
                object.remote = $root.file.SyncVersionsBranchMsg.toObject(message.remote, options);
            if (message.existsInSyncedParent != null && message.hasOwnProperty("existsInSyncedParent"))
                object.existsInSyncedParent = $root.common.BooleanValue.toObject(message.existsInSyncedParent, options);
            if (message.uploading != null && message.hasOwnProperty("uploading"))
                object.uploading = $root.file.UploadingStateMsg.toObject(message.uploading, options);
            return object;
        };

        /**
         * Converts this SyncStatusMsg to JSON.
         * @function toJSON
         * @memberof file.SyncStatusMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncStatusMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncStatusMsg
         * @function getTypeUrl
         * @memberof file.SyncStatusMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncStatusMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.SyncStatusMsg";
        };

        return SyncStatusMsg;
    })();

    file.SyncVersionsBranchMsg = (function() {

        /**
         * Properties of a SyncVersionsBranchMsg.
         * @memberof file
         * @interface ISyncVersionsBranchMsg
         * @property {common.IUInt64Value|null} [latest] SyncVersionsBranchMsg latest
         * @property {Array.<number|Long>|null} [archived] SyncVersionsBranchMsg archived
         * @property {common.IBooleanValue|null} [isArchived] SyncVersionsBranchMsg isArchived
         */

        /**
         * Constructs a new SyncVersionsBranchMsg.
         * @memberof file
         * @classdesc Represents a SyncVersionsBranchMsg.
         * @implements ISyncVersionsBranchMsg
         * @constructor
         * @param {file.ISyncVersionsBranchMsg=} [properties] Properties to set
         */
        function SyncVersionsBranchMsg(properties) {
            this.archived = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncVersionsBranchMsg latest.
         * @member {common.IUInt64Value|null|undefined} latest
         * @memberof file.SyncVersionsBranchMsg
         * @instance
         */
        SyncVersionsBranchMsg.prototype.latest = null;

        /**
         * SyncVersionsBranchMsg archived.
         * @member {Array.<number|Long>} archived
         * @memberof file.SyncVersionsBranchMsg
         * @instance
         */
        SyncVersionsBranchMsg.prototype.archived = $util.emptyArray;

        /**
         * SyncVersionsBranchMsg isArchived.
         * @member {common.IBooleanValue|null|undefined} isArchived
         * @memberof file.SyncVersionsBranchMsg
         * @instance
         */
        SyncVersionsBranchMsg.prototype.isArchived = null;

        /**
         * Creates a new SyncVersionsBranchMsg instance using the specified properties.
         * @function create
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {file.ISyncVersionsBranchMsg=} [properties] Properties to set
         * @returns {file.SyncVersionsBranchMsg} SyncVersionsBranchMsg instance
         */
        SyncVersionsBranchMsg.create = function create(properties) {
            return new SyncVersionsBranchMsg(properties);
        };

        /**
         * Encodes the specified SyncVersionsBranchMsg message. Does not implicitly {@link file.SyncVersionsBranchMsg.verify|verify} messages.
         * @function encode
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {file.ISyncVersionsBranchMsg} message SyncVersionsBranchMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncVersionsBranchMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latest != null && Object.hasOwnProperty.call(message, "latest"))
                $root.common.UInt64Value.encode(message.latest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.archived != null && message.archived.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.archived.length; ++i)
                    writer.uint64(message.archived[i]);
                writer.ldelim();
            }
            if (message.isArchived != null && Object.hasOwnProperty.call(message, "isArchived"))
                $root.common.BooleanValue.encode(message.isArchived, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncVersionsBranchMsg message, length delimited. Does not implicitly {@link file.SyncVersionsBranchMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {file.ISyncVersionsBranchMsg} message SyncVersionsBranchMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncVersionsBranchMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncVersionsBranchMsg message from the specified reader or buffer.
         * @function decode
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.SyncVersionsBranchMsg} SyncVersionsBranchMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncVersionsBranchMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.SyncVersionsBranchMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.latest = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.archived && message.archived.length))
                            message.archived = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.archived.push(reader.uint64());
                        } else
                            message.archived.push(reader.uint64());
                        break;
                    }
                case 3: {
                        message.isArchived = $root.common.BooleanValue.decode(reader, reader.uint32());
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
         * Decodes a SyncVersionsBranchMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.SyncVersionsBranchMsg} SyncVersionsBranchMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncVersionsBranchMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncVersionsBranchMsg message.
         * @function verify
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncVersionsBranchMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latest != null && message.hasOwnProperty("latest")) {
                var error = $root.common.UInt64Value.verify(message.latest);
                if (error)
                    return "latest." + error;
            }
            if (message.archived != null && message.hasOwnProperty("archived")) {
                if (!Array.isArray(message.archived))
                    return "archived: array expected";
                for (var i = 0; i < message.archived.length; ++i)
                    if (!$util.isInteger(message.archived[i]) && !(message.archived[i] && $util.isInteger(message.archived[i].low) && $util.isInteger(message.archived[i].high)))
                        return "archived: integer|Long[] expected";
            }
            if (message.isArchived != null && message.hasOwnProperty("isArchived")) {
                var error = $root.common.BooleanValue.verify(message.isArchived);
                if (error)
                    return "isArchived." + error;
            }
            return null;
        };

        /**
         * Creates a SyncVersionsBranchMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.SyncVersionsBranchMsg} SyncVersionsBranchMsg
         */
        SyncVersionsBranchMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.file.SyncVersionsBranchMsg)
                return object;
            var message = new $root.file.SyncVersionsBranchMsg();
            if (object.latest != null) {
                if (typeof object.latest !== "object")
                    throw TypeError(".file.SyncVersionsBranchMsg.latest: object expected");
                message.latest = $root.common.UInt64Value.fromObject(object.latest);
            }
            if (object.archived) {
                if (!Array.isArray(object.archived))
                    throw TypeError(".file.SyncVersionsBranchMsg.archived: array expected");
                message.archived = [];
                for (var i = 0; i < object.archived.length; ++i)
                    if ($util.Long)
                        (message.archived[i] = $util.Long.fromValue(object.archived[i])).unsigned = true;
                    else if (typeof object.archived[i] === "string")
                        message.archived[i] = parseInt(object.archived[i], 10);
                    else if (typeof object.archived[i] === "number")
                        message.archived[i] = object.archived[i];
                    else if (typeof object.archived[i] === "object")
                        message.archived[i] = new $util.LongBits(object.archived[i].low >>> 0, object.archived[i].high >>> 0).toNumber(true);
            }
            if (object.isArchived != null) {
                if (typeof object.isArchived !== "object")
                    throw TypeError(".file.SyncVersionsBranchMsg.isArchived: object expected");
                message.isArchived = $root.common.BooleanValue.fromObject(object.isArchived);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncVersionsBranchMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {file.SyncVersionsBranchMsg} message SyncVersionsBranchMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncVersionsBranchMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.archived = [];
            if (options.defaults) {
                object.latest = null;
                object.isArchived = null;
            }
            if (message.latest != null && message.hasOwnProperty("latest"))
                object.latest = $root.common.UInt64Value.toObject(message.latest, options);
            if (message.archived && message.archived.length) {
                object.archived = [];
                for (var j = 0; j < message.archived.length; ++j)
                    if (typeof message.archived[j] === "number")
                        object.archived[j] = options.longs === String ? String(message.archived[j]) : message.archived[j];
                    else
                        object.archived[j] = options.longs === String ? $util.Long.prototype.toString.call(message.archived[j]) : options.longs === Number ? new $util.LongBits(message.archived[j].low >>> 0, message.archived[j].high >>> 0).toNumber(true) : message.archived[j];
            }
            if (message.isArchived != null && message.hasOwnProperty("isArchived"))
                object.isArchived = $root.common.BooleanValue.toObject(message.isArchived, options);
            return object;
        };

        /**
         * Converts this SyncVersionsBranchMsg to JSON.
         * @function toJSON
         * @memberof file.SyncVersionsBranchMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncVersionsBranchMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncVersionsBranchMsg
         * @function getTypeUrl
         * @memberof file.SyncVersionsBranchMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncVersionsBranchMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.SyncVersionsBranchMsg";
        };

        return SyncVersionsBranchMsg;
    })();

    file.UploadingStateMsg = (function() {

        /**
         * Properties of an UploadingStateMsg.
         * @memberof file
         * @interface IUploadingStateMsg
         * @property {number|Long|null} [localVersion] UploadingStateMsg localVersion
         * @property {number|Long|null} [remoteVersion] UploadingStateMsg remoteVersion
         * @property {number|Long|null} [bytesLeftToUpload] UploadingStateMsg bytesLeftToUpload
         * @property {boolean|null} [uploadStarted] UploadingStateMsg uploadStarted
         */

        /**
         * Constructs a new UploadingStateMsg.
         * @memberof file
         * @classdesc Represents an UploadingStateMsg.
         * @implements IUploadingStateMsg
         * @constructor
         * @param {file.IUploadingStateMsg=} [properties] Properties to set
         */
        function UploadingStateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadingStateMsg localVersion.
         * @member {number|Long} localVersion
         * @memberof file.UploadingStateMsg
         * @instance
         */
        UploadingStateMsg.prototype.localVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UploadingStateMsg remoteVersion.
         * @member {number|Long} remoteVersion
         * @memberof file.UploadingStateMsg
         * @instance
         */
        UploadingStateMsg.prototype.remoteVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UploadingStateMsg bytesLeftToUpload.
         * @member {number|Long} bytesLeftToUpload
         * @memberof file.UploadingStateMsg
         * @instance
         */
        UploadingStateMsg.prototype.bytesLeftToUpload = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UploadingStateMsg uploadStarted.
         * @member {boolean} uploadStarted
         * @memberof file.UploadingStateMsg
         * @instance
         */
        UploadingStateMsg.prototype.uploadStarted = false;

        /**
         * Creates a new UploadingStateMsg instance using the specified properties.
         * @function create
         * @memberof file.UploadingStateMsg
         * @static
         * @param {file.IUploadingStateMsg=} [properties] Properties to set
         * @returns {file.UploadingStateMsg} UploadingStateMsg instance
         */
        UploadingStateMsg.create = function create(properties) {
            return new UploadingStateMsg(properties);
        };

        /**
         * Encodes the specified UploadingStateMsg message. Does not implicitly {@link file.UploadingStateMsg.verify|verify} messages.
         * @function encode
         * @memberof file.UploadingStateMsg
         * @static
         * @param {file.IUploadingStateMsg} message UploadingStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadingStateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localVersion != null && Object.hasOwnProperty.call(message, "localVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.localVersion);
            if (message.remoteVersion != null && Object.hasOwnProperty.call(message, "remoteVersion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.remoteVersion);
            if (message.bytesLeftToUpload != null && Object.hasOwnProperty.call(message, "bytesLeftToUpload"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.bytesLeftToUpload);
            if (message.uploadStarted != null && Object.hasOwnProperty.call(message, "uploadStarted"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.uploadStarted);
            return writer;
        };

        /**
         * Encodes the specified UploadingStateMsg message, length delimited. Does not implicitly {@link file.UploadingStateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.UploadingStateMsg
         * @static
         * @param {file.IUploadingStateMsg} message UploadingStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadingStateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadingStateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof file.UploadingStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.UploadingStateMsg} UploadingStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadingStateMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.UploadingStateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.localVersion = reader.uint64();
                        break;
                    }
                case 2: {
                        message.remoteVersion = reader.uint64();
                        break;
                    }
                case 3: {
                        message.bytesLeftToUpload = reader.uint64();
                        break;
                    }
                case 4: {
                        message.uploadStarted = reader.bool();
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
         * Decodes an UploadingStateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.UploadingStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.UploadingStateMsg} UploadingStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadingStateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadingStateMsg message.
         * @function verify
         * @memberof file.UploadingStateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadingStateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.localVersion != null && message.hasOwnProperty("localVersion"))
                if (!$util.isInteger(message.localVersion) && !(message.localVersion && $util.isInteger(message.localVersion.low) && $util.isInteger(message.localVersion.high)))
                    return "localVersion: integer|Long expected";
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion"))
                if (!$util.isInteger(message.remoteVersion) && !(message.remoteVersion && $util.isInteger(message.remoteVersion.low) && $util.isInteger(message.remoteVersion.high)))
                    return "remoteVersion: integer|Long expected";
            if (message.bytesLeftToUpload != null && message.hasOwnProperty("bytesLeftToUpload"))
                if (!$util.isInteger(message.bytesLeftToUpload) && !(message.bytesLeftToUpload && $util.isInteger(message.bytesLeftToUpload.low) && $util.isInteger(message.bytesLeftToUpload.high)))
                    return "bytesLeftToUpload: integer|Long expected";
            if (message.uploadStarted != null && message.hasOwnProperty("uploadStarted"))
                if (typeof message.uploadStarted !== "boolean")
                    return "uploadStarted: boolean expected";
            return null;
        };

        /**
         * Creates an UploadingStateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.UploadingStateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.UploadingStateMsg} UploadingStateMsg
         */
        UploadingStateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.file.UploadingStateMsg)
                return object;
            var message = new $root.file.UploadingStateMsg();
            if (object.localVersion != null)
                if ($util.Long)
                    (message.localVersion = $util.Long.fromValue(object.localVersion)).unsigned = true;
                else if (typeof object.localVersion === "string")
                    message.localVersion = parseInt(object.localVersion, 10);
                else if (typeof object.localVersion === "number")
                    message.localVersion = object.localVersion;
                else if (typeof object.localVersion === "object")
                    message.localVersion = new $util.LongBits(object.localVersion.low >>> 0, object.localVersion.high >>> 0).toNumber(true);
            if (object.remoteVersion != null)
                if ($util.Long)
                    (message.remoteVersion = $util.Long.fromValue(object.remoteVersion)).unsigned = true;
                else if (typeof object.remoteVersion === "string")
                    message.remoteVersion = parseInt(object.remoteVersion, 10);
                else if (typeof object.remoteVersion === "number")
                    message.remoteVersion = object.remoteVersion;
                else if (typeof object.remoteVersion === "object")
                    message.remoteVersion = new $util.LongBits(object.remoteVersion.low >>> 0, object.remoteVersion.high >>> 0).toNumber(true);
            if (object.bytesLeftToUpload != null)
                if ($util.Long)
                    (message.bytesLeftToUpload = $util.Long.fromValue(object.bytesLeftToUpload)).unsigned = true;
                else if (typeof object.bytesLeftToUpload === "string")
                    message.bytesLeftToUpload = parseInt(object.bytesLeftToUpload, 10);
                else if (typeof object.bytesLeftToUpload === "number")
                    message.bytesLeftToUpload = object.bytesLeftToUpload;
                else if (typeof object.bytesLeftToUpload === "object")
                    message.bytesLeftToUpload = new $util.LongBits(object.bytesLeftToUpload.low >>> 0, object.bytesLeftToUpload.high >>> 0).toNumber(true);
            if (object.uploadStarted != null)
                message.uploadStarted = Boolean(object.uploadStarted);
            return message;
        };

        /**
         * Creates a plain object from an UploadingStateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.UploadingStateMsg
         * @static
         * @param {file.UploadingStateMsg} message UploadingStateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadingStateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.localVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.localVersion = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.remoteVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.remoteVersion = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytesLeftToUpload = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytesLeftToUpload = options.longs === String ? "0" : 0;
                object.uploadStarted = false;
            }
            if (message.localVersion != null && message.hasOwnProperty("localVersion"))
                if (typeof message.localVersion === "number")
                    object.localVersion = options.longs === String ? String(message.localVersion) : message.localVersion;
                else
                    object.localVersion = options.longs === String ? $util.Long.prototype.toString.call(message.localVersion) : options.longs === Number ? new $util.LongBits(message.localVersion.low >>> 0, message.localVersion.high >>> 0).toNumber(true) : message.localVersion;
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion"))
                if (typeof message.remoteVersion === "number")
                    object.remoteVersion = options.longs === String ? String(message.remoteVersion) : message.remoteVersion;
                else
                    object.remoteVersion = options.longs === String ? $util.Long.prototype.toString.call(message.remoteVersion) : options.longs === Number ? new $util.LongBits(message.remoteVersion.low >>> 0, message.remoteVersion.high >>> 0).toNumber(true) : message.remoteVersion;
            if (message.bytesLeftToUpload != null && message.hasOwnProperty("bytesLeftToUpload"))
                if (typeof message.bytesLeftToUpload === "number")
                    object.bytesLeftToUpload = options.longs === String ? String(message.bytesLeftToUpload) : message.bytesLeftToUpload;
                else
                    object.bytesLeftToUpload = options.longs === String ? $util.Long.prototype.toString.call(message.bytesLeftToUpload) : options.longs === Number ? new $util.LongBits(message.bytesLeftToUpload.low >>> 0, message.bytesLeftToUpload.high >>> 0).toNumber(true) : message.bytesLeftToUpload;
            if (message.uploadStarted != null && message.hasOwnProperty("uploadStarted"))
                object.uploadStarted = message.uploadStarted;
            return object;
        };

        /**
         * Converts this UploadingStateMsg to JSON.
         * @function toJSON
         * @memberof file.UploadingStateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadingStateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadingStateMsg
         * @function getTypeUrl
         * @memberof file.UploadingStateMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadingStateMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.UploadingStateMsg";
        };

        return UploadingStateMsg;
    })();

    file.StatsMsg = (function() {

        /**
         * Properties of a StatsMsg.
         * @memberof file
         * @interface IStatsMsg
         * @property {common.IBooleanValue|null} [isFile] StatsMsg isFile
         * @property {common.IBooleanValue|null} [isFolder] StatsMsg isFolder
         * @property {common.IBooleanValue|null} [isLink] StatsMsg isLink
         * @property {boolean|null} [writable] StatsMsg writable
         * @property {common.IUInt64Value|null} [size] StatsMsg size
         * @property {common.IUInt64Value|null} [mtime] StatsMsg mtime
         * @property {common.IUInt64Value|null} [ctime] StatsMsg ctime
         * @property {common.IUInt64Value|null} [version] StatsMsg version
         * @property {common.IUInt64Value|null} [bytesNeedDownload] StatsMsg bytesNeedDownload
         * @property {common.IStringValue|null} [versionSyncBranch] StatsMsg versionSyncBranch
         */

        /**
         * Constructs a new StatsMsg.
         * @memberof file
         * @classdesc Represents a StatsMsg.
         * @implements IStatsMsg
         * @constructor
         * @param {file.IStatsMsg=} [properties] Properties to set
         */
        function StatsMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StatsMsg isFile.
         * @member {common.IBooleanValue|null|undefined} isFile
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.isFile = null;

        /**
         * StatsMsg isFolder.
         * @member {common.IBooleanValue|null|undefined} isFolder
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.isFolder = null;

        /**
         * StatsMsg isLink.
         * @member {common.IBooleanValue|null|undefined} isLink
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.isLink = null;

        /**
         * StatsMsg writable.
         * @member {boolean} writable
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.writable = false;

        /**
         * StatsMsg size.
         * @member {common.IUInt64Value|null|undefined} size
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.size = null;

        /**
         * StatsMsg mtime.
         * @member {common.IUInt64Value|null|undefined} mtime
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.mtime = null;

        /**
         * StatsMsg ctime.
         * @member {common.IUInt64Value|null|undefined} ctime
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.ctime = null;

        /**
         * StatsMsg version.
         * @member {common.IUInt64Value|null|undefined} version
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.version = null;

        /**
         * StatsMsg bytesNeedDownload.
         * @member {common.IUInt64Value|null|undefined} bytesNeedDownload
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.bytesNeedDownload = null;

        /**
         * StatsMsg versionSyncBranch.
         * @member {common.IStringValue|null|undefined} versionSyncBranch
         * @memberof file.StatsMsg
         * @instance
         */
        StatsMsg.prototype.versionSyncBranch = null;

        /**
         * Creates a new StatsMsg instance using the specified properties.
         * @function create
         * @memberof file.StatsMsg
         * @static
         * @param {file.IStatsMsg=} [properties] Properties to set
         * @returns {file.StatsMsg} StatsMsg instance
         */
        StatsMsg.create = function create(properties) {
            return new StatsMsg(properties);
        };

        /**
         * Encodes the specified StatsMsg message. Does not implicitly {@link file.StatsMsg.verify|verify} messages.
         * @function encode
         * @memberof file.StatsMsg
         * @static
         * @param {file.IStatsMsg} message StatsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isFile != null && Object.hasOwnProperty.call(message, "isFile"))
                $root.common.BooleanValue.encode(message.isFile, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isFolder != null && Object.hasOwnProperty.call(message, "isFolder"))
                $root.common.BooleanValue.encode(message.isFolder, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.isLink != null && Object.hasOwnProperty.call(message, "isLink"))
                $root.common.BooleanValue.encode(message.isLink, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.writable != null && Object.hasOwnProperty.call(message, "writable"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.writable);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                $root.common.UInt64Value.encode(message.size, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.mtime != null && Object.hasOwnProperty.call(message, "mtime"))
                $root.common.UInt64Value.encode(message.mtime, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.ctime != null && Object.hasOwnProperty.call(message, "ctime"))
                $root.common.UInt64Value.encode(message.ctime, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                $root.common.UInt64Value.encode(message.version, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.bytesNeedDownload != null && Object.hasOwnProperty.call(message, "bytesNeedDownload"))
                $root.common.UInt64Value.encode(message.bytesNeedDownload, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.versionSyncBranch != null && Object.hasOwnProperty.call(message, "versionSyncBranch"))
                $root.common.StringValue.encode(message.versionSyncBranch, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StatsMsg message, length delimited. Does not implicitly {@link file.StatsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.StatsMsg
         * @static
         * @param {file.IStatsMsg} message StatsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StatsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof file.StatsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.StatsMsg} StatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatsMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.StatsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.isFile = $root.common.BooleanValue.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.isFolder = $root.common.BooleanValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.isLink = $root.common.BooleanValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.writable = reader.bool();
                        break;
                    }
                case 5: {
                        message.size = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.mtime = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.ctime = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.version = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.bytesNeedDownload = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.versionSyncBranch = $root.common.StringValue.decode(reader, reader.uint32());
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
         * Decodes a StatsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.StatsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.StatsMsg} StatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StatsMsg message.
         * @function verify
         * @memberof file.StatsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StatsMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isFile != null && message.hasOwnProperty("isFile")) {
                var error = $root.common.BooleanValue.verify(message.isFile);
                if (error)
                    return "isFile." + error;
            }
            if (message.isFolder != null && message.hasOwnProperty("isFolder")) {
                var error = $root.common.BooleanValue.verify(message.isFolder);
                if (error)
                    return "isFolder." + error;
            }
            if (message.isLink != null && message.hasOwnProperty("isLink")) {
                var error = $root.common.BooleanValue.verify(message.isLink);
                if (error)
                    return "isLink." + error;
            }
            if (message.writable != null && message.hasOwnProperty("writable"))
                if (typeof message.writable !== "boolean")
                    return "writable: boolean expected";
            if (message.size != null && message.hasOwnProperty("size")) {
                var error = $root.common.UInt64Value.verify(message.size);
                if (error)
                    return "size." + error;
            }
            if (message.mtime != null && message.hasOwnProperty("mtime")) {
                var error = $root.common.UInt64Value.verify(message.mtime);
                if (error)
                    return "mtime." + error;
            }
            if (message.ctime != null && message.hasOwnProperty("ctime")) {
                var error = $root.common.UInt64Value.verify(message.ctime);
                if (error)
                    return "ctime." + error;
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                var error = $root.common.UInt64Value.verify(message.version);
                if (error)
                    return "version." + error;
            }
            if (message.bytesNeedDownload != null && message.hasOwnProperty("bytesNeedDownload")) {
                var error = $root.common.UInt64Value.verify(message.bytesNeedDownload);
                if (error)
                    return "bytesNeedDownload." + error;
            }
            if (message.versionSyncBranch != null && message.hasOwnProperty("versionSyncBranch")) {
                var error = $root.common.StringValue.verify(message.versionSyncBranch);
                if (error)
                    return "versionSyncBranch." + error;
            }
            return null;
        };

        /**
         * Creates a StatsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.StatsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.StatsMsg} StatsMsg
         */
        StatsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.file.StatsMsg)
                return object;
            var message = new $root.file.StatsMsg();
            if (object.isFile != null) {
                if (typeof object.isFile !== "object")
                    throw TypeError(".file.StatsMsg.isFile: object expected");
                message.isFile = $root.common.BooleanValue.fromObject(object.isFile);
            }
            if (object.isFolder != null) {
                if (typeof object.isFolder !== "object")
                    throw TypeError(".file.StatsMsg.isFolder: object expected");
                message.isFolder = $root.common.BooleanValue.fromObject(object.isFolder);
            }
            if (object.isLink != null) {
                if (typeof object.isLink !== "object")
                    throw TypeError(".file.StatsMsg.isLink: object expected");
                message.isLink = $root.common.BooleanValue.fromObject(object.isLink);
            }
            if (object.writable != null)
                message.writable = Boolean(object.writable);
            if (object.size != null) {
                if (typeof object.size !== "object")
                    throw TypeError(".file.StatsMsg.size: object expected");
                message.size = $root.common.UInt64Value.fromObject(object.size);
            }
            if (object.mtime != null) {
                if (typeof object.mtime !== "object")
                    throw TypeError(".file.StatsMsg.mtime: object expected");
                message.mtime = $root.common.UInt64Value.fromObject(object.mtime);
            }
            if (object.ctime != null) {
                if (typeof object.ctime !== "object")
                    throw TypeError(".file.StatsMsg.ctime: object expected");
                message.ctime = $root.common.UInt64Value.fromObject(object.ctime);
            }
            if (object.version != null) {
                if (typeof object.version !== "object")
                    throw TypeError(".file.StatsMsg.version: object expected");
                message.version = $root.common.UInt64Value.fromObject(object.version);
            }
            if (object.bytesNeedDownload != null) {
                if (typeof object.bytesNeedDownload !== "object")
                    throw TypeError(".file.StatsMsg.bytesNeedDownload: object expected");
                message.bytesNeedDownload = $root.common.UInt64Value.fromObject(object.bytesNeedDownload);
            }
            if (object.versionSyncBranch != null) {
                if (typeof object.versionSyncBranch !== "object")
                    throw TypeError(".file.StatsMsg.versionSyncBranch: object expected");
                message.versionSyncBranch = $root.common.StringValue.fromObject(object.versionSyncBranch);
            }
            return message;
        };

        /**
         * Creates a plain object from a StatsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.StatsMsg
         * @static
         * @param {file.StatsMsg} message StatsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StatsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isFile = null;
                object.isFolder = null;
                object.isLink = null;
                object.writable = false;
                object.size = null;
                object.mtime = null;
                object.ctime = null;
                object.version = null;
                object.bytesNeedDownload = null;
                object.versionSyncBranch = null;
            }
            if (message.isFile != null && message.hasOwnProperty("isFile"))
                object.isFile = $root.common.BooleanValue.toObject(message.isFile, options);
            if (message.isFolder != null && message.hasOwnProperty("isFolder"))
                object.isFolder = $root.common.BooleanValue.toObject(message.isFolder, options);
            if (message.isLink != null && message.hasOwnProperty("isLink"))
                object.isLink = $root.common.BooleanValue.toObject(message.isLink, options);
            if (message.writable != null && message.hasOwnProperty("writable"))
                object.writable = message.writable;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = $root.common.UInt64Value.toObject(message.size, options);
            if (message.mtime != null && message.hasOwnProperty("mtime"))
                object.mtime = $root.common.UInt64Value.toObject(message.mtime, options);
            if (message.ctime != null && message.hasOwnProperty("ctime"))
                object.ctime = $root.common.UInt64Value.toObject(message.ctime, options);
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = $root.common.UInt64Value.toObject(message.version, options);
            if (message.bytesNeedDownload != null && message.hasOwnProperty("bytesNeedDownload"))
                object.bytesNeedDownload = $root.common.UInt64Value.toObject(message.bytesNeedDownload, options);
            if (message.versionSyncBranch != null && message.hasOwnProperty("versionSyncBranch"))
                object.versionSyncBranch = $root.common.StringValue.toObject(message.versionSyncBranch, options);
            return object;
        };

        /**
         * Converts this StatsMsg to JSON.
         * @function toJSON
         * @memberof file.StatsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StatsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StatsMsg
         * @function getTypeUrl
         * @memberof file.StatsMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StatsMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.StatsMsg";
        };

        return StatsMsg;
    })();

    file.GetXAttrRequestBody = (function() {

        /**
         * Properties of a GetXAttrRequestBody.
         * @memberof file
         * @interface IGetXAttrRequestBody
         * @property {string|null} [xaName] GetXAttrRequestBody xaName
         */

        /**
         * Constructs a new GetXAttrRequestBody.
         * @memberof file
         * @classdesc Represents a GetXAttrRequestBody.
         * @implements IGetXAttrRequestBody
         * @constructor
         * @param {file.IGetXAttrRequestBody=} [properties] Properties to set
         */
        function GetXAttrRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetXAttrRequestBody xaName.
         * @member {string} xaName
         * @memberof file.GetXAttrRequestBody
         * @instance
         */
        GetXAttrRequestBody.prototype.xaName = "";

        /**
         * Creates a new GetXAttrRequestBody instance using the specified properties.
         * @function create
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {file.IGetXAttrRequestBody=} [properties] Properties to set
         * @returns {file.GetXAttrRequestBody} GetXAttrRequestBody instance
         */
        GetXAttrRequestBody.create = function create(properties) {
            return new GetXAttrRequestBody(properties);
        };

        /**
         * Encodes the specified GetXAttrRequestBody message. Does not implicitly {@link file.GetXAttrRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {file.IGetXAttrRequestBody} message GetXAttrRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetXAttrRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.xaName != null && Object.hasOwnProperty.call(message, "xaName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.xaName);
            return writer;
        };

        /**
         * Encodes the specified GetXAttrRequestBody message, length delimited. Does not implicitly {@link file.GetXAttrRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {file.IGetXAttrRequestBody} message GetXAttrRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetXAttrRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetXAttrRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.GetXAttrRequestBody} GetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetXAttrRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.GetXAttrRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.xaName = reader.string();
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
         * Decodes a GetXAttrRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.GetXAttrRequestBody} GetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetXAttrRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetXAttrRequestBody message.
         * @function verify
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetXAttrRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.xaName != null && message.hasOwnProperty("xaName"))
                if (!$util.isString(message.xaName))
                    return "xaName: string expected";
            return null;
        };

        /**
         * Creates a GetXAttrRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.GetXAttrRequestBody} GetXAttrRequestBody
         */
        GetXAttrRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.GetXAttrRequestBody)
                return object;
            var message = new $root.file.GetXAttrRequestBody();
            if (object.xaName != null)
                message.xaName = String(object.xaName);
            return message;
        };

        /**
         * Creates a plain object from a GetXAttrRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {file.GetXAttrRequestBody} message GetXAttrRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetXAttrRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.xaName = "";
            if (message.xaName != null && message.hasOwnProperty("xaName"))
                object.xaName = message.xaName;
            return object;
        };

        /**
         * Converts this GetXAttrRequestBody to JSON.
         * @function toJSON
         * @memberof file.GetXAttrRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetXAttrRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetXAttrRequestBody
         * @function getTypeUrl
         * @memberof file.GetXAttrRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetXAttrRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.GetXAttrRequestBody";
        };

        return GetXAttrRequestBody;
    })();

    file.XAttrValue = (function() {

        /**
         * Properties of a XAttrValue.
         * @memberof file
         * @interface IXAttrValue
         * @property {common.IStringValue|null} [str] XAttrValue str
         * @property {common.IStringValue|null} [json] XAttrValue json
         * @property {common.IBytesValue|null} [bytes] XAttrValue bytes
         */

        /**
         * Constructs a new XAttrValue.
         * @memberof file
         * @classdesc Represents a XAttrValue.
         * @implements IXAttrValue
         * @constructor
         * @param {file.IXAttrValue=} [properties] Properties to set
         */
        function XAttrValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XAttrValue str.
         * @member {common.IStringValue|null|undefined} str
         * @memberof file.XAttrValue
         * @instance
         */
        XAttrValue.prototype.str = null;

        /**
         * XAttrValue json.
         * @member {common.IStringValue|null|undefined} json
         * @memberof file.XAttrValue
         * @instance
         */
        XAttrValue.prototype.json = null;

        /**
         * XAttrValue bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof file.XAttrValue
         * @instance
         */
        XAttrValue.prototype.bytes = null;

        /**
         * Creates a new XAttrValue instance using the specified properties.
         * @function create
         * @memberof file.XAttrValue
         * @static
         * @param {file.IXAttrValue=} [properties] Properties to set
         * @returns {file.XAttrValue} XAttrValue instance
         */
        XAttrValue.create = function create(properties) {
            return new XAttrValue(properties);
        };

        /**
         * Encodes the specified XAttrValue message. Does not implicitly {@link file.XAttrValue.verify|verify} messages.
         * @function encode
         * @memberof file.XAttrValue
         * @static
         * @param {file.IXAttrValue} message XAttrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XAttrValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                $root.common.StringValue.encode(message.str, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                $root.common.StringValue.encode(message.json, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified XAttrValue message, length delimited. Does not implicitly {@link file.XAttrValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.XAttrValue
         * @static
         * @param {file.IXAttrValue} message XAttrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XAttrValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XAttrValue message from the specified reader or buffer.
         * @function decode
         * @memberof file.XAttrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.XAttrValue} XAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XAttrValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.XAttrValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.str = $root.common.StringValue.decode(reader, reader.uint32());
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
         * Decodes a XAttrValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.XAttrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.XAttrValue} XAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XAttrValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XAttrValue message.
         * @function verify
         * @memberof file.XAttrValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XAttrValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.str != null && message.hasOwnProperty("str")) {
                var error = $root.common.StringValue.verify(message.str);
                if (error)
                    return "str." + error;
            }
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
         * Creates a XAttrValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.XAttrValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.XAttrValue} XAttrValue
         */
        XAttrValue.fromObject = function fromObject(object) {
            if (object instanceof $root.file.XAttrValue)
                return object;
            var message = new $root.file.XAttrValue();
            if (object.str != null) {
                if (typeof object.str !== "object")
                    throw TypeError(".file.XAttrValue.str: object expected");
                message.str = $root.common.StringValue.fromObject(object.str);
            }
            if (object.json != null) {
                if (typeof object.json !== "object")
                    throw TypeError(".file.XAttrValue.json: object expected");
                message.json = $root.common.StringValue.fromObject(object.json);
            }
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".file.XAttrValue.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a XAttrValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.XAttrValue
         * @static
         * @param {file.XAttrValue} message XAttrValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        XAttrValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.str = null;
                object.json = null;
                object.bytes = null;
            }
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = $root.common.StringValue.toObject(message.str, options);
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = $root.common.StringValue.toObject(message.json, options);
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this XAttrValue to JSON.
         * @function toJSON
         * @memberof file.XAttrValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        XAttrValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for XAttrValue
         * @function getTypeUrl
         * @memberof file.XAttrValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        XAttrValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.XAttrValue";
        };

        return XAttrValue;
    })();

    file.ReadBytesRequestBody = (function() {

        /**
         * Properties of a ReadBytesRequestBody.
         * @memberof file
         * @interface IReadBytesRequestBody
         * @property {common.IUInt64Value|null} [start] ReadBytesRequestBody start
         * @property {common.IUInt64Value|null} [end] ReadBytesRequestBody end
         */

        /**
         * Constructs a new ReadBytesRequestBody.
         * @memberof file
         * @classdesc Represents a ReadBytesRequestBody.
         * @implements IReadBytesRequestBody
         * @constructor
         * @param {file.IReadBytesRequestBody=} [properties] Properties to set
         */
        function ReadBytesRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadBytesRequestBody start.
         * @member {common.IUInt64Value|null|undefined} start
         * @memberof file.ReadBytesRequestBody
         * @instance
         */
        ReadBytesRequestBody.prototype.start = null;

        /**
         * ReadBytesRequestBody end.
         * @member {common.IUInt64Value|null|undefined} end
         * @memberof file.ReadBytesRequestBody
         * @instance
         */
        ReadBytesRequestBody.prototype.end = null;

        /**
         * Creates a new ReadBytesRequestBody instance using the specified properties.
         * @function create
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {file.IReadBytesRequestBody=} [properties] Properties to set
         * @returns {file.ReadBytesRequestBody} ReadBytesRequestBody instance
         */
        ReadBytesRequestBody.create = function create(properties) {
            return new ReadBytesRequestBody(properties);
        };

        /**
         * Encodes the specified ReadBytesRequestBody message. Does not implicitly {@link file.ReadBytesRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {file.IReadBytesRequestBody} message ReadBytesRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadBytesRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                $root.common.UInt64Value.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                $root.common.UInt64Value.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadBytesRequestBody message, length delimited. Does not implicitly {@link file.ReadBytesRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {file.IReadBytesRequestBody} message ReadBytesRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadBytesRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadBytesRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ReadBytesRequestBody} ReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadBytesRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ReadBytesRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.start = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.end = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes a ReadBytesRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.ReadBytesRequestBody} ReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadBytesRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadBytesRequestBody message.
         * @function verify
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadBytesRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start")) {
                var error = $root.common.UInt64Value.verify(message.start);
                if (error)
                    return "start." + error;
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                var error = $root.common.UInt64Value.verify(message.end);
                if (error)
                    return "end." + error;
            }
            return null;
        };

        /**
         * Creates a ReadBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.ReadBytesRequestBody} ReadBytesRequestBody
         */
        ReadBytesRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.ReadBytesRequestBody)
                return object;
            var message = new $root.file.ReadBytesRequestBody();
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".file.ReadBytesRequestBody.start: object expected");
                message.start = $root.common.UInt64Value.fromObject(object.start);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".file.ReadBytesRequestBody.end: object expected");
                message.end = $root.common.UInt64Value.fromObject(object.end);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadBytesRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {file.ReadBytesRequestBody} message ReadBytesRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadBytesRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.start = null;
                object.end = null;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.common.UInt64Value.toObject(message.start, options);
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = $root.common.UInt64Value.toObject(message.end, options);
            return object;
        };

        /**
         * Converts this ReadBytesRequestBody to JSON.
         * @function toJSON
         * @memberof file.ReadBytesRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadBytesRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadBytesRequestBody
         * @function getTypeUrl
         * @memberof file.ReadBytesRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadBytesRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ReadBytesRequestBody";
        };

        return ReadBytesRequestBody;
    })();

    file.ReadBytesReplyBody = (function() {

        /**
         * Properties of a ReadBytesReplyBody.
         * @memberof file
         * @interface IReadBytesReplyBody
         * @property {common.IBytesValue|null} [bytes] ReadBytesReplyBody bytes
         */

        /**
         * Constructs a new ReadBytesReplyBody.
         * @memberof file
         * @classdesc Represents a ReadBytesReplyBody.
         * @implements IReadBytesReplyBody
         * @constructor
         * @param {file.IReadBytesReplyBody=} [properties] Properties to set
         */
        function ReadBytesReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadBytesReplyBody bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof file.ReadBytesReplyBody
         * @instance
         */
        ReadBytesReplyBody.prototype.bytes = null;

        /**
         * Creates a new ReadBytesReplyBody instance using the specified properties.
         * @function create
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {file.IReadBytesReplyBody=} [properties] Properties to set
         * @returns {file.ReadBytesReplyBody} ReadBytesReplyBody instance
         */
        ReadBytesReplyBody.create = function create(properties) {
            return new ReadBytesReplyBody(properties);
        };

        /**
         * Encodes the specified ReadBytesReplyBody message. Does not implicitly {@link file.ReadBytesReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {file.IReadBytesReplyBody} message ReadBytesReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadBytesReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadBytesReplyBody message, length delimited. Does not implicitly {@link file.ReadBytesReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {file.IReadBytesReplyBody} message ReadBytesReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadBytesReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadBytesReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ReadBytesReplyBody} ReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadBytesReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ReadBytesReplyBody();
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
         * Decodes a ReadBytesReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.ReadBytesReplyBody} ReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadBytesReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadBytesReplyBody message.
         * @function verify
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadBytesReplyBody.verify = function verify(message) {
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
         * Creates a ReadBytesReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.ReadBytesReplyBody} ReadBytesReplyBody
         */
        ReadBytesReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.ReadBytesReplyBody)
                return object;
            var message = new $root.file.ReadBytesReplyBody();
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".file.ReadBytesReplyBody.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadBytesReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {file.ReadBytesReplyBody} message ReadBytesReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadBytesReplyBody.toObject = function toObject(message, options) {
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
         * Converts this ReadBytesReplyBody to JSON.
         * @function toJSON
         * @memberof file.ReadBytesReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadBytesReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadBytesReplyBody
         * @function getTypeUrl
         * @memberof file.ReadBytesReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadBytesReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ReadBytesReplyBody";
        };

        return ReadBytesReplyBody;
    })();

    file.VersionedReadFlags = (function() {

        /**
         * Properties of a VersionedReadFlags.
         * @memberof file
         * @interface IVersionedReadFlags
         * @property {common.IUInt64Value|null} [archivedVersion] VersionedReadFlags archivedVersion
         * @property {common.IUInt64Value|null} [remoteVersion] VersionedReadFlags remoteVersion
         */

        /**
         * Constructs a new VersionedReadFlags.
         * @memberof file
         * @classdesc Represents a VersionedReadFlags.
         * @implements IVersionedReadFlags
         * @constructor
         * @param {file.IVersionedReadFlags=} [properties] Properties to set
         */
        function VersionedReadFlags(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedReadFlags archivedVersion.
         * @member {common.IUInt64Value|null|undefined} archivedVersion
         * @memberof file.VersionedReadFlags
         * @instance
         */
        VersionedReadFlags.prototype.archivedVersion = null;

        /**
         * VersionedReadFlags remoteVersion.
         * @member {common.IUInt64Value|null|undefined} remoteVersion
         * @memberof file.VersionedReadFlags
         * @instance
         */
        VersionedReadFlags.prototype.remoteVersion = null;

        /**
         * Creates a new VersionedReadFlags instance using the specified properties.
         * @function create
         * @memberof file.VersionedReadFlags
         * @static
         * @param {file.IVersionedReadFlags=} [properties] Properties to set
         * @returns {file.VersionedReadFlags} VersionedReadFlags instance
         */
        VersionedReadFlags.create = function create(properties) {
            return new VersionedReadFlags(properties);
        };

        /**
         * Encodes the specified VersionedReadFlags message. Does not implicitly {@link file.VersionedReadFlags.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedReadFlags
         * @static
         * @param {file.IVersionedReadFlags} message VersionedReadFlags message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadFlags.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.archivedVersion != null && Object.hasOwnProperty.call(message, "archivedVersion"))
                $root.common.UInt64Value.encode(message.archivedVersion, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.remoteVersion != null && Object.hasOwnProperty.call(message, "remoteVersion"))
                $root.common.UInt64Value.encode(message.remoteVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedReadFlags message, length delimited. Does not implicitly {@link file.VersionedReadFlags.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedReadFlags
         * @static
         * @param {file.IVersionedReadFlags} message VersionedReadFlags message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadFlags.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedReadFlags message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedReadFlags
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedReadFlags} VersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadFlags.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedReadFlags();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.archivedVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.remoteVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes a VersionedReadFlags message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedReadFlags
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedReadFlags} VersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadFlags.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedReadFlags message.
         * @function verify
         * @memberof file.VersionedReadFlags
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedReadFlags.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.archivedVersion != null && message.hasOwnProperty("archivedVersion")) {
                var error = $root.common.UInt64Value.verify(message.archivedVersion);
                if (error)
                    return "archivedVersion." + error;
            }
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion")) {
                var error = $root.common.UInt64Value.verify(message.remoteVersion);
                if (error)
                    return "remoteVersion." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedReadFlags message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedReadFlags
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedReadFlags} VersionedReadFlags
         */
        VersionedReadFlags.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedReadFlags)
                return object;
            var message = new $root.file.VersionedReadFlags();
            if (object.archivedVersion != null) {
                if (typeof object.archivedVersion !== "object")
                    throw TypeError(".file.VersionedReadFlags.archivedVersion: object expected");
                message.archivedVersion = $root.common.UInt64Value.fromObject(object.archivedVersion);
            }
            if (object.remoteVersion != null) {
                if (typeof object.remoteVersion !== "object")
                    throw TypeError(".file.VersionedReadFlags.remoteVersion: object expected");
                message.remoteVersion = $root.common.UInt64Value.fromObject(object.remoteVersion);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedReadFlags message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedReadFlags
         * @static
         * @param {file.VersionedReadFlags} message VersionedReadFlags
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedReadFlags.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.archivedVersion = null;
                object.remoteVersion = null;
            }
            if (message.archivedVersion != null && message.hasOwnProperty("archivedVersion"))
                object.archivedVersion = $root.common.UInt64Value.toObject(message.archivedVersion, options);
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion"))
                object.remoteVersion = $root.common.UInt64Value.toObject(message.remoteVersion, options);
            return object;
        };

        /**
         * Converts this VersionedReadFlags to JSON.
         * @function toJSON
         * @memberof file.VersionedReadFlags
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedReadFlags.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedReadFlags
         * @function getTypeUrl
         * @memberof file.VersionedReadFlags
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedReadFlags.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedReadFlags";
        };

        return VersionedReadFlags;
    })();

    file.RequestWithVersionedReadFlags = (function() {

        /**
         * Properties of a RequestWithVersionedReadFlags.
         * @memberof file
         * @interface IRequestWithVersionedReadFlags
         * @property {file.IVersionedReadFlags|null} [flags] RequestWithVersionedReadFlags flags
         */

        /**
         * Constructs a new RequestWithVersionedReadFlags.
         * @memberof file
         * @classdesc Represents a RequestWithVersionedReadFlags.
         * @implements IRequestWithVersionedReadFlags
         * @constructor
         * @param {file.IRequestWithVersionedReadFlags=} [properties] Properties to set
         */
        function RequestWithVersionedReadFlags(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestWithVersionedReadFlags flags.
         * @member {file.IVersionedReadFlags|null|undefined} flags
         * @memberof file.RequestWithVersionedReadFlags
         * @instance
         */
        RequestWithVersionedReadFlags.prototype.flags = null;

        /**
         * Creates a new RequestWithVersionedReadFlags instance using the specified properties.
         * @function create
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {file.IRequestWithVersionedReadFlags=} [properties] Properties to set
         * @returns {file.RequestWithVersionedReadFlags} RequestWithVersionedReadFlags instance
         */
        RequestWithVersionedReadFlags.create = function create(properties) {
            return new RequestWithVersionedReadFlags(properties);
        };

        /**
         * Encodes the specified RequestWithVersionedReadFlags message. Does not implicitly {@link file.RequestWithVersionedReadFlags.verify|verify} messages.
         * @function encode
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {file.IRequestWithVersionedReadFlags} message RequestWithVersionedReadFlags message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestWithVersionedReadFlags.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                $root.file.VersionedReadFlags.encode(message.flags, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RequestWithVersionedReadFlags message, length delimited. Does not implicitly {@link file.RequestWithVersionedReadFlags.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {file.IRequestWithVersionedReadFlags} message RequestWithVersionedReadFlags message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestWithVersionedReadFlags.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestWithVersionedReadFlags message from the specified reader or buffer.
         * @function decode
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.RequestWithVersionedReadFlags} RequestWithVersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestWithVersionedReadFlags.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.RequestWithVersionedReadFlags();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.flags = $root.file.VersionedReadFlags.decode(reader, reader.uint32());
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
         * Decodes a RequestWithVersionedReadFlags message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.RequestWithVersionedReadFlags} RequestWithVersionedReadFlags
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestWithVersionedReadFlags.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestWithVersionedReadFlags message.
         * @function verify
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestWithVersionedReadFlags.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flags != null && message.hasOwnProperty("flags")) {
                var error = $root.file.VersionedReadFlags.verify(message.flags);
                if (error)
                    return "flags." + error;
            }
            return null;
        };

        /**
         * Creates a RequestWithVersionedReadFlags message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.RequestWithVersionedReadFlags} RequestWithVersionedReadFlags
         */
        RequestWithVersionedReadFlags.fromObject = function fromObject(object) {
            if (object instanceof $root.file.RequestWithVersionedReadFlags)
                return object;
            var message = new $root.file.RequestWithVersionedReadFlags();
            if (object.flags != null) {
                if (typeof object.flags !== "object")
                    throw TypeError(".file.RequestWithVersionedReadFlags.flags: object expected");
                message.flags = $root.file.VersionedReadFlags.fromObject(object.flags);
            }
            return message;
        };

        /**
         * Creates a plain object from a RequestWithVersionedReadFlags message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {file.RequestWithVersionedReadFlags} message RequestWithVersionedReadFlags
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestWithVersionedReadFlags.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.flags = null;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = $root.file.VersionedReadFlags.toObject(message.flags, options);
            return object;
        };

        /**
         * Converts this RequestWithVersionedReadFlags to JSON.
         * @function toJSON
         * @memberof file.RequestWithVersionedReadFlags
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestWithVersionedReadFlags.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestWithVersionedReadFlags
         * @function getTypeUrl
         * @memberof file.RequestWithVersionedReadFlags
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestWithVersionedReadFlags.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.RequestWithVersionedReadFlags";
        };

        return RequestWithVersionedReadFlags;
    })();

    file.VersionedGetXAttrRequestBody = (function() {

        /**
         * Properties of a VersionedGetXAttrRequestBody.
         * @memberof file
         * @interface IVersionedGetXAttrRequestBody
         * @property {string|null} [xaName] VersionedGetXAttrRequestBody xaName
         * @property {file.IVersionedReadFlags|null} [flags] VersionedGetXAttrRequestBody flags
         */

        /**
         * Constructs a new VersionedGetXAttrRequestBody.
         * @memberof file
         * @classdesc Represents a VersionedGetXAttrRequestBody.
         * @implements IVersionedGetXAttrRequestBody
         * @constructor
         * @param {file.IVersionedGetXAttrRequestBody=} [properties] Properties to set
         */
        function VersionedGetXAttrRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedGetXAttrRequestBody xaName.
         * @member {string} xaName
         * @memberof file.VersionedGetXAttrRequestBody
         * @instance
         */
        VersionedGetXAttrRequestBody.prototype.xaName = "";

        /**
         * VersionedGetXAttrRequestBody flags.
         * @member {file.IVersionedReadFlags|null|undefined} flags
         * @memberof file.VersionedGetXAttrRequestBody
         * @instance
         */
        VersionedGetXAttrRequestBody.prototype.flags = null;

        /**
         * Creates a new VersionedGetXAttrRequestBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {file.IVersionedGetXAttrRequestBody=} [properties] Properties to set
         * @returns {file.VersionedGetXAttrRequestBody} VersionedGetXAttrRequestBody instance
         */
        VersionedGetXAttrRequestBody.create = function create(properties) {
            return new VersionedGetXAttrRequestBody(properties);
        };

        /**
         * Encodes the specified VersionedGetXAttrRequestBody message. Does not implicitly {@link file.VersionedGetXAttrRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {file.IVersionedGetXAttrRequestBody} message VersionedGetXAttrRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetXAttrRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.xaName != null && Object.hasOwnProperty.call(message, "xaName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.xaName);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                $root.file.VersionedReadFlags.encode(message.flags, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedGetXAttrRequestBody message, length delimited. Does not implicitly {@link file.VersionedGetXAttrRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {file.IVersionedGetXAttrRequestBody} message VersionedGetXAttrRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetXAttrRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedGetXAttrRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedGetXAttrRequestBody} VersionedGetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetXAttrRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedGetXAttrRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.xaName = reader.string();
                        break;
                    }
                case 2: {
                        message.flags = $root.file.VersionedReadFlags.decode(reader, reader.uint32());
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
         * Decodes a VersionedGetXAttrRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedGetXAttrRequestBody} VersionedGetXAttrRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetXAttrRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedGetXAttrRequestBody message.
         * @function verify
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedGetXAttrRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.xaName != null && message.hasOwnProperty("xaName"))
                if (!$util.isString(message.xaName))
                    return "xaName: string expected";
            if (message.flags != null && message.hasOwnProperty("flags")) {
                var error = $root.file.VersionedReadFlags.verify(message.flags);
                if (error)
                    return "flags." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedGetXAttrRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedGetXAttrRequestBody} VersionedGetXAttrRequestBody
         */
        VersionedGetXAttrRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedGetXAttrRequestBody)
                return object;
            var message = new $root.file.VersionedGetXAttrRequestBody();
            if (object.xaName != null)
                message.xaName = String(object.xaName);
            if (object.flags != null) {
                if (typeof object.flags !== "object")
                    throw TypeError(".file.VersionedGetXAttrRequestBody.flags: object expected");
                message.flags = $root.file.VersionedReadFlags.fromObject(object.flags);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedGetXAttrRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {file.VersionedGetXAttrRequestBody} message VersionedGetXAttrRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedGetXAttrRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.xaName = "";
                object.flags = null;
            }
            if (message.xaName != null && message.hasOwnProperty("xaName"))
                object.xaName = message.xaName;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = $root.file.VersionedReadFlags.toObject(message.flags, options);
            return object;
        };

        /**
         * Converts this VersionedGetXAttrRequestBody to JSON.
         * @function toJSON
         * @memberof file.VersionedGetXAttrRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedGetXAttrRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedGetXAttrRequestBody
         * @function getTypeUrl
         * @memberof file.VersionedGetXAttrRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedGetXAttrRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedGetXAttrRequestBody";
        };

        return VersionedGetXAttrRequestBody;
    })();

    file.VersionedGetXAttrReplyBody = (function() {

        /**
         * Properties of a VersionedGetXAttrReplyBody.
         * @memberof file
         * @interface IVersionedGetXAttrReplyBody
         * @property {number|Long|null} [version] VersionedGetXAttrReplyBody version
         * @property {common.IStringValue|null} [str] VersionedGetXAttrReplyBody str
         * @property {common.IStringValue|null} [json] VersionedGetXAttrReplyBody json
         * @property {common.IBytesValue|null} [bytes] VersionedGetXAttrReplyBody bytes
         */

        /**
         * Constructs a new VersionedGetXAttrReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedGetXAttrReplyBody.
         * @implements IVersionedGetXAttrReplyBody
         * @constructor
         * @param {file.IVersionedGetXAttrReplyBody=} [properties] Properties to set
         */
        function VersionedGetXAttrReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedGetXAttrReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedGetXAttrReplyBody
         * @instance
         */
        VersionedGetXAttrReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedGetXAttrReplyBody str.
         * @member {common.IStringValue|null|undefined} str
         * @memberof file.VersionedGetXAttrReplyBody
         * @instance
         */
        VersionedGetXAttrReplyBody.prototype.str = null;

        /**
         * VersionedGetXAttrReplyBody json.
         * @member {common.IStringValue|null|undefined} json
         * @memberof file.VersionedGetXAttrReplyBody
         * @instance
         */
        VersionedGetXAttrReplyBody.prototype.json = null;

        /**
         * VersionedGetXAttrReplyBody bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof file.VersionedGetXAttrReplyBody
         * @instance
         */
        VersionedGetXAttrReplyBody.prototype.bytes = null;

        /**
         * Creates a new VersionedGetXAttrReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {file.IVersionedGetXAttrReplyBody=} [properties] Properties to set
         * @returns {file.VersionedGetXAttrReplyBody} VersionedGetXAttrReplyBody instance
         */
        VersionedGetXAttrReplyBody.create = function create(properties) {
            return new VersionedGetXAttrReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedGetXAttrReplyBody message. Does not implicitly {@link file.VersionedGetXAttrReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {file.IVersionedGetXAttrReplyBody} message VersionedGetXAttrReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetXAttrReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                $root.common.StringValue.encode(message.str, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                $root.common.StringValue.encode(message.json, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedGetXAttrReplyBody message, length delimited. Does not implicitly {@link file.VersionedGetXAttrReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {file.IVersionedGetXAttrReplyBody} message VersionedGetXAttrReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetXAttrReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedGetXAttrReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedGetXAttrReplyBody} VersionedGetXAttrReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetXAttrReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedGetXAttrReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
                        message.str = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.json = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
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
         * Decodes a VersionedGetXAttrReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedGetXAttrReplyBody} VersionedGetXAttrReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetXAttrReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedGetXAttrReplyBody message.
         * @function verify
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedGetXAttrReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.str != null && message.hasOwnProperty("str")) {
                var error = $root.common.StringValue.verify(message.str);
                if (error)
                    return "str." + error;
            }
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
         * Creates a VersionedGetXAttrReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedGetXAttrReplyBody} VersionedGetXAttrReplyBody
         */
        VersionedGetXAttrReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedGetXAttrReplyBody)
                return object;
            var message = new $root.file.VersionedGetXAttrReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.str != null) {
                if (typeof object.str !== "object")
                    throw TypeError(".file.VersionedGetXAttrReplyBody.str: object expected");
                message.str = $root.common.StringValue.fromObject(object.str);
            }
            if (object.json != null) {
                if (typeof object.json !== "object")
                    throw TypeError(".file.VersionedGetXAttrReplyBody.json: object expected");
                message.json = $root.common.StringValue.fromObject(object.json);
            }
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".file.VersionedGetXAttrReplyBody.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedGetXAttrReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {file.VersionedGetXAttrReplyBody} message VersionedGetXAttrReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedGetXAttrReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.str = null;
                object.json = null;
                object.bytes = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = $root.common.StringValue.toObject(message.str, options);
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = $root.common.StringValue.toObject(message.json, options);
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this VersionedGetXAttrReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedGetXAttrReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedGetXAttrReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedGetXAttrReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedGetXAttrReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedGetXAttrReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedGetXAttrReplyBody";
        };

        return VersionedGetXAttrReplyBody;
    })();

    file.VersionedListXAttrsReplyBody = (function() {

        /**
         * Properties of a VersionedListXAttrsReplyBody.
         * @memberof file
         * @interface IVersionedListXAttrsReplyBody
         * @property {number|Long|null} [version] VersionedListXAttrsReplyBody version
         * @property {Array.<string>|null} [xaNames] VersionedListXAttrsReplyBody xaNames
         */

        /**
         * Constructs a new VersionedListXAttrsReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedListXAttrsReplyBody.
         * @implements IVersionedListXAttrsReplyBody
         * @constructor
         * @param {file.IVersionedListXAttrsReplyBody=} [properties] Properties to set
         */
        function VersionedListXAttrsReplyBody(properties) {
            this.xaNames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedListXAttrsReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedListXAttrsReplyBody
         * @instance
         */
        VersionedListXAttrsReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedListXAttrsReplyBody xaNames.
         * @member {Array.<string>} xaNames
         * @memberof file.VersionedListXAttrsReplyBody
         * @instance
         */
        VersionedListXAttrsReplyBody.prototype.xaNames = $util.emptyArray;

        /**
         * Creates a new VersionedListXAttrsReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {file.IVersionedListXAttrsReplyBody=} [properties] Properties to set
         * @returns {file.VersionedListXAttrsReplyBody} VersionedListXAttrsReplyBody instance
         */
        VersionedListXAttrsReplyBody.create = function create(properties) {
            return new VersionedListXAttrsReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedListXAttrsReplyBody message. Does not implicitly {@link file.VersionedListXAttrsReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {file.IVersionedListXAttrsReplyBody} message VersionedListXAttrsReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedListXAttrsReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.xaNames != null && message.xaNames.length)
                for (var i = 0; i < message.xaNames.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.xaNames[i]);
            return writer;
        };

        /**
         * Encodes the specified VersionedListXAttrsReplyBody message, length delimited. Does not implicitly {@link file.VersionedListXAttrsReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {file.IVersionedListXAttrsReplyBody} message VersionedListXAttrsReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedListXAttrsReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedListXAttrsReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedListXAttrsReplyBody} VersionedListXAttrsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedListXAttrsReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedListXAttrsReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
                        if (!(message.xaNames && message.xaNames.length))
                            message.xaNames = [];
                        message.xaNames.push(reader.string());
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
         * Decodes a VersionedListXAttrsReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedListXAttrsReplyBody} VersionedListXAttrsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedListXAttrsReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedListXAttrsReplyBody message.
         * @function verify
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedListXAttrsReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.xaNames != null && message.hasOwnProperty("xaNames")) {
                if (!Array.isArray(message.xaNames))
                    return "xaNames: array expected";
                for (var i = 0; i < message.xaNames.length; ++i)
                    if (!$util.isString(message.xaNames[i]))
                        return "xaNames: string[] expected";
            }
            return null;
        };

        /**
         * Creates a VersionedListXAttrsReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedListXAttrsReplyBody} VersionedListXAttrsReplyBody
         */
        VersionedListXAttrsReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedListXAttrsReplyBody)
                return object;
            var message = new $root.file.VersionedListXAttrsReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.xaNames) {
                if (!Array.isArray(object.xaNames))
                    throw TypeError(".file.VersionedListXAttrsReplyBody.xaNames: array expected");
                message.xaNames = [];
                for (var i = 0; i < object.xaNames.length; ++i)
                    message.xaNames[i] = String(object.xaNames[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedListXAttrsReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {file.VersionedListXAttrsReplyBody} message VersionedListXAttrsReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedListXAttrsReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.xaNames = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.xaNames && message.xaNames.length) {
                object.xaNames = [];
                for (var j = 0; j < message.xaNames.length; ++j)
                    object.xaNames[j] = message.xaNames[j];
            }
            return object;
        };

        /**
         * Converts this VersionedListXAttrsReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedListXAttrsReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedListXAttrsReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedListXAttrsReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedListXAttrsReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedListXAttrsReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedListXAttrsReplyBody";
        };

        return VersionedListXAttrsReplyBody;
    })();

    file.VersionedReadBytesRequestBody = (function() {

        /**
         * Properties of a VersionedReadBytesRequestBody.
         * @memberof file
         * @interface IVersionedReadBytesRequestBody
         * @property {common.IUInt64Value|null} [start] VersionedReadBytesRequestBody start
         * @property {common.IUInt64Value|null} [end] VersionedReadBytesRequestBody end
         * @property {file.IVersionedReadFlags|null} [flags] VersionedReadBytesRequestBody flags
         */

        /**
         * Constructs a new VersionedReadBytesRequestBody.
         * @memberof file
         * @classdesc Represents a VersionedReadBytesRequestBody.
         * @implements IVersionedReadBytesRequestBody
         * @constructor
         * @param {file.IVersionedReadBytesRequestBody=} [properties] Properties to set
         */
        function VersionedReadBytesRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedReadBytesRequestBody start.
         * @member {common.IUInt64Value|null|undefined} start
         * @memberof file.VersionedReadBytesRequestBody
         * @instance
         */
        VersionedReadBytesRequestBody.prototype.start = null;

        /**
         * VersionedReadBytesRequestBody end.
         * @member {common.IUInt64Value|null|undefined} end
         * @memberof file.VersionedReadBytesRequestBody
         * @instance
         */
        VersionedReadBytesRequestBody.prototype.end = null;

        /**
         * VersionedReadBytesRequestBody flags.
         * @member {file.IVersionedReadFlags|null|undefined} flags
         * @memberof file.VersionedReadBytesRequestBody
         * @instance
         */
        VersionedReadBytesRequestBody.prototype.flags = null;

        /**
         * Creates a new VersionedReadBytesRequestBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {file.IVersionedReadBytesRequestBody=} [properties] Properties to set
         * @returns {file.VersionedReadBytesRequestBody} VersionedReadBytesRequestBody instance
         */
        VersionedReadBytesRequestBody.create = function create(properties) {
            return new VersionedReadBytesRequestBody(properties);
        };

        /**
         * Encodes the specified VersionedReadBytesRequestBody message. Does not implicitly {@link file.VersionedReadBytesRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {file.IVersionedReadBytesRequestBody} message VersionedReadBytesRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadBytesRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                $root.common.UInt64Value.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                $root.common.UInt64Value.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                $root.file.VersionedReadFlags.encode(message.flags, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedReadBytesRequestBody message, length delimited. Does not implicitly {@link file.VersionedReadBytesRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {file.IVersionedReadBytesRequestBody} message VersionedReadBytesRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadBytesRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedReadBytesRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedReadBytesRequestBody} VersionedReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadBytesRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedReadBytesRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.start = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.end = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.flags = $root.file.VersionedReadFlags.decode(reader, reader.uint32());
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
         * Decodes a VersionedReadBytesRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedReadBytesRequestBody} VersionedReadBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadBytesRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedReadBytesRequestBody message.
         * @function verify
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedReadBytesRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start")) {
                var error = $root.common.UInt64Value.verify(message.start);
                if (error)
                    return "start." + error;
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                var error = $root.common.UInt64Value.verify(message.end);
                if (error)
                    return "end." + error;
            }
            if (message.flags != null && message.hasOwnProperty("flags")) {
                var error = $root.file.VersionedReadFlags.verify(message.flags);
                if (error)
                    return "flags." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedReadBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedReadBytesRequestBody} VersionedReadBytesRequestBody
         */
        VersionedReadBytesRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedReadBytesRequestBody)
                return object;
            var message = new $root.file.VersionedReadBytesRequestBody();
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".file.VersionedReadBytesRequestBody.start: object expected");
                message.start = $root.common.UInt64Value.fromObject(object.start);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".file.VersionedReadBytesRequestBody.end: object expected");
                message.end = $root.common.UInt64Value.fromObject(object.end);
            }
            if (object.flags != null) {
                if (typeof object.flags !== "object")
                    throw TypeError(".file.VersionedReadBytesRequestBody.flags: object expected");
                message.flags = $root.file.VersionedReadFlags.fromObject(object.flags);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedReadBytesRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {file.VersionedReadBytesRequestBody} message VersionedReadBytesRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedReadBytesRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.start = null;
                object.end = null;
                object.flags = null;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.common.UInt64Value.toObject(message.start, options);
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = $root.common.UInt64Value.toObject(message.end, options);
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = $root.file.VersionedReadFlags.toObject(message.flags, options);
            return object;
        };

        /**
         * Converts this VersionedReadBytesRequestBody to JSON.
         * @function toJSON
         * @memberof file.VersionedReadBytesRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedReadBytesRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedReadBytesRequestBody
         * @function getTypeUrl
         * @memberof file.VersionedReadBytesRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedReadBytesRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedReadBytesRequestBody";
        };

        return VersionedReadBytesRequestBody;
    })();

    file.VersionedReadBytesReplyBody = (function() {

        /**
         * Properties of a VersionedReadBytesReplyBody.
         * @memberof file
         * @interface IVersionedReadBytesReplyBody
         * @property {number|Long|null} [version] VersionedReadBytesReplyBody version
         * @property {common.IBytesValue|null} [bytes] VersionedReadBytesReplyBody bytes
         */

        /**
         * Constructs a new VersionedReadBytesReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedReadBytesReplyBody.
         * @implements IVersionedReadBytesReplyBody
         * @constructor
         * @param {file.IVersionedReadBytesReplyBody=} [properties] Properties to set
         */
        function VersionedReadBytesReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedReadBytesReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedReadBytesReplyBody
         * @instance
         */
        VersionedReadBytesReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedReadBytesReplyBody bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof file.VersionedReadBytesReplyBody
         * @instance
         */
        VersionedReadBytesReplyBody.prototype.bytes = null;

        /**
         * Creates a new VersionedReadBytesReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {file.IVersionedReadBytesReplyBody=} [properties] Properties to set
         * @returns {file.VersionedReadBytesReplyBody} VersionedReadBytesReplyBody instance
         */
        VersionedReadBytesReplyBody.create = function create(properties) {
            return new VersionedReadBytesReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedReadBytesReplyBody message. Does not implicitly {@link file.VersionedReadBytesReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {file.IVersionedReadBytesReplyBody} message VersionedReadBytesReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadBytesReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedReadBytesReplyBody message, length delimited. Does not implicitly {@link file.VersionedReadBytesReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {file.IVersionedReadBytesReplyBody} message VersionedReadBytesReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadBytesReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedReadBytesReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedReadBytesReplyBody} VersionedReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadBytesReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedReadBytesReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
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
         * Decodes a VersionedReadBytesReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedReadBytesReplyBody} VersionedReadBytesReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadBytesReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedReadBytesReplyBody message.
         * @function verify
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedReadBytesReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.bytes != null && message.hasOwnProperty("bytes")) {
                var error = $root.common.BytesValue.verify(message.bytes);
                if (error)
                    return "bytes." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedReadBytesReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedReadBytesReplyBody} VersionedReadBytesReplyBody
         */
        VersionedReadBytesReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedReadBytesReplyBody)
                return object;
            var message = new $root.file.VersionedReadBytesReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".file.VersionedReadBytesReplyBody.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedReadBytesReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {file.VersionedReadBytesReplyBody} message VersionedReadBytesReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedReadBytesReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.bytes = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this VersionedReadBytesReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedReadBytesReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedReadBytesReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedReadBytesReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedReadBytesReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedReadBytesReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedReadBytesReplyBody";
        };

        return VersionedReadBytesReplyBody;
    })();

    file.VersionedReadTxtReplyBody = (function() {

        /**
         * Properties of a VersionedReadTxtReplyBody.
         * @memberof file
         * @interface IVersionedReadTxtReplyBody
         * @property {number|Long|null} [version] VersionedReadTxtReplyBody version
         * @property {string|null} [txt] VersionedReadTxtReplyBody txt
         */

        /**
         * Constructs a new VersionedReadTxtReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedReadTxtReplyBody.
         * @implements IVersionedReadTxtReplyBody
         * @constructor
         * @param {file.IVersionedReadTxtReplyBody=} [properties] Properties to set
         */
        function VersionedReadTxtReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedReadTxtReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedReadTxtReplyBody
         * @instance
         */
        VersionedReadTxtReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedReadTxtReplyBody txt.
         * @member {string} txt
         * @memberof file.VersionedReadTxtReplyBody
         * @instance
         */
        VersionedReadTxtReplyBody.prototype.txt = "";

        /**
         * Creates a new VersionedReadTxtReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {file.IVersionedReadTxtReplyBody=} [properties] Properties to set
         * @returns {file.VersionedReadTxtReplyBody} VersionedReadTxtReplyBody instance
         */
        VersionedReadTxtReplyBody.create = function create(properties) {
            return new VersionedReadTxtReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedReadTxtReplyBody message. Does not implicitly {@link file.VersionedReadTxtReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {file.IVersionedReadTxtReplyBody} message VersionedReadTxtReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadTxtReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.txt != null && Object.hasOwnProperty.call(message, "txt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.txt);
            return writer;
        };

        /**
         * Encodes the specified VersionedReadTxtReplyBody message, length delimited. Does not implicitly {@link file.VersionedReadTxtReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {file.IVersionedReadTxtReplyBody} message VersionedReadTxtReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadTxtReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedReadTxtReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedReadTxtReplyBody} VersionedReadTxtReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadTxtReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedReadTxtReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
                        message.txt = reader.string();
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
         * Decodes a VersionedReadTxtReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedReadTxtReplyBody} VersionedReadTxtReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadTxtReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedReadTxtReplyBody message.
         * @function verify
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedReadTxtReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.txt != null && message.hasOwnProperty("txt"))
                if (!$util.isString(message.txt))
                    return "txt: string expected";
            return null;
        };

        /**
         * Creates a VersionedReadTxtReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedReadTxtReplyBody} VersionedReadTxtReplyBody
         */
        VersionedReadTxtReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedReadTxtReplyBody)
                return object;
            var message = new $root.file.VersionedReadTxtReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.txt != null)
                message.txt = String(object.txt);
            return message;
        };

        /**
         * Creates a plain object from a VersionedReadTxtReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {file.VersionedReadTxtReplyBody} message VersionedReadTxtReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedReadTxtReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.txt = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.txt != null && message.hasOwnProperty("txt"))
                object.txt = message.txt;
            return object;
        };

        /**
         * Converts this VersionedReadTxtReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedReadTxtReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedReadTxtReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedReadTxtReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedReadTxtReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedReadTxtReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedReadTxtReplyBody";
        };

        return VersionedReadTxtReplyBody;
    })();

    file.VersionedReadJsonReplyBody = (function() {

        /**
         * Properties of a VersionedReadJsonReplyBody.
         * @memberof file
         * @interface IVersionedReadJsonReplyBody
         * @property {number|Long|null} [version] VersionedReadJsonReplyBody version
         * @property {string|null} [json] VersionedReadJsonReplyBody json
         */

        /**
         * Constructs a new VersionedReadJsonReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedReadJsonReplyBody.
         * @implements IVersionedReadJsonReplyBody
         * @constructor
         * @param {file.IVersionedReadJsonReplyBody=} [properties] Properties to set
         */
        function VersionedReadJsonReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedReadJsonReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedReadJsonReplyBody
         * @instance
         */
        VersionedReadJsonReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedReadJsonReplyBody json.
         * @member {string} json
         * @memberof file.VersionedReadJsonReplyBody
         * @instance
         */
        VersionedReadJsonReplyBody.prototype.json = "";

        /**
         * Creates a new VersionedReadJsonReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {file.IVersionedReadJsonReplyBody=} [properties] Properties to set
         * @returns {file.VersionedReadJsonReplyBody} VersionedReadJsonReplyBody instance
         */
        VersionedReadJsonReplyBody.create = function create(properties) {
            return new VersionedReadJsonReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedReadJsonReplyBody message. Does not implicitly {@link file.VersionedReadJsonReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {file.IVersionedReadJsonReplyBody} message VersionedReadJsonReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadJsonReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.json);
            return writer;
        };

        /**
         * Encodes the specified VersionedReadJsonReplyBody message, length delimited. Does not implicitly {@link file.VersionedReadJsonReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {file.IVersionedReadJsonReplyBody} message VersionedReadJsonReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedReadJsonReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedReadJsonReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedReadJsonReplyBody} VersionedReadJsonReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadJsonReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedReadJsonReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
                        message.json = reader.string();
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
         * Decodes a VersionedReadJsonReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedReadJsonReplyBody} VersionedReadJsonReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedReadJsonReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedReadJsonReplyBody message.
         * @function verify
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedReadJsonReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.json != null && message.hasOwnProperty("json"))
                if (!$util.isString(message.json))
                    return "json: string expected";
            return null;
        };

        /**
         * Creates a VersionedReadJsonReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedReadJsonReplyBody} VersionedReadJsonReplyBody
         */
        VersionedReadJsonReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedReadJsonReplyBody)
                return object;
            var message = new $root.file.VersionedReadJsonReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.json != null)
                message.json = String(object.json);
            return message;
        };

        /**
         * Creates a plain object from a VersionedReadJsonReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {file.VersionedReadJsonReplyBody} message VersionedReadJsonReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedReadJsonReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.json = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = message.json;
            return object;
        };

        /**
         * Converts this VersionedReadJsonReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedReadJsonReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedReadJsonReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedReadJsonReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedReadJsonReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedReadJsonReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedReadJsonReplyBody";
        };

        return VersionedReadJsonReplyBody;
    })();

    file.VersionedGetByteSourceReplyBody = (function() {

        /**
         * Properties of a VersionedGetByteSourceReplyBody.
         * @memberof file
         * @interface IVersionedGetByteSourceReplyBody
         * @property {number|Long|null} [version] VersionedGetByteSourceReplyBody version
         * @property {common.IObjectReference|null} [src] VersionedGetByteSourceReplyBody src
         */

        /**
         * Constructs a new VersionedGetByteSourceReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedGetByteSourceReplyBody.
         * @implements IVersionedGetByteSourceReplyBody
         * @constructor
         * @param {file.IVersionedGetByteSourceReplyBody=} [properties] Properties to set
         */
        function VersionedGetByteSourceReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedGetByteSourceReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedGetByteSourceReplyBody
         * @instance
         */
        VersionedGetByteSourceReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedGetByteSourceReplyBody src.
         * @member {common.IObjectReference|null|undefined} src
         * @memberof file.VersionedGetByteSourceReplyBody
         * @instance
         */
        VersionedGetByteSourceReplyBody.prototype.src = null;

        /**
         * Creates a new VersionedGetByteSourceReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {file.IVersionedGetByteSourceReplyBody=} [properties] Properties to set
         * @returns {file.VersionedGetByteSourceReplyBody} VersionedGetByteSourceReplyBody instance
         */
        VersionedGetByteSourceReplyBody.create = function create(properties) {
            return new VersionedGetByteSourceReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedGetByteSourceReplyBody message. Does not implicitly {@link file.VersionedGetByteSourceReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {file.IVersionedGetByteSourceReplyBody} message VersionedGetByteSourceReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetByteSourceReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                $root.common.ObjectReference.encode(message.src, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedGetByteSourceReplyBody message, length delimited. Does not implicitly {@link file.VersionedGetByteSourceReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {file.IVersionedGetByteSourceReplyBody} message VersionedGetByteSourceReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetByteSourceReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedGetByteSourceReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedGetByteSourceReplyBody} VersionedGetByteSourceReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetByteSourceReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedGetByteSourceReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
                        message.src = $root.common.ObjectReference.decode(reader, reader.uint32());
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
         * Decodes a VersionedGetByteSourceReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedGetByteSourceReplyBody} VersionedGetByteSourceReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetByteSourceReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedGetByteSourceReplyBody message.
         * @function verify
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedGetByteSourceReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.src != null && message.hasOwnProperty("src")) {
                var error = $root.common.ObjectReference.verify(message.src);
                if (error)
                    return "src." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedGetByteSourceReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedGetByteSourceReplyBody} VersionedGetByteSourceReplyBody
         */
        VersionedGetByteSourceReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedGetByteSourceReplyBody)
                return object;
            var message = new $root.file.VersionedGetByteSourceReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.src != null) {
                if (typeof object.src !== "object")
                    throw TypeError(".file.VersionedGetByteSourceReplyBody.src: object expected");
                message.src = $root.common.ObjectReference.fromObject(object.src);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedGetByteSourceReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {file.VersionedGetByteSourceReplyBody} message VersionedGetByteSourceReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedGetByteSourceReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.src = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = $root.common.ObjectReference.toObject(message.src, options);
            return object;
        };

        /**
         * Converts this VersionedGetByteSourceReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedGetByteSourceReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedGetByteSourceReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedGetByteSourceReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedGetByteSourceReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedGetByteSourceReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedGetByteSourceReplyBody";
        };

        return VersionedGetByteSourceReplyBody;
    })();

    file.ListVersionsReplyBody = (function() {

        /**
         * Properties of a ListVersionsReplyBody.
         * @memberof file
         * @interface IListVersionsReplyBody
         * @property {common.IUInt64Value|null} [current] ListVersionsReplyBody current
         * @property {Array.<number|Long>|null} [archived] ListVersionsReplyBody archived
         */

        /**
         * Constructs a new ListVersionsReplyBody.
         * @memberof file
         * @classdesc Represents a ListVersionsReplyBody.
         * @implements IListVersionsReplyBody
         * @constructor
         * @param {file.IListVersionsReplyBody=} [properties] Properties to set
         */
        function ListVersionsReplyBody(properties) {
            this.archived = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListVersionsReplyBody current.
         * @member {common.IUInt64Value|null|undefined} current
         * @memberof file.ListVersionsReplyBody
         * @instance
         */
        ListVersionsReplyBody.prototype.current = null;

        /**
         * ListVersionsReplyBody archived.
         * @member {Array.<number|Long>} archived
         * @memberof file.ListVersionsReplyBody
         * @instance
         */
        ListVersionsReplyBody.prototype.archived = $util.emptyArray;

        /**
         * Creates a new ListVersionsReplyBody instance using the specified properties.
         * @function create
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {file.IListVersionsReplyBody=} [properties] Properties to set
         * @returns {file.ListVersionsReplyBody} ListVersionsReplyBody instance
         */
        ListVersionsReplyBody.create = function create(properties) {
            return new ListVersionsReplyBody(properties);
        };

        /**
         * Encodes the specified ListVersionsReplyBody message. Does not implicitly {@link file.ListVersionsReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {file.IListVersionsReplyBody} message ListVersionsReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListVersionsReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.current != null && Object.hasOwnProperty.call(message, "current"))
                $root.common.UInt64Value.encode(message.current, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.archived != null && message.archived.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.archived.length; ++i)
                    writer.uint64(message.archived[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ListVersionsReplyBody message, length delimited. Does not implicitly {@link file.ListVersionsReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {file.IListVersionsReplyBody} message ListVersionsReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListVersionsReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListVersionsReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ListVersionsReplyBody} ListVersionsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListVersionsReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ListVersionsReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.current = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.archived && message.archived.length))
                            message.archived = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.archived.push(reader.uint64());
                        } else
                            message.archived.push(reader.uint64());
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
         * Decodes a ListVersionsReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.ListVersionsReplyBody} ListVersionsReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListVersionsReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListVersionsReplyBody message.
         * @function verify
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListVersionsReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.current != null && message.hasOwnProperty("current")) {
                var error = $root.common.UInt64Value.verify(message.current);
                if (error)
                    return "current." + error;
            }
            if (message.archived != null && message.hasOwnProperty("archived")) {
                if (!Array.isArray(message.archived))
                    return "archived: array expected";
                for (var i = 0; i < message.archived.length; ++i)
                    if (!$util.isInteger(message.archived[i]) && !(message.archived[i] && $util.isInteger(message.archived[i].low) && $util.isInteger(message.archived[i].high)))
                        return "archived: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a ListVersionsReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.ListVersionsReplyBody} ListVersionsReplyBody
         */
        ListVersionsReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.ListVersionsReplyBody)
                return object;
            var message = new $root.file.ListVersionsReplyBody();
            if (object.current != null) {
                if (typeof object.current !== "object")
                    throw TypeError(".file.ListVersionsReplyBody.current: object expected");
                message.current = $root.common.UInt64Value.fromObject(object.current);
            }
            if (object.archived) {
                if (!Array.isArray(object.archived))
                    throw TypeError(".file.ListVersionsReplyBody.archived: array expected");
                message.archived = [];
                for (var i = 0; i < object.archived.length; ++i)
                    if ($util.Long)
                        (message.archived[i] = $util.Long.fromValue(object.archived[i])).unsigned = true;
                    else if (typeof object.archived[i] === "string")
                        message.archived[i] = parseInt(object.archived[i], 10);
                    else if (typeof object.archived[i] === "number")
                        message.archived[i] = object.archived[i];
                    else if (typeof object.archived[i] === "object")
                        message.archived[i] = new $util.LongBits(object.archived[i].low >>> 0, object.archived[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListVersionsReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {file.ListVersionsReplyBody} message ListVersionsReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListVersionsReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.archived = [];
            if (options.defaults)
                object.current = null;
            if (message.current != null && message.hasOwnProperty("current"))
                object.current = $root.common.UInt64Value.toObject(message.current, options);
            if (message.archived && message.archived.length) {
                object.archived = [];
                for (var j = 0; j < message.archived.length; ++j)
                    if (typeof message.archived[j] === "number")
                        object.archived[j] = options.longs === String ? String(message.archived[j]) : message.archived[j];
                    else
                        object.archived[j] = options.longs === String ? $util.Long.prototype.toString.call(message.archived[j]) : options.longs === Number ? new $util.LongBits(message.archived[j].low >>> 0, message.archived[j].high >>> 0).toNumber(true) : message.archived[j];
            }
            return object;
        };

        /**
         * Converts this ListVersionsReplyBody to JSON.
         * @function toJSON
         * @memberof file.ListVersionsReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListVersionsReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListVersionsReplyBody
         * @function getTypeUrl
         * @memberof file.ListVersionsReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListVersionsReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ListVersionsReplyBody";
        };

        return ListVersionsReplyBody;
    })();

    file.UpdateXAttrsRequestBody = (function() {

        /**
         * Properties of an UpdateXAttrsRequestBody.
         * @memberof file
         * @interface IUpdateXAttrsRequestBody
         * @property {file.IXAttrsChanges|null} [changes] UpdateXAttrsRequestBody changes
         */

        /**
         * Constructs a new UpdateXAttrsRequestBody.
         * @memberof file
         * @classdesc Represents an UpdateXAttrsRequestBody.
         * @implements IUpdateXAttrsRequestBody
         * @constructor
         * @param {file.IUpdateXAttrsRequestBody=} [properties] Properties to set
         */
        function UpdateXAttrsRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateXAttrsRequestBody changes.
         * @member {file.IXAttrsChanges|null|undefined} changes
         * @memberof file.UpdateXAttrsRequestBody
         * @instance
         */
        UpdateXAttrsRequestBody.prototype.changes = null;

        /**
         * Creates a new UpdateXAttrsRequestBody instance using the specified properties.
         * @function create
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {file.IUpdateXAttrsRequestBody=} [properties] Properties to set
         * @returns {file.UpdateXAttrsRequestBody} UpdateXAttrsRequestBody instance
         */
        UpdateXAttrsRequestBody.create = function create(properties) {
            return new UpdateXAttrsRequestBody(properties);
        };

        /**
         * Encodes the specified UpdateXAttrsRequestBody message. Does not implicitly {@link file.UpdateXAttrsRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {file.IUpdateXAttrsRequestBody} message UpdateXAttrsRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateXAttrsRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.changes != null && Object.hasOwnProperty.call(message, "changes"))
                $root.file.XAttrsChanges.encode(message.changes, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateXAttrsRequestBody message, length delimited. Does not implicitly {@link file.UpdateXAttrsRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {file.IUpdateXAttrsRequestBody} message UpdateXAttrsRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateXAttrsRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateXAttrsRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.UpdateXAttrsRequestBody} UpdateXAttrsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateXAttrsRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.UpdateXAttrsRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.changes = $root.file.XAttrsChanges.decode(reader, reader.uint32());
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
         * Decodes an UpdateXAttrsRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.UpdateXAttrsRequestBody} UpdateXAttrsRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateXAttrsRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateXAttrsRequestBody message.
         * @function verify
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateXAttrsRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.changes != null && message.hasOwnProperty("changes")) {
                var error = $root.file.XAttrsChanges.verify(message.changes);
                if (error)
                    return "changes." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateXAttrsRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.UpdateXAttrsRequestBody} UpdateXAttrsRequestBody
         */
        UpdateXAttrsRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.UpdateXAttrsRequestBody)
                return object;
            var message = new $root.file.UpdateXAttrsRequestBody();
            if (object.changes != null) {
                if (typeof object.changes !== "object")
                    throw TypeError(".file.UpdateXAttrsRequestBody.changes: object expected");
                message.changes = $root.file.XAttrsChanges.fromObject(object.changes);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateXAttrsRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {file.UpdateXAttrsRequestBody} message UpdateXAttrsRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateXAttrsRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.changes = null;
            if (message.changes != null && message.hasOwnProperty("changes"))
                object.changes = $root.file.XAttrsChanges.toObject(message.changes, options);
            return object;
        };

        /**
         * Converts this UpdateXAttrsRequestBody to JSON.
         * @function toJSON
         * @memberof file.UpdateXAttrsRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateXAttrsRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateXAttrsRequestBody
         * @function getTypeUrl
         * @memberof file.UpdateXAttrsRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateXAttrsRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.UpdateXAttrsRequestBody";
        };

        return UpdateXAttrsRequestBody;
    })();

    file.NameAndXAttrValue = (function() {

        /**
         * Properties of a NameAndXAttrValue.
         * @memberof file
         * @interface INameAndXAttrValue
         * @property {string|null} [xaName] NameAndXAttrValue xaName
         * @property {common.IStringValue|null} [str] NameAndXAttrValue str
         * @property {common.IStringValue|null} [json] NameAndXAttrValue json
         * @property {common.IBytesValue|null} [bytes] NameAndXAttrValue bytes
         */

        /**
         * Constructs a new NameAndXAttrValue.
         * @memberof file
         * @classdesc Represents a NameAndXAttrValue.
         * @implements INameAndXAttrValue
         * @constructor
         * @param {file.INameAndXAttrValue=} [properties] Properties to set
         */
        function NameAndXAttrValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NameAndXAttrValue xaName.
         * @member {string} xaName
         * @memberof file.NameAndXAttrValue
         * @instance
         */
        NameAndXAttrValue.prototype.xaName = "";

        /**
         * NameAndXAttrValue str.
         * @member {common.IStringValue|null|undefined} str
         * @memberof file.NameAndXAttrValue
         * @instance
         */
        NameAndXAttrValue.prototype.str = null;

        /**
         * NameAndXAttrValue json.
         * @member {common.IStringValue|null|undefined} json
         * @memberof file.NameAndXAttrValue
         * @instance
         */
        NameAndXAttrValue.prototype.json = null;

        /**
         * NameAndXAttrValue bytes.
         * @member {common.IBytesValue|null|undefined} bytes
         * @memberof file.NameAndXAttrValue
         * @instance
         */
        NameAndXAttrValue.prototype.bytes = null;

        /**
         * Creates a new NameAndXAttrValue instance using the specified properties.
         * @function create
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {file.INameAndXAttrValue=} [properties] Properties to set
         * @returns {file.NameAndXAttrValue} NameAndXAttrValue instance
         */
        NameAndXAttrValue.create = function create(properties) {
            return new NameAndXAttrValue(properties);
        };

        /**
         * Encodes the specified NameAndXAttrValue message. Does not implicitly {@link file.NameAndXAttrValue.verify|verify} messages.
         * @function encode
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {file.INameAndXAttrValue} message NameAndXAttrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NameAndXAttrValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.xaName != null && Object.hasOwnProperty.call(message, "xaName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.xaName);
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                $root.common.StringValue.encode(message.str, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                $root.common.StringValue.encode(message.json, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                $root.common.BytesValue.encode(message.bytes, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NameAndXAttrValue message, length delimited. Does not implicitly {@link file.NameAndXAttrValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {file.INameAndXAttrValue} message NameAndXAttrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NameAndXAttrValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NameAndXAttrValue message from the specified reader or buffer.
         * @function decode
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.NameAndXAttrValue} NameAndXAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NameAndXAttrValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.NameAndXAttrValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.xaName = reader.string();
                        break;
                    }
                case 2: {
                        message.str = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.json = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
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
         * Decodes a NameAndXAttrValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.NameAndXAttrValue} NameAndXAttrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NameAndXAttrValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NameAndXAttrValue message.
         * @function verify
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NameAndXAttrValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.xaName != null && message.hasOwnProperty("xaName"))
                if (!$util.isString(message.xaName))
                    return "xaName: string expected";
            if (message.str != null && message.hasOwnProperty("str")) {
                var error = $root.common.StringValue.verify(message.str);
                if (error)
                    return "str." + error;
            }
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
         * Creates a NameAndXAttrValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.NameAndXAttrValue} NameAndXAttrValue
         */
        NameAndXAttrValue.fromObject = function fromObject(object) {
            if (object instanceof $root.file.NameAndXAttrValue)
                return object;
            var message = new $root.file.NameAndXAttrValue();
            if (object.xaName != null)
                message.xaName = String(object.xaName);
            if (object.str != null) {
                if (typeof object.str !== "object")
                    throw TypeError(".file.NameAndXAttrValue.str: object expected");
                message.str = $root.common.StringValue.fromObject(object.str);
            }
            if (object.json != null) {
                if (typeof object.json !== "object")
                    throw TypeError(".file.NameAndXAttrValue.json: object expected");
                message.json = $root.common.StringValue.fromObject(object.json);
            }
            if (object.bytes != null) {
                if (typeof object.bytes !== "object")
                    throw TypeError(".file.NameAndXAttrValue.bytes: object expected");
                message.bytes = $root.common.BytesValue.fromObject(object.bytes);
            }
            return message;
        };

        /**
         * Creates a plain object from a NameAndXAttrValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {file.NameAndXAttrValue} message NameAndXAttrValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NameAndXAttrValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.xaName = "";
                object.str = null;
                object.json = null;
                object.bytes = null;
            }
            if (message.xaName != null && message.hasOwnProperty("xaName"))
                object.xaName = message.xaName;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = $root.common.StringValue.toObject(message.str, options);
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = $root.common.StringValue.toObject(message.json, options);
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = $root.common.BytesValue.toObject(message.bytes, options);
            return object;
        };

        /**
         * Converts this NameAndXAttrValue to JSON.
         * @function toJSON
         * @memberof file.NameAndXAttrValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NameAndXAttrValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NameAndXAttrValue
         * @function getTypeUrl
         * @memberof file.NameAndXAttrValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NameAndXAttrValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.NameAndXAttrValue";
        };

        return NameAndXAttrValue;
    })();

    file.XAttrsChanges = (function() {

        /**
         * Properties of a XAttrsChanges.
         * @memberof file
         * @interface IXAttrsChanges
         * @property {Array.<file.INameAndXAttrValue>|null} [set] XAttrsChanges set
         * @property {Array.<string>|null} [remove] XAttrsChanges remove
         */

        /**
         * Constructs a new XAttrsChanges.
         * @memberof file
         * @classdesc Represents a XAttrsChanges.
         * @implements IXAttrsChanges
         * @constructor
         * @param {file.IXAttrsChanges=} [properties] Properties to set
         */
        function XAttrsChanges(properties) {
            this.set = [];
            this.remove = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XAttrsChanges set.
         * @member {Array.<file.INameAndXAttrValue>} set
         * @memberof file.XAttrsChanges
         * @instance
         */
        XAttrsChanges.prototype.set = $util.emptyArray;

        /**
         * XAttrsChanges remove.
         * @member {Array.<string>} remove
         * @memberof file.XAttrsChanges
         * @instance
         */
        XAttrsChanges.prototype.remove = $util.emptyArray;

        /**
         * Creates a new XAttrsChanges instance using the specified properties.
         * @function create
         * @memberof file.XAttrsChanges
         * @static
         * @param {file.IXAttrsChanges=} [properties] Properties to set
         * @returns {file.XAttrsChanges} XAttrsChanges instance
         */
        XAttrsChanges.create = function create(properties) {
            return new XAttrsChanges(properties);
        };

        /**
         * Encodes the specified XAttrsChanges message. Does not implicitly {@link file.XAttrsChanges.verify|verify} messages.
         * @function encode
         * @memberof file.XAttrsChanges
         * @static
         * @param {file.IXAttrsChanges} message XAttrsChanges message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XAttrsChanges.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.set != null && message.set.length)
                for (var i = 0; i < message.set.length; ++i)
                    $root.file.NameAndXAttrValue.encode(message.set[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.remove != null && message.remove.length)
                for (var i = 0; i < message.remove.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.remove[i]);
            return writer;
        };

        /**
         * Encodes the specified XAttrsChanges message, length delimited. Does not implicitly {@link file.XAttrsChanges.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.XAttrsChanges
         * @static
         * @param {file.IXAttrsChanges} message XAttrsChanges message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XAttrsChanges.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XAttrsChanges message from the specified reader or buffer.
         * @function decode
         * @memberof file.XAttrsChanges
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.XAttrsChanges} XAttrsChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XAttrsChanges.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.XAttrsChanges();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.set && message.set.length))
                            message.set = [];
                        message.set.push($root.file.NameAndXAttrValue.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.remove && message.remove.length))
                            message.remove = [];
                        message.remove.push(reader.string());
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
         * Decodes a XAttrsChanges message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.XAttrsChanges
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.XAttrsChanges} XAttrsChanges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XAttrsChanges.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XAttrsChanges message.
         * @function verify
         * @memberof file.XAttrsChanges
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XAttrsChanges.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.set != null && message.hasOwnProperty("set")) {
                if (!Array.isArray(message.set))
                    return "set: array expected";
                for (var i = 0; i < message.set.length; ++i) {
                    var error = $root.file.NameAndXAttrValue.verify(message.set[i]);
                    if (error)
                        return "set." + error;
                }
            }
            if (message.remove != null && message.hasOwnProperty("remove")) {
                if (!Array.isArray(message.remove))
                    return "remove: array expected";
                for (var i = 0; i < message.remove.length; ++i)
                    if (!$util.isString(message.remove[i]))
                        return "remove: string[] expected";
            }
            return null;
        };

        /**
         * Creates a XAttrsChanges message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.XAttrsChanges
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.XAttrsChanges} XAttrsChanges
         */
        XAttrsChanges.fromObject = function fromObject(object) {
            if (object instanceof $root.file.XAttrsChanges)
                return object;
            var message = new $root.file.XAttrsChanges();
            if (object.set) {
                if (!Array.isArray(object.set))
                    throw TypeError(".file.XAttrsChanges.set: array expected");
                message.set = [];
                for (var i = 0; i < object.set.length; ++i) {
                    if (typeof object.set[i] !== "object")
                        throw TypeError(".file.XAttrsChanges.set: object expected");
                    message.set[i] = $root.file.NameAndXAttrValue.fromObject(object.set[i]);
                }
            }
            if (object.remove) {
                if (!Array.isArray(object.remove))
                    throw TypeError(".file.XAttrsChanges.remove: array expected");
                message.remove = [];
                for (var i = 0; i < object.remove.length; ++i)
                    message.remove[i] = String(object.remove[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a XAttrsChanges message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.XAttrsChanges
         * @static
         * @param {file.XAttrsChanges} message XAttrsChanges
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        XAttrsChanges.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.set = [];
                object.remove = [];
            }
            if (message.set && message.set.length) {
                object.set = [];
                for (var j = 0; j < message.set.length; ++j)
                    object.set[j] = $root.file.NameAndXAttrValue.toObject(message.set[j], options);
            }
            if (message.remove && message.remove.length) {
                object.remove = [];
                for (var j = 0; j < message.remove.length; ++j)
                    object.remove[j] = message.remove[j];
            }
            return object;
        };

        /**
         * Converts this XAttrsChanges to JSON.
         * @function toJSON
         * @memberof file.XAttrsChanges
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        XAttrsChanges.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for XAttrsChanges
         * @function getTypeUrl
         * @memberof file.XAttrsChanges
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        XAttrsChanges.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.XAttrsChanges";
        };

        return XAttrsChanges;
    })();

    file.WriteBytesRequestBody = (function() {

        /**
         * Properties of a WriteBytesRequestBody.
         * @memberof file
         * @interface IWriteBytesRequestBody
         * @property {Uint8Array|null} [bytes] WriteBytesRequestBody bytes
         */

        /**
         * Constructs a new WriteBytesRequestBody.
         * @memberof file
         * @classdesc Represents a WriteBytesRequestBody.
         * @implements IWriteBytesRequestBody
         * @constructor
         * @param {file.IWriteBytesRequestBody=} [properties] Properties to set
         */
        function WriteBytesRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteBytesRequestBody bytes.
         * @member {Uint8Array} bytes
         * @memberof file.WriteBytesRequestBody
         * @instance
         */
        WriteBytesRequestBody.prototype.bytes = $util.newBuffer([]);

        /**
         * Creates a new WriteBytesRequestBody instance using the specified properties.
         * @function create
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {file.IWriteBytesRequestBody=} [properties] Properties to set
         * @returns {file.WriteBytesRequestBody} WriteBytesRequestBody instance
         */
        WriteBytesRequestBody.create = function create(properties) {
            return new WriteBytesRequestBody(properties);
        };

        /**
         * Encodes the specified WriteBytesRequestBody message. Does not implicitly {@link file.WriteBytesRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {file.IWriteBytesRequestBody} message WriteBytesRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteBytesRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.bytes);
            return writer;
        };

        /**
         * Encodes the specified WriteBytesRequestBody message, length delimited. Does not implicitly {@link file.WriteBytesRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {file.IWriteBytesRequestBody} message WriteBytesRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteBytesRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteBytesRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.WriteBytesRequestBody} WriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteBytesRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.WriteBytesRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.bytes = reader.bytes();
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
         * Decodes a WriteBytesRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.WriteBytesRequestBody} WriteBytesRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteBytesRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteBytesRequestBody message.
         * @function verify
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteBytesRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                if (!(message.bytes && typeof message.bytes.length === "number" || $util.isString(message.bytes)))
                    return "bytes: buffer expected";
            return null;
        };

        /**
         * Creates a WriteBytesRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.WriteBytesRequestBody} WriteBytesRequestBody
         */
        WriteBytesRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.WriteBytesRequestBody)
                return object;
            var message = new $root.file.WriteBytesRequestBody();
            if (object.bytes != null)
                if (typeof object.bytes === "string")
                    $util.base64.decode(object.bytes, message.bytes = $util.newBuffer($util.base64.length(object.bytes)), 0);
                else if (object.bytes.length >= 0)
                    message.bytes = object.bytes;
            return message;
        };

        /**
         * Creates a plain object from a WriteBytesRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {file.WriteBytesRequestBody} message WriteBytesRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteBytesRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.bytes = "";
                else {
                    object.bytes = [];
                    if (options.bytes !== Array)
                        object.bytes = $util.newBuffer(object.bytes);
                }
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                object.bytes = options.bytes === String ? $util.base64.encode(message.bytes, 0, message.bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes) : message.bytes;
            return object;
        };

        /**
         * Converts this WriteBytesRequestBody to JSON.
         * @function toJSON
         * @memberof file.WriteBytesRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteBytesRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WriteBytesRequestBody
         * @function getTypeUrl
         * @memberof file.WriteBytesRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WriteBytesRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.WriteBytesRequestBody";
        };

        return WriteBytesRequestBody;
    })();

    file.WriteTxtRequestBody = (function() {

        /**
         * Properties of a WriteTxtRequestBody.
         * @memberof file
         * @interface IWriteTxtRequestBody
         * @property {string|null} [txt] WriteTxtRequestBody txt
         */

        /**
         * Constructs a new WriteTxtRequestBody.
         * @memberof file
         * @classdesc Represents a WriteTxtRequestBody.
         * @implements IWriteTxtRequestBody
         * @constructor
         * @param {file.IWriteTxtRequestBody=} [properties] Properties to set
         */
        function WriteTxtRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteTxtRequestBody txt.
         * @member {string} txt
         * @memberof file.WriteTxtRequestBody
         * @instance
         */
        WriteTxtRequestBody.prototype.txt = "";

        /**
         * Creates a new WriteTxtRequestBody instance using the specified properties.
         * @function create
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {file.IWriteTxtRequestBody=} [properties] Properties to set
         * @returns {file.WriteTxtRequestBody} WriteTxtRequestBody instance
         */
        WriteTxtRequestBody.create = function create(properties) {
            return new WriteTxtRequestBody(properties);
        };

        /**
         * Encodes the specified WriteTxtRequestBody message. Does not implicitly {@link file.WriteTxtRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {file.IWriteTxtRequestBody} message WriteTxtRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteTxtRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.txt != null && Object.hasOwnProperty.call(message, "txt"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.txt);
            return writer;
        };

        /**
         * Encodes the specified WriteTxtRequestBody message, length delimited. Does not implicitly {@link file.WriteTxtRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {file.IWriteTxtRequestBody} message WriteTxtRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteTxtRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteTxtRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.WriteTxtRequestBody} WriteTxtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteTxtRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.WriteTxtRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.txt = reader.string();
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
         * Decodes a WriteTxtRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.WriteTxtRequestBody} WriteTxtRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteTxtRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteTxtRequestBody message.
         * @function verify
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteTxtRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.txt != null && message.hasOwnProperty("txt"))
                if (!$util.isString(message.txt))
                    return "txt: string expected";
            return null;
        };

        /**
         * Creates a WriteTxtRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.WriteTxtRequestBody} WriteTxtRequestBody
         */
        WriteTxtRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.WriteTxtRequestBody)
                return object;
            var message = new $root.file.WriteTxtRequestBody();
            if (object.txt != null)
                message.txt = String(object.txt);
            return message;
        };

        /**
         * Creates a plain object from a WriteTxtRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {file.WriteTxtRequestBody} message WriteTxtRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteTxtRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.txt = "";
            if (message.txt != null && message.hasOwnProperty("txt"))
                object.txt = message.txt;
            return object;
        };

        /**
         * Converts this WriteTxtRequestBody to JSON.
         * @function toJSON
         * @memberof file.WriteTxtRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteTxtRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WriteTxtRequestBody
         * @function getTypeUrl
         * @memberof file.WriteTxtRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WriteTxtRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.WriteTxtRequestBody";
        };

        return WriteTxtRequestBody;
    })();

    file.WriteJsonRequestBody = (function() {

        /**
         * Properties of a WriteJsonRequestBody.
         * @memberof file
         * @interface IWriteJsonRequestBody
         * @property {string|null} [json] WriteJsonRequestBody json
         */

        /**
         * Constructs a new WriteJsonRequestBody.
         * @memberof file
         * @classdesc Represents a WriteJsonRequestBody.
         * @implements IWriteJsonRequestBody
         * @constructor
         * @param {file.IWriteJsonRequestBody=} [properties] Properties to set
         */
        function WriteJsonRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteJsonRequestBody json.
         * @member {string} json
         * @memberof file.WriteJsonRequestBody
         * @instance
         */
        WriteJsonRequestBody.prototype.json = "";

        /**
         * Creates a new WriteJsonRequestBody instance using the specified properties.
         * @function create
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {file.IWriteJsonRequestBody=} [properties] Properties to set
         * @returns {file.WriteJsonRequestBody} WriteJsonRequestBody instance
         */
        WriteJsonRequestBody.create = function create(properties) {
            return new WriteJsonRequestBody(properties);
        };

        /**
         * Encodes the specified WriteJsonRequestBody message. Does not implicitly {@link file.WriteJsonRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {file.IWriteJsonRequestBody} message WriteJsonRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteJsonRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.json);
            return writer;
        };

        /**
         * Encodes the specified WriteJsonRequestBody message, length delimited. Does not implicitly {@link file.WriteJsonRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {file.IWriteJsonRequestBody} message WriteJsonRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteJsonRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteJsonRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.WriteJsonRequestBody} WriteJsonRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteJsonRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.WriteJsonRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.json = reader.string();
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
         * Decodes a WriteJsonRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.WriteJsonRequestBody} WriteJsonRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteJsonRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteJsonRequestBody message.
         * @function verify
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteJsonRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.json != null && message.hasOwnProperty("json"))
                if (!$util.isString(message.json))
                    return "json: string expected";
            return null;
        };

        /**
         * Creates a WriteJsonRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.WriteJsonRequestBody} WriteJsonRequestBody
         */
        WriteJsonRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.WriteJsonRequestBody)
                return object;
            var message = new $root.file.WriteJsonRequestBody();
            if (object.json != null)
                message.json = String(object.json);
            return message;
        };

        /**
         * Creates a plain object from a WriteJsonRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {file.WriteJsonRequestBody} message WriteJsonRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteJsonRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.json = "";
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = message.json;
            return object;
        };

        /**
         * Converts this WriteJsonRequestBody to JSON.
         * @function toJSON
         * @memberof file.WriteJsonRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteJsonRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WriteJsonRequestBody
         * @function getTypeUrl
         * @memberof file.WriteJsonRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WriteJsonRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.WriteJsonRequestBody";
        };

        return WriteJsonRequestBody;
    })();

    file.GetByteSinkRequestBody = (function() {

        /**
         * Properties of a GetByteSinkRequestBody.
         * @memberof file
         * @interface IGetByteSinkRequestBody
         * @property {common.IBooleanValue|null} [truncateFile] GetByteSinkRequestBody truncateFile
         */

        /**
         * Constructs a new GetByteSinkRequestBody.
         * @memberof file
         * @classdesc Represents a GetByteSinkRequestBody.
         * @implements IGetByteSinkRequestBody
         * @constructor
         * @param {file.IGetByteSinkRequestBody=} [properties] Properties to set
         */
        function GetByteSinkRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetByteSinkRequestBody truncateFile.
         * @member {common.IBooleanValue|null|undefined} truncateFile
         * @memberof file.GetByteSinkRequestBody
         * @instance
         */
        GetByteSinkRequestBody.prototype.truncateFile = null;

        /**
         * Creates a new GetByteSinkRequestBody instance using the specified properties.
         * @function create
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {file.IGetByteSinkRequestBody=} [properties] Properties to set
         * @returns {file.GetByteSinkRequestBody} GetByteSinkRequestBody instance
         */
        GetByteSinkRequestBody.create = function create(properties) {
            return new GetByteSinkRequestBody(properties);
        };

        /**
         * Encodes the specified GetByteSinkRequestBody message. Does not implicitly {@link file.GetByteSinkRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {file.IGetByteSinkRequestBody} message GetByteSinkRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetByteSinkRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.truncateFile != null && Object.hasOwnProperty.call(message, "truncateFile"))
                $root.common.BooleanValue.encode(message.truncateFile, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetByteSinkRequestBody message, length delimited. Does not implicitly {@link file.GetByteSinkRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {file.IGetByteSinkRequestBody} message GetByteSinkRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetByteSinkRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetByteSinkRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.GetByteSinkRequestBody} GetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetByteSinkRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.GetByteSinkRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.truncateFile = $root.common.BooleanValue.decode(reader, reader.uint32());
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
         * Decodes a GetByteSinkRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.GetByteSinkRequestBody} GetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetByteSinkRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetByteSinkRequestBody message.
         * @function verify
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetByteSinkRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.truncateFile != null && message.hasOwnProperty("truncateFile")) {
                var error = $root.common.BooleanValue.verify(message.truncateFile);
                if (error)
                    return "truncateFile." + error;
            }
            return null;
        };

        /**
         * Creates a GetByteSinkRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.GetByteSinkRequestBody} GetByteSinkRequestBody
         */
        GetByteSinkRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.GetByteSinkRequestBody)
                return object;
            var message = new $root.file.GetByteSinkRequestBody();
            if (object.truncateFile != null) {
                if (typeof object.truncateFile !== "object")
                    throw TypeError(".file.GetByteSinkRequestBody.truncateFile: object expected");
                message.truncateFile = $root.common.BooleanValue.fromObject(object.truncateFile);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetByteSinkRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {file.GetByteSinkRequestBody} message GetByteSinkRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetByteSinkRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.truncateFile = null;
            if (message.truncateFile != null && message.hasOwnProperty("truncateFile"))
                object.truncateFile = $root.common.BooleanValue.toObject(message.truncateFile, options);
            return object;
        };

        /**
         * Converts this GetByteSinkRequestBody to JSON.
         * @function toJSON
         * @memberof file.GetByteSinkRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetByteSinkRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetByteSinkRequestBody
         * @function getTypeUrl
         * @memberof file.GetByteSinkRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetByteSinkRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.GetByteSinkRequestBody";
        };

        return GetByteSinkRequestBody;
    })();

    file.CopyRequestBody = (function() {

        /**
         * Properties of a CopyRequestBody.
         * @memberof file
         * @interface ICopyRequestBody
         * @property {common.IObjectReference|null} [file] CopyRequestBody file
         */

        /**
         * Constructs a new CopyRequestBody.
         * @memberof file
         * @classdesc Represents a CopyRequestBody.
         * @implements ICopyRequestBody
         * @constructor
         * @param {file.ICopyRequestBody=} [properties] Properties to set
         */
        function CopyRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CopyRequestBody file.
         * @member {common.IObjectReference|null|undefined} file
         * @memberof file.CopyRequestBody
         * @instance
         */
        CopyRequestBody.prototype.file = null;

        /**
         * Creates a new CopyRequestBody instance using the specified properties.
         * @function create
         * @memberof file.CopyRequestBody
         * @static
         * @param {file.ICopyRequestBody=} [properties] Properties to set
         * @returns {file.CopyRequestBody} CopyRequestBody instance
         */
        CopyRequestBody.create = function create(properties) {
            return new CopyRequestBody(properties);
        };

        /**
         * Encodes the specified CopyRequestBody message. Does not implicitly {@link file.CopyRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.CopyRequestBody
         * @static
         * @param {file.ICopyRequestBody} message CopyRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CopyRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.common.ObjectReference.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CopyRequestBody message, length delimited. Does not implicitly {@link file.CopyRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.CopyRequestBody
         * @static
         * @param {file.ICopyRequestBody} message CopyRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CopyRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CopyRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.CopyRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.CopyRequestBody} CopyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CopyRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.CopyRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.file = $root.common.ObjectReference.decode(reader, reader.uint32());
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
         * Decodes a CopyRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.CopyRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.CopyRequestBody} CopyRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CopyRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CopyRequestBody message.
         * @function verify
         * @memberof file.CopyRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CopyRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.file != null && message.hasOwnProperty("file")) {
                var error = $root.common.ObjectReference.verify(message.file);
                if (error)
                    return "file." + error;
            }
            return null;
        };

        /**
         * Creates a CopyRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.CopyRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.CopyRequestBody} CopyRequestBody
         */
        CopyRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.CopyRequestBody)
                return object;
            var message = new $root.file.CopyRequestBody();
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".file.CopyRequestBody.file: object expected");
                message.file = $root.common.ObjectReference.fromObject(object.file);
            }
            return message;
        };

        /**
         * Creates a plain object from a CopyRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.CopyRequestBody
         * @static
         * @param {file.CopyRequestBody} message CopyRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CopyRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.file = null;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = $root.common.ObjectReference.toObject(message.file, options);
            return object;
        };

        /**
         * Converts this CopyRequestBody to JSON.
         * @function toJSON
         * @memberof file.CopyRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CopyRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CopyRequestBody
         * @function getTypeUrl
         * @memberof file.CopyRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CopyRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.CopyRequestBody";
        };

        return CopyRequestBody;
    })();

    file.VersionedGetByteSinkRequestBody = (function() {

        /**
         * Properties of a VersionedGetByteSinkRequestBody.
         * @memberof file
         * @interface IVersionedGetByteSinkRequestBody
         * @property {common.IBooleanValue|null} [truncateFile] VersionedGetByteSinkRequestBody truncateFile
         * @property {common.IUInt64Value|null} [currentVersion] VersionedGetByteSinkRequestBody currentVersion
         */

        /**
         * Constructs a new VersionedGetByteSinkRequestBody.
         * @memberof file
         * @classdesc Represents a VersionedGetByteSinkRequestBody.
         * @implements IVersionedGetByteSinkRequestBody
         * @constructor
         * @param {file.IVersionedGetByteSinkRequestBody=} [properties] Properties to set
         */
        function VersionedGetByteSinkRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedGetByteSinkRequestBody truncateFile.
         * @member {common.IBooleanValue|null|undefined} truncateFile
         * @memberof file.VersionedGetByteSinkRequestBody
         * @instance
         */
        VersionedGetByteSinkRequestBody.prototype.truncateFile = null;

        /**
         * VersionedGetByteSinkRequestBody currentVersion.
         * @member {common.IUInt64Value|null|undefined} currentVersion
         * @memberof file.VersionedGetByteSinkRequestBody
         * @instance
         */
        VersionedGetByteSinkRequestBody.prototype.currentVersion = null;

        /**
         * Creates a new VersionedGetByteSinkRequestBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {file.IVersionedGetByteSinkRequestBody=} [properties] Properties to set
         * @returns {file.VersionedGetByteSinkRequestBody} VersionedGetByteSinkRequestBody instance
         */
        VersionedGetByteSinkRequestBody.create = function create(properties) {
            return new VersionedGetByteSinkRequestBody(properties);
        };

        /**
         * Encodes the specified VersionedGetByteSinkRequestBody message. Does not implicitly {@link file.VersionedGetByteSinkRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {file.IVersionedGetByteSinkRequestBody} message VersionedGetByteSinkRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetByteSinkRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.truncateFile != null && Object.hasOwnProperty.call(message, "truncateFile"))
                $root.common.BooleanValue.encode(message.truncateFile, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.currentVersion != null && Object.hasOwnProperty.call(message, "currentVersion"))
                $root.common.UInt64Value.encode(message.currentVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedGetByteSinkRequestBody message, length delimited. Does not implicitly {@link file.VersionedGetByteSinkRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {file.IVersionedGetByteSinkRequestBody} message VersionedGetByteSinkRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetByteSinkRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedGetByteSinkRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedGetByteSinkRequestBody} VersionedGetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetByteSinkRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedGetByteSinkRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.truncateFile = $root.common.BooleanValue.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.currentVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes a VersionedGetByteSinkRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedGetByteSinkRequestBody} VersionedGetByteSinkRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetByteSinkRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedGetByteSinkRequestBody message.
         * @function verify
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedGetByteSinkRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.truncateFile != null && message.hasOwnProperty("truncateFile")) {
                var error = $root.common.BooleanValue.verify(message.truncateFile);
                if (error)
                    return "truncateFile." + error;
            }
            if (message.currentVersion != null && message.hasOwnProperty("currentVersion")) {
                var error = $root.common.UInt64Value.verify(message.currentVersion);
                if (error)
                    return "currentVersion." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedGetByteSinkRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedGetByteSinkRequestBody} VersionedGetByteSinkRequestBody
         */
        VersionedGetByteSinkRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedGetByteSinkRequestBody)
                return object;
            var message = new $root.file.VersionedGetByteSinkRequestBody();
            if (object.truncateFile != null) {
                if (typeof object.truncateFile !== "object")
                    throw TypeError(".file.VersionedGetByteSinkRequestBody.truncateFile: object expected");
                message.truncateFile = $root.common.BooleanValue.fromObject(object.truncateFile);
            }
            if (object.currentVersion != null) {
                if (typeof object.currentVersion !== "object")
                    throw TypeError(".file.VersionedGetByteSinkRequestBody.currentVersion: object expected");
                message.currentVersion = $root.common.UInt64Value.fromObject(object.currentVersion);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedGetByteSinkRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {file.VersionedGetByteSinkRequestBody} message VersionedGetByteSinkRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedGetByteSinkRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.truncateFile = null;
                object.currentVersion = null;
            }
            if (message.truncateFile != null && message.hasOwnProperty("truncateFile"))
                object.truncateFile = $root.common.BooleanValue.toObject(message.truncateFile, options);
            if (message.currentVersion != null && message.hasOwnProperty("currentVersion"))
                object.currentVersion = $root.common.UInt64Value.toObject(message.currentVersion, options);
            return object;
        };

        /**
         * Converts this VersionedGetByteSinkRequestBody to JSON.
         * @function toJSON
         * @memberof file.VersionedGetByteSinkRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedGetByteSinkRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedGetByteSinkRequestBody
         * @function getTypeUrl
         * @memberof file.VersionedGetByteSinkRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedGetByteSinkRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedGetByteSinkRequestBody";
        };

        return VersionedGetByteSinkRequestBody;
    })();

    file.VersionedGetByteSinkReplyBody = (function() {

        /**
         * Properties of a VersionedGetByteSinkReplyBody.
         * @memberof file
         * @interface IVersionedGetByteSinkReplyBody
         * @property {number|Long|null} [version] VersionedGetByteSinkReplyBody version
         * @property {common.IObjectReference|null} [sink] VersionedGetByteSinkReplyBody sink
         */

        /**
         * Constructs a new VersionedGetByteSinkReplyBody.
         * @memberof file
         * @classdesc Represents a VersionedGetByteSinkReplyBody.
         * @implements IVersionedGetByteSinkReplyBody
         * @constructor
         * @param {file.IVersionedGetByteSinkReplyBody=} [properties] Properties to set
         */
        function VersionedGetByteSinkReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionedGetByteSinkReplyBody version.
         * @member {number|Long} version
         * @memberof file.VersionedGetByteSinkReplyBody
         * @instance
         */
        VersionedGetByteSinkReplyBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VersionedGetByteSinkReplyBody sink.
         * @member {common.IObjectReference|null|undefined} sink
         * @memberof file.VersionedGetByteSinkReplyBody
         * @instance
         */
        VersionedGetByteSinkReplyBody.prototype.sink = null;

        /**
         * Creates a new VersionedGetByteSinkReplyBody instance using the specified properties.
         * @function create
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {file.IVersionedGetByteSinkReplyBody=} [properties] Properties to set
         * @returns {file.VersionedGetByteSinkReplyBody} VersionedGetByteSinkReplyBody instance
         */
        VersionedGetByteSinkReplyBody.create = function create(properties) {
            return new VersionedGetByteSinkReplyBody(properties);
        };

        /**
         * Encodes the specified VersionedGetByteSinkReplyBody message. Does not implicitly {@link file.VersionedGetByteSinkReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {file.IVersionedGetByteSinkReplyBody} message VersionedGetByteSinkReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetByteSinkReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.sink != null && Object.hasOwnProperty.call(message, "sink"))
                $root.common.ObjectReference.encode(message.sink, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionedGetByteSinkReplyBody message, length delimited. Does not implicitly {@link file.VersionedGetByteSinkReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {file.IVersionedGetByteSinkReplyBody} message VersionedGetByteSinkReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionedGetByteSinkReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionedGetByteSinkReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.VersionedGetByteSinkReplyBody} VersionedGetByteSinkReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetByteSinkReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.VersionedGetByteSinkReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
                        break;
                    }
                case 2: {
                        message.sink = $root.common.ObjectReference.decode(reader, reader.uint32());
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
         * Decodes a VersionedGetByteSinkReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.VersionedGetByteSinkReplyBody} VersionedGetByteSinkReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionedGetByteSinkReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionedGetByteSinkReplyBody message.
         * @function verify
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionedGetByteSinkReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.sink != null && message.hasOwnProperty("sink")) {
                var error = $root.common.ObjectReference.verify(message.sink);
                if (error)
                    return "sink." + error;
            }
            return null;
        };

        /**
         * Creates a VersionedGetByteSinkReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.VersionedGetByteSinkReplyBody} VersionedGetByteSinkReplyBody
         */
        VersionedGetByteSinkReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.VersionedGetByteSinkReplyBody)
                return object;
            var message = new $root.file.VersionedGetByteSinkReplyBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.sink != null) {
                if (typeof object.sink !== "object")
                    throw TypeError(".file.VersionedGetByteSinkReplyBody.sink: object expected");
                message.sink = $root.common.ObjectReference.fromObject(object.sink);
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionedGetByteSinkReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {file.VersionedGetByteSinkReplyBody} message VersionedGetByteSinkReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionedGetByteSinkReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.sink = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.sink != null && message.hasOwnProperty("sink"))
                object.sink = $root.common.ObjectReference.toObject(message.sink, options);
            return object;
        };

        /**
         * Converts this VersionedGetByteSinkReplyBody to JSON.
         * @function toJSON
         * @memberof file.VersionedGetByteSinkReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionedGetByteSinkReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VersionedGetByteSinkReplyBody
         * @function getTypeUrl
         * @memberof file.VersionedGetByteSinkReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VersionedGetByteSinkReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.VersionedGetByteSinkReplyBody";
        };

        return VersionedGetByteSinkReplyBody;
    })();

    file.ArchiveCurrentRequestBody = (function() {

        /**
         * Properties of an ArchiveCurrentRequestBody.
         * @memberof file
         * @interface IArchiveCurrentRequestBody
         * @property {common.IUInt64Value|null} [version] ArchiveCurrentRequestBody version
         */

        /**
         * Constructs a new ArchiveCurrentRequestBody.
         * @memberof file
         * @classdesc Represents an ArchiveCurrentRequestBody.
         * @implements IArchiveCurrentRequestBody
         * @constructor
         * @param {file.IArchiveCurrentRequestBody=} [properties] Properties to set
         */
        function ArchiveCurrentRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArchiveCurrentRequestBody version.
         * @member {common.IUInt64Value|null|undefined} version
         * @memberof file.ArchiveCurrentRequestBody
         * @instance
         */
        ArchiveCurrentRequestBody.prototype.version = null;

        /**
         * Creates a new ArchiveCurrentRequestBody instance using the specified properties.
         * @function create
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {file.IArchiveCurrentRequestBody=} [properties] Properties to set
         * @returns {file.ArchiveCurrentRequestBody} ArchiveCurrentRequestBody instance
         */
        ArchiveCurrentRequestBody.create = function create(properties) {
            return new ArchiveCurrentRequestBody(properties);
        };

        /**
         * Encodes the specified ArchiveCurrentRequestBody message. Does not implicitly {@link file.ArchiveCurrentRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {file.IArchiveCurrentRequestBody} message ArchiveCurrentRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArchiveCurrentRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                $root.common.UInt64Value.encode(message.version, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArchiveCurrentRequestBody message, length delimited. Does not implicitly {@link file.ArchiveCurrentRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {file.IArchiveCurrentRequestBody} message ArchiveCurrentRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArchiveCurrentRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArchiveCurrentRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ArchiveCurrentRequestBody} ArchiveCurrentRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArchiveCurrentRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ArchiveCurrentRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes an ArchiveCurrentRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.ArchiveCurrentRequestBody} ArchiveCurrentRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArchiveCurrentRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArchiveCurrentRequestBody message.
         * @function verify
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArchiveCurrentRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version")) {
                var error = $root.common.UInt64Value.verify(message.version);
                if (error)
                    return "version." + error;
            }
            return null;
        };

        /**
         * Creates an ArchiveCurrentRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.ArchiveCurrentRequestBody} ArchiveCurrentRequestBody
         */
        ArchiveCurrentRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.ArchiveCurrentRequestBody)
                return object;
            var message = new $root.file.ArchiveCurrentRequestBody();
            if (object.version != null) {
                if (typeof object.version !== "object")
                    throw TypeError(".file.ArchiveCurrentRequestBody.version: object expected");
                message.version = $root.common.UInt64Value.fromObject(object.version);
            }
            return message;
        };

        /**
         * Creates a plain object from an ArchiveCurrentRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {file.ArchiveCurrentRequestBody} message ArchiveCurrentRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArchiveCurrentRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = null;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = $root.common.UInt64Value.toObject(message.version, options);
            return object;
        };

        /**
         * Converts this ArchiveCurrentRequestBody to JSON.
         * @function toJSON
         * @memberof file.ArchiveCurrentRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArchiveCurrentRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ArchiveCurrentRequestBody
         * @function getTypeUrl
         * @memberof file.ArchiveCurrentRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ArchiveCurrentRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ArchiveCurrentRequestBody";
        };

        return ArchiveCurrentRequestBody;
    })();

    file.FileSyncIsOnDiskRequestBody = (function() {

        /**
         * Properties of a FileSyncIsOnDiskRequestBody.
         * @memberof file
         * @interface IFileSyncIsOnDiskRequestBody
         * @property {number|Long|null} [version] FileSyncIsOnDiskRequestBody version
         */

        /**
         * Constructs a new FileSyncIsOnDiskRequestBody.
         * @memberof file
         * @classdesc Represents a FileSyncIsOnDiskRequestBody.
         * @implements IFileSyncIsOnDiskRequestBody
         * @constructor
         * @param {file.IFileSyncIsOnDiskRequestBody=} [properties] Properties to set
         */
        function FileSyncIsOnDiskRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncIsOnDiskRequestBody version.
         * @member {number|Long} version
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @instance
         */
        FileSyncIsOnDiskRequestBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new FileSyncIsOnDiskRequestBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {file.IFileSyncIsOnDiskRequestBody=} [properties] Properties to set
         * @returns {file.FileSyncIsOnDiskRequestBody} FileSyncIsOnDiskRequestBody instance
         */
        FileSyncIsOnDiskRequestBody.create = function create(properties) {
            return new FileSyncIsOnDiskRequestBody(properties);
        };

        /**
         * Encodes the specified FileSyncIsOnDiskRequestBody message. Does not implicitly {@link file.FileSyncIsOnDiskRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {file.IFileSyncIsOnDiskRequestBody} message FileSyncIsOnDiskRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncIsOnDiskRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            return writer;
        };

        /**
         * Encodes the specified FileSyncIsOnDiskRequestBody message, length delimited. Does not implicitly {@link file.FileSyncIsOnDiskRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {file.IFileSyncIsOnDiskRequestBody} message FileSyncIsOnDiskRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncIsOnDiskRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncIsOnDiskRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncIsOnDiskRequestBody} FileSyncIsOnDiskRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncIsOnDiskRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncIsOnDiskRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
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
         * Decodes a FileSyncIsOnDiskRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncIsOnDiskRequestBody} FileSyncIsOnDiskRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncIsOnDiskRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncIsOnDiskRequestBody message.
         * @function verify
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncIsOnDiskRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            return null;
        };

        /**
         * Creates a FileSyncIsOnDiskRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncIsOnDiskRequestBody} FileSyncIsOnDiskRequestBody
         */
        FileSyncIsOnDiskRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncIsOnDiskRequestBody)
                return object;
            var message = new $root.file.FileSyncIsOnDiskRequestBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a FileSyncIsOnDiskRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {file.FileSyncIsOnDiskRequestBody} message FileSyncIsOnDiskRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncIsOnDiskRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            return object;
        };

        /**
         * Converts this FileSyncIsOnDiskRequestBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncIsOnDiskRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncIsOnDiskRequestBody
         * @function getTypeUrl
         * @memberof file.FileSyncIsOnDiskRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncIsOnDiskRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncIsOnDiskRequestBody";
        };

        return FileSyncIsOnDiskRequestBody;
    })();

    file.FileSyncIsOnDiskReplyBody = (function() {

        /**
         * Properties of a FileSyncIsOnDiskReplyBody.
         * @memberof file
         * @interface IFileSyncIsOnDiskReplyBody
         * @property {string|null} [status] FileSyncIsOnDiskReplyBody status
         */

        /**
         * Constructs a new FileSyncIsOnDiskReplyBody.
         * @memberof file
         * @classdesc Represents a FileSyncIsOnDiskReplyBody.
         * @implements IFileSyncIsOnDiskReplyBody
         * @constructor
         * @param {file.IFileSyncIsOnDiskReplyBody=} [properties] Properties to set
         */
        function FileSyncIsOnDiskReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncIsOnDiskReplyBody status.
         * @member {string} status
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @instance
         */
        FileSyncIsOnDiskReplyBody.prototype.status = "";

        /**
         * Creates a new FileSyncIsOnDiskReplyBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {file.IFileSyncIsOnDiskReplyBody=} [properties] Properties to set
         * @returns {file.FileSyncIsOnDiskReplyBody} FileSyncIsOnDiskReplyBody instance
         */
        FileSyncIsOnDiskReplyBody.create = function create(properties) {
            return new FileSyncIsOnDiskReplyBody(properties);
        };

        /**
         * Encodes the specified FileSyncIsOnDiskReplyBody message. Does not implicitly {@link file.FileSyncIsOnDiskReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {file.IFileSyncIsOnDiskReplyBody} message FileSyncIsOnDiskReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncIsOnDiskReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
            return writer;
        };

        /**
         * Encodes the specified FileSyncIsOnDiskReplyBody message, length delimited. Does not implicitly {@link file.FileSyncIsOnDiskReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {file.IFileSyncIsOnDiskReplyBody} message FileSyncIsOnDiskReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncIsOnDiskReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncIsOnDiskReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncIsOnDiskReplyBody} FileSyncIsOnDiskReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncIsOnDiskReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncIsOnDiskReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.string();
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
         * Decodes a FileSyncIsOnDiskReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncIsOnDiskReplyBody} FileSyncIsOnDiskReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncIsOnDiskReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncIsOnDiskReplyBody message.
         * @function verify
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncIsOnDiskReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            return null;
        };

        /**
         * Creates a FileSyncIsOnDiskReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncIsOnDiskReplyBody} FileSyncIsOnDiskReplyBody
         */
        FileSyncIsOnDiskReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncIsOnDiskReplyBody)
                return object;
            var message = new $root.file.FileSyncIsOnDiskReplyBody();
            if (object.status != null)
                message.status = String(object.status);
            return message;
        };

        /**
         * Creates a plain object from a FileSyncIsOnDiskReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {file.FileSyncIsOnDiskReplyBody} message FileSyncIsOnDiskReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncIsOnDiskReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = "";
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this FileSyncIsOnDiskReplyBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncIsOnDiskReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncIsOnDiskReplyBody
         * @function getTypeUrl
         * @memberof file.FileSyncIsOnDiskReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncIsOnDiskReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncIsOnDiskReplyBody";
        };

        return FileSyncIsOnDiskReplyBody;
    })();

    file.FileSyncStartDownloadRequestBody = (function() {

        /**
         * Properties of a FileSyncStartDownloadRequestBody.
         * @memberof file
         * @interface IFileSyncStartDownloadRequestBody
         * @property {number|Long|null} [version] FileSyncStartDownloadRequestBody version
         */

        /**
         * Constructs a new FileSyncStartDownloadRequestBody.
         * @memberof file
         * @classdesc Represents a FileSyncStartDownloadRequestBody.
         * @implements IFileSyncStartDownloadRequestBody
         * @constructor
         * @param {file.IFileSyncStartDownloadRequestBody=} [properties] Properties to set
         */
        function FileSyncStartDownloadRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncStartDownloadRequestBody version.
         * @member {number|Long} version
         * @memberof file.FileSyncStartDownloadRequestBody
         * @instance
         */
        FileSyncStartDownloadRequestBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new FileSyncStartDownloadRequestBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {file.IFileSyncStartDownloadRequestBody=} [properties] Properties to set
         * @returns {file.FileSyncStartDownloadRequestBody} FileSyncStartDownloadRequestBody instance
         */
        FileSyncStartDownloadRequestBody.create = function create(properties) {
            return new FileSyncStartDownloadRequestBody(properties);
        };

        /**
         * Encodes the specified FileSyncStartDownloadRequestBody message. Does not implicitly {@link file.FileSyncStartDownloadRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {file.IFileSyncStartDownloadRequestBody} message FileSyncStartDownloadRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncStartDownloadRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            return writer;
        };

        /**
         * Encodes the specified FileSyncStartDownloadRequestBody message, length delimited. Does not implicitly {@link file.FileSyncStartDownloadRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {file.IFileSyncStartDownloadRequestBody} message FileSyncStartDownloadRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncStartDownloadRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncStartDownloadRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncStartDownloadRequestBody} FileSyncStartDownloadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncStartDownloadRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncStartDownloadRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
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
         * Decodes a FileSyncStartDownloadRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncStartDownloadRequestBody} FileSyncStartDownloadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncStartDownloadRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncStartDownloadRequestBody message.
         * @function verify
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncStartDownloadRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            return null;
        };

        /**
         * Creates a FileSyncStartDownloadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncStartDownloadRequestBody} FileSyncStartDownloadRequestBody
         */
        FileSyncStartDownloadRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncStartDownloadRequestBody)
                return object;
            var message = new $root.file.FileSyncStartDownloadRequestBody();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a FileSyncStartDownloadRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {file.FileSyncStartDownloadRequestBody} message FileSyncStartDownloadRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncStartDownloadRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            return object;
        };

        /**
         * Converts this FileSyncStartDownloadRequestBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncStartDownloadRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncStartDownloadRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncStartDownloadRequestBody
         * @function getTypeUrl
         * @memberof file.FileSyncStartDownloadRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncStartDownloadRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncStartDownloadRequestBody";
        };

        return FileSyncStartDownloadRequestBody;
    })();

    file.FileSyncStartDownloadReplyBody = (function() {

        /**
         * Properties of a FileSyncStartDownloadReplyBody.
         * @memberof file
         * @interface IFileSyncStartDownloadReplyBody
         * @property {file.FileSyncStartDownloadReplyBody.IDownloadInfo|null} [startedDownload] FileSyncStartDownloadReplyBody startedDownload
         */

        /**
         * Constructs a new FileSyncStartDownloadReplyBody.
         * @memberof file
         * @classdesc Represents a FileSyncStartDownloadReplyBody.
         * @implements IFileSyncStartDownloadReplyBody
         * @constructor
         * @param {file.IFileSyncStartDownloadReplyBody=} [properties] Properties to set
         */
        function FileSyncStartDownloadReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncStartDownloadReplyBody startedDownload.
         * @member {file.FileSyncStartDownloadReplyBody.IDownloadInfo|null|undefined} startedDownload
         * @memberof file.FileSyncStartDownloadReplyBody
         * @instance
         */
        FileSyncStartDownloadReplyBody.prototype.startedDownload = null;

        /**
         * Creates a new FileSyncStartDownloadReplyBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {file.IFileSyncStartDownloadReplyBody=} [properties] Properties to set
         * @returns {file.FileSyncStartDownloadReplyBody} FileSyncStartDownloadReplyBody instance
         */
        FileSyncStartDownloadReplyBody.create = function create(properties) {
            return new FileSyncStartDownloadReplyBody(properties);
        };

        /**
         * Encodes the specified FileSyncStartDownloadReplyBody message. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {file.IFileSyncStartDownloadReplyBody} message FileSyncStartDownloadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncStartDownloadReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startedDownload != null && Object.hasOwnProperty.call(message, "startedDownload"))
                $root.file.FileSyncStartDownloadReplyBody.DownloadInfo.encode(message.startedDownload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileSyncStartDownloadReplyBody message, length delimited. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {file.IFileSyncStartDownloadReplyBody} message FileSyncStartDownloadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncStartDownloadReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncStartDownloadReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncStartDownloadReplyBody} FileSyncStartDownloadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncStartDownloadReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncStartDownloadReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.startedDownload = $root.file.FileSyncStartDownloadReplyBody.DownloadInfo.decode(reader, reader.uint32());
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
         * Decodes a FileSyncStartDownloadReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncStartDownloadReplyBody} FileSyncStartDownloadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncStartDownloadReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncStartDownloadReplyBody message.
         * @function verify
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncStartDownloadReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startedDownload != null && message.hasOwnProperty("startedDownload")) {
                var error = $root.file.FileSyncStartDownloadReplyBody.DownloadInfo.verify(message.startedDownload);
                if (error)
                    return "startedDownload." + error;
            }
            return null;
        };

        /**
         * Creates a FileSyncStartDownloadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncStartDownloadReplyBody} FileSyncStartDownloadReplyBody
         */
        FileSyncStartDownloadReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncStartDownloadReplyBody)
                return object;
            var message = new $root.file.FileSyncStartDownloadReplyBody();
            if (object.startedDownload != null) {
                if (typeof object.startedDownload !== "object")
                    throw TypeError(".file.FileSyncStartDownloadReplyBody.startedDownload: object expected");
                message.startedDownload = $root.file.FileSyncStartDownloadReplyBody.DownloadInfo.fromObject(object.startedDownload);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileSyncStartDownloadReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {file.FileSyncStartDownloadReplyBody} message FileSyncStartDownloadReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncStartDownloadReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.startedDownload = null;
            if (message.startedDownload != null && message.hasOwnProperty("startedDownload"))
                object.startedDownload = $root.file.FileSyncStartDownloadReplyBody.DownloadInfo.toObject(message.startedDownload, options);
            return object;
        };

        /**
         * Converts this FileSyncStartDownloadReplyBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncStartDownloadReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncStartDownloadReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncStartDownloadReplyBody
         * @function getTypeUrl
         * @memberof file.FileSyncStartDownloadReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncStartDownloadReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncStartDownloadReplyBody";
        };

        FileSyncStartDownloadReplyBody.DownloadInfo = (function() {

            /**
             * Properties of a DownloadInfo.
             * @memberof file.FileSyncStartDownloadReplyBody
             * @interface IDownloadInfo
             * @property {number|Long|null} [downloadTaskId] DownloadInfo downloadTaskId
             */

            /**
             * Constructs a new DownloadInfo.
             * @memberof file.FileSyncStartDownloadReplyBody
             * @classdesc Represents a DownloadInfo.
             * @implements IDownloadInfo
             * @constructor
             * @param {file.FileSyncStartDownloadReplyBody.IDownloadInfo=} [properties] Properties to set
             */
            function DownloadInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DownloadInfo downloadTaskId.
             * @member {number|Long} downloadTaskId
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @instance
             */
            DownloadInfo.prototype.downloadTaskId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new DownloadInfo instance using the specified properties.
             * @function create
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {file.FileSyncStartDownloadReplyBody.IDownloadInfo=} [properties] Properties to set
             * @returns {file.FileSyncStartDownloadReplyBody.DownloadInfo} DownloadInfo instance
             */
            DownloadInfo.create = function create(properties) {
                return new DownloadInfo(properties);
            };

            /**
             * Encodes the specified DownloadInfo message. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.DownloadInfo.verify|verify} messages.
             * @function encode
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {file.FileSyncStartDownloadReplyBody.IDownloadInfo} message DownloadInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DownloadInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.downloadTaskId != null && Object.hasOwnProperty.call(message, "downloadTaskId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.downloadTaskId);
                return writer;
            };

            /**
             * Encodes the specified DownloadInfo message, length delimited. Does not implicitly {@link file.FileSyncStartDownloadReplyBody.DownloadInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {file.FileSyncStartDownloadReplyBody.IDownloadInfo} message DownloadInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DownloadInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DownloadInfo message from the specified reader or buffer.
             * @function decode
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {file.FileSyncStartDownloadReplyBody.DownloadInfo} DownloadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DownloadInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncStartDownloadReplyBody.DownloadInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.downloadTaskId = reader.uint64();
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
             * Decodes a DownloadInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {file.FileSyncStartDownloadReplyBody.DownloadInfo} DownloadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DownloadInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DownloadInfo message.
             * @function verify
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DownloadInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.downloadTaskId != null && message.hasOwnProperty("downloadTaskId"))
                    if (!$util.isInteger(message.downloadTaskId) && !(message.downloadTaskId && $util.isInteger(message.downloadTaskId.low) && $util.isInteger(message.downloadTaskId.high)))
                        return "downloadTaskId: integer|Long expected";
                return null;
            };

            /**
             * Creates a DownloadInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {file.FileSyncStartDownloadReplyBody.DownloadInfo} DownloadInfo
             */
            DownloadInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.file.FileSyncStartDownloadReplyBody.DownloadInfo)
                    return object;
                var message = new $root.file.FileSyncStartDownloadReplyBody.DownloadInfo();
                if (object.downloadTaskId != null)
                    if ($util.Long)
                        (message.downloadTaskId = $util.Long.fromValue(object.downloadTaskId)).unsigned = true;
                    else if (typeof object.downloadTaskId === "string")
                        message.downloadTaskId = parseInt(object.downloadTaskId, 10);
                    else if (typeof object.downloadTaskId === "number")
                        message.downloadTaskId = object.downloadTaskId;
                    else if (typeof object.downloadTaskId === "object")
                        message.downloadTaskId = new $util.LongBits(object.downloadTaskId.low >>> 0, object.downloadTaskId.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a DownloadInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {file.FileSyncStartDownloadReplyBody.DownloadInfo} message DownloadInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DownloadInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.downloadTaskId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.downloadTaskId = options.longs === String ? "0" : 0;
                if (message.downloadTaskId != null && message.hasOwnProperty("downloadTaskId"))
                    if (typeof message.downloadTaskId === "number")
                        object.downloadTaskId = options.longs === String ? String(message.downloadTaskId) : message.downloadTaskId;
                    else
                        object.downloadTaskId = options.longs === String ? $util.Long.prototype.toString.call(message.downloadTaskId) : options.longs === Number ? new $util.LongBits(message.downloadTaskId.low >>> 0, message.downloadTaskId.high >>> 0).toNumber(true) : message.downloadTaskId;
                return object;
            };

            /**
             * Converts this DownloadInfo to JSON.
             * @function toJSON
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DownloadInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DownloadInfo
             * @function getTypeUrl
             * @memberof file.FileSyncStartDownloadReplyBody.DownloadInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DownloadInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/file.FileSyncStartDownloadReplyBody.DownloadInfo";
            };

            return DownloadInfo;
        })();

        return FileSyncStartDownloadReplyBody;
    })();

    file.AdoptRemoteRequestBody = (function() {

        /**
         * Properties of an AdoptRemoteRequestBody.
         * @memberof file
         * @interface IAdoptRemoteRequestBody
         * @property {file.IOptionsToAdopteRemote|null} [opts] AdoptRemoteRequestBody opts
         */

        /**
         * Constructs a new AdoptRemoteRequestBody.
         * @memberof file
         * @classdesc Represents an AdoptRemoteRequestBody.
         * @implements IAdoptRemoteRequestBody
         * @constructor
         * @param {file.IAdoptRemoteRequestBody=} [properties] Properties to set
         */
        function AdoptRemoteRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdoptRemoteRequestBody opts.
         * @member {file.IOptionsToAdopteRemote|null|undefined} opts
         * @memberof file.AdoptRemoteRequestBody
         * @instance
         */
        AdoptRemoteRequestBody.prototype.opts = null;

        /**
         * Creates a new AdoptRemoteRequestBody instance using the specified properties.
         * @function create
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {file.IAdoptRemoteRequestBody=} [properties] Properties to set
         * @returns {file.AdoptRemoteRequestBody} AdoptRemoteRequestBody instance
         */
        AdoptRemoteRequestBody.create = function create(properties) {
            return new AdoptRemoteRequestBody(properties);
        };

        /**
         * Encodes the specified AdoptRemoteRequestBody message. Does not implicitly {@link file.AdoptRemoteRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {file.IAdoptRemoteRequestBody} message AdoptRemoteRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdoptRemoteRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opts != null && Object.hasOwnProperty.call(message, "opts"))
                $root.file.OptionsToAdopteRemote.encode(message.opts, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdoptRemoteRequestBody message, length delimited. Does not implicitly {@link file.AdoptRemoteRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {file.IAdoptRemoteRequestBody} message AdoptRemoteRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdoptRemoteRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdoptRemoteRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.AdoptRemoteRequestBody} AdoptRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdoptRemoteRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.AdoptRemoteRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.opts = $root.file.OptionsToAdopteRemote.decode(reader, reader.uint32());
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
         * Decodes an AdoptRemoteRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.AdoptRemoteRequestBody} AdoptRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdoptRemoteRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdoptRemoteRequestBody message.
         * @function verify
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdoptRemoteRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opts != null && message.hasOwnProperty("opts")) {
                var error = $root.file.OptionsToAdopteRemote.verify(message.opts);
                if (error)
                    return "opts." + error;
            }
            return null;
        };

        /**
         * Creates an AdoptRemoteRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.AdoptRemoteRequestBody} AdoptRemoteRequestBody
         */
        AdoptRemoteRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.AdoptRemoteRequestBody)
                return object;
            var message = new $root.file.AdoptRemoteRequestBody();
            if (object.opts != null) {
                if (typeof object.opts !== "object")
                    throw TypeError(".file.AdoptRemoteRequestBody.opts: object expected");
                message.opts = $root.file.OptionsToAdopteRemote.fromObject(object.opts);
            }
            return message;
        };

        /**
         * Creates a plain object from an AdoptRemoteRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {file.AdoptRemoteRequestBody} message AdoptRemoteRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdoptRemoteRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.opts = null;
            if (message.opts != null && message.hasOwnProperty("opts"))
                object.opts = $root.file.OptionsToAdopteRemote.toObject(message.opts, options);
            return object;
        };

        /**
         * Converts this AdoptRemoteRequestBody to JSON.
         * @function toJSON
         * @memberof file.AdoptRemoteRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdoptRemoteRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AdoptRemoteRequestBody
         * @function getTypeUrl
         * @memberof file.AdoptRemoteRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AdoptRemoteRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.AdoptRemoteRequestBody";
        };

        return AdoptRemoteRequestBody;
    })();

    file.OptionsToAdopteRemote = (function() {

        /**
         * Properties of an OptionsToAdopteRemote.
         * @memberof file
         * @interface IOptionsToAdopteRemote
         * @property {common.IBooleanValue|null} [dropLocalVer] OptionsToAdopteRemote dropLocalVer
         * @property {common.IUInt64Value|null} [remoteVersion] OptionsToAdopteRemote remoteVersion
         */

        /**
         * Constructs a new OptionsToAdopteRemote.
         * @memberof file
         * @classdesc Represents an OptionsToAdopteRemote.
         * @implements IOptionsToAdopteRemote
         * @constructor
         * @param {file.IOptionsToAdopteRemote=} [properties] Properties to set
         */
        function OptionsToAdopteRemote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OptionsToAdopteRemote dropLocalVer.
         * @member {common.IBooleanValue|null|undefined} dropLocalVer
         * @memberof file.OptionsToAdopteRemote
         * @instance
         */
        OptionsToAdopteRemote.prototype.dropLocalVer = null;

        /**
         * OptionsToAdopteRemote remoteVersion.
         * @member {common.IUInt64Value|null|undefined} remoteVersion
         * @memberof file.OptionsToAdopteRemote
         * @instance
         */
        OptionsToAdopteRemote.prototype.remoteVersion = null;

        /**
         * Creates a new OptionsToAdopteRemote instance using the specified properties.
         * @function create
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {file.IOptionsToAdopteRemote=} [properties] Properties to set
         * @returns {file.OptionsToAdopteRemote} OptionsToAdopteRemote instance
         */
        OptionsToAdopteRemote.create = function create(properties) {
            return new OptionsToAdopteRemote(properties);
        };

        /**
         * Encodes the specified OptionsToAdopteRemote message. Does not implicitly {@link file.OptionsToAdopteRemote.verify|verify} messages.
         * @function encode
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {file.IOptionsToAdopteRemote} message OptionsToAdopteRemote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OptionsToAdopteRemote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dropLocalVer != null && Object.hasOwnProperty.call(message, "dropLocalVer"))
                $root.common.BooleanValue.encode(message.dropLocalVer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.remoteVersion != null && Object.hasOwnProperty.call(message, "remoteVersion"))
                $root.common.UInt64Value.encode(message.remoteVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OptionsToAdopteRemote message, length delimited. Does not implicitly {@link file.OptionsToAdopteRemote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {file.IOptionsToAdopteRemote} message OptionsToAdopteRemote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OptionsToAdopteRemote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OptionsToAdopteRemote message from the specified reader or buffer.
         * @function decode
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.OptionsToAdopteRemote} OptionsToAdopteRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OptionsToAdopteRemote.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.OptionsToAdopteRemote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.dropLocalVer = $root.common.BooleanValue.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.remoteVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes an OptionsToAdopteRemote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.OptionsToAdopteRemote} OptionsToAdopteRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OptionsToAdopteRemote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OptionsToAdopteRemote message.
         * @function verify
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OptionsToAdopteRemote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dropLocalVer != null && message.hasOwnProperty("dropLocalVer")) {
                var error = $root.common.BooleanValue.verify(message.dropLocalVer);
                if (error)
                    return "dropLocalVer." + error;
            }
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion")) {
                var error = $root.common.UInt64Value.verify(message.remoteVersion);
                if (error)
                    return "remoteVersion." + error;
            }
            return null;
        };

        /**
         * Creates an OptionsToAdopteRemote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.OptionsToAdopteRemote} OptionsToAdopteRemote
         */
        OptionsToAdopteRemote.fromObject = function fromObject(object) {
            if (object instanceof $root.file.OptionsToAdopteRemote)
                return object;
            var message = new $root.file.OptionsToAdopteRemote();
            if (object.dropLocalVer != null) {
                if (typeof object.dropLocalVer !== "object")
                    throw TypeError(".file.OptionsToAdopteRemote.dropLocalVer: object expected");
                message.dropLocalVer = $root.common.BooleanValue.fromObject(object.dropLocalVer);
            }
            if (object.remoteVersion != null) {
                if (typeof object.remoteVersion !== "object")
                    throw TypeError(".file.OptionsToAdopteRemote.remoteVersion: object expected");
                message.remoteVersion = $root.common.UInt64Value.fromObject(object.remoteVersion);
            }
            return message;
        };

        /**
         * Creates a plain object from an OptionsToAdopteRemote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {file.OptionsToAdopteRemote} message OptionsToAdopteRemote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OptionsToAdopteRemote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dropLocalVer = null;
                object.remoteVersion = null;
            }
            if (message.dropLocalVer != null && message.hasOwnProperty("dropLocalVer"))
                object.dropLocalVer = $root.common.BooleanValue.toObject(message.dropLocalVer, options);
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion"))
                object.remoteVersion = $root.common.UInt64Value.toObject(message.remoteVersion, options);
            return object;
        };

        /**
         * Converts this OptionsToAdopteRemote to JSON.
         * @function toJSON
         * @memberof file.OptionsToAdopteRemote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OptionsToAdopteRemote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OptionsToAdopteRemote
         * @function getTypeUrl
         * @memberof file.OptionsToAdopteRemote
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OptionsToAdopteRemote.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.OptionsToAdopteRemote";
        };

        return OptionsToAdopteRemote;
    })();

    file.DiffCurrentAndRemoteRequestBody = (function() {

        /**
         * Properties of a DiffCurrentAndRemoteRequestBody.
         * @memberof file
         * @interface IDiffCurrentAndRemoteRequestBody
         * @property {file.IOptionsToDiffFileVersions|null} [opts] DiffCurrentAndRemoteRequestBody opts
         */

        /**
         * Constructs a new DiffCurrentAndRemoteRequestBody.
         * @memberof file
         * @classdesc Represents a DiffCurrentAndRemoteRequestBody.
         * @implements IDiffCurrentAndRemoteRequestBody
         * @constructor
         * @param {file.IDiffCurrentAndRemoteRequestBody=} [properties] Properties to set
         */
        function DiffCurrentAndRemoteRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiffCurrentAndRemoteRequestBody opts.
         * @member {file.IOptionsToDiffFileVersions|null|undefined} opts
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @instance
         */
        DiffCurrentAndRemoteRequestBody.prototype.opts = null;

        /**
         * Creates a new DiffCurrentAndRemoteRequestBody instance using the specified properties.
         * @function create
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {file.IDiffCurrentAndRemoteRequestBody=} [properties] Properties to set
         * @returns {file.DiffCurrentAndRemoteRequestBody} DiffCurrentAndRemoteRequestBody instance
         */
        DiffCurrentAndRemoteRequestBody.create = function create(properties) {
            return new DiffCurrentAndRemoteRequestBody(properties);
        };

        /**
         * Encodes the specified DiffCurrentAndRemoteRequestBody message. Does not implicitly {@link file.DiffCurrentAndRemoteRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {file.IDiffCurrentAndRemoteRequestBody} message DiffCurrentAndRemoteRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiffCurrentAndRemoteRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opts != null && Object.hasOwnProperty.call(message, "opts"))
                $root.file.OptionsToDiffFileVersions.encode(message.opts, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DiffCurrentAndRemoteRequestBody message, length delimited. Does not implicitly {@link file.DiffCurrentAndRemoteRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {file.IDiffCurrentAndRemoteRequestBody} message DiffCurrentAndRemoteRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiffCurrentAndRemoteRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiffCurrentAndRemoteRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DiffCurrentAndRemoteRequestBody} DiffCurrentAndRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiffCurrentAndRemoteRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DiffCurrentAndRemoteRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.opts = $root.file.OptionsToDiffFileVersions.decode(reader, reader.uint32());
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
         * Decodes a DiffCurrentAndRemoteRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.DiffCurrentAndRemoteRequestBody} DiffCurrentAndRemoteRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiffCurrentAndRemoteRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiffCurrentAndRemoteRequestBody message.
         * @function verify
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiffCurrentAndRemoteRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opts != null && message.hasOwnProperty("opts")) {
                var error = $root.file.OptionsToDiffFileVersions.verify(message.opts);
                if (error)
                    return "opts." + error;
            }
            return null;
        };

        /**
         * Creates a DiffCurrentAndRemoteRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.DiffCurrentAndRemoteRequestBody} DiffCurrentAndRemoteRequestBody
         */
        DiffCurrentAndRemoteRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.DiffCurrentAndRemoteRequestBody)
                return object;
            var message = new $root.file.DiffCurrentAndRemoteRequestBody();
            if (object.opts != null) {
                if (typeof object.opts !== "object")
                    throw TypeError(".file.DiffCurrentAndRemoteRequestBody.opts: object expected");
                message.opts = $root.file.OptionsToDiffFileVersions.fromObject(object.opts);
            }
            return message;
        };

        /**
         * Creates a plain object from a DiffCurrentAndRemoteRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {file.DiffCurrentAndRemoteRequestBody} message DiffCurrentAndRemoteRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiffCurrentAndRemoteRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.opts = null;
            if (message.opts != null && message.hasOwnProperty("opts"))
                object.opts = $root.file.OptionsToDiffFileVersions.toObject(message.opts, options);
            return object;
        };

        /**
         * Converts this DiffCurrentAndRemoteRequestBody to JSON.
         * @function toJSON
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiffCurrentAndRemoteRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiffCurrentAndRemoteRequestBody
         * @function getTypeUrl
         * @memberof file.DiffCurrentAndRemoteRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiffCurrentAndRemoteRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DiffCurrentAndRemoteRequestBody";
        };

        return DiffCurrentAndRemoteRequestBody;
    })();

    file.DiffCurrentAndRemoteReplyBody = (function() {

        /**
         * Properties of a DiffCurrentAndRemoteReplyBody.
         * @memberof file
         * @interface IDiffCurrentAndRemoteReplyBody
         * @property {file.IFileDiff|null} [diff] DiffCurrentAndRemoteReplyBody diff
         */

        /**
         * Constructs a new DiffCurrentAndRemoteReplyBody.
         * @memberof file
         * @classdesc Represents a DiffCurrentAndRemoteReplyBody.
         * @implements IDiffCurrentAndRemoteReplyBody
         * @constructor
         * @param {file.IDiffCurrentAndRemoteReplyBody=} [properties] Properties to set
         */
        function DiffCurrentAndRemoteReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiffCurrentAndRemoteReplyBody diff.
         * @member {file.IFileDiff|null|undefined} diff
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @instance
         */
        DiffCurrentAndRemoteReplyBody.prototype.diff = null;

        /**
         * Creates a new DiffCurrentAndRemoteReplyBody instance using the specified properties.
         * @function create
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {file.IDiffCurrentAndRemoteReplyBody=} [properties] Properties to set
         * @returns {file.DiffCurrentAndRemoteReplyBody} DiffCurrentAndRemoteReplyBody instance
         */
        DiffCurrentAndRemoteReplyBody.create = function create(properties) {
            return new DiffCurrentAndRemoteReplyBody(properties);
        };

        /**
         * Encodes the specified DiffCurrentAndRemoteReplyBody message. Does not implicitly {@link file.DiffCurrentAndRemoteReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {file.IDiffCurrentAndRemoteReplyBody} message DiffCurrentAndRemoteReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiffCurrentAndRemoteReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.diff != null && Object.hasOwnProperty.call(message, "diff"))
                $root.file.FileDiff.encode(message.diff, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DiffCurrentAndRemoteReplyBody message, length delimited. Does not implicitly {@link file.DiffCurrentAndRemoteReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {file.IDiffCurrentAndRemoteReplyBody} message DiffCurrentAndRemoteReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiffCurrentAndRemoteReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiffCurrentAndRemoteReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DiffCurrentAndRemoteReplyBody} DiffCurrentAndRemoteReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiffCurrentAndRemoteReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DiffCurrentAndRemoteReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.diff = $root.file.FileDiff.decode(reader, reader.uint32());
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
         * Decodes a DiffCurrentAndRemoteReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.DiffCurrentAndRemoteReplyBody} DiffCurrentAndRemoteReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiffCurrentAndRemoteReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiffCurrentAndRemoteReplyBody message.
         * @function verify
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiffCurrentAndRemoteReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.diff != null && message.hasOwnProperty("diff")) {
                var error = $root.file.FileDiff.verify(message.diff);
                if (error)
                    return "diff." + error;
            }
            return null;
        };

        /**
         * Creates a DiffCurrentAndRemoteReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.DiffCurrentAndRemoteReplyBody} DiffCurrentAndRemoteReplyBody
         */
        DiffCurrentAndRemoteReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.DiffCurrentAndRemoteReplyBody)
                return object;
            var message = new $root.file.DiffCurrentAndRemoteReplyBody();
            if (object.diff != null) {
                if (typeof object.diff !== "object")
                    throw TypeError(".file.DiffCurrentAndRemoteReplyBody.diff: object expected");
                message.diff = $root.file.FileDiff.fromObject(object.diff);
            }
            return message;
        };

        /**
         * Creates a plain object from a DiffCurrentAndRemoteReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {file.DiffCurrentAndRemoteReplyBody} message DiffCurrentAndRemoteReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiffCurrentAndRemoteReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.diff = null;
            if (message.diff != null && message.hasOwnProperty("diff"))
                object.diff = $root.file.FileDiff.toObject(message.diff, options);
            return object;
        };

        /**
         * Converts this DiffCurrentAndRemoteReplyBody to JSON.
         * @function toJSON
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiffCurrentAndRemoteReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiffCurrentAndRemoteReplyBody
         * @function getTypeUrl
         * @memberof file.DiffCurrentAndRemoteReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiffCurrentAndRemoteReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DiffCurrentAndRemoteReplyBody";
        };

        return DiffCurrentAndRemoteReplyBody;
    })();

    file.OptionsToDiffFileVersions = (function() {

        /**
         * Properties of an OptionsToDiffFileVersions.
         * @memberof file
         * @interface IOptionsToDiffFileVersions
         * @property {common.IUInt64Value|null} [remoteVersion] OptionsToDiffFileVersions remoteVersion
         * @property {common.IBooleanValue|null} [compareContentIfSameMTime] OptionsToDiffFileVersions compareContentIfSameMTime
         */

        /**
         * Constructs a new OptionsToDiffFileVersions.
         * @memberof file
         * @classdesc Represents an OptionsToDiffFileVersions.
         * @implements IOptionsToDiffFileVersions
         * @constructor
         * @param {file.IOptionsToDiffFileVersions=} [properties] Properties to set
         */
        function OptionsToDiffFileVersions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OptionsToDiffFileVersions remoteVersion.
         * @member {common.IUInt64Value|null|undefined} remoteVersion
         * @memberof file.OptionsToDiffFileVersions
         * @instance
         */
        OptionsToDiffFileVersions.prototype.remoteVersion = null;

        /**
         * OptionsToDiffFileVersions compareContentIfSameMTime.
         * @member {common.IBooleanValue|null|undefined} compareContentIfSameMTime
         * @memberof file.OptionsToDiffFileVersions
         * @instance
         */
        OptionsToDiffFileVersions.prototype.compareContentIfSameMTime = null;

        /**
         * Creates a new OptionsToDiffFileVersions instance using the specified properties.
         * @function create
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {file.IOptionsToDiffFileVersions=} [properties] Properties to set
         * @returns {file.OptionsToDiffFileVersions} OptionsToDiffFileVersions instance
         */
        OptionsToDiffFileVersions.create = function create(properties) {
            return new OptionsToDiffFileVersions(properties);
        };

        /**
         * Encodes the specified OptionsToDiffFileVersions message. Does not implicitly {@link file.OptionsToDiffFileVersions.verify|verify} messages.
         * @function encode
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {file.IOptionsToDiffFileVersions} message OptionsToDiffFileVersions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OptionsToDiffFileVersions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.remoteVersion != null && Object.hasOwnProperty.call(message, "remoteVersion"))
                $root.common.UInt64Value.encode(message.remoteVersion, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.compareContentIfSameMTime != null && Object.hasOwnProperty.call(message, "compareContentIfSameMTime"))
                $root.common.BooleanValue.encode(message.compareContentIfSameMTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OptionsToDiffFileVersions message, length delimited. Does not implicitly {@link file.OptionsToDiffFileVersions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {file.IOptionsToDiffFileVersions} message OptionsToDiffFileVersions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OptionsToDiffFileVersions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OptionsToDiffFileVersions message from the specified reader or buffer.
         * @function decode
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.OptionsToDiffFileVersions} OptionsToDiffFileVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OptionsToDiffFileVersions.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.OptionsToDiffFileVersions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.remoteVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.compareContentIfSameMTime = $root.common.BooleanValue.decode(reader, reader.uint32());
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
         * Decodes an OptionsToDiffFileVersions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.OptionsToDiffFileVersions} OptionsToDiffFileVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OptionsToDiffFileVersions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OptionsToDiffFileVersions message.
         * @function verify
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OptionsToDiffFileVersions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion")) {
                var error = $root.common.UInt64Value.verify(message.remoteVersion);
                if (error)
                    return "remoteVersion." + error;
            }
            if (message.compareContentIfSameMTime != null && message.hasOwnProperty("compareContentIfSameMTime")) {
                var error = $root.common.BooleanValue.verify(message.compareContentIfSameMTime);
                if (error)
                    return "compareContentIfSameMTime." + error;
            }
            return null;
        };

        /**
         * Creates an OptionsToDiffFileVersions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.OptionsToDiffFileVersions} OptionsToDiffFileVersions
         */
        OptionsToDiffFileVersions.fromObject = function fromObject(object) {
            if (object instanceof $root.file.OptionsToDiffFileVersions)
                return object;
            var message = new $root.file.OptionsToDiffFileVersions();
            if (object.remoteVersion != null) {
                if (typeof object.remoteVersion !== "object")
                    throw TypeError(".file.OptionsToDiffFileVersions.remoteVersion: object expected");
                message.remoteVersion = $root.common.UInt64Value.fromObject(object.remoteVersion);
            }
            if (object.compareContentIfSameMTime != null) {
                if (typeof object.compareContentIfSameMTime !== "object")
                    throw TypeError(".file.OptionsToDiffFileVersions.compareContentIfSameMTime: object expected");
                message.compareContentIfSameMTime = $root.common.BooleanValue.fromObject(object.compareContentIfSameMTime);
            }
            return message;
        };

        /**
         * Creates a plain object from an OptionsToDiffFileVersions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {file.OptionsToDiffFileVersions} message OptionsToDiffFileVersions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OptionsToDiffFileVersions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.remoteVersion = null;
                object.compareContentIfSameMTime = null;
            }
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion"))
                object.remoteVersion = $root.common.UInt64Value.toObject(message.remoteVersion, options);
            if (message.compareContentIfSameMTime != null && message.hasOwnProperty("compareContentIfSameMTime"))
                object.compareContentIfSameMTime = $root.common.BooleanValue.toObject(message.compareContentIfSameMTime, options);
            return object;
        };

        /**
         * Converts this OptionsToDiffFileVersions to JSON.
         * @function toJSON
         * @memberof file.OptionsToDiffFileVersions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OptionsToDiffFileVersions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OptionsToDiffFileVersions
         * @function getTypeUrl
         * @memberof file.OptionsToDiffFileVersions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OptionsToDiffFileVersions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.OptionsToDiffFileVersions";
        };

        return OptionsToDiffFileVersions;
    })();

    file.TimeStampsDiff = (function() {

        /**
         * Properties of a TimeStampsDiff.
         * @memberof file
         * @interface ITimeStampsDiff
         * @property {number|Long|null} [current] TimeStampsDiff current
         * @property {number|Long|null} [remote] TimeStampsDiff remote
         * @property {number|Long|null} [synced] TimeStampsDiff synced
         */

        /**
         * Constructs a new TimeStampsDiff.
         * @memberof file
         * @classdesc Represents a TimeStampsDiff.
         * @implements ITimeStampsDiff
         * @constructor
         * @param {file.ITimeStampsDiff=} [properties] Properties to set
         */
        function TimeStampsDiff(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeStampsDiff current.
         * @member {number|Long} current
         * @memberof file.TimeStampsDiff
         * @instance
         */
        TimeStampsDiff.prototype.current = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TimeStampsDiff remote.
         * @member {number|Long} remote
         * @memberof file.TimeStampsDiff
         * @instance
         */
        TimeStampsDiff.prototype.remote = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TimeStampsDiff synced.
         * @member {number|Long} synced
         * @memberof file.TimeStampsDiff
         * @instance
         */
        TimeStampsDiff.prototype.synced = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TimeStampsDiff instance using the specified properties.
         * @function create
         * @memberof file.TimeStampsDiff
         * @static
         * @param {file.ITimeStampsDiff=} [properties] Properties to set
         * @returns {file.TimeStampsDiff} TimeStampsDiff instance
         */
        TimeStampsDiff.create = function create(properties) {
            return new TimeStampsDiff(properties);
        };

        /**
         * Encodes the specified TimeStampsDiff message. Does not implicitly {@link file.TimeStampsDiff.verify|verify} messages.
         * @function encode
         * @memberof file.TimeStampsDiff
         * @static
         * @param {file.ITimeStampsDiff} message TimeStampsDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeStampsDiff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.current != null && Object.hasOwnProperty.call(message, "current"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.current);
            if (message.remote != null && Object.hasOwnProperty.call(message, "remote"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.remote);
            if (message.synced != null && Object.hasOwnProperty.call(message, "synced"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.synced);
            return writer;
        };

        /**
         * Encodes the specified TimeStampsDiff message, length delimited. Does not implicitly {@link file.TimeStampsDiff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.TimeStampsDiff
         * @static
         * @param {file.ITimeStampsDiff} message TimeStampsDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeStampsDiff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeStampsDiff message from the specified reader or buffer.
         * @function decode
         * @memberof file.TimeStampsDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.TimeStampsDiff} TimeStampsDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeStampsDiff.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.TimeStampsDiff();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.current = reader.uint64();
                        break;
                    }
                case 2: {
                        message.remote = reader.uint64();
                        break;
                    }
                case 3: {
                        message.synced = reader.uint64();
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
         * Decodes a TimeStampsDiff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.TimeStampsDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.TimeStampsDiff} TimeStampsDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeStampsDiff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeStampsDiff message.
         * @function verify
         * @memberof file.TimeStampsDiff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeStampsDiff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.current != null && message.hasOwnProperty("current"))
                if (!$util.isInteger(message.current) && !(message.current && $util.isInteger(message.current.low) && $util.isInteger(message.current.high)))
                    return "current: integer|Long expected";
            if (message.remote != null && message.hasOwnProperty("remote"))
                if (!$util.isInteger(message.remote) && !(message.remote && $util.isInteger(message.remote.low) && $util.isInteger(message.remote.high)))
                    return "remote: integer|Long expected";
            if (message.synced != null && message.hasOwnProperty("synced"))
                if (!$util.isInteger(message.synced) && !(message.synced && $util.isInteger(message.synced.low) && $util.isInteger(message.synced.high)))
                    return "synced: integer|Long expected";
            return null;
        };

        /**
         * Creates a TimeStampsDiff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.TimeStampsDiff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.TimeStampsDiff} TimeStampsDiff
         */
        TimeStampsDiff.fromObject = function fromObject(object) {
            if (object instanceof $root.file.TimeStampsDiff)
                return object;
            var message = new $root.file.TimeStampsDiff();
            if (object.current != null)
                if ($util.Long)
                    (message.current = $util.Long.fromValue(object.current)).unsigned = true;
                else if (typeof object.current === "string")
                    message.current = parseInt(object.current, 10);
                else if (typeof object.current === "number")
                    message.current = object.current;
                else if (typeof object.current === "object")
                    message.current = new $util.LongBits(object.current.low >>> 0, object.current.high >>> 0).toNumber(true);
            if (object.remote != null)
                if ($util.Long)
                    (message.remote = $util.Long.fromValue(object.remote)).unsigned = true;
                else if (typeof object.remote === "string")
                    message.remote = parseInt(object.remote, 10);
                else if (typeof object.remote === "number")
                    message.remote = object.remote;
                else if (typeof object.remote === "object")
                    message.remote = new $util.LongBits(object.remote.low >>> 0, object.remote.high >>> 0).toNumber(true);
            if (object.synced != null)
                if ($util.Long)
                    (message.synced = $util.Long.fromValue(object.synced)).unsigned = true;
                else if (typeof object.synced === "string")
                    message.synced = parseInt(object.synced, 10);
                else if (typeof object.synced === "number")
                    message.synced = object.synced;
                else if (typeof object.synced === "object")
                    message.synced = new $util.LongBits(object.synced.low >>> 0, object.synced.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TimeStampsDiff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.TimeStampsDiff
         * @static
         * @param {file.TimeStampsDiff} message TimeStampsDiff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeStampsDiff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.current = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.current = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.remote = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.remote = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.synced = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.synced = options.longs === String ? "0" : 0;
            }
            if (message.current != null && message.hasOwnProperty("current"))
                if (typeof message.current === "number")
                    object.current = options.longs === String ? String(message.current) : message.current;
                else
                    object.current = options.longs === String ? $util.Long.prototype.toString.call(message.current) : options.longs === Number ? new $util.LongBits(message.current.low >>> 0, message.current.high >>> 0).toNumber(true) : message.current;
            if (message.remote != null && message.hasOwnProperty("remote"))
                if (typeof message.remote === "number")
                    object.remote = options.longs === String ? String(message.remote) : message.remote;
                else
                    object.remote = options.longs === String ? $util.Long.prototype.toString.call(message.remote) : options.longs === Number ? new $util.LongBits(message.remote.low >>> 0, message.remote.high >>> 0).toNumber(true) : message.remote;
            if (message.synced != null && message.hasOwnProperty("synced"))
                if (typeof message.synced === "number")
                    object.synced = options.longs === String ? String(message.synced) : message.synced;
                else
                    object.synced = options.longs === String ? $util.Long.prototype.toString.call(message.synced) : options.longs === Number ? new $util.LongBits(message.synced.low >>> 0, message.synced.high >>> 0).toNumber(true) : message.synced;
            return object;
        };

        /**
         * Converts this TimeStampsDiff to JSON.
         * @function toJSON
         * @memberof file.TimeStampsDiff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeStampsDiff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TimeStampsDiff
         * @function getTypeUrl
         * @memberof file.TimeStampsDiff
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TimeStampsDiff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.TimeStampsDiff";
        };

        return TimeStampsDiff;
    })();

    file.XAttrDiff = (function() {

        /**
         * Properties of a XAttrDiff.
         * @memberof file
         * @interface IXAttrDiff
         * @property {string|null} [name] XAttrDiff name
         * @property {common.IStringValue|null} [addedIn] XAttrDiff addedIn
         * @property {common.IStringValue|null} [removedIn] XAttrDiff removedIn
         * @property {common.IStringValue|null} [changedIn] XAttrDiff changedIn
         */

        /**
         * Constructs a new XAttrDiff.
         * @memberof file
         * @classdesc Represents a XAttrDiff.
         * @implements IXAttrDiff
         * @constructor
         * @param {file.IXAttrDiff=} [properties] Properties to set
         */
        function XAttrDiff(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XAttrDiff name.
         * @member {string} name
         * @memberof file.XAttrDiff
         * @instance
         */
        XAttrDiff.prototype.name = "";

        /**
         * XAttrDiff addedIn.
         * @member {common.IStringValue|null|undefined} addedIn
         * @memberof file.XAttrDiff
         * @instance
         */
        XAttrDiff.prototype.addedIn = null;

        /**
         * XAttrDiff removedIn.
         * @member {common.IStringValue|null|undefined} removedIn
         * @memberof file.XAttrDiff
         * @instance
         */
        XAttrDiff.prototype.removedIn = null;

        /**
         * XAttrDiff changedIn.
         * @member {common.IStringValue|null|undefined} changedIn
         * @memberof file.XAttrDiff
         * @instance
         */
        XAttrDiff.prototype.changedIn = null;

        /**
         * Creates a new XAttrDiff instance using the specified properties.
         * @function create
         * @memberof file.XAttrDiff
         * @static
         * @param {file.IXAttrDiff=} [properties] Properties to set
         * @returns {file.XAttrDiff} XAttrDiff instance
         */
        XAttrDiff.create = function create(properties) {
            return new XAttrDiff(properties);
        };

        /**
         * Encodes the specified XAttrDiff message. Does not implicitly {@link file.XAttrDiff.verify|verify} messages.
         * @function encode
         * @memberof file.XAttrDiff
         * @static
         * @param {file.IXAttrDiff} message XAttrDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XAttrDiff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.addedIn != null && Object.hasOwnProperty.call(message, "addedIn"))
                $root.common.StringValue.encode(message.addedIn, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.removedIn != null && Object.hasOwnProperty.call(message, "removedIn"))
                $root.common.StringValue.encode(message.removedIn, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.changedIn != null && Object.hasOwnProperty.call(message, "changedIn"))
                $root.common.StringValue.encode(message.changedIn, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified XAttrDiff message, length delimited. Does not implicitly {@link file.XAttrDiff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.XAttrDiff
         * @static
         * @param {file.IXAttrDiff} message XAttrDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XAttrDiff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XAttrDiff message from the specified reader or buffer.
         * @function decode
         * @memberof file.XAttrDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.XAttrDiff} XAttrDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XAttrDiff.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.XAttrDiff();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.addedIn = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.removedIn = $root.common.StringValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.changedIn = $root.common.StringValue.decode(reader, reader.uint32());
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
         * Decodes a XAttrDiff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.XAttrDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.XAttrDiff} XAttrDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XAttrDiff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XAttrDiff message.
         * @function verify
         * @memberof file.XAttrDiff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XAttrDiff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.addedIn != null && message.hasOwnProperty("addedIn")) {
                var error = $root.common.StringValue.verify(message.addedIn);
                if (error)
                    return "addedIn." + error;
            }
            if (message.removedIn != null && message.hasOwnProperty("removedIn")) {
                var error = $root.common.StringValue.verify(message.removedIn);
                if (error)
                    return "removedIn." + error;
            }
            if (message.changedIn != null && message.hasOwnProperty("changedIn")) {
                var error = $root.common.StringValue.verify(message.changedIn);
                if (error)
                    return "changedIn." + error;
            }
            return null;
        };

        /**
         * Creates a XAttrDiff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.XAttrDiff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.XAttrDiff} XAttrDiff
         */
        XAttrDiff.fromObject = function fromObject(object) {
            if (object instanceof $root.file.XAttrDiff)
                return object;
            var message = new $root.file.XAttrDiff();
            if (object.name != null)
                message.name = String(object.name);
            if (object.addedIn != null) {
                if (typeof object.addedIn !== "object")
                    throw TypeError(".file.XAttrDiff.addedIn: object expected");
                message.addedIn = $root.common.StringValue.fromObject(object.addedIn);
            }
            if (object.removedIn != null) {
                if (typeof object.removedIn !== "object")
                    throw TypeError(".file.XAttrDiff.removedIn: object expected");
                message.removedIn = $root.common.StringValue.fromObject(object.removedIn);
            }
            if (object.changedIn != null) {
                if (typeof object.changedIn !== "object")
                    throw TypeError(".file.XAttrDiff.changedIn: object expected");
                message.changedIn = $root.common.StringValue.fromObject(object.changedIn);
            }
            return message;
        };

        /**
         * Creates a plain object from a XAttrDiff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.XAttrDiff
         * @static
         * @param {file.XAttrDiff} message XAttrDiff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        XAttrDiff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.addedIn = null;
                object.removedIn = null;
                object.changedIn = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.addedIn != null && message.hasOwnProperty("addedIn"))
                object.addedIn = $root.common.StringValue.toObject(message.addedIn, options);
            if (message.removedIn != null && message.hasOwnProperty("removedIn"))
                object.removedIn = $root.common.StringValue.toObject(message.removedIn, options);
            if (message.changedIn != null && message.hasOwnProperty("changedIn"))
                object.changedIn = $root.common.StringValue.toObject(message.changedIn, options);
            return object;
        };

        /**
         * Converts this XAttrDiff to JSON.
         * @function toJSON
         * @memberof file.XAttrDiff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        XAttrDiff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for XAttrDiff
         * @function getTypeUrl
         * @memberof file.XAttrDiff
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        XAttrDiff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.XAttrDiff";
        };

        return XAttrDiff;
    })();

    file.FileDiff = (function() {

        /**
         * Properties of a FileDiff.
         * @memberof file
         * @interface IFileDiff
         * @property {number|Long|null} [currentVersion] FileDiff currentVersion
         * @property {boolean|null} [isCurrentLocal] FileDiff isCurrentLocal
         * @property {common.IUInt64Value|null} [remoteVersion] FileDiff remoteVersion
         * @property {common.IUInt64Value|null} [syncedVersion] FileDiff syncedVersion
         * @property {boolean|null} [isRemoteRemoved] FileDiff isRemoteRemoved
         * @property {file.ITimeStampsDiff|null} [ctime] FileDiff ctime
         * @property {file.ITimeStampsDiff|null} [mtime] FileDiff mtime
         * @property {Array.<file.IXAttrDiff>|null} [xattrs] FileDiff xattrs
         * @property {boolean|null} [areContentsSame] FileDiff areContentsSame
         * @property {file.FileDiff.ISize|null} [size] FileDiff size
         */

        /**
         * Constructs a new FileDiff.
         * @memberof file
         * @classdesc Represents a FileDiff.
         * @implements IFileDiff
         * @constructor
         * @param {file.IFileDiff=} [properties] Properties to set
         */
        function FileDiff(properties) {
            this.xattrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileDiff currentVersion.
         * @member {number|Long} currentVersion
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.currentVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FileDiff isCurrentLocal.
         * @member {boolean} isCurrentLocal
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.isCurrentLocal = false;

        /**
         * FileDiff remoteVersion.
         * @member {common.IUInt64Value|null|undefined} remoteVersion
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.remoteVersion = null;

        /**
         * FileDiff syncedVersion.
         * @member {common.IUInt64Value|null|undefined} syncedVersion
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.syncedVersion = null;

        /**
         * FileDiff isRemoteRemoved.
         * @member {boolean} isRemoteRemoved
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.isRemoteRemoved = false;

        /**
         * FileDiff ctime.
         * @member {file.ITimeStampsDiff|null|undefined} ctime
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.ctime = null;

        /**
         * FileDiff mtime.
         * @member {file.ITimeStampsDiff|null|undefined} mtime
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.mtime = null;

        /**
         * FileDiff xattrs.
         * @member {Array.<file.IXAttrDiff>} xattrs
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.xattrs = $util.emptyArray;

        /**
         * FileDiff areContentsSame.
         * @member {boolean} areContentsSame
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.areContentsSame = false;

        /**
         * FileDiff size.
         * @member {file.FileDiff.ISize|null|undefined} size
         * @memberof file.FileDiff
         * @instance
         */
        FileDiff.prototype.size = null;

        /**
         * Creates a new FileDiff instance using the specified properties.
         * @function create
         * @memberof file.FileDiff
         * @static
         * @param {file.IFileDiff=} [properties] Properties to set
         * @returns {file.FileDiff} FileDiff instance
         */
        FileDiff.create = function create(properties) {
            return new FileDiff(properties);
        };

        /**
         * Encodes the specified FileDiff message. Does not implicitly {@link file.FileDiff.verify|verify} messages.
         * @function encode
         * @memberof file.FileDiff
         * @static
         * @param {file.IFileDiff} message FileDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileDiff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentVersion != null && Object.hasOwnProperty.call(message, "currentVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.currentVersion);
            if (message.isCurrentLocal != null && Object.hasOwnProperty.call(message, "isCurrentLocal"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isCurrentLocal);
            if (message.remoteVersion != null && Object.hasOwnProperty.call(message, "remoteVersion"))
                $root.common.UInt64Value.encode(message.remoteVersion, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.syncedVersion != null && Object.hasOwnProperty.call(message, "syncedVersion"))
                $root.common.UInt64Value.encode(message.syncedVersion, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isRemoteRemoved != null && Object.hasOwnProperty.call(message, "isRemoteRemoved"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isRemoteRemoved);
            if (message.ctime != null && Object.hasOwnProperty.call(message, "ctime"))
                $root.file.TimeStampsDiff.encode(message.ctime, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.mtime != null && Object.hasOwnProperty.call(message, "mtime"))
                $root.file.TimeStampsDiff.encode(message.mtime, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.xattrs != null && message.xattrs.length)
                for (var i = 0; i < message.xattrs.length; ++i)
                    $root.file.XAttrDiff.encode(message.xattrs[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.areContentsSame != null && Object.hasOwnProperty.call(message, "areContentsSame"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.areContentsSame);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                $root.file.FileDiff.Size.encode(message.size, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileDiff message, length delimited. Does not implicitly {@link file.FileDiff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileDiff
         * @static
         * @param {file.IFileDiff} message FileDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileDiff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileDiff message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileDiff} FileDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileDiff.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileDiff();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.currentVersion = reader.uint64();
                        break;
                    }
                case 2: {
                        message.isCurrentLocal = reader.bool();
                        break;
                    }
                case 3: {
                        message.remoteVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.syncedVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.isRemoteRemoved = reader.bool();
                        break;
                    }
                case 6: {
                        message.ctime = $root.file.TimeStampsDiff.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.mtime = $root.file.TimeStampsDiff.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        if (!(message.xattrs && message.xattrs.length))
                            message.xattrs = [];
                        message.xattrs.push($root.file.XAttrDiff.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        message.areContentsSame = reader.bool();
                        break;
                    }
                case 12: {
                        message.size = $root.file.FileDiff.Size.decode(reader, reader.uint32());
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
         * Decodes a FileDiff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileDiff} FileDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileDiff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileDiff message.
         * @function verify
         * @memberof file.FileDiff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileDiff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentVersion != null && message.hasOwnProperty("currentVersion"))
                if (!$util.isInteger(message.currentVersion) && !(message.currentVersion && $util.isInteger(message.currentVersion.low) && $util.isInteger(message.currentVersion.high)))
                    return "currentVersion: integer|Long expected";
            if (message.isCurrentLocal != null && message.hasOwnProperty("isCurrentLocal"))
                if (typeof message.isCurrentLocal !== "boolean")
                    return "isCurrentLocal: boolean expected";
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion")) {
                var error = $root.common.UInt64Value.verify(message.remoteVersion);
                if (error)
                    return "remoteVersion." + error;
            }
            if (message.syncedVersion != null && message.hasOwnProperty("syncedVersion")) {
                var error = $root.common.UInt64Value.verify(message.syncedVersion);
                if (error)
                    return "syncedVersion." + error;
            }
            if (message.isRemoteRemoved != null && message.hasOwnProperty("isRemoteRemoved"))
                if (typeof message.isRemoteRemoved !== "boolean")
                    return "isRemoteRemoved: boolean expected";
            if (message.ctime != null && message.hasOwnProperty("ctime")) {
                var error = $root.file.TimeStampsDiff.verify(message.ctime);
                if (error)
                    return "ctime." + error;
            }
            if (message.mtime != null && message.hasOwnProperty("mtime")) {
                var error = $root.file.TimeStampsDiff.verify(message.mtime);
                if (error)
                    return "mtime." + error;
            }
            if (message.xattrs != null && message.hasOwnProperty("xattrs")) {
                if (!Array.isArray(message.xattrs))
                    return "xattrs: array expected";
                for (var i = 0; i < message.xattrs.length; ++i) {
                    var error = $root.file.XAttrDiff.verify(message.xattrs[i]);
                    if (error)
                        return "xattrs." + error;
                }
            }
            if (message.areContentsSame != null && message.hasOwnProperty("areContentsSame"))
                if (typeof message.areContentsSame !== "boolean")
                    return "areContentsSame: boolean expected";
            if (message.size != null && message.hasOwnProperty("size")) {
                var error = $root.file.FileDiff.Size.verify(message.size);
                if (error)
                    return "size." + error;
            }
            return null;
        };

        /**
         * Creates a FileDiff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileDiff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileDiff} FileDiff
         */
        FileDiff.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileDiff)
                return object;
            var message = new $root.file.FileDiff();
            if (object.currentVersion != null)
                if ($util.Long)
                    (message.currentVersion = $util.Long.fromValue(object.currentVersion)).unsigned = true;
                else if (typeof object.currentVersion === "string")
                    message.currentVersion = parseInt(object.currentVersion, 10);
                else if (typeof object.currentVersion === "number")
                    message.currentVersion = object.currentVersion;
                else if (typeof object.currentVersion === "object")
                    message.currentVersion = new $util.LongBits(object.currentVersion.low >>> 0, object.currentVersion.high >>> 0).toNumber(true);
            if (object.isCurrentLocal != null)
                message.isCurrentLocal = Boolean(object.isCurrentLocal);
            if (object.remoteVersion != null) {
                if (typeof object.remoteVersion !== "object")
                    throw TypeError(".file.FileDiff.remoteVersion: object expected");
                message.remoteVersion = $root.common.UInt64Value.fromObject(object.remoteVersion);
            }
            if (object.syncedVersion != null) {
                if (typeof object.syncedVersion !== "object")
                    throw TypeError(".file.FileDiff.syncedVersion: object expected");
                message.syncedVersion = $root.common.UInt64Value.fromObject(object.syncedVersion);
            }
            if (object.isRemoteRemoved != null)
                message.isRemoteRemoved = Boolean(object.isRemoteRemoved);
            if (object.ctime != null) {
                if (typeof object.ctime !== "object")
                    throw TypeError(".file.FileDiff.ctime: object expected");
                message.ctime = $root.file.TimeStampsDiff.fromObject(object.ctime);
            }
            if (object.mtime != null) {
                if (typeof object.mtime !== "object")
                    throw TypeError(".file.FileDiff.mtime: object expected");
                message.mtime = $root.file.TimeStampsDiff.fromObject(object.mtime);
            }
            if (object.xattrs) {
                if (!Array.isArray(object.xattrs))
                    throw TypeError(".file.FileDiff.xattrs: array expected");
                message.xattrs = [];
                for (var i = 0; i < object.xattrs.length; ++i) {
                    if (typeof object.xattrs[i] !== "object")
                        throw TypeError(".file.FileDiff.xattrs: object expected");
                    message.xattrs[i] = $root.file.XAttrDiff.fromObject(object.xattrs[i]);
                }
            }
            if (object.areContentsSame != null)
                message.areContentsSame = Boolean(object.areContentsSame);
            if (object.size != null) {
                if (typeof object.size !== "object")
                    throw TypeError(".file.FileDiff.size: object expected");
                message.size = $root.file.FileDiff.Size.fromObject(object.size);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileDiff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileDiff
         * @static
         * @param {file.FileDiff} message FileDiff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileDiff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.xattrs = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.currentVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currentVersion = options.longs === String ? "0" : 0;
                object.isCurrentLocal = false;
                object.remoteVersion = null;
                object.syncedVersion = null;
                object.isRemoteRemoved = false;
                object.ctime = null;
                object.mtime = null;
                object.areContentsSame = false;
                object.size = null;
            }
            if (message.currentVersion != null && message.hasOwnProperty("currentVersion"))
                if (typeof message.currentVersion === "number")
                    object.currentVersion = options.longs === String ? String(message.currentVersion) : message.currentVersion;
                else
                    object.currentVersion = options.longs === String ? $util.Long.prototype.toString.call(message.currentVersion) : options.longs === Number ? new $util.LongBits(message.currentVersion.low >>> 0, message.currentVersion.high >>> 0).toNumber(true) : message.currentVersion;
            if (message.isCurrentLocal != null && message.hasOwnProperty("isCurrentLocal"))
                object.isCurrentLocal = message.isCurrentLocal;
            if (message.remoteVersion != null && message.hasOwnProperty("remoteVersion"))
                object.remoteVersion = $root.common.UInt64Value.toObject(message.remoteVersion, options);
            if (message.syncedVersion != null && message.hasOwnProperty("syncedVersion"))
                object.syncedVersion = $root.common.UInt64Value.toObject(message.syncedVersion, options);
            if (message.isRemoteRemoved != null && message.hasOwnProperty("isRemoteRemoved"))
                object.isRemoteRemoved = message.isRemoteRemoved;
            if (message.ctime != null && message.hasOwnProperty("ctime"))
                object.ctime = $root.file.TimeStampsDiff.toObject(message.ctime, options);
            if (message.mtime != null && message.hasOwnProperty("mtime"))
                object.mtime = $root.file.TimeStampsDiff.toObject(message.mtime, options);
            if (message.xattrs && message.xattrs.length) {
                object.xattrs = [];
                for (var j = 0; j < message.xattrs.length; ++j)
                    object.xattrs[j] = $root.file.XAttrDiff.toObject(message.xattrs[j], options);
            }
            if (message.areContentsSame != null && message.hasOwnProperty("areContentsSame"))
                object.areContentsSame = message.areContentsSame;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = $root.file.FileDiff.Size.toObject(message.size, options);
            return object;
        };

        /**
         * Converts this FileDiff to JSON.
         * @function toJSON
         * @memberof file.FileDiff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileDiff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileDiff
         * @function getTypeUrl
         * @memberof file.FileDiff
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileDiff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileDiff";
        };

        FileDiff.Size = (function() {

            /**
             * Properties of a Size.
             * @memberof file.FileDiff
             * @interface ISize
             * @property {number|Long|null} [current] Size current
             * @property {number|Long|null} [remote] Size remote
             */

            /**
             * Constructs a new Size.
             * @memberof file.FileDiff
             * @classdesc Represents a Size.
             * @implements ISize
             * @constructor
             * @param {file.FileDiff.ISize=} [properties] Properties to set
             */
            function Size(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Size current.
             * @member {number|Long} current
             * @memberof file.FileDiff.Size
             * @instance
             */
            Size.prototype.current = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Size remote.
             * @member {number|Long} remote
             * @memberof file.FileDiff.Size
             * @instance
             */
            Size.prototype.remote = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new Size instance using the specified properties.
             * @function create
             * @memberof file.FileDiff.Size
             * @static
             * @param {file.FileDiff.ISize=} [properties] Properties to set
             * @returns {file.FileDiff.Size} Size instance
             */
            Size.create = function create(properties) {
                return new Size(properties);
            };

            /**
             * Encodes the specified Size message. Does not implicitly {@link file.FileDiff.Size.verify|verify} messages.
             * @function encode
             * @memberof file.FileDiff.Size
             * @static
             * @param {file.FileDiff.ISize} message Size message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Size.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.current != null && Object.hasOwnProperty.call(message, "current"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.current);
                if (message.remote != null && Object.hasOwnProperty.call(message, "remote"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.remote);
                return writer;
            };

            /**
             * Encodes the specified Size message, length delimited. Does not implicitly {@link file.FileDiff.Size.verify|verify} messages.
             * @function encodeDelimited
             * @memberof file.FileDiff.Size
             * @static
             * @param {file.FileDiff.ISize} message Size message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Size.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Size message from the specified reader or buffer.
             * @function decode
             * @memberof file.FileDiff.Size
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {file.FileDiff.Size} Size
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Size.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileDiff.Size();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.current = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.remote = reader.uint64();
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
             * Decodes a Size message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof file.FileDiff.Size
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {file.FileDiff.Size} Size
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Size.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Size message.
             * @function verify
             * @memberof file.FileDiff.Size
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Size.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.current != null && message.hasOwnProperty("current"))
                    if (!$util.isInteger(message.current) && !(message.current && $util.isInteger(message.current.low) && $util.isInteger(message.current.high)))
                        return "current: integer|Long expected";
                if (message.remote != null && message.hasOwnProperty("remote"))
                    if (!$util.isInteger(message.remote) && !(message.remote && $util.isInteger(message.remote.low) && $util.isInteger(message.remote.high)))
                        return "remote: integer|Long expected";
                return null;
            };

            /**
             * Creates a Size message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof file.FileDiff.Size
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {file.FileDiff.Size} Size
             */
            Size.fromObject = function fromObject(object) {
                if (object instanceof $root.file.FileDiff.Size)
                    return object;
                var message = new $root.file.FileDiff.Size();
                if (object.current != null)
                    if ($util.Long)
                        (message.current = $util.Long.fromValue(object.current)).unsigned = true;
                    else if (typeof object.current === "string")
                        message.current = parseInt(object.current, 10);
                    else if (typeof object.current === "number")
                        message.current = object.current;
                    else if (typeof object.current === "object")
                        message.current = new $util.LongBits(object.current.low >>> 0, object.current.high >>> 0).toNumber(true);
                if (object.remote != null)
                    if ($util.Long)
                        (message.remote = $util.Long.fromValue(object.remote)).unsigned = true;
                    else if (typeof object.remote === "string")
                        message.remote = parseInt(object.remote, 10);
                    else if (typeof object.remote === "number")
                        message.remote = object.remote;
                    else if (typeof object.remote === "object")
                        message.remote = new $util.LongBits(object.remote.low >>> 0, object.remote.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Size message. Also converts values to other types if specified.
             * @function toObject
             * @memberof file.FileDiff.Size
             * @static
             * @param {file.FileDiff.Size} message Size
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Size.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.current = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.current = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.remote = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.remote = options.longs === String ? "0" : 0;
                }
                if (message.current != null && message.hasOwnProperty("current"))
                    if (typeof message.current === "number")
                        object.current = options.longs === String ? String(message.current) : message.current;
                    else
                        object.current = options.longs === String ? $util.Long.prototype.toString.call(message.current) : options.longs === Number ? new $util.LongBits(message.current.low >>> 0, message.current.high >>> 0).toNumber(true) : message.current;
                if (message.remote != null && message.hasOwnProperty("remote"))
                    if (typeof message.remote === "number")
                        object.remote = options.longs === String ? String(message.remote) : message.remote;
                    else
                        object.remote = options.longs === String ? $util.Long.prototype.toString.call(message.remote) : options.longs === Number ? new $util.LongBits(message.remote.low >>> 0, message.remote.high >>> 0).toNumber(true) : message.remote;
                return object;
            };

            /**
             * Converts this Size to JSON.
             * @function toJSON
             * @memberof file.FileDiff.Size
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Size.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Size
             * @function getTypeUrl
             * @memberof file.FileDiff.Size
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Size.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/file.FileDiff.Size";
            };

            return Size;
        })();

        return FileDiff;
    })();

    file.FileSyncUploadRequestBody = (function() {

        /**
         * Properties of a FileSyncUploadRequestBody.
         * @memberof file
         * @interface IFileSyncUploadRequestBody
         * @property {file.IOptionsToUploadLocal|null} [opts] FileSyncUploadRequestBody opts
         */

        /**
         * Constructs a new FileSyncUploadRequestBody.
         * @memberof file
         * @classdesc Represents a FileSyncUploadRequestBody.
         * @implements IFileSyncUploadRequestBody
         * @constructor
         * @param {file.IFileSyncUploadRequestBody=} [properties] Properties to set
         */
        function FileSyncUploadRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncUploadRequestBody opts.
         * @member {file.IOptionsToUploadLocal|null|undefined} opts
         * @memberof file.FileSyncUploadRequestBody
         * @instance
         */
        FileSyncUploadRequestBody.prototype.opts = null;

        /**
         * Creates a new FileSyncUploadRequestBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {file.IFileSyncUploadRequestBody=} [properties] Properties to set
         * @returns {file.FileSyncUploadRequestBody} FileSyncUploadRequestBody instance
         */
        FileSyncUploadRequestBody.create = function create(properties) {
            return new FileSyncUploadRequestBody(properties);
        };

        /**
         * Encodes the specified FileSyncUploadRequestBody message. Does not implicitly {@link file.FileSyncUploadRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {file.IFileSyncUploadRequestBody} message FileSyncUploadRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncUploadRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opts != null && Object.hasOwnProperty.call(message, "opts"))
                $root.file.OptionsToUploadLocal.encode(message.opts, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileSyncUploadRequestBody message, length delimited. Does not implicitly {@link file.FileSyncUploadRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {file.IFileSyncUploadRequestBody} message FileSyncUploadRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncUploadRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncUploadRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncUploadRequestBody} FileSyncUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncUploadRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncUploadRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.opts = $root.file.OptionsToUploadLocal.decode(reader, reader.uint32());
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
         * Decodes a FileSyncUploadRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncUploadRequestBody} FileSyncUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncUploadRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncUploadRequestBody message.
         * @function verify
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncUploadRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opts != null && message.hasOwnProperty("opts")) {
                var error = $root.file.OptionsToUploadLocal.verify(message.opts);
                if (error)
                    return "opts." + error;
            }
            return null;
        };

        /**
         * Creates a FileSyncUploadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncUploadRequestBody} FileSyncUploadRequestBody
         */
        FileSyncUploadRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncUploadRequestBody)
                return object;
            var message = new $root.file.FileSyncUploadRequestBody();
            if (object.opts != null) {
                if (typeof object.opts !== "object")
                    throw TypeError(".file.FileSyncUploadRequestBody.opts: object expected");
                message.opts = $root.file.OptionsToUploadLocal.fromObject(object.opts);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileSyncUploadRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {file.FileSyncUploadRequestBody} message FileSyncUploadRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncUploadRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.opts = null;
            if (message.opts != null && message.hasOwnProperty("opts"))
                object.opts = $root.file.OptionsToUploadLocal.toObject(message.opts, options);
            return object;
        };

        /**
         * Converts this FileSyncUploadRequestBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncUploadRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncUploadRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncUploadRequestBody
         * @function getTypeUrl
         * @memberof file.FileSyncUploadRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncUploadRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncUploadRequestBody";
        };

        return FileSyncUploadRequestBody;
    })();

    file.FileSyncUploadReplyBody = (function() {

        /**
         * Properties of a FileSyncUploadReplyBody.
         * @memberof file
         * @interface IFileSyncUploadReplyBody
         * @property {common.IUInt64Value|null} [uploadedVersion] FileSyncUploadReplyBody uploadedVersion
         */

        /**
         * Constructs a new FileSyncUploadReplyBody.
         * @memberof file
         * @classdesc Represents a FileSyncUploadReplyBody.
         * @implements IFileSyncUploadReplyBody
         * @constructor
         * @param {file.IFileSyncUploadReplyBody=} [properties] Properties to set
         */
        function FileSyncUploadReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncUploadReplyBody uploadedVersion.
         * @member {common.IUInt64Value|null|undefined} uploadedVersion
         * @memberof file.FileSyncUploadReplyBody
         * @instance
         */
        FileSyncUploadReplyBody.prototype.uploadedVersion = null;

        /**
         * Creates a new FileSyncUploadReplyBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {file.IFileSyncUploadReplyBody=} [properties] Properties to set
         * @returns {file.FileSyncUploadReplyBody} FileSyncUploadReplyBody instance
         */
        FileSyncUploadReplyBody.create = function create(properties) {
            return new FileSyncUploadReplyBody(properties);
        };

        /**
         * Encodes the specified FileSyncUploadReplyBody message. Does not implicitly {@link file.FileSyncUploadReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {file.IFileSyncUploadReplyBody} message FileSyncUploadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncUploadReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uploadedVersion != null && Object.hasOwnProperty.call(message, "uploadedVersion"))
                $root.common.UInt64Value.encode(message.uploadedVersion, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileSyncUploadReplyBody message, length delimited. Does not implicitly {@link file.FileSyncUploadReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {file.IFileSyncUploadReplyBody} message FileSyncUploadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncUploadReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncUploadReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncUploadReplyBody} FileSyncUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncUploadReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncUploadReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uploadedVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes a FileSyncUploadReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncUploadReplyBody} FileSyncUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncUploadReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncUploadReplyBody message.
         * @function verify
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncUploadReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uploadedVersion != null && message.hasOwnProperty("uploadedVersion")) {
                var error = $root.common.UInt64Value.verify(message.uploadedVersion);
                if (error)
                    return "uploadedVersion." + error;
            }
            return null;
        };

        /**
         * Creates a FileSyncUploadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncUploadReplyBody} FileSyncUploadReplyBody
         */
        FileSyncUploadReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncUploadReplyBody)
                return object;
            var message = new $root.file.FileSyncUploadReplyBody();
            if (object.uploadedVersion != null) {
                if (typeof object.uploadedVersion !== "object")
                    throw TypeError(".file.FileSyncUploadReplyBody.uploadedVersion: object expected");
                message.uploadedVersion = $root.common.UInt64Value.fromObject(object.uploadedVersion);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileSyncUploadReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {file.FileSyncUploadReplyBody} message FileSyncUploadReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncUploadReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uploadedVersion = null;
            if (message.uploadedVersion != null && message.hasOwnProperty("uploadedVersion"))
                object.uploadedVersion = $root.common.UInt64Value.toObject(message.uploadedVersion, options);
            return object;
        };

        /**
         * Converts this FileSyncUploadReplyBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncUploadReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncUploadReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncUploadReplyBody
         * @function getTypeUrl
         * @memberof file.FileSyncUploadReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncUploadReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncUploadReplyBody";
        };

        return FileSyncUploadReplyBody;
    })();

    file.FileSyncStartUploadReplyBody = (function() {

        /**
         * Properties of a FileSyncStartUploadReplyBody.
         * @memberof file
         * @interface IFileSyncStartUploadReplyBody
         * @property {file.FileSyncStartUploadReplyBody.IUploadInfo|null} [startedUpload] FileSyncStartUploadReplyBody startedUpload
         */

        /**
         * Constructs a new FileSyncStartUploadReplyBody.
         * @memberof file
         * @classdesc Represents a FileSyncStartUploadReplyBody.
         * @implements IFileSyncStartUploadReplyBody
         * @constructor
         * @param {file.IFileSyncStartUploadReplyBody=} [properties] Properties to set
         */
        function FileSyncStartUploadReplyBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileSyncStartUploadReplyBody startedUpload.
         * @member {file.FileSyncStartUploadReplyBody.IUploadInfo|null|undefined} startedUpload
         * @memberof file.FileSyncStartUploadReplyBody
         * @instance
         */
        FileSyncStartUploadReplyBody.prototype.startedUpload = null;

        /**
         * Creates a new FileSyncStartUploadReplyBody instance using the specified properties.
         * @function create
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {file.IFileSyncStartUploadReplyBody=} [properties] Properties to set
         * @returns {file.FileSyncStartUploadReplyBody} FileSyncStartUploadReplyBody instance
         */
        FileSyncStartUploadReplyBody.create = function create(properties) {
            return new FileSyncStartUploadReplyBody(properties);
        };

        /**
         * Encodes the specified FileSyncStartUploadReplyBody message. Does not implicitly {@link file.FileSyncStartUploadReplyBody.verify|verify} messages.
         * @function encode
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {file.IFileSyncStartUploadReplyBody} message FileSyncStartUploadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncStartUploadReplyBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startedUpload != null && Object.hasOwnProperty.call(message, "startedUpload"))
                $root.file.FileSyncStartUploadReplyBody.UploadInfo.encode(message.startedUpload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileSyncStartUploadReplyBody message, length delimited. Does not implicitly {@link file.FileSyncStartUploadReplyBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {file.IFileSyncStartUploadReplyBody} message FileSyncStartUploadReplyBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileSyncStartUploadReplyBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileSyncStartUploadReplyBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.FileSyncStartUploadReplyBody} FileSyncStartUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncStartUploadReplyBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncStartUploadReplyBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.startedUpload = $root.file.FileSyncStartUploadReplyBody.UploadInfo.decode(reader, reader.uint32());
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
         * Decodes a FileSyncStartUploadReplyBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.FileSyncStartUploadReplyBody} FileSyncStartUploadReplyBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileSyncStartUploadReplyBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileSyncStartUploadReplyBody message.
         * @function verify
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileSyncStartUploadReplyBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startedUpload != null && message.hasOwnProperty("startedUpload")) {
                var error = $root.file.FileSyncStartUploadReplyBody.UploadInfo.verify(message.startedUpload);
                if (error)
                    return "startedUpload." + error;
            }
            return null;
        };

        /**
         * Creates a FileSyncStartUploadReplyBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.FileSyncStartUploadReplyBody} FileSyncStartUploadReplyBody
         */
        FileSyncStartUploadReplyBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.FileSyncStartUploadReplyBody)
                return object;
            var message = new $root.file.FileSyncStartUploadReplyBody();
            if (object.startedUpload != null) {
                if (typeof object.startedUpload !== "object")
                    throw TypeError(".file.FileSyncStartUploadReplyBody.startedUpload: object expected");
                message.startedUpload = $root.file.FileSyncStartUploadReplyBody.UploadInfo.fromObject(object.startedUpload);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileSyncStartUploadReplyBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {file.FileSyncStartUploadReplyBody} message FileSyncStartUploadReplyBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileSyncStartUploadReplyBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.startedUpload = null;
            if (message.startedUpload != null && message.hasOwnProperty("startedUpload"))
                object.startedUpload = $root.file.FileSyncStartUploadReplyBody.UploadInfo.toObject(message.startedUpload, options);
            return object;
        };

        /**
         * Converts this FileSyncStartUploadReplyBody to JSON.
         * @function toJSON
         * @memberof file.FileSyncStartUploadReplyBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileSyncStartUploadReplyBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileSyncStartUploadReplyBody
         * @function getTypeUrl
         * @memberof file.FileSyncStartUploadReplyBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileSyncStartUploadReplyBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.FileSyncStartUploadReplyBody";
        };

        FileSyncStartUploadReplyBody.UploadInfo = (function() {

            /**
             * Properties of an UploadInfo.
             * @memberof file.FileSyncStartUploadReplyBody
             * @interface IUploadInfo
             * @property {number|Long|null} [uploadVersion] UploadInfo uploadVersion
             * @property {number|Long|null} [uploadTaskId] UploadInfo uploadTaskId
             */

            /**
             * Constructs a new UploadInfo.
             * @memberof file.FileSyncStartUploadReplyBody
             * @classdesc Represents an UploadInfo.
             * @implements IUploadInfo
             * @constructor
             * @param {file.FileSyncStartUploadReplyBody.IUploadInfo=} [properties] Properties to set
             */
            function UploadInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UploadInfo uploadVersion.
             * @member {number|Long} uploadVersion
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @instance
             */
            UploadInfo.prototype.uploadVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UploadInfo uploadTaskId.
             * @member {number|Long} uploadTaskId
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @instance
             */
            UploadInfo.prototype.uploadTaskId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UploadInfo instance using the specified properties.
             * @function create
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {file.FileSyncStartUploadReplyBody.IUploadInfo=} [properties] Properties to set
             * @returns {file.FileSyncStartUploadReplyBody.UploadInfo} UploadInfo instance
             */
            UploadInfo.create = function create(properties) {
                return new UploadInfo(properties);
            };

            /**
             * Encodes the specified UploadInfo message. Does not implicitly {@link file.FileSyncStartUploadReplyBody.UploadInfo.verify|verify} messages.
             * @function encode
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {file.FileSyncStartUploadReplyBody.IUploadInfo} message UploadInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uploadVersion != null && Object.hasOwnProperty.call(message, "uploadVersion"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uploadVersion);
                if (message.uploadTaskId != null && Object.hasOwnProperty.call(message, "uploadTaskId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uploadTaskId);
                return writer;
            };

            /**
             * Encodes the specified UploadInfo message, length delimited. Does not implicitly {@link file.FileSyncStartUploadReplyBody.UploadInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {file.FileSyncStartUploadReplyBody.IUploadInfo} message UploadInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UploadInfo message from the specified reader or buffer.
             * @function decode
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {file.FileSyncStartUploadReplyBody.UploadInfo} UploadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.FileSyncStartUploadReplyBody.UploadInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.uploadVersion = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.uploadTaskId = reader.uint64();
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
             * Decodes an UploadInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {file.FileSyncStartUploadReplyBody.UploadInfo} UploadInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UploadInfo message.
             * @function verify
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UploadInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uploadVersion != null && message.hasOwnProperty("uploadVersion"))
                    if (!$util.isInteger(message.uploadVersion) && !(message.uploadVersion && $util.isInteger(message.uploadVersion.low) && $util.isInteger(message.uploadVersion.high)))
                        return "uploadVersion: integer|Long expected";
                if (message.uploadTaskId != null && message.hasOwnProperty("uploadTaskId"))
                    if (!$util.isInteger(message.uploadTaskId) && !(message.uploadTaskId && $util.isInteger(message.uploadTaskId.low) && $util.isInteger(message.uploadTaskId.high)))
                        return "uploadTaskId: integer|Long expected";
                return null;
            };

            /**
             * Creates an UploadInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {file.FileSyncStartUploadReplyBody.UploadInfo} UploadInfo
             */
            UploadInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.file.FileSyncStartUploadReplyBody.UploadInfo)
                    return object;
                var message = new $root.file.FileSyncStartUploadReplyBody.UploadInfo();
                if (object.uploadVersion != null)
                    if ($util.Long)
                        (message.uploadVersion = $util.Long.fromValue(object.uploadVersion)).unsigned = true;
                    else if (typeof object.uploadVersion === "string")
                        message.uploadVersion = parseInt(object.uploadVersion, 10);
                    else if (typeof object.uploadVersion === "number")
                        message.uploadVersion = object.uploadVersion;
                    else if (typeof object.uploadVersion === "object")
                        message.uploadVersion = new $util.LongBits(object.uploadVersion.low >>> 0, object.uploadVersion.high >>> 0).toNumber(true);
                if (object.uploadTaskId != null)
                    if ($util.Long)
                        (message.uploadTaskId = $util.Long.fromValue(object.uploadTaskId)).unsigned = true;
                    else if (typeof object.uploadTaskId === "string")
                        message.uploadTaskId = parseInt(object.uploadTaskId, 10);
                    else if (typeof object.uploadTaskId === "number")
                        message.uploadTaskId = object.uploadTaskId;
                    else if (typeof object.uploadTaskId === "object")
                        message.uploadTaskId = new $util.LongBits(object.uploadTaskId.low >>> 0, object.uploadTaskId.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an UploadInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {file.FileSyncStartUploadReplyBody.UploadInfo} message UploadInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UploadInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uploadVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uploadVersion = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uploadTaskId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uploadTaskId = options.longs === String ? "0" : 0;
                }
                if (message.uploadVersion != null && message.hasOwnProperty("uploadVersion"))
                    if (typeof message.uploadVersion === "number")
                        object.uploadVersion = options.longs === String ? String(message.uploadVersion) : message.uploadVersion;
                    else
                        object.uploadVersion = options.longs === String ? $util.Long.prototype.toString.call(message.uploadVersion) : options.longs === Number ? new $util.LongBits(message.uploadVersion.low >>> 0, message.uploadVersion.high >>> 0).toNumber(true) : message.uploadVersion;
                if (message.uploadTaskId != null && message.hasOwnProperty("uploadTaskId"))
                    if (typeof message.uploadTaskId === "number")
                        object.uploadTaskId = options.longs === String ? String(message.uploadTaskId) : message.uploadTaskId;
                    else
                        object.uploadTaskId = options.longs === String ? $util.Long.prototype.toString.call(message.uploadTaskId) : options.longs === Number ? new $util.LongBits(message.uploadTaskId.low >>> 0, message.uploadTaskId.high >>> 0).toNumber(true) : message.uploadTaskId;
                return object;
            };

            /**
             * Converts this UploadInfo to JSON.
             * @function toJSON
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UploadInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UploadInfo
             * @function getTypeUrl
             * @memberof file.FileSyncStartUploadReplyBody.UploadInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UploadInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/file.FileSyncStartUploadReplyBody.UploadInfo";
            };

            return UploadInfo;
        })();

        return FileSyncStartUploadReplyBody;
    })();

    file.OptionsToUploadLocal = (function() {

        /**
         * Properties of an OptionsToUploadLocal.
         * @memberof file
         * @interface IOptionsToUploadLocal
         * @property {common.IUInt64Value|null} [localVersion] OptionsToUploadLocal localVersion
         * @property {common.IUInt64Value|null} [uploadVersion] OptionsToUploadLocal uploadVersion
         */

        /**
         * Constructs a new OptionsToUploadLocal.
         * @memberof file
         * @classdesc Represents an OptionsToUploadLocal.
         * @implements IOptionsToUploadLocal
         * @constructor
         * @param {file.IOptionsToUploadLocal=} [properties] Properties to set
         */
        function OptionsToUploadLocal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OptionsToUploadLocal localVersion.
         * @member {common.IUInt64Value|null|undefined} localVersion
         * @memberof file.OptionsToUploadLocal
         * @instance
         */
        OptionsToUploadLocal.prototype.localVersion = null;

        /**
         * OptionsToUploadLocal uploadVersion.
         * @member {common.IUInt64Value|null|undefined} uploadVersion
         * @memberof file.OptionsToUploadLocal
         * @instance
         */
        OptionsToUploadLocal.prototype.uploadVersion = null;

        /**
         * Creates a new OptionsToUploadLocal instance using the specified properties.
         * @function create
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {file.IOptionsToUploadLocal=} [properties] Properties to set
         * @returns {file.OptionsToUploadLocal} OptionsToUploadLocal instance
         */
        OptionsToUploadLocal.create = function create(properties) {
            return new OptionsToUploadLocal(properties);
        };

        /**
         * Encodes the specified OptionsToUploadLocal message. Does not implicitly {@link file.OptionsToUploadLocal.verify|verify} messages.
         * @function encode
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {file.IOptionsToUploadLocal} message OptionsToUploadLocal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OptionsToUploadLocal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localVersion != null && Object.hasOwnProperty.call(message, "localVersion"))
                $root.common.UInt64Value.encode(message.localVersion, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uploadVersion != null && Object.hasOwnProperty.call(message, "uploadVersion"))
                $root.common.UInt64Value.encode(message.uploadVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OptionsToUploadLocal message, length delimited. Does not implicitly {@link file.OptionsToUploadLocal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {file.IOptionsToUploadLocal} message OptionsToUploadLocal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OptionsToUploadLocal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OptionsToUploadLocal message from the specified reader or buffer.
         * @function decode
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.OptionsToUploadLocal} OptionsToUploadLocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OptionsToUploadLocal.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.OptionsToUploadLocal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.localVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.uploadVersion = $root.common.UInt64Value.decode(reader, reader.uint32());
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
         * Decodes an OptionsToUploadLocal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.OptionsToUploadLocal} OptionsToUploadLocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OptionsToUploadLocal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OptionsToUploadLocal message.
         * @function verify
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OptionsToUploadLocal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.localVersion != null && message.hasOwnProperty("localVersion")) {
                var error = $root.common.UInt64Value.verify(message.localVersion);
                if (error)
                    return "localVersion." + error;
            }
            if (message.uploadVersion != null && message.hasOwnProperty("uploadVersion")) {
                var error = $root.common.UInt64Value.verify(message.uploadVersion);
                if (error)
                    return "uploadVersion." + error;
            }
            return null;
        };

        /**
         * Creates an OptionsToUploadLocal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.OptionsToUploadLocal} OptionsToUploadLocal
         */
        OptionsToUploadLocal.fromObject = function fromObject(object) {
            if (object instanceof $root.file.OptionsToUploadLocal)
                return object;
            var message = new $root.file.OptionsToUploadLocal();
            if (object.localVersion != null) {
                if (typeof object.localVersion !== "object")
                    throw TypeError(".file.OptionsToUploadLocal.localVersion: object expected");
                message.localVersion = $root.common.UInt64Value.fromObject(object.localVersion);
            }
            if (object.uploadVersion != null) {
                if (typeof object.uploadVersion !== "object")
                    throw TypeError(".file.OptionsToUploadLocal.uploadVersion: object expected");
                message.uploadVersion = $root.common.UInt64Value.fromObject(object.uploadVersion);
            }
            return message;
        };

        /**
         * Creates a plain object from an OptionsToUploadLocal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {file.OptionsToUploadLocal} message OptionsToUploadLocal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OptionsToUploadLocal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.localVersion = null;
                object.uploadVersion = null;
            }
            if (message.localVersion != null && message.hasOwnProperty("localVersion"))
                object.localVersion = $root.common.UInt64Value.toObject(message.localVersion, options);
            if (message.uploadVersion != null && message.hasOwnProperty("uploadVersion"))
                object.uploadVersion = $root.common.UInt64Value.toObject(message.uploadVersion, options);
            return object;
        };

        /**
         * Converts this OptionsToUploadLocal to JSON.
         * @function toJSON
         * @memberof file.OptionsToUploadLocal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OptionsToUploadLocal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OptionsToUploadLocal
         * @function getTypeUrl
         * @memberof file.OptionsToUploadLocal
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OptionsToUploadLocal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.OptionsToUploadLocal";
        };

        return OptionsToUploadLocal;
    })();

    file.WatchUploadRequestBody = (function() {

        /**
         * Properties of a WatchUploadRequestBody.
         * @memberof file
         * @interface IWatchUploadRequestBody
         * @property {number|Long|null} [uploadTaskId] WatchUploadRequestBody uploadTaskId
         */

        /**
         * Constructs a new WatchUploadRequestBody.
         * @memberof file
         * @classdesc Represents a WatchUploadRequestBody.
         * @implements IWatchUploadRequestBody
         * @constructor
         * @param {file.IWatchUploadRequestBody=} [properties] Properties to set
         */
        function WatchUploadRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WatchUploadRequestBody uploadTaskId.
         * @member {number|Long} uploadTaskId
         * @memberof file.WatchUploadRequestBody
         * @instance
         */
        WatchUploadRequestBody.prototype.uploadTaskId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new WatchUploadRequestBody instance using the specified properties.
         * @function create
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {file.IWatchUploadRequestBody=} [properties] Properties to set
         * @returns {file.WatchUploadRequestBody} WatchUploadRequestBody instance
         */
        WatchUploadRequestBody.create = function create(properties) {
            return new WatchUploadRequestBody(properties);
        };

        /**
         * Encodes the specified WatchUploadRequestBody message. Does not implicitly {@link file.WatchUploadRequestBody.verify|verify} messages.
         * @function encode
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {file.IWatchUploadRequestBody} message WatchUploadRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchUploadRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uploadTaskId != null && Object.hasOwnProperty.call(message, "uploadTaskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uploadTaskId);
            return writer;
        };

        /**
         * Encodes the specified WatchUploadRequestBody message, length delimited. Does not implicitly {@link file.WatchUploadRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {file.IWatchUploadRequestBody} message WatchUploadRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WatchUploadRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WatchUploadRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.WatchUploadRequestBody} WatchUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchUploadRequestBody.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.WatchUploadRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uploadTaskId = reader.uint64();
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
         * Decodes a WatchUploadRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.WatchUploadRequestBody} WatchUploadRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WatchUploadRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WatchUploadRequestBody message.
         * @function verify
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WatchUploadRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uploadTaskId != null && message.hasOwnProperty("uploadTaskId"))
                if (!$util.isInteger(message.uploadTaskId) && !(message.uploadTaskId && $util.isInteger(message.uploadTaskId.low) && $util.isInteger(message.uploadTaskId.high)))
                    return "uploadTaskId: integer|Long expected";
            return null;
        };

        /**
         * Creates a WatchUploadRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.WatchUploadRequestBody} WatchUploadRequestBody
         */
        WatchUploadRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.file.WatchUploadRequestBody)
                return object;
            var message = new $root.file.WatchUploadRequestBody();
            if (object.uploadTaskId != null)
                if ($util.Long)
                    (message.uploadTaskId = $util.Long.fromValue(object.uploadTaskId)).unsigned = true;
                else if (typeof object.uploadTaskId === "string")
                    message.uploadTaskId = parseInt(object.uploadTaskId, 10);
                else if (typeof object.uploadTaskId === "number")
                    message.uploadTaskId = object.uploadTaskId;
                else if (typeof object.uploadTaskId === "object")
                    message.uploadTaskId = new $util.LongBits(object.uploadTaskId.low >>> 0, object.uploadTaskId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a WatchUploadRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {file.WatchUploadRequestBody} message WatchUploadRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WatchUploadRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uploadTaskId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uploadTaskId = options.longs === String ? "0" : 0;
            if (message.uploadTaskId != null && message.hasOwnProperty("uploadTaskId"))
                if (typeof message.uploadTaskId === "number")
                    object.uploadTaskId = options.longs === String ? String(message.uploadTaskId) : message.uploadTaskId;
                else
                    object.uploadTaskId = options.longs === String ? $util.Long.prototype.toString.call(message.uploadTaskId) : options.longs === Number ? new $util.LongBits(message.uploadTaskId.low >>> 0, message.uploadTaskId.high >>> 0).toNumber(true) : message.uploadTaskId;
            return object;
        };

        /**
         * Converts this WatchUploadRequestBody to JSON.
         * @function toJSON
         * @memberof file.WatchUploadRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WatchUploadRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WatchUploadRequestBody
         * @function getTypeUrl
         * @memberof file.WatchUploadRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WatchUploadRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.WatchUploadRequestBody";
        };

        return WatchUploadRequestBody;
    })();

    file.UploadEventMsg = (function() {

        /**
         * Properties of an UploadEventMsg.
         * @memberof file
         * @interface IUploadEventMsg
         * @property {string|null} [type] UploadEventMsg type
         * @property {number|Long|null} [uploadTaskId] UploadEventMsg uploadTaskId
         * @property {number|Long|null} [localVersion] UploadEventMsg localVersion
         * @property {number|Long|null} [uploadVersion] UploadEventMsg uploadVersion
         */

        /**
         * Constructs a new UploadEventMsg.
         * @memberof file
         * @classdesc Represents an UploadEventMsg.
         * @implements IUploadEventMsg
         * @constructor
         * @param {file.IUploadEventMsg=} [properties] Properties to set
         */
        function UploadEventMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadEventMsg type.
         * @member {string} type
         * @memberof file.UploadEventMsg
         * @instance
         */
        UploadEventMsg.prototype.type = "";

        /**
         * UploadEventMsg uploadTaskId.
         * @member {number|Long} uploadTaskId
         * @memberof file.UploadEventMsg
         * @instance
         */
        UploadEventMsg.prototype.uploadTaskId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UploadEventMsg localVersion.
         * @member {number|Long} localVersion
         * @memberof file.UploadEventMsg
         * @instance
         */
        UploadEventMsg.prototype.localVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UploadEventMsg uploadVersion.
         * @member {number|Long} uploadVersion
         * @memberof file.UploadEventMsg
         * @instance
         */
        UploadEventMsg.prototype.uploadVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new UploadEventMsg instance using the specified properties.
         * @function create
         * @memberof file.UploadEventMsg
         * @static
         * @param {file.IUploadEventMsg=} [properties] Properties to set
         * @returns {file.UploadEventMsg} UploadEventMsg instance
         */
        UploadEventMsg.create = function create(properties) {
            return new UploadEventMsg(properties);
        };

        /**
         * Encodes the specified UploadEventMsg message. Does not implicitly {@link file.UploadEventMsg.verify|verify} messages.
         * @function encode
         * @memberof file.UploadEventMsg
         * @static
         * @param {file.IUploadEventMsg} message UploadEventMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadEventMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.uploadTaskId != null && Object.hasOwnProperty.call(message, "uploadTaskId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uploadTaskId);
            if (message.localVersion != null && Object.hasOwnProperty.call(message, "localVersion"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.localVersion);
            if (message.uploadVersion != null && Object.hasOwnProperty.call(message, "uploadVersion"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.uploadVersion);
            return writer;
        };

        /**
         * Encodes the specified UploadEventMsg message, length delimited. Does not implicitly {@link file.UploadEventMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file.UploadEventMsg
         * @static
         * @param {file.IUploadEventMsg} message UploadEventMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadEventMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadEventMsg message from the specified reader or buffer.
         * @function decode
         * @memberof file.UploadEventMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.UploadEventMsg} UploadEventMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadEventMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.UploadEventMsg();
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
                        message.uploadTaskId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.localVersion = reader.uint64();
                        break;
                    }
                case 4: {
                        message.uploadVersion = reader.uint64();
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
         * Decodes an UploadEventMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file.UploadEventMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file.UploadEventMsg} UploadEventMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadEventMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadEventMsg message.
         * @function verify
         * @memberof file.UploadEventMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadEventMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.uploadTaskId != null && message.hasOwnProperty("uploadTaskId"))
                if (!$util.isInteger(message.uploadTaskId) && !(message.uploadTaskId && $util.isInteger(message.uploadTaskId.low) && $util.isInteger(message.uploadTaskId.high)))
                    return "uploadTaskId: integer|Long expected";
            if (message.localVersion != null && message.hasOwnProperty("localVersion"))
                if (!$util.isInteger(message.localVersion) && !(message.localVersion && $util.isInteger(message.localVersion.low) && $util.isInteger(message.localVersion.high)))
                    return "localVersion: integer|Long expected";
            if (message.uploadVersion != null && message.hasOwnProperty("uploadVersion"))
                if (!$util.isInteger(message.uploadVersion) && !(message.uploadVersion && $util.isInteger(message.uploadVersion.low) && $util.isInteger(message.uploadVersion.high)))
                    return "uploadVersion: integer|Long expected";
            return null;
        };

        /**
         * Creates an UploadEventMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file.UploadEventMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file.UploadEventMsg} UploadEventMsg
         */
        UploadEventMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.file.UploadEventMsg)
                return object;
            var message = new $root.file.UploadEventMsg();
            if (object.type != null)
                message.type = String(object.type);
            if (object.uploadTaskId != null)
                if ($util.Long)
                    (message.uploadTaskId = $util.Long.fromValue(object.uploadTaskId)).unsigned = true;
                else if (typeof object.uploadTaskId === "string")
                    message.uploadTaskId = parseInt(object.uploadTaskId, 10);
                else if (typeof object.uploadTaskId === "number")
                    message.uploadTaskId = object.uploadTaskId;
                else if (typeof object.uploadTaskId === "object")
                    message.uploadTaskId = new $util.LongBits(object.uploadTaskId.low >>> 0, object.uploadTaskId.high >>> 0).toNumber(true);
            if (object.localVersion != null)
                if ($util.Long)
                    (message.localVersion = $util.Long.fromValue(object.localVersion)).unsigned = true;
                else if (typeof object.localVersion === "string")
                    message.localVersion = parseInt(object.localVersion, 10);
                else if (typeof object.localVersion === "number")
                    message.localVersion = object.localVersion;
                else if (typeof object.localVersion === "object")
                    message.localVersion = new $util.LongBits(object.localVersion.low >>> 0, object.localVersion.high >>> 0).toNumber(true);
            if (object.uploadVersion != null)
                if ($util.Long)
                    (message.uploadVersion = $util.Long.fromValue(object.uploadVersion)).unsigned = true;
                else if (typeof object.uploadVersion === "string")
                    message.uploadVersion = parseInt(object.uploadVersion, 10);
                else if (typeof object.uploadVersion === "number")
                    message.uploadVersion = object.uploadVersion;
                else if (typeof object.uploadVersion === "object")
                    message.uploadVersion = new $util.LongBits(object.uploadVersion.low >>> 0, object.uploadVersion.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an UploadEventMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file.UploadEventMsg
         * @static
         * @param {file.UploadEventMsg} message UploadEventMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadEventMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uploadTaskId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uploadTaskId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.localVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.localVersion = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uploadVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uploadVersion = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.uploadTaskId != null && message.hasOwnProperty("uploadTaskId"))
                if (typeof message.uploadTaskId === "number")
                    object.uploadTaskId = options.longs === String ? String(message.uploadTaskId) : message.uploadTaskId;
                else
                    object.uploadTaskId = options.longs === String ? $util.Long.prototype.toString.call(message.uploadTaskId) : options.longs === Number ? new $util.LongBits(message.uploadTaskId.low >>> 0, message.uploadTaskId.high >>> 0).toNumber(true) : message.uploadTaskId;
            if (message.localVersion != null && message.hasOwnProperty("localVersion"))
                if (typeof message.localVersion === "number")
                    object.localVersion = options.longs === String ? String(message.localVersion) : message.localVersion;
                else
                    object.localVersion = options.longs === String ? $util.Long.prototype.toString.call(message.localVersion) : options.longs === Number ? new $util.LongBits(message.localVersion.low >>> 0, message.localVersion.high >>> 0).toNumber(true) : message.localVersion;
            if (message.uploadVersion != null && message.hasOwnProperty("uploadVersion"))
                if (typeof message.uploadVersion === "number")
                    object.uploadVersion = options.longs === String ? String(message.uploadVersion) : message.uploadVersion;
                else
                    object.uploadVersion = options.longs === String ? $util.Long.prototype.toString.call(message.uploadVersion) : options.longs === Number ? new $util.LongBits(message.uploadVersion.low >>> 0, message.uploadVersion.high >>> 0).toNumber(true) : message.uploadVersion;
            return object;
        };

        /**
         * Converts this UploadEventMsg to JSON.
         * @function toJSON
         * @memberof file.UploadEventMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadEventMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadEventMsg
         * @function getTypeUrl
         * @memberof file.UploadEventMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadEventMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.UploadEventMsg";
        };

        return UploadEventMsg;
    })();

    return file;
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
