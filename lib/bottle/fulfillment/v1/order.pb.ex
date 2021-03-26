defmodule Bottle.Fulfillment.V1.Order.PaymentMethod do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :PAYMENT_METHOD_UNSPECIFIED
          | :PAYMENT_METHOD_CHECK
          | :PAYMENT_METHOD_WIRE_TRANSFER
          | :PAYMENT_METHOD_MONEY_ORDER
          | :PAYMENT_METHOD_PURCHASE_ORDER
          | :PAYMENT_METHOD_WARRANTY
          | :PAYMENT_METHOD_ADVANCED_REPLACEMENT
          | :PAYMENT_METHOD_STRIPE_CC
          | :PAYMENT_METHOD_STRIPE_KLARNA

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
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          customer: Bottle.Account.V1.User.t() | nil,
          shipping: Bottle.Account.V1.Address.t() | nil,
          billing: Bottle.Account.V1.Address.t() | nil,
          line_items: [Bottle.Fulfillment.V1.LineItem.t()],
          shipping_method: String.t(),
          shipping_price: integer,
          payment_method: Bottle.Fulfillment.V1.Order.PaymentMethod.t(),
          scode: String.t(),
          tax_lines: [Bottle.Fulfillment.V1.TaxLine.t()]
        }
  defstruct [
    :id,
    :customer,
    :shipping,
    :billing,
    :line_items,
    :shipping_method,
    :shipping_price,
    :payment_method,
    :scode,
    :tax_lines
  ]

  field(:id, 1, type: :string)
  field(:customer, 2, type: Bottle.Account.V1.User)
  field(:shipping, 3, type: Bottle.Account.V1.Address)
  field(:billing, 4, type: Bottle.Account.V1.Address)
  field(:line_items, 11, repeated: true, type: Bottle.Fulfillment.V1.LineItem)
  field(:shipping_method, 5, type: :string)
  field(:shipping_price, 12, type: :int64)
  field(:payment_method, 7, type: Bottle.Fulfillment.V1.Order.PaymentMethod, enum: true)
  field(:scode, 8, type: :string)
  field(:tax_lines, 10, repeated: true, type: Bottle.Fulfillment.V1.TaxLine)
end
