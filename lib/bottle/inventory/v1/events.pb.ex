defmodule Bottle.Inventory.V1.ComponentAvailabilityUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          component: Bottle.Inventory.V1.Component.t() | nil,
          quantity: integer
        }
  defstruct [:component, :quantity]

  field(:component, 1, type: Bottle.Inventory.V1.Component)
  field(:quantity, 2, type: :int32)
end

defmodule Bottle.Inventory.V1.PartCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          part: Bottle.Inventory.V1.Part.t() | nil
        }
  defstruct [:part]

  field(:part, 1, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Inventory.V1.PartUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          old: Bottle.Inventory.V1.Part.t() | nil,
          new: Bottle.Inventory.V1.Part.t() | nil
        }
  defstruct [:old, :new]

  field(:old, 1, type: Bottle.Inventory.V1.Part)
  field(:new, 2, type: Bottle.Inventory.V1.Part)
end