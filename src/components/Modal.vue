<template>
  <div>
    <!-- Header -->
    <header class="masthead" id="home">
      <div class="container d-flex h-100 align-items-center">
        <div class="col-md-12">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Welcome!</h1>
            <h4 class="text-white-50 mx-auto mt-2 mb-5">My name is Odette Simons</h4>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              <ul id="headerQuote">
                <li>To succeed, one needs to learn</li>
                <li>To learn, one needs to be curious</li>
                <li>To be curious, one needs to be intuitive</li>
                <li>To be intuitive, one needs to appreciate all the small and big things in life.</li>
              </ul>
            </h2>
            <h4 class="text-white-50 mx-auto mt-2 mb-5">and I am a <br/>WEB APPLICATION DEVELOPER</h4>

          </div>
        </div>
      </div>
    </header>
    <!-- About -->
    <section class="content-section" id="about" v-bind:class="{'scroll-trigger': setNewScroll}">
      <div class="container text-center text-padding-top">
        <div class="row">
          <div class="col-lg-10 mx-auto mobile-text">
            <h2>About Me!</h2>
            <p class="lead mb-5 text-justify text-indent">
              I started working on Basic HTML Web Design in 2008 quickly realizing my passion for Web Design and Development. In 2011 I decided to pursue my passion in a professional level by enrolling for an Associate Degree in Computer Science at Northeast State Community College in Blountville TN. I graduated in 2014 with a double Major in Internet and Web Development and Computer Programming.</p>
            <p class="lead mb-5 text-justify text-indent">Since than I been working full time as a Web Developer maintaining, designing and developing websites. My work ranges from front-end designs(HTML, Java Script, JQuery, CSS, SCSS, Bootstrap, Vuejs and Angular), to back-end developments(PHP, Payment Portals, API, Ajax). I also work as a freelance Web Designer and have worked on several projects that include WordPress, Laravel and PayPal.</p>
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

        </div>
      </div>
    </section>




    <!-- LINKS -->
    <section class="content-section bg-dark text-white text-center" id="links">
      <div class="container pt-5 mb-5 mt-5">
        <div class="row">
          <div class="col-sm-4">
            <div class="link-div w-25 h-75 pt-3">
              <!--<font-awesome-icon icon="code-branch" size="4x" class="mb-3"/>-->
              <a class="link" href="https://github.com/ettedo2000" target="_blank" >
                <img src="../assets/img/github.png" style="filter: invert(100%);height: 40%" class="mb-3"/>
                <div>
                  <span>GitHub</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="link-div w-25 h-75 pt-3">
              <a href="https://www.linkedin.com/in/odette-salhofer-simons/" target="_blank">
                <img src="../assets/img/linkedin.png" style="filter: invert(100%);height: 30%" class="mb-3"/>
                <div>
                  <span>LinkedIN</span>
                </div>

              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="link-div w-25 h-75 pt-3">
              <a href="https://jsfiddle.net/user/ettedo2000/fiddles/" target="_blank">
                <img src="../assets/img/jsfiddle.png" style="filter: invert(100%);height: 30%" class="mb-3"/>
                <div>
                  <span>JsFiddle</span>
                </div>
              </a>
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
                    <span v-if="firebaseError">{{errorSendingEmail}}</span>
                    <span v-else style="color:darkred;margin: 10px 5px;">{{errorMassageValid}}</span>
                  </div>
                  <div class="col-2"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- Modal Component -->
      <b-modal id="modal1" title="Soap Store" ok-only ok-variant="secondary" ok-title="OK">
        <p class="my-4">
          One of my older projects this site is a e-store for a soap and cosmetic store.
          The website implement PayPal, shopping cart, a product gallery and Adobe
          Photoshop slice.
        </p>
      </b-modal>

      <b-modal id="modal2" title="Tile Game" ok-only ok-variant="secondary" ok-title="OK">
        <p class="my-4">
          A simple JavaScript tile game. The objective is to click on each tile to rotated the tile to reveal each images
          and find the dog walking in the park.
          Tiles rearrange into new position on every refresh.
          <br/>This game was written in:
        </p>
      </b-modal>

      <b-modal id="modal3" title="Tennessee County Clerk" ok-only ok-variant="secondary" ok-title="OK">
        <p class="my-4">
          This site is a Tennessee State website build by Business Information System that allows user to renew plates, apply for business or notary application or request marriage licenses.
          In the 5 years working for BIS I have been a part of the team that would maintain, updated and develop all component in Tennessee County Clerk.
          <br/>Just recently I have helped with redesigning this site. Our task was to update the back-end to be compatible with PHP 7, overhaul MYSQL, and the front-end.
          Our goal was to make the site mobile responsive, user friendly while giving the site a new fresh look.
          The site implements following:
        </p>
      </b-modal>

      <b-modal id="modal4" title="EZDealerTag" ok-only ok-variant="secondary" ok-title="OK">
        <p class="my-4">
          In 2014, I was the main developer for EzDealerTag build by Business Information System in Tennessee.
          The site was established to let Dealers register there sold cars and print temporary tags
          for the buyer. The program also has an API Interface for larger dealerships to register multiple cars, while
          another API is directly sending information to the Tennessee State database for law enforcement use.
          ACH is setup for direct payment of state, county and local fees.

          The site implements following:
        </p>
      </b-modal>

      <b-modal id="modal5" title="specialtyMarriage" ok-only ok-variant="secondary" ok-title="OK">
        <p class="my-4">
          In 2017, I was the main developer for Specialty Marriage Certificate build by Business Information System in Tennessee.
          The site was established to let users select and purchase specialty marriage certificates of various images
          offered by the counties. The site is setup for direct payment and uucp to local counties.

          The site implements following:
        </p>
      </b-modal>
      <b-modal id="modal6" title="Tile Game" ok-only ok-variant="secondary" ok-title="OK">
        <p class="my-4">
          This is a volunteer project helping an organization updating and maintaining a Travel WordPress site. Currently a
          new map with travel hot-spots was added to the site.
          This site is still being updated and developed.
          <br/>This site was written in:
        </p>
      </b-modal>
    </section>
  </div>
</template>

<script>

import { writeEmail } from '@/firebase'

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
      firebaseError: false,
      errorSendingEmail: 'An error Occurred sending the email'
    }
  },
  props: {
  },
  watch: {

    '$route'() {
      this.setNewScroll()
      //console.log(this.$route)
    }
  },
  methods: {
    addEmail () {
      /* eslint-disable no-useless-escape */
      let reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
     // console.log(this.userData.email)
      if (this.userData.email == '') {
        this.errorRequired = true
        this.errorValid = false
      } else if (!reg.test(this.userData.email)) {
        this.errorValid = true
        this.errorRequired = false
      } else {
        writeEmail.add({
          email: this.userData.email,
          date: this.userData.date,
          name: this.userData.name,
          phone: this.userData.phone,
          message: this.userData.message
        }).then(() => {
          this.success = true
          this.errorRequired = false
          this.errorValid = false
        }).catch((error) => {
            console.log(error)
          this.errorValid = true
          this.errorRequired = false
          this.firebaseError = true
        });
      }
    },
    setNewScroll () {

      const el = document.getElementById(this.$route.hash.slice(1))
      if (el) {
        setTimeout(function(){
          window.scrollTo(0, el.offsetTop - 180)
        },1)
      }
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

a:focus, a:hover {
  color: #f5f5f5;
}
ul#headerQuote {
  list-style-type: none;
}

</style>
