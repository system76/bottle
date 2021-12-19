defmodule Bottle.Assembly.V1.Build.BuildStatus do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :BUILD_STATUS_UNSPECIFIED
          | :BUILD_STATUS_INCOMPLETE
          | :BUILD_STATUS_READY
          | :BUILD_STATUS_BUILT
          | :BUILD_STATUS_INPROGRESS

  field(:BUILD_STATUS_UNSPECIFIED, 0)
  field(:BUILD_STATUS_INCOMPLETE, 1)
  field(:BUILD_STATUS_READY, 2)
  field(:BUILD_STATUS_BUILT, 3)
  field(:BUILD_STATUS_INPROGRESS, 4)
end

defmodule Bottle.Assembly.V1.Build.BuildComponent do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          component: Bottle.Inventory.V1.Component.t() | nil,
          quantity: integer
        }

  defstruct component: nil,
            quantity: 0

  field(:component, 1, type: Bottle.Inventory.V1.Component)
  field(:quantity, 2, type: :int32)
end

defmodule Bottle.Assembly.V1.Build do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          status: Bottle.Assembly.V1.Build.BuildStatus.t(),
          build_components: [Bottle.Assembly.V1.Build.BuildComponent.t()],
          missing_components: [Bottle.Assembly.V1.Build.BuildComponent.t()],
          model: String.t(),
          order: Bottle.Fulfillment.V1.Order.t() | nil,
          created_at: String.t(),
          updated_at: String.t()
        }

  defstruct id: "",
            status: :BUILD_STATUS_UNSPECIFIED,
            build_components: [],
            missing_components: [],
            model: "",
            order: nil,
            created_at: "",
            updated_at: ""

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
