import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('Business Website Development');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-slate-300 font-sans selection:bg-electric/25 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services onSelectService={handleSelectService} />
        <WhyWorkWithMe />
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
