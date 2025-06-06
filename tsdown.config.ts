import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src'],
  external: ['@nuxt/kit', '@rspack/core', 'webpack'],
})