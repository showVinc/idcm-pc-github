let merge = require('webpack-merge')
let prodEnv = require('./prod.env')
let config = require('./common')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL: config.dev_url,
  API: config.dev_api
})
