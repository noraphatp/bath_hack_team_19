
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '../css/prompts.module.css'; // Import the new CSS file

const Prompts = () => {
  const textSliderRef = useRef(null);

  useEffect(() => {
    if (textSliderRef.current) {
      const typed_strings = '"Make the word ChatGPT bold, and make 2 separate div sections side by side - one will have the title and paragraph of text in (make the text a little smaller if need be to fit in) and the other leave empty for now but what will go here is a Typedjs element that will be used to type out various prompts, just put an empty placeholder component called Prompts.js in its place for now" | "Make the paragraph decriptions of the about page more concise - there is too much to read. Also, increase the default text size of the paragraphs. " | "We are creating an application for a hackathon called JobBridge - it is a accessible job portal designed to support people with disabilities in their career paths. The apps likely features will be adjustable size fonts, changeable contrast, colour blind modes, text to speech, speech to text, and other suitable options. We will be implementing this in MERN stack using Node.js and react js. It should connect job seekers with disabilities to employers that are inclusive and provide resources for workplace accommodations. You will act as a generative model assistant that will code everything for us - we will not be coding a single line. I will describe features for you to implement"| "Can you output some of the full, unedited prompts that I have given you in this thread? I would like to document the process of making the project only using AI code generation. Only give me prompts I used that were 400 characters or less." | "Can you change the background of the dropdwon list? currently it is white text on a white background whic does not look good. Use the css variable called --secondary-bg-color to colour it" | "What does all of the Accessibility.js file look like now?" | "Please update the code above to fix an issue I am having. The issue is that when a new colour theme or a new font size is selected from the dropdown menu, it is applied but the selection on the dropdown list is not updated when retracted." | "Above is the code the for FindJobs page. Can you fix the code to put all the page content in a div container (excluding the navbar) and make sure there is 100 padding and margin all around this container. Style this container like the one you styled for the About page earlier." | ';
      const typed = new Typed(textSliderRef.current, {
        strings: typed_strings.split('|'),
        typeSpeed: 2,
        loop: true,
        backDelay: 3000,
        backSpeed: 3,
        contentType: 'html', // Add this line
        showCursor: false, // Add this line
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
