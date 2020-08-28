defmodule Bottle.Messages.Support.Ticket do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          comment: String.t(),
          submitter: Bottle.Messages.User.t() | nil,
          customer: Bottle.Messages.User.t() | nil,
          order_id: String.t(),
          tags: [String.t()]
        }
  defstruct [:comment, :submitter, :customer, :order_id, :tags]

  field(:comment, 1, type: :string)
  field(:submitter, 2, type: Bottle.Messages.User)
  field(:customer, 3, type: Bottle.Messages.User)
  field(:order_id, 4, type: :string)
  field(:tags, 5, repeated: true, type: :string)
end
