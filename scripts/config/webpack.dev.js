const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const project = require('./project.config')

module.exports =
  merge(
    common,
    {
      cache: true,
      devtool: 'heap-module-eval-source-map',
      entry: {
        app: [
          'react-error-overlay',
          'react-hot-loader/patch',
          `webpack-dev-server/client?http://${project.host}:${project.port}`,
          'webpack/hot/only-dev-server',
          paths.appIndexJs
        ]
      },
      output: {
        path: paths.appBuild,
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[name].[hash:8].chunk.js',
        publicPath: '/'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: paths.appHtml,
          inject: true,
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
          'process.env.BROWSER': true,
        }),
        new Dotenv({
          path: './.env',
          safe: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ],
    }
  )

