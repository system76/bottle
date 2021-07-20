defmodule Bottle.Assembly.V1.BuildListRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t()
        }
  defstruct [:request_id]

  field(:request_id, 1, type: :string)
end

defmodule Bottle.Assembly.V1.BuildListResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          build: Bottle.Assembly.V1.Build.t() | nil
        }
  defstruct [:request_id, :build]

  field(:request_id, 1, type: :string)
  field(:build, 2, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.ComponentDemandRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t()
        }
  defstruct [:request_id]

  field(:request_id, 1, type: :string)
end

defmodule Bottle.Assembly.V1.ComponentDemandResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          demand_quantity: integer
        }
  defstruct [:request_id, :demand_quantity]

  field(:request_id, 1, type: :string)
  field(:demand_quantity, 2, type: :int32)
end
