
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-cyber-primary/20 relative overflow-hidden">
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
              Building cybersecurity for tech companies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-cyber-light/60 hover:text-cyber-light transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Terms of Service</Link></li>
                <li><Link to="/security" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/securityfortech/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyber-light/60 hover:text-cyber-light transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/securityfortech" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyber-light/60 hover:text-cyber-light transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cyber-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cyber-light/60">
            &copy; {currentYear} SecurityforTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
