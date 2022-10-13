/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Component } from "./component";
import { Sku } from "./sku";
import { Location } from "./location";

export const protobufPackage = "bottle.inventory.v1";

export interface ListComponentAvailabilityRequest {
  requestId: string;
  components: Component[];
}

export interface ListComponentAvailabilityResponse {
  requestId: string;
  component: Component | undefined;
  totalAvailableQuantity: number;
  pickingOptions: ListComponentAvailabilityResponse_PickingOption[];
}

export interface ListComponentAvailabilityResponse_PickingOption {
  availableQuantity: number;
  requiredQuantity: number;
  skus: ListComponentAvailabilityResponse_PickingOption_PickingSku[];
}

export interface ListComponentAvailabilityResponse_PickingOption_PickingSku {
  sku: Sku | undefined;
  availableQuantity: number;
  requiredQuantity: number;
  locations: ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation[];
}

export interface ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation {
  location: Location | undefined;
  availableQuantity: number;
}

export interface ListSkuQuantityRequest {
  requestId: string;
}

export interface ListSkuQuantityResponse {
  requestId: string;
  sku: Sku | undefined;
  availableQuantity: number;
  demandQuantity: number;
  excessQuantity: number;
}

export interface ListSkuAvailabilityRequest {
  requestId: string;
  sku: Sku | undefined;
}

export interface ListSkuAvailabilityResponse {
  requestId: string;
  sku: Sku | undefined;
  location: Location | undefined;
}

export interface GetSkuDetailsRequest {
  requestId: string;
  sku: Sku | undefined;
}

export interface GetSkuDetailsResponse {
  requestId: string;
  sku: Sku | undefined;
  availableQuantity: number;
  demandQuantity: number;
  excessQuantity: number;
}

export interface ListLocationsRequest {
  requestId: string;
  locations: Location[];
}

export interface ListLocationsResponse {
  requestId: string;
  location: Location | undefined;
}

const baseListComponentAvailabilityRequest: object = { requestId: "" };

