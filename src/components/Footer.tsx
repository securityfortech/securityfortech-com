import React from 'react';
const Footer = () => {
  return <footer className="py-8 border-t border-cyber-primary/20 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-cyber-primary"></div>
              <span className="text-lg font-orbitron font-bold text-cyber-light tracking-wider">
                Security<span className="text-cyber-primary">for</span>Tech
              </span>
            </div>
            <p className="mt-2 text-sm text-cyber-light/60 max-w-xs">
              Building cybersecurity programs for tech companies around the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">About</a></li>
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Careers</a></li>
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Help Center</a></li>
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Documentation</a></li>
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Privacy</a></li>
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Terms</a></li>
                <li><a href="#" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cyber-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cyber-light/60">
            &copy; 2025 SecurityforTech. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>;
};
export default Footer;