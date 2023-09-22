const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const themePath = path.join(__dirname,'./src/theme.less');

// 自动引入vant组件
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  // 配置这个是为了打包后再本地通过file协议也能正常访问页面
  publicPath: './',
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set(
        'vue$',
        // If using the runtime only build
        path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        // Or if using full build of Vue (runtime + compiler)
        // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  }
})
