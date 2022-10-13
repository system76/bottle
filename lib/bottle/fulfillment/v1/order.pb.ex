defmodule Bottle.Fulfillment.V1.Order.Status do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:STATUS_UNSPECIFIED, 0)
  field(:STATUS_COMPLETE, 1)
end

defmodule Bottle.Fulfillment.V1.Order.PaymentMethod do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:PAYMENT_METHOD_UNSPECIFIED, 0)
  field(:PAYMENT_METHOD_CHECK, 1)
  field(:PAYMENT_METHOD_WIRE_TRANSFER, 2)
  field(:PAYMENT_METHOD_MONEY_ORDER, 3)
  field(:PAYMENT_METHOD_PURCHASE_ORDER, 4)
  field(:PAYMENT_METHOD_WARRANTY, 5)
  field(:PAYMENT_METHOD_ADVANCED_REPLACEMENT, 6)
  field(:PAYMENT_METHOD_STRIPE_CC, 7)
  field(:PAYMENT_METHOD_STRIPE_KLARNA, 8)
end

defmodule Bottle.Fulfillment.V1.Order do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:status, 13, type: Bottle.Fulfillment.V1.Order.Status, enum: true)
  field(:customer, 2, type: Bottle.Account.V1.User)
  field(:shipping, 3, type: Bottle.Account.V1.Address)
  field(:billing, 4, type: Bottle.Account.V1.Address)

  field(:line_items, 11,
    repeated: true,
    type: Bottle.Fulfillment.V1.LineItem,
    json_name: "lineItems"
  )

  field(:shipping_method, 5, type: :string, json_name: "shippingMethod")
  field(:shipping_price, 12, type: :int64, json_name: "shippingPrice")

  field(:payment_method, 7,
    type: Bottle.Fulfillment.V1.Order.PaymentMethod,
    json_name: "paymentMethod",
    enum: true
  )

  field(:scode, 8, type: :string)

  field(:tax_lines, 10, repeated: true, type: Bottle.Fulfillment.V1.TaxLine, json_name: "taxLines")

  field(:events, 14, repeated: true, type: Bottle.Fulfillment.V1.Event)
end
