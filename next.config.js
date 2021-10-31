/*eslint-env node*/
const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias['~'] = path.join(__dirname, './')

    return config
  }
}
