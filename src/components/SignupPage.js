import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupPageCSS from "../css/signuppage.module.css";

function SignupPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullname, setFullname] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Email:", email, "Password:", password);
		// Add your authentication logic here
	};

	const [fullnameInput, setFullnameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const handleSpeechInputFullname = () => {
		const recognition = new window.webkitSpeechRecognition();
		recognition.onresult = function (event) {
			const result = event.results[0][0].transcript;
			setFullnameInput(result);
		};
		recognition.start();
	};

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
		<div className={SignupPageCSS.container}>
			<div className={SignupPageCSS["sub-container"]}>
				<p className={SignupPageCSS.header}>Sign up</p>
				<form
					onSubmit={handleSubmit}
					className={SignupPageCSS.form}
				>
					<div>
						<label htmlFor="fullnanme">Full name</label>
						<div className={SignupPageCSS.inputWithButton}>
							<input
								type="fullname"
								id="fullname"
								value={fullnameInput}
								onChange={e => setFullnameInput(e.target.value)}
								required
							/>
							<button
								type="button"
								className={SignupPageCSS.button}
								onClick={handleSpeechInputFullname}
							>
								🎤
							</button>
						</div>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<div className={SignupPageCSS.inputWithButton}>
							<input
								type="email"
								id="email"
								value={emailInput}
								onChange={e => setEmailInput(e.target.value)}
								required
							/>
							<button
								type="button"
								className={SignupPageCSS.button}
								onClick={handleSpeechInputEmail}
							>
								🎤
							</button>
						</div>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<div className={SignupPageCSS.inputWithButton}>
							<input
								type="password"
								id="password"
								value={passwordInput}
								onChange={e => setPasswordInput(e.target.value)}
								required
							/>
							<button
								type="button"
								className={SignupPageCSS.button}
								onClick={handleSpeechInputPassword}
							>
								🎤
							</button>
						</div>
					</div>
					<button
						type="submit"
						className={SignupPageCSS["login-button"]}
					>
						Signup
					</button>
					<p className={SignupPageCSS["register-text"]}>
						Already have an account yet?
					</p>
					<Link
						to="/login"
						className={SignupPageCSS["link-to-signup"]}
					>
						<button>Login</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default SignupPage;
