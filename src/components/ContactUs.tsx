
import React, { useRef, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const ContactUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && gridRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        
        // Calculate the scroll progress through the section
        const progress = (window.scrollY - sectionTop) / sectionHeight;
        
        // Apply parallax effect to the grid
        gridRef.current.style.transform = `translateY(${progress * 35}px) scale(${1 + progress * 0.08})`;
        gridRef.current.style.opacity = `${0.3 - (progress * 0.12)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="get-in-touch" className="py-20 relative overflow-hidden">
      <div 
        ref={gridRef}
        className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1] transition-all duration-300"
        style={{ 
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
          transform: 'translateY(0) scale(1)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">
            Contact Us
          </h2>
          <p className="text-cyber-light/80 font-exo text-lg">
            Get in touch with our team to discuss how we can help secure your tech company.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="space-y-6">
              <div className="flex items-center justify-start gap-6">
                <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-orbitron font-medium mb-2">Email</h4>
                  <a 
                    href="mailto:contact@SecurityforTech.com" 
                    className="text-cyber-light/70 hover:text-cyber-primary transition-colors font-exo"
                  >
                    contact@SecurityforTech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-start gap-6">
                <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-orbitron font-medium mb-2">Location</h4>
                  <p className="text-cyber-light/70 font-exo">Europe, Middle East and North Africa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-cyber-light">Connect With Us</h3>
            
            <div className="flex justify-center gap-8">
              <a 
                href="https://www.linkedin.com/company/SecurityforTech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </a>
              <a 
                href="https://x.com/agenticsecurity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-6 h-6" aria-hidden="true" />
              </a>
              <a 
                href="https://github.com/SecurityforTech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
