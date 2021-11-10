import React from 'react';
import './Resume.css';
import page1 from '../images/resume-page-1.jpg';
import page2 from '../images/resume-page-2.jpg';

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume-screenshot">
        <a href={page1}>
          <img src={page1} alt="resume-screenshot" />
        </a>
        <a href={page2}>
          <img src={page2} alt="resume-screenshot" />
        </a>
      </div>
    </div>
  );
};

export default Resume;
