defmodule Bottle.Inventory.V1.Part do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:id, 1, type: :string)
  field(:serial_number, 2, type: :string, json_name: "serialNumber")
  field(:sku, 3, type: Bottle.Inventory.V1.Sku)
  field(:location, 4, type: Bottle.Inventory.V1.Location)
  field(:rma_description, 5, type: :string, json_name: "rmaDescription")
end
