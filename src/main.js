import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faCodeBranch,faCheck,faEnvelopeOpenText,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { VBHover } from 'bootstrap-vue'
import { auth } from '@/firebase'

library.add(faUserSecret,faCodeBranch,faCheck,faEnvelopeOpenText,faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.directive('b-hover', VBHover)

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

