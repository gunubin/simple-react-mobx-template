const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports =
  merge(
    common,
    {
      devtool: 'source-map',
      entry: {
        app: [
          paths.appIndexJs
        ]
      },
      output: {
        path: paths.appBuild,
        filename: 'static/js/[name].[hash:8].js',
        // chunkFilename: 'static/js/[name].[hash:8].chunk.js',
        publicPath: '/'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
          'process.env.BROWSER': true,
        }),
        new Dotenv({
          path: './.env.production',
          safe: true,
          systemvars: true,
        }),
        // Decrease script evaluation time
        // https://github.com/webpack/webpack/blob/master/examples/scope-hoisting/README.md
        new webpack.optimize.ModuleConcatenationPlugin(),
        // Minimize all JavaScript output of chunks
        // https://github.com/mishoo/UglifyJS2#compressor-options
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          },
          mangle: {
            screw_ie8: true
          },
          output: {
            comments: false,
            screw_ie8: true
          }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
          template: paths.appHtml,
          inject: true,
          minify: {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }),
        new ScriptExtHtmlWebpackPlugin({
          defaultAttribute: 'defer'
        }),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
          threshold: 10240,
          minRatio: 0.8
        })
      ],
    }
  )

