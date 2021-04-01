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

defmodule Bottle.Inventory.V1.LocationListRequest do
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

defmodule Bottle.Inventory.V1.LocationListResponse do
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
