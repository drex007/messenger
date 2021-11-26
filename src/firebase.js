import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  
  apiKey: "AIzaSyA1bzwvMSPOjITaNNI-PIehJ0B-hjPA828",
  authDomain: "ark-messenger.firebaseapp.com",
  projectId: "ark-messenger",
  storageBucket: "ark-messenger.appspot.com",
  messagingSenderId: "93170810591",
  appId: "1:93170810591:web:d55cbaa1ccd08e1f71f36a",
  measurementId: "G-2FLVNP2Y2L"

});

const db = firebaseApp.firestore();

export default db; 