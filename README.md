# Bottle

Protobuf messages in a bottle.

This repository contains a `master` branch of protobuf files, and branches for
different languages we use them in.

## Installation

### Elixir

```elixir
def deps do
  [
    {:bottle, github: "system76/bottle", branch: "elixir"}
  ]
end
```

## Developing

### Patterns

- ID - When using an ID in a message, we will use a nested record instead. For example, if you wanted to pass an ID
for an order, we would use `order: %Order{id: "1234"}` instead of `order_id: "1234"`.

- Date & Time - We use string fields to represent ISO 8601 formatted date and time fields. This is built into most
languages by default, and if you are using Elixir, you can simply use `DateTime.to_iso8601/1`.

### Deploying

To change a schema, simply open a PR to `master`. Once approved and merged,
CI/CD will do the heavy lifting and compile them to each language and push to
respective branch.

If you have a change to make for a language, open a PR to that branch instead.
CI will check to make sure it works, then on merge will start the publish
process described above.

## Backwards Compatibility

At this time everything is linked to a git branch, meaning we have no tag or
commit to attach to. Any breaking change you make to a protobuf will be used
immediately on next deploy of what ever project uses it. Please keep this in
mind when making changes.

## License

This project is licensed under GPL-3.0. See [LICENSE](LICENSE) for more
information.
