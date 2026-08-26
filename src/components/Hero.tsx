import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import CodeScroller from "./CodeScroller";
import { useParallax } from "@/hooks/useParallax";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { ref: containerRef, y, scale } = useParallax<HTMLElement>({
    offset: ["start start", "end start"],
    yRange: ["0%", "32%"],
    scaleRange: [1, 1.06],
  });

  const scrollToServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative isolate flex min-h-[88vh] w-full items-center justify-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      <motion.div
        className="cyber-grid-bg absolute inset-0 -z-10"
        style={{ y, scale, backgroundPosition: "center", backgroundSize: "54px 54px" }}
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.42, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-primary/20 blur-[110px]"
        animate={reduceMotion ? undefined : { scale: [0.86, 1.08, 0.86], opacity: [0.42, 0.7, 0.42] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-[12%] top-[24%] -z-10 h-56 w-56 rounded-full bg-cyber-secondary/15 blur-[90px]"
        animate={reduceMotion ? undefined : { x: [0, 34, 0], y: [0, -24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <CodeScroller />

      <div className="container relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-6 font-code text-[0.68rem] font-medium uppercase tracking-[0.24em] text-cyber-secondary sm:text-xs"
        >
          Virtual CISO services for tech companies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.06, ease: "easeOut" }}
          className="text-gradient text-glow text-balance font-orbitron text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
        >
          Your Security Leader.
          <span className="mt-2 block">Part of the Team.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.18, ease: "easeOut" }}
          className="mx-auto mb-10 mt-8 max-w-2xl text-balance text-base leading-7 text-cyber-light/75 sm:text-lg sm:leading-8"
        >
          Senior security leadership that turns risk, compliance pressure, and customer demands into a program your business can run—without adding a full-time executive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.28, ease: "easeOut" }}
          className="flex flex-col justify-center gap-3 sm:flex-row"
        >
          <a
            href="https://cal.com/SecurityforTech/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyber-primary to-cyber-secondary px-7 py-3 font-orbitron text-sm font-semibold text-white shadow-[0_12px_35px_rgba(139,92,246,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(217,70,239,0.38)]"
          >
            <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
            <span className="relative">Talk to a vCISO</span>
            <ArrowUpRight className="relative h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#services"
            onClick={scrollToServices}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyber-primary/35 bg-cyber-primary/[0.07] px-7 py-3 font-orbitron text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyber-secondary/60 hover:bg-cyber-primary/15"
          >
            Explore the service
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
