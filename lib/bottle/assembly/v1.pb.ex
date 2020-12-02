defmodule Bottle.Assembly.V1.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.assembly.V1"

  rpc(
    :BuildList,
    Bottle.Assembly.V1.BuildListRequest,
    stream(Bottle.Assembly.V1.BuildListResponse)
  )
end

defmodule Bottle.Assembly.V1.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Assembly.V1.Service
end
