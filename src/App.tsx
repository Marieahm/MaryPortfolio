// File: src/App.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Services from './components/Services';
import ProjectShowcase from './components/ProjectShowcase'; 
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'skills', 'services', 'projects', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <About />
      <Resume />
      <Skills />
      <Services />
      <ProjectShowcase />  
      <Gallery />          
      <Footer />
    </div>
  );
}

export default App;