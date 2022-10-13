defmodule Bottle.Assembly.V1.Build.BuildStatus do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:BUILD_STATUS_UNSPECIFIED, 0)
  field(:BUILD_STATUS_INCOMPLETE, 1)
  field(:BUILD_STATUS_READY, 2)
  field(:BUILD_STATUS_BUILT, 3)
  field(:BUILD_STATUS_INPROGRESS, 4)
end

defmodule Bottle.Assembly.V1.Build.BuildComponent do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:component, 1, type: Bottle.Inventory.V1.Component)
  field(:quantity, 2, type: :int32)
end

defmodule Bottle.Assembly.V1.Build do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:status, 2, type: Bottle.Assembly.V1.Build.BuildStatus, enum: true)

  field(:build_components, 3,
    repeated: true,
    type: Bottle.Assembly.V1.Build.BuildComponent,
    json_name: "buildComponents"
  )

  field(:missing_components, 8,
    repeated: true,
    type: Bottle.Assembly.V1.Build.BuildComponent,
    json_name: "missingComponents"
  )

  field(:model, 4, type: :string)
  field(:order, 5, type: Bottle.Fulfillment.V1.Order)
  field(:created_at, 6, type: :string, json_name: "createdAt")
  field(:updated_at, 7, type: :string, json_name: "updatedAt")
end
