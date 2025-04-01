
import React, { useEffect, useRef, useState } from 'react';

interface ProductProps {
  name: string;
  description: string;
  features: string[];
  mockupClassName: string;
}

const ProductShowcase = ({ name, description, features, mockupClassName }: ProductProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mb-24">
      <div className="w-full md:w-1/2">
        <div className={`cyber-blur p-6 rounded-lg aspect-video relative ${mockupClassName}`}>
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-orbitron font-semibold mb-3 text-cyber-primary">{name}</h3>
        <p className="text-cyber-light/80 mb-6 font-exo">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-cyber-accent">✓</span>
              <span className="text-cyber-light/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      name: "SecureShield™",
      description: "An all-in-one security dashboard for monitoring and managing all aspects of your cybersecurity infrastructure.",
      features: [
        "Real-time threat monitoring and detection",
        "Comprehensive security analytics",
        "Automated incident response",
        "User-friendly dashboard with customizable alerts",
        "Compliance reporting and documentation"
      ],
      mockupClassName: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-primary/20 to-cyber-dark"
    },
    {
      name: "CipherGuard™",
      description: "Advanced encryption toolkit that secures your data with military-grade encryption algorithms.",
      features: [
        "AES-256 encryption standard",
        "End-to-end encryption for all communications",
        "Key management system",
        "Secure file sharing and storage",
        "Integration with existing security systems"
      ],
      mockupClassName: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-secondary/20 to-cyber-dark"
    },
    {
      name: "ThreatHunter™",
      description: "AI-powered threat detection system that identifies and neutralizes threats before they compromise your systems.",
      features: [
        "Machine learning-based threat analysis",
        "Behavioral anomaly detection",
        "Zero-day vulnerability protection",
        "Automated threat neutralization",
        "Detailed forensic analysis and reporting"
      ],
      mockupClassName: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-accent/20 to-cyber-dark"
    }
  ];

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Our Products</h2>
          <p className="text-cyber-light/80 font-exo">Cutting-edge cybersecurity solutions designed to protect your digital assets and infrastructure.</p>
        </div>
        
        <div className="space-y-16">
          {products.map((product, index) => (
            <ProductShowcase
              key={index}
              name={product.name}
              description={product.description}
              features={product.features}
              mockupClassName={product.mockupClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
