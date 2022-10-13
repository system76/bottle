defmodule Bottle.Inventory.V1.ComponentAvailabilityUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:component, 1, type: Bottle.Inventory.V1.Component)
  field(:quantity, 2, type: :int32)
end

defmodule Bottle.Inventory.V1.SkuDetailsUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:sku, 1, type: Bottle.Inventory.V1.Sku)
  field(:available_quantity, 3, type: :int32, json_name: "availableQuantity")
  field(:demand_quantity, 4, type: :int32, json_name: "demandQuantity")
  field(:excess_quantity, 5, type: :int32, json_name: "excessQuantity")
end

defmodule Bottle.Inventory.V1.PartCreated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:part, 1, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Inventory.V1.PartUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:old, 1, type: Bottle.Inventory.V1.Part)
  field(:new, 2, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Inventory.V1.ComponentKitChanged do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:component, 1, type: Bottle.Inventory.V1.Component)
end
