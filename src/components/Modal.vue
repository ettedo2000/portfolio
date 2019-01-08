<template>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
