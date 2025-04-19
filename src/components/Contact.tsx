import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Contact Us</h2>
          <p className="text-cyber-light/80 font-exo">Get in touch with our team to discuss how we can help secure your tech company.</p>
        </div>
        
        <div className="flex justify-center items-center max-w-6xl mx-auto">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-cyber-light">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cyber-light font-medium mb-1">Email</h4>
                    <a href="mailto:contact@securityfortech.com" className="text-cyber-light/70 hover:text-cyber-primary transition-colors">contact@securityfortech.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cyber-light font-medium mb-1">Location</h4>
                    <p className="text-cyber-light/70">Europe, the Middle East and Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-cyber-light">Connect With Us</h3>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/securityfortech/" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/agenticsecurity" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/securityfortech" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
