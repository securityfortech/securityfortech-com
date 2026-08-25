const Footer = () => (
  <footer className="border-t border-white/[0.08] py-10">
    <div className="site-shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <a href="#" className="inline-flex items-center gap-3">
          <span aria-hidden="true" className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg border border-white/15 bg-white/[0.05] font-code text-[0.58rem] text-white">
            S/T
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyber-primary to-cyber-success" />
          </span>
          <span className="font-orbitron text-lg font-semibold tracking-[-0.035em] text-white">
            Security<span className="font-normal text-white/60">for</span>Tech
          </span>
        </a>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/38">Senior security leadership, built into your business.</p>
      </div>

      <div className="flex flex-col gap-5 text-sm sm:items-end">
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
          <a href="#services" className="text-white/45 transition hover:text-white">What we lead</a>
          <a href="#get-in-touch" className="text-white/45 transition hover:text-white">Contact</a>
          <a href="https://www.linkedin.com/company/securityfortech/" target="_blank" rel="noopener noreferrer" className="text-white/45 transition hover:text-white">LinkedIn</a>
          <a href="https://github.com/securityfortech" target="_blank" rel="noopener noreferrer" className="text-white/45 transition hover:text-white">GitHub</a>
        </nav>
        <p className="font-code text-[0.62rem] uppercase tracking-[0.12em] text-white/55">© {new Date().getFullYear()} SecurityforTech</p>
      </div>
    </div>
  </footer>
);

export default Footer;
