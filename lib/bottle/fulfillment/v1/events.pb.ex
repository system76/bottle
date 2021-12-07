defmodule Bottle.Fulfillment.V1.TribbleFailed.FailureType do
  @moduledoc false
  use Protobuf, enum: true, syntax: :proto3

  @type t ::
          integer
          | :FAILURE_TYPE_UNSPECIFIED
          | :FAILURE_TYPE_INVALID_ADDRESS
          | :FAILURE_TYPE_ALREADY_SHIPPED
          | :FAILURE_TYPE_TRIBBLE_ERROR

  field(:FAILURE_TYPE_UNSPECIFIED, 0)
  field(:FAILURE_TYPE_INVALID_ADDRESS, 1)
  field(:FAILURE_TYPE_ALREADY_SHIPPED, 2)
  field(:FAILURE_TYPE_TRIBBLE_ERROR, 3)
end

defmodule Bottle.Fulfillment.V1.OrderCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          order: Bottle.Fulfillment.V1.Order.t() | nil
        }
  defstruct [:order]

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)

  def transform_module(), do: nil
end

defmodule Bottle.Fulfillment.V1.OrderUpdated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          old: Bottle.Fulfillment.V1.Order.t() | nil,
          new: Bottle.Fulfillment.V1.Order.t() | nil
        }
  defstruct [:old, :new]

  field(:old, 1, type: Bottle.Fulfillment.V1.Order)
  field(:new, 2, type: Bottle.Fulfillment.V1.Order)

  def transform_module(), do: nil
end

defmodule Bottle.Fulfillment.V1.TribbleFailed do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          order: Bottle.Fulfillment.V1.Order.t() | nil,
          type: Bottle.Fulfillment.V1.TribbleFailed.FailureType.t()
        }
  defstruct [:order, :type]

  field(:order, 1, type: Bottle.Fulfillment.V1.Order)
  field(:type, 2, type: Bottle.Fulfillment.V1.TribbleFailed.FailureType, enum: true)

  def transform_module(), do: nil
end
