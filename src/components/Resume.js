import React from 'react';
import './Resume.css';
import page1 from '../images/resume-page-1.jpg';
import page2 from '../images/resume-page-2.jpg';
import { Carousel } from 'react-bootstrap';

const Resume = () => {
  return (
    <div className="resume">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={page1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={page2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Resume;
