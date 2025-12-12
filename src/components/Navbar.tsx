import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { posthog } from "../providers/PostHogProvider";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    posthog.capture("toggle_mobile_menu", { state: !mobileMenuOpen ? "open" : "closed" });
  };

  const trackNavClick = (item: string) => {
    posthog.capture("nav_click", { item });
  };

  const trackBookUsClick = () => {
    posthog.capture("book_us_click");
  };

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#get-in-touch" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black/80 backdrop-blur-lg py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-cyber-primary/10"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 rounded-md bg-cyber-primary overflow-hidden">
            <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:animate-shine"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          <span className="text-xl font-orbitron font-bold text-cyber-light tracking-wider group-hover:text-white transition-colors">
            Security<span className="text-cyber-primary group-hover:text-cyber-secondary transition-colors">for</span>Tech
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => trackNavClick(item.label)}
              className="relative text-cyber-light/80 hover:text-cyber-primary transition-colors duration-300 font-exo font-medium text-sm tracking-wide group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
            </a>
          ))}
          <motion.a
            href="https://cal.com/SecurityforTech/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBookUsClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white hover:shadow-neon transition-all duration-300 rounded font-orbitron font-medium text-sm tracking-wide uppercase"
          >
            Book Us
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-light hover:text-cyber-primary transition-colors"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 md:hidden flex flex-col items-center justify-center border-l border-cyber-primary/20"
          >
            <button
              onClick={handleMobileMenuToggle}
              className="absolute top-6 right-6 text-cyber-light/60 hover:text-cyber-primary p-2 transition-colors"
            >
              <X size={32} />
            </button>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex flex-col items-center gap-8 w-full px-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onClick={() => {
                    trackNavClick(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className="text-3xl text-cyber-light font-orbitron font-bold hover:text-cyber-primary hover:text-glow transition-all duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                href="https://cal.com/SecurityforTech/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackBookUsClick();
                  setMobileMenuOpen(false);
                }}
                className="mt-8 px-10 py-4 bg-cyber-primary text-cyber-dark font-bold hover:shadow-neon transition-all duration-300 rounded-md font-orbitron text-lg tracking-widest uppercase w-full text-center"
              >
                Book Us
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
