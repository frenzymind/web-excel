import { Configuration as DevServerConfigurationd } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DevServerConfigurationd {
  return {
    port: options.port,
    open: false,
    hot: true,
  }
}
