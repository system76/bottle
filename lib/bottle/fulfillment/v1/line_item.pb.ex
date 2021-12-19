defmodule Bottle.Fulfillment.V1.LineItem do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          item:
            {:catalog_product, Bottle.Catalog.V1.Product.t() | nil}
            | {:catalog_addon, Bottle.Catalog.V1.Addon.t() | nil},
          id: String.t(),
          quantity: integer,
          individual_price: integer
        }

  defstruct item: nil,
            id: "",
            quantity: 0,
            individual_price: 0

  oneof(:item, 0)

  field(:id, 1, type: :string)
  field(:quantity, 2, type: :int32)

  field(:catalog_product, 5,
    type: Bottle.Catalog.V1.Product,
    json_name: "catalogProduct",
    oneof: 0
  )

  field(:catalog_addon, 6, type: Bottle.Catalog.V1.Addon, json_name: "catalogAddon", oneof: 0)
  field(:individual_price, 4, type: :int64, json_name: "individualPrice")
end
