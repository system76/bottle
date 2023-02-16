/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { TypedAttachment } from "./typed_attachment";

export const protobufPackage = "bottle.templates.v1";

export interface TemplatedEmail {
  templateName: string;
  formVariables: string;
  emailFrom: string;
  emailTo: string;
  subject: string;
  attachments: TypedAttachment[];
}

const baseTemplatedEmail: object = {
  templateName: "",
  formVariables: "",
  emailFrom: "",
  emailTo: "",
  subject: "",
};

export const TemplatedEmail = {
  encode(message: TemplatedEmail, writer: Writer = Writer.create()): Writer {
    if (message.templateName !== "") {
      writer.uint32(10).string(message.templateName);
    }
    if (message.formVariables !== "") {
      writer.uint32(18).string(message.formVariables);
    }
    if (message.emailFrom !== "") {
      writer.uint32(26).string(message.emailFrom);
    }
    if (message.emailTo !== "") {
      writer.uint32(34).string(message.emailTo);
    }
    if (message.subject !== "") {
      writer.uint32(42).string(message.subject);
    }
    for (const v of message.attachments) {
      TypedAttachment.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TemplatedEmail {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTemplatedEmail } as TemplatedEmail;
    message.attachments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templateName = reader.string();
          break;
        case 2:
          message.formVariables = reader.string();
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
        case 6:
          message.attachments.push(
            TypedAttachment.decode(reader, reader.uint32())
          );
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
    message.attachments = [];
    if (object.templateName !== undefined && object.templateName !== null) {
      message.templateName = String(object.templateName);
    } else {
      message.templateName = "";
    }
    if (object.formVariables !== undefined && object.formVariables !== null) {
      message.formVariables = String(object.formVariables);
    } else {
      message.formVariables = "";
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
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(TypedAttachment.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: TemplatedEmail): unknown {
    const obj: any = {};
    message.templateName !== undefined &&
      (obj.templateName = message.templateName);
    message.formVariables !== undefined &&
      (obj.formVariables = message.formVariables);
    message.emailFrom !== undefined && (obj.emailFrom = message.emailFrom);
    message.emailTo !== undefined && (obj.emailTo = message.emailTo);
    message.subject !== undefined && (obj.subject = message.subject);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? TypedAttachment.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TemplatedEmail>): TemplatedEmail {
    const message = { ...baseTemplatedEmail } as TemplatedEmail;
    message.attachments = [];
    if (object.templateName !== undefined && object.templateName !== null) {
      message.templateName = object.templateName;
    } else {
      message.templateName = "";
    }
    if (object.formVariables !== undefined && object.formVariables !== null) {
      message.formVariables = object.formVariables;
    } else {
      message.formVariables = "";
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
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(TypedAttachment.fromPartial(e));
      }
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
