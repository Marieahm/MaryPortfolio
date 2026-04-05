// File: src/components/About.tsx
import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import * as Icons from 'react-icons/fa';

const About: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who am I ?</h2>
            <div className="w-20 h-1 bg-lavender-600 mb-6"></div>
            <h5 className="text-xl text-gray-700 mb-4">{personalInfo.title}</h5>
            <p className="text-gray-600 mb-6">{personalInfo.about}</p>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-lavender-600 text-lavender-600 rounded-lg hover:bg-lavender-600 hover:text-white transition-colors"
            >
              Download My CV
            </a>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Personal Info</h2>
            <div className="w-20 h-1 bg-lavender-600 mb-6"></div>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li><span className="font-semibold">Birthdate:</span> {personalInfo.birthdate}</li>
              <li><span className="font-semibold">Email:</span> {personalInfo.email}</li>
              <li><span className="font-semibold">Address:</span> {personalInfo.address}</li>
            </ul>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-lavender-100 text-lavender-600 flex items-center justify-center hover:bg-lavender-600 hover:text-white transition-colors"
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;