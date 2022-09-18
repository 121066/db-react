const path = require('path')
module.exports = function (webEnv) {
  console.log(webEnv, '??????')
  const NODE_ENV = process.env
  console.log(NODE_ENV, '环境变量')
  return {
    entry: './src/index.js',
    output: {
      filename: 'dist.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
}
