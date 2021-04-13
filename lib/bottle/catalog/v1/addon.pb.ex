defmodule Bottle.Catalog.V1.Addon.AddonCategory do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :ADDON_CATEGORY_UNSPECIFIED
          | :ADDON_CATEGORY_RUSH_ASSEMBLY
          | :ADDON_CATEGORY_HANDLING
          | :ADDON_CATEGORY_EWASTE
          | :ADDON_CATEGORY_EXTENDED_WARRANTY
          | :ADDON_CATEGORY_SHIPPING

  field(:ADDON_CATEGORY_UNSPECIFIED, 0)
  field(:ADDON_CATEGORY_RUSH_ASSEMBLY, 1)
  field(:ADDON_CATEGORY_HANDLING, 2)
  field(:ADDON_CATEGORY_EWASTE, 3)
  field(:ADDON_CATEGORY_EXTENDED_WARRANTY, 4)
  field(:ADDON_CATEGORY_SHIPPING, 5)
end

defmodule Bottle.Catalog.V1.Addon do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          category: Bottle.Catalog.V1.Addon.AddonCategory.t()
        }
  defstruct [:category]

  field(:category, 1, type: Bottle.Catalog.V1.Addon.AddonCategory, enum: true)
end
