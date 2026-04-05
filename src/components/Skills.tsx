// File: src/components/Skills.tsx
import React from 'react';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const technicalSkills = skills.filter(s => s.category === 'technical');
  const softSkills = skills.filter(s => s.category === 'soft');

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          My <span className="text-lavender-600">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-lavender-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-lavender-600 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;