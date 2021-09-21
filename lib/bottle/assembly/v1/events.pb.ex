defmodule Bottle.Assembly.V1.BuildCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          build: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:build]

  field(:build, 1, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          old: Bottle.Assembly.V1.Build.t() | nil,
          new: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:old, :new]

  field(:old, 1, type: Bottle.Assembly.V1.Build)
  field(:new, 2, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildPicked do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          build: Bottle.Assembly.V1.Build.t() | nil,
          location: Bottle.Inventory.V1.Location.t() | nil,
          parts: [Bottle.Inventory.V1.Part.t()]
        }
  defstruct [:build, :location, :parts]

  field(:build, 1, type: Bottle.Assembly.V1.Build)
  field(:location, 2, type: Bottle.Inventory.V1.Location)
  field(:parts, 3, repeated: true, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Assembly.V1.ComponentDemandUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          component_id: String.t(),
          quantity: integer
        }
  defstruct [:component_id, :quantity]

  field(:component_id, 1, type: :string)
  field(:quantity, 2, type: :int32)
end
