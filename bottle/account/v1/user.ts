/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "bottle.account.v1";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  newsletter: boolean;
  accountType: User_AccountType;
  companyName: string;
}

export enum User_AccountType {
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  ACCOUNT_TYPE_INDIVIDUAL = 1,
  ACCOUNT_TYPE_BUSINESS = 2,
  ACCOUNT_TYPE_RESELLER = 3,
  UNRECOGNIZED = -1,
}

export function user_AccountTypeFromJSON(object: any): User_AccountType {
  switch (object) {
    case 0:
    case "ACCOUNT_TYPE_UNSPECIFIED":
      return User_AccountType.ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case "ACCOUNT_TYPE_INDIVIDUAL":
      return User_AccountType.ACCOUNT_TYPE_INDIVIDUAL;
    case 2:
    case "ACCOUNT_TYPE_BUSINESS":
      return User_AccountType.ACCOUNT_TYPE_BUSINESS;
    case 3:
    case "ACCOUNT_TYPE_RESELLER":
      return User_AccountType.ACCOUNT_TYPE_RESELLER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return User_AccountType.UNRECOGNIZED;
  }
}

export function user_AccountTypeToJSON(object: User_AccountType): string {
  switch (object) {
    case User_AccountType.ACCOUNT_TYPE_UNSPECIFIED:
      return "ACCOUNT_TYPE_UNSPECIFIED";
    case User_AccountType.ACCOUNT_TYPE_INDIVIDUAL:
      return "ACCOUNT_TYPE_INDIVIDUAL";
    case User_AccountType.ACCOUNT_TYPE_BUSINESS:
      return "ACCOUNT_TYPE_BUSINESS";
    case User_AccountType.ACCOUNT_TYPE_RESELLER:
      return "ACCOUNT_TYPE_RESELLER";
    default:
      return "UNKNOWN";
  }
}

const baseUser: object = {
  id: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  newsletter: false,
  accountType: 0,
  companyName: "",
};

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.phoneNumber !== "") {
      writer.uint32(34).string(message.phoneNumber);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.newsletter === true) {
      writer.uint32(48).bool(message.newsletter);
    }
    if (message.accountType !== 0) {
      writer.uint32(56).int32(message.accountType);
    }
    if (message.companyName !== "") {
      writer.uint32(66).string(message.companyName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): User {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.phoneNumber = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.newsletter = reader.bool();
          break;
        case 7:
          message.accountType = reader.int32() as any;
          break;
        case 8:
          message.companyName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.phoneNumber !== undefined && object.phoneNumber !== null) {
      message.phoneNumber = String(object.phoneNumber);
    } else {
      message.phoneNumber = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.newsletter !== undefined && object.newsletter !== null) {
      message.newsletter = Boolean(object.newsletter);
    } else {
      message.newsletter = false;
    }
    if (object.accountType !== undefined && object.accountType !== null) {
      message.accountType = user_AccountTypeFromJSON(object.accountType);
    } else {
      message.accountType = 0;
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = String(object.companyName);
    } else {
      message.companyName = "";
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber);
    message.email !== undefined && (obj.email = message.email);
    message.newsletter !== undefined && (obj.newsletter = message.newsletter);
    message.accountType !== undefined &&
      (obj.accountType = user_AccountTypeToJSON(message.accountType));
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.phoneNumber !== undefined && object.phoneNumber !== null) {
      message.phoneNumber = object.phoneNumber;
    } else {
      message.phoneNumber = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.newsletter !== undefined && object.newsletter !== null) {
      message.newsletter = object.newsletter;
    } else {
      message.newsletter = false;
    }
    if (object.accountType !== undefined && object.accountType !== null) {
      message.accountType = object.accountType;
    } else {
      message.accountType = 0;
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = object.companyName;
    } else {
      message.companyName = "";
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
