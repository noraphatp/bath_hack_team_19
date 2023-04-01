import React, { useState } from "react";
import LoginPageCSS from "../css/loginpage.module.css";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Email:", email, "Password:", password);
		// Add your authentication logic here
	};

	return (
		<div className={LoginPageCSS.container}>
			<div className={LoginPageCSS["sub-container"]}>
				<p className={LoginPageCSS.header}>Login</p>
				<form
					onSubmit={handleSubmit}
					className={LoginPageCSS.form}
				>
					<div>
						<label htmlFor="email">Username</label>
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
					<button type="submit" className={LoginPageCSS['login-button']}>Login</button>
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
