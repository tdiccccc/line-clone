import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyDVh29Z2RDplb1xVB_-UIgGFNXKxuH5WZo",
  authDomain: "line-clone-32b67.firebaseapp.com",
  projectId: "line-clone-32b67",
  storageBucket: "line-clone-32b67.appspot.com",
  messagingSenderId: "480659204801",
  appId: "1:480659204801:web:d051e075c88902f3358240"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};