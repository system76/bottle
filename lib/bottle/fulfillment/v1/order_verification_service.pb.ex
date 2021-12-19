defmodule Bottle.Fulfillment.V1.OrderVerificationRequest do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          order: Bottle.Fulfillment.V1.Order.t() | nil
        }

  defstruct order: nil

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
end

defmodule Bottle.Fulfillment.V1.OrderVerificationResponse do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          order: Bottle.Fulfillment.V1.Order.t() | nil,
          flags: [String.t()]
        }

  defstruct order: nil,
            flags: []

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
  field(:flags, 2, repeated: true, type: :string)
end
