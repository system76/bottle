defmodule Bottle.Inventory.V1.ComponentAvailabilityListRequest do
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

defmodule Bottle.Inventory.V1.ComponentAvailabilityListResponse do
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
