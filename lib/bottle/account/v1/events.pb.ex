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
          reset_key: String.t()
        }
  defstruct [:user, :reset_key]

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:reset_key, 2, type: :string)
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
