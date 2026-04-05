import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { personalInfo, socialLinks } from '../data/portfolioData';
import * as Icons from 'react-icons/fa';

const GlowingParticles: React.FC = () => {
  const pointsRef = useRef<any>(null);
  const particlesCount = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c084fc"
        size={0.08}
        transparent
        opacity={0.6}
        blending={2}
      />
    </points>
  );
};

const HeroSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavender-50 via-white to-blue-50 pt-20">
      {/* خلفية ثلاثية الأبعاد: نجوم وجزيئات متوهجة فقط */}
      <div className="absolute inset-0 z-0 opacity-30 md:opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          {/* إضاءة خافتة */}
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#8B5CF6" />
          <pointLight position={[-5, -3, 2]} intensity={0.5} color="#3B82F6" />
          
          {/* النجوم الثابتة */}
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          
          {/* الجزيئات المتوهجة الصغيرة المتحركة */}
          <GlowingParticles />
          
          {/* توهجات إضافية (تأثير بريق) */}
          <Sparkles
            count={200}
            scale={[10, 10, 10]}
            size={0.3}
            speed={0.4}
            color="#e884fc"
            opacity={0.4}
          />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-lavender-100 rounded-full">
          <span className="text-lavender-700 text-sm font-medium">Welcome to my portfolio</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hello, I am <span className="bg-gradient-to-r from-lavender-600 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">{personalInfo.title}</p>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">{personalInfo.about}</p>

        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-lavender-100 text-lavender-600 flex items-center justify-center hover:bg-lavender-600 hover:text-white transition-colors duration-300"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;