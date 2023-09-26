import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, options.paths.core, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@src': options.paths.src,
      '@core': options.paths.core,
    },
  }
}
