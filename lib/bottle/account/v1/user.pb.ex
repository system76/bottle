defmodule Bottle.Account.V1.User.AccountType do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :ACCOUNT_TYPE_UNSPECIFIED
          | :ACCOUNT_TYPE_INDIVIDUAL
          | :ACCOUNT_TYPE_BUSINESS
          | :ACCOUNT_TYPE_RESELLER

  field(:ACCOUNT_TYPE_UNSPECIFIED, 0)
  field(:ACCOUNT_TYPE_INDIVIDUAL, 1)
  field(:ACCOUNT_TYPE_BUSINESS, 2)
  field(:ACCOUNT_TYPE_RESELLER, 3)
end

defmodule Bottle.Account.V1.User do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          first_name: String.t(),
          last_name: String.t(),
          phone_number: String.t(),
          email: String.t(),
          newsletter: boolean,
          account_type: Bottle.Account.V1.User.AccountType.t(),
          company_name: String.t()
        }

  defstruct id: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            newsletter: false,
            account_type: :ACCOUNT_TYPE_UNSPECIFIED,
            company_name: ""

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
