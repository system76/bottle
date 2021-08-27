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

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          component: Bottle.Inventory.V1.Component.t() | nil,
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          location: Bottle.Inventory.V1.Location.t() | nil,
          required_quantity_per_kit: integer,
          available_quantity: integer
        }
  defstruct [
    :request_id,
    :component,
    :sku,
    :location,
    :required_quantity_per_kit,
    :available_quantity
  ]

  field(:request_id, 1, type: :string)
  field(:component, 2, type: Bottle.Inventory.V1.Component)
  field(:sku, 3, type: Bottle.Inventory.V1.Sku)
  field(:location, 4, type: Bottle.Inventory.V1.Location)
  field(:required_quantity_per_kit, 5, type: :int32)
  field(:available_quantity, 6, type: :int32)
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
