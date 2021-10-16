import React from "react";
import "./homepage.css";

function Homepage() {
  return (
    <section className="homepage full-page">
      <section className="homepage-title">
        <h1>
          <span className="animate__animated animate__bounceIn">V</span>
          <span>i</span>
          <span>n</span>
          <span>h</span>
          <br />
          <span>C</span>
          <span>h</span>
          <span>u</span>
        </h1>
        <p className="job-title">Software Engineer</p>
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
