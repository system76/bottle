/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Order } from "./order";

export const protobufPackage = "bottle.fulfillment.v1";

export interface OrderVerificationRequest {
  order: Order | undefined;
}

export interface OrderVerificationResponse {
  order: Order | undefined;
  flags: string[];
}

const baseOrderVerificationRequest: object = {};

export const OrderVerificationRequest = {
  encode(
    message: OrderVerificationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): OrderVerificationRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOrderVerificationRequest,
    } as OrderVerificationRequest;
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

  fromJSON(object: any): OrderVerificationRequest {
    const message = {
      ...baseOrderVerificationRequest,
    } as OrderVerificationRequest;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },

  toJSON(message: OrderVerificationRequest): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OrderVerificationRequest>
  ): OrderVerificationRequest {
    const message = {
      ...baseOrderVerificationRequest,
    } as OrderVerificationRequest;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },
};

const baseOrderVerificationResponse: object = { flags: "" };

export const OrderVerificationResponse = {
  encode(
    message: OrderVerificationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flags) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): OrderVerificationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOrderVerificationResponse,
    } as OrderVerificationResponse;
    message.flags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.flags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderVerificationResponse {
    const message = {
      ...baseOrderVerificationResponse,
    } as OrderVerificationResponse;
    message.flags = [];
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: OrderVerificationResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    if (message.flags) {
      obj.flags = message.flags.map((e) => e);
    } else {
      obj.flags = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<OrderVerificationResponse>
  ): OrderVerificationResponse {
    const message = {
      ...baseOrderVerificationResponse,
    } as OrderVerificationResponse;
    message.flags = [];
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(e);
      }
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
