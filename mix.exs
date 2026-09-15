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
      # Needs OTP 26+
      {:amqp, "~> 4.0"},
      # Fixes critical RCE CVE-2026-48853
      {:grpc, "~> 1.0"},
      # Needed so Plug compiles before bottle, for RequestIdPlug's Code.ensure_loaded? check
      {:plug, ">= 0.0.0", optional: true},
      {:protobuf, "~> 0.17"}
    ]
  end
end
