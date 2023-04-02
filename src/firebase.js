import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkSyfyQQb-7y5W0lBGhDn2OC_kH13ymAk",
  authDomain: "jobbridge-90930.firebaseapp.com",
  projectId: "jobbridge-90930",
  storageBucket: "jobbridge-90930.appspot.com",
  messagingSenderId: "495369198483",
  appId: "1:495369198483:web:87c0733c1a447277b12666",
  measurementId: "G-EXH18RBXDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };