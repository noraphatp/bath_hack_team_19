import React from 'react';
import Navbar from './Navbar';
import AboutPageCSS from '../css/aboutpage.module.css';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className={AboutPageCSS.container}>
        <div className={AboutPageCSS.quote}>
          <p>"JobBridge empowers disabled individuals to achieve their career</p>
          <p>potential by connecting them with inclusive employers."</p>
        </div>
      </div>
    </div>
  );
}
