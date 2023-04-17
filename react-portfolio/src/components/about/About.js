import React from 'react';
import Buck from './assets/buck-deadhead.jpg';

const styles = {
  about: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingTop: '40px',
    color: '#09114e',
    backgroundColor: '#964141',
  },
  aboutText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    color: '#09114e',
    marginRight: '30px',
    padding: '20px',
    borderRight: '#09114e solid 3px',
  },
  aboutImg: {
    display: 'flex',
    maxWidth: '30%',
    margin: 'auto',
    marginBottom: '40px',
    height: 'auto',
    border: '4px solid #09114e',
    borderRadius: '10px',
  },
  aboutParagraph: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    paddingLeft: '20px',
    paddingRight: '40px',
  }
}

function About() {
  return (
    <div style={styles.about}>
      <h2 style={styles.aboutText}>About Me</h2>
        <img src={Buck} style={styles.aboutImg} />
        <p style={styles.aboutParagraph}>
        My name is Kelsey M. O'Kelley. I am currently enrolled in a
        Full-Stack Web Development Program held by The University of Utah. 
        I am 34 years old and live year round in beautiful Stanley, ID - 
        population 67 people and Gateway to the wild and scenic Frank Church 
        Wilderness Area.
        <br />
        <br />
        Below you will get an introduction to some of 
        my work as a Full-Stack Website Development Student, as well as ways 
        to reach me.</p>
  </div>
  );
}

export default About;