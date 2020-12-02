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
      {:cowlib, "~> 2.9.0", override: true},
      {:grpc, "~> 0.5.0-beta.1"},
      {:protobuf, "~> 0.7.1"},
      # Only for files generated from Google's protos.
      # Can be ignored if you don't use Google's protos.
      # Or you can generate the code by yourself.
      {:google_protos, "~> 0.1"}
    ]
  end
end
