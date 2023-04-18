import React from 'react';
import Background from './assets/background-image2.jpg';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    paddingTop: '5px',
    paddingBottom: '5px',
    color: '#09114e',
    backgroundColor: '#b3b289',
    borderRadius: '10px',
  },
};

function Title() {
  return (
    <div>
      <div style={{ backgroundImage:`url(${Background})`,  backgroundSize: 'cover', padding: '60px 100px',  }}>
        <header>
          <div style={styles.header}>Full-Stack Web Development Student</div>
        </header>
      </div>
    </div>
  );
}

export default Title;


// <div style={styles.header}>Full-Stack Web Development Student</div>