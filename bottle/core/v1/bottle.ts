/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  OrderCreated,
  OrderUpdated,
  TribbleFailed,
} from "../../../bottle/fulfillment/v1/events";
import {
  OrderVerificationRequest,
  OrderVerificationResponse,
} from "../../../bottle/fulfillment/v1/order_verification_service";
import {
  UserCreated,
  UserDeleted,
  UserUpdated,
  PasswordChanged,
  PasswordReset,
  TwoFactorRequested,
  TwoFactorRecoveryCodeUsed,
  OrganizationCreated,
  OrganizationJoined,
  OrganizationLeft,
} from "../../../bottle/account/v1/events";
import { BuildCreated, BuildUpdated } from "../../../bottle/assembly/v1/events";
import {
  ComponentAvailabilityUpdated,
  PartCreated,
  PartUpdated,
} from "../../../bottle/inventory/v1/events";
import {
  QuestionCreated,
  MacroApplied,
} from "../../../bottle/support/v1/events";

export const protobufPackage = "bottle.core.v1";

export interface Bottle {
  timestamp: number;
  requestId: string;
  source: string;
  orderCreated: OrderCreated | undefined;
  orderUpdated: OrderUpdated | undefined;
  orderVerificationRequest: OrderVerificationRequest | undefined;
  orderVerificationResponse: OrderVerificationResponse | undefined;
  tribbleFailed: TribbleFailed | undefined;
  userCreated: UserCreated | undefined;
  userDeleted: UserDeleted | undefined;
  userUpdated: UserUpdated | undefined;
  passwordChanged: PasswordChanged | undefined;
  passwordReset: PasswordReset | undefined;
  twoFactorRequested: TwoFactorRequested | undefined;
  twoFactorRecoveryCodeUsed: TwoFactorRecoveryCodeUsed | undefined;
  organizationCreated: OrganizationCreated | undefined;
  organizationJoined: OrganizationJoined | undefined;
  organizationLeft: OrganizationLeft | undefined;
  buildCreated: BuildCreated | undefined;
  buildUpdated: BuildUpdated | undefined;
  componentAvailabilityUpdated: ComponentAvailabilityUpdated | undefined;
  partCreated: PartCreated | undefined;
  partUpdated: PartUpdated | undefined;
  questionCreated: QuestionCreated | undefined;
  macroApplied: MacroApplied | undefined;
}

const baseBottle: object = { timestamp: 0, requestId: "", source: "" };

