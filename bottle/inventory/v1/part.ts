/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Sku } from "./sku";
import { Location } from "./location";

export const protobufPackage = "bottle.inventory.v1";

export interface Part {
  id: string;
  serialNumber: string;
  sku: Sku | undefined;
  location: Location | undefined;
  rmaDescription: string;
}

const basePart: object = { id: "", serialNumber: "", rmaDescription: "" };

export const Part = {
  encode(message: Part, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.serialNumber !== "") {
      writer.uint32(18).string(message.serialNumber);
    }
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(26).fork()).ldelim();
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    if (message.rmaDescription !== "") {
      writer.uint32(42).string(message.rmaDescription);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Part {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePart } as Part;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.serialNumber = reader.string();
          break;
        case 3:
          message.sku = Sku.decode(reader, reader.uint32());
          break;
        case 4:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 5:
          message.rmaDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Part {
    const message = { ...basePart } as Part;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromJSON(object.sku);
    } else {
      message.sku = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.rmaDescription !== undefined && object.rmaDescription !== null) {
      message.rmaDescription = String(object.rmaDescription);
    } else {
      message.rmaDescription = "";
    }
    return message;
  },

  toJSON(message: Part): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.sku !== undefined &&
      (obj.sku = message.sku ? Sku.toJSON(message.sku) : undefined);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    message.rmaDescription !== undefined &&
      (obj.rmaDescription = message.rmaDescription);
    return obj;
  },

  fromPartial(object: DeepPartial<Part>): Part {
    const message = { ...basePart } as Part;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromPartial(object.sku);
    } else {
      message.sku = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.rmaDescription !== undefined && object.rmaDescription !== null) {
      message.rmaDescription = object.rmaDescription;
    } else {
      message.rmaDescription = "";
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
