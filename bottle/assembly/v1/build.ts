/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Order } from "../../fulfillment/v1/order";
import { Component } from "../../inventory/v1/component";

export const protobufPackage = "bottle.assembly.v1";

export interface Build {
  id: string;
  status: Build_BuildStatus;
  buildComponents: Build_BuildComponent[];
  missingComponents: Build_BuildComponent[];
  model: string;
  order: Order | undefined;
  createdAt: string;
  updatedAt: string;
}

export enum Build_BuildStatus {
  BUILD_STATUS_UNSPECIFIED = 0,
  BUILD_STATUS_INCOMPLETE = 1,
  BUILD_STATUS_READY = 2,
  BUILD_STATUS_BUILT = 3,
  BUILD_STATUS_INPROGRESS = 4,
  UNRECOGNIZED = -1,
}

export function build_BuildStatusFromJSON(object: any): Build_BuildStatus {
  switch (object) {
    case 0:
    case "BUILD_STATUS_UNSPECIFIED":
      return Build_BuildStatus.BUILD_STATUS_UNSPECIFIED;
    case 1:
    case "BUILD_STATUS_INCOMPLETE":
      return Build_BuildStatus.BUILD_STATUS_INCOMPLETE;
    case 2:
    case "BUILD_STATUS_READY":
      return Build_BuildStatus.BUILD_STATUS_READY;
    case 3:
    case "BUILD_STATUS_BUILT":
      return Build_BuildStatus.BUILD_STATUS_BUILT;
    case 4:
    case "BUILD_STATUS_INPROGRESS":
      return Build_BuildStatus.BUILD_STATUS_INPROGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Build_BuildStatus.UNRECOGNIZED;
  }
}

export function build_BuildStatusToJSON(object: Build_BuildStatus): string {
  switch (object) {
    case Build_BuildStatus.BUILD_STATUS_UNSPECIFIED:
      return "BUILD_STATUS_UNSPECIFIED";
    case Build_BuildStatus.BUILD_STATUS_INCOMPLETE:
      return "BUILD_STATUS_INCOMPLETE";
    case Build_BuildStatus.BUILD_STATUS_READY:
      return "BUILD_STATUS_READY";
    case Build_BuildStatus.BUILD_STATUS_BUILT:
      return "BUILD_STATUS_BUILT";
    case Build_BuildStatus.BUILD_STATUS_INPROGRESS:
      return "BUILD_STATUS_INPROGRESS";
    default:
      return "UNKNOWN";
  }
}

export interface Build_BuildComponent {
  component: Component | undefined;
  quantity: number;
}

const baseBuild: object = {
  id: "",
  status: 0,
  model: "",
  createdAt: "",
  updatedAt: "",
};

export const Build = {
  encode(message: Build, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    for (const v of message.buildComponents) {
      Build_BuildComponent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.missingComponents) {
      Build_BuildComponent.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.model !== "") {
      writer.uint32(34).string(message.model);
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Build {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuild } as Build;
    message.buildComponents = [];
    message.missingComponents = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.buildComponents.push(
            Build_BuildComponent.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.missingComponents.push(
            Build_BuildComponent.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.model = reader.string();
          break;
        case 5:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = reader.string();
          break;
        case 7:
          message.updatedAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Build {
    const message = { ...baseBuild } as Build;
    message.buildComponents = [];
    message.missingComponents = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = build_BuildStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.buildComponents !== undefined &&
      object.buildComponents !== null
    ) {
      for (const e of object.buildComponents) {
        message.buildComponents.push(Build_BuildComponent.fromJSON(e));
      }
    }
    if (
      object.missingComponents !== undefined &&
      object.missingComponents !== null
    ) {
      for (const e of object.missingComponents) {
        message.missingComponents.push(Build_BuildComponent.fromJSON(e));
      }
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = String(object.model);
    } else {
      message.model = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = String(object.updatedAt);
    } else {
      message.updatedAt = "";
    }
    return message;
  },

  toJSON(message: Build): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined &&
      (obj.status = build_BuildStatusToJSON(message.status));
    if (message.buildComponents) {
      obj.buildComponents = message.buildComponents.map((e) =>
        e ? Build_BuildComponent.toJSON(e) : undefined
      );
    } else {
      obj.buildComponents = [];
    }
    if (message.missingComponents) {
      obj.missingComponents = message.missingComponents.map((e) =>
        e ? Build_BuildComponent.toJSON(e) : undefined
      );
    } else {
      obj.missingComponents = [];
    }
    message.model !== undefined && (obj.model = message.model);
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Build>): Build {
    const message = { ...baseBuild } as Build;
    message.buildComponents = [];
    message.missingComponents = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.buildComponents !== undefined &&
      object.buildComponents !== null
    ) {
      for (const e of object.buildComponents) {
        message.buildComponents.push(Build_BuildComponent.fromPartial(e));
      }
    }
    if (
      object.missingComponents !== undefined &&
      object.missingComponents !== null
    ) {
      for (const e of object.missingComponents) {
        message.missingComponents.push(Build_BuildComponent.fromPartial(e));
      }
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = object.model;
    } else {
      message.model = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = "";
    }
    return message;
  },
};

const baseBuild_BuildComponent: object = { quantity: 0 };

export const Build_BuildComponent = {
  encode(
    message: Build_BuildComponent,
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

  decode(input: Reader | Uint8Array, length?: number): Build_BuildComponent {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuild_BuildComponent } as Build_BuildComponent;
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

  fromJSON(object: any): Build_BuildComponent {
    const message = { ...baseBuild_BuildComponent } as Build_BuildComponent;
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

  toJSON(message: Build_BuildComponent): unknown {
    const obj: any = {};
    message.component !== undefined &&
      (obj.component = message.component
        ? Component.toJSON(message.component)
        : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  fromPartial(object: DeepPartial<Build_BuildComponent>): Build_BuildComponent {
    const message = { ...baseBuild_BuildComponent } as Build_BuildComponent;
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
