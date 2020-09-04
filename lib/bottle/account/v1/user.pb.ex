defmodule Bottle.Account.V1.User do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          first_name: String.t(),
          last_name: String.t(),
          phone_number: String.t()
        }
  defstruct [:id, :first_name, :last_name, :phone_number]

  field(:id, 1, type: :string)
  field(:first_name, 2, type: :string)
  field(:last_name, 3, type: :string)
  field(:phone_number, 4, type: :string)
end
