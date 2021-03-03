defmodule Bottle do
  @moduledoc """
  A collection of helper functions used by all consuming and producer services
  """

  def publish(message, opts \\ []) do
    {exchange, routing_key} = exchange_and_routing_key(message)
    encoded_message = wrap_and_encode(message, routing_key, opts)

    with {:ok, channel} <- AMQP.Application.get_channel(:events) do
      AMQP.Basic.publish(channel, exchange, routing_key, encoded_message)
    end
  end

  defp exchange_and_routing_key(message) do
    parts = Module.split(message.__struct__)
    {routing_key, exchange_parts} = List.pop_at(parts, -1)

    {Enum.join(exchange_parts, "."), routing_key}
  end

  defp wrap_and_encode(message, routing_key, opts) do
    message_type =
      routing_key
      |> String.replace(~r/((?<=[a-z])[A-Z])/, "_\\1", global: true)
      |> String.downcase()
      |> String.to_atom()

    Bottle.Core.V1.Bottle.new(
      request_id: Keyword.get(opts, :request_id, Bottle.RequestId.write(:queue)),
      resource: {message_type, message},
      source: Keyword.fetch(opts, :source),
      timestamp: DateTime.to_unix(DateTime.utc_now())
    )
    |> Bottle.Core.V1.Bottle.encode()
    |> URI.encode()
  end
end
