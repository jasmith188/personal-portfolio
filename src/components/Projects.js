import React from 'react';
import './Projects.css';
import weddingKnot from '../images/wedding-wire.jpg';
import covid19 from '../images/covid-19.jpg';
import githubBlueLogo from '../images/github-blue.png';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div>
        <div className="projects-examples">
          <a
            href="https://stupefied-thompson-35d16d.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weddingKnot} alt="wedding-knot" />
          </a>
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <ol>
              <li>
                A fully responsive wedding website that shows their guest
                information about the couple/wedding party, venue, lodging and
                activities
              </li>
              <li>I implemented a RSVP form using Formspree CLI and React</li>
              <li>Tools: React, SCSS, Formspree</li>
            </ol>
            <div className="projects-links">
              <a
                href="https://stupefied-thompson-35d16d.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View</button>
              </a>
              <p>
                <a
                  href="https://github.com/jasmith188/wedding-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubBlueLogo} alt="github-logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="projects-examples">
          <a
            href="https://dreamy-khorana-1fd10a.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={covid19} alt="wedding-knot" />
          </a>
          <div className="projects-content">
            <h1>COVID-19 Tracker</h1>
            <ol>
              <li>
                A fully responsive COVID-19 Tracker that allows user to find
                total cases by country or worldwide
              </li>
              <li>
                I used a third party API (disease.sh) to retrieve reliable
                global disease information in a JSON format
              </li>
              <li>Tools: Firebase, React, Material UI, LineGraph</li>
            </ol>
            <div className="projects-links">
              <a
                href="https://dreamy-khorana-1fd10a.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View</button>
              </a>
              <p>
                <a
                  href="https://github.com/jasmith188/covid-19-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubBlueLogo} alt="github-logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
