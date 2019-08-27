const path = require('path')
module.exports = {
  // entry 需要打包的入口文件
  entry: {
    main1: './src/views/webpackfile/demo.js',
    main2: './src/views/webpackfile/demo2.js',
    txt1: './src/assets/hello.txt',
    css1: './src/assets/cssdemo.css',
    img1: './src/assets/car.png'
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
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 10000, // size <= 20KB
              publicPath: 'assets/',
              outputPath: 'assets/'
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-pngquant')({
                  quality: [0.4, 0.5]
                })
              ]
            }
          }
        ]
      }
    ]
  }
}
