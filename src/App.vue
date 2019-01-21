<template>
  <div id="app">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
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
  methods: {
    anchorHashCheck () {
      console.log(this.$route.hash)
      if (window.location.hash === this.$route.hash) {
        const el = document.getElementById(this.$route.hash.slice(1))
        if (el) {
          window.scrollTo(0, el.offsetTop)
        }
      }
    }
  },
  mounted () {
    this.anchorHashCheck()
  }

}
</script>

<style>
  @import './style/main.scss';
</style>
