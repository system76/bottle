defmodule Bottle.Inventory.V1.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.inventory.V1", protoc_gen_elixir_version: "0.11.0"

  rpc(
    :ListComponentAvailability,
    Bottle.Inventory.V1.ListComponentAvailabilityRequest,
    stream(Bottle.Inventory.V1.ListComponentAvailabilityResponse)
  )

  rpc(
    :ListSkuQuantity,
    Bottle.Inventory.V1.ListSkuQuantityRequest,
    stream(Bottle.Inventory.V1.ListSkuQuantityResponse)
  )

  rpc(
    :ListSkuAvailability,
    Bottle.Inventory.V1.ListSkuAvailabilityRequest,
    stream(Bottle.Inventory.V1.ListSkuAvailabilityResponse)
  )

  rpc(
    :GetSkuDetails,
    Bottle.Inventory.V1.GetSkuDetailsRequest,
    Bottle.Inventory.V1.GetSkuDetailsResponse
  )

  rpc(
    :ListLocations,
    Bottle.Inventory.V1.ListLocationsRequest,
    stream(Bottle.Inventory.V1.ListLocationsResponse)
  )
end

defmodule Bottle.Inventory.V1.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Inventory.V1.Service
end
