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

  defstruct user: nil

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.UserDeleted do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil
        }

  defstruct user: nil

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.UserUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil
        }

  defstruct user: nil

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.PasswordChanged do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil
        }

  defstruct user: nil

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.PasswordReset do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          reset_url: String.t()
        }

  defstruct user: nil,
            reset_url: ""

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:reset_url, 2, type: :string, json_name: "resetUrl")
end

defmodule Bottle.Account.V1.TwoFactorRequested do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          token: String.t(),
          method: Bottle.Account.V1.TwoFactorRequested.TwoFactorMethod.t()
        }

  defstruct user: nil,
            token: "",
            method: :TWO_FACTOR_METHOD_UNSPECIFIED

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:token, 2, type: :string)
  field(:method, 3, type: Bottle.Account.V1.TwoFactorRequested.TwoFactorMethod, enum: true)
end

defmodule Bottle.Account.V1.TwoFactorRecoveryCodeUsed do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          user: Bottle.Account.V1.User.t() | nil,
          recovery_code: String.t(),
          codes_remaining: integer
        }

  defstruct user: nil,
            recovery_code: "",
            codes_remaining: 0

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:recovery_code, 2, type: :string, json_name: "recoveryCode")
  field(:codes_remaining, 3, type: :int32, json_name: "codesRemaining")
end

defmodule Bottle.Account.V1.OrganizationCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          organization: Bottle.Account.V1.Organization.t() | nil
        }

  defstruct organization: nil

  field(:organization, 1, type: Bottle.Account.V1.Organization)
end

defmodule Bottle.Account.V1.OrganizationJoined do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          organization: Bottle.Account.V1.Organization.t() | nil,
          user: Bottle.Account.V1.User.t() | nil
        }

  defstruct organization: nil,
            user: nil

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

  defstruct organization: nil,
            user: nil

  field(:organization, 1, type: Bottle.Account.V1.Organization)
  field(:user, 2, type: Bottle.Account.V1.User)
end
