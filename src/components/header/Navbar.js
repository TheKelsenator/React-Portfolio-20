import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {

  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px',
    color: '#09114e',
    backgroundColor: '#b3b289',
    flexDirection: 'row',
}
}

function Navbar() {
  return (
    <div styles={styles.navbar}>
        <p style={styles.heading}>About Me</p>
        <p style={styles.heading}>Portfolio</p>
        <p style={styles.heading}>Contact Me</p>
        <p style={styles.heading}>Resume</p>
    </div>
  );
}


export default Navbar;

   <div styles={styles.navbar}>
        <p style={styles.heading}>About Me</p>
        <p style={styles.heading}>Portfolio</p>
        <p style={styles.heading}>Contact Me</p>
        <p style={styles.heading}>Resume</p>
    </div>
