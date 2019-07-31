const path = require('path')
module.exports = {
  entry: './src/views/webpackfile/demo.js',
  output: {
    path: path.resolve(__dirname, './dist/hadPack'),
    filename: 'toDemo.js'
  }
}