export const ListComponentAvailabilityRequest = {
  encode(
    message: ListComponentAvailabilityRequest,
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
  ): ListComponentAvailabilityRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListComponentAvailabilityRequest,
    } as ListComponentAvailabilityRequest;
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

  fromJSON(object: any): ListComponentAvailabilityRequest {
    const message = {
      ...baseListComponentAvailabilityRequest,
    } as ListComponentAvailabilityRequest;
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

  toJSON(message: ListComponentAvailabilityRequest): unknown {
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
    object: DeepPartial<ListComponentAvailabilityRequest>
  ): ListComponentAvailabilityRequest {
    const message = {
      ...baseListComponentAvailabilityRequest,
    } as ListComponentAvailabilityRequest;
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

const baseListComponentAvailabilityResponse: object = {
  requestId: "",
  totalAvailableQuantity: 0,
};

export const ListComponentAvailabilityResponse = {
  encode(
    message: ListComponentAvailabilityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.component !== undefined) {
      Component.encode(message.component, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalAvailableQuantity !== 0) {
      writer.uint32(24).int32(message.totalAvailableQuantity);
    }
    for (const v of message.pickingOptions) {
      ListComponentAvailabilityResponse_PickingOption.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListComponentAvailabilityResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListComponentAvailabilityResponse,
    } as ListComponentAvailabilityResponse;
    message.pickingOptions = [];
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
          message.totalAvailableQuantity = reader.int32();
          break;
        case 4:
          message.pickingOptions.push(
            ListComponentAvailabilityResponse_PickingOption.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListComponentAvailabilityResponse {
    const message = {
      ...baseListComponentAvailabilityResponse,
    } as ListComponentAvailabilityResponse;
    message.pickingOptions = [];
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
    if (
      object.totalAvailableQuantity !== undefined &&
      object.totalAvailableQuantity !== null
    ) {
      message.totalAvailableQuantity = Number(object.totalAvailableQuantity);
    } else {
      message.totalAvailableQuantity = 0;
    }
    if (object.pickingOptions !== undefined && object.pickingOptions !== null) {
      for (const e of object.pickingOptions) {
        message.pickingOptions.push(
          ListComponentAvailabilityResponse_PickingOption.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: ListComponentAvailabilityResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.component !== undefined &&
      (obj.component = message.component
        ? Component.toJSON(message.component)
        : undefined);
    message.totalAvailableQuantity !== undefined &&
      (obj.totalAvailableQuantity = message.totalAvailableQuantity);
    if (message.pickingOptions) {
      obj.pickingOptions = message.pickingOptions.map((e) =>
        e
          ? ListComponentAvailabilityResponse_PickingOption.toJSON(e)
          : undefined
      );
    } else {
      obj.pickingOptions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListComponentAvailabilityResponse>
  ): ListComponentAvailabilityResponse {
    const message = {
      ...baseListComponentAvailabilityResponse,
    } as ListComponentAvailabilityResponse;
    message.pickingOptions = [];
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
    if (
      object.totalAvailableQuantity !== undefined &&
      object.totalAvailableQuantity !== null
    ) {
      message.totalAvailableQuantity = object.totalAvailableQuantity;
    } else {
      message.totalAvailableQuantity = 0;
    }
    if (object.pickingOptions !== undefined && object.pickingOptions !== null) {
      for (const e of object.pickingOptions) {
        message.pickingOptions.push(
          ListComponentAvailabilityResponse_PickingOption.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseListComponentAvailabilityResponse_PickingOption: object = {
  availableQuantity: 0,
  requiredQuantity: 0,
};

export const ListComponentAvailabilityResponse_PickingOption = {
  encode(
    message: ListComponentAvailabilityResponse_PickingOption,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.availableQuantity !== 0) {
      writer.uint32(8).int32(message.availableQuantity);
    }
    if (message.requiredQuantity !== 0) {
      writer.uint32(16).int32(message.requiredQuantity);
    }
    for (const v of message.skus) {
      ListComponentAvailabilityResponse_PickingOption_PickingSku.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListComponentAvailabilityResponse_PickingOption {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListComponentAvailabilityResponse_PickingOption,
    } as ListComponentAvailabilityResponse_PickingOption;
    message.skus = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availableQuantity = reader.int32();
          break;
        case 2:
          message.requiredQuantity = reader.int32();
          break;
        case 3:
          message.skus.push(
            ListComponentAvailabilityResponse_PickingOption_PickingSku.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListComponentAvailabilityResponse_PickingOption {
    const message = {
      ...baseListComponentAvailabilityResponse_PickingOption,
    } as ListComponentAvailabilityResponse_PickingOption;
    message.skus = [];
    if (
      object.availableQuantity !== undefined &&
      object.availableQuantity !== null
    ) {
      message.availableQuantity = Number(object.availableQuantity);
    } else {
      message.availableQuantity = 0;
    }
    if (
      object.requiredQuantity !== undefined &&
      object.requiredQuantity !== null
    ) {
      message.requiredQuantity = Number(object.requiredQuantity);
    } else {
      message.requiredQuantity = 0;
    }
    if (object.skus !== undefined && object.skus !== null) {
      for (const e of object.skus) {
        message.skus.push(
          ListComponentAvailabilityResponse_PickingOption_PickingSku.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: ListComponentAvailabilityResponse_PickingOption): unknown {
    const obj: any = {};
    message.availableQuantity !== undefined &&
      (obj.availableQuantity = message.availableQuantity);
    message.requiredQuantity !== undefined &&
      (obj.requiredQuantity = message.requiredQuantity);
    if (message.skus) {
      obj.skus = message.skus.map((e) =>
        e
          ? ListComponentAvailabilityResponse_PickingOption_PickingSku.toJSON(e)
          : undefined
      );
    } else {
      obj.skus = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListComponentAvailabilityResponse_PickingOption>
  ): ListComponentAvailabilityResponse_PickingOption {
    const message = {
      ...baseListComponentAvailabilityResponse_PickingOption,
    } as ListComponentAvailabilityResponse_PickingOption;
    message.skus = [];
    if (
      object.availableQuantity !== undefined &&
      object.availableQuantity !== null
    ) {
      message.availableQuantity = object.availableQuantity;
    } else {
      message.availableQuantity = 0;
    }
    if (
      object.requiredQuantity !== undefined &&
      object.requiredQuantity !== null
    ) {
      message.requiredQuantity = object.requiredQuantity;
    } else {
      message.requiredQuantity = 0;
    }
    if (object.skus !== undefined && object.skus !== null) {
      for (const e of object.skus) {
        message.skus.push(
          ListComponentAvailabilityResponse_PickingOption_PickingSku.fromPartial(
            e
          )
        );
      }
    }
    return message;
  },
};

const baseListComponentAvailabilityResponse_PickingOption_PickingSku: object = {
  availableQuantity: 0,
  requiredQuantity: 0,
};

export const ListComponentAvailabilityResponse_PickingOption_PickingSku = {
  encode(
    message: ListComponentAvailabilityResponse_PickingOption_PickingSku,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(10).fork()).ldelim();
    }
    if (message.availableQuantity !== 0) {
      writer.uint32(16).int32(message.availableQuantity);
    }
    if (message.requiredQuantity !== 0) {
      writer.uint32(24).int32(message.requiredQuantity);
    }
    for (const v of message.locations) {
      ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListComponentAvailabilityResponse_PickingOption_PickingSku {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListComponentAvailabilityResponse_PickingOption_PickingSku,
    } as ListComponentAvailabilityResponse_PickingOption_PickingSku;
    message.locations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sku = Sku.decode(reader, reader.uint32());
          break;
        case 2:
          message.availableQuantity = reader.int32();
          break;
        case 3:
          message.requiredQuantity = reader.int32();
          break;
        case 4:
          message.locations.push(
            ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): ListComponentAvailabilityResponse_PickingOption_PickingSku {
    const message = {
      ...baseListComponentAvailabilityResponse_PickingOption_PickingSku,
    } as ListComponentAvailabilityResponse_PickingOption_PickingSku;
    message.locations = [];
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
    if (
      object.requiredQuantity !== undefined &&
      object.requiredQuantity !== null
    ) {
      message.requiredQuantity = Number(object.requiredQuantity);
    } else {
      message.requiredQuantity = 0;
    }
    if (object.locations !== undefined && object.locations !== null) {
      for (const e of object.locations) {
        message.locations.push(
          ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation.fromJSON(
            e
          )
        );
      }
    }
    return message;
  },

  toJSON(
    message: ListComponentAvailabilityResponse_PickingOption_PickingSku
  ): unknown {
    const obj: any = {};
    message.sku !== undefined &&
      (obj.sku = message.sku ? Sku.toJSON(message.sku) : undefined);
    message.availableQuantity !== undefined &&
      (obj.availableQuantity = message.availableQuantity);
    message.requiredQuantity !== undefined &&
      (obj.requiredQuantity = message.requiredQuantity);
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e
          ? ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation.toJSON(
              e
            )
          : undefined
      );
    } else {
      obj.locations = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListComponentAvailabilityResponse_PickingOption_PickingSku>
  ): ListComponentAvailabilityResponse_PickingOption_PickingSku {
    const message = {
      ...baseListComponentAvailabilityResponse_PickingOption_PickingSku,
    } as ListComponentAvailabilityResponse_PickingOption_PickingSku;
    message.locations = [];
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
    if (
      object.requiredQuantity !== undefined &&
      object.requiredQuantity !== null
    ) {
      message.requiredQuantity = object.requiredQuantity;
    } else {
      message.requiredQuantity = 0;
    }
    if (object.locations !== undefined && object.locations !== null) {
      for (const e of object.locations) {
        message.locations.push(
          ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation.fromPartial(
            e
          )
        );
      }
    }
    return message;
  },
};

const baseListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation: object =
  { availableQuantity: 0 };

export const ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation =
  {
    encode(
      message: ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation,
      writer: Writer = Writer.create()
    ): Writer {
      if (message.location !== undefined) {
        Location.encode(message.location, writer.uint32(10).fork()).ldelim();
      }
      if (message.availableQuantity !== 0) {
        writer.uint32(16).int32(message.availableQuantity);
      }
      return writer;
    },

    decode(
      input: Reader | Uint8Array,
      length?: number
    ): ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = {
        ...baseListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation,
      } as ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation;
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.location = Location.decode(reader, reader.uint32());
            break;
          case 2:
            message.availableQuantity = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },

    fromJSON(
      object: any
    ): ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation {
      const message = {
        ...baseListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation,
      } as ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation;
      if (object.location !== undefined && object.location !== null) {
        message.location = Location.fromJSON(object.location);
      } else {
        message.location = undefined;
      }
      if (
        object.availableQuantity !== undefined &&
        object.availableQuantity !== null
      ) {
        message.availableQuantity = Number(object.availableQuantity);
      } else {
        message.availableQuantity = 0;
      }
      return message;
    },

    toJSON(
      message: ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation
    ): unknown {
      const obj: any = {};
      message.location !== undefined &&
        (obj.location = message.location
          ? Location.toJSON(message.location)
          : undefined);
      message.availableQuantity !== undefined &&
        (obj.availableQuantity = message.availableQuantity);
      return obj;
    },

    fromPartial(
      object: DeepPartial<ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation>
    ): ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation {
      const message = {
        ...baseListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation,
      } as ListComponentAvailabilityResponse_PickingOption_PickingSku_PickingLocation;
      if (object.location !== undefined && object.location !== null) {
        message.location = Location.fromPartial(object.location);
      } else {
        message.location = undefined;
      }
      if (
        object.availableQuantity !== undefined &&
        object.availableQuantity !== null
      ) {
        message.availableQuantity = object.availableQuantity;
      } else {
        message.availableQuantity = 0;
      }
      return message;
    },
  };

const baseListSkuQuantityRequest: object = { requestId: "" };

export const ListSkuQuantityRequest = {
  encode(
    message: ListSkuQuantityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListSkuQuantityRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSkuQuantityRequest } as ListSkuQuantityRequest;
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

  fromJSON(object: any): ListSkuQuantityRequest {
    const message = { ...baseListSkuQuantityRequest } as ListSkuQuantityRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    return message;
  },

  toJSON(message: ListSkuQuantityRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListSkuQuantityRequest>
  ): ListSkuQuantityRequest {
    const message = { ...baseListSkuQuantityRequest } as ListSkuQuantityRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    return message;
  },
};

const baseListSkuQuantityResponse: object = {
  requestId: "",
  availableQuantity: 0,
  demandQuantity: 0,
  excessQuantity: 0,
};

export const ListSkuQuantityResponse = {
  encode(
    message: ListSkuQuantityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(18).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): ListSkuQuantityResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSkuQuantityResponse,
    } as ListSkuQuantityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
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

  fromJSON(object: any): ListSkuQuantityResponse {
    const message = {
      ...baseListSkuQuantityResponse,
    } as ListSkuQuantityResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
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

  toJSON(message: ListSkuQuantityResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
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

  fromPartial(
    object: DeepPartial<ListSkuQuantityResponse>
  ): ListSkuQuantityResponse {
    const message = {
      ...baseListSkuQuantityResponse,
    } as ListSkuQuantityResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
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

const baseListSkuAvailabilityRequest: object = { requestId: "" };

export const ListSkuAvailabilityRequest = {
  encode(
    message: ListSkuAvailabilityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListSkuAvailabilityRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSkuAvailabilityRequest,
    } as ListSkuAvailabilityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.sku = Sku.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSkuAvailabilityRequest {
    const message = {
      ...baseListSkuAvailabilityRequest,
    } as ListSkuAvailabilityRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromJSON(object.sku);
    } else {
      message.sku = undefined;
    }
    return message;
  },

  toJSON(message: ListSkuAvailabilityRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.sku !== undefined &&
      (obj.sku = message.sku ? Sku.toJSON(message.sku) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListSkuAvailabilityRequest>
  ): ListSkuAvailabilityRequest {
    const message = {
      ...baseListSkuAvailabilityRequest,
    } as ListSkuAvailabilityRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromPartial(object.sku);
    } else {
      message.sku = undefined;
    }
    return message;
  },
};

const baseListSkuAvailabilityResponse: object = { requestId: "" };

export const ListSkuAvailabilityResponse = {
  encode(
    message: ListSkuAvailabilityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(18).fork()).ldelim();
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ListSkuAvailabilityResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSkuAvailabilityResponse,
    } as ListSkuAvailabilityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.sku = Sku.decode(reader, reader.uint32());
          break;
        case 3:
          message.location = Location.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSkuAvailabilityResponse {
    const message = {
      ...baseListSkuAvailabilityResponse,
    } as ListSkuAvailabilityResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromJSON(object.sku);
    } else {
      message.sku = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: ListSkuAvailabilityResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.sku !== undefined &&
      (obj.sku = message.sku ? Sku.toJSON(message.sku) : undefined);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListSkuAvailabilityResponse>
  ): ListSkuAvailabilityResponse {
    const message = {
      ...baseListSkuAvailabilityResponse,
    } as ListSkuAvailabilityResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromPartial(object.sku);
    } else {
      message.sku = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },
};

const baseGetSkuDetailsRequest: object = { requestId: "" };

export const GetSkuDetailsRequest = {
  encode(
    message: GetSkuDetailsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetSkuDetailsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSkuDetailsRequest } as GetSkuDetailsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.sku = Sku.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSkuDetailsRequest {
    const message = { ...baseGetSkuDetailsRequest } as GetSkuDetailsRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromJSON(object.sku);
    } else {
      message.sku = undefined;
    }
    return message;
  },

  toJSON(message: GetSkuDetailsRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.sku !== undefined &&
      (obj.sku = message.sku ? Sku.toJSON(message.sku) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetSkuDetailsRequest>): GetSkuDetailsRequest {
    const message = { ...baseGetSkuDetailsRequest } as GetSkuDetailsRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.sku !== undefined && object.sku !== null) {
      message.sku = Sku.fromPartial(object.sku);
    } else {
      message.sku = undefined;
    }
    return message;
  },
};

const baseGetSkuDetailsResponse: object = {
  requestId: "",
  availableQuantity: 0,
  demandQuantity: 0,
  excessQuantity: 0,
};

export const GetSkuDetailsResponse = {
  encode(
    message: GetSkuDetailsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.sku !== undefined) {
      Sku.encode(message.sku, writer.uint32(18).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): GetSkuDetailsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSkuDetailsResponse } as GetSkuDetailsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
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

  fromJSON(object: any): GetSkuDetailsResponse {
    const message = { ...baseGetSkuDetailsResponse } as GetSkuDetailsResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
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

  toJSON(message: GetSkuDetailsResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
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

  fromPartial(
    object: DeepPartial<GetSkuDetailsResponse>
  ): GetSkuDetailsResponse {
    const message = { ...baseGetSkuDetailsResponse } as GetSkuDetailsResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
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

const baseListLocationsRequest: object = { requestId: "" };

export const ListLocationsRequest = {
  encode(
    message: ListLocationsRequest,
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

  decode(input: Reader | Uint8Array, length?: number): ListLocationsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListLocationsRequest } as ListLocationsRequest;
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

  fromJSON(object: any): ListLocationsRequest {
    const message = { ...baseListLocationsRequest } as ListLocationsRequest;
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

  toJSON(message: ListLocationsRequest): unknown {
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

  fromPartial(object: DeepPartial<ListLocationsRequest>): ListLocationsRequest {
    const message = { ...baseListLocationsRequest } as ListLocationsRequest;
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

const baseListLocationsResponse: object = { requestId: "" };

export const ListLocationsResponse = {
  encode(
    message: ListLocationsResponse,
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

  decode(input: Reader | Uint8Array, length?: number): ListLocationsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListLocationsResponse } as ListLocationsResponse;
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

  fromJSON(object: any): ListLocationsResponse {
    const message = { ...baseListLocationsResponse } as ListLocationsResponse;
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

  toJSON(message: ListLocationsResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListLocationsResponse>
  ): ListLocationsResponse {
    const message = { ...baseListLocationsResponse } as ListLocationsResponse;
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
