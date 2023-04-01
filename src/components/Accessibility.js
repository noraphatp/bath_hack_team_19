import React from "react";
import Navbar from "./Navbar";
import styles from "../css/accessibility.module.css"; // Import the new CSS file

const Accessibility = () => {
  const handleColorSchemeChange = (e) => {
    const theme = e.target.value;
    document.documentElement.setAttribute("data-theme", theme);
  };

  const handleFontSizeChange = (e) => {
    const fontSize = e.target.value;
    document.documentElement.style.setProperty("--font-size", fontSize);
  };

  return (
    <div className={styles.accessibilityContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
      <h1 className={styles.welcome}>Accessibility Options</h1>
      <div className={styles.optionsContainer}>
        <h2 className={styles.optionsTitle}>Select your preferred colour palette:</h2>
        <select className={styles.optionsDropdown} onChange={handleColorSchemeChange}>
          <option value="">Default</option>
          <option value="deuteranopia">Deuteranopia</option>
          <option value="protanopia">Protanopia</option>
          <option value="high-contrast">High Contrast</option>
        </select>
        <h2 className={styles.optionsTitle}>Select your preferred font size:</h2>
        <select className={styles.optionsDropdown} onChange={handleFontSizeChange}>
          <option value="16px">Default</option>
          <option value="20px">Large</option>
          <option value="24px">Very Large</option>
          <option value="28px">Extra Large</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
