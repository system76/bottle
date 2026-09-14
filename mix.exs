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
      {:amqp, "~> 3.0"},
      # OTP 27 support; rabbit_types:maybe/1 clashes with the `maybe` keyword otherwise
      {:rabbit_common, "~> 3.13.7", override: true},
      {:ranch, "~> 2.1", override: true},
      # Only for files generated from Google's protos.
      # Can be ignored if you don't use Google's protos.
      # Or you can generate the code by yourself.
      {:google_protos, "~> 0.4.0"},
      # Fixes critical RCE CVE-2026-48853
      {:grpc, "~> 1.0"},
      {:protobuf, "~> 0.17"}
    ]
  end
end
