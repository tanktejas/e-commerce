// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBswFqGsslFR2ncmV2c_ipYAiEbXBcIXYo",
  authDomain: "e-commerce-auth-50986.firebaseapp.com",
  projectId: "e-commerce-auth-50986",
  storageBucket: "e-commerce-auth-50986.appspot.com",
  messagingSenderId: "1075160019741",
  appId: "1:1075160019741:web:d53437ff21b348e77de7f4",
  measurementId: "G-TV4LV9MTGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(firebase);
// const app = firebase.app();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
