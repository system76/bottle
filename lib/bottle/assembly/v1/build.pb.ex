defmodule Bottle.Assembly.V1.Build.BuildStatus do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :BUILD_STATUS_UNSPECIFIED
          | :BUILD_STATUS_INCOMPLETE
          | :BUILD_STATUS_READY
          | :BUILD_STATUS_BUILT

  field(:BUILD_STATUS_UNSPECIFIED, 0)
  field(:BUILD_STATUS_INCOMPLETE, 1)
  field(:BUILD_STATUS_READY, 2)
  field(:BUILD_STATUS_BUILT, 3)
end

defmodule Bottle.Assembly.V1.Build.BuildComponent do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          component: Bottle.Inventory.V1.Component.t() | nil,
          quantity: integer
        }
  defstruct [:component, :quantity]

  field(:component, 1, type: Bottle.Inventory.V1.Component)
  field(:quantity, 2, type: :int32)
end

defmodule Bottle.Assembly.V1.Build do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          status: Bottle.Assembly.V1.Build.BuildStatus.t(),
          build_components: [Bottle.Assembly.V1.Build.BuildComponent.t()]
        }
  defstruct [:id, :status, :build_components]

  field(:id, 1, type: :string)
  field(:status, 2, type: Bottle.Assembly.V1.Build.BuildStatus, enum: true)
  field(:build_components, 3, repeated: true, type: Bottle.Assembly.V1.Build.BuildComponent)
end
