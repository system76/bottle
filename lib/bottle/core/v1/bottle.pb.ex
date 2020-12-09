defmodule Bottle.Core.V1.Bottle do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          resource: {atom, any},
          timestamp: integer,
          request_id: String.t(),
          source: String.t()
        }
  defstruct [:resource, :timestamp, :request_id, :source]

  oneof(:resource, 0)
  field(:timestamp, 1, type: :int64)
  field(:request_id, 2, type: :string)
  field(:source, 3, type: :string)
  field(:verification_requested, 5, type: Bottle.Fulfillment.V1.VerificationRequested, oneof: 0)
  field(:tribble_failed, 6, type: Bottle.Fulfillment.V1.TribbleFailed, oneof: 0)
  field(:user_created, 7, type: Bottle.Account.V1.UserCreated, oneof: 0)
  field(:password_changed, 8, type: Bottle.Account.V1.PasswordChanged, oneof: 0)
  field(:password_reset, 9, type: Bottle.Account.V1.PasswordReset, oneof: 0)
  field(:organization_created, 10, type: Bottle.Account.V1.OrganizationCreated, oneof: 0)
  field(:organization_joined, 11, type: Bottle.Account.V1.OrganizationJoined, oneof: 0)
  field(:organization_left, 12, type: Bottle.Account.V1.OrganizationLeft, oneof: 0)
  field(:build_created, 13, type: Bottle.Assembly.V1.BuildCreated, oneof: 0)
  field(:build_updated, 14, type: Bottle.Assembly.V1.BuildUpdated, oneof: 0)

  field(:component_availability_updated, 15,
    type: Bottle.Inventory.V1.ComponentAvailabilityUpdated,
    oneof: 0
  )

  field(:question_created, 16, type: Bottle.Support.V1.QuestionCreated, oneof: 0)
  field(:macro_applied, 17, type: Bottle.Support.V1.MacroApplied, oneof: 0)
end
