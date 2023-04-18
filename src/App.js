import React from 'react';
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Project from "./components/portfolio/project/Project";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header /> 
      <Title />
      <About />
      <Portfolio />
      <Project />
      <Contact />
      <Resume />  
      <Footer />
    </div>
  );
}

export default App;
