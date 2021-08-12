import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faCodeBranch,faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faCodeBranch,faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      components: { App },
      id: 'UA-134171848-1',
      render: h => h(App)
    }).$mount('#app')
  }
})

