// source: google/cloud/extended_operations.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.google.cloud.OperationResponseMapping', null, global);
goog.exportSymbol('proto.google.cloud.operationField', null, global);
goog.exportSymbol('proto.google.cloud.operationPollingMethod', null, global);
goog.exportSymbol('proto.google.cloud.operationRequestField', null, global);
goog.exportSymbol('proto.google.cloud.operationResponseField', null, global);
goog.exportSymbol('proto.google.cloud.operationService', null, global);
/**
 * @enum {number}
 */
proto.google.cloud.OperationResponseMapping = {
  UNDEFINED: 0,
  NAME: 1,
  STATUS: 2,
  ERROR_CODE: 3,
  ERROR_MESSAGE: 4
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `operationField`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.cloud.OperationResponseMapping>}
 */
proto.google.cloud.operationField = new jspb.ExtensionFieldInfo(
    1149,
    {operationField: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1149] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.cloud.operationField,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[1149] = proto.google.cloud.operationField;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `operationRequestField`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.cloud.operationRequestField = new jspb.ExtensionFieldInfo(
    1150,
    {operationRequestField: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1150] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.cloud.operationRequestField,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[1150] = proto.google.cloud.operationRequestField;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `operationResponseField`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.cloud.operationResponseField = new jspb.ExtensionFieldInfo(
    1151,
    {operationResponseField: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1151] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.cloud.operationResponseField,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[1151] = proto.google.cloud.operationResponseField;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `operationService`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.cloud.operationService = new jspb.ExtensionFieldInfo(
    1249,
    {operationService: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[1249] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.cloud.operationService,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[1249] = proto.google.cloud.operationService;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `operationPollingMethod`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.google.cloud.operationPollingMethod = new jspb.ExtensionFieldInfo(
    1250,
    {operationPollingMethod: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[1250] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.cloud.operationPollingMethod,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[1250] = proto.google.cloud.operationPollingMethod;

goog.object.extend(exports, proto.google.cloud);
