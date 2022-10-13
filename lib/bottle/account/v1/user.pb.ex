defmodule Bottle.Account.V1.User.AccountType do
  @moduledoc false
  use Protobuf, enum: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:ACCOUNT_TYPE_UNSPECIFIED, 0)
  field(:ACCOUNT_TYPE_INDIVIDUAL, 1)
  field(:ACCOUNT_TYPE_BUSINESS, 2)
  field(:ACCOUNT_TYPE_RESELLER, 3)
end

defmodule Bottle.Account.V1.User do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:first_name, 2, type: :string, json_name: "firstName")
  field(:last_name, 3, type: :string, json_name: "lastName")
  field(:phone_number, 4, type: :string, json_name: "phoneNumber")
  field(:email, 5, type: :string)
  field(:newsletter, 6, type: :bool)

  field(:account_type, 7,
    type: Bottle.Account.V1.User.AccountType,
    json_name: "accountType",
    enum: true
  )

  field(:company_name, 8, type: :string, json_name: "companyName")
end
