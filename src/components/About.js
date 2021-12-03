import React from 'react';
import './About.css';
import profilePic from '../images/profile.jpeg';

function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <h1 id="title">
          Hello, I'm Jimmy Smith <br /> I'm a <span>Web Developer</span>
        </h1>
        <p>
          I greatly value self-development. I thrive in environments that push
          me to grow. I am a highly motivated and progress-focused Web Developer
          with 2+ years of experience and a background in hospitality as a fine
          dining Chef. With a track record of meeting deadlines and
          dependability, I believe I would be a great contribution.
        </p>
        <p>
          I have a deep understanding of Semantic HTML, CSS/SCSS, JavaScript,
          TypeScript, React.js, Node.js, jQuery, Git, REST API's, SQL and
          relational databases.
        </p>
        <a href="resume.com">
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
