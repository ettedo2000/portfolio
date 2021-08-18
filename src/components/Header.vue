<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top mainNav"  v-bind:class="{'navbar-shrink': showNavbar }">
      <div class="container">
        <a v-bind:class="{'title-color': showNavbar}" class="navbar-brand js-scroll-trigger" href="/">
          <span v-bind:style="{color: activeColor}">Odette Simons Portfolio</span>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#links">Links</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
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
      showNavbar: false,
      activeColor: 'lightgray'
    }
  },
  methods: {
    handleScroll () {
      // console.log(this.showNavbar)
      if (window.pageYOffset > 100) {
        this.showNavbar = true
        this.activeColor = 'black'
      } else {
        this.showNavbar = false;
        this.activeColor = 'lightgray'
      }
      //console.log(this.showNavbar)
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
