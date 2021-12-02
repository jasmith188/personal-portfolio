import React from 'react';
import './Projects.css';
import weddingKnot from '../images/wedding-wire.jpg';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div>
        <div className="projects-examples">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <p>Click here to view website</p>
            <p>Github</p>
          </div>
        </div>
        <div className="projects-examples" id="projects-2">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <p>Click here to view website</p>
            <p>Github</p>
          </div>
        </div>
        <div className="projects-examples">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <p>Click here to view website</p>
            <p>Github</p>
          </div>
        </div>
        <div className="projects-examples" id="projects-4">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <p>Click here to view website</p>
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
