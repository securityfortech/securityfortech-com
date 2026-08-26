
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import CyberGrid from '../components/CyberGrid';
import ContactUs from '../components/ContactUs';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cyber-dark text-cyber-light">
      <CyberGrid />

      <section className="relative">
        <Navbar />
        <Hero />
      </section>

      <section className="relative">
        <Services />
      </section>

      <section className="relative">
        <ContactUs />
      </section>

      <section className="relative bg-black/40 backdrop-blur-sm">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
