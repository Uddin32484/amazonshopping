import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseapp =  firebase.initializeApp( {
  apiKey: "AIzaSyDaeyBUHtfUawZ16sTH95_iyCBQZ3VQL4s",
  authDomain: "clone-yub.firebaseapp.com",
  projectId: "clone-yub",
  storageBucket: "clone-yub.appspot.com",
  messagingSenderId: "747412846081",
  appId: "1:747412846081:web:741ab17c85a6b42ef5f200",
  measurementId: "G-NE7SN323E7"
});

const db = firebase.firestore();

export { db };
