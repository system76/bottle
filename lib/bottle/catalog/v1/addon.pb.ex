defmodule Bottle.Catalog.V1.Addon.AddonCategory do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t :: integer | :ADDON_CATEGORY_UNSPECIFIED | :ADDON_CATEGORY_RUSH_ASSEMBLY

  field(:ADDON_CATEGORY_UNSPECIFIED, 0)
  field(:ADDON_CATEGORY_RUSH_ASSEMBLY, 1)
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
