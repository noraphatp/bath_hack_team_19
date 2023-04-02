import React from 'react';
import styles from '../css/aboutTheProject.module.css';
import Navbar from './Navbar';

const AboutTheProject = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.title}>How Did We Make The Project?</h1>
          <p className={styles.text}>
            Welcome to JobBridge, an AI-powered job portal designed to support people with disabilities in their career paths. From the project name and idea, to the layout and even this very paragraph you are reading, everything was created using AI technologies like ChatGPT, CoPilot, and image generation software.
          </p>
          <p className={styles.text}>
            Our goal is to connect job seekers with disabilities to inclusive employers and provide resources for workplace accommodations. With AI, we can help break down some of the barriers that people with disabilities face when looking for suitable employment.
          </p>
          <p className={styles.text}>
            We created JobBridge using only AI technologies, believing that it has the potential to revolutionize the way we work. We are proud of what we have accomplished, and we hope that it will make a positive impact in the lives of people with disabilities.
          </p>
          <p className={styles.text}>
            Take a look at some of our many prompts below and explore the rest of our site to learn more.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTheProject;
