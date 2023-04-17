import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingLeft: '40px',
    color: '#09114e',
    backgroundColor: '#b3b289',
    paddingBottom: '30px',
  }
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <h2>Made with 💛 by The <a href='https://github.com/TheKelsenator'></a>Kelsenator</h2>
    </footer>
  );
}

export default Footer;