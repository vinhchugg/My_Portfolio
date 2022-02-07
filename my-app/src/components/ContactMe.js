import React, { useState } from "react";
import "./typewriter.css";
import { InView } from 'react-intersection-observer';


function ContactMe() {
const [animation, setAnimation] = useState(false) 

  return (
    <section>
      <header className="section-header">
      <InView as="h2" onChange={(inView) => {setAnimation(inView)}} className={`section-header-title ${animation ? "typewriter" : "typed"}`}>
          <h2>// Contact Me</h2>
        </InView>
      </header>
      <div className="text-centered">
        <p>Email: vinhchugg@gmail.com</p>
        <a href="https://github.com/vinhchugg">GitHub: https://github.com/vinhchugg</a>
        <a href="https://www.linkedin.com/in/vinh-chu-7502b81b3/">LinkedIn: https://www.linkedin.com/in/vinh-chu-7502b81b3/</a>
        <p>[CV on Enquiry]</p>
      </div>
    </section>
  );
}

export default ContactMe;
