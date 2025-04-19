import React, { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Brain } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductProps {
  name: string;
  description: string;
  features: string[];
  mockupClassName: string;
  icon: React.ReactNode;
}

const ProductShowcase = ({ name, description, features, mockupClassName, icon }: ProductProps) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mb-24">
      <div className="w-full md:w-1/2">
        {loaded ? (
          <div className={`cyber-blur p-6 rounded-lg aspect-video relative ${mockupClassName} flex items-center justify-center`}>
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-cyber-light/70 opacity-40">
              {icon}
            </div>
          </div>
        ) : (
          <Skeleton className="h-[300px] w-full rounded-lg" />
        )}
      </div>
      
      <div className="w-full md:w-1/2">
        {loaded ? (
          <>
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
          </>
        ) : (
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="space-y-2 mt-6">
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        )}
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
      name: "Ae/maeth Agentic AI",
      description: "Agentic AI for augmented CISO capabilities, providing intelligent security decision support and automation.",
      features: [
        "AI-driven security analysis and recommendations",
        "Automated threat hunting and response",
        "Intelligent security policy management",
        "Predictive risk assessment",
        "Natural language security query interface"
      ],
      mockupClassName: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-primary/30 to-cyber-dark",
      icon: <Brain className="w-32 h-32" />
    }
  ];

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className={`py-16 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Our Products</h2>
          <p className="text-cyber-light/80 font-exo">Cutting-edge cybersecurity solutions designed to protect your digital assets and infrastructure.</p>
        </div>
        
        <div className="space-y-12">
          {products.map((product, index) => (
            <ProductShowcase
              key={index}
              name={product.name}
              description={product.description}
              features={product.features}
              mockupClassName={product.mockupClassName}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
