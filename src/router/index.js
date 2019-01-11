import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Modal from '../components/Modal'
import About from '../components/About'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/',
      name: 'About',
      component: About
    }

  ]
})
