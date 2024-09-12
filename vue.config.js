const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')
const path = require('path');
const admins = {
  admin1: 'Intern-38',
  admin2: 'Intern-58',
  admin3: 'admin3',
}
module.exports = {
  devServer: {
    host: '192.168.8.215',
    port: 8080,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, `../../../${admins.admin2}/ssl/local.key`)),
      cert: fs.readFileSync(path.resolve(__dirname, `../../../${admins.admin2}/ssl/local.crt`)),
    },
  },
}
module.exports = defineConfig({
  transpileDependencies: true
})
