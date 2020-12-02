defmodule Bottle do
  @moduledoc false

  @request_types ["http", "rpc", "queue"]

  @doc """
  Generates a request ID unique to our whole infrastructure. You can either give
  it an id manually (not recommended), or

  ## Examples

    iex> request_id()
    > http_abcdefghijklmnop1234 # From `Logger.metadata`

    iex> request_id(:http)
    > http_abcdefghijklmnop1234

    iex> request_id(:rpc, "12345")
    > rpc_12345

  """
  def request_id() do
    with nil <- fetch_id() do
      throw(ArgumentError, message: "No request_id in the Logger metadata")
    end
  end

  def request_id(type) do
    request_id(type, generate_key())
  end

  def request_id(type, key) do
    "#{to_string(type)}_#{key}"
  end

  @doc """
  Checks if the given request type is valid in our system.
  """
  def valid_request_type?(type) do
    type in @request_types
  end

  defp fetch_id() do
    Keyword.get(Logger.metadata(), :request_id)
  end

  defp generate_key() do
    binary = <<
      System.system_time(:nanosecond)::64,
      :erlang.phash2({node(), self()}, 16_777_216)::24,
      :erlang.unique_integer()::32
    >>

    Base.url_encode64(binary)
  end
end
