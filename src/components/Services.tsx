
import React from 'react';
import { Shield, Server, Lock, Code, Database, Radio } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
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

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Threat Protection",
      description: "Advanced detection and mitigation of cyber threats in real-time with our AI-powered security systems."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Security",
      description: "Comprehensive protection for your servers, networks, and cloud infrastructure against intrusions."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Encryption Systems",
      description: "Military-grade encryption solutions to secure sensitive data and communications."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Secure Development",
      description: "Security audits and implementation for your software development process and applications."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Protection",
      description: "Comprehensive data protection strategies with backup, recovery, and compliance solutions."
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Security Monitoring",
      description: "24/7 monitoring services with immediate alerts and response to potential security incidents."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Our Services</h2>
          <p className="text-cyber-light/80 font-exo">Comprehensive security solutions designed to protect your tech company from evolving cyber threats.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      <div className="absolute inset-0 bg-cyber-gradient opacity-10 z-0"></div>
    </section>
  );
};

export default Services;
