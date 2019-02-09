// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCodeBranch, faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faCodeBranch,faCheck)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

require('es6-promise').polyfill()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  id: 'UA-134171848-1',
  template: '<App/>'
})

Vue.use(VueAnalytics, {
  id: 'UA-134171848-1',
  router
})
