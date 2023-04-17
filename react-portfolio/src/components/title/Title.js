import React from 'react';
import '../title/Title.css';
import Background from './assets/background-image2.jpg';

function Title() {
  return (
    <section className="career-title">    
      <img src={Background} />
      <h2>Full-Stack Web Development Student</h2>
    </section>
  );
}

export default Title;