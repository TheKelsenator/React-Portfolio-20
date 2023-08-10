import React from 'react';
import Main from './main/Main';
import Side from './side/Side';

const styles = {
  work: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '40px',
    paddingTop: '40px',
    color: '#09114e',
    backgroundColor: '#964141',
  },
  workText: {
    fontSize: '40px',
    color: '#09114e',
    padding: '20px',
    borderRight: '#09114e solid 3px',
  },
}

function Portfolio() {
  return (
    <div style={styles.work}>
    <a style={styles.workText}>My Work</a>
      <Main />
      <Side />
    </div>
  );
}
export default Portfolio;
