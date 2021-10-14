import React from "react";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  return (
    <span id="projects">
      <div className="projects">
        <h2 className="project-title"> Projects. </h2>
        <p className="project-description">swipe to see them all!</p>
        <ProjectCarousel />
      </div>
    </span>
  );
}

export default Projects
