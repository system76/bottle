/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Component } from "../../../bottle/inventory/v1/component";
import { Sku } from "../../../bottle/inventory/v1/sku";
import { Part } from "../../../bottle/inventory/v1/part";

export const protobufPackage = "bottle.inventory.v1";

export interface ComponentAvailabilityUpdated {
  component: Component | undefined;
  quantity: number;
}

export interface SkuDetailsUpdated {
  sku: Sku | undefined;
  availableQuantity: number;
  demandQuantity: number;
  excessQuantity: number;
}

export interface PartCreated {
  part: Part | undefined;
}

export interface PartUpdated {
  old: Part | undefined;
  new: Part | undefined;
}

export interface ComponentKitChanged {
  component: Component | undefined;
}

const baseComponentAvailabilityUpdated: object = { quantity: 0 };

export const ComponentAvailabilityUpdated = {
  encode(
    message: ComponentAvailabilityUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.component !== undefined) {
      Component.encode(message.component, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ComponentAvailabilityUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseComponentAvailabilityUpdated,
    } as ComponentAvailabilityUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.component = Component.decode(reader, reader.uint32());
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

  fromJSON(object: any): ComponentAvailabilityUpdated {
    const message = {
      ...baseComponentAvailabilityUpdated,
    } as ComponentAvailabilityUpdated;
    if (object.component !== undefined && object.component !== null) {
      message.component = Component.fromJSON(object.component);
    } else {
      message.component = undefined;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    return message;
  },

  toJSON(message: ComponentAvailabilityUpdated): unknown {
    const obj: any = {};
    message.component !== undefined &&
      (obj.component = message.component
        ? Component.toJSON(message.component)
        : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ComponentAvailabilityUpdated>
  ): ComponentAvailabilityUpdated {
    const message = {
      ...baseComponentAvailabilityUpdated,
    } as ComponentAvailabilityUpdated;
    if (object.component !== undefined && object.component !== null) {
      message.component = Component.fromPartial(object.component);
    } else {
      message.component = undefined;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    return message;
  },
};

const baseSkuDetailsUpdated: object = {
  availableQuantity: 0,
  demandQuantity: 0,
  excessQuantity: 0,
};

export const SkuDetailsUpdated = {
  encode(message: SkuDetailsUpdated, writer: Writer = Writer.create()): Writer {
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(10).fork()).ldelim();
    }
    if (message.availableQuantity !== 0) {
      writer.uint32(24).int32(message.availableQuantity);
    }
    if (message.demandQuantity !== 0) {
      writer.uint32(32).int32(message.demandQuantity);
    }
    if (message.excessQuantity !== 0) {
      writer.uint32(40).int32(message.excessQuantity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SkuDetailsUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSkuDetailsUpdated } as SkuDetailsUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sku = Sku.decode(reader, reader.uint32());
          break;
        case 3:
          message.availableQuantity = reader.int32();
          break;
        case 4:
          message.demandQuantity = reader.int32();
          break;
        case 5:
          message.excessQuantity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SkuDetailsUpdated {
    const message = { ...baseSkuDetailsUpdated } as SkuDetailsUpdated;
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromJSON(object.sku);
    } else {
      message.sku = undefined;
    }
    if (
      object.availableQuantity !== undefined &&
      object.availableQuantity !== null
    ) {
      message.availableQuantity = Number(object.availableQuantity);
    } else {
      message.availableQuantity = 0;
    }
    if (object.demandQuantity !== undefined && object.demandQuantity !== null) {
      message.demandQuantity = Number(object.demandQuantity);
    } else {
      message.demandQuantity = 0;
    }
    if (object.excessQuantity !== undefined && object.excessQuantity !== null) {
      message.excessQuantity = Number(object.excessQuantity);
    } else {
      message.excessQuantity = 0;
    }
    return message;
  },

  toJSON(message: SkuDetailsUpdated): unknown {
    const obj: any = {};
    message.sku !== undefined &&
      (obj.sku = message.sku ? Sku.toJSON(message.sku) : undefined);
    message.availableQuantity !== undefined &&
      (obj.availableQuantity = message.availableQuantity);
    message.demandQuantity !== undefined &&
      (obj.demandQuantity = message.demandQuantity);
    message.excessQuantity !== undefined &&
      (obj.excessQuantity = message.excessQuantity);
    return obj;
  },

  fromPartial(object: DeepPartial<SkuDetailsUpdated>): SkuDetailsUpdated {
    const message = { ...baseSkuDetailsUpdated } as SkuDetailsUpdated;
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromPartial(object.sku);
    } else {
      message.sku = undefined;
    }
    if (
      object.availableQuantity !== undefined &&
      object.availableQuantity !== null
    ) {
      message.availableQuantity = object.availableQuantity;
    } else {
      message.availableQuantity = 0;
    }
    if (object.demandQuantity !== undefined && object.demandQuantity !== null) {
      message.demandQuantity = object.demandQuantity;
    } else {
      message.demandQuantity = 0;
    }
    if (object.excessQuantity !== undefined && object.excessQuantity !== null) {
      message.excessQuantity = object.excessQuantity;
    } else {
      message.excessQuantity = 0;
    }
    return message;
  },
};

const basePartCreated: object = {};

export const PartCreated = {
  encode(message: PartCreated, writer: Writer = Writer.create()): Writer {
    if (message.part !== undefined) {
      Part.encode(message.part, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PartCreated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePartCreated } as PartCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.part = Part.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartCreated {
    const message = { ...basePartCreated } as PartCreated;
    if (object.part !== undefined && object.part !== null) {
      message.part = Part.fromJSON(object.part);
    } else {
      message.part = undefined;
    }
    return message;
  },

  toJSON(message: PartCreated): unknown {
    const obj: any = {};
    message.part !== undefined &&
      (obj.part = message.part ? Part.toJSON(message.part) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PartCreated>): PartCreated {
    const message = { ...basePartCreated } as PartCreated;
    if (object.part !== undefined && object.part !== null) {
      message.part = Part.fromPartial(object.part);
    } else {
      message.part = undefined;
    }
    return message;
  },
};

const basePartUpdated: object = {};

export const PartUpdated = {
  encode(message: PartUpdated, writer: Writer = Writer.create()): Writer {
    if (message.old !== undefined) {
      Part.encode(message.old, writer.uint32(10).fork()).ldelim();
    }
    if (message.new !== undefined) {
      Part.encode(message.new, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PartUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePartUpdated } as PartUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.old = Part.decode(reader, reader.uint32());
          break;
        case 2:
          message.new = Part.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartUpdated {
    const message = { ...basePartUpdated } as PartUpdated;
    if (object.old !== undefined && object.old !== null) {
      message.old = Part.fromJSON(object.old);
    } else {
      message.old = undefined;
    }
    if (object.new !== undefined && object.new !== null) {
      message.new = Part.fromJSON(object.new);
    } else {
      message.new = undefined;
    }
    return message;
  },

  toJSON(message: PartUpdated): unknown {
    const obj: any = {};
    message.old !== undefined &&
      (obj.old = message.old ? Part.toJSON(message.old) : undefined);
    message.new !== undefined &&
      (obj.new = message.new ? Part.toJSON(message.new) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PartUpdated>): PartUpdated {
    const message = { ...basePartUpdated } as PartUpdated;
    if (object.old !== undefined && object.old !== null) {
      message.old = Part.fromPartial(object.old);
    } else {
      message.old = undefined;
    }
    if (object.new !== undefined && object.new !== null) {
      message.new = Part.fromPartial(object.new);
    } else {
      message.new = undefined;
    }
    return message;
  },
};

const baseComponentKitChanged: object = {};

export const ComponentKitChanged = {
  encode(
    message: ComponentKitChanged,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.component !== undefined) {
      Component.encode(message.component, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ComponentKitChanged {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComponentKitChanged } as ComponentKitChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.component = Component.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentKitChanged {
    const message = { ...baseComponentKitChanged } as ComponentKitChanged;
    if (object.component !== undefined && object.component !== null) {
      message.component = Component.fromJSON(object.component);
    } else {
      message.component = undefined;
    }
    return message;
  },

  toJSON(message: ComponentKitChanged): unknown {
    const obj: any = {};
    message.component !== undefined &&
      (obj.component = message.component
        ? Component.toJSON(message.component)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ComponentKitChanged>): ComponentKitChanged {
    const message = { ...baseComponentKitChanged } as ComponentKitChanged;
    if (object.component !== undefined && object.component !== null) {
      message.component = Component.fromPartial(object.component);
    } else {
      message.component = undefined;
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
