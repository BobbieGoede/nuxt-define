import { addRspackPlugin, addWebpackPlugin, extendViteConfig, useNuxt } from "@nuxt/kit";

export async function addDefinePlugin(define: Record<string, any>): Promise<void> {
  const nuxt = useNuxt()

  if (nuxt.options.builder === '@nuxt/webpack-builder') {
    try {
      const webpack = await import('webpack').then(m => m.default || m)
      addWebpackPlugin(new webpack.DefinePlugin(define))
    } catch (e: unknown) {
      throw new Error(`Failed to import webpack: ${(e as Error).message}`)
    }
  }

  if (nuxt.options.builder === '@nuxt/rspack-builder') {
    try {
      const { rspack } = await import('@rspack/core')
      addRspackPlugin(new rspack.DefinePlugin(define))
    } catch (e: unknown) {
      throw new Error(`Failed to import rspack: ${(e as Error).message}`)
    }
  }

  extendViteConfig(config => {
    for(const key in define) {
      config.define[key] = define[key]
    }
  })
}