import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Software from './components/Software';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Software />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
