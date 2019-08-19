const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const devConfig = {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    port: 3333
  }
}

module.exports = merge(baseConfig, devConfig)