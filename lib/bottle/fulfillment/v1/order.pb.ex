defmodule Bottle.Fulfillment.V1.Order do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: integer,
          customer: Bottle.Account.V1.User.t() | nil,
          shipping: Bottle.Account.V1.Address.t() | nil,
          billing: Bottle.Account.V1.Address.t() | nil,
          shipping_method: String.t(),
          products: [Bottle.Catalog.V1.Product.t()]
        }
  defstruct [:id, :customer, :shipping, :billing, :shipping_method, :products]

  field(:id, 1, type: :int64)
  field(:customer, 2, type: Bottle.Account.V1.User)
  field(:shipping, 3, type: Bottle.Account.V1.Address)
  field(:billing, 4, type: Bottle.Account.V1.Address)
  field(:shipping_method, 5, type: :string)
  field(:products, 6, repeated: true, type: Bottle.Catalog.V1.Product)
end
