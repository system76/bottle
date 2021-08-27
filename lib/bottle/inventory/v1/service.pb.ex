defmodule Bottle.Inventory.V1.ListComponentAvailabilityRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          components: [Bottle.Inventory.V1.Component.t()]
        }
  defstruct [:request_id, :components]

  field(:request_id, 1, type: :string)
  field(:components, 2, repeated: true, type: Bottle.Inventory.V1.Component)
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.AvailableLocation do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          location: Bottle.Inventory.V1.Location.t() | nil,
          available_quantity: integer
        }
  defstruct [:location, :available_quantity]

  field(:location, 1, type: Bottle.Inventory.V1.Location)
  field(:available_quantity, 2, type: :int32)
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          required_quantity_per_kit: integer,
          available_locations: [
            Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.AvailableLocation.t()
          ]
        }
  defstruct [:sku, :required_quantity_per_kit, :available_locations]

  field(:sku, 1, type: Bottle.Inventory.V1.Sku)
  field(:required_quantity_per_kit, 2, type: :int32)

  field(:available_locations, 3,
    repeated: true,
    type: Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.AvailableLocation
  )
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          component: Bottle.Inventory.V1.Component.t() | nil,
          total_available_quantity: integer,
          picking_options: [
            Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.t()
          ]
        }
  defstruct [:request_id, :component, :total_available_quantity, :picking_options]

  field(:request_id, 1, type: :string)
  field(:component, 2, type: Bottle.Inventory.V1.Component)
  field(:total_available_quantity, 3, type: :int32)

  field(:picking_options, 4,
    repeated: true,
    type: Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption
  )
end

defmodule Bottle.Inventory.V1.ListSkuAvailabilityRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil
        }
  defstruct [:request_id, :sku]

  field(:request_id, 1, type: :string)
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
end

defmodule Bottle.Inventory.V1.ListSkuAvailabilityResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          location: Bottle.Inventory.V1.Location.t() | nil,
          available_quantity: integer
        }
  defstruct [:request_id, :sku, :location, :available_quantity]

  field(:request_id, 1, type: :string)
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:location, 3, type: Bottle.Inventory.V1.Location)
  field(:available_quantity, 4, type: :int32)
end

defmodule Bottle.Inventory.V1.ListLocationsRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          locations: [Bottle.Inventory.V1.Location.t()]
        }
  defstruct [:request_id, :locations]

  field(:request_id, 1, type: :string)
  field(:locations, 2, repeated: true, type: Bottle.Inventory.V1.Location)
end

defmodule Bottle.Inventory.V1.ListLocationsResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          location: Bottle.Inventory.V1.Location.t() | nil
        }
  defstruct [:request_id, :location]

  field(:request_id, 1, type: :string)
  field(:location, 2, type: Bottle.Inventory.V1.Location)
end
