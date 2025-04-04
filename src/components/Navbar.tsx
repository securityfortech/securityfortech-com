
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { posthog } from "../providers/PostHogProvider";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-cyber-primary animate-pulse-glow"></div>
          <span className="text-xl font-orbitron font-bold text-cyber-light tracking-wider">
            Security<span className="text-cyber-primary">for</span>Tech
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Products", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => trackNavClick(item)}
              className="relative text-cyber-light hover:text-cyber-primary transition-colors duration-300 font-exo font-medium group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
          <a
            href="https://cal.com/securityfortech/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBookUsClick}
            className="px-5 py-2 bg-cyber-dark border border-cyber-primary text-cyber-light hover:shadow-neon transition-all duration-300 rounded font-medium"
          >
            Book Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-light hover:text-cyber-primary"
          onClick={handleMobileMenuToggle}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="container h-full flex flex-col items-center justify-center">
          <button
            onClick={handleMobileMenuToggle}
            className="absolute top-6 right-6 text-cyber-light"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center gap-8">
            {["Services", "Products", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  trackNavClick(item);
                  setMobileMenuOpen(false);
                }}
                className="text-2xl text-cyber-light hover:text-cyber-primary hover:shadow-neon transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="https://cal.com/securityfortech/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackBookUsClick();
                setMobileMenuOpen(false);
              }}
              className="mt-4 px-8 py-3 bg-cyber-dark border border-cyber-primary text-cyber-light hover:shadow-neon transition-all duration-300 rounded-md font-medium"
            >
              Book Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
