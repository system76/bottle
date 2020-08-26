# Bottle

Protobuf messages in a bottle.

## Generating Elixir from Protobuf

```shell
$ protoc --elixir_out=./lib/bottle/messages -I priv/protos/ priv/protos/*.proto
```

## Installation

```elixir
def deps do
  [
    {:bottle, github: "system76/bottle"}
  ]
end
```
