import { ShieldCheck, Bug, Cloud, UserCog, Users, GraduationCap, Database, Activity, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

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
  const { ref: containerRef, y } = useParallax<HTMLElement>({
    yRange: ["0%", "20%"],
  });

  const services = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Compliance & Risk",
      description: "Set a risk strategy that supports the business. We lead control design, evidence readiness, and the path toward SOC 2, ISO 27001, GDPR, or the frameworks that matter to you."
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Pentest & Bug Bounty",
      description: "Plan the right security tests, select specialist partners, and turn every valid finding into owned remediation work with clear priorities."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AppSec & CloudSec",
      description: "Build security into engineering and cloud operations. We establish practical standards, focus teams on material risk, and guide improvements that fit your delivery pace."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IAM & IT Management",
      description: "Bring structure to identity, access, devices, and core IT controls. We define ownership and oversight so access stays intentional as teams change."
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "vCISO & Management",
      description: "Put an experienced security leader beside your executives and technical teams. We own the roadmap, guide investment, report progress, and keep the program accountable."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training",
      description: "Give people training that connects to their work. We shape awareness and role-based programs around the risks faced by leadership, engineering, operations, and the wider team."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Know what sensitive data you hold, why you hold it, and how it must be protected. We lead classification, handling, retention, and third-party data decisions."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "SOC & DFIR",
      description: "Prepare the business to detect, escalate, and respond. We define the operating model, test incident plans, and coordinate internal teams and response specialists when needed."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Threat Intelligence",
      description: "Cut through the noise around new threats. We identify what is relevant to your technology and business, then translate it into decisions your teams can act on."
    }
  ];

  return (
    <section ref={containerRef} id="services" className="relative isolate overflow-hidden py-24 sm:py-28">
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
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 text-glow text-cyber-light">One Leader. Your Whole Security Program.</h2>
          <p className="text-cyber-light/80 font-exo text-lg leading-relaxed">
            Your vCISO owns the direction across security, risk, and compliance. We lead the program, bring in specialists where needed, and turn scattered security work into a plan the business can follow.
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
