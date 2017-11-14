// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'lib-flexible'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
// import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/iconfont/iconfont.css'

Vue.filter('reverseStr', function(value) {
    return value.split('').reverse().join('');   //过滤器，在main.js中注册使用
});

Vue.use(VueLazyload, {
    adapter: {
        loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
            // do something here
            // example for call LoadedHandler
            LoadedHandler(el)
        },
        loading (listender, Init) {
            console.log('loading')
        },
        error (listender, Init) {
            console.log('error')
        }
    }
})

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(ElementUI, { size: 'small' })
axios.defaults.rootUrl = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
