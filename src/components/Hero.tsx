
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CodeScroller from './CodeScroller';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-24 pb-16">
      <motion.div 
        className="absolute inset-0 cyber-grid-bg z-[-1]"
        style={{ 
          y,
          opacity: 0.3,
          scale,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <CodeScroller />
          </div>
          
          <div className="relative z-20 flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient leading-tight"
            >
              Building Cybersecurity <br />
              for Tech Companies
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl font-exo text-cyber-light/90 mb-10 max-w-2xl leading-relaxed"
            >
              We secure your products, applications, infrastructure, and workstations so you can focus on growth. Expert security, compliance, and privacy solutions tailored for modern tech stacks.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="https://cal.com/SecurityforTech/" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <div className="relative px-8 py-3 bg-black/20 backdrop-blur-sm border border-cyber-light/10 rounded-md flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/40 to-cyber-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <span className="relative text-cyber-light font-orbitron tracking-wide font-semibold">Book Us</span>
                </div>
              </a>
              
              <a 
                href="#services" 
                onClick={scrollToServices}
                className="px-8 py-3 font-medium border border-cyber-primary/30 rounded-md text-cyber-light hover:bg-cyber-primary/10 transition-colors duration-300 font-orbitron backdrop-blur-sm"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
