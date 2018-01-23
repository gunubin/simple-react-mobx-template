const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()
const staticAssetName = 'static/media/[hash:8].[ext]'
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  resolve: {
    modules: ['node_modules', paths.appSrc],
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            }
          }
        ],
      },
      // file
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.(ts|tsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/
        ],
        loader: 'file-loader',
        options: {
          name: staticAssetName,
        }
      },
      // data URLsとして
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: staticAssetName
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true,
    }),
  ],
  stats: {
    colors: true,
    hash: false,
    version: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false
  },
}


