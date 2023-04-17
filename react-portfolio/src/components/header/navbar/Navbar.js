import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#work">Portfolio</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
          <li><a href="#contact-me">Resume</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
