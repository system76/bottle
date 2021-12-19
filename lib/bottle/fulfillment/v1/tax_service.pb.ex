defmodule Bottle.Fulfillment.V1.TaxCalculateRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          order: Bottle.Fulfillment.V1.Order.t() | nil
        }

  defstruct request_id: "",
            order: nil

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:order, 2, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.TaxCalculateResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          order: Bottle.Fulfillment.V1.Order.t() | nil
        }

  defstruct request_id: "",
            order: nil

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:order, 2, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.TaxService.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.fulfillment.v1.TaxService"

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
