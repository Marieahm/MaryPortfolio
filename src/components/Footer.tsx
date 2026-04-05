// File: src/components/Footer.tsx
import React from 'react';
import { socialLinks } from '../data/portfolioData';
import * as Icons from 'react-icons/fa';

const Footer: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-lavender-600 hover:text-white transition-colors"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          Created by <span className="text-lavender-400 font-medium">Mary</span> with love
        </p>
      </div>
    </footer>
  );
};

export default Footer;