// source: google/type/color.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.type.Color', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.type.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.type.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.type.Color.displayName = 'proto.google.type.Color';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.type.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.google.type.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.type.Color} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    red: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    green: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    blue: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    alpha: (f = msg.getAlpha()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.type.Color}
 */
proto.google.type.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.type.Color;
  return proto.google.type.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.type.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.type.Color}
 */
proto.google.type.Color.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGreen(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBlue(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setAlpha(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.type.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.type.Color.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.type.Color} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.Color.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRed();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getGreen();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBlue();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getAlpha();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional float red = 1;
 * @return {number}
 */
proto.google.type.Color.prototype.getRed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.Color} returns this
 */
proto.google.type.Color.prototype.setRed = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float green = 2;
 * @return {number}
 */
proto.google.type.Color.prototype.getGreen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.Color} returns this
 */
proto.google.type.Color.prototype.setGreen = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float blue = 3;
 * @return {number}
 */
proto.google.type.Color.prototype.getBlue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.Color} returns this
 */
proto.google.type.Color.prototype.setBlue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional google.protobuf.FloatValue alpha = 4;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.google.type.Color.prototype.getAlpha = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 4));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.google.type.Color} returns this
*/
proto.google.type.Color.prototype.setAlpha = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.type.Color} returns this
 */
proto.google.type.Color.prototype.clearAlpha = function() {
  return this.setAlpha(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.type.Color.prototype.hasAlpha = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.type);
