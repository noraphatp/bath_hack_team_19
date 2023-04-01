// import React, { useState } from "react";
// import "../App.css";
// import { Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import LoginPageCSS from "../css/loginpage.module.css";
// import { auth, db } from "../firebase";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// function LoginPage() {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [action, setAction] = useState("login");
// 	const [isSignup, setIsSignup] = useState(false);
// 	const auth = getAuth();
// 	const signUpWithEmailAndPassword = async (email, password) => {
// 		try {
// 		  const userCredential = await auth.createUserWithEmailAndPassword(email, password);
// 		  const user = userCredential.user;
	  
// 		  // Add user to the Firestore database
// 		  await db.collection('users').doc(user.uid).set({
// 			email: user.email,
// 			// Add any other user fields you want to store in the database
// 		  });
	  
// 		  console.log("User signed up:", user);
// 		} catch (error) {
// 		  console.error("Error signing up:", error);
// 		}
// 	  };



// 	  const handleSubmit = async (e) => {
// 		e.preventDefault();
	  
// 		try {
// 		  let userCredential;
// 		  if (isSignup) {
// 			// Sign up
// 			userCredential = await auth.createUserWithEmailAndPassword(email, password);
	  
// 			// Add user to the Firestore database
// 			await db.collection("users").doc(userCredential.user.uid).set({
// 			  email: userCredential.user.email,
// 			  // Add any other user fields you want to store in the database
// 			});
	  
// 			console.log("User signed up:", userCredential.user);
// 		  } else {
// 			// Login
// 			userCredential = await auth.signInWithEmailAndPassword(email, password);
// 			console.log("User logged in:", userCredential.user);
// 		  }
// 		} catch (error) {
// 		  console.error("Error during authentication:", error);
// 		}
// 	  };
	  
		  

// 	  return (
// 		<div className={LoginPageCSS.container}>
// 		  <div className={LoginPageCSS["sub-container"]}>
// 			<p className={LoginPageCSS.header}>{isSignup ? "Sign Up" : "Login"}</p>
// 			<form onSubmit={handleSubmit} className={LoginPageCSS.form}>
// 			  <div>
// 				<label htmlFor="email">Email</label>
// 				<input
// 				  type="email"
// 				  id="email"
// 				  value={email}
// 				  onChange={(e) => setEmail(e.target.value)}
// 				  required
// 				/>
// 			  </div>
// 			  <div>
// 				<label htmlFor="password">Password</label>
// 				<input
// 				  type="password"
// 				  id="password"
// 				  value={password}
// 				  onChange={(e) => setPassword(e.target.value)}
// 				  required
// 				/>
// 			  </div>
// 			  <button type="submit" className={LoginPageCSS["login-button"]}>
// 				{isSignup ? "Sign Up" : "Login"}
// 			  </button>
// 			  <p className={LoginPageCSS["register-text"]}>
// 				{isSignup
// 				  ? "Already have an account?"
// 				  : "Don't have an account yet?"}
// 			  </p>
// 			  <button
// 				onClick={() => setIsSignup((prevIsSignup) => !prevIsSignup)}
// 				className={LoginPageCSS["link-to-signup"]}
// 			  >
// 				{isSignup ? "Login" : "Create account"}
// 			  </button>
// 			</form>
// 		  </div>
// 		</div>
// 	  );
	  
// }

// export default LoginPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageCSS from "../css/loginpage.module.css";
import { auth } from "../firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isSignup) {
        await auth.createUserWithEmailAndPassword(email, password);
      } else {
        await auth.signInWithEmailAndPassword(email, password);
      }
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={LoginPageCSS.container}>
      <div className={LoginPageCSS["sub-container"]}>
        <p className={LoginPageCSS.header}>
          {isSignup ? "Sign Up" : "Login"}
        </p>
        <form onSubmit={handleSubmit} className={LoginPageCSS.form}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={LoginPageCSS.error}>{error}</p>}
          <button type="submit" className={LoginPageCSS["login-button"]}>
            {isSignup ? "Sign Up" : "Login"}
          </button>
          <p className={LoginPageCSS["register-text"]}>
            {isSignup
              ? "Already have an account?"
              : "Don't have an account yet?"}
          </p>
          <button
            onClick={() => setIsSignup((prevIsSignup) => !prevIsSignup)}
            className={LoginPageCSS["link-to-signup"]}
          >
            {isSignup ? "Login" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
