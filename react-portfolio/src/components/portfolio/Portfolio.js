import React from 'react';
import Main from './main/Main';
import Side from './side/Side';

const styles = {
  work: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingTop: '40px',
    color: '#09114e',
    backgroundColor: '#964141',
  },
  workText: {
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

function Portfolio() {
  return (
    <div style={styles.work}>
    <h2 style={styles.workText}>My Work</h2>
      <Main />
      <Side />
    </div>
  );
}
export default Portfolio;
