// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkSyfyQQb-7y5W0lBGhDn2OC_kH13ymAk",
  authDomain: "jobbridge-90930.firebaseapp.com",
  projectId: "jobbridge-90930",
  storageBucket: "jobbridge-90930.appspot.com",
  messagingSenderId: "495369198483",
  appId: "1:495369198483:web:87c0733c1a447277b12666",
  measurementId: "G-EXH18RBXDZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
