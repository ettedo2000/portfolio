<template>
  <div id="app">
    <div>
      <app-header></app-header>
      <router-view/>
      <!--<app-footer></app-footer>-->
     </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
  @import './style/main.scss';
</style>
