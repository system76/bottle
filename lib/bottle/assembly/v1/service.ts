/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Build } from "../../../bottle/assembly/v1/build";

export const protobufPackage = "bottle.assembly.v1";

export interface BuildListRequest {
  requestId: string;
}

export interface BuildListResponse {
  requestId: string;
  build: Build | undefined;
}

export interface ComponentDemandRequest {
  requestId: string;
}

export interface ComponentDemandResponse {
  requestId: string;
  demandQuantity: number;
}

const baseBuildListRequest: object = { requestId: "" };

export const BuildListRequest = {
  encode(message: BuildListRequest, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuildListRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuildListRequest } as BuildListRequest;
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

  fromJSON(object: any): BuildListRequest {
    const message = { ...baseBuildListRequest } as BuildListRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    return message;
  },

  toJSON(message: BuildListRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(object: DeepPartial<BuildListRequest>): BuildListRequest {
    const message = { ...baseBuildListRequest } as BuildListRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    return message;
  },
};

const baseBuildListResponse: object = { requestId: "" };

export const BuildListResponse = {
  encode(message: BuildListResponse, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.build !== undefined) {
      Build.encode(message.build, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuildListResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuildListResponse } as BuildListResponse;
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

  fromJSON(object: any): BuildListResponse {
    const message = { ...baseBuildListResponse } as BuildListResponse;
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

  toJSON(message: BuildListResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.build !== undefined &&
      (obj.build = message.build ? Build.toJSON(message.build) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BuildListResponse>): BuildListResponse {
    const message = { ...baseBuildListResponse } as BuildListResponse;
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

const baseComponentDemandRequest: object = { requestId: "" };

export const ComponentDemandRequest = {
  encode(
    message: ComponentDemandRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ComponentDemandRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComponentDemandRequest } as ComponentDemandRequest;
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

  fromJSON(object: any): ComponentDemandRequest {
    const message = { ...baseComponentDemandRequest } as ComponentDemandRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    return message;
  },

  toJSON(message: ComponentDemandRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ComponentDemandRequest>
  ): ComponentDemandRequest {
    const message = { ...baseComponentDemandRequest } as ComponentDemandRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    return message;
  },
};

const baseComponentDemandResponse: object = {
  requestId: "",
  demandQuantity: 0,
};

export const ComponentDemandResponse = {
  encode(
    message: ComponentDemandResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.demandQuantity !== 0) {
      writer.uint32(16).int32(message.demandQuantity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ComponentDemandResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseComponentDemandResponse,
    } as ComponentDemandResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
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

  fromJSON(object: any): ComponentDemandResponse {
    const message = {
      ...baseComponentDemandResponse,
    } as ComponentDemandResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.demandQuantity !== undefined && object.demandQuantity !== null) {
      message.demandQuantity = Number(object.demandQuantity);
    } else {
      message.demandQuantity = 0;
    }
    return message;
  },

  toJSON(message: ComponentDemandResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.demandQuantity !== undefined &&
      (obj.demandQuantity = message.demandQuantity);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ComponentDemandResponse>
  ): ComponentDemandResponse {
    const message = {
      ...baseComponentDemandResponse,
    } as ComponentDemandResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
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
