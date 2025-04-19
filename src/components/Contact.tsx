
import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Contact Us</h2>
          <p className="text-cyber-light/80 font-exo text-lg">
            Get in touch with our team to discuss how we can help secure your tech company.
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto text-center">
          <div className="mb-10">
            <div className="space-y-6">
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:contact@securityfortech.com" 
                    className="text-cyber-light/70 hover:text-cyber-primary transition-colors"
                    rel="noopener noreferrer"
                  >
                    contact@securityfortech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-medium mb-1">Location</h4>
                  <p className="text-cyber-light/70">Europe, Middle East and North Africa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-cyber-light">Connect With Us</h3>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/company/securityfortech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/agenticsecurity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/securityfortech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
