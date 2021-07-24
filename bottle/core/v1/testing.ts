/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.core.v1";

export interface TestEvent {
  id: string;
  text: string;
}

const baseTestEvent: object = { id: "", text: "" };

export const TestEvent = {
  encode(message: TestEvent, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TestEvent {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestEvent } as TestEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestEvent {
    const message = { ...baseTestEvent } as TestEvent;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    return message;
  },

  toJSON(message: TestEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<TestEvent>): TestEvent {
    const message = { ...baseTestEvent } as TestEvent;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
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
