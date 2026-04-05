// File: src/components/Resume.tsx
import React from 'react';
import { experiences, education, languages } from '../data/portfolioData';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          My <span className="text-lavender-600">Resume</span>
        </h2>
        <div className="w-20 h-1 bg-lavender-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Expertise */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expertise</h3>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-lavender-600 pl-4">
                  <p className="text-lavender-600 font-medium">{exp.period}</p>
                  <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                  {exp.company && <p className="text-gray-500 text-sm">{exp.company}</p>}
                </div>
              ))}
            </div>
          </div>
          
          {/* Education & Languages */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-lavender-600 pl-4">
                    <p className="text-lavender-600 font-medium">{edu.period}</p>
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    {edu.grade && <p className="text-gray-500 text-sm">Grade: {edu.grade}</p>}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{lang.name}</span>
                      <span className="text-gray-500 text-sm">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-lavender-600 h-2 rounded-full"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;