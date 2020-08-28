defmodule Bottle.Messages.Address do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          name: String.t(),
          company: String.t(),
          address1: String.t(),
          address2: String.t(),
          city: String.t(),
          state: String.t(),
          postal_code: String.t(),
          country: String.t()
        }
  defstruct [:id, :name, :company, :address1, :address2, :city, :state, :postal_code, :country]

  field :id, 1, type: :string
  field :name, 2, type: :string
  field :company, 3, type: :string
  field :address1, 4, type: :string
  field :address2, 5, type: :string
  field :city, 6, type: :string
  field :state, 7, type: :string
  field :postal_code, 8, type: :string
  field :country, 9, type: :string
end
