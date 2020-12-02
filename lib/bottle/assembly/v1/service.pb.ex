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
          builds: [Bottle.Assembly.V1.Build.t()]
        }
  defstruct [:request_id, :builds]

  field(:request_id, 1, type: :string)
  field(:builds, 2, repeated: true, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.AssemblyService.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.assembly.v1.AssemblyService"

  rpc(:BuildList, Bottle.Assembly.V1.BuildListRequest, Bottle.Assembly.V1.BuildListResponse)
end

defmodule Bottle.Assembly.V1.AssemblyService.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Assembly.V1.AssemblyService.Service
end
