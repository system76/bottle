defmodule Bottle.Assembly.V1.BuildCancelled do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:build, 1, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildCreated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:build, 1, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:old, 1, type: Bottle.Assembly.V1.Build)
  field(:new, 2, type: Bottle.Assembly.V1.Build)
end

defmodule Bottle.Assembly.V1.BuildPicked do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:build, 1, type: Bottle.Assembly.V1.Build)
  field(:location, 2, type: Bottle.Inventory.V1.Location)
  field(:parts, 3, repeated: true, type: Bottle.Inventory.V1.Part)
end

defmodule Bottle.Assembly.V1.ComponentDemandUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:component_id, 1, type: :string, json_name: "componentId")
  field(:quantity, 2, type: :int32)
end
