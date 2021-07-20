/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.account.v1";

export interface Address {
  id: string;
  name: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

const baseAddress: object = {
  id: "",
  name: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.company !== "") {
      writer.uint32(26).string(message.company);
    }
    if (message.address1 !== "") {
      writer.uint32(34).string(message.address1);
    }
    if (message.address2 !== "") {
      writer.uint32(42).string(message.address2);
    }
    if (message.city !== "") {
      writer.uint32(50).string(message.city);
    }
    if (message.state !== "") {
      writer.uint32(58).string(message.state);
    }
    if (message.postalCode !== "") {
      writer.uint32(66).string(message.postalCode);
    }
    if (message.country !== "") {
      writer.uint32(74).string(message.country);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.company = reader.string();
          break;
        case 4:
          message.address1 = reader.string();
          break;
        case 5:
          message.address2 = reader.string();
          break;
        case 6:
          message.city = reader.string();
          break;
        case 7:
          message.state = reader.string();
          break;
        case 8:
          message.postalCode = reader.string();
          break;
        case 9:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = String(object.company);
    } else {
      message.company = "";
    }
    if (object.address1 !== undefined && object.address1 !== null) {
      message.address1 = String(object.address1);
    } else {
      message.address1 = "";
    }
    if (object.address2 !== undefined && object.address2 !== null) {
      message.address2 = String(object.address2);
    } else {
      message.address2 = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = String(object.city);
    } else {
      message.city = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    if (object.postalCode !== undefined && object.postalCode !== null) {
      message.postalCode = String(object.postalCode);
    } else {
      message.postalCode = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.company !== undefined && (obj.company = message.company);
    message.address1 !== undefined && (obj.address1 = message.address1);
    message.address2 !== undefined && (obj.address2 = message.address2);
    message.city !== undefined && (obj.city = message.city);
    message.state !== undefined && (obj.state = message.state);
    message.postalCode !== undefined && (obj.postalCode = message.postalCode);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.company !== undefined && object.company !== null) {
      message.company = object.company;
    } else {
      message.company = "";
    }
    if (object.address1 !== undefined && object.address1 !== null) {
      message.address1 = object.address1;
    } else {
      message.address1 = "";
    }
    if (object.address2 !== undefined && object.address2 !== null) {
      message.address2 = object.address2;
    } else {
      message.address2 = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city;
    } else {
      message.city = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    if (object.postalCode !== undefined && object.postalCode !== null) {
      message.postalCode = object.postalCode;
    } else {
      message.postalCode = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
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
