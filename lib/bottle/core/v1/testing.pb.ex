defmodule Bottle.Core.V1.TestEvent do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          text: String.t()
        }
  defstruct [:id, :text]

  field(:id, 1, type: :string)
  field(:text, 2, type: :string)
end
