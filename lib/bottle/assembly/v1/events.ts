/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Build } from "../../../bottle/assembly/v1/build";

export const protobufPackage = "bottle.assembly.v1";

export interface BuildCreated {
  build: Build | undefined;
}

export interface BuildUpdated {
  old: Build | undefined;
  new: Build | undefined;
}

const baseBuildCreated: object = {};

export const BuildCreated = {
  encode(message: BuildCreated, writer: Writer = Writer.create()): Writer {
    if (message.build !== undefined) {
      Build.encode(message.build, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuildCreated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuildCreated } as BuildCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.build = Build.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildCreated {
    const message = { ...baseBuildCreated } as BuildCreated;
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromJSON(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },

  toJSON(message: BuildCreated): unknown {
    const obj: any = {};
    message.build !== undefined &&
      (obj.build = message.build ? Build.toJSON(message.build) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BuildCreated>): BuildCreated {
    const message = { ...baseBuildCreated } as BuildCreated;
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromPartial(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },
};

const baseBuildUpdated: object = {};

export const BuildUpdated = {
  encode(message: BuildUpdated, writer: Writer = Writer.create()): Writer {
    if (message.old !== undefined) {
      Build.encode(message.old, writer.uint32(10).fork()).ldelim();
    }
    if (message.new !== undefined) {
      Build.encode(message.new, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuildUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuildUpdated } as BuildUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.old = Build.decode(reader, reader.uint32());
          break;
        case 2:
          message.new = Build.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildUpdated {
    const message = { ...baseBuildUpdated } as BuildUpdated;
    if (object.old !== undefined && object.old !== null) {
      message.old = Build.fromJSON(object.old);
    } else {
      message.old = undefined;
    }
    if (object.new !== undefined && object.new !== null) {
      message.new = Build.fromJSON(object.new);
    } else {
      message.new = undefined;
    }
    return message;
  },

  toJSON(message: BuildUpdated): unknown {
    const obj: any = {};
    message.old !== undefined &&
      (obj.old = message.old ? Build.toJSON(message.old) : undefined);
    message.new !== undefined &&
      (obj.new = message.new ? Build.toJSON(message.new) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BuildUpdated>): BuildUpdated {
    const message = { ...baseBuildUpdated } as BuildUpdated;
    if (object.old !== undefined && object.old !== null) {
      message.old = Build.fromPartial(object.old);
    } else {
      message.old = undefined;
    }
    if (object.new !== undefined && object.new !== null) {
      message.new = Build.fromPartial(object.new);
    } else {
      message.new = undefined;
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
