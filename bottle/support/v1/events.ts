/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Question } from "./question";

export const protobufPackage = "bottle.support.v1";

export interface QuestionCreated {
  question: Question | undefined;
}

export interface MacroApplied {
  question: Question | undefined;
  macros: string[];
}

const baseQuestionCreated: object = {};

export const QuestionCreated = {
  encode(message: QuestionCreated, writer: Writer = Writer.create()): Writer {
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuestionCreated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuestionCreated } as QuestionCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = Question.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionCreated {
    const message = { ...baseQuestionCreated } as QuestionCreated;
    if (object.question !== undefined && object.question !== null) {
      message.question = Question.fromJSON(object.question);
    } else {
      message.question = undefined;
    }
    return message;
  },

  toJSON(message: QuestionCreated): unknown {
    const obj: any = {};
    message.question !== undefined &&
      (obj.question = message.question
        ? Question.toJSON(message.question)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuestionCreated>): QuestionCreated {
    const message = { ...baseQuestionCreated } as QuestionCreated;
    if (object.question !== undefined && object.question !== null) {
      message.question = Question.fromPartial(object.question);
    } else {
      message.question = undefined;
    }
    return message;
  },
};

const baseMacroApplied: object = { macros: "" };

export const MacroApplied = {
  encode(message: MacroApplied, writer: Writer = Writer.create()): Writer {
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.macros) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MacroApplied {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMacroApplied } as MacroApplied;
    message.macros = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = Question.decode(reader, reader.uint32());
          break;
        case 2:
          message.macros.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MacroApplied {
    const message = { ...baseMacroApplied } as MacroApplied;
    message.macros = [];
    if (object.question !== undefined && object.question !== null) {
      message.question = Question.fromJSON(object.question);
    } else {
      message.question = undefined;
    }
    if (object.macros !== undefined && object.macros !== null) {
      for (const e of object.macros) {
        message.macros.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MacroApplied): unknown {
    const obj: any = {};
    message.question !== undefined &&
      (obj.question = message.question
        ? Question.toJSON(message.question)
        : undefined);
    if (message.macros) {
      obj.macros = message.macros.map((e) => e);
    } else {
      obj.macros = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MacroApplied>): MacroApplied {
    const message = { ...baseMacroApplied } as MacroApplied;
    message.macros = [];
    if (object.question !== undefined && object.question !== null) {
      message.question = Question.fromPartial(object.question);
    } else {
      message.question = undefined;
    }
    if (object.macros !== undefined && object.macros !== null) {
      for (const e of object.macros) {
        message.macros.push(e);
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
