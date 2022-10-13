defmodule Bottle.Account.V1.TwoFactorRequested.TwoFactorMethod do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:TWO_FACTOR_METHOD_UNSPECIFIED, 0)
  field(:TWO_FACTOR_METHOD_SMS, 1)
  field(:TWO_FACTOR_METHOD_VOICE, 2)
end

defmodule Bottle.Account.V1.UserCreated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.UserDeleted do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.UserUpdated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.PasswordChanged do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.PasswordReset do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:reset_url, 2, type: :string, json_name: "resetUrl")
end

defmodule Bottle.Account.V1.TwoFactorRequested do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:token, 2, type: :string)
  field(:method, 3, type: Bottle.Account.V1.TwoFactorRequested.TwoFactorMethod, enum: true)
end

defmodule Bottle.Account.V1.TwoFactorRecoveryCodeUsed do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:user, 1, type: Bottle.Account.V1.User)
  field(:recovery_code, 2, type: :string, json_name: "recoveryCode")
  field(:codes_remaining, 3, type: :int32, json_name: "codesRemaining")
end

defmodule Bottle.Account.V1.OrganizationCreated do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:organization, 1, type: Bottle.Account.V1.Organization)
end

defmodule Bottle.Account.V1.OrganizationJoined do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:organization, 1, type: Bottle.Account.V1.Organization)
  field(:user, 2, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.OrganizationLeft do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:organization, 1, type: Bottle.Account.V1.Organization)
  field(:user, 2, type: Bottle.Account.V1.User)
end
