defmodule Bottle.Notification.User.V1.PasswordReset do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          reset_key: String.t()
        }
  defstruct [:user, :reset_key]

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:reset_key, 2, type: :string)
end
