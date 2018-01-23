module.exports = {
  compress: true,
  contentBase: 'public',
  disableHostCheck: true,
  historyApiFallback: true,
  hot: true,
  inline: true,
  publicPath: '/',
  stats: {
    assets: false,
    children: false,
    chunks: false,
    colors: true,
    hash: false,
    moduleTrace: false,
    modules: false,
    reasons: false,
    source: true,
    timings: false,
    version: false
  },
  watchContentBase: true
};
