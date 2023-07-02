import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";




const firebaseConfig = {
    apiKey: "AIzaSyCIrLyheFPiySdMjQFr6MFPSJUksLPP8pM",
    authDomain: "mech-buddy-a9365.firebaseapp.com",
    projectId: "mech-buddy-a9365",
    storageBucket: "mech-buddy-a9365.appspot.com",
    messagingSenderId: "783180012910",
    appId: "1:783180012910:web:0d405a2f7583c2f85cb57f",
    measurementId: "G-WWLB6N21GX"
  };
  

  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();


  export { auth };


