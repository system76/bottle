defmodule Bottle do
  @moduledoc """
  A collection of helper functions used by all consuming and producer services
  """

  alias Bottle.Core.V1

  def publish(target_arn, %V1.Bottle{} = bottle) do
    bottle
    |> V1.Bottle.encode()
    |> URI.encode()
    |> ExAws.SNS.publish(target_arn: target_arn)
  end
end
