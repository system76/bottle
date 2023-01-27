/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.templates.v1";

export interface TypedAttachment {
  type: string;
  source: string;
}

const baseTypedAttachment: object = { type: "", source: "" };

export const TypedAttachment = {
  encode(message: TypedAttachment, writer: Writer = Writer.create()): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TypedAttachment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTypedAttachment } as TypedAttachment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TypedAttachment {
    const message = { ...baseTypedAttachment } as TypedAttachment;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    return message;
  },

  toJSON(message: TypedAttachment): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },

  fromPartial(object: DeepPartial<TypedAttachment>): TypedAttachment {
    const message = { ...baseTypedAttachment } as TypedAttachment;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
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
