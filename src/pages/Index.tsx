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

        {/* Services section with gradient background */}
        <div className="relative bg-gradient-to-br from-cyber-dark via-cyber-dark/95 to-cyber-dark border-y border-cyber-primary/10">
          <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
          <Services />
        </div>

        {/* Products section with different gradient */}
        <div className="relative bg-gradient-to-br from-cyber-dark to-cyber-dark/90">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-primary/5 via-transparent to-transparent"></div>
          <Products />
        </div>

        {/* Get in Touch section with a unique gradient */}
        <div className="relative bg-gradient-to-br from-cyber-dark/90 to-cyber-dark/95 border-y border-cyber-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyber-primary/5 via-transparent to-transparent opacity-30"></div>
          <ContactUs />
        </div>

        {/* Footer with dark background */}
        <div className="relative bg-black/40 backdrop-blur-sm border-t border-cyber-primary/10">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;
