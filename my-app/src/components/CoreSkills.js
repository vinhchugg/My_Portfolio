import React, { useState } from "react";
import "./typewriter.css";
import { InView } from 'react-intersection-observer';

function CoreSkills() {
const [animation, setAnimation] = useState(false) 

  return (
    <section className="core-skills">
      <header className="section-header">
      <InView as="h2" onChange={(inView) => {setAnimation(inView)}} className={`section-header-title ${animation ? "typewriter" : "typed"}`}>
          <h2>// Core Skills</h2>
        </InView>
      </header>
      <div className="core-skills__text text-centered">
        <h3>Programming Languages</h3>
        <p>
          Python, C++, Java, Web Technologies(HTML, CSS, JavaScript/TypeScript,
          NodeJS)
        </p>
        <h3>Libraries and Frameworks</h3>
        <p>React, NextJS, Spring Boot</p>
        <h3>Databases</h3>
        <p>SQL, PostgreSQL, Excel</p>
        <h3>Tools and Enviroments</h3>
        <p>Git, GitHub, Docker</p>
      </div>
    </section>
  );
}

export default CoreSkills;
