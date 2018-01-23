const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const logger = require('./lib/logger');
const serverConfig = require('./config/webpackDevServer.config');
const project = require('./config/project.config');

const config = require('./config/webpack.dev');
const devServer = new WebpackDevServer(webpack(config), serverConfig);

const PORT = parseInt(process.env.PORT, 10) || project.port;
const HOST = process.env.HOST || project.host;

devServer.listen(PORT, HOST, err => {
  if (err) {
    return logger.error(err);
  }
  logger.log(`Server is running at http://${HOST}:${PORT} \n`);
});
