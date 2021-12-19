defmodule Bottle.Inventory.V1.ComponentAvailabilityUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          component: Bottle.Inventory.V1.Component.t() | nil,
          quantity: integer
        }

  defstruct component: nil,
            quantity: 0

  field(:component, 1, type: Bottle.Inventory.V1.Component)
  field(:quantity, 2, type: :int32)
end

defmodule Bottle.Inventory.V1.SkuDetailsUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          available_quantity: integer,
          demand_quantity: integer,
          excess_quantity: integer
        }

  defstruct sku: nil,
            available_quantity: 0,
            demand_quantity: 0,
            excess_quantity: 0

  field(:sku, 1, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 3, type: :int32, json_name: "availableQuantity")
  field(:demand_quantity, 4, type: :int32, json_name: "demandQuantity")
  field(:excess_quantity, 5, type: :int32, json_name: "excessQuantity")
end

defmodule Bottle.Inventory.V1.PartCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          part: Bottle.Inventory.V1.Part.t() | nil
        }

  defstruct part: nil

  field(:part, 1, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Inventory.V1.PartUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          old: Bottle.Inventory.V1.Part.t() | nil,
          new: Bottle.Inventory.V1.Part.t() | nil
        }

  defstruct old: nil,
            new: nil

  field(:old, 1, type: Bottle.Inventory.V1.Part)
  field(:new, 2, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Inventory.V1.ComponentKitChanged do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          component: Bottle.Inventory.V1.Component.t() | nil
        }

  defstruct component: nil

  field(:component, 1, type: Bottle.Inventory.V1.Component)
end
