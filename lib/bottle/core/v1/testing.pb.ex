defmodule Bottle.Core.V1.TestEvent do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:text, 2, type: :string)
end
