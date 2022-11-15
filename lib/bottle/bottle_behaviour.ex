defmodule Bottle.Behaviour do
  @moduledoc """
  Describes an implementation of Bottle, enables mocking.
  """

  @callback publish(struct(), keyword()) :: :ok | {:error, reason :: :blocked | :closing}

end
