import React from "react";
import ResumePDF from "./ResumePDF";
import resume from "../assets/resume.pdf";
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

function Homepage() {
  return (
    <div className="homepage">
      <div className="intro">
        <h1 className="name"> Hi, I'm Brooke.</h1>
        <br />
        <br />
        <p className="tagline">
          Front-End engineer looking to create code that makes a difference.
        </p>
      </div>
      <Projects />
      <About />
      <Contact />
      <span id="resume"></span>
      <div className="resume" id="resume">
        <h2 className="resume-title">Resume.</h2>
        <ResumePDF />
        <button className='download'>
          <a href={resume} download>
            Click to Download
          </a>
        </button>
      </div>
      <br />
      <div className="footer">
        <a href="https://github.com/brookecalhoun">
          {" "}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />{" "}
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/brooke-calhoun">
          {" "}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />{" "}
        </a>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Homepage;
