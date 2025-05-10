
import React, { useRef, useEffect } from 'react';
import CodeScroller from './CodeScroller';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Simple animation on load
    setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.style.opacity = "1";
        headingRef.current.style.transform = "translateY(0)";
      }
    }, 300);
    setTimeout(() => {
      if (subheadingRef.current) {
        subheadingRef.current.style.opacity = "1";
        subheadingRef.current.style.transform = "translateY(0)";
      }
    }, 800);
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "1";
      }
    }, 1300);

    // Parallax effect
    const handleScroll = () => {
      if (sectionRef.current && gridRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        
        const progress = (window.scrollY - sectionTop) / sectionHeight;
        
        gridRef.current.style.transform = `translateY(${progress * 30}px) scale(${1 + progress * 0.1})`;
        gridRef.current.style.opacity = `${0.3 - (progress * 0.2)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center pt-24 pb-16">
      <div 
        ref={gridRef}
        className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1] transition-all duration-300"
        style={{ 
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
          transform: 'translateY(0) scale(1)'
        }}
      ></div>
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <CodeScroller />
          </div>
          
          <div className="relative z-20">
            <h1 ref={headingRef} className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient opacity-0 transform translate-y-8 transition-all duration-1000">
              Building Cybersecurity for Tech Companies
            </h1>
            
            <p ref={subheadingRef} className="text-lg md:text-xl font-exo text-cyber-light/90 mb-8 mx-auto max-w-2xl opacity-0 transform translate-y-8 transition-all duration-1000">
              We secure your products, applications, infrastructure, and workstations so you can focus on growth. Our expertise in cybersecurity, compliance, and data privacy helps you close deals by meeting every security requirement your customers expect.
            </p>
            
            <div ref={ctaRef} className="opacity-0 transition-opacity duration-1000 flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://cal.com/SecurityforTech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-md relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyber-primary to-cyber-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 w-full h-full animate-pulse-glow opacity-0 group-hover:opacity-100"></span>
                <span className="relative text-cyber-light font-orbitron tracking-wide">
                  Book Us
                </span>
              </a>
              
              <a 
                href="#services" 
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-8 py-3 font-medium border border-cyber-primary/50 rounded-md text-cyber-light hover:bg-cyber-primary/10 transition-colors duration-300 relative z-20 font-orbitron"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
