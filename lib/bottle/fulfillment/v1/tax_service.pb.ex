defmodule Bottle.Fulfillment.V1.TaxCalculateRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:order, 2, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.TaxCalculateResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:order, 2, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.TaxService.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.fulfillment.v1.TaxService", protoc_gen_elixir_version: "0.11.0"

  rpc(
    :TaxCalculate,
    Bottle.Fulfillment.V1.TaxCalculateRequest,
    Bottle.Fulfillment.V1.TaxCalculateResponse
  )
end

defmodule Bottle.Fulfillment.V1.TaxService.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Fulfillment.V1.TaxService.Service
end
