import React from 'react';
import '../about/About.css';
import Buck from './assets/buck-deadhead.jpg';

function About() {
  return (
    <div className="about">
      <div className="catagories">

        <div className="me">
          <h2>About Me</h2>
            <img src={Buck} />
            <p>
            My name is Kelsey M. O'Kelley. I am currently enrolled in a
            Full-Stack Web Development Program held by The University of Utah. 
            I am 34 years old and live year round in beautiful Stanley, ID - 
            population 67 people and Gateway to the wild and scenic Frank Church 
            Wilderness Area.
            <br/>
            Below you will get an introduction to some of 
            my work as a Full-Stack Website Development Student, as well as ways 
            to reach me. Some of my work has been presented as personal hobbies 
            as a place holder until I complete more projects.</p>
        </div>
    </div>
  </div>
  );
}

export default About;