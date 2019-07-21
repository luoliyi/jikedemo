import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// eslint-disable-next-line no-unused-vars
import { button, input } from 'ant-design-vue'

// 做了按需加载 在babel.config.js里面
// import 'ant-design-vue/dist/antd.less'
Vue.config.productionTip = false
Vue.use(button).use(input)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
