<template>
    <div>
    <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top mainNav"  v-bind:class="{'navbar-shrink': showNavbar }">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Odette Simons Portfolio</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>

export default {
  name: 'Header',
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
</style>
