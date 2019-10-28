const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')
module.exports = {
  // 根据环境区分 生产服务器production比如php服务器的地址  和 开发服务器dev的地址
  // npm run serve是开发环境develope     npm run build是生产环境production
  publicPath: process.env.NODE_ENV === "production" ? "/qunar/" : "/",
  // 打包时(生产环境下)关闭JS源代码调试功能
  productionSourceMap: false,
  // 开发环境下，是否开启css的调试功能。不会影响项目的打包
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
           
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: '@/components',
        views: '@/views',
        common: '@/common',
        network: '@/network'
      }
    }
  },
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8081',
    https: false,
    hotOnly: false, 
    proxy: {
        '/api': {
            target: 'https://touch.dujia.qunar.com/', //API服务器的地址
            ws: true,  //代理websockets
            changeOrigin: true, // 虚拟的站点需要更管origin
            pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                '^/api': ''
            }
        }
    },
}
}
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname,'./src/assets/styles/global.styl')
      ],
    })
}