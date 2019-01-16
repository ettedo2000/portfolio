import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Modal from '../components/Modal'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/:link',
      component: Modal
    }
  ]
})
