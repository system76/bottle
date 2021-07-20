/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { User } from "../../../bottle/account/v1/user";

export const protobufPackage = "bottle.support.v1";

export interface Question {
  id: string;
  subject: string;
  message: string;
  tags: string[];
  customFields: { [key: string]: string };
  customer: User | undefined;
  submitter: User | undefined;
}

export interface Question_CustomFieldsEntry {
  key: string;
  value: string;
}

const baseQuestion: object = { id: "", subject: "", message: "", tags: "" };

export const Question = {
  encode(message: Question, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.customFields).forEach(([key, value]) => {
      Question_CustomFieldsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.customer !== undefined) {
      User.encode(message.customer, writer.uint32(50).fork()).ldelim();
    }
    if (message.submitter !== undefined) {
      User.encode(message.submitter, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Question {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuestion } as Question;
    message.tags = [];
    message.customFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          const entry5 = Question_CustomFieldsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.customFields[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.customer = User.decode(reader, reader.uint32());
          break;
        case 7:
          message.submitter = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Question {
    const message = { ...baseQuestion } as Question;
    message.tags = [];
    message.customFields = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    if (object.customFields !== undefined && object.customFields !== null) {
      Object.entries(object.customFields).forEach(([key, value]) => {
        message.customFields[key] = String(value);
      });
    }
    if (object.customer !== undefined && object.customer !== null) {
      message.customer = User.fromJSON(object.customer);
    } else {
      message.customer = undefined;
    }
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = User.fromJSON(object.submitter);
    } else {
      message.submitter = undefined;
    }
    return message;
  },

  toJSON(message: Question): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.subject !== undefined && (obj.subject = message.subject);
    message.message !== undefined && (obj.message = message.message);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    obj.customFields = {};
    if (message.customFields) {
      Object.entries(message.customFields).forEach(([k, v]) => {
        obj.customFields[k] = v;
      });
    }
    message.customer !== undefined &&
      (obj.customer = message.customer
        ? User.toJSON(message.customer)
        : undefined);
    message.submitter !== undefined &&
      (obj.submitter = message.submitter
        ? User.toJSON(message.submitter)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Question>): Question {
    const message = { ...baseQuestion } as Question;
    message.tags = [];
    message.customFields = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.customFields !== undefined && object.customFields !== null) {
      Object.entries(object.customFields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.customFields[key] = String(value);
        }
      });
    }
    if (object.customer !== undefined && object.customer !== null) {
      message.customer = User.fromPartial(object.customer);
    } else {
      message.customer = undefined;
    }
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = User.fromPartial(object.submitter);
    } else {
      message.submitter = undefined;
    }
    return message;
  },
};

const baseQuestion_CustomFieldsEntry: object = { key: "", value: "" };

export const Question_CustomFieldsEntry = {
  encode(
    message: Question_CustomFieldsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): Question_CustomFieldsEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuestion_CustomFieldsEntry,
    } as Question_CustomFieldsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Question_CustomFieldsEntry {
    const message = {
      ...baseQuestion_CustomFieldsEntry,
    } as Question_CustomFieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Question_CustomFieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Question_CustomFieldsEntry>
  ): Question_CustomFieldsEntry {
    const message = {
      ...baseQuestion_CustomFieldsEntry,
    } as Question_CustomFieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
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
