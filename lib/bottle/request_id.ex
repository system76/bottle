defmodule Bottle.RequestId do
  @moduledoc """
  Handles everything related to `request_id`s in our infrastructure. This
  includes generating unique ids that get passed through the whole system,
  fetching the `request_id` from common data models, and validating
  `request_id`s.

  For http applications, please use `Bottle.RequestIdPlug` to generate a
  `request_id` on new http requests.

  Here is an example for a simple `Broadway` processor that will read from a
  queue, parse the message, and add the `request_id` to `Logger` and `Appsignal`
  (if it exists).

    @impl true
    @decorate transaction(:queue)
    def handle_message(_, %Message{data: data} = message, _context) do
      order =
        data
        |> URI.decode()
        |> decode_message()

      Bottle.RequestId.read(:queue, order)
      Logger.info("Reviewing order")

      order
    end

  If you need to make subsequent requests, you can use `write/1` like this:

    def encode() do
      Bottle.Core.V1.Bottle.new([
        request_id: Bottle.RequestId.write(:queue)
      ])
    end

  """

  @request_types ["http", "rpc", "queue"]

  @doc """
  Reads the `request_id` from the given data sources and sets it in the
  `Logger.metadata` for easier access later. If you have `Appsignal` installed,
  it will also add the `request_id` to the sample data.
  """
  def read(type, data \\ nil) do
    old_request_id = fetch(data)
    request_id = if is_nil(old_request_id), do: generate(type), else: old_request_id

    Logger.metadata(request_id: request_id)

    request_id
  end

  @doc """
  Fetches the `request_id` saved previously. If no `request_id` exists, it will
  create a new one with the given `type`.
  """
  def write(type) do
    case fetch() do
      nil -> generate(type)
      request_id -> request_id
    end
  end

  @doc """
  Fetches the `request_id` from the given data store. This could be a
  `Plug.Conn` or a `Bottle.Core.V1.Bottle`. If all else fails, we fall back to
  `Logger.metadata`.
  """
  def fetch(%{request_id: request_id}) do
    if valid?(request_id), do: request_id, else: fetch()
  end

  def fetch(_), do: fetch()

  def fetch() do
    request_id = Keyword.get(Logger.metadata(), :request_id)
    if valid?(request_id), do: request_id, else: nil
  end

  @doc """
  Generates a new `request_id`.
  """
  def generate(type) do
    generate(type, generate_key())
  end

  def generate(type, key) do
    if valid_type?(type) do
      "#{to_string(type)}_#{key}"
    else
      raise ArgumentError, message: "#{type} is not a valid request_id type"
    end
  end

  @doc """
  Generates the key part of a `request_id`.
  """
  def generate_key() do
    binary = <<
      System.system_time(:nanosecond)::64,
      :erlang.phash2({node(), self()}, 16_777_216)::24,
      :erlang.unique_integer()::32
    >>

    Base.url_encode64(binary)
  end

  @doc """
  Checks if the given `request_id` is valid.
  """
  def valid?(id) do
    [type, key] = String.split(id, "_")

    valid_type?(type) and valid_key?(key)
  rescue
    _ -> false
  end

  @doc """
  Checks if the first part of the `request_id` (the type) is valid.
  """
  def valid_type?(type) do
    to_string(type) in @request_types
  end

  @doc """
  Checks if the last part of the `request_id` (the key) is valid.
  """
  def valid_key?(key) do
    byte_size(key) in 20..200
  rescue
    _ -> false
  end
end
