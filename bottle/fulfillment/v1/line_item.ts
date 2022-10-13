/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Product } from "../../catalog/v1/product";
import { Addon } from "../../catalog/v1/addon";

export const protobufPackage = "bottle.fulfillment.v1";

export interface LineItem {
  id: string;
  quantity: number;
  catalogProduct: Product | undefined;
  catalogAddon: Addon | undefined;
  individualPrice: number;
}

const baseLineItem: object = { id: "", quantity: 0, individualPrice: 0 };

export const LineItem = {
  encode(message: LineItem, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    if (message.catalogProduct !== undefined) {
      Product.encode(message.catalogProduct, writer.uint32(42).fork()).ldelim();
    }
    if (message.catalogAddon !== undefined) {
      Addon.encode(message.catalogAddon, writer.uint32(50).fork()).ldelim();
    }
    if (message.individualPrice !== 0) {
      writer.uint32(32).int64(message.individualPrice);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LineItem {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLineItem } as LineItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.quantity = reader.int32();
          break;
        case 5:
          message.catalogProduct = Product.decode(reader, reader.uint32());
          break;
        case 6:
          message.catalogAddon = Addon.decode(reader, reader.uint32());
          break;
        case 4:
          message.individualPrice = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LineItem {
    const message = { ...baseLineItem } as LineItem;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.catalogProduct !== undefined && object.catalogProduct !== null) {
      message.catalogProduct = Product.fromJSON(object.catalogProduct);
    } else {
      message.catalogProduct = undefined;
    }
    if (object.catalogAddon !== undefined && object.catalogAddon !== null) {
      message.catalogAddon = Addon.fromJSON(object.catalogAddon);
    } else {
      message.catalogAddon = undefined;
    }
    if (
      object.individualPrice !== undefined &&
      object.individualPrice !== null
    ) {
      message.individualPrice = Number(object.individualPrice);
    } else {
      message.individualPrice = 0;
    }
    return message;
  },

  toJSON(message: LineItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.catalogProduct !== undefined &&
      (obj.catalogProduct = message.catalogProduct
        ? Product.toJSON(message.catalogProduct)
        : undefined);
    message.catalogAddon !== undefined &&
      (obj.catalogAddon = message.catalogAddon
        ? Addon.toJSON(message.catalogAddon)
        : undefined);
    message.individualPrice !== undefined &&
      (obj.individualPrice = message.individualPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<LineItem>): LineItem {
    const message = { ...baseLineItem } as LineItem;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.catalogProduct !== undefined && object.catalogProduct !== null) {
      message.catalogProduct = Product.fromPartial(object.catalogProduct);
    } else {
      message.catalogProduct = undefined;
    }
    if (object.catalogAddon !== undefined && object.catalogAddon !== null) {
      message.catalogAddon = Addon.fromPartial(object.catalogAddon);
    } else {
      message.catalogAddon = undefined;
    }
    if (
      object.individualPrice !== undefined &&
      object.individualPrice !== null
    ) {
      message.individualPrice = object.individualPrice;
    } else {
      message.individualPrice = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
