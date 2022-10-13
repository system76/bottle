defmodule Bottle.Fulfillment.V1.Event.Event do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:EVENT_UNSPECIFIED, 0)
  field(:EVENT_FULLY_SHIPPED, 1)
end

defmodule Bottle.Fulfillment.V1.Event do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:event, 1, type: Bottle.Fulfillment.V1.Event.Event, enum: true)
  field(:occured_at, 2, type: :string, json_name: "occuredAt")
end
