import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Employement from './Employement/Employement';
import Publications from './Publications/Publications';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, educationData, employementData, publicationsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [education, setEducation] = useState([]);
  const [employement, setEmployment] = useState([]);
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setEducation([...educationData]);
    setEmployment([...employementData]);
    setProjects([...projectsData]);
    setPublications([...publicationsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, education, employement, projects, publications, contact, footer }}>
      <Hero />
      <About />
      <Education />
      <Employement />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
