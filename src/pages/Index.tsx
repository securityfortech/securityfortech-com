
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CyberGrid from '../components/CyberGrid';

const Index = () => {
  return (
    <main className="min-h-screen bg-cyber-dark text-cyber-light overflow-x-hidden">
      <CyberGrid />
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
