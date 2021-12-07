defmodule Bottle.Catalog.V1.Product.ProductCategory do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :PRODUCT_CATEGORY_UNSPECIFIED
          | :PRODUCT_CATEGORY_DESKTOP
          | :PRODUCT_CATEGORY_LAPTOP
          | :PRODUCT_CATEGORY_SERVER
          | :PRODUCT_CATEGORY_APPAREL
          | :PRODUCT_CATEGORY_BAG
          | :PRODUCT_CATEGORY_ACCESSORY

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
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          model: String.t(),
          category: Bottle.Catalog.V1.Product.ProductCategory.t()
        }
  defstruct [:id, :model, :category]

  field(:id, 1, type: :string)
  field(:model, 2, type: :string)
  field(:category, 4, type: Bottle.Catalog.V1.Product.ProductCategory, enum: true)

  def transform_module(), do: nil
end
