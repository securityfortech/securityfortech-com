import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { posthog } from "../providers/PostHogProvider";

const navItems = [
  { label: "What we lead", href: "#services" },
  { label: "Start a conversation", href: "#get-in-touch" },
];

const Brand = () => (
  <a href="#" className="group flex items-center gap-3">
    <span aria-hidden="true" className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] font-code text-[0.65rem] font-medium text-white transition group-hover:border-cyber-primary/60">
      S/T
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyber-primary to-cyber-success" />
    </span>
    <span className="font-orbitron text-lg font-semibold tracking-[-0.035em] text-white sm:text-xl">
      Security<span className="font-normal text-white/45">for</span>Tech
    </span>
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  const toggleMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    posthog.capture("toggle_mobile_menu", { state: nextState ? "open" : "closed" });
  };

  const closeAndTrack = (label: string) => {
    posthog.capture("nav_click", { item: label });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.08] bg-cyber-dark/85 py-3 backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="site-shell flex items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => closeAndTrack(item.label)}
              className="text-sm font-medium text-white/55 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://cal.com/SecurityforTech/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("book_us_click")}
            className="primary-button !min-h-10 !px-5 !py-2"
          >
            Talk to a vCISO
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-4 right-4 top-[4.75rem] rounded-2xl border border-white/10 bg-[#0d111b]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => closeAndTrack(item.label)}
                  className="border-b border-white/[0.07] py-4 font-orbitron text-xl font-medium text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://cal.com/SecurityforTech/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  posthog.capture("book_us_click");
                  setMobileMenuOpen(false);
                }}
                className="primary-button mt-5 w-full"
              >
                Talk to a vCISO
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
