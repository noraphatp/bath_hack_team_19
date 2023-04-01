import React from 'react';
import styles from '../css/navbar.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
      <Link to="/" className={styles.navbarLogo}>
        <img src={logo} alt="Logo" />
      </Link>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link to="/jobs" className={styles.navbarLink}>
              Jobs
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/about" className={styles.navbarLink}>
              About the Project
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/account" className={styles.navbarLink}>
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
