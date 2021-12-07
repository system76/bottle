defmodule Bottle.Assembly.V1.GetBuildRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          build: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:request_id, :build]

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:build, 2, type: Bottle.Assembly.V1.Build)

  def transform_module(), do: nil
end

defmodule Bottle.Assembly.V1.GetBuildResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          build: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:request_id, :build]

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:build, 2, type: Bottle.Assembly.V1.Build)

  def transform_module(), do: nil
end

defmodule Bottle.Assembly.V1.ListPickableBuildsRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t()
        }
  defstruct [:request_id]

  field(:request_id, 1, type: :string, json_name: "requestId")

  def transform_module(), do: nil
end

defmodule Bottle.Assembly.V1.ListPickableBuildsResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          build: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:request_id, :build]

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:build, 2, type: Bottle.Assembly.V1.Build)

  def transform_module(), do: nil
end

defmodule Bottle.Assembly.V1.ListComponentDemandsRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t()
        }
  defstruct [:request_id]

  field(:request_id, 1, type: :string, json_name: "requestId")

  def transform_module(), do: nil
end

defmodule Bottle.Assembly.V1.ListComponentDemandsResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          component_id: String.t(),
          demand_quantity: integer
        }
  defstruct [:request_id, :component_id, :demand_quantity]

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:component_id, 3, type: :string, json_name: "componentId")
  field(:demand_quantity, 2, type: :int32, json_name: "demandQuantity")

  def transform_module(), do: nil
end
