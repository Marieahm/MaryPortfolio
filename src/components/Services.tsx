// File: src/components/Services.tsx
import React from 'react';
import { services } from '../data/portfolioData';
import * as Icons from 'react-icons/fa';

const Services: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-10 h-10 text-lavender-600" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          My <span className="text-lavender-600">Services</span>
        </h2>
        <div className="w-20 h-1 bg-lavender-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{renderIcon(service.icon)}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;