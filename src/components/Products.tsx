import React, { useEffect, useRef } from 'react';
import { Brain } from 'lucide-react';
import { CardProps } from '../types';
import { PRODUCTS } from '../constants';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'brain':
      return <Brain className="w-8 h-8" />;
    default:
      return null;
  }
};

const ProductCard = ({
  icon,
  title,
  description
}: CardProps) => {
  return (
    <div className="cyber-card p-6 flex flex-col items-start transition-all duration-500 hover:translate-y-[-5px] hover:shadow-neon group">
      <div className="mb-4 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300 p-3 rounded-md bg-cyber-dark/50">
        {typeof icon === 'string' ? getIcon(icon) : icon}
      </div>
      <h3 className="text-xl font-orbitron font-semibold mb-3 text-cyber-light">{title}</h3>
      <p className="text-cyber-light/80 font-exo">{description}</p>
    </div>
  );
};

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && gridRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        
        // Calculate the scroll progress through the section
        const progress = (window.scrollY - sectionTop) / sectionHeight;
        
        // Apply parallax effect to the grid
        gridRef.current.style.transform = `translateY(${progress * 50}px)`;
        gridRef.current.style.opacity = `${0.3 - (progress * 0.1)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-16 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">Our Products</h2>
          <p className="text-cyber-light/80 font-exo">Cutting-edge cybersecurity solutions designed to protect your digital assets and infrastructure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 max-w-2xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <ProductCard 
              key={index} 
              icon={product.icon} 
              title={product.title} 
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
