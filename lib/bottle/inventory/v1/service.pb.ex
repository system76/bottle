defmodule Bottle.Inventory.V1.ListComponentAvailabilityRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          components: [Bottle.Inventory.V1.Component.t()]
        }

  defstruct request_id: "",
            components: []

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:components, 2, repeated: true, type: Bottle.Inventory.V1.Component)
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku.PickingLocation do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          location: Bottle.Inventory.V1.Location.t() | nil,
          available_quantity: integer
        }

  defstruct location: nil,
            available_quantity: 0

  field(:location, 1, type: Bottle.Inventory.V1.Location)
  field(:available_quantity, 2, type: :int32, json_name: "availableQuantity")
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          available_quantity: integer,
          required_quantity: integer,
          locations: [
            Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku.PickingLocation.t()
          ]
        }

  defstruct sku: nil,
            available_quantity: 0,
            required_quantity: 0,
            locations: []

  field(:sku, 1, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 2, type: :int32, json_name: "availableQuantity")
  field(:required_quantity, 3, type: :int32, json_name: "requiredQuantity")

  field(:locations, 4,
    repeated: true,
    type:
      Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku.PickingLocation
  )
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          available_quantity: integer,
          required_quantity: integer,
          skus: [
            Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku.t()
          ]
        }

  defstruct available_quantity: 0,
            required_quantity: 0,
            skus: []

  field(:available_quantity, 1, type: :int32, json_name: "availableQuantity")
  field(:required_quantity, 2, type: :int32, json_name: "requiredQuantity")

  field(:skus, 3,
    repeated: true,
    type: Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku
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

  defstruct request_id: "",
            component: nil,
            total_available_quantity: 0,
            picking_options: []

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:component, 2, type: Bottle.Inventory.V1.Component)
  field(:total_available_quantity, 3, type: :int32, json_name: "totalAvailableQuantity")

  field(:picking_options, 4,
    repeated: true,
    type: Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption,
    json_name: "pickingOptions"
  )
end

defmodule Bottle.Inventory.V1.ListSkuQuantityRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t()
        }

  defstruct request_id: ""

  field(:request_id, 1, type: :string, json_name: "requestId")
end

defmodule Bottle.Inventory.V1.ListSkuQuantityResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          available_quantity: integer,
          demand_quantity: integer,
          excess_quantity: integer
        }

  defstruct request_id: "",
            sku: nil,
            available_quantity: 0,
            demand_quantity: 0,
            excess_quantity: 0

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 3, type: :int32, json_name: "availableQuantity")
  field(:demand_quantity, 4, type: :int32, json_name: "demandQuantity")
  field(:excess_quantity, 5, type: :int32, json_name: "excessQuantity")
end

defmodule Bottle.Inventory.V1.ListSkuAvailabilityRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil
        }

  defstruct request_id: "",
            sku: nil

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
end

defmodule Bottle.Inventory.V1.ListSkuAvailabilityResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          location: Bottle.Inventory.V1.Location.t() | nil
        }

  defstruct request_id: "",
            sku: nil,
            location: nil

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:location, 3, type: Bottle.Inventory.V1.Location)
end

defmodule Bottle.Inventory.V1.GetSkuDetailsRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil
        }

  defstruct request_id: "",
            sku: nil

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
end

defmodule Bottle.Inventory.V1.GetSkuDetailsResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          available_quantity: integer,
          demand_quantity: integer,
          excess_quantity: integer
        }

  defstruct request_id: "",
            sku: nil,
            available_quantity: 0,
            demand_quantity: 0,
            excess_quantity: 0

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 3, type: :int32, json_name: "availableQuantity")
  field(:demand_quantity, 4, type: :int32, json_name: "demandQuantity")
  field(:excess_quantity, 5, type: :int32, json_name: "excessQuantity")
end

defmodule Bottle.Inventory.V1.ListLocationsRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          locations: [Bottle.Inventory.V1.Location.t()]
        }

  defstruct request_id: "",
            locations: []

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:locations, 2, repeated: true, type: Bottle.Inventory.V1.Location)
end

defmodule Bottle.Inventory.V1.ListLocationsResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          location: Bottle.Inventory.V1.Location.t() | nil
        }

  defstruct request_id: "",
            location: nil

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:location, 2, type: Bottle.Inventory.V1.Location)
end
