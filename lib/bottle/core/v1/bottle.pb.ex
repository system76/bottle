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
  field(:order, 4, type: Bottle.Fulfillment.V1.Order, oneof: 0)
  field(:order_verification, 5, type: Bottle.Fulfillment.V1.Verification, oneof: 0)
  field(:assembly_failure, 6, type: Bottle.Notification.Order.V1.AssemblyFailure, oneof: 0)
  field(:password_changed, 7, type: Bottle.Notification.User.V1.PasswordChanged, oneof: 0)
  field(:password_reset, 8, type: Bottle.Notification.User.V1.PasswordReset, oneof: 0)
  field(:user_created, 9, type: Bottle.Notification.User.V1.Created, oneof: 0)
  field(:build_created, 10, type: Bottle.Assembly.V1.BuildCreated, oneof: 0)
  field(:build_updated, 11, type: Bottle.Assembly.V1.BuildUpdated, oneof: 0)

  field(:component_availability_updated, 12,
    type: Bottle.Inventory.V1.ComponentAvailabilityUpdated,
    oneof: 0
  )
end
