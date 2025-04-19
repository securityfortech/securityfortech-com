
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import Footer from '../components/Footer';
import CyberGrid from '../components/CyberGrid';
import ContactUs from '../components/ContactUs';

const Index = () => {
  return (
    <main className="min-h-screen bg-cyber-dark text-cyber-light overflow-x-hidden">
      <div className="relative">
        {/* Navigation and Hero section with grid background */}
        <div className="relative bg-cyber-dark">
          <CyberGrid />
          <Navbar />
          <Hero />
        </div>

        {/* Services section with smooth gradient */}
        <div className="relative bg-gradient-to-b from-cyber-dark via-cyber-dark/95 to-cyber-dark/90">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-primary/5 via-transparent to-transparent opacity-10"></div>
          <Services />
        </div>

        {/* Products section with different gradient */}
        <div className="relative bg-gradient-to-b from-cyber-dark/90 via-cyber-dark/95 to-cyber-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-primary/10 via-transparent to-transparent opacity-20"></div>
          <Products />
        </div>

        {/* Contact section with smooth gradient */}
        <div className="relative bg-gradient-to-b from-cyber-dark via-cyber-dark/90 to-cyber-dark/95">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyber-primary/5 via-transparent to-transparent opacity-20"></div>
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
