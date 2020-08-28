defmodule Bottle.Messages.Order do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: integer,
          user: Bottle.Messages.User.t() | nil,
          shipping: Bottle.Messages.Address.t() | nil,
          billing: Bottle.Messages.Address.t() | nil,
          products: [Bottle.Messages.Product.t()]
        }
  defstruct [:id, :user, :shipping, :billing, :products]

  field :id, 1, type: :int64
  field :user, 2, type: Bottle.Messages.User
  field :shipping, 3, type: Bottle.Messages.Address
  field :billing, 4, type: Bottle.Messages.Address
  field :products, 5, repeated: true, type: Bottle.Messages.Product
end
