/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.fulfillment.v1";

export interface Event {
  event: Event_Event;
  occuredAt: string;
}

export enum Event_Event {
  EVENT_UNSPECIFIED = 0,
  EVENT_FULLY_SHIPPED = 1,
  UNRECOGNIZED = -1,
}

export function event_EventFromJSON(object: any): Event_Event {
  switch (object) {
    case 0:
    case "EVENT_UNSPECIFIED":
      return Event_Event.EVENT_UNSPECIFIED;
    case 1:
    case "EVENT_FULLY_SHIPPED":
      return Event_Event.EVENT_FULLY_SHIPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Event_Event.UNRECOGNIZED;
  }
}

export function event_EventToJSON(object: Event_Event): string {
  switch (object) {
    case Event_Event.EVENT_UNSPECIFIED:
      return "EVENT_UNSPECIFIED";
    case Event_Event.EVENT_FULLY_SHIPPED:
      return "EVENT_FULLY_SHIPPED";
    default:
      return "UNKNOWN";
  }
}

const baseEvent: object = { event: 0, occuredAt: "" };

export const Event = {
  encode(message: Event, writer: Writer = Writer.create()): Writer {
    if (message.event !== 0) {
      writer.uint32(8).int32(message.event);
    }
    if (message.occuredAt !== "") {
      writer.uint32(18).string(message.occuredAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvent } as Event;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.int32() as any;
          break;
        case 2:
          message.occuredAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    const message = { ...baseEvent } as Event;
    if (object.event !== undefined && object.event !== null) {
      message.event = event_EventFromJSON(object.event);
    } else {
      message.event = 0;
    }
    if (object.occuredAt !== undefined && object.occuredAt !== null) {
      message.occuredAt = String(object.occuredAt);
    } else {
      message.occuredAt = "";
    }
    return message;
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.event !== undefined &&
      (obj.event = event_EventToJSON(message.event));
    message.occuredAt !== undefined && (obj.occuredAt = message.occuredAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = { ...baseEvent } as Event;
    if (object.event !== undefined && object.event !== null) {
      message.event = object.event;
    } else {
      message.event = 0;
    }
    if (object.occuredAt !== undefined && object.occuredAt !== null) {
      message.occuredAt = object.occuredAt;
    } else {
      message.occuredAt = "";
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
