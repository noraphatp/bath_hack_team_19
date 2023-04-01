import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Navbar from './Navbar';
import HomePageCSS from "../css/homePage.module.css";

export default function About() {
  return (  
    <div>
      <Navbar />
    <h1>Welcome to the About Page</h1>
    </div>
  );
};
