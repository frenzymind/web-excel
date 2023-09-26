import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import { BuildOptions } from './types/config'

export function buildlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new webpack.ProgressPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ]

  if (isDev) {
    plugins.push(
      new ESLintPlugin({
        extensions: ['.js', '.ts'],
        emitWarning: false,
      }),
    )
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
      }),
    )
  }

  return plugins
}
