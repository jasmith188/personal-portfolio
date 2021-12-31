import React from 'react';
import './Projects.css';
import weddingKnot from '../images/wedding-wire.jpg';
import covid19 from '../images/covid-19.jpg';
import smittysDJ from '../images/smittys-dj-image.png';
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
            <a
              href="https://stupefied-thompson-35d16d.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Wedding Knot</h1>
            </a>
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
            <img src={covid19} alt="covid19" />
          </a>
          <div className="projects-content">
            <a
              href="https://dreamy-khorana-1fd10a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>COVID-19 Tracker</h1>
            </a>
            <ol>
              <li>
                A COVID-19 Tracker that allows user to find total cases by
                country or worldwide
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
        <div className="projects-examples">
          <a
            href="https://www.smittysdj.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={smittysDJ} alt="smittys-dj" />
          </a>
          <div className="projects-content">
            <a
              href="https://www.smittysdj.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Smitty's DJ</h1>
            </a>
            <ol>
              <li>A fully responsive landing page for a local DJ company</li>
              <li>
                Implemented a Netlify form that transmits data to email and data
                sheet
              </li>
              <li>Tools: React, Material UI</li>
            </ol>
            <div className="projects-links">
              <a
                href="https://www.smittysdj.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View</button>
              </a>
              <p>
                <a
                  href="https://github.com/jasmith188/smittys-dj"
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
