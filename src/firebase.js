import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyBFi_xidFH-ZIsRftqJNHNe-n-GaeW2DMY",
    authDomain: "odette-simons-portfolio.firebaseapp.com",
    databaseURL: "https://odette-simons-portfolio.firebaseio.com",
    projectId: "odette-simons-portfolio",
    storageBucket: "odette-simons-portfolio.appspot.com",
    messagingSenderId: "92673616789",
    appId: "1:92673616789:web:cca4a3a4deec56ae1f249c"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const writeEmail = db.collection('email')

export {
    db,
    auth,
    writeEmail
}