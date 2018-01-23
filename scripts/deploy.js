const Rsync = require('rsync')
const logger = require('./lib/logger')
require('dotenv').config({
  path: './.env.production',
})

const {env} = process
const runDeploy = () =>
  new Promise((resolve, reject) => {
    const rsync = new Rsync()
      .flags('ahv')
      .progress()
      .shell(`ssh -o StrictHostKeyChecking=no -p${env.PORT}`)
      .source(`${env.SOURCE}`)
      .destination(`${env.USER_NAME}@shanord.com:${env.DEST}`)
    rsync.execute(function (error, code, cmd) {
      if (error) {
        console.log(error, code, cmd)
        return reject(error)
      }
      console.log(cmd)
      return resolve()
    })
  })


const deploy = () => Promise.resolve()
  .then(() => logger.info('Stating deploy...'))
  .then(() => runDeploy())
  .then(() => {
    logger.success(`Deploy finished successfully!`)
  })
  .catch(err => {
    logger.error('Deploy encountered errors.', err)
    throw err
  })

deploy()


