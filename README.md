# stringinject

A TypeScript version of [stringinject](https://github.com/tjcafferkey/stringinject) with support for **CommonJS**, **ES Modules**, and TypeScript typings.

## Install

```bash
npm install stringinject
```

## Usage

```ts
import stringInject from "stringinject";

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

## Test

```bash
npm test
```
