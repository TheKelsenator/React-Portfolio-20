import React from 'react';
import Refractor from './assets/digital-marketing-meeting.jpg';

const styles = {
  mainImg: {
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
}
}


function Main() {
  return (
    <div>
      <div>
        <img style={styles.mainImg} src={Refractor} />
        <div style={styles.projectName}>
          <p><strong>Refractor</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Horiseon</p>
        </div> 
      </div>      
    </div>
  );
}
export default Main;
