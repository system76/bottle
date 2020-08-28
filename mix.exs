defmodule BottleEx.MixProject do
  use Mix.Project

  def project do
    [
      app: :bottle_ex,
      version: "0.1.0",
      elixir: "~> 1.10",
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp aliases do
    [
      "protobuf.gen": ["protoc --elixir_out=./lib/bottle/messages -I priv/protos/ priv/protos/*.proto"
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:protobuf, "~> 0.7.1"},
      # Only for files generated from Google's protos.
      # Can be ignored if you don't use Google's protos.
      # Or you can generate the code by yourself.
      {:google_protos, "~> 0.1"}
    ]
  end
end
