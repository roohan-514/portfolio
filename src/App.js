import React, { useState, useEffect } from 'react';
import portfolioData from './data/portfolioData';
import TerminalIntro from './components/TerminalIntro';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const { profile, projects, education, certifications, skills } = portfolioData;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <TerminalIntro onComplete={() => setLoading(false)} />;

  return (
    <div className="App">
      <CustomCursor />
      <Header profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} profile={profile} />
      <Certifications certifications={certifications} />
      <Education education={education} />
      <Footer profile={profile} />
    </div>
  );
}

export default App;
