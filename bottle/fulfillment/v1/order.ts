/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { User } from "../../account/v1/user";
import { Address } from "../../account/v1/address";
import { LineItem } from "./line_item";
import { TaxLine } from "./tax_line";
import { Event } from "./event";

export const protobufPackage = "bottle.fulfillment.v1";

export interface Order {
  id: string;
  status: Order_Status;
  customer: User | undefined;
  shipping: Address | undefined;
  billing: Address | undefined;
  lineItems: LineItem[];
  shippingMethod: string;
  shippingPrice: number;
  paymentMethod: Order_PaymentMethod;
  scode: string;
  taxLines: TaxLine[];
  events: Event[];
}

export enum Order_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_COMPLETE = 1,
  UNRECOGNIZED = -1,
}

export function order_StatusFromJSON(object: any): Order_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Order_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_COMPLETE":
      return Order_Status.STATUS_COMPLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_Status.UNRECOGNIZED;
  }
}

export function order_StatusToJSON(object: Order_Status): string {
  switch (object) {
    case Order_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Order_Status.STATUS_COMPLETE:
      return "STATUS_COMPLETE";
    default:
      return "UNKNOWN";
  }
}

export enum Order_PaymentMethod {
  PAYMENT_METHOD_UNSPECIFIED = 0,
  PAYMENT_METHOD_CHECK = 1,
  PAYMENT_METHOD_WIRE_TRANSFER = 2,
  PAYMENT_METHOD_MONEY_ORDER = 3,
  PAYMENT_METHOD_PURCHASE_ORDER = 4,
  PAYMENT_METHOD_WARRANTY = 5,
  PAYMENT_METHOD_ADVANCED_REPLACEMENT = 6,
  PAYMENT_METHOD_STRIPE_CC = 7,
  PAYMENT_METHOD_STRIPE_KLARNA = 8,
  UNRECOGNIZED = -1,
}

export function order_PaymentMethodFromJSON(object: any): Order_PaymentMethod {
  switch (object) {
    case 0:
    case "PAYMENT_METHOD_UNSPECIFIED":
      return Order_PaymentMethod.PAYMENT_METHOD_UNSPECIFIED;
    case 1:
    case "PAYMENT_METHOD_CHECK":
      return Order_PaymentMethod.PAYMENT_METHOD_CHECK;
    case 2:
    case "PAYMENT_METHOD_WIRE_TRANSFER":
      return Order_PaymentMethod.PAYMENT_METHOD_WIRE_TRANSFER;
    case 3:
    case "PAYMENT_METHOD_MONEY_ORDER":
      return Order_PaymentMethod.PAYMENT_METHOD_MONEY_ORDER;
    case 4:
    case "PAYMENT_METHOD_PURCHASE_ORDER":
      return Order_PaymentMethod.PAYMENT_METHOD_PURCHASE_ORDER;
    case 5:
    case "PAYMENT_METHOD_WARRANTY":
      return Order_PaymentMethod.PAYMENT_METHOD_WARRANTY;
    case 6:
    case "PAYMENT_METHOD_ADVANCED_REPLACEMENT":
      return Order_PaymentMethod.PAYMENT_METHOD_ADVANCED_REPLACEMENT;
    case 7:
    case "PAYMENT_METHOD_STRIPE_CC":
      return Order_PaymentMethod.PAYMENT_METHOD_STRIPE_CC;
    case 8:
    case "PAYMENT_METHOD_STRIPE_KLARNA":
      return Order_PaymentMethod.PAYMENT_METHOD_STRIPE_KLARNA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_PaymentMethod.UNRECOGNIZED;
  }
}

export function order_PaymentMethodToJSON(object: Order_PaymentMethod): string {
  switch (object) {
    case Order_PaymentMethod.PAYMENT_METHOD_UNSPECIFIED:
      return "PAYMENT_METHOD_UNSPECIFIED";
    case Order_PaymentMethod.PAYMENT_METHOD_CHECK:
      return "PAYMENT_METHOD_CHECK";
    case Order_PaymentMethod.PAYMENT_METHOD_WIRE_TRANSFER:
      return "PAYMENT_METHOD_WIRE_TRANSFER";
    case Order_PaymentMethod.PAYMENT_METHOD_MONEY_ORDER:
      return "PAYMENT_METHOD_MONEY_ORDER";
    case Order_PaymentMethod.PAYMENT_METHOD_PURCHASE_ORDER:
      return "PAYMENT_METHOD_PURCHASE_ORDER";
    case Order_PaymentMethod.PAYMENT_METHOD_WARRANTY:
      return "PAYMENT_METHOD_WARRANTY";
    case Order_PaymentMethod.PAYMENT_METHOD_ADVANCED_REPLACEMENT:
      return "PAYMENT_METHOD_ADVANCED_REPLACEMENT";
    case Order_PaymentMethod.PAYMENT_METHOD_STRIPE_CC:
      return "PAYMENT_METHOD_STRIPE_CC";
    case Order_PaymentMethod.PAYMENT_METHOD_STRIPE_KLARNA:
      return "PAYMENT_METHOD_STRIPE_KLARNA";
    default:
      return "UNKNOWN";
  }
}

