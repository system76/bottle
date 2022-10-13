/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { User } from "./user";
import { Organization } from "./organization";

export const protobufPackage = "bottle.account.v1";

export interface UserCreated {
  user: User | undefined;
}

export interface UserDeleted {
  user: User | undefined;
}

export interface UserUpdated {
  user: User | undefined;
}

export interface PasswordChanged {
  user: User | undefined;
}

export interface PasswordReset {
  user: User | undefined;
  resetUrl: string;
}

export interface TwoFactorRequested {
  user: User | undefined;
  token: string;
  method: TwoFactorRequested_TwoFactorMethod;
}

export enum TwoFactorRequested_TwoFactorMethod {
  TWO_FACTOR_METHOD_UNSPECIFIED = 0,
  TWO_FACTOR_METHOD_SMS = 1,
  TWO_FACTOR_METHOD_VOICE = 2,
  UNRECOGNIZED = -1,
}

export function twoFactorRequested_TwoFactorMethodFromJSON(
  object: any
): TwoFactorRequested_TwoFactorMethod {
  switch (object) {
    case 0:
    case "TWO_FACTOR_METHOD_UNSPECIFIED":
      return TwoFactorRequested_TwoFactorMethod.TWO_FACTOR_METHOD_UNSPECIFIED;
    case 1:
    case "TWO_FACTOR_METHOD_SMS":
      return TwoFactorRequested_TwoFactorMethod.TWO_FACTOR_METHOD_SMS;
    case 2:
    case "TWO_FACTOR_METHOD_VOICE":
      return TwoFactorRequested_TwoFactorMethod.TWO_FACTOR_METHOD_VOICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TwoFactorRequested_TwoFactorMethod.UNRECOGNIZED;
  }
}

export function twoFactorRequested_TwoFactorMethodToJSON(
  object: TwoFactorRequested_TwoFactorMethod
): string {
  switch (object) {
    case TwoFactorRequested_TwoFactorMethod.TWO_FACTOR_METHOD_UNSPECIFIED:
      return "TWO_FACTOR_METHOD_UNSPECIFIED";
    case TwoFactorRequested_TwoFactorMethod.TWO_FACTOR_METHOD_SMS:
      return "TWO_FACTOR_METHOD_SMS";
    case TwoFactorRequested_TwoFactorMethod.TWO_FACTOR_METHOD_VOICE:
      return "TWO_FACTOR_METHOD_VOICE";
    default:
      return "UNKNOWN";
  }
}

export interface TwoFactorRecoveryCodeUsed {
  user: User | undefined;
  recoveryCode: string;
  codesRemaining: number;
}

export interface OrganizationCreated {
  organization: Organization | undefined;
}

export interface OrganizationJoined {
  organization: Organization | undefined;
  user: User | undefined;
}

export interface OrganizationLeft {
  organization: Organization | undefined;
  user: User | undefined;
}

const baseUserCreated: object = {};

