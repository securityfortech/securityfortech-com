
import { useRef } from 'react';
import { ShieldCheck, Bug, Cloud, UserCog, Users, GraduationCap, Database, Activity, Search } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
      className="cyber-card p-6 flex flex-col items-start group relative z-10"
    >
      <div className="mb-4 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300 p-3 rounded-md bg-cyber-dark/50 border border-cyber-primary/20">
        {icon}
      </div>
      <h3 className="text-xl font-orbitron font-semibold mb-3 text-cyber-light">{title}</h3>
      <p className="text-cyber-light/80 font-exo leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const services = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Compliance & Risk",
      description: "Achieve SOC 2, ISO 27001, GDPR, HIPAA, and more. We streamline audits and accelerate your compliance roadmap."
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Pentest & Bug Bounty",
      description: "Identify vulnerabilities before attackers do with rigorous penetration testing and managed bug bounty programs."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AppSec & CloudSec",
      description: "Secure your development lifecycle and cloud infrastructure with automated scans and actionable remediation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IAM & IT Management",
      description: "Manage identities, access controls, and IT infrastructure with secure configuration and continuous monitoring."
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "vCISO & Management",
      description: "On-demand security leadership to guide your strategy, governance, and compliance initiatives."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training",
      description: "Empower your team with cybersecurity awareness and technical security training customized for your organization."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Ensure data protection with smart classification, encryption, and systems architected for privacy and compliance."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "SOC & DFIR",
      description: "24/7 security monitoring, threat detection, and incident response to protect your business from cyber threats."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Threat Intelligence",
      description: "Stay ahead of emerging threats with curated intelligence feeds tailored to your industry and technology stack."
    }
  ];

  return (
    <section ref={containerRef} id="services" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 cyber-grid-bg z-[-1]"
        style={{
          y,
          opacity: 0.15,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 text-glow text-cyber-light">Our Services</h2>
          <p className="text-cyber-light/80 font-exo text-lg leading-relaxed">
            Security leadership built for tech companies, protecting against modern threats and driving continuous compliance. We integrate deeply with your team to align security with product velocity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
