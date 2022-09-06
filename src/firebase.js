// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4JJHsFJIaS3m8WRG2rFgHxnNXAt4yAKM",
  authDomain: "react-hotel-b97dc.firebaseapp.com",
  projectId: "react-hotel-b97dc",
  storageBucket: "react-hotel-b97dc.appspot.com",
  messagingSenderId: "115678781839",
  appId: "1:115678781839:web:9b71262f7a7d1b3a392bfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

const db = getFirestore(app);

export {auth, db};