import Vue from 'vue'
import _ from 'lodash'
import ElementUI from 'element-ui'
// require('@/static/theme/index.css')
import 'element-ui/lib/theme-chalk/index.css'
import '@/static/iconfont/iconfont.css'
import config from '@/common/config'
import App from '@/common/App'
import router from './router/index'
import store from './store/index'

import EleForm from 'vue-ele-form'
import EleFormImageUploader from 'vue-ele-form-image-uploader'

import './router/permission'

Vue.use(ElementUI)
Vue.use(EleForm)
Vue.component('image-uploader', EleFormImageUploader)

Vue.prototype._ = _
Vue.prototype.$config = config
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
