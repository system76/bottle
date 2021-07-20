/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Order } from "../../../bottle/fulfillment/v1/order";

export const protobufPackage = "bottle.fulfillment.v1";

export interface OrderCreated {
  order: Order | undefined;
}

export interface OrderUpdated {
  old: Order | undefined;
  new: Order | undefined;
}

export interface TribbleFailed {
  order: Order | undefined;
  type: TribbleFailed_FailureType;
}

export enum TribbleFailed_FailureType {
  FAILURE_TYPE_UNSPECIFIED = 0,
  FAILURE_TYPE_INVALID_ADDRESS = 1,
  FAILURE_TYPE_ALREADY_SHIPPED = 2,
  FAILURE_TYPE_TRIBBLE_ERROR = 3,
  UNRECOGNIZED = -1,
}

export function tribbleFailed_FailureTypeFromJSON(
  object: any
): TribbleFailed_FailureType {
  switch (object) {
    case 0:
    case "FAILURE_TYPE_UNSPECIFIED":
      return TribbleFailed_FailureType.FAILURE_TYPE_UNSPECIFIED;
    case 1:
    case "FAILURE_TYPE_INVALID_ADDRESS":
      return TribbleFailed_FailureType.FAILURE_TYPE_INVALID_ADDRESS;
    case 2:
    case "FAILURE_TYPE_ALREADY_SHIPPED":
      return TribbleFailed_FailureType.FAILURE_TYPE_ALREADY_SHIPPED;
    case 3:
    case "FAILURE_TYPE_TRIBBLE_ERROR":
      return TribbleFailed_FailureType.FAILURE_TYPE_TRIBBLE_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TribbleFailed_FailureType.UNRECOGNIZED;
  }
}

export function tribbleFailed_FailureTypeToJSON(
  object: TribbleFailed_FailureType
): string {
  switch (object) {
    case TribbleFailed_FailureType.FAILURE_TYPE_UNSPECIFIED:
      return "FAILURE_TYPE_UNSPECIFIED";
    case TribbleFailed_FailureType.FAILURE_TYPE_INVALID_ADDRESS:
      return "FAILURE_TYPE_INVALID_ADDRESS";
    case TribbleFailed_FailureType.FAILURE_TYPE_ALREADY_SHIPPED:
      return "FAILURE_TYPE_ALREADY_SHIPPED";
    case TribbleFailed_FailureType.FAILURE_TYPE_TRIBBLE_ERROR:
      return "FAILURE_TYPE_TRIBBLE_ERROR";
    default:
      return "UNKNOWN";
  }
}

const baseOrderCreated: object = {};

export const OrderCreated = {
  encode(message: OrderCreated, writer: Writer = Writer.create()): Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderCreated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderCreated } as OrderCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderCreated {
    const message = { ...baseOrderCreated } as OrderCreated;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },

  toJSON(message: OrderCreated): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderCreated>): OrderCreated {
    const message = { ...baseOrderCreated } as OrderCreated;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },
};

const baseOrderUpdated: object = {};

export const OrderUpdated = {
  encode(message: OrderUpdated, writer: Writer = Writer.create()): Writer {
    if (message.old !== undefined) {
      Order.encode(message.old, writer.uint32(10).fork()).ldelim();
    }
    if (message.new !== undefined) {
      Order.encode(message.new, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderUpdated } as OrderUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.old = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.new = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderUpdated {
    const message = { ...baseOrderUpdated } as OrderUpdated;
    if (object.old !== undefined && object.old !== null) {
      message.old = Order.fromJSON(object.old);
    } else {
      message.old = undefined;
    }
    if (object.new !== undefined && object.new !== null) {
      message.new = Order.fromJSON(object.new);
    } else {
      message.new = undefined;
    }
    return message;
  },

  toJSON(message: OrderUpdated): unknown {
    const obj: any = {};
    message.old !== undefined &&
      (obj.old = message.old ? Order.toJSON(message.old) : undefined);
    message.new !== undefined &&
      (obj.new = message.new ? Order.toJSON(message.new) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderUpdated>): OrderUpdated {
    const message = { ...baseOrderUpdated } as OrderUpdated;
    if (object.old !== undefined && object.old !== null) {
      message.old = Order.fromPartial(object.old);
    } else {
      message.old = undefined;
    }
    if (object.new !== undefined && object.new !== null) {
      message.new = Order.fromPartial(object.new);
    } else {
      message.new = undefined;
    }
    return message;
  },
};

const baseTribbleFailed: object = { type: 0 };

export const TribbleFailed = {
  encode(message: TribbleFailed, writer: Writer = Writer.create()): Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TribbleFailed {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTribbleFailed } as TribbleFailed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TribbleFailed {
    const message = { ...baseTribbleFailed } as TribbleFailed;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = tribbleFailed_FailureTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: TribbleFailed): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.type !== undefined &&
      (obj.type = tribbleFailed_FailureTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<TribbleFailed>): TribbleFailed {
    const message = { ...baseTribbleFailed } as TribbleFailed;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
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
