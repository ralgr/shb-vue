import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/padding-margin.css'
import './css/themes.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebook, faGithub, faTwitter)
dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
