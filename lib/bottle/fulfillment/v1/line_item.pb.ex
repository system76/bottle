defmodule Bottle.Fulfillment.V1.LineItem do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          item: {atom, any},
          id: String.t(),
          quantity: integer,
          individual_price: integer
        }
  defstruct [:item, :id, :quantity, :individual_price]

  oneof(:item, 0)
  field(:id, 1, type: :string)
  field(:quantity, 2, type: :int32)
  field(:catalog_product, 5, type: Bottle.Catalog.V1.Product, oneof: 0)
  field(:catalog_addon, 6, type: Bottle.Catalog.V1.Addon, oneof: 0)
  field(:individual_price, 4, type: :int64)
end
