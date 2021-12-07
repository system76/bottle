defmodule Bottle.Core.V1.Bottle do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          resource:
            {:order_created, Bottle.Fulfillment.V1.OrderCreated.t() | nil}
            | {:order_updated, Bottle.Fulfillment.V1.OrderUpdated.t() | nil}
            | {:order_verification_request,
               Bottle.Fulfillment.V1.OrderVerificationRequest.t() | nil}
            | {:order_verification_response,
               Bottle.Fulfillment.V1.OrderVerificationResponse.t() | nil}
            | {:tribble_failed, Bottle.Fulfillment.V1.TribbleFailed.t() | nil}
            | {:user_created, Bottle.Account.V1.UserCreated.t() | nil}
            | {:user_deleted, Bottle.Account.V1.UserDeleted.t() | nil}
            | {:user_updated, Bottle.Account.V1.UserUpdated.t() | nil}
            | {:password_changed, Bottle.Account.V1.PasswordChanged.t() | nil}
            | {:password_reset, Bottle.Account.V1.PasswordReset.t() | nil}
            | {:two_factor_requested, Bottle.Account.V1.TwoFactorRequested.t() | nil}
            | {:two_factor_recovery_code_used,
               Bottle.Account.V1.TwoFactorRecoveryCodeUsed.t() | nil}
            | {:organization_created, Bottle.Account.V1.OrganizationCreated.t() | nil}
            | {:organization_joined, Bottle.Account.V1.OrganizationJoined.t() | nil}
            | {:organization_left, Bottle.Account.V1.OrganizationLeft.t() | nil}
            | {:build_cancelled, Bottle.Assembly.V1.BuildCancelled.t() | nil}
            | {:build_created, Bottle.Assembly.V1.BuildCreated.t() | nil}
            | {:build_updated, Bottle.Assembly.V1.BuildUpdated.t() | nil}
            | {:build_picked, Bottle.Assembly.V1.BuildPicked.t() | nil}
            | {:component_demand_updated, Bottle.Assembly.V1.ComponentDemandUpdated.t() | nil}
            | {:component_availability_updated,
               Bottle.Inventory.V1.ComponentAvailabilityUpdated.t() | nil}
            | {:sku_details_updated, Bottle.Inventory.V1.SkuDetailsUpdated.t() | nil}
            | {:part_created, Bottle.Inventory.V1.PartCreated.t() | nil}
            | {:part_updated, Bottle.Inventory.V1.PartUpdated.t() | nil}
            | {:question_created, Bottle.Support.V1.QuestionCreated.t() | nil}
            | {:macro_applied, Bottle.Support.V1.MacroApplied.t() | nil}
            | {:test_event, Bottle.Core.V1.TestEvent.t() | nil},
          timestamp: integer,
          request_id: String.t(),
          source: String.t()
        }
  defstruct [:resource, :timestamp, :request_id, :source]

  oneof(:resource, 0)

  field(:timestamp, 1, type: :int64)
  field(:request_id, 2, type: :string, json_name: "requestId")
  field(:source, 3, type: :string)

  field(:order_created, 4,
    type: Bottle.Fulfillment.V1.OrderCreated,
    json_name: "orderCreated",
    oneof: 0
  )

  field(:order_updated, 22,
    type: Bottle.Fulfillment.V1.OrderUpdated,
    json_name: "orderUpdated",
    oneof: 0
  )

  field(:order_verification_request, 23,
    type: Bottle.Fulfillment.V1.OrderVerificationRequest,
    json_name: "orderVerificationRequest",
    oneof: 0
  )

  field(:order_verification_response, 24,
    type: Bottle.Fulfillment.V1.OrderVerificationResponse,
    json_name: "orderVerificationResponse",
    oneof: 0
  )

  field(:tribble_failed, 6,
    type: Bottle.Fulfillment.V1.TribbleFailed,
    json_name: "tribbleFailed",
    oneof: 0
  )

  field(:user_created, 7, type: Bottle.Account.V1.UserCreated, json_name: "userCreated", oneof: 0)

  field(:user_deleted, 20, type: Bottle.Account.V1.UserDeleted, json_name: "userDeleted", oneof: 0)

  field(:user_updated, 21, type: Bottle.Account.V1.UserUpdated, json_name: "userUpdated", oneof: 0)

  field(:password_changed, 8,
    type: Bottle.Account.V1.PasswordChanged,
    json_name: "passwordChanged",
    oneof: 0
  )

  field(:password_reset, 9,
    type: Bottle.Account.V1.PasswordReset,
    json_name: "passwordReset",
    oneof: 0
  )

  field(:two_factor_requested, 18,
    type: Bottle.Account.V1.TwoFactorRequested,
    json_name: "twoFactorRequested",
    oneof: 0
  )

  field(:two_factor_recovery_code_used, 19,
    type: Bottle.Account.V1.TwoFactorRecoveryCodeUsed,
    json_name: "twoFactorRecoveryCodeUsed",
    oneof: 0
  )

  field(:organization_created, 10,
    type: Bottle.Account.V1.OrganizationCreated,
    json_name: "organizationCreated",
    oneof: 0
  )

  field(:organization_joined, 11,
    type: Bottle.Account.V1.OrganizationJoined,
    json_name: "organizationJoined",
    oneof: 0
  )

  field(:organization_left, 12,
    type: Bottle.Account.V1.OrganizationLeft,
    json_name: "organizationLeft",
    oneof: 0
  )

  field(:build_cancelled, 31,
    type: Bottle.Assembly.V1.BuildCancelled,
    json_name: "buildCancelled",
    oneof: 0
  )

  field(:build_created, 13,
    type: Bottle.Assembly.V1.BuildCreated,
    json_name: "buildCreated",
    oneof: 0
  )

  field(:build_updated, 14,
    type: Bottle.Assembly.V1.BuildUpdated,
    json_name: "buildUpdated",
    oneof: 0
  )

  field(:build_picked, 28,
    type: Bottle.Assembly.V1.BuildPicked,
    json_name: "buildPicked",
    oneof: 0
  )

  field(:component_demand_updated, 29,
    type: Bottle.Assembly.V1.ComponentDemandUpdated,
    json_name: "componentDemandUpdated",
    oneof: 0
  )

  field(:component_availability_updated, 15,
    type: Bottle.Inventory.V1.ComponentAvailabilityUpdated,
    json_name: "componentAvailabilityUpdated",
    oneof: 0
  )

  field(:sku_details_updated, 30,
    type: Bottle.Inventory.V1.SkuDetailsUpdated,
    json_name: "skuDetailsUpdated",
    oneof: 0
  )

  field(:part_created, 25,
    type: Bottle.Inventory.V1.PartCreated,
    json_name: "partCreated",
    oneof: 0
  )

  field(:part_updated, 26,
    type: Bottle.Inventory.V1.PartUpdated,
    json_name: "partUpdated",
    oneof: 0
  )

  field(:question_created, 16,
    type: Bottle.Support.V1.QuestionCreated,
    json_name: "questionCreated",
    oneof: 0
  )

  field(:macro_applied, 17,
    type: Bottle.Support.V1.MacroApplied,
    json_name: "macroApplied",
    oneof: 0
  )

  field(:test_event, 27, type: Bottle.Core.V1.TestEvent, json_name: "testEvent", oneof: 0)

  def transform_module(), do: nil
end
