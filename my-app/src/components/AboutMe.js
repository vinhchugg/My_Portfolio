import React, {useState} from "react";
import "./typewriter.css";
import "./styles.css";

import { InView } from 'react-intersection-observer';

const AboutMe = () => {
const [animation, setAnimation] = useState(false) 

  return (
    <section className="about-me">
      <header className="section-header">
        <InView as="h2" onChange={(inView) => {setAnimation(inView)}} className={`section-header-title ${animation ? "typewriter" : "typed"}`}>
          <h2>// About Me</h2>
        </InView>
      </header>
      <div className="text-centered">
        <p>
          Software Engineer Consultant at Bright Network with a degree in
          Mathematics.
        </p>
        <p>
          I’ve completed a 12-week bootcamp that allows me to work across both
          Front End and Back End Development.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
