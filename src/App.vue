<template>
  <div id="app">
      <app-header></app-header>
      <router-view/>
      <!--<app-footer></app-footer>-->
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  data () {
    return {
      showNavbar: false
    }
  },
  methods: {
    handleScroll (event) {
      // console.log(this.showNavbar)
      if (window.pageYOffset > 100) {
        this.showNavbar = true
      } else {
        this.showNavbar = false
      }
      console.log(this.showNavbar)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  @import './style/main.scss';
</style>
