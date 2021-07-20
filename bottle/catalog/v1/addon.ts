/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.catalog.v1";

export interface Addon {
  category: Addon_AddonCategory;
}

export enum Addon_AddonCategory {
  ADDON_CATEGORY_UNSPECIFIED = 0,
  ADDON_CATEGORY_RUSH_ASSEMBLY = 1,
  ADDON_CATEGORY_HANDLING = 2,
  ADDON_CATEGORY_EWASTE = 3,
  ADDON_CATEGORY_EXTENDED_WARRANTY = 4,
  ADDON_CATEGORY_SHIPPING = 5,
  ADDON_CATEGORY_SOFTWARE_MAINTENANCE = 6,
  UNRECOGNIZED = -1,
}

export function addon_AddonCategoryFromJSON(object: any): Addon_AddonCategory {
  switch (object) {
    case 0:
    case "ADDON_CATEGORY_UNSPECIFIED":
      return Addon_AddonCategory.ADDON_CATEGORY_UNSPECIFIED;
    case 1:
    case "ADDON_CATEGORY_RUSH_ASSEMBLY":
      return Addon_AddonCategory.ADDON_CATEGORY_RUSH_ASSEMBLY;
    case 2:
    case "ADDON_CATEGORY_HANDLING":
      return Addon_AddonCategory.ADDON_CATEGORY_HANDLING;
    case 3:
    case "ADDON_CATEGORY_EWASTE":
      return Addon_AddonCategory.ADDON_CATEGORY_EWASTE;
    case 4:
    case "ADDON_CATEGORY_EXTENDED_WARRANTY":
      return Addon_AddonCategory.ADDON_CATEGORY_EXTENDED_WARRANTY;
    case 5:
    case "ADDON_CATEGORY_SHIPPING":
      return Addon_AddonCategory.ADDON_CATEGORY_SHIPPING;
    case 6:
    case "ADDON_CATEGORY_SOFTWARE_MAINTENANCE":
      return Addon_AddonCategory.ADDON_CATEGORY_SOFTWARE_MAINTENANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Addon_AddonCategory.UNRECOGNIZED;
  }
}

export function addon_AddonCategoryToJSON(object: Addon_AddonCategory): string {
  switch (object) {
    case Addon_AddonCategory.ADDON_CATEGORY_UNSPECIFIED:
      return "ADDON_CATEGORY_UNSPECIFIED";
    case Addon_AddonCategory.ADDON_CATEGORY_RUSH_ASSEMBLY:
      return "ADDON_CATEGORY_RUSH_ASSEMBLY";
    case Addon_AddonCategory.ADDON_CATEGORY_HANDLING:
      return "ADDON_CATEGORY_HANDLING";
    case Addon_AddonCategory.ADDON_CATEGORY_EWASTE:
      return "ADDON_CATEGORY_EWASTE";
    case Addon_AddonCategory.ADDON_CATEGORY_EXTENDED_WARRANTY:
      return "ADDON_CATEGORY_EXTENDED_WARRANTY";
    case Addon_AddonCategory.ADDON_CATEGORY_SHIPPING:
      return "ADDON_CATEGORY_SHIPPING";
    case Addon_AddonCategory.ADDON_CATEGORY_SOFTWARE_MAINTENANCE:
      return "ADDON_CATEGORY_SOFTWARE_MAINTENANCE";
    default:
      return "UNKNOWN";
  }
}

const baseAddon: object = { category: 0 };

export const Addon = {
  encode(message: Addon, writer: Writer = Writer.create()): Writer {
    if (message.category !== 0) {
      writer.uint32(8).int32(message.category);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Addon {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddon } as Addon;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Addon {
    const message = { ...baseAddon } as Addon;
    if (object.category !== undefined && object.category !== null) {
      message.category = addon_AddonCategoryFromJSON(object.category);
    } else {
      message.category = 0;
    }
    return message;
  },

  toJSON(message: Addon): unknown {
    const obj: any = {};
    message.category !== undefined &&
      (obj.category = addon_AddonCategoryToJSON(message.category));
    return obj;
  },

  fromPartial(object: DeepPartial<Addon>): Addon {
    const message = { ...baseAddon } as Addon;
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
