defmodule Bottle.Support.V1.Question.CustomFieldsEntry do
  @moduledoc false
  use Protobuf, map: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:key, 1, type: :string)
  field(:value, 2, type: :string)
end

defmodule Bottle.Support.V1.Question do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:subject, 2, type: :string)
  field(:message, 3, type: :string)
  field(:tags, 4, repeated: true, type: :string)

  field(:custom_fields, 5,
    repeated: true,
    type: Bottle.Support.V1.Question.CustomFieldsEntry,
    json_name: "customFields",
    map: true
  )

  field(:customer, 6, type: Bottle.Account.V1.User)
  field(:submitter, 7, type: Bottle.Account.V1.User)
end
