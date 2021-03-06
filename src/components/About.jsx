import Me from "../assets/me.jpg";
import React from 'react'

function About(){
    return(
    <span id="about">

      <div className="about" id="about">
        <h2 className="about-title"> About Me. </h2>
        <div className="overlay1">
          <div className="overlay2">
            <div className="overlay3">
              <img src={Me} className="me" alt="me" />
            </div>
          </div>
        </div>
        <br />
        <div className="about-description">
          <p className="about-me">
            I'm a software engineer specializing in front-end development. My
            passions are innovation, responsive design, and making a difference
            with my code. Working at Walgreens as a manager at a young age made
            me realize that I could quickly adapt to new situations and easily
            learn new skills. One new skill that I had learned was problem
            solving. I was able to build upon that skill later by taking the
            General Assembly Software Engineer Immersive course (the largest
            learning experience of my life thus far.) Throughout my life, I've
            also had to develop gritt, due to my mother being a drug addict.
            Luckily this led me to form my strong moral code and pushed me to
            want to pursue a career I could make a difference in. When I'm not
            coding, you can find me hanging out with my dog, Frank and my
            chicken, Gertrude (probably daydreaming about more pets.)
          </p>
        </div>
        <br />
        <br />
        <div className="skill-list">
          <p className="skill-description">Skills:</p>
          <div className="css-wrap">
            <h3 className="css-name">CSS</h3>
            <img
              className="css"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
          </div>
          <div className="js-wrap">
            <h3 className="js-name">JavaScript</h3>
            <img
              className="js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript logo"
            />
          </div>
          <div className="html-wrap">
            <h3 className="html-name">HTML</h3>
            <img
              className="html"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html logo"
            />
          </div>
          <div className="python-wrap">
            <h3 className="python-name">Python</h3>
            <img
              className="python"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="python logo"
            />
          </div>
          <div className="react-wrap">
            <h3 className="react-name">React</h3>
            <img
              className="react"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react logo"
            />
          </div>
          <div className="mongo-wrap">
            <h3 className="mongo-name">MongoDB</h3>
            <img
              className="mongo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="mongo logo"
            />
          </div>
          <div className="node-wrap">
            <h3 className="node-name">Node.js</h3>
            <img
              className="node"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node logo"
            />
          </div>
        </div>
      </div>
      </span>
    )
}
      
export default About