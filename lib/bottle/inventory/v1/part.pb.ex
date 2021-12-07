defmodule Bottle.Inventory.V1.Part do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          serial_number: String.t(),
          sku: Bottle.Inventory.V1.Sku.t() | nil,
          location: Bottle.Inventory.V1.Location.t() | nil,
          rma_description: String.t()
        }
  defstruct [:id, :serial_number, :sku, :location, :rma_description]

  field(:id, 1, type: :string)
  field(:serial_number, 2, type: :string, json_name: "serialNumber")
  field(:sku, 3, type: Bottle.Inventory.V1.Sku)
  field(:location, 4, type: Bottle.Inventory.V1.Location)
  field(:rma_description, 5, type: :string, json_name: "rmaDescription")

  def transform_module(), do: nil
end
