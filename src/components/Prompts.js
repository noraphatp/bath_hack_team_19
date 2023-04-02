
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '../css/prompts.module.css'; // Import the new CSS file

const Prompts = () => {
  const textSliderRef = useRef(null);

  useEffect(() => {
    if (textSliderRef.current) {
      const typed_strings = 'make the word ChatGPT bold, and make 2 separate div sections side by side - one will have the title and paragraph of text in (make the text a little smaller if need be to fit in) and the other leave empty for now but what will go here is a Typedjs element that will be used to type out various prompts, just put an empty placeholder component called Prompts.js in its place for now | make the paragraph decriptions of the about page more concise - there is too much to read. Also, increase the default text size of the paragraphs. | .contentContainer { border: none; border-radius: 15px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4); padding: 20px; margin: 100px auto; max-width: 600px; background-color: var(--primary-bg-color); color: #fff; } .centralAlign { display: flex; flex-direction: column; justify-content: center; align-items: center; } .welcome { font-size: calc(2 * var(--font-size, 16px)); margin-bottom: 48px; } .optionsContainer { display: flex; flex-direction: column; } .optionsTitle { font-size: calc(1.5 * var(--font-size, 16px)); margin-bottom: 20px; } .optionsDropdown { font-size: var(--font-size, 16px); padding: 8px; margin-bottom: 40px; } now please style the dropdown list entries to also use the font size selection, and also style it with an animation or something to make it look more interesting |';
      const typed = new Typed(textSliderRef.current, {
        strings: typed_strings.split('|'),
        typeSpeed: 2,
        loop: true,
        backDelay: 3000,
        backSpeed: 3,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [textSliderRef]);

  return (
    <div>
      <p>
        <span ref={textSliderRef} className={`${styles.textSlider} text-slider`}></span>
      </p>
    </div>
  );
};

export default Prompts;
