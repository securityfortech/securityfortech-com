
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

      {/* Services section - reduced top padding */}
      <section className="relative -mt-20">
        <Services />
      </section>

      {/* Contact section - reduced top padding */}
      <section className="relative -mt-12">
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
