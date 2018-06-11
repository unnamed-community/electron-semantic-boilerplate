const path = require('path')
const merge = require('webpack-merge')
const ElectronConnectPlugin = require('webpack-electron-connect-plugin')

const baseConfig = require('./webpack.base.config')
const mainConfig = require('./webpack.main.config')
const rendererConfig = require('./webpack.renderer.config')

const OUTPUT_DIR = 'dev'

module.exports = merge(baseConfig, mainConfig, rendererConfig, {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', OUTPUT_DIR)
  },
  plugins: [
    new ElectronConnectPlugin({
      type: "reload",
      options: {
        path: path.resolve(__dirname, '..', OUTPUT_DIR, 'main.js'),
        spawnOpt: {
          cwd: path.resolve(__dirname, '..', OUTPUT_DIR),
          env: {
            environment: 'development'
          }
        }
      }
    })
  ]
})
