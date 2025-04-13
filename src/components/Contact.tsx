
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Contact Us</h2>
          <p className="text-cyber-light/80 font-exo">Get in touch with our team to discuss how we can help secure your tech company.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="mb-10">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-cyber-light">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cyber-light font-medium mb-1">Email</h4>
                    <a href="mailto:contact@securityfortech.com" className="text-cyber-light/70 hover:text-cyber-primary transition-colors">contact@securityfortech.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cyber-light font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-cyber-light/70 hover:text-cyber-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cyber-light font-medium mb-1">Location</h4>
                    <p className="text-cyber-light/70">Cyber Tower, 123 Security Street, Tech City</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-cyber-light">Connect With Us</h3>
              
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all">
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
