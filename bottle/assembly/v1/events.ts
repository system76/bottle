/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Build } from "../../../bottle/assembly/v1/build";
import { Location } from "../../../bottle/inventory/v1/location";
import { Part } from "../../../bottle/inventory/v1/part";

export const protobufPackage = "bottle.assembly.v1";

export interface BuildCancelled {
  build: Build | undefined;
}

export interface BuildCreated {
  build: Build | undefined;
}

export interface BuildUpdated {
  old: Build | undefined;
  new: Build | undefined;
}

export interface BuildPicked {
  build: Build | undefined;
  location: Location | undefined;
  parts: Part[];
}

export interface ComponentDemandUpdated {
  componentId: string;
  quantity: number;
}

const baseBuildCancelled: object = {};

export const BuildCancelled = {
  encode(message: BuildCancelled, writer: Writer = Writer.create()): Writer {
    if (message.build !== undefined) {
      Build.encode(message.build, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuildCancelled {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuildCancelled } as BuildCancelled;
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

  fromJSON(object: any): BuildCancelled {
    const message = { ...baseBuildCancelled } as BuildCancelled;
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromJSON(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },

  toJSON(message: BuildCancelled): unknown {
    const obj: any = {};
    message.build !== undefined &&
      (obj.build = message.build ? Build.toJSON(message.build) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BuildCancelled>): BuildCancelled {
    const message = { ...baseBuildCancelled } as BuildCancelled;
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromPartial(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },
};

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

const baseBuildPicked: object = {};

export const BuildPicked = {
  encode(message: BuildPicked, writer: Writer = Writer.create()): Writer {
    if (message.build !== undefined) {
      Build.encode(message.build, writer.uint32(10).fork()).ldelim();
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.parts) {
      Part.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuildPicked {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuildPicked } as BuildPicked;
    message.parts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.build = Build.decode(reader, reader.uint32());
          break;
        case 2:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 3:
          message.parts.push(Part.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildPicked {
    const message = { ...baseBuildPicked } as BuildPicked;
    message.parts = [];
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromJSON(object.build);
    } else {
      message.build = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.parts !== undefined && object.parts !== null) {
      for (const e of object.parts) {
        message.parts.push(Part.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BuildPicked): unknown {
    const obj: any = {};
    message.build !== undefined &&
      (obj.build = message.build ? Build.toJSON(message.build) : undefined);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    if (message.parts) {
      obj.parts = message.parts.map((e) => (e ? Part.toJSON(e) : undefined));
    } else {
      obj.parts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BuildPicked>): BuildPicked {
    const message = { ...baseBuildPicked } as BuildPicked;
    message.parts = [];
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromPartial(object.build);
    } else {
      message.build = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.parts !== undefined && object.parts !== null) {
      for (const e of object.parts) {
        message.parts.push(Part.fromPartial(e));
      }
    }
    return message;
  },
};

const baseComponentDemandUpdated: object = { componentId: "", quantity: 0 };

export const ComponentDemandUpdated = {
  encode(
    message: ComponentDemandUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.componentId !== "") {
      writer.uint32(10).string(message.componentId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ComponentDemandUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComponentDemandUpdated } as ComponentDemandUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.componentId = reader.string();
          break;
        case 2:
          message.quantity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentDemandUpdated {
    const message = { ...baseComponentDemandUpdated } as ComponentDemandUpdated;
    if (object.componentId !== undefined && object.componentId !== null) {
      message.componentId = String(object.componentId);
    } else {
      message.componentId = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    return message;
  },

  toJSON(message: ComponentDemandUpdated): unknown {
    const obj: any = {};
    message.componentId !== undefined &&
      (obj.componentId = message.componentId);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ComponentDemandUpdated>
  ): ComponentDemandUpdated {
    const message = { ...baseComponentDemandUpdated } as ComponentDemandUpdated;
    if (object.componentId !== undefined && object.componentId !== null) {
      message.componentId = object.componentId;
    } else {
      message.componentId = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
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
