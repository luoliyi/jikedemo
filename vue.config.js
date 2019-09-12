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
  outputDir: 'dist',
  assetsDir: 'assets',
  // 不生成map哈希文件(如果要用source-map-explorer 去监测文件使用大小，应生成map文件)
  productionSourceMap: false,
  //  pluginOptions
  pluginOptions: {},
  // chainWebpack
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
}
