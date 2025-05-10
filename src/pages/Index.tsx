
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import CyberGrid from '../components/CyberGrid';
import ContactUs from '../components/ContactUs';

const Index = () => {
  return (
    <main className="min-h-screen bg-cyber-dark text-cyber-light overflow-x-hidden">
      <div className="relative">
        {/* Navigation and Hero section with grid background */}
        <div className="relative">
          <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
          <CyberGrid />
          <Navbar />
          <Hero />
        </div>

        {/* Services section */}
        <div className="relative">
          <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
          <Services />
        </div>

        {/* Contact section */}
        <div className="relative">
          <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
          <ContactUs />
        </div>

        {/* Footer with dark background */}
        <div className="relative bg-black/40 backdrop-blur-sm">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;
