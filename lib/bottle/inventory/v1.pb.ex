defmodule Bottle.Inventory.V1.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.inventory.V1"

  rpc(
    :ComponentAvailability,
    Bottle.Inventory.V1.ComponentAvailabilityRequest,
    Bottle.Inventory.V1.ComponentAvailabilityResponse
  )
end

defmodule Bottle.Inventory.V1.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Inventory.V1.Service
end
