defmodule Bottle.Inventory.V1.Sku do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          name: String.t(),
          description: String.t()
        }
  defstruct [:id, :name, :description]

  field(:id, 1, type: :string)
  field(:name, 2, type: :string)
  field(:description, 3, type: :string)

  def transform_module(), do: nil
end
