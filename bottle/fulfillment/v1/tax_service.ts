/* eslint-disable */
import { util, configure, Reader, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Order } from "../../../bottle/fulfillment/v1/order";

export const protobufPackage = "bottle.fulfillment.v1";

export interface TaxCalculateRequest {
  requestId: string;
  order: Order | undefined;
}

export interface TaxCalculateResponse {
  requestId: string;
  order: Order | undefined;
}

const baseTaxCalculateRequest: object = { requestId: "" };

export const TaxCalculateRequest = {
  encode(
    message: TaxCalculateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TaxCalculateRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTaxCalculateRequest } as TaxCalculateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TaxCalculateRequest {
    const message = { ...baseTaxCalculateRequest } as TaxCalculateRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },

  toJSON(message: TaxCalculateRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TaxCalculateRequest>): TaxCalculateRequest {
    const message = { ...baseTaxCalculateRequest } as TaxCalculateRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },
};

const baseTaxCalculateResponse: object = { requestId: "" };

export const TaxCalculateResponse = {
  encode(
    message: TaxCalculateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TaxCalculateResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTaxCalculateResponse } as TaxCalculateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TaxCalculateResponse {
    const message = { ...baseTaxCalculateResponse } as TaxCalculateResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },

  toJSON(message: TaxCalculateResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TaxCalculateResponse>): TaxCalculateResponse {
    const message = { ...baseTaxCalculateResponse } as TaxCalculateResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },
};

export interface TaxService {
  TaxCalculate(request: TaxCalculateRequest): Promise<TaxCalculateResponse>;
}

export class TaxServiceClientImpl implements TaxService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TaxCalculate = this.TaxCalculate.bind(this);
  }
  TaxCalculate(request: TaxCalculateRequest): Promise<TaxCalculateResponse> {
    const data = TaxCalculateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.fulfillment.v1.TaxService",
      "TaxCalculate",
      data
    );
    return promise.then((data) =>
      TaxCalculateResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
