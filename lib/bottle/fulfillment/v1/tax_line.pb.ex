defmodule Bottle.Fulfillment.V1.TaxLine do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          name: String.t(),
          amount: integer
        }
  defstruct [:id, :name, :amount]

  field(:id, 1, type: :string)
  field(:name, 2, type: :string)
  field(:amount, 3, type: :int64)
end
