// source: bottle/fulfillment/v1/line_item.proto
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
var global = Function('return this')();

var bottle_catalog_v1_addon_pb = require('../../../bottle/catalog/v1/addon_pb.js');
goog.object.extend(proto, bottle_catalog_v1_addon_pb);
var bottle_catalog_v1_product_pb = require('../../../bottle/catalog/v1/product_pb.js');
goog.object.extend(proto, bottle_catalog_v1_product_pb);
goog.exportSymbol('proto.bottle.fulfillment.v1.LineItem', null, global);
goog.exportSymbol('proto.bottle.fulfillment.v1.LineItem.ItemCase', null, global);
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
proto.bottle.fulfillment.v1.LineItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bottle.fulfillment.v1.LineItem.oneofGroups_);
};
goog.inherits(proto.bottle.fulfillment.v1.LineItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bottle.fulfillment.v1.LineItem.displayName = 'proto.bottle.fulfillment.v1.LineItem';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bottle.fulfillment.v1.LineItem.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.bottle.fulfillment.v1.LineItem.ItemCase = {
  ITEM_NOT_SET: 0,
  CATALOG_PRODUCT: 5,
  CATALOG_ADDON: 6
};

/**
 * @return {proto.bottle.fulfillment.v1.LineItem.ItemCase}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.getItemCase = function() {
  return /** @type {proto.bottle.fulfillment.v1.LineItem.ItemCase} */(jspb.Message.computeOneofCase(this, proto.bottle.fulfillment.v1.LineItem.oneofGroups_[0]));
};



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
proto.bottle.fulfillment.v1.LineItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bottle.fulfillment.v1.LineItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bottle.fulfillment.v1.LineItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.fulfillment.v1.LineItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    catalogProduct: (f = msg.getCatalogProduct()) && bottle_catalog_v1_product_pb.Product.toObject(includeInstance, f),
    catalogAddon: (f = msg.getCatalogAddon()) && bottle_catalog_v1_addon_pb.Addon.toObject(includeInstance, f),
    individualPrice: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bottle.fulfillment.v1.LineItem}
 */
proto.bottle.fulfillment.v1.LineItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bottle.fulfillment.v1.LineItem;
  return proto.bottle.fulfillment.v1.LineItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bottle.fulfillment.v1.LineItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bottle.fulfillment.v1.LineItem}
 */
proto.bottle.fulfillment.v1.LineItem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 5:
      var value = new bottle_catalog_v1_product_pb.Product;
      reader.readMessage(value,bottle_catalog_v1_product_pb.Product.deserializeBinaryFromReader);
      msg.setCatalogProduct(value);
      break;
    case 6:
      var value = new bottle_catalog_v1_addon_pb.Addon;
      reader.readMessage(value,bottle_catalog_v1_addon_pb.Addon.deserializeBinaryFromReader);
      msg.setCatalogAddon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIndividualPrice(value);
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
proto.bottle.fulfillment.v1.LineItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bottle.fulfillment.v1.LineItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bottle.fulfillment.v1.LineItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.fulfillment.v1.LineItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCatalogProduct();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bottle_catalog_v1_product_pb.Product.serializeBinaryToWriter
    );
  }
  f = message.getCatalogAddon();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bottle_catalog_v1_addon_pb.Addon.serializeBinaryToWriter
    );
  }
  f = message.getIndividualPrice();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
 */
proto.bottle.fulfillment.v1.LineItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 quantity = 2;
 * @return {number}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
 */
proto.bottle.fulfillment.v1.LineItem.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bottle.catalog.v1.Product catalog_product = 5;
 * @return {?proto.bottle.catalog.v1.Product}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.getCatalogProduct = function() {
  return /** @type{?proto.bottle.catalog.v1.Product} */ (
    jspb.Message.getWrapperField(this, bottle_catalog_v1_product_pb.Product, 5));
};


/**
 * @param {?proto.bottle.catalog.v1.Product|undefined} value
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
*/
proto.bottle.fulfillment.v1.LineItem.prototype.setCatalogProduct = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bottle.fulfillment.v1.LineItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
 */
proto.bottle.fulfillment.v1.LineItem.prototype.clearCatalogProduct = function() {
  return this.setCatalogProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.hasCatalogProduct = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bottle.catalog.v1.Addon catalog_addon = 6;
 * @return {?proto.bottle.catalog.v1.Addon}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.getCatalogAddon = function() {
  return /** @type{?proto.bottle.catalog.v1.Addon} */ (
    jspb.Message.getWrapperField(this, bottle_catalog_v1_addon_pb.Addon, 6));
};


/**
 * @param {?proto.bottle.catalog.v1.Addon|undefined} value
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
*/
proto.bottle.fulfillment.v1.LineItem.prototype.setCatalogAddon = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bottle.fulfillment.v1.LineItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
 */
proto.bottle.fulfillment.v1.LineItem.prototype.clearCatalogAddon = function() {
  return this.setCatalogAddon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.hasCatalogAddon = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 individual_price = 4;
 * @return {number}
 */
proto.bottle.fulfillment.v1.LineItem.prototype.getIndividualPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bottle.fulfillment.v1.LineItem} returns this
 */
proto.bottle.fulfillment.v1.LineItem.prototype.setIndividualPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.bottle.fulfillment.v1);