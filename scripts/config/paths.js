const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appPublic: resolveApp('public'),
  appBuild: resolveApp('build'),
  appIndexJs: resolveApp('src/index.tsx'),
  appHtml: resolveApp('public/index.html')
};
