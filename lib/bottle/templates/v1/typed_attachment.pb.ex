defmodule Bottle.Templates.V1.TypedAttachment do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:type, 1, type: :string)
  field(:source, 2, type: :string)
end
