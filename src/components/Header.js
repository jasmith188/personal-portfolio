import React from 'react';
import '../components/Header.css';
// import TypeWriter from "react-typewriter";

const Header = () => {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            className="smoothscroll"
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:007daac2-9c92-455b-9465-9c901cbeed03"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
