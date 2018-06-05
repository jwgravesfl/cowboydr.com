import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBytwkSX1eWuEb2FAQTka_yiOg3IMVAVwo",
    authDomain: "cowboydr-141514.firebaseapp.com",
    databaseURL: "https://cowboydr-141514.firebaseio.com",
    projectId: "cowboydr-141514",
    storageBucket: "cowboydr-141514.appspot.com",
    messagingSenderId: "837673604073"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database();
const auth = firebase.auth()

export {
  db,
  auth,
}