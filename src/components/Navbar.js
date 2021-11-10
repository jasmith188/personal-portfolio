import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;
