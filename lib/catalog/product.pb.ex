defmodule Bottle.Catalog.Product do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          model: String.t(),
          rush_assembly: boolean
        }
  defstruct [:id, :model, :rush_assembly]

  field(:id, 1, type: :string)
  field(:model, 2, type: :string)
  field(:rush_assembly, 3, type: :bool)
end
