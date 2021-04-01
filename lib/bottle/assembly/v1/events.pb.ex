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
