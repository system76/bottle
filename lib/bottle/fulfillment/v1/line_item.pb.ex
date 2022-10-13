defmodule Bottle.Fulfillment.V1.LineItem do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

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
