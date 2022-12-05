import firebase from "firebase/app";
import "firebase/auth"
// import dotenv from 'dotenv'
// dotenv.config();

var firebaseConfig = {

    apiKey: "AIzaSyA2UkedNxPaUlYaDkKcMKBW_l8o9pojPhQ",
  authDomain: "knockout-b3325.firebaseapp.com",
  projectId: "knockout-b3325",
  storageBucket: "knockout-b3325.appspot.com",
  messagingSenderId: "46927228104",
  appId: "1:46927228104:web:6c47a9442b7b72716809fd",
  measurementId: "G-82J3HJ2TXM"
   
   };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;