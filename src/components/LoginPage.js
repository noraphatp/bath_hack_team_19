import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageCSS from "../css/loginpage.module.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
	event.preventDefault();
	try {
	  if (isSignup) {
		// sign up code
	  } else {
		// sign in code
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		console.log("Signed in:", userCredential.user);
		navigate("/find-jobs"); // Navigate to the find jobs page
	  }
	} catch (error) {
	  console.error("Error:", error.message);
	}
  };

  const [fullnameInput, setFullnameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

  const handleSpeechInputEmail = () => {
	const recognition = new window.webkitSpeechRecognition();
	recognition.onresult = function (event) {
		const result = event.results[0][0].transcript;
		setEmailInput(result);
	};
	recognition.start();
};

const handleSpeechInputPassword = () => {
	const recognition = new window.webkitSpeechRecognition();
	recognition.onresult = function (event) {
		const result = event.results[0][0].transcript;
		setPasswordInput(result);
	};
	recognition.start();
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
		    <button
								type="button"
								className={LoginPageCSS.button}
								onClick={handleSpeechInputEmail}
							>
								🎤
							</button>
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
			<button
								type="button"
								className={LoginPageCSS.button}
								onClick={handleSpeechInputPassword}
							>
								🎤
							</button>
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
