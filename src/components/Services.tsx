
import { useEffect, useRef } from 'react';
import { ShieldCheck, Bug, Cloud, UserCog, Users, GraduationCap, Database, Activity, Search } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="cyber-card p-6 flex flex-col items-start transition-all duration-500 hover:translate-y-[-5px] hover:shadow-neon group">
      <div className="mb-4 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300 p-3 rounded-md bg-cyber-dark/50">
        {icon}
      </div>
      <h3 className="text-xl font-orbitron font-semibold mb-3 text-cyber-light">{title}</h3>
      <p className="text-cyber-light/80 font-exo">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && gridRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        
        const progress = (window.scrollY - sectionTop) / sectionHeight;
        
        gridRef.current.style.transform = `translateY(${progress * 50}px)`;
        gridRef.current.style.opacity = `${0.3 - (progress * 0.1)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: Service[] = [
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
      icon: <UserCog className="w-8 h-8" />,
      title: "vCISO & Management",
      description: "On-demand security leadership to guide your strategy, governance, and compliance initiatives."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IAM & IT Management",
      description: "Manage identities, access controls, and IT infrastructure with secure configuration and continuous monitoring."
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
    <section ref={sectionRef} id="services" className="py-10 relative overflow-hidden">
      <div 
        ref={gridRef}
        className="absolute inset-0 cyber-grid-bg opacity-30 z-[-1] transition-all duration-300"
        style={{ 
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
          transform: 'translateY(0) scale(1)'
        }}
      ></div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Our Services</h2>
          <p className="text-cyber-light/80 font-exo text-lg">Operational security leadership designed to protect your tech company from evolving threats while aligning with regulatory and compliance requirements.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
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
