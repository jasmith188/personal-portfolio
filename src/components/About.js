import React from 'react';
import './About.css';
import profilePic from '../images/profile.jpeg';

function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1 id="title">
          Hello, I'm Jimmy Smith <br />
          I'm a <span>Web Developer</span>
        </h1>
        <p>
          I greatly value self-development. I thrive in environments that push
          me to grow. I am a highly motivated and progress-focused Web Developer
          with 2+ years of experience. Working in the hectic restaurant business
          for the past 15 years has honed my skills in teamwork, time-management
          and dealing with ambiguity. These skills have allowed me to
          successfully transition my career from a chef to a Full Stack
          Developer.
        </p>
        <p>
          I have a deep understanding of Semantic HTML, CSS/SCSS, JavaScript,
          TypeScript, React.js, Node.js, jQuery, Git, REST API's, SQL and
          relational databases.
        </p>
        <a
          href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:007daac2-9c92-455b-9465-9c901cbeed03"
          rel="noreferrer"
          target="_blank"
        >
          <h1>
            <button>View Resume</button>
          </h1>
        </a>
      </div>
      <div>
        <img src={profilePic} alt="profile-pic" />
      </div>
    </div>
  );
}

export default About;
