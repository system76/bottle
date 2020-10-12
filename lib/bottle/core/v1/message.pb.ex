defmodule Bottle.Core.V1.Message do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          resource: {atom, any},
          timestamp: integer,
          request_id: String.t(),
          source: String.t()
        }
  defstruct [:resource, :timestamp, :request_id, :source]

  oneof(:resource, 0)
  field(:timestamp, 1, type: :int64)
  field(:request_id, 2, type: :string)
  field(:source, 3, type: :string)
  field(:order, 4, type: Bottle.Fulfillment.V1.Order, oneof: 0)
end
