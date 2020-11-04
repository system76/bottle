defmodule Bottle.Notification.User.V1.Created do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:user]

  field(:user, 1, type: Bottle.Account.V1.User)
end
