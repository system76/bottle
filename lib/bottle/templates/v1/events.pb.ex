defmodule Bottle.Templates.V1.TemplatedEmail.FormVariablesEntry do
  @moduledoc false
  use Protobuf, map: true, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:key, 1, type: :string)
  field(:value, 2, type: :string)
end

defmodule Bottle.Templates.V1.TemplatedEmail do
  @moduledoc false
  use Protobuf, protoc_gen_elixir_version: "0.11.0", syntax: :proto3

  field(:template_name, 1, type: :string, json_name: "templateName")

  field(:form_variables, 2,
    repeated: true,
    type: Bottle.Templates.V1.TemplatedEmail.FormVariablesEntry,
    json_name: "formVariables",
    map: true
  )

  field(:email_from, 3, type: :string, json_name: "emailFrom")
  field(:email_to, 4, type: :string, json_name: "emailTo")
  field(:subject, 5, type: :string)
  field(:attachments, 6, repeated: true, type: Bottle.Templates.V1.TypedAttachment)
end
