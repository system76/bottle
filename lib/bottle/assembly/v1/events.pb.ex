defmodule Bottle.Assembly.V1.BuildCancelled do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          build: Bottle.Assembly.V1.Build.t() | nil
        }

  defstruct build: nil

  field(:build, 1, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          build: Bottle.Assembly.V1.Build.t() | nil
        }

  defstruct build: nil

  field(:build, 1, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          old: Bottle.Assembly.V1.Build.t() | nil,
          new: Bottle.Assembly.V1.Build.t() | nil
        }

  defstruct old: nil,
            new: nil

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

  defstruct build: nil,
            location: nil,
            parts: []

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

  defstruct component_id: "",
            quantity: 0

  field(:component_id, 1, type: :string, json_name: "componentId")
  field(:quantity, 2, type: :int32)
end
