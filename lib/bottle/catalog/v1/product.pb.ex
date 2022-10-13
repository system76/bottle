defmodule Bottle.Catalog.V1.Product.ProductCategory do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:PRODUCT_CATEGORY_UNSPECIFIED, 0)
  field(:PRODUCT_CATEGORY_DESKTOP, 1)
  field(:PRODUCT_CATEGORY_LAPTOP, 2)
  field(:PRODUCT_CATEGORY_SERVER, 3)
  field(:PRODUCT_CATEGORY_APPAREL, 4)
  field(:PRODUCT_CATEGORY_BAG, 5)
  field(:PRODUCT_CATEGORY_ACCESSORY, 6)
end

defmodule Bottle.Catalog.V1.Product do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:model, 2, type: :string)
  field(:category, 4, type: Bottle.Catalog.V1.Product.ProductCategory, enum: true)
end
