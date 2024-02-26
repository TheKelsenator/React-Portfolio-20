import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    justifyContent: 'space-between',
    padding: '10px 10px',
    fontSize: '20px',
    color: '#09114e',
    backgroundColor: '#b3b289',
  }
}

function Navbar() {
  return (
    <nav styles={styles.navbar}>
        <a style={styles.heading}>About Me</a>
        <a style={styles.heading}>Portfolio</a>
        <a style={styles.heading}>Contact Me</a>
        <a style={styles.heading}>Resume</a>
    </nav>
  );
}


export default Navbar;
