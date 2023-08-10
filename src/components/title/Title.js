import React from 'react';
import Background from './assets/background-image2.jpg';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '45px',
    paddingTop: '5px',
    paddingBottom: '10px',
    color: '#09114e',
    backgroundColor: '#b3b289',
    borderRadius: '10px',
    opacity: '.7',
  },
};

function Title() {
  return (
    <div>
      <div style={{ backgroundImage:`url(${Background})`,  backgroundSize: 'cover', padding: '60px 500px',  }}>
        <header>
          <a style={styles.header}>Kelsey M. O'Kelley</a>
        </header>
      </div>
    </div>
  );
}

export default Title;


// <div style={styles.header}>Full-Stack Web Development Student</div>