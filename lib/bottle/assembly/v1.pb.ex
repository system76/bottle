defmodule Bottle.Assembly.V1.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.assembly.V1"

  rpc(:GetBuild, Bottle.Assembly.V1.GetBuildRequest, Bottle.Assembly.V1.GetBuildResponse)

  rpc(
    :ListPickableBuilds,
    Bottle.Assembly.V1.ListPickableBuildsRequest,
    stream(Bottle.Assembly.V1.ListPickableBuildsResponse)
  )

  rpc(
    :ListComponentDemands,
    Bottle.Assembly.V1.ListComponentDemandsRequest,
    stream(Bottle.Assembly.V1.ListComponentDemandsResponse)
  )
end

defmodule Bottle.Assembly.V1.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Assembly.V1.Service
end
