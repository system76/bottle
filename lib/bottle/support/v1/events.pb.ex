defmodule Bottle.Support.V1.QuestionCreated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:question, 1, type: Bottle.Support.V1.Question)
end

defmodule Bottle.Support.V1.MacroApplied do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:question, 1, type: Bottle.Support.V1.Question)
  field(:macros, 2, repeated: true, type: :string)
end
