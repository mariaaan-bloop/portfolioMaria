/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Strengths from './components/Strengths';
import Projects from './components/Projects';
import SkillsPlayground from './components/SkillsPlayground';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'strengths', 'projects', 'skills', 'experience', 'achievements', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#24152F] text-[#F8F5F2] relative selection:bg-[#6D4AFF] selection:text-white">
      {/* Click Spark Effect on Click */}
      <ClickSpark sparkColor="#C98FA8" sparkCount={8} sparkRadius={24} duration={400} />

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Strengths />
        <Projects />
        <SkillsPlayground />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
