import React from 'react';
import * as Icons from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const ProjectShowcase: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="text-lavender-600 text-3xl" /> : null;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          My <span className="text-lavender-600">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-lavender-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-lavender-50 rounded-lg group-hover:bg-lavender-100 transition">
                    {renderIcon(project.icon || "FaCode")}
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lavender-600 font-medium hover:text-lavender-700 transition-colors group"
                >
                  Visit Website
                  <Icons.FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;