import React from 'react';
import './About.css';
import profilePic from '../images/profile.jpeg';
import { Card, Accordion, useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <button
      type="button"
      style={{
        backgroundColor: '#393e46',
        color: '#fd7014',
        fontWeight: 'bold',
        border: 'none',
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function About() {
  return (
    <div className="about">
      <div className="accordion-wrapper">
        <p>
          Hello, I'm Jimmy Smith <br /> I'm a <span>Web Developer</span>
        </p>
        <Accordion>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0">Click me to learn more!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                I have a deep understanding of HTML, CSS/SCSS, JavaScript,
                TypeScript, React.js, Node.js, jQuery, Git, REST API's, SQL and
                relational databases.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="1">
                Click me to learn even more !
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                I greatly value self-development. I thrive in environments that
                push me to grow. I am a highly motivated and progress-focused
                Web Developer with 1+ years of experience and a background in
                hospitality as a fine dining Chef. With a track record of
                meeting deadlines and dependability, I believe I would be a
                great contribution.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <p id="resume-description">
          Click <a href="www.test.com">here</a> to view my most up to date
          resume
        </p>
      </div>
      <div>
        <img src={profilePic} alt="profile-pic" />
      </div>
    </div>
  );
}

export default About;
