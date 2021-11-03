import React from "react";
import "./homepage.css";
import drawing from "../images/Vinh-Portfolio.webp";

function Homepage() {
  return (
    <section className="homepage full-page">
      <section className="homepage-title">
        <section className="title">
          <h1 className="name animate__animated animate__tada">
            VINH
            <br />
            CHU
          </h1>
          <p className="job-title animate__animated animate__fadeInLeft">
            Software Engineer
          </p>
        </section>
        <div className="homepage-img">
          <img
            className="portfolio-drawing"
            src={drawing}
            alt="Drawing of me holding up a sign that says My Portfolio"
          />
        </div>
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
