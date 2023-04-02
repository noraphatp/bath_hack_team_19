import React from 'react';
import styles from '../css/aboutTheProject.module.css';
import Navbar from './Navbar';
import Prompts from './Prompts';

const AboutTheProject = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.aboutContainer}>
            <h1 className={styles.title}>How Did We Make The Project?</h1>
            <p className={styles.text}>
              Welcome to JobBridge, an AI-powered job portal designed to support people with disabilities.
              Everything, including this paragraph, was generated using AI technologies like <strong>ChatGPT</strong>, CoPilot, and image generation software.<br /><br />
            </p>
            <p className={styles.text}>
              Our goal is to connect job seekers with disabilities to inclusive employers.<br />
              By using AI, we can help break down some barriers they face when seeking suitable employment.<br /><br />
            </p>
            <p className={styles.text}>
              We created JobBridge entirely with AI technologies, demonstrating their potential to revolutionize the way we work.
              We're proud of our achievements and hope to positively impact the lives of people with disabilities.<br /><br />
            </p>
            <p className={styles.text}>
              Explore our site to learn more about how AI has shaped this project from start to finish.<br /><br /><br /><br /><br />
            </p>

          </div>
          <div className={styles.promptsContainer}>
            <Prompts />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTheProject;
