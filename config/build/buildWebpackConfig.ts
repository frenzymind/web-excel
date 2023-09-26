import { Configuration } from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
