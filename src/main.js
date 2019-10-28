import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入ali字体图标
import './assets/styles/iconfont.css'
// rem布局
import 'amfe-flexible'

// 导入vant
import vant from "./vant/index"
Vue.use(vant)
// 导入全局过滤器
import MyFilter from '@/common/filter'
for (let key in MyFilter) {
  Vue.filter(key, MyFilter[key])
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
