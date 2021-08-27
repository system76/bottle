/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Build } from "../../../bottle/assembly/v1/build";

export const protobufPackage = "bottle.assembly.v1";

export interface GetBuildRequest {
  requestId: string;
}

export interface GetBuildResponse {
  requestId: string;
  build: Build | undefined;
}

export interface ListPickableBuildsRequest {
  requestId: string;
}

export interface ListPickableBuildsResponse {
  requestId: string;
  build: Build | undefined;
}

export interface ListComponentDemandsRequest {
  requestId: string;
}

export interface ListComponentDemandsResponse {
  requestId: string;
  componentId: string;
  demandQuantity: number;
}

const baseGetBuildRequest: object = { requestId: "" };

export const GetBuildRequest = {
  encode(message: GetBuildRequest, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBuildRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBuildRequest } as GetBuildRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBuildRequest {
    const message = { ...baseGetBuildRequest } as GetBuildRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    return message;
  },

  toJSON(message: GetBuildRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBuildRequest>): GetBuildRequest {
    const message = { ...baseGetBuildRequest } as GetBuildRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    return message;
  },
};

const baseGetBuildResponse: object = { requestId: "" };

export const GetBuildResponse = {
  encode(message: GetBuildResponse, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.build !== undefined) {
      Build.encode(message.build, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBuildResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBuildResponse } as GetBuildResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.build = Build.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBuildResponse {
    const message = { ...baseGetBuildResponse } as GetBuildResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromJSON(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },

  toJSON(message: GetBuildResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.build !== undefined &&
      (obj.build = message.build ? Build.toJSON(message.build) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBuildResponse>): GetBuildResponse {
    const message = { ...baseGetBuildResponse } as GetBuildResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromPartial(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },
};

const baseListPickableBuildsRequest: object = { requestId: "" };

export const ListPickableBuildsRequest = {
  encode(
    message: ListPickableBuildsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListPickableBuildsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPickableBuildsRequest,
    } as ListPickableBuildsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPickableBuildsRequest {
    const message = {
      ...baseListPickableBuildsRequest,
    } as ListPickableBuildsRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    return message;
  },

  toJSON(message: ListPickableBuildsRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListPickableBuildsRequest>
  ): ListPickableBuildsRequest {
    const message = {
      ...baseListPickableBuildsRequest,
    } as ListPickableBuildsRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    return message;
  },
};

const baseListPickableBuildsResponse: object = { requestId: "" };

export const ListPickableBuildsResponse = {
  encode(
    message: ListPickableBuildsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.build !== undefined) {
      Build.encode(message.build, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListPickableBuildsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPickableBuildsResponse,
    } as ListPickableBuildsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.build = Build.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPickableBuildsResponse {
    const message = {
      ...baseListPickableBuildsResponse,
    } as ListPickableBuildsResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromJSON(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },

  toJSON(message: ListPickableBuildsResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.build !== undefined &&
      (obj.build = message.build ? Build.toJSON(message.build) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListPickableBuildsResponse>
  ): ListPickableBuildsResponse {
    const message = {
      ...baseListPickableBuildsResponse,
    } as ListPickableBuildsResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.build !== undefined && object.build !== null) {
      message.build = Build.fromPartial(object.build);
    } else {
      message.build = undefined;
    }
    return message;
  },
};

const baseListComponentDemandsRequest: object = { requestId: "" };

export const ListComponentDemandsRequest = {
  encode(
    message: ListComponentDemandsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListComponentDemandsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListComponentDemandsRequest,
    } as ListComponentDemandsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListComponentDemandsRequest {
    const message = {
      ...baseListComponentDemandsRequest,
    } as ListComponentDemandsRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    return message;
  },

  toJSON(message: ListComponentDemandsRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListComponentDemandsRequest>
  ): ListComponentDemandsRequest {
    const message = {
      ...baseListComponentDemandsRequest,
    } as ListComponentDemandsRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    return message;
  },
};

const baseListComponentDemandsResponse: object = {
  requestId: "",
  componentId: "",
  demandQuantity: 0,
};

export const ListComponentDemandsResponse = {
  encode(
    message: ListComponentDemandsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.componentId !== "") {
      writer.uint32(26).string(message.componentId);
    }
    if (message.demandQuantity !== 0) {
      writer.uint32(16).int32(message.demandQuantity);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListComponentDemandsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListComponentDemandsResponse,
    } as ListComponentDemandsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 3:
          message.componentId = reader.string();
          break;
        case 2:
          message.demandQuantity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListComponentDemandsResponse {
    const message = {
      ...baseListComponentDemandsResponse,
    } as ListComponentDemandsResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.componentId !== undefined && object.componentId !== null) {
      message.componentId = String(object.componentId);
    } else {
      message.componentId = "";
    }
    if (object.demandQuantity !== undefined && object.demandQuantity !== null) {
      message.demandQuantity = Number(object.demandQuantity);
    } else {
      message.demandQuantity = 0;
    }
    return message;
  },

  toJSON(message: ListComponentDemandsResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.componentId !== undefined &&
      (obj.componentId = message.componentId);
    message.demandQuantity !== undefined &&
      (obj.demandQuantity = message.demandQuantity);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListComponentDemandsResponse>
  ): ListComponentDemandsResponse {
    const message = {
      ...baseListComponentDemandsResponse,
    } as ListComponentDemandsResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.componentId !== undefined && object.componentId !== null) {
      message.componentId = object.componentId;
    } else {
      message.componentId = "";
    }
    if (object.demandQuantity !== undefined && object.demandQuantity !== null) {
      message.demandQuantity = object.demandQuantity;
    } else {
      message.demandQuantity = 0;
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
