defmodule Bottle.MixProject do
  use Mix.Project

  def project do
    [
      app: :bottle,
      version: "0.1.0",
      elixir: "~> 1.10",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:amqp, "~> 4.0"},
      {:amqp_client, "~> 4.0", override: true},
      {:ranch, "~> 2.1", override: true},
      # 2.9.0 fixes some important bugs, so it's better to use ~> 2.9.0
      {:cowlib, "~> 2.13.0", override: true},
      # Only for files generated from Google's protos.
      # Can be ignored if you don't use Google's protos.
      # Or you can generate the code by yourself.
      {:google_protos, "~> 0.4.0"},
      {:grpc, "~> 0.9.0"},
      {:plug_cowboy, "~> 2.7.2", optional: true},
      {:protobuf, "~> 0.14.0"}
    ]
  end
end