const baseOrder: object = {
  id: "",
  status: 0,
  shippingMethod: "",
  shippingPrice: 0,
  paymentMethod: 0,
  scode: "",
};

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.customer !== undefined) {
      User.encode(message.customer, writer.uint32(18).fork()).ldelim();
    }
    if (message.shipping !== undefined) {
      Address.encode(message.shipping, writer.uint32(26).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Address.encode(message.billing, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.lineItems) {
      LineItem.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.shippingMethod !== "") {
      writer.uint32(42).string(message.shippingMethod);
    }
    if (message.shippingPrice !== 0) {
      writer.uint32(96).int64(message.shippingPrice);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(56).int32(message.paymentMethod);
    }
    if (message.scode !== "") {
      writer.uint32(66).string(message.scode);
    }
    for (const v of message.taxLines) {
      TaxLine.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    message.lineItems = [];
    message.taxLines = [];
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 13:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.customer = User.decode(reader, reader.uint32());
          break;
        case 3:
          message.shipping = Address.decode(reader, reader.uint32());
          break;
        case 4:
          message.billing = Address.decode(reader, reader.uint32());
          break;
        case 11:
          message.lineItems.push(LineItem.decode(reader, reader.uint32()));
          break;
        case 5:
          message.shippingMethod = reader.string();
          break;
        case 12:
          message.shippingPrice = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.paymentMethod = reader.int32() as any;
          break;
        case 8:
          message.scode = reader.string();
          break;
        case 10:
          message.taxLines.push(TaxLine.decode(reader, reader.uint32()));
          break;
        case 14:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    message.lineItems = [];
    message.taxLines = [];
    message.events = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = order_StatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.customer !== undefined && object.customer !== null) {
      message.customer = User.fromJSON(object.customer);
    } else {
      message.customer = undefined;
    }
    if (object.shipping !== undefined && object.shipping !== null) {
      message.shipping = Address.fromJSON(object.shipping);
    } else {
      message.shipping = undefined;
    }
    if (object.billing !== undefined && object.billing !== null) {
      message.billing = Address.fromJSON(object.billing);
    } else {
      message.billing = undefined;
    }
    if (object.lineItems !== undefined && object.lineItems !== null) {
      for (const e of object.lineItems) {
        message.lineItems.push(LineItem.fromJSON(e));
      }
    }
    if (object.shippingMethod !== undefined && object.shippingMethod !== null) {
      message.shippingMethod = String(object.shippingMethod);
    } else {
      message.shippingMethod = "";
    }
    if (object.shippingPrice !== undefined && object.shippingPrice !== null) {
      message.shippingPrice = Number(object.shippingPrice);
    } else {
      message.shippingPrice = 0;
    }
    if (object.paymentMethod !== undefined && object.paymentMethod !== null) {
      message.paymentMethod = order_PaymentMethodFromJSON(object.paymentMethod);
    } else {
      message.paymentMethod = 0;
    }
    if (object.scode !== undefined && object.scode !== null) {
      message.scode = String(object.scode);
    } else {
      message.scode = "";
    }
    if (object.taxLines !== undefined && object.taxLines !== null) {
      for (const e of object.taxLines) {
        message.taxLines.push(TaxLine.fromJSON(e));
      }
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined &&
      (obj.status = order_StatusToJSON(message.status));
    message.customer !== undefined &&
      (obj.customer = message.customer
        ? User.toJSON(message.customer)
        : undefined);
    message.shipping !== undefined &&
      (obj.shipping = message.shipping
        ? Address.toJSON(message.shipping)
        : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing
        ? Address.toJSON(message.billing)
        : undefined);
    if (message.lineItems) {
      obj.lineItems = message.lineItems.map((e) =>
        e ? LineItem.toJSON(e) : undefined
      );
    } else {
      obj.lineItems = [];
    }
    message.shippingMethod !== undefined &&
      (obj.shippingMethod = message.shippingMethod);
    message.shippingPrice !== undefined &&
      (obj.shippingPrice = message.shippingPrice);
    message.paymentMethod !== undefined &&
      (obj.paymentMethod = order_PaymentMethodToJSON(message.paymentMethod));
    message.scode !== undefined && (obj.scode = message.scode);
    if (message.taxLines) {
      obj.taxLines = message.taxLines.map((e) =>
        e ? TaxLine.toJSON(e) : undefined
      );
    } else {
      obj.taxLines = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    message.lineItems = [];
    message.taxLines = [];
    message.events = [];
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
    if (object.customer !== undefined && object.customer !== null) {
      message.customer = User.fromPartial(object.customer);
    } else {
      message.customer = undefined;
    }
    if (object.shipping !== undefined && object.shipping !== null) {
      message.shipping = Address.fromPartial(object.shipping);
    } else {
      message.shipping = undefined;
    }
    if (object.billing !== undefined && object.billing !== null) {
      message.billing = Address.fromPartial(object.billing);
    } else {
      message.billing = undefined;
    }
    if (object.lineItems !== undefined && object.lineItems !== null) {
      for (const e of object.lineItems) {
        message.lineItems.push(LineItem.fromPartial(e));
      }
    }
    if (object.shippingMethod !== undefined && object.shippingMethod !== null) {
      message.shippingMethod = object.shippingMethod;
    } else {
      message.shippingMethod = "";
    }
    if (object.shippingPrice !== undefined && object.shippingPrice !== null) {
      message.shippingPrice = object.shippingPrice;
    } else {
      message.shippingPrice = 0;
    }
    if (object.paymentMethod !== undefined && object.paymentMethod !== null) {
      message.paymentMethod = object.paymentMethod;
    } else {
      message.paymentMethod = 0;
    }
    if (object.scode !== undefined && object.scode !== null) {
      message.scode = object.scode;
    } else {
      message.scode = "";
    }
    if (object.taxLines !== undefined && object.taxLines !== null) {
      for (const e of object.taxLines) {
        message.taxLines.push(TaxLine.fromPartial(e));
      }
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromPartial(e));
      }
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
