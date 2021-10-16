import React from "react";
import "./homepage.css";

function Homepage() {
  return (
    <section className="homepage full-page">
      <section className="homepage-title">
        <h1 className="name animate__animated">
          <span className="animate__animated">V</span>
          <span className="animate__animated">I</span>
          <span className="animate__animated">N</span>
          <span className="animate__animated">H</span>
          <br />
          <span className="animate__animated">C</span>
          <span className="animate__animated">H</span>
          <span className="animate__animated">U</span>
        </h1>
        <p className="job-title animate__animated animate__fadeInLeft">
          Software Engineer
        </p>
      </section>
      <div className="scroll-down">
        <span>Scroll Down</span>
      </div>
      <div className="scroll-down scroll-down--right">
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Homepage;
