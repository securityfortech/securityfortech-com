
import { useRef } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactUs = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} id="get-in-touch" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 cyber-grid-bg z-[-1]"
        style={{
          y,
          opacity: 0.15,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 text-glow text-cyber-light">
            Contact Us
          </h2>
          <p className="text-cyber-light/80 font-exo text-lg">
            Get in touch with our team to discuss how we can help secure your tech company.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-cyber-dark/40 backdrop-blur-md border border-cyber-primary/20 rounded-xl p-8 shadow-2xl">
            <div className="space-y-8 mb-10">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center justify-start gap-6"
              >
                <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary border border-cyber-primary/20">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-orbitron font-medium mb-1">Email</h4>
                  <a
                    href="mailto:contact@securityfortech.com"
                    className="text-cyber-light/70 hover:text-cyber-primary transition-colors font-exo"
                  >
                    contact@securityfortech.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center justify-start gap-6"
              >
                <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary border border-cyber-primary/20">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-orbitron font-medium mb-1">Location</h4>
                  <p className="text-cyber-light/70 font-exo">Europe, Middle East and North Africa</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-cyber-primary/10">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-cyber-light text-center">Connect With Us</h3>

              <div className="flex justify-center gap-6">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/securityfortech/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/securityfortech", label: "GitHub" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-cyber-dark border border-cyber-primary/30 rounded-lg text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary hover:shadow-neon transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
