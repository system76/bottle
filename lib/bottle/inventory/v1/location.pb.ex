defmodule Bottle.Inventory.V1.Location do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          name: String.t()
        }

  defstruct id: "",
            name: ""

  field(:id, 1, type: :string)
  field(:name, 2, type: :string)
end
