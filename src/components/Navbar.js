import React, { useState, useEffect } from "react";
import styles from "../css/navbar.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "../css/styles.css";
import { auth } from "../firebase";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedInput, setSelectedInput] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    const handleKeyDown = (event) => {
      if (!selectedInput) {
        switch (event.key) {
          case "1":
            window.location.href = "/find-jobs";
            break;
          case "2":
            window.location.href = "/accessibility";
            break;
          case "3":
            window.location.href = "/login";
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      unsubscribe();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedInput]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link to="/find-jobs" className={styles.navbarLink}>
              Find Jobs
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/accessibility" className={styles.navbarLink}>
              Accessibility
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/about" className={styles.navbarLink}>
              About
            </Link>
          </li>
          {loggedIn ? (
            <li className={styles.navbarItem}>
              <Link to="/account" className={styles.navbarLink}>
                My Account
              </Link>
            </li>
          ) : (
            <li className={styles.navbarItem}>
              <Link to="/login" className={styles.navbarLink}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
