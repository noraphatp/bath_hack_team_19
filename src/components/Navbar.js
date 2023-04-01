import React from 'react';
import NavbarCSS from '../css/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={NavbarCSS.container}>
      <div className={NavbarCSS['brand-section']}>
        <p className={NavbarCSS['brand-name']}>Brand</p>
      </div>
    </nav>
  );
}
