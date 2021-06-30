/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.GetMachinesReply', null, global);
goog.exportSymbol('proto.GetMachinesRequest', null, global);
goog.exportSymbol('proto.Machine', null, global);
goog.exportSymbol('proto.Machine.PowerState', null, global);

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
proto.Machine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Machine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Machine.displayName = 'proto.Machine';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Machine.prototype.toObject = function(opt_includeInstance) {
  return proto.Machine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Machine} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Machine.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    name: msg.getName(),
    powerstate: msg.getPowerstate()
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
 * @return {!proto.Machine}
 */
proto.Machine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Machine;
  return proto.Machine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Machine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Machine}
 */
proto.Machine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.Machine.PowerState} */ (reader.readEnum());
      msg.setPowerstate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Machine} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Machine.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Machine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Machine.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getPowerstate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Machine} The clone.
 */
proto.Machine.prototype.cloneMessage = function() {
  return /** @type {!proto.Machine} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Machine.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.Machine.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Machine.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.Machine.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional PowerState powerState = 3;
 * @return {!proto.Machine.PowerState}
 */
proto.Machine.prototype.getPowerstate = function() {
  return /** @type {!proto.Machine.PowerState} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.Machine.PowerState} value  */
proto.Machine.prototype.setPowerstate = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.Machine.PowerState = {
  UNKNOWN: 0,
  POWERED_ON: 1,
  POWERED_OFF: 2,
  SUSPENDED: 3
};


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
proto.GetMachinesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMachinesRequest.repeatedFields_, null);
};
goog.inherits(proto.GetMachinesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetMachinesRequest.displayName = 'proto.GetMachinesRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMachinesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMachinesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMachinesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMachinesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetMachinesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: jspb.Message.getField(msg, 1)
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
 * @return {!proto.GetMachinesRequest}
 */
proto.GetMachinesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMachinesRequest;
  return proto.GetMachinesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMachinesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMachinesRequest}
 */
proto.GetMachinesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.getIdsList().push(value);
      msg.setIdsList(msg.getIdsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetMachinesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMachinesRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMachinesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMachinesRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetMachinesRequest} The clone.
 */
proto.GetMachinesRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.GetMachinesRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated string ids = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.GetMachinesRequest.prototype.getIdsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<string>} value  */
proto.GetMachinesRequest.prototype.setIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.GetMachinesRequest.prototype.clearIdsList = function() {
  jspb.Message.setField(this, 1, []);
};



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
proto.GetMachinesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMachinesReply.repeatedFields_, null);
};
goog.inherits(proto.GetMachinesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetMachinesReply.displayName = 'proto.GetMachinesReply';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMachinesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMachinesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMachinesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMachinesReply} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetMachinesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    machinesList: jspb.Message.toObjectList(msg.getMachinesList(),
    proto.Machine.toObject, includeInstance)
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
 * @return {!proto.GetMachinesReply}
 */
proto.GetMachinesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMachinesReply;
  return proto.GetMachinesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMachinesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMachinesReply}
 */
proto.GetMachinesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Machine;
      reader.readMessage(value,proto.Machine.deserializeBinaryFromReader);
      msg.getMachinesList().push(value);
      msg.setMachinesList(msg.getMachinesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetMachinesReply} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMachinesReply.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMachinesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMachinesReply.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMachinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Machine.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetMachinesReply} The clone.
 */
proto.GetMachinesReply.prototype.cloneMessage = function() {
  return /** @type {!proto.GetMachinesReply} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Machine machines = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Machine>}
 */
proto.GetMachinesReply.prototype.getMachinesList = function() {
  return /** @type{!Array.<!proto.Machine>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Machine, 1));
};


/** @param {Array.<!proto.Machine>} value  */
proto.GetMachinesReply.prototype.setMachinesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.GetMachinesReply.prototype.clearMachinesList = function() {
  this.setMachinesList([]);
};


goog.object.extend(exports, proto);
