defmodule Bottle.Inventory.V1.ListComponentAvailabilityRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:components, 2, repeated: true, type: Bottle.Inventory.V1.Component)
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku.PickingLocation do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:location, 1, type: Bottle.Inventory.V1.Location)
  field(:available_quantity, 2, type: :int32, json_name: "availableQuantity")
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

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
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:available_quantity, 1, type: :int32, json_name: "availableQuantity")
  field(:required_quantity, 2, type: :int32, json_name: "requiredQuantity")

  field(:skus, 3,
    repeated: true,
    type: Bottle.Inventory.V1.ListComponentAvailabilityResponse.PickingOption.PickingSku
  )
end

defmodule Bottle.Inventory.V1.ListComponentAvailabilityResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

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
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
end

defmodule Bottle.Inventory.V1.ListSkuQuantityResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 3, type: :int32, json_name: "availableQuantity")
  field(:demand_quantity, 4, type: :int32, json_name: "demandQuantity")
  field(:excess_quantity, 5, type: :int32, json_name: "excessQuantity")
end

defmodule Bottle.Inventory.V1.ListSkuAvailabilityRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
end

defmodule Bottle.Inventory.V1.ListSkuAvailabilityResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:location, 3, type: Bottle.Inventory.V1.Location)
end

defmodule Bottle.Inventory.V1.GetSkuDetailsRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
end

defmodule Bottle.Inventory.V1.GetSkuDetailsResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:sku, 2, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 3, type: :int32, json_name: "availableQuantity")
  field(:demand_quantity, 4, type: :int32, json_name: "demandQuantity")
  field(:excess_quantity, 5, type: :int32, json_name: "excessQuantity")
end

defmodule Bottle.Inventory.V1.ListLocationsRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:locations, 2, repeated: true, type: Bottle.Inventory.V1.Location)
end

defmodule Bottle.Inventory.V1.ListLocationsResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:location, 2, type: Bottle.Inventory.V1.Location)
end
