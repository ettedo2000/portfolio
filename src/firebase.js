import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: 'AIzaSyBFi_xidFH-ZIsRftqJNHNe-n-GaeW2DMY',
    authDomain: 'odette-simons-portfolio.firebaseapp.com',
    databaseURL: 'https://odette-simons-portfolio.firebaseio.com',
    projectId: 'odette-simons-portfolio',
    storageBucket: 'odette-simons-portfolio.appspot.com',
    messagingSenderId: '92673616789'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const refEmail = db.collection('email')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    refEmail,
    postsCollection,
    commentsCollection,
    likesCollection
}