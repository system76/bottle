defmodule Bottle.Fulfillment.V1.Event.Event do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t :: integer | :EVENT_UNSPECIFIED | :EVENT_FULLY_SHIPPED

  field(:EVENT_UNSPECIFIED, 0)
  field(:EVENT_FULLY_SHIPPED, 1)
end

defmodule Bottle.Fulfillment.V1.Event do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          event: Bottle.Fulfillment.V1.Event.Event.t(),
          occured_at: String.t()
        }
  defstruct [:event, :occured_at]

  field(:event, 1, type: Bottle.Fulfillment.V1.Event.Event, enum: true)
  field(:occured_at, 2, type: :string)
end
