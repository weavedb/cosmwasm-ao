# CWAO20 Token

CWAO20 is an ao token spec compatible CosmWasm token implementation.

- [ao Token Spec](https://cookbook_ao.g8way.io/references/token.html)

## Instantiate


```js
[
  { name: "Name", value: "WeaveDB" },
  { name: "Ticker", value: "WDB" },
  { name: "Logo", value: "https://example.com/wdb.png" },
  { name: "Denomination", value: "6" },
]
```

## Available Methods

### Balance

```js
[
  { name: "Action", value: "Balance" },
  { name: "Target", value: ADDRESS },
]
```

### Balances

```js
[
  { name: "Action", value: "Balances" },
]
```

### Transfer

```js
[
  { name: "Action", value: "Transfer" },
  { name: "Recipient", value: ADDRESS },
  { name: "Quantity", value: "100" },
]
```

`Transfer` will send out `Credit-Notice` to the `Recipient`.

```js
[
  { name: "Action", value: "Credit-Notice" },
  { name: "Sender", value: ADDRESS },
  { name: "Quantity", value: "100" },
]
```

### Mint

```js
[
  { name: "Action", value: "Mint" },
  { name: "Quantity", value: "100" },
]
```
