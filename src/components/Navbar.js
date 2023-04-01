import React from 'react';
import styles from '../css/navbar.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';


export default function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);
  const [colorScheme, setColorScheme] = useState('default');

  function handleColorSchemeChange(e) {
    setColorScheme(e.target.value);
    document.documentElement.setAttribute('data-theme', e.target.value);
  }
  //Above function might be better outside of the Navbar component.

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
        <div
    className={`${styles.navbarDropdown} ${
      showDropdown ? styles.navbarDropdownVisible : ''
    }`}
  >
    <button
      className={styles.navbarDropdownButton}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      Change Color Scheme
    </button>
    <div className={styles.navbarDropdownContent}>
      <button value="default" onClick={handleColorSchemeChange}>
        Default
      </button>
      <button value="colorblind-friendly" onClick={handleColorSchemeChange}>
        Colorblind Friendly
      </button>
      {/* Add more color scheme options here */}
    </div>
  </div>

    </nav>
  );
};