export const UserCreated = {
  encode(message: UserCreated, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserCreated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserCreated } as UserCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCreated {
    const message = { ...baseUserCreated } as UserCreated;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: UserCreated): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCreated>): UserCreated {
    const message = { ...baseUserCreated } as UserCreated;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseUserDeleted: object = {};

export const UserDeleted = {
  encode(message: UserDeleted, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserDeleted {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserDeleted } as UserDeleted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserDeleted {
    const message = { ...baseUserDeleted } as UserDeleted;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: UserDeleted): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserDeleted>): UserDeleted {
    const message = { ...baseUserDeleted } as UserDeleted;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseUserUpdated: object = {};

export const UserUpdated = {
  encode(message: UserUpdated, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserUpdated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserUpdated } as UserUpdated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserUpdated {
    const message = { ...baseUserUpdated } as UserUpdated;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: UserUpdated): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserUpdated>): UserUpdated {
    const message = { ...baseUserUpdated } as UserUpdated;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const basePasswordChanged: object = {};

export const PasswordChanged = {
  encode(message: PasswordChanged, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PasswordChanged {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordChanged } as PasswordChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PasswordChanged {
    const message = { ...basePasswordChanged } as PasswordChanged;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: PasswordChanged): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PasswordChanged>): PasswordChanged {
    const message = { ...basePasswordChanged } as PasswordChanged;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const basePasswordReset: object = { resetUrl: "" };

export const PasswordReset = {
  encode(message: PasswordReset, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.resetUrl !== "") {
      writer.uint32(18).string(message.resetUrl);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PasswordReset {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordReset } as PasswordReset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.resetUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PasswordReset {
    const message = { ...basePasswordReset } as PasswordReset;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.resetUrl !== undefined && object.resetUrl !== null) {
      message.resetUrl = String(object.resetUrl);
    } else {
      message.resetUrl = "";
    }
    return message;
  },

  toJSON(message: PasswordReset): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.resetUrl !== undefined && (obj.resetUrl = message.resetUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<PasswordReset>): PasswordReset {
    const message = { ...basePasswordReset } as PasswordReset;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.resetUrl !== undefined && object.resetUrl !== null) {
      message.resetUrl = object.resetUrl;
    } else {
      message.resetUrl = "";
    }
    return message;
  },
};

const baseTwoFactorRequested: object = { token: "", method: 0 };

export const TwoFactorRequested = {
  encode(
    message: TwoFactorRequested,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.method !== 0) {
      writer.uint32(24).int32(message.method);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TwoFactorRequested {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTwoFactorRequested } as TwoFactorRequested;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.method = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TwoFactorRequested {
    const message = { ...baseTwoFactorRequested } as TwoFactorRequested;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = twoFactorRequested_TwoFactorMethodFromJSON(
        object.method
      );
    } else {
      message.method = 0;
    }
    return message;
  },

  toJSON(message: TwoFactorRequested): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.token !== undefined && (obj.token = message.token);
    message.method !== undefined &&
      (obj.method = twoFactorRequested_TwoFactorMethodToJSON(message.method));
    return obj;
  },

  fromPartial(object: DeepPartial<TwoFactorRequested>): TwoFactorRequested {
    const message = { ...baseTwoFactorRequested } as TwoFactorRequested;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = 0;
    }
    return message;
  },
};

const baseTwoFactorRecoveryCodeUsed: object = {
  recoveryCode: "",
  codesRemaining: 0,
};

export const TwoFactorRecoveryCodeUsed = {
  encode(
    message: TwoFactorRecoveryCodeUsed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.recoveryCode !== "") {
      writer.uint32(18).string(message.recoveryCode);
    }
    if (message.codesRemaining !== 0) {
      writer.uint32(24).int32(message.codesRemaining);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): TwoFactorRecoveryCodeUsed {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTwoFactorRecoveryCodeUsed,
    } as TwoFactorRecoveryCodeUsed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.recoveryCode = reader.string();
          break;
        case 3:
          message.codesRemaining = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TwoFactorRecoveryCodeUsed {
    const message = {
      ...baseTwoFactorRecoveryCodeUsed,
    } as TwoFactorRecoveryCodeUsed;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.recoveryCode !== undefined && object.recoveryCode !== null) {
      message.recoveryCode = String(object.recoveryCode);
    } else {
      message.recoveryCode = "";
    }
    if (object.codesRemaining !== undefined && object.codesRemaining !== null) {
      message.codesRemaining = Number(object.codesRemaining);
    } else {
      message.codesRemaining = 0;
    }
    return message;
  },

  toJSON(message: TwoFactorRecoveryCodeUsed): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.recoveryCode !== undefined &&
      (obj.recoveryCode = message.recoveryCode);
    message.codesRemaining !== undefined &&
      (obj.codesRemaining = message.codesRemaining);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TwoFactorRecoveryCodeUsed>
  ): TwoFactorRecoveryCodeUsed {
    const message = {
      ...baseTwoFactorRecoveryCodeUsed,
    } as TwoFactorRecoveryCodeUsed;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.recoveryCode !== undefined && object.recoveryCode !== null) {
      message.recoveryCode = object.recoveryCode;
    } else {
      message.recoveryCode = "";
    }
    if (object.codesRemaining !== undefined && object.codesRemaining !== null) {
      message.codesRemaining = object.codesRemaining;
    } else {
      message.codesRemaining = 0;
    }
    return message;
  },
};

const baseOrganizationCreated: object = {};

export const OrganizationCreated = {
  encode(
    message: OrganizationCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrganizationCreated {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationCreated } as OrganizationCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrganizationCreated {
    const message = { ...baseOrganizationCreated } as OrganizationCreated;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },

  toJSON(message: OrganizationCreated): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrganizationCreated>): OrganizationCreated {
    const message = { ...baseOrganizationCreated } as OrganizationCreated;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },
};

const baseOrganizationJoined: object = {};

export const OrganizationJoined = {
  encode(
    message: OrganizationJoined,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrganizationJoined {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationJoined } as OrganizationJoined;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        case 2:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrganizationJoined {
    const message = { ...baseOrganizationJoined } as OrganizationJoined;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: OrganizationJoined): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrganizationJoined>): OrganizationJoined {
    const message = { ...baseOrganizationJoined } as OrganizationJoined;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseOrganizationLeft: object = {};

export const OrganizationLeft = {
  encode(message: OrganizationLeft, writer: Writer = Writer.create()): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrganizationLeft {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationLeft } as OrganizationLeft;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        case 2:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrganizationLeft {
    const message = { ...baseOrganizationLeft } as OrganizationLeft;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: OrganizationLeft): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrganizationLeft>): OrganizationLeft {
    const message = { ...baseOrganizationLeft } as OrganizationLeft;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
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
