const webpack = require('webpack');
const config = require('./config/webpack.production');
const logger = require('./lib/logger');
const paths = require('./config/paths');
const fs = require('fs-extra');

const prepareCompile = () =>
  new Promise((resolve, reject) => {
    logger.info(`Copying static assets from ${paths.appPublic} to ${paths.appBuild}.`);
    fs.emptyDirSync(paths.appBuild);
    fs.copySync(paths.appPublic, paths.appBuild, {
      dereference: true,
      filter: file => file !== paths.appHtml
    });
    logger.info(`copy done`);
    return resolve();
  });

const runWebpackCompiler = webpackConfig =>
  new Promise((resolve, reject) => {
    webpack(config).run((err, stats) => {
      if (err) {
        return reject(err);
      }
      logger.info(stats.toString(config.stats));
      return resolve();
    });
  });


const compile = () => Promise.resolve()
  .then(() => logger.info('Stating compiler...'))
  .then(() => prepareCompile())
  .then(() => runWebpackCompiler(config))
  .then(() => {
    logger.success(`Compiler finished successfully! See ${paths.appBuild}.`);
  })
  .catch(err => logger.error('Compiler encountered errors.', err));

compile();


