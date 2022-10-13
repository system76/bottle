defmodule Bottle.Assembly.V1.GetBuildRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:build, 2, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.GetBuildResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:build, 2, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.ListPickableBuildsRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
end

defmodule Bottle.Assembly.V1.ListPickableBuildsResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:build, 2, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.ListComponentDemandsRequest do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
end

defmodule Bottle.Assembly.V1.ListComponentDemandsResponse do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:request_id, 1, type: :string, json_name: "requestId")
  field(:component_id, 3, type: :string, json_name: "componentId")
  field(:demand_quantity, 2, type: :int32, json_name: "demandQuantity")
end
