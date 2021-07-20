/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Component } from "../../../bottle/inventory/v1/component";
import { Location } from "../../../bottle/inventory/v1/location";

export const protobufPackage = "bottle.inventory.v1";

export interface ComponentAvailabilityListRequest {
  requestId: string;
  components: Component[];
}

export interface ComponentAvailabilityListResponse {
  requestId: string;
  component: Component | undefined;
  available: number;
}

export interface LocationListRequest {
  requestId: string;
  locations: Location[];
}

export interface LocationListResponse {
  requestId: string;
  location: Location | undefined;
}

const baseComponentAvailabilityListRequest: object = { requestId: "" };

export const ComponentAvailabilityListRequest = {
  encode(
    message: ComponentAvailabilityListRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.components) {
      Component.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ComponentAvailabilityListRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseComponentAvailabilityListRequest,
    } as ComponentAvailabilityListRequest;
    message.components = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.components.push(Component.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentAvailabilityListRequest {
    const message = {
      ...baseComponentAvailabilityListRequest,
    } as ComponentAvailabilityListRequest;
    message.components = [];
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.components !== undefined && object.components !== null) {
      for (const e of object.components) {
        message.components.push(Component.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ComponentAvailabilityListRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    if (message.components) {
      obj.components = message.components.map((e) =>
        e ? Component.toJSON(e) : undefined
      );
    } else {
      obj.components = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ComponentAvailabilityListRequest>
  ): ComponentAvailabilityListRequest {
    const message = {
      ...baseComponentAvailabilityListRequest,
    } as ComponentAvailabilityListRequest;
    message.components = [];
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.components !== undefined && object.components !== null) {
      for (const e of object.components) {
        message.components.push(Component.fromPartial(e));
      }
    }
    return message;
  },
};

const baseComponentAvailabilityListResponse: object = {
  requestId: "",
  available: 0,
};

export const ComponentAvailabilityListResponse = {
  encode(
    message: ComponentAvailabilityListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.component !== undefined) {
      Component.encode(message.component, writer.uint32(18).fork()).ldelim();
    }
    if (message.available !== 0) {
      writer.uint32(24).int32(message.available);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ComponentAvailabilityListResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseComponentAvailabilityListResponse,
    } as ComponentAvailabilityListResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.component = Component.decode(reader, reader.uint32());
          break;
        case 3:
          message.available = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentAvailabilityListResponse {
    const message = {
      ...baseComponentAvailabilityListResponse,
    } as ComponentAvailabilityListResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.component !== undefined && object.component !== null) {
      message.component = Component.fromJSON(object.component);
    } else {
      message.component = undefined;
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = Number(object.available);
    } else {
      message.available = 0;
    }
    return message;
  },

  toJSON(message: ComponentAvailabilityListResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.component !== undefined &&
      (obj.component = message.component
        ? Component.toJSON(message.component)
        : undefined);
    message.available !== undefined && (obj.available = message.available);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ComponentAvailabilityListResponse>
  ): ComponentAvailabilityListResponse {
    const message = {
      ...baseComponentAvailabilityListResponse,
    } as ComponentAvailabilityListResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.component !== undefined && object.component !== null) {
      message.component = Component.fromPartial(object.component);
    } else {
      message.component = undefined;
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    } else {
      message.available = 0;
    }
    return message;
  },
};

const baseLocationListRequest: object = { requestId: "" };

export const LocationListRequest = {
  encode(
    message: LocationListRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocationListRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocationListRequest } as LocationListRequest;
    message.locations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.locations.push(Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationListRequest {
    const message = { ...baseLocationListRequest } as LocationListRequest;
    message.locations = [];
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.locations !== undefined && object.locations !== null) {
      for (const e of object.locations) {
        message.locations.push(Location.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: LocationListRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? Location.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LocationListRequest>): LocationListRequest {
    const message = { ...baseLocationListRequest } as LocationListRequest;
    message.locations = [];
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.locations !== undefined && object.locations !== null) {
      for (const e of object.locations) {
        message.locations.push(Location.fromPartial(e));
      }
    }
    return message;
  },
};

const baseLocationListResponse: object = { requestId: "" };

export const LocationListResponse = {
  encode(
    message: LocationListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocationListResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocationListResponse } as LocationListResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.location = Location.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationListResponse {
    const message = { ...baseLocationListResponse } as LocationListResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: LocationListResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LocationListResponse>): LocationListResponse {
    const message = { ...baseLocationListResponse } as LocationListResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromPartial(object.location);
    } else {
      message.location = undefined;
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
