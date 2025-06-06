[![](https://img.shields.io/npm/v/nuxt-define/latest.svg?style=flat&label=npm&colorA=18181B)](https://npmjs.com/package/nuxt-define)
[![](https://img.shields.io/npm/dm/nuxt-define?style=flat&colorA=18181B&color=blue)](https://npmjs.com/package/nuxt-define)

# Nuxt Define

One utility function for module authors to define compiler constants for all builders supported by Nuxt.

Supported builders:
* Vite
* Webpack
* Rspack

## Installation

```bash
npm i nuxt-define
```

## Usage

```ts
// src/module.ts
import { addDefinePlugin } from 'nuxt-define'

export default defineNuxtModule({
  setup() {
    addDefinePlugin({
      '__MY_CONSTANT__': JSON.stringify('myValue'),
      '__SOME_FEATURE_FLAG__': JSON.stringify(false),
    })
  }
})
```

```ts
// src/runtime/foo.ts
export function foo() {
  console.log(__MY_CONSTANT__) // 'myValue'

  if (__SOME_FEATURE_FLAG__) {
    // expensive computation
    // omitted from final build if compiler constant is false
  } 
}

```

## Why?

Nuxt supports multiple builders, and each builder has its own way of defining constants. This module abstracts that complexity and provides a unified API to define compiler constants that work across all supported builders.

An added bonus is that you do not need to explicitly add these builders as dev dependencies, keeping your Github notifications free of renovate PR noise.

## Sponsors

<p align="center">
  <a href="https://raw.githubusercontent.com/bobbiegoede/static/main/sponsors.svg">
    <img src="https://raw.githubusercontent.com/bobbiegoede/static/main/sponsors.svg" />
  </a>
</p>

