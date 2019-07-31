// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        javascriptEnabled: true
      }
    }
  },
  publicPath: './',
  outputDir: 'demo',
  assetsDir: 'assets',
  // 不生成map哈希文件
  productionSourceMap: false,
  //  pluginOptions
  pluginOptions: {
  }
}
