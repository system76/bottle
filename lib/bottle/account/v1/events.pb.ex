defmodule Bottle.Account.V1.TwoFactorRequested.TwoFactorMethod do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :TWO_FACTOR_METHOD_UNSPECIFIED
          | :TWO_FACTOR_METHOD_SMS
          | :TWO_FACTOR_METHOD_VOICE

  field(:TWO_FACTOR_METHOD_UNSPECIFIED, 0)
  field(:TWO_FACTOR_METHOD_SMS, 1)
  field(:TWO_FACTOR_METHOD_VOICE, 2)
end

defmodule Bottle.Account.V1.UserCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:user]

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.PasswordChanged do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:user]

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.PasswordReset do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          reset_url: String.t()
        }
  defstruct [:user, :reset_url]

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:reset_url, 2, type: :string)
end

defmodule Bottle.Account.V1.TwoFactorRequested do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          token: String.t(),
          phone_number: String.t(),
          method: String.t()
        }
  defstruct [:user, :token, :phone_number, :method]

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:token, 2, type: :string)
  field(:phone_number, 3, type: :string)
  field(:method, 4, type: :string)
end

defmodule Bottle.Account.V1.TwoFactorRecoveryCodeUsed do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          recovery_code: String.t(),
          codes_remaining: integer
        }
  defstruct [:user, :recovery_code, :codes_remaining]

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:recovery_code, 2, type: :string)
  field(:codes_remaining, 3, type: :int32)
end

defmodule Bottle.Account.V1.OrganizationCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          organization: Bottle.Account.V1.Organization.t() | nil
        }
  defstruct [:organization]

  field(:organization, 1, type: Bottle.Account.V1.Organization)
end

defmodule Bottle.Account.V1.OrganizationJoined do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          organization: Bottle.Account.V1.Organization.t() | nil,
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:organization, :user]

  field(:organization, 1, type: Bottle.Account.V1.Organization)
  field(:user, 2, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.OrganizationLeft do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          organization: Bottle.Account.V1.Organization.t() | nil,
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:organization, :user]

  field(:organization, 1, type: Bottle.Account.V1.Organization)
  field(:user, 2, type: Bottle.Account.V1.User)
end
