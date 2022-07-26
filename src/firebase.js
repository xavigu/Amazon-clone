import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8rAIsXLtE6yFrQrtGP0s35jqX5Pi2j8g",
  authDomain: "clone-84b1f.firebaseapp.com",
  projectId: "clone-84b1f",
  storageBucket: "clone-84b1f.appspot.com",
  messagingSenderId: "153996991411",
  appId: "1:153996991411:web:7344b795a57a2d5c4e89c6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// data for the authentication
const auth = firebase.auth();

export { db, auth };