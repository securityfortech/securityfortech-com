import React, { useEffect, useRef } from 'react';
const CodeScroller = () => {
  const codeLines = ['import { SecurityProtocol } from "@securityfortech/core";', 'const firewall = new SecurityProtocol();', 'await firewall.scanNetwork("192.168.1.1/24");', 'const vulnerabilities = await firewall.detectVulnerabilities();', 'firewall.patchSystem(vulnerabilities);', 'console.log("Security status: PROTECTED");', 'const encryptionLevel = "AES-256";', 'await firewall.deployEncryption(encryptionLevel);', 'monitorTraffic({ alerts: true });', 'initIntrustionDetection({', '  sensitivity: "high",', '  responseTime: "instant"', '});', 'blockchain.secure(userData);'];
  return <div className="absolute right-0 top-0 h-full overflow-hidden w-48 md:w-64 lg:w-96 opacity-40">
      <div className="font-code text-xs md:text-sm text-cyber-primary/80 whitespace-nowrap animate-scroll-data">
        {[...codeLines, ...codeLines, ...codeLines].map((line, index) => <div key={index} className="mb-2 pl-4 border-l border-cyber-primary/30">
            {line}
          </div>)}
      </div>
    </div>;
};
const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
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
  }, []);
  return <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-16">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl relative">
          <CodeScroller />
          
          <h1 ref={headingRef} className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient opacity-0 transform translate-y-8 transition-all duration-1000">
            Building Cybersecurity for Tech Companies
          </h1>
          
          <p ref={subheadingRef} className="text-lg md:text-xl font-exo text-cyber-light/90 mb-10 max-w-2xl opacity-0 transform translate-y-8 transition-all duration-1000">We secure your products, applications, infrastructure, and workstations so you can focus on growth. Our expertise in cybersecurity, compliance, and data privacy helps you close deals by meeting every security requirement your customers expect.</p>
          
          <div ref={ctaRef} className="opacity-0 transition-opacity duration-1000 flex flex-col sm:flex-row gap-4">
            <a href="https://cal.com/securityfortech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-md relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyber-primary to-cyber-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-full h-full animate-pulse-glow opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-cyber-light font-orbitron tracking-wide">
                Book Us
              </span>
            </a>
            
            <a href="#services" className="inline-flex items-center justify-center px-8 py-3 font-medium border border-cyber-primary/50 rounded-md text-cyber-light hover:bg-cyber-primary/10 transition-colors duration-300">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;