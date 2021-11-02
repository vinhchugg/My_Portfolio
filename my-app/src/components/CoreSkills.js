import React from "react";
import "./typewriter.css";

function CoreSkills() {
  return (
    <section className="core-skills">
      <header className="section-header">
        <div className="typewriter">
          <h2>// Core Skills</h2>
        </div>
      </header>
      <div className="core-skills__text text-centered">
        <h3>Programming Languages</h3>
        <p>
          Python, C++, Java, Web Technologies(HTML, CSS, JavaScript/TypeScript,
          NodeJS)
        </p>
        <h3>Libraries and Frameworks</h3>
        <p>Bootstrap, React, Spring Boot</p>
        <h3>Databases</h3>
        <p>SQL, PostgreSQL, Excel</p>
        <h3>Tools and Enviroments</h3>
        <p>Git, GitHub, Docker</p>
      </div>
    </section>
  );
}

export default CoreSkills;
