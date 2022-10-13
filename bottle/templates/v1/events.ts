/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.templates.v1";

export interface TemplatedEmail {
  templateName: string;
  formVariables: { [key: string]: string };
  emailFrom: string;
  emailTo: string;
  subject: string;
}

export interface TemplatedEmail_FormVariablesEntry {
  key: string;
  value: string;
}

const baseTemplatedEmail: object = {
  templateName: "",
  emailFrom: "",
  emailTo: "",
  subject: "",
};

export const TemplatedEmail = {
  encode(message: TemplatedEmail, writer: Writer = Writer.create()): Writer {
    if (message.templateName !== "") {
      writer.uint32(10).string(message.templateName);
    }
    Object.entries(message.formVariables).forEach(([key, value]) => {
      TemplatedEmail_FormVariablesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.emailFrom !== "") {
      writer.uint32(26).string(message.emailFrom);
    }
    if (message.emailTo !== "") {
      writer.uint32(34).string(message.emailTo);
    }
    if (message.subject !== "") {
      writer.uint32(42).string(message.subject);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TemplatedEmail {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTemplatedEmail } as TemplatedEmail;
    message.formVariables = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templateName = reader.string();
          break;
        case 2:
          const entry2 = TemplatedEmail_FormVariablesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.formVariables[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.emailFrom = reader.string();
          break;
        case 4:
          message.emailTo = reader.string();
          break;
        case 5:
          message.subject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TemplatedEmail {
    const message = { ...baseTemplatedEmail } as TemplatedEmail;
    message.formVariables = {};
    if (object.templateName !== undefined && object.templateName !== null) {
      message.templateName = String(object.templateName);
    } else {
      message.templateName = "";
    }
    if (object.formVariables !== undefined && object.formVariables !== null) {
      Object.entries(object.formVariables).forEach(([key, value]) => {
        message.formVariables[key] = String(value);
      });
    }
    if (object.emailFrom !== undefined && object.emailFrom !== null) {
      message.emailFrom = String(object.emailFrom);
    } else {
      message.emailFrom = "";
    }
    if (object.emailTo !== undefined && object.emailTo !== null) {
      message.emailTo = String(object.emailTo);
    } else {
      message.emailTo = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    return message;
  },

  toJSON(message: TemplatedEmail): unknown {
    const obj: any = {};
    message.templateName !== undefined &&
      (obj.templateName = message.templateName);
    obj.formVariables = {};
    if (message.formVariables) {
      Object.entries(message.formVariables).forEach(([k, v]) => {
        obj.formVariables[k] = v;
      });
    }
    message.emailFrom !== undefined && (obj.emailFrom = message.emailFrom);
    message.emailTo !== undefined && (obj.emailTo = message.emailTo);
    message.subject !== undefined && (obj.subject = message.subject);
    return obj;
  },

  fromPartial(object: DeepPartial<TemplatedEmail>): TemplatedEmail {
    const message = { ...baseTemplatedEmail } as TemplatedEmail;
    message.formVariables = {};
    if (object.templateName !== undefined && object.templateName !== null) {
      message.templateName = object.templateName;
    } else {
      message.templateName = "";
    }
    if (object.formVariables !== undefined && object.formVariables !== null) {
      Object.entries(object.formVariables).forEach(([key, value]) => {
        if (value !== undefined) {
          message.formVariables[key] = String(value);
        }
      });
    }
    if (object.emailFrom !== undefined && object.emailFrom !== null) {
      message.emailFrom = object.emailFrom;
    } else {
      message.emailFrom = "";
    }
    if (object.emailTo !== undefined && object.emailTo !== null) {
      message.emailTo = object.emailTo;
    } else {
      message.emailTo = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    return message;
  },
};

const baseTemplatedEmail_FormVariablesEntry: object = { key: "", value: "" };

export const TemplatedEmail_FormVariablesEntry = {
  encode(
    message: TemplatedEmail_FormVariablesEntry,
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
  ): TemplatedEmail_FormVariablesEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTemplatedEmail_FormVariablesEntry,
    } as TemplatedEmail_FormVariablesEntry;
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

  fromJSON(object: any): TemplatedEmail_FormVariablesEntry {
    const message = {
      ...baseTemplatedEmail_FormVariablesEntry,
    } as TemplatedEmail_FormVariablesEntry;
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

  toJSON(message: TemplatedEmail_FormVariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TemplatedEmail_FormVariablesEntry>
  ): TemplatedEmail_FormVariablesEntry {
    const message = {
      ...baseTemplatedEmail_FormVariablesEntry,
    } as TemplatedEmail_FormVariablesEntry;
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
