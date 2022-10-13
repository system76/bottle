defmodule Bottle.Fulfillment.V1.OrderVerificationRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.OrderVerificationResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
  field(:flags, 2, repeated: true, type: :string)
end
