import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Navbar from './Navbar';
import HomePageCSS from "../css/homepage.module.css";

export default function FindJobs() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Find Jobs Page</h1>
    </div>
  );
};
