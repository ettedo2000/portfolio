<template>
  <div>
  <!-- Header -->
  <header class="masthead" id="home">
    <div class="container d-flex h-100 align-items-center">
      <div class="col-md-12">
      <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-uppercase">Welcome!</h1>
        <h2 class="text-white-50 mx-auto mt-2 mb-5">
          “A successful website does three things:
          It attracts the right kinds of visitors.
          Guides them to the main services or products you offer.
          Collects Contact details for future ongoing relations.”
          <br/>
          <span style="float: right;font-size: 1rem;color: #40464d">― Mohamed Saad </span>
        </h2>
        <h4 class="text-white-50 mx-auto mt-2 mb-5">My name is Odette Simons and I am a FULL STACK Developer</h4>
      </div>
      </div>
    </div>
  </header>
    <!-- About -->
    <section class="content-section" id="about" v-bind:class="{'scroll-trigger': setNewScroll}">
      <div class="container text-center text-padding-top">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>About Me!</h2>
            <p class="lead mb-5 text-justify text-indent">
              I started working on Basic HTML Web Design in 2008 quickly realizing my passion for Web Design and Development. In 2011 I decided to pursue my passion in a professional level by enrolling for an Associate Degree in Computer Science at Northeast State Community College in Blountville TN. I graduated in 2014 with a double Major in Internet and Web Development and Computer Programming.</p>

            <p class="lead mb-5 text-justify text-indent">Since than I been working full time as a Web Developer maintaining, designing and developing websites. My work ranges from front-end designs(HTML, Java Script, JQuery, CSS, SCSS, Bootstrap, Vuejs and Angular), to back-end developments(PHP, Payment Portals, API, Ajax). I also work as a freelance Web Designer and have worked on several projects that include WordPress, Drupal and PayPal.</p>

            <p class="lead mb-5 text-justify text-indent">If you like to learn more about my work or are interested to discuss a new project or rework an existing website please feel free to contact me.</p>
            <a class="btn btn-dark btn-xl js-scroll-trigger" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
    <!-- LINKS -->
    <section class="content-section bg-dark text-white text-center" id="services">
      <div class="container pt-5 mb-5 pb-5 mt-5">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="mx-auto mb-3">
              <img src="../assets/img/mobile-icon-7.png" style="filter: invert(100%);height: 30%">
            </span>
            <h4>
              <strong>Responsiveness</strong>
            </h4>
            <p class="text-faded mb-0">Design sites for all platforms. From Desktop to Mobile Responsiveness is an essential need for any web site. Implemented with Bootstrap, HTML5, CSS and SCSS.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span class="mx-auto mb-3">
             <img src="../assets/img/design_web.png" style="filter: invert(100%);height: 30%">
            </span>
            <h4>
              <strong>Redesign</strong>
            </h4>
            <p class="text-faded mb-0">Redesign existing sites for a more user friendly experience. Offer an easier navigation through the pages or just get a fresh look. Implemented with Bootstrap, JavaScript, Ajax and Node.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-5 mb-md-0">
            <span class="mx-auto mb-3">
             <img src="../assets/img/coding_web.png" style="filter: invert(100%);height: 30%">
            </span>
            <h4>
              <strong>Componants</strong>
            </h4>
            <p class="text-faded mb-0">Maintain, build or updated an e-commerce with Database integration, API and Payment Portals. Make the integration as seamless to a consumer with the easy of a button click for the user. Implementing PHP, API and MySqli.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio -->
    <section class="content-section" id="projects">
      <div class="container text-padding-top">
        <div class="content-section-heading text-center">
          <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6">
            <a class="portfolio-item" v-b-modal.modal1 style="cursor: pointer">
              <span class="caption" >
                <span class="caption-content" style="min-height: 150px;">
                  <h2>Soap Shop</h2>
                  <p class="mb-0">Commerce Project selling soaps and other body products.</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/GWD1.png" alt="">
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" v-b-modal.modal2 style="cursor: pointer">
              <span class="caption">
                <span class="caption-content" style="min-height: 150px;">
                  <h2>Tile Game</h2>
                  <p class="mb-0">Flip the tiles game written in Javascript</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/title_game-2.png" alt="">
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" v-b-modal.modal3 style="cursor: pointer">
              <span class="caption">
                <span class="caption-content" style="min-height: 150px;">
                  <h2>Tennessee County Clerk</h2>
                  <p class="mb-0">Tennessee site that is offering online payment and information lookup for your county clerk office.</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/TNCountyClerk1.png" alt="">
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" v-b-modal.modal4 style="cursor: pointer">
              <span class="caption">
                <span class="caption-content" style="min-height: 150px">
                  <h2>EZDealer Website</h2>
                  <p class="mb-0">A website Interface build for Dealerships to print new temporary tags for cars sold to customers.</p>
                </span>
              </span>
              <img class="img-fluid" src="../assets/img/EZDealer1.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- LINKS -->
    <section class="content-section bg-dark text-white text-center" id="links">
      <div class="container pt-5 mb-5 mt-5">
        <div class="row">
          <div class="col-sm-4">
            <!--<div class="link-div w-25 h-75">-->
            <!--<font-awesome-icon icon="code-branch" size="4x" class="mb-3"/>-->
            <a class="link" href="https://github.com/ettedo2000" target="_blank" >
              <img src="../assets/img/github.png" style="filter: invert(100%);height: 40%" class="mb-3"/>
            <div>
              <span>GitHub</span>
            </div>
            </a>
             <!-- </div>-->
          </div>
          <div class="col-sm-4">
            <img src="../assets/img/linkedin.png" style="filter: invert(100%);height: 30%" class="mb-3"/>
            <div>
              <a href="https://www.linkedin.com/in/odette-salhofer-simons/" target="_blank">LinkedIN</a>
            </div>
          </div>
          <div class="col-sm-4">
            <img src="../assets/img/jsfiddle.png" style="filter: invert(100%);height: 30%" class="mb-3"/>
            <div>
              <a href="https://jsfiddle.net/user/ettedo2000/fiddles/" target="_blank">jsfiddle</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact -->
    <section class="content-section" id="contact">
        <div class="section-content">
          <h3>Contact Me</h3>
        </div>
        <div class="contact-section">
          <div class="container text-padding-top text-padding-bottom">
            <form v-on:submit.prevent="addEmail">
            <div class="row">
              <div class="col-sm-6 form-line">
                <div class="form-group">
                  <label>Your Name</label>
                  <input type="text" class="form-control" id="name" v-model="userData.name" placeholder="Full Name">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail">Email Address</label>
                  <input type="email" class="form-control" id="email" v-model="userData.email" placeholder="your@email.com">
                </div>
                <div class="form-group">
                  <label for="telephone">Phone Number</label>
                  <input type="tel" class="form-control" id="phone" v-model="userData.phone" placeholder="555-555-1234" maxlength="12">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for ="description"> Message</label>
                  <textarea  class="form-control" id="description" placeholder="Enter Your Message" v-model="userData.message"></textarea>
                </div>
                <div v-if="!success">
                  <button type="submit" class="btn btn-dark">
                    <i class="fa fa-paper-plane" aria-hidden="true">
                    </i> Send Message</button>
                </div>
                <div v-if="success">
                  <button disabled type="button" class="btn btn-light"  style="color:darkgreen;">
                    <font-awesome-icon icon="check"></font-awesome-icon>
                   Email sent!</button>
                </div>
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
            </form>
        </div>
      </div>
      <!-- Modal Component -->
      <b-modal id="modal1" title="Soap Store">
        <p class="my-4">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>PayPal</li>
            <li>JavaScript</li>
          </ul>
        </p>
      </b-modal>

      <b-modal id="modal2" title="Tile Game">
        <p class="my-4">
        <ul>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <a style="color: blue" href="https://jsfiddle.net/ettedo2000/mteaLr8w/" target="_blank">
          https://jsfiddle.net/ettedo2000/mteaLr8w/
        </a>
        </p>
      </b-modal>

      <b-modal id="modal3" title="Tennessee County Clerk">
        <p class="my-4"><div class="row" style="margin-left: 5px;">
        <div class="col-6">
          <li>Bootstrap</li>
          <li>CSS</li>
          <li>HTML</li>
        </div>
        <div class="col-6">
          <li>PHP</li>
          <li>Payment Frame</li>
          <li>JQuery</li>
        </div>
      </div>
        </p>
      </b-modal>

      <b-modal id="modal4" title="EZDealerTag">
        <p class="my-4"><div class="row" style="margin-left: 5px;">
        <div class="col-6">
          <li>Bootstrap</li>
          <li>CSS</li>
          <li>HTML</li>
        </div>
        <div class="col-6">
          <li>PHP</li>
          <li>Payment Frame</li>
          <li>JQuery</li>
        </div>
      </div></p>
      </b-modal>
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
        date: new Date().toUTCString(),
        name: '',
        phone: '',
        message: ''
      },
      divScroll: false,
      success: false,
      errorRequired: false,
      errorMassageEmpty: 'Email is required',
      errorValid: false,
      errorMassageValid: 'The email must be a valid email',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  props: {
    cancelDisabled: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    // $route.params.about
    '$route' (to, from) {
      this.setNewScroll()
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
        this.userData.name = ''
        this.userData.phone = ''
        this.userData.message = ''
        this.success = true
        this.errorRequired = false
        this.errorValid = false
        console.log('add2  ' + this.userData)
      }
    },
    setNewScroll (refName) {
      console.log(this.$route.hash)
        // let el = this.$route.hash
        // el = el.replace('#','')
        // if(el === 'about'){
        //     this.divScroll = true
        //     el.offsetTop = el.offsetTop + 70
        // }else{
        //     this.divScroll = false
        // }

        const el = document.getElementById(this.$route.hash.slice(1))
        console.log(el)
        if (el) {
            window.scrollTo(0, el.offsetTop - 180)
        }

        //let elmnt = document.getElementById("about")
        //console.log(elmnt.offsetHeight)
       // console.log(elmnt.offsetWidth)
       // console.log(elmnt.offsetTop - 70)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

   a{
       color: #ced4da;
     }

  a:hover{
    color: #f5f5f5;
  }

</style>
