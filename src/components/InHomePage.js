import React from "react";
import { Link } from "react-router-dom";
import InHomePageCSS from "../css/inhomepage.module.css";
import logo from "./logo.png";

export default function InHomePage() {
	return (
		<div className={InHomePageCSS.container}>
			<div className={InHomePageCSS["sub-container"]}>
        <img
          src={logo}
          alt="logo"
          className={InHomePageCSS.logo}
        />
				<div className={InHomePageCSS.quote}>
					<p className={InHomePageCSS["quote-part-1"]}>
						The power of empathy and understanding can transform lives. Let's
						work towards a society
					</p>
					<p> where we prioritize inclusivity and accessibility for all.</p>
				</div>
				<div className={InHomePageCSS["buttons-container"]}>
          <p className={InHomePageCSS['button-label']}>Start applying for jobs</p>
					<Link to="/find-jobs">
						<button className={InHomePageCSS.button}>Apply</button>
					</Link>
          <p className={InHomePageCSS['button-label']}>Change visual preferences</p>
					<Link to="/accessibility">
						<button className={InHomePageCSS.button}> Accessibility </button>
					</Link>
				</div>
			</div>
		</div>
	);
}
