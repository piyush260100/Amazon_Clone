import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIkR9usPnuhqpLKuCRJ9eW7D-FBbHWqeU",
  authDomain: "clone-f3de1.firebaseapp.com",
  projectId: "clone-f3de1",
  storageBucket: "clone-f3de1.appspot.com",
  messagingSenderId: "378089016634",
  appId: "1:378089016634:web:179f96ddb06bfcff5f1403",
  measurementId: "G-CV1HXTKFZH"
};

//initialize firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();

//variable to handle all sign in and register statements. 
const auth = firebase.auth();

export { db, auth };

