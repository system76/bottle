defmodule Bottle.Fulfillment.V1.Verification do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          order: Bottle.Fulfillment.V1.Order.t() | nil,
          code: String.t(),
          flag: [String.t()]
        }
  defstruct [:order, :code, :flag]

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
  field(:code, 2, type: :string)
  field(:flag, 3, repeated: true, type: :string)
end
