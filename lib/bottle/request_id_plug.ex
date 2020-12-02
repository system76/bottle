defmodule Bottle.RequestIdPlug do
  @moduledoc """
  Very similar to `Plug.RequestId` but it generates a request id formatted to be
  used in our `Bottle` system.

  The generated request id will be in the format
  "http_uq8hs30oafhj5vve8ji5pmp7mtopc08f"

  To use this plug, just plug it into the desired module:

      plug Bottle.RequestIdPlug

  """

  require Logger

  alias Plug.Conn

  @behaviour Plug

  def init(opts) do
    Keyword.get(opts, :http_header, "x-request-id")
  end

  def call(conn, req_id_header) do
    conn
    |> get_request_id(req_id_header)
    |> set_request_id(req_id_header)
  end

  defp get_request_id(conn, header) do
    case Conn.get_req_header(conn, header) do
      [] ->
        {conn, generate_request_id()}

      [val | _] ->
        if valid_request_id?(val) do
          {conn, val}
        else
          {conn, generate_request_id()}
        end
    end
  end

  defp set_request_id({conn, request_id}, header) do
    Logger.metadata(request_id: request_id)
    Conn.put_resp_header(conn, header, request_id)
  end

  defp generate_request_id, do: Bottle.request_id(:http)

  defp valid_request_id?(s) do
    [type, key] = String.split(s, "_")
    Bottle.valid_request_type?(key)
  rescue
    _ -> false
  end
end
