const path = require('path')
module.exports = {
  // entry 需要打包的入口文件
  entry: {
    main1: './src/views/webpackfile/demo.js',
    main2: './src/views/webpackfile/demo2.js',
    txt1: './src/assets/hello.txt',
    css1: './src/assets/cssdemo.css'
  },
  mode: 'development',
  // 打包后的输出文件
  output: {
    path: path.resolve(__dirname, './dist/hadPack'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/, use: 'css-loader' }
    ]
  }
}
