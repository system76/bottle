defmodule Bottle.Inventory.Events.V1.ComponentAvailabilityUpdated do
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
