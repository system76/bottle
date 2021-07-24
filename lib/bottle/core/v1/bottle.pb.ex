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
  field(:order_created, 4, type: Bottle.Fulfillment.V1.OrderCreated, oneof: 0)
  field(:order_updated, 22, type: Bottle.Fulfillment.V1.OrderUpdated, oneof: 0)

  field(:order_verification_request, 23,
    type: Bottle.Fulfillment.V1.OrderVerificationRequest,
    oneof: 0
  )

  field(:order_verification_response, 24,
    type: Bottle.Fulfillment.V1.OrderVerificationResponse,
    oneof: 0
  )

  field(:tribble_failed, 6, type: Bottle.Fulfillment.V1.TribbleFailed, oneof: 0)
  field(:user_created, 7, type: Bottle.Account.V1.UserCreated, oneof: 0)
  field(:user_deleted, 20, type: Bottle.Account.V1.UserDeleted, oneof: 0)
  field(:user_updated, 21, type: Bottle.Account.V1.UserUpdated, oneof: 0)
  field(:password_changed, 8, type: Bottle.Account.V1.PasswordChanged, oneof: 0)
  field(:password_reset, 9, type: Bottle.Account.V1.PasswordReset, oneof: 0)
  field(:two_factor_requested, 18, type: Bottle.Account.V1.TwoFactorRequested, oneof: 0)

  field(:two_factor_recovery_code_used, 19,
    type: Bottle.Account.V1.TwoFactorRecoveryCodeUsed,
    oneof: 0
  )

  field(:organization_created, 10, type: Bottle.Account.V1.OrganizationCreated, oneof: 0)
  field(:organization_joined, 11, type: Bottle.Account.V1.OrganizationJoined, oneof: 0)
  field(:organization_left, 12, type: Bottle.Account.V1.OrganizationLeft, oneof: 0)
  field(:build_created, 13, type: Bottle.Assembly.V1.BuildCreated, oneof: 0)
  field(:build_updated, 14, type: Bottle.Assembly.V1.BuildUpdated, oneof: 0)

  field(:component_availability_updated, 15,
    type: Bottle.Inventory.V1.ComponentAvailabilityUpdated,
    oneof: 0
  )

  field(:part_created, 25, type: Bottle.Inventory.V1.PartCreated, oneof: 0)
  field(:part_updated, 26, type: Bottle.Inventory.V1.PartUpdated, oneof: 0)
  field(:question_created, 16, type: Bottle.Support.V1.QuestionCreated, oneof: 0)
  field(:macro_applied, 17, type: Bottle.Support.V1.MacroApplied, oneof: 0)
  field(:test_event, 27, type: Bottle.Core.V1.TestEvent, oneof: 0)
end
