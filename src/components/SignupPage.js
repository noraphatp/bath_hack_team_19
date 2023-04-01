import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupPageCSS from "../css/loginpage.module.css";

function SignupPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Email:", email, "Password:", password);
		// Add your authentication logic here
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
						<input
							type="fullname"
							id="fullname"
							value={fullname}
							onChange={e => setFullname(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
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
					<Link to="/login" className={SignupPageCSS['link-to-signup']}>
						<button>
							Login
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default SignupPage;