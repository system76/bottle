defmodule Bottle.Inventory.V1.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.inventory.V1"

  rpc(
    :ListComponentAvailability,
    Bottle.Inventory.V1.ListComponentAvailabilityRequest,
    stream(Bottle.Inventory.V1.ListComponentAvailabilityResponse)
  )

  rpc(
    :ListSkuAvailability,
    Bottle.Inventory.V1.ListSkuAvailabilityRequest,
    stream(Bottle.Inventory.V1.ListSkuAvailabilityResponse)
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