export const Bottle = {
  encode(message: Bottle, writer: Writer = Writer.create()): Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.orderCreated !== undefined) {
      OrderCreated.encode(
        message.orderCreated,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.orderUpdated !== undefined) {
      OrderUpdated.encode(
        message.orderUpdated,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.orderVerificationRequest !== undefined) {
      OrderVerificationRequest.encode(
        message.orderVerificationRequest,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.orderVerificationResponse !== undefined) {
      OrderVerificationResponse.encode(
        message.orderVerificationResponse,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.tribbleFailed !== undefined) {
      TribbleFailed.encode(
        message.tribbleFailed,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.userCreated !== undefined) {
      UserCreated.encode(
        message.userCreated,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.userDeleted !== undefined) {
      UserDeleted.encode(
        message.userDeleted,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.userUpdated !== undefined) {
      UserUpdated.encode(
        message.userUpdated,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.passwordChanged !== undefined) {
      PasswordChanged.encode(
        message.passwordChanged,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.passwordReset !== undefined) {
      PasswordReset.encode(
        message.passwordReset,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.twoFactorRequested !== undefined) {
      TwoFactorRequested.encode(
        message.twoFactorRequested,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.twoFactorRecoveryCodeUsed !== undefined) {
      TwoFactorRecoveryCodeUsed.encode(
        message.twoFactorRecoveryCodeUsed,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.organizationCreated !== undefined) {
      OrganizationCreated.encode(
        message.organizationCreated,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.organizationJoined !== undefined) {
      OrganizationJoined.encode(
        message.organizationJoined,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.organizationLeft !== undefined) {
      OrganizationLeft.encode(
        message.organizationLeft,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.buildCreated !== undefined) {
      BuildCreated.encode(
        message.buildCreated,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.buildUpdated !== undefined) {
      BuildUpdated.encode(
        message.buildUpdated,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.componentAvailabilityUpdated !== undefined) {
      ComponentAvailabilityUpdated.encode(
        message.componentAvailabilityUpdated,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.partCreated !== undefined) {
      PartCreated.encode(
        message.partCreated,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.partUpdated !== undefined) {
      PartUpdated.encode(
        message.partUpdated,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.questionCreated !== undefined) {
      QuestionCreated.encode(
        message.questionCreated,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.macroApplied !== undefined) {
      MacroApplied.encode(
        message.macroApplied,
        writer.uint32(138).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bottle {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBottle } as Bottle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.requestId = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.orderCreated = OrderCreated.decode(reader, reader.uint32());
          break;
        case 22:
          message.orderUpdated = OrderUpdated.decode(reader, reader.uint32());
          break;
        case 23:
          message.orderVerificationRequest = OrderVerificationRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.orderVerificationResponse = OrderVerificationResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.tribbleFailed = TribbleFailed.decode(reader, reader.uint32());
          break;
        case 7:
          message.userCreated = UserCreated.decode(reader, reader.uint32());
          break;
        case 20:
          message.userDeleted = UserDeleted.decode(reader, reader.uint32());
          break;
        case 21:
          message.userUpdated = UserUpdated.decode(reader, reader.uint32());
          break;
        case 8:
          message.passwordChanged = PasswordChanged.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.passwordReset = PasswordReset.decode(reader, reader.uint32());
          break;
        case 18:
          message.twoFactorRequested = TwoFactorRequested.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.twoFactorRecoveryCodeUsed = TwoFactorRecoveryCodeUsed.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.organizationCreated = OrganizationCreated.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.organizationJoined = OrganizationJoined.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.organizationLeft = OrganizationLeft.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.buildCreated = BuildCreated.decode(reader, reader.uint32());
          break;
        case 14:
          message.buildUpdated = BuildUpdated.decode(reader, reader.uint32());
          break;
        case 15:
          message.componentAvailabilityUpdated =
            ComponentAvailabilityUpdated.decode(reader, reader.uint32());
          break;
        case 25:
          message.partCreated = PartCreated.decode(reader, reader.uint32());
          break;
        case 26:
          message.partUpdated = PartUpdated.decode(reader, reader.uint32());
          break;
        case 16:
          message.questionCreated = QuestionCreated.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.macroApplied = MacroApplied.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bottle {
    const message = { ...baseBottle } as Bottle;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.orderCreated !== undefined && object.orderCreated !== null) {
      message.orderCreated = OrderCreated.fromJSON(object.orderCreated);
    } else {
      message.orderCreated = undefined;
    }
    if (object.orderUpdated !== undefined && object.orderUpdated !== null) {
      message.orderUpdated = OrderUpdated.fromJSON(object.orderUpdated);
    } else {
      message.orderUpdated = undefined;
    }
    if (
      object.orderVerificationRequest !== undefined &&
      object.orderVerificationRequest !== null
    ) {
      message.orderVerificationRequest = OrderVerificationRequest.fromJSON(
        object.orderVerificationRequest
      );
    } else {
      message.orderVerificationRequest = undefined;
    }
    if (
      object.orderVerificationResponse !== undefined &&
      object.orderVerificationResponse !== null
    ) {
      message.orderVerificationResponse = OrderVerificationResponse.fromJSON(
        object.orderVerificationResponse
      );
    } else {
      message.orderVerificationResponse = undefined;
    }
    if (object.tribbleFailed !== undefined && object.tribbleFailed !== null) {
      message.tribbleFailed = TribbleFailed.fromJSON(object.tribbleFailed);
    } else {
      message.tribbleFailed = undefined;
    }
    if (object.userCreated !== undefined && object.userCreated !== null) {
      message.userCreated = UserCreated.fromJSON(object.userCreated);
    } else {
      message.userCreated = undefined;
    }
    if (object.userDeleted !== undefined && object.userDeleted !== null) {
      message.userDeleted = UserDeleted.fromJSON(object.userDeleted);
    } else {
      message.userDeleted = undefined;
    }
    if (object.userUpdated !== undefined && object.userUpdated !== null) {
      message.userUpdated = UserUpdated.fromJSON(object.userUpdated);
    } else {
      message.userUpdated = undefined;
    }
    if (
      object.passwordChanged !== undefined &&
      object.passwordChanged !== null
    ) {
      message.passwordChanged = PasswordChanged.fromJSON(
        object.passwordChanged
      );
    } else {
      message.passwordChanged = undefined;
    }
    if (object.passwordReset !== undefined && object.passwordReset !== null) {
      message.passwordReset = PasswordReset.fromJSON(object.passwordReset);
    } else {
      message.passwordReset = undefined;
    }
    if (
      object.twoFactorRequested !== undefined &&
      object.twoFactorRequested !== null
    ) {
      message.twoFactorRequested = TwoFactorRequested.fromJSON(
        object.twoFactorRequested
      );
    } else {
      message.twoFactorRequested = undefined;
    }
    if (
      object.twoFactorRecoveryCodeUsed !== undefined &&
      object.twoFactorRecoveryCodeUsed !== null
    ) {
      message.twoFactorRecoveryCodeUsed = TwoFactorRecoveryCodeUsed.fromJSON(
        object.twoFactorRecoveryCodeUsed
      );
    } else {
      message.twoFactorRecoveryCodeUsed = undefined;
    }
    if (
      object.organizationCreated !== undefined &&
      object.organizationCreated !== null
    ) {
      message.organizationCreated = OrganizationCreated.fromJSON(
        object.organizationCreated
      );
    } else {
      message.organizationCreated = undefined;
    }
    if (
      object.organizationJoined !== undefined &&
      object.organizationJoined !== null
    ) {
      message.organizationJoined = OrganizationJoined.fromJSON(
        object.organizationJoined
      );
    } else {
      message.organizationJoined = undefined;
    }
    if (
      object.organizationLeft !== undefined &&
      object.organizationLeft !== null
    ) {
      message.organizationLeft = OrganizationLeft.fromJSON(
        object.organizationLeft
      );
    } else {
      message.organizationLeft = undefined;
    }
    if (object.buildCreated !== undefined && object.buildCreated !== null) {
      message.buildCreated = BuildCreated.fromJSON(object.buildCreated);
    } else {
      message.buildCreated = undefined;
    }
    if (object.buildUpdated !== undefined && object.buildUpdated !== null) {
      message.buildUpdated = BuildUpdated.fromJSON(object.buildUpdated);
    } else {
      message.buildUpdated = undefined;
    }
    if (
      object.componentAvailabilityUpdated !== undefined &&
      object.componentAvailabilityUpdated !== null
    ) {
      message.componentAvailabilityUpdated =
        ComponentAvailabilityUpdated.fromJSON(
          object.componentAvailabilityUpdated
        );
    } else {
      message.componentAvailabilityUpdated = undefined;
    }
    if (object.partCreated !== undefined && object.partCreated !== null) {
      message.partCreated = PartCreated.fromJSON(object.partCreated);
    } else {
      message.partCreated = undefined;
    }
    if (object.partUpdated !== undefined && object.partUpdated !== null) {
      message.partUpdated = PartUpdated.fromJSON(object.partUpdated);
    } else {
      message.partUpdated = undefined;
    }
    if (
      object.questionCreated !== undefined &&
      object.questionCreated !== null
    ) {
      message.questionCreated = QuestionCreated.fromJSON(
        object.questionCreated
      );
    } else {
      message.questionCreated = undefined;
    }
    if (object.macroApplied !== undefined && object.macroApplied !== null) {
      message.macroApplied = MacroApplied.fromJSON(object.macroApplied);
    } else {
      message.macroApplied = undefined;
    }
    return message;
  },

  toJSON(message: Bottle): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.source !== undefined && (obj.source = message.source);
    message.orderCreated !== undefined &&
      (obj.orderCreated = message.orderCreated
        ? OrderCreated.toJSON(message.orderCreated)
        : undefined);
    message.orderUpdated !== undefined &&
      (obj.orderUpdated = message.orderUpdated
        ? OrderUpdated.toJSON(message.orderUpdated)
        : undefined);
    message.orderVerificationRequest !== undefined &&
      (obj.orderVerificationRequest = message.orderVerificationRequest
        ? OrderVerificationRequest.toJSON(message.orderVerificationRequest)
        : undefined);
    message.orderVerificationResponse !== undefined &&
      (obj.orderVerificationResponse = message.orderVerificationResponse
        ? OrderVerificationResponse.toJSON(message.orderVerificationResponse)
        : undefined);
    message.tribbleFailed !== undefined &&
      (obj.tribbleFailed = message.tribbleFailed
        ? TribbleFailed.toJSON(message.tribbleFailed)
        : undefined);
    message.userCreated !== undefined &&
      (obj.userCreated = message.userCreated
        ? UserCreated.toJSON(message.userCreated)
        : undefined);
    message.userDeleted !== undefined &&
      (obj.userDeleted = message.userDeleted
        ? UserDeleted.toJSON(message.userDeleted)
        : undefined);
    message.userUpdated !== undefined &&
      (obj.userUpdated = message.userUpdated
        ? UserUpdated.toJSON(message.userUpdated)
        : undefined);
    message.passwordChanged !== undefined &&
      (obj.passwordChanged = message.passwordChanged
        ? PasswordChanged.toJSON(message.passwordChanged)
        : undefined);
    message.passwordReset !== undefined &&
      (obj.passwordReset = message.passwordReset
        ? PasswordReset.toJSON(message.passwordReset)
        : undefined);
    message.twoFactorRequested !== undefined &&
      (obj.twoFactorRequested = message.twoFactorRequested
        ? TwoFactorRequested.toJSON(message.twoFactorRequested)
        : undefined);
    message.twoFactorRecoveryCodeUsed !== undefined &&
      (obj.twoFactorRecoveryCodeUsed = message.twoFactorRecoveryCodeUsed
        ? TwoFactorRecoveryCodeUsed.toJSON(message.twoFactorRecoveryCodeUsed)
        : undefined);
    message.organizationCreated !== undefined &&
      (obj.organizationCreated = message.organizationCreated
        ? OrganizationCreated.toJSON(message.organizationCreated)
        : undefined);
    message.organizationJoined !== undefined &&
      (obj.organizationJoined = message.organizationJoined
        ? OrganizationJoined.toJSON(message.organizationJoined)
        : undefined);
    message.organizationLeft !== undefined &&
      (obj.organizationLeft = message.organizationLeft
        ? OrganizationLeft.toJSON(message.organizationLeft)
        : undefined);
    message.buildCreated !== undefined &&
      (obj.buildCreated = message.buildCreated
        ? BuildCreated.toJSON(message.buildCreated)
        : undefined);
    message.buildUpdated !== undefined &&
      (obj.buildUpdated = message.buildUpdated
        ? BuildUpdated.toJSON(message.buildUpdated)
        : undefined);
    message.componentAvailabilityUpdated !== undefined &&
      (obj.componentAvailabilityUpdated = message.componentAvailabilityUpdated
        ? ComponentAvailabilityUpdated.toJSON(
            message.componentAvailabilityUpdated
          )
        : undefined);
    message.partCreated !== undefined &&
      (obj.partCreated = message.partCreated
        ? PartCreated.toJSON(message.partCreated)
        : undefined);
    message.partUpdated !== undefined &&
      (obj.partUpdated = message.partUpdated
        ? PartUpdated.toJSON(message.partUpdated)
        : undefined);
    message.questionCreated !== undefined &&
      (obj.questionCreated = message.questionCreated
        ? QuestionCreated.toJSON(message.questionCreated)
        : undefined);
    message.macroApplied !== undefined &&
      (obj.macroApplied = message.macroApplied
        ? MacroApplied.toJSON(message.macroApplied)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Bottle>): Bottle {
    const message = { ...baseBottle } as Bottle;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.orderCreated !== undefined && object.orderCreated !== null) {
      message.orderCreated = OrderCreated.fromPartial(object.orderCreated);
    } else {
      message.orderCreated = undefined;
    }
    if (object.orderUpdated !== undefined && object.orderUpdated !== null) {
      message.orderUpdated = OrderUpdated.fromPartial(object.orderUpdated);
    } else {
      message.orderUpdated = undefined;
    }
    if (
      object.orderVerificationRequest !== undefined &&
      object.orderVerificationRequest !== null
    ) {
      message.orderVerificationRequest = OrderVerificationRequest.fromPartial(
        object.orderVerificationRequest
      );
    } else {
      message.orderVerificationRequest = undefined;
    }
    if (
      object.orderVerificationResponse !== undefined &&
      object.orderVerificationResponse !== null
    ) {
      message.orderVerificationResponse = OrderVerificationResponse.fromPartial(
        object.orderVerificationResponse
      );
    } else {
      message.orderVerificationResponse = undefined;
    }
    if (object.tribbleFailed !== undefined && object.tribbleFailed !== null) {
      message.tribbleFailed = TribbleFailed.fromPartial(object.tribbleFailed);
    } else {
      message.tribbleFailed = undefined;
    }
    if (object.userCreated !== undefined && object.userCreated !== null) {
      message.userCreated = UserCreated.fromPartial(object.userCreated);
    } else {
      message.userCreated = undefined;
    }
    if (object.userDeleted !== undefined && object.userDeleted !== null) {
      message.userDeleted = UserDeleted.fromPartial(object.userDeleted);
    } else {
      message.userDeleted = undefined;
    }
    if (object.userUpdated !== undefined && object.userUpdated !== null) {
      message.userUpdated = UserUpdated.fromPartial(object.userUpdated);
    } else {
      message.userUpdated = undefined;
    }
    if (
      object.passwordChanged !== undefined &&
      object.passwordChanged !== null
    ) {
      message.passwordChanged = PasswordChanged.fromPartial(
        object.passwordChanged
      );
    } else {
      message.passwordChanged = undefined;
    }
    if (object.passwordReset !== undefined && object.passwordReset !== null) {
      message.passwordReset = PasswordReset.fromPartial(object.passwordReset);
    } else {
      message.passwordReset = undefined;
    }
    if (
      object.twoFactorRequested !== undefined &&
      object.twoFactorRequested !== null
    ) {
      message.twoFactorRequested = TwoFactorRequested.fromPartial(
        object.twoFactorRequested
      );
    } else {
      message.twoFactorRequested = undefined;
    }
    if (
      object.twoFactorRecoveryCodeUsed !== undefined &&
      object.twoFactorRecoveryCodeUsed !== null
    ) {
      message.twoFactorRecoveryCodeUsed = TwoFactorRecoveryCodeUsed.fromPartial(
        object.twoFactorRecoveryCodeUsed
      );
    } else {
      message.twoFactorRecoveryCodeUsed = undefined;
    }
    if (
      object.organizationCreated !== undefined &&
      object.organizationCreated !== null
    ) {
      message.organizationCreated = OrganizationCreated.fromPartial(
        object.organizationCreated
      );
    } else {
      message.organizationCreated = undefined;
    }
    if (
      object.organizationJoined !== undefined &&
      object.organizationJoined !== null
    ) {
      message.organizationJoined = OrganizationJoined.fromPartial(
        object.organizationJoined
      );
    } else {
      message.organizationJoined = undefined;
    }
    if (
      object.organizationLeft !== undefined &&
      object.organizationLeft !== null
    ) {
      message.organizationLeft = OrganizationLeft.fromPartial(
        object.organizationLeft
      );
    } else {
      message.organizationLeft = undefined;
    }
    if (object.buildCreated !== undefined && object.buildCreated !== null) {
      message.buildCreated = BuildCreated.fromPartial(object.buildCreated);
    } else {
      message.buildCreated = undefined;
    }
    if (object.buildUpdated !== undefined && object.buildUpdated !== null) {
      message.buildUpdated = BuildUpdated.fromPartial(object.buildUpdated);
    } else {
      message.buildUpdated = undefined;
    }
    if (
      object.componentAvailabilityUpdated !== undefined &&
      object.componentAvailabilityUpdated !== null
    ) {
      message.componentAvailabilityUpdated =
        ComponentAvailabilityUpdated.fromPartial(
          object.componentAvailabilityUpdated
        );
    } else {
      message.componentAvailabilityUpdated = undefined;
    }
    if (object.partCreated !== undefined && object.partCreated !== null) {
      message.partCreated = PartCreated.fromPartial(object.partCreated);
    } else {
      message.partCreated = undefined;
    }
    if (object.partUpdated !== undefined && object.partUpdated !== null) {
      message.partUpdated = PartUpdated.fromPartial(object.partUpdated);
    } else {
      message.partUpdated = undefined;
    }
    if (
      object.questionCreated !== undefined &&
      object.questionCreated !== null
    ) {
      message.questionCreated = QuestionCreated.fromPartial(
        object.questionCreated
      );
    } else {
      message.questionCreated = undefined;
    }
    if (object.macroApplied !== undefined && object.macroApplied !== null) {
      message.macroApplied = MacroApplied.fromPartial(object.macroApplied);
    } else {
      message.macroApplied = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
