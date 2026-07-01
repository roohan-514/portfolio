import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import portfolioData from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { profile, projects, education, experience, certifications } = portfolioData;

  return (
    <BrowserRouter>
      <div className="App">
        <Header profile={profile} />
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} profile={profile} />
        <Education education={education} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
        <Footer profile={profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
