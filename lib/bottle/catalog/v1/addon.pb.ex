defmodule Bottle.Catalog.V1.Addon.AddonCategory do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:ADDON_CATEGORY_UNSPECIFIED, 0)
  field(:ADDON_CATEGORY_RUSH_ASSEMBLY, 1)
  field(:ADDON_CATEGORY_HANDLING, 2)
  field(:ADDON_CATEGORY_EWASTE, 3)
  field(:ADDON_CATEGORY_EXTENDED_WARRANTY, 4)
  field(:ADDON_CATEGORY_SHIPPING, 5)
  field(:ADDON_CATEGORY_SOFTWARE_MAINTENANCE, 6)
end

defmodule Bottle.Catalog.V1.Addon do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:category, 1, type: Bottle.Catalog.V1.Addon.AddonCategory, enum: true)
end
