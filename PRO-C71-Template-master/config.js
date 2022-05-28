import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDRfdPQ7uKOzN5xme3iVuMLo2M-LIyioAA",
    authDomain: "e-ride-2ad2f.firebaseapp.com",
    projectId: "e-ride-2ad2f",
    storageBucket: "e-ride-2ad2f.appspot.com",
    messagingSenderId: "839511068963",
    appId: "1:839511068963:web:ecc6035c5f4725a623bc96"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
