import React from "react";
import "./typewriter.css";
import "./animation";
import { useInView } from "react-intersection-observer";
import "./styles.css";

function AboutMe() {
  return (
    <section className="about-me">
      <header className="section-header">
        <div className="section-header-title typewriter">
          <h2>// About Me</h2>
        </div>
      </header>
      <div className="section-info">
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
