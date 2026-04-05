// File: src/components/Projects.tsx
import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolioData';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          My <span className="text-lavender-600">Gallery</span>
        </h2>
        <div className="w-20 h-1 bg-lavender-600 mx-auto mb-8"></div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                filter === cat
                  ? 'bg-lavender-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-lavender-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md">
              <img src={item.imageUrl} alt={item.title} 
              className="w-full h-64 object-cover transition-transform group-hover:scale-110" 
               loading="lazy"/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;