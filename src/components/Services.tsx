import { useEffect, useRef } from 'react';
import { ShieldCheck, Code, Cloud, FileLock, Clock, Wrench } from 'lucide-react';

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
      title: "Compliance",
      description: "Achieve SOC 2, ISO 27001, GDPR, HIPAA, and more. We streamline audits and accelerate your compliance roadmap."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AppSec",
      description: "Secure your development lifecycle with code audits, automated scans, and actionable remediation."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "CloudSec",
      description: "Detect and defuse cloud vulnerabilities before they become security incidents."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Incident Response",
      description: "Contain breaches with expert-led investigation, and detailed post-incident reporting."
    },
    {
      icon: <FileLock className="w-8 h-8" />,
      title: "Data Privacy",
      description: "Ensure data protection with smart classification, encryption, and systems architected for privacy."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "IT Management", 
      description: "Manage workstation fleets with secure configuration, continuous monitoring, and proactive maintenance."
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-16 relative overflow-hidden">
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
        <div className="mb-10 text-center max-w-2xl mx-auto">
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
