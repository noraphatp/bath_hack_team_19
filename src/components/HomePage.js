import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import Navbar from "./Navbar";
import HomePageCSS from "../css/homepage.module.css";
import logo from "./logo.png";

export default function HomePage() {
	return (
		<div className={HomePageCSS.container}>
			<img
				src={logo}
				alt="logo"
				className={HomePageCSS.logo}
			/>
			<p className={HomePageCSS.welcome}>Welcome to JobBridge</p>
			<div className={HomePageCSS.description}>
				<p className={HomePageCSS.question}>What is JobBridge?</p>
				<p className={HomePageCSS["text-1"]}>
					JobBridge is an accessible job portal designed to support people with
					disabilities in their career paths. Our project was completely created
					using artificial intelligence, from the project name and idea, to the
					layout and even this very paragraph you are reading now. That's right,
					not a single line of code was written by a human, and all decisions
					were made by ChatGPT, CoPilot, and image generation software.
				</p>
			</div>
			<Link to="/login">
				<button className={HomePageCSS.button}> Get started </button>
			</Link>
		</div>
	);
}
