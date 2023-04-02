import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../css/accessibility.module.css";

const Accessibility = () => {
  const [theme, setTheme] = useState("");
  const [fontSize, setFontSize] = useState("16px");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedFontSize = localStorage.getItem("fontSize");

    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
      setTheme(storedTheme);
    }

    if (storedFontSize) {
      document.documentElement.style.setProperty("--font-size", storedFontSize);
      setFontSize(storedFontSize);
    }
  }, []);

  const handleColorSchemeChange = (e) => {
    const selectedTheme = e.target.value;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    document.documentElement.style.setProperty("--font-size", selectedFontSize);
    localStorage.setItem("fontSize", selectedFontSize);
    setFontSize(selectedFontSize);
  };

  return (
    <div className={styles.accessibilityContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.centralAlign}>
          <h1 className={styles.welcome}>Accessibility Options</h1>
          <div className={styles.optionsContainer}>
            <h2 className={styles.optionsTitle}>
              Select your preferred colour palette:
            </h2>
            <select
              className={styles.optionsDropdown}
              onChange={handleColorSchemeChange}
              value={theme}
            >
              <option value="">Default</option>
              <option value="deuteranopia">Deuteranopia</option>
              <option value="protanopia">Protanopia</option>
              <option value="high-contrast">High Contrast</option>
            </select>
            <h2 className={styles.optionsTitle}>
              Select your preferred font size:
            </h2>
            <select
              className={styles.optionsDropdown}
              onChange={handleFontSizeChange}
              value={fontSize}
            >
              <option value="16px">Default</option>
              <option value="20px">Large</option>
              <option value="24px">Very Large</option>
              <option value="28px">Extra Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
