defmodule Bottle.Fulfillment.V1.TribbleFailed.FailureType do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:FAILURE_TYPE_UNSPECIFIED, 0)
  field(:FAILURE_TYPE_INVALID_ADDRESS, 1)
  field(:FAILURE_TYPE_ALREADY_SHIPPED, 2)
  field(:FAILURE_TYPE_TRIBBLE_ERROR, 3)
end

defmodule Bottle.Fulfillment.V1.OrderCreated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.OrderUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:old, 1, type: Bottle.Fulfillment.V1.Order)
  field(:new, 2, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.TribbleFailed do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
  field(:type, 2, type: Bottle.Fulfillment.V1.TribbleFailed.FailureType, enum: true)
end
