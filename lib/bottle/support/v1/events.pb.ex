defmodule Bottle.Support.V1.QuestionCreated do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          question: Bottle.Support.V1.Question.t() | nil
        }

  defstruct question: nil

  field(:question, 1, type: Bottle.Support.V1.Question)
end

defmodule Bottle.Support.V1.MacroApplied do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          question: Bottle.Support.V1.Question.t() | nil,
          macros: [String.t()]
        }

  defstruct question: nil,
            macros: []

  field(:question, 1, type: Bottle.Support.V1.Question)
  field(:macros, 2, repeated: true, type: :string)
end
