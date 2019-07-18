module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/table2echarts/' : '/',
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  configureWebpack: {
    externals:{
      'echarts': 'echarts',
      'handsontable': 'Handsontable'
    }
  }
}