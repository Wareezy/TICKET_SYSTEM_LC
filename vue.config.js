const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')
const path = require('path');
module.exports = {
  devServer: {
    host: '192.168.8.215',
    port: 8080,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../../../Intern-38/ssl/local.key')),
      cert: fs.readFileSync(path.resolve(__dirname, '../../../Intern-38/ssl/local.crt')),
    },
  },
}
module.exports = defineConfig({
  transpileDependencies: true
})
