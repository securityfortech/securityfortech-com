
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
              Senior security leadership, built into your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">What We Lead</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-cyber-light/60 hover:text-cyber-light transition-colors">vCISO Services</a></li>
                <li><a href="https://cal.com/SecurityforTech/" target="_blank" rel="noopener noreferrer" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Talk to a vCISO</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Start Here</h4>
              <ul className="space-y-2">
                <li><a href="#get-in-touch" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Discuss Your Needs</a></li>
                <li><a href="mailto:contact@securityfortech.com" className="text-cyber-light/60 hover:text-cyber-light transition-colors">Send an Email</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase text-cyber-primary font-semibold mb-4">Follow</h4>
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
