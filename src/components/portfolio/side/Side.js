import React from 'react';
import Menu from './assets/my-menu-logo.png';
import Movie from './assets/blazing-saddles.png';

const styles = {
  sideSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '40px',
    width: '80%',
  },
  sideImg: {
    display: 'flex',
    maxWidth: '70%',
    margin: 'auto',
    marginBottom: '40px',
    height: 'auto',
    border: '4px solid #09114e',
    borderRadius: '10px',
  },
  projectName: {
    fontSize: '28px',
    color: '#09114e',
    backgroundColor: '#b3b289',
    borderRadius: '10px',
    textAlign: 'center',
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '10px',
    maxWidth: '60%',
    margin: 'auto',
    marginBottom: '40px',
}
}

function Side() {
  return (
    <div style={styles.sideSection}>
      <div>
        <img style={styles.sideImg} src={Menu} />
          <div style={styles.projectName}>
            <p><strong>My Menu</strong><br/>Recipe Search & Save</p>
          </div>  
      </div>
      <div>
        <img style={styles.sideImg} src={Movie} />
          <div style={styles.projectName}>
            <p><strong>Flick Picker</strong><br/>Movie Search</p>
          </div>  
      </div>
    </div>
  );
}
export default Side;

