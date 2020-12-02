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
          build: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:build]

  field(:build, 1, type: Bottle.Assembly.V1.Build)
end
