defmodule Bottle.Account.V1.NotificationMethodResponse.NotificationMethod do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :NOTIFICATION_METHOD_UNSPECIFIED
          | :NOTIFICATION_METHOD_SMS
          | :NOTIFICATION_METHOD_VOICE
          | :NOTIFICATION_METHOD_EMAIL
          | :NOTIFICATION_METHOD_APP

  field(:NOTIFICATION_METHOD_UNSPECIFIED, 0)
  field(:NOTIFICATION_METHOD_SMS, 1)
  field(:NOTIFICATION_METHOD_VOICE, 2)
  field(:NOTIFICATION_METHOD_EMAIL, 3)
  field(:NOTIFICATION_METHOD_APP, 4)
end

defmodule Bottle.Account.V1.NotificationMethodRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          event_type: String.t(),
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:request_id, :event_type, :user]

  field(:request_id, 1, type: :string)
  field(:event_type, 2, type: :string)
  field(:user, 3, type: Bottle.Account.V1.User)
end

defmodule Bottle.Account.V1.NotificationMethodResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          request_id: String.t(),
          notification_method:
            Bottle.Account.V1.NotificationMethodResponse.NotificationMethod.t(),
          user: Bottle.Account.V1.User.t() | nil
        }
  defstruct [:request_id, :notification_method, :user]

  field(:request_id, 1, type: :string)

  field(:notification_method, 2,
    type: Bottle.Account.V1.NotificationMethodResponse.NotificationMethod,
    enum: true
  )

  field(:user, 3, type: Bottle.Account.V1.User)
end
