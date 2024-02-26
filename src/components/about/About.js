import React from 'react';
import Headshot from './assets/Profile-Pic.jpg';

const styles = {
  about: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '40px',
    paddingTop: '40px',
    color: '#09114e',
    backgroundColor: '#964141',
  },
  aboutText: {
    fontSize: '40px',
    color: '#09114e',
    padding: '20px',
    borderRight: '#09114e solid 3px',
  },
  aboutImg: {
    float: 'left',
    maxWidth: '25%',
    margin: 'auto',
    marginBottom: '40px',
    height: 'auto',
    marginLeft: '20px',
    marginRight: '30px',
    border: '2px solid #09114e',
    borderRadius: '10px',
  },
  aboutParagraph: {
    fontSize: '22px',
  }
}

function About() {
  return (
    <div style={styles.about}>
      <a style={styles.aboutText}>About Me</a>
        <section>
          <img src={Headshot} style={styles.aboutImg} />
          <a style={styles.aboutParagraph}>
          As a recent graduate of a rigorous full-stack coding bootcamp, 
          I am thrilled to embark on my journey as a junior developer.
          With a strong foundation in web development, I have gained hands-on 
          experience in front-end and back-end technologies, including HTML, 
          CSS, JavaScript, React, Node.js, and SQL. During the bootcamp, I worked 
          on several collaborative projects that sharpened my problem-solving 
          skills and taught me the importance of clean code and efficient development practices.
          <br />
          <br />
          I am excited to contribute my enthusiasm, technical skills, and passion for learning 
          to a dynamic development team. I am ready to take on new challenges and collaborate 
          with fellow developers to create innovative solutions that drive results.
          <br />
          <br />
          Below you will get an introduction to some of 
          my work as a Full-Stack Website Development Student, as well as ways 
          to reach me.</a>
        </section>
  </div>
  );
}

export default About;