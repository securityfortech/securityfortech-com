import React from 'react';
import { ShieldCheck, Code, Triangle, FileCode, FileLock, Wrench } from 'lucide-react';
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const ServiceCard = ({
  icon,
  title,
  description
}: ServiceCardProps) => {
  return <div className="cyber-card p-6 flex flex-col items-start transition-all duration-500 hover:translate-y-[-5px] hover:shadow-neon group">
      <div className="mb-4 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300 p-3 rounded-md bg-cyber-dark/50">
        {icon}
      </div>
      <h3 className="text-xl font-orbitron font-semibold mb-3 text-cyber-light">{title}</h3>
      <p className="text-cyber-light/80 font-exo">{description}</p>
    </div>;
};
const Services = () => {
  const services = [{
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Compliance",
    description: "Comprehensive regulatory compliance solutions to meet industry standards including SOC 2, ISO 27001, GDPR, HIPAA, and more."
  }, {
    icon: <Code className="w-8 h-8" />,
    title: "AppSec",
    description: "Application security testing, vulnerability assessments, and remediation strategies for your software development lifecycle."
  }, {
    icon: <Triangle className="w-8 h-8" />,
    title: "Threat Modeling",
    description: "Proactive identification and mitigation of potential security threats to your systems and infrastructure before deployment."
  }, {
    icon: <FileCode className="w-8 h-8" />,
    title: "Secure Development",
    description: "Integrating security practices into your development workflow with secure coding guidelines and SAST/DAST implementation."
  }, {
    icon: <FileLock className="w-8 h-8" />,
    title: "Data Privacy",
    description: "Protecting sensitive information with data classification, encryption strategies, and privacy-focused system architectures."
  }, {
    icon: <Wrench className="w-8 h-8" />,
    title: "IT Management",
    description: "Comprehensive IT infrastructure management with security-focused configuration, monitoring, and maintenance services."
  }];
  return <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Our Services</h2>
          <p className="text-cyber-light/80 font-exo">Operational security leadership designed to protect your tech company from evolving threats while aligning with regulatory and compliance requirements.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-gradient opacity-10 z-0"></div>
    </section>;
};
export default Services;