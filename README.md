# stringinject-ts

A TypeScript version of [stringinject](https://github.com/tjcafferkey/stringinject) with support for **CommonJS**, **ES Modules**, and TypeScript typings.

## Install

```bash
npm install stringinject-ts
```

## Usage

```ts
import { stringInject } from "stringinject-ts";

console.log(stringInject("Hello {name}", { name: "World" }));
// Output: "Hello World"
```

Supports both array and object replacements:

```ts
stringInject("Hi {0}, you have {1} messages", ["Alice", 5]);
```

## Build

```bash
npm run build
```
