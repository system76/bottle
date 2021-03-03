defmodule Bottle do
  @moduledoc """
  A collection of helper functions used by all consuming and producer services
  """

  def publish({type, message}, opts \\ []) do
    {exchange, routing_key} = exchange_and_routing_key(message)
    encoded_message = wrap_and_encode({type, message}, opts)

    with {:ok, channel} <- AMQP.Application.get_channel(:events) do
      AMQP.Basic.publish(channel, exchange, routing_key, encoded_message)
    end
  end

  defp exchange_and_routing_key(message) do
    parts = Module.split(message.__struct__)
    {routing_key, exchange_parts} = List.pop_at(parts, -1)

    {Enum.join(exchange_parts, "."), routing_key}
  end

  defp wrap_and_encode({type, message}, opts) do
    Bottle.Core.V1.Bottle.new(
      request_id: Keyword.get(opts, :request_id, Bottle.RequestId.write(:http)),
      resource: {type, message},
      source: Keyword.fetch(opts, :source),
      timestamp: DateTime.to_unix(DateTime.utc_now())
    )
    |> Bottle.Core.V1.Bottle.encode()
    |> URI.encode()
  end
end
