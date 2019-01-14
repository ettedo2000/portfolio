<template>
  <div>
  <!-- Header -->
  <header class="masthead">
    <div class="container d-flex h-100 w-75 align-items-center">
      <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-uppercase">Coming Soon!</h1>
        <h2 class="text-white-50 mx-auto mt-2 mb-5">We're working hard to finish the development of this site. Our target launch date is March 2019! Sign up for updates using the form below!</h2>
        <!-- <a href="#about" class="btn btn-primary js-scroll-trigger">Get Started</a>-->
        <form v-on:submit.prevent="addEmail">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-lg-5 col-xs-12 input-group">
              <input id="email" type="email" class="form-control mt-2" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" v-model="userData.email">
            </div>
            <div class="col-lg-3 col-xs-12 input-group send1">
              <div class="input-group-append send1-bnt">
                <button v-if="!success" class="btn btn-secondary" type="submit">Notify Me!</button>
                <button disabled v-if="success" class="alert alert-success">
                  Email sent!
                </button>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
        </form>
        <div class="row" v-if="errorRequired">
          <div class="col-2"></div>
          <div class="col-8 input-group w-50 align-items-center">
            <span style="color:darkred;margin: 10px 5px;">{{errorMassageEmpty}}</span>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row" v-if="errorValid">
          <div class="col-2"></div>
          <div class="col-8 input-group w-50 align-items-center">
            <span style="color:darkred;margin: 10px 5px;">{{errorMassageValid}}</span>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  </header>
    <!-- About -->
    <section class="content-section" ref="about">
      <div class="container text-center text-padding">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>About Me!</h2>
            <p class="lead mb-5 text-justify text-indent">
              I started working on Basic HTML Web Design in 2008 quickly realizing my passion for Web Design and Development. In 2011 I decided to pursue my passion in a professional level by enrolling for an Associate Degree in Computer Science at Northeast State Community College in Blountville TN. I graduated in 2014 with a double Major in Internet and Web Development and Computer Programming.</p>

            <p class="lead mb-5 text-justify text-indent">Since than I been working full time as a Web Developer maintaining, designing and developing websites. My work ranges from front-end designs(HTML, Java Script, JQuery, CSS, SCSS, Bootstrap, Vuejs and Angular), to back-end developments(PHP, Payment Portals, API, Ajax). I also work as a freelance Web Designer and have worked on several projects that include Word Press, Drupal and Pay Pal.</p>

            <p class="lead mb-5 text-justify text-indent">If you like to learn more about my work or are interested to discuss a new project or rework an existing website please feel free to contact me.</p>
            <a class="btn btn-dark btn-xl js-scroll-trigger" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
    <!-- LINKS -->
    <section class="content-section bg-dark text-white text-center" id="services">
      <div class="container text-padding">
        <div class="content-section-heading">
          <h3 class="text-secondary mb-0">Services</h3>
          <h2 class="mb-5">What We Offer</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="icon-screen-smartphone"></i>
            </span>
            <h4>
              <strong>Responsive</strong>
            </h4>
            <p class="text-faded mb-0">Looks great on any screen size!</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="icon-pencil"></i>
            </span>
            <h4>
              <strong>Redesigned</strong>
            </h4>
            <p class="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="icon-like"></i>
            </span>
            <h4>
              <strong>Favorited</strong>
            </h4>
            <p class="text-faded mb-0">Millions of users
              <i class="fas fa-heart"></i>
              Start Bootstrap!</p>
          </div>
          <div class="col-lg-3 col-md-6">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <i class="icon-mustache"></i>
            </span>
            <h4>
              <strong>Question</strong>
            </h4>
            <p class="text-faded mb-0">I mustache you a question...</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio -->
    <section class="content-section" id="projects">
      <div class="container">
        <div class="content-section-heading text-center">
          <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h2>Soap Shop</h2>
                  <p class="mb-0">Commerce Project selling soaps and other body products.</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/GWD1.png" alt="">
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h2>Ice Cream</h2>
                  <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/title_game-2.png" alt="">
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h2>Strawberries</h2>
                  <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/TNCountyClerk1.png" alt="">
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h2>EZDealer Website</h2>
                  <p class="mb-0">A website Interface build for Dealerships to print new temporary tags for cars sold to customers.</p>
                  <ul>
                    <li>PHP</li>
                  </ul>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/EZDealer1.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyBFi_xidFH-ZIsRftqJNHNe-n-GaeW2DMY',
  authDomain: 'odette-simons-portfolio.firebaseapp.com',
  databaseURL: 'https://odette-simons-portfolio.firebaseio.com',
  projectId: 'odette-simons-portfolio',
  storageBucket: 'odette-simons-portfolio.appspot.com',
  messagingSenderId: '92673616789'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let refEmail = db.ref('email')
export default {
  name: 'Modal',
  data () {
    return {
      userData: {
        email: '',
        date: new Date().toUTCString()
      },
      success: false,
      errorRequired: false,
      errorMassageEmpty: 'Email is required',
      errorValid: false,
      errorMassageValid: 'The email must be a valid email',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    addEmail () {
      console.log('add1  ' + this.userData.email)
      console.log(this.reg.test(this.userData.email))
      if (this.userData.email == '') {
        this.errorRequired = true
        this.errorValid = false
      } else if (!this.reg.test(this.userData.email)) {
        this.errorValid = true
        this.errorRequired = false
      } else {
        refEmail.push(this.userData)
        this.userData.email = ''
        this.userData.date = ''
        this.success = true
        this.errorRequired = false
        this.errorValid = false
        console.log('add2  ' + this.userData)
      }
    },
    scrollFix(refName) {
      console.log(refName);
      let element = this.$refs.refName;
      console.log(this.$refs);
      //let top = element;

      window.scrollTo(0, top);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
