import React from 'react';
import './Work.css';
import weddingKnot from '../images/wedding-wire.jpg';

const Work = () => {
  return (
    <div className="work">
      <h2>Projects</h2>
      <div className="work-examples">
        <div>
          <p>Wedding Knot</p>
          <img src={weddingKnot} alt="wedding-knot" />
          <p>Click here to view website</p>
          <p>Github</p>
        </div>
        <div>
          <p>Wedding Knot</p>
          <img src={weddingKnot} alt="wedding-knot" />
        </div>
        <div>
          <p>Wedding knot</p>
          <img src={weddingKnot} alt="wedding-knot" />
        </div>
        <div>
          <p>Wedding Knot</p>
          <img src={weddingKnot} alt="wedding-knot" />
        </div>
      </div>
    </div>
  );
};

export default Work;
