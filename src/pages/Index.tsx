
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
      {/* CyberGrid provides the main background effect */}
      <CyberGrid />
      
      {/* Header section */}
      <section className="relative">
        <Navbar />
        <Hero />
      </section>

      {/* Services section */}
      <section className="relative">
        <Services />
      </section>

      {/* Contact section */}
      <section className="relative">
        <ContactUs />
      </section>

      {/* Footer section */}
      <section className="relative bg-black/40 backdrop-blur-sm">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
