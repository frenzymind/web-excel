import { BuildOptions } from './types/config'
import { Configuration as DevServerConfigurationd } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfigurationd {
  return {
    port: options.port,
    open: false,
  }
}
