defmodule Bottle.Support.V1.Question.CustomFieldsEntry do
  @moduledoc false
  use Protobuf, map: true, syntax: :proto3

  @type t :: %__MODULE__{
          key: String.t(),
          value: String.t()
        }
  defstruct [:key, :value]

  field(:key, 1, type: :string)
  field(:value, 2, type: :string)

  def transform_module(), do: nil
end

defmodule Bottle.Support.V1.Question do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          subject: String.t(),
          message: String.t(),
          tags: [String.t()],
          custom_fields: %{String.t() => String.t()},
          customer: Bottle.Account.V1.User.t() | nil,
          submitter: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:id, :subject, :message, :tags, :custom_fields, :customer, :submitter]

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

  def transform_module(), do: nil
end
