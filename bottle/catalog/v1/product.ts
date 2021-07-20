/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.catalog.v1";

export interface Product {
  id: string;
  model: string;
  category: Product_ProductCategory;
}

export enum Product_ProductCategory {
  PRODUCT_CATEGORY_UNSPECIFIED = 0,
  PRODUCT_CATEGORY_DESKTOP = 1,
  PRODUCT_CATEGORY_LAPTOP = 2,
  PRODUCT_CATEGORY_SERVER = 3,
  PRODUCT_CATEGORY_APPAREL = 4,
  PRODUCT_CATEGORY_BAG = 5,
  PRODUCT_CATEGORY_ACCESSORY = 6,
  UNRECOGNIZED = -1,
}

export function product_ProductCategoryFromJSON(
  object: any
): Product_ProductCategory {
  switch (object) {
    case 0:
    case "PRODUCT_CATEGORY_UNSPECIFIED":
      return Product_ProductCategory.PRODUCT_CATEGORY_UNSPECIFIED;
    case 1:
    case "PRODUCT_CATEGORY_DESKTOP":
      return Product_ProductCategory.PRODUCT_CATEGORY_DESKTOP;
    case 2:
    case "PRODUCT_CATEGORY_LAPTOP":
      return Product_ProductCategory.PRODUCT_CATEGORY_LAPTOP;
    case 3:
    case "PRODUCT_CATEGORY_SERVER":
      return Product_ProductCategory.PRODUCT_CATEGORY_SERVER;
    case 4:
    case "PRODUCT_CATEGORY_APPAREL":
      return Product_ProductCategory.PRODUCT_CATEGORY_APPAREL;
    case 5:
    case "PRODUCT_CATEGORY_BAG":
      return Product_ProductCategory.PRODUCT_CATEGORY_BAG;
    case 6:
    case "PRODUCT_CATEGORY_ACCESSORY":
      return Product_ProductCategory.PRODUCT_CATEGORY_ACCESSORY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Product_ProductCategory.UNRECOGNIZED;
  }
}

export function product_ProductCategoryToJSON(
  object: Product_ProductCategory
): string {
  switch (object) {
    case Product_ProductCategory.PRODUCT_CATEGORY_UNSPECIFIED:
      return "PRODUCT_CATEGORY_UNSPECIFIED";
    case Product_ProductCategory.PRODUCT_CATEGORY_DESKTOP:
      return "PRODUCT_CATEGORY_DESKTOP";
    case Product_ProductCategory.PRODUCT_CATEGORY_LAPTOP:
      return "PRODUCT_CATEGORY_LAPTOP";
    case Product_ProductCategory.PRODUCT_CATEGORY_SERVER:
      return "PRODUCT_CATEGORY_SERVER";
    case Product_ProductCategory.PRODUCT_CATEGORY_APPAREL:
      return "PRODUCT_CATEGORY_APPAREL";
    case Product_ProductCategory.PRODUCT_CATEGORY_BAG:
      return "PRODUCT_CATEGORY_BAG";
    case Product_ProductCategory.PRODUCT_CATEGORY_ACCESSORY:
      return "PRODUCT_CATEGORY_ACCESSORY";
    default:
      return "UNKNOWN";
  }
}

const baseProduct: object = { id: "", model: "", category: 0 };

export const Product = {
  encode(message: Product, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.category !== 0) {
      writer.uint32(32).int32(message.category);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProduct } as Product;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.model = reader.string();
          break;
        case 4:
          message.category = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product {
    const message = { ...baseProduct } as Product;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = String(object.model);
    } else {
      message.model = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = product_ProductCategoryFromJSON(object.category);
    } else {
      message.category = 0;
    }
    return message;
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.model !== undefined && (obj.model = message.model);
    message.category !== undefined &&
      (obj.category = product_ProductCategoryToJSON(message.category));
    return obj;
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = { ...baseProduct } as Product;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = object.model;
    } else {
      message.model = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = 0;
    }
    return message;
  },
};

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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
