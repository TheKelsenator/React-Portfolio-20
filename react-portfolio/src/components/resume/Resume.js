import React from 'react';

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
}

function Resume() {
  return (
    <div style={styles.resume}>
      <h2 style={styles.resumeText}>Resume</h2>
      
    </div>
  );
}

export default Resume;
