import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import UserList from "./components/UserList";
import FindJobs from "./components/FindJobs";
import Accessibility from "./components/Accessibility"; // Import the Accessibility component
import About from "./components/About"; // Import the About component

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/accessibility" element={<Accessibility />} /> {/* Add a route for Accessibility */}
        <Route path="/about" element={<About />} /> {/* Add a route for About */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
