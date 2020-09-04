defmodule Bottle.Fulfillment.Order do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: integer,
          customer: Bottle.Account.User.t() | nil,
          shipping: Bottle.Account.Address.t() | nil,
          billing: Bottle.Account.Address.t() | nil,
          shipping_method: String.t(),
          products: [Bottle.Catalog.Product.t()]
        }
  defstruct [:id, :customer, :shipping, :billing, :shipping_method, :products]

  field(:id, 1, type: :int64)
  field(:customer, 2, type: Bottle.Account.User)
  field(:shipping, 3, type: Bottle.Account.Address)
  field(:billing, 4, type: Bottle.Account.Address)
  field(:shipping_method, 5, type: :string)
  field(:products, 6, repeated: true, type: Bottle.Catalog.Product)
end
