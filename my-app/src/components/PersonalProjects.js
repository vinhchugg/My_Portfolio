import React from "react";
import "./typewriter.css";

function PersonalProjects() {
  return (
    <section className="personal-projects">
      <header className="section-header">
        <div className="typewriter">
          <h2>// Projects</h2>
        </div>
      </header>
      <div className="text-centered">
        <h3>Frontend Mentor</h3>
        <p>
          Improving front-end coding skills by completing a series of challenges
          using HTML, CSS and JavaScript.
        </p>
        <h3>The Odin Project</h3>
        <p>
          Developing on the fundamentals of Web Development though building
          mini-projects using HTML, CSS and JavaScript.
        </p>
      </div>
    </section>
  );
}

export default PersonalProjects;
