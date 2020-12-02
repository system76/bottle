defmodule Bottle.Inventory.V1.ComponentAvailabilityRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          component: Bottle.Inventory.V1.Component.t() | nil
        }
  defstruct [:request_id, :component]

  field(:request_id, 1, type: :string)
  field(:component, 2, type: Bottle.Inventory.V1.Component)
end

defmodule Bottle.Inventory.V1.ComponentAvailabilityResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          component: Bottle.Inventory.V1.Component.t() | nil,
          available: integer
        }
  defstruct [:request_id, :component, :available]

  field(:request_id, 1, type: :string)
  field(:component, 2, type: Bottle.Inventory.V1.Component)
  field(:available, 3, type: :int32)
end

defmodule Bottle.Inventory.V1.InventoryService.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.inventory.v1.InventoryService"

  rpc(
    :ComponentAvailability,
    Bottle.Inventory.V1.ComponentAvailabilityRequest,
    Bottle.Inventory.V1.ComponentAvailabilityResponse
  )
end

defmodule Bottle.Inventory.V1.InventoryService.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Inventory.V1.InventoryService.Service
end
