defmodule Bottle.Account.V1.Address do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:name, 2, type: :string)
  field(:company, 3, type: :string)
  field(:address1, 4, type: :string)
  field(:address2, 5, type: :string)
  field(:city, 6, type: :string)
  field(:state, 7, type: :string)
  field(:postal_code, 8, type: :string, json_name: "postalCode")
  field(:country, 9, type: :string)
end
