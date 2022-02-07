import React, {useState} from "react";
import "./typewriter.css";
import { InView } from 'react-intersection-observer';

function PersonalProjects() {
const [animation, setAnimation] = useState(false) 

  return (
    <section className="personal-projects">
      <header className="section-header">
      <InView as="h2" onChange={(inView) => {setAnimation(inView)}} className={`section-header-title ${animation ? "typewriter" : "typed"}`}>
          <h2>// Projects</h2>
        </InView>
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
