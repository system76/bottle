defmodule Bottle.Account.V1.Service do
  @moduledoc false
  use GRPC.Service, name: "bottle.account.V1"

  rpc(
    :NotificationMethod,
    Bottle.Account.V1.NotificationMethodRequest,
    Bottle.Account.V1.NotificationMethodResponse
  )
end

defmodule Bottle.Account.V1.Stub do
  @moduledoc false
  use GRPC.Stub, service: Bottle.Account.V1.Service
end
