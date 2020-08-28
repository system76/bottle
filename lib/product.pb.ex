defmodule Bottle.Messages.Product do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          model: String.t(),
          rushed_assembly: boolean
        }
  defstruct [:id, :model, :rushed_assembly]

  field(:id, 1, type: :string)
  field(:model, 2, type: :string)
  field(:rushed_assembly, 3, type: :bool)
end
