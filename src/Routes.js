import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import UserList from "./components/UserList";
import FindJobs from "./components/FindJobs";
import Accessibility from "./components/Accessibility"; // Import the Accessibility component
import InHomePage from "./components/InHomePage";
import AboutTheProject from './components/AboutTheProject';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/signup"
					element={<SignupPage />}
				/>
				<Route
					path="/find-jobs"
					element={<FindJobs />}
				/>
				<Route
					path="/accessibility"
					element={<Accessibility />}
				/>{" "}
				<Route
					path="/users"
					element={<UserList />}
				/>
				{/* Add a route for Accessibility */}
				<Route
					path="/inhome"
					element={<InHomePage />}
				/>
				<Route
					path="/about"
					element={<AboutTheProject />}
				/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
