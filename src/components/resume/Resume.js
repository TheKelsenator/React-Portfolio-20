import React from 'react';
import fakeResume from './assets/fakeResume.png';

const styles = {
  resume: {
    color: '#09114e',
    backgroundColor: '#964141',
  },
  resumeText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    color: '#09114e',
    marginRight: '30px',
    padding: '20px',
    borderRight: '#09114e solid 3px',
  },
  resumeImg: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '40px',
    border: '4px solid #09114e',
    borderRadius: '10px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '35px',
    color: '#09114e',
    marginRight: '30px',
    padding: '20px',
  }
}

function Resume() {
  return (
    <div style={styles.resume}>
      <h2 style={styles.resumeText}>Resume</h2>
      <img style={styles.resumeImg} src={fakeResume} />
      <br />
      <p style={styles.links}>Github</p>
      <p style={styles.links}>Linkedin</p>
    </div>
  );
}

export default Resume;
