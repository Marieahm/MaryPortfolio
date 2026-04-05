import { Skill, Experience, Education, Language, Service, PortfolioItem } from '../types';
export const personalInfo = {
  name: 'Mary Ahmad',
  title: 'Software Engineer | System Analyst | UI/UX Designer',
  birthdate: '26/06/2000',
  email: 'mary.ahmad.12m626@gmail.com',
  address: 'Tartus, Syria',
  about: 'Analytical thinker and researcher with hands-on experience in systems design, databases, and software development. I lead multidisciplinary teams to deliver projects 20% faster while ensuring user satisfaction. Self-learner passionate about exploring new technologies and building impactful software.',
  cvUrl: 'https://drive.google.com/file/d/1kYHTTx5pqU27YOcMo4lOrhbIgRWuWYWf/view?usp=sharing',
  hireUrl: 'https://mostaql.com/u/mary_ahmad',
  github: 'https://github.com/Marieahm',
  linkedin: 'https://www.linkedin.com/in/mary-ahmad-a113583b6',
  website: 'https://marieahm.github.io/MaryPortfolio/'
};

export const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/marie.ahmad.940', icon: 'FaFacebook' },
  { name: 'Email', url: 'mailto:mary.ahmad.12m626@gmail.com', icon: 'FaEnvelope' },
  { name: 'GitHub', url: 'https://github.com/Marieahm', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mary-ahmad-a113583b6', icon: 'FaLinkedin' },
];

// تم تحديث المهارات (دمج المهارات التقنية والناعمة من السيرة)
export const skills: Skill[] = [
  // Technical Skills
  { name: 'Unified Modelling Language', percentage: 98, category: 'technical' },
  { name: 'SQL & Database Design', percentage: 90, category: 'technical' },
  { name: 'ERP Systems (Odoo)', percentage: 88, category: 'technical' },
  { name: 'System Analysis & Prototyping', percentage: 92, category: 'technical' },
  { name: 'DevOps & Debugging', percentage: 80, category: 'technical' },
  { name: 'JavaScript / TypeScript', percentage: 85, category: 'technical' },
  { name: 'PHP', percentage: 80, category: 'technical' },
  { name: 'Git & Version Control', percentage: 90, category: 'technical' },
  { name: 'Bootstrap & Tailwind', percentage: 92, category: 'technical' },
  // Soft Skills
  { name: 'Team Leadership', percentage: 90, category: 'soft' },
  { name: 'Creative Writing', percentage: 95, category: 'soft' },
  { name: 'Fast Typing', percentage: 85, category: 'soft' },
  { name: 'Sketching & Visual Design', percentage: 80, category: 'soft' },
  { name: 'Microsoft Office', percentage: 90, category: 'soft' },
  { name: 'Problem Solving', percentage: 88, category: 'soft' },
  { name: 'Research & Self-Learning', percentage: 95, category: 'soft' },
];

// تم تحديث الخبرات المهنية
export const experiences: Experience[] = [
  { title: 'Web Developer, UI/UX Designer', period: '2019 - Present', company: 'Freelance (Remote)' },
  { title: 'IT System Analyst', period: '2022 - Present', company: 'Freelance (Hybrid)' },
  { title: 'System Analyst & Odoo Project Leader', period: 'Oct 2024 - Mar 2026', company: 'Arados Software, Syria' },
  { title: 'IT Trainer', period: 'Dec 2025 - Present', company: 'Syrians Positive Absolute, Syria' },
];

// تم تحديث التعليم
export const education: Education[] = [
  { degree: 'Informatics Engineering (Software & Information Systems)', period: '2018 - 2024', grade: 'EQF Level 6' },
  { degree: 'High School Diploma', period: '2017 - 2018', grade: '95.5%' },
];

// تم تحديث اللغات مع نسب تقريبية من المستويات المذكورة
export const languages: Language[] = [
  { name: 'Arabic', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Proficient (C1/C2)', percentage: 90 },
  { name: 'French', level: 'Intermediate (B1/B2)', percentage: 60 },
  { name: 'Korean', level: 'Intermediate (A2/B1)', percentage: 55 },
];

export const services: Service[] = [
  {
    title: 'System Analysis',
    description: 'Analyzing and evaluating software systems to identify strengths, weaknesses, and areas for improvement. Assessing functionality, performance, and security, providing recommendations for optimization.',
    icon: 'FaChartLine',
  },
  {
    title: 'Data Structure Management',
    description: 'Organizing and managing data efficiently. Designing data storage systems, developing strategies for retrieval, manipulation, and optimization to ensure integrity, security, and accessibility.',
    icon: 'FaDatabase',
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites with modern technologies. Designing and coding web pages, ensuring compatibility across browsers and devices using HTML, CSS, JavaScript, and frameworks.',
    icon: 'FaCode',
  },
  {
    title: 'ERP Projects Leader',
    description: 'Overseeing ERP implementation projects: requirements gathering, system configuration, testing, and training. Aligning ERP systems with organizational goals and business processes.',
    icon: 'FaProjectDiagram',
  },
];

// (لم يتم تغيير بيانات المشاريع والصور)
const IMAGE_BASE = 'src/assets/imgs/';

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Web Project 1', category: 'web', imageUrl: `${IMAGE_BASE}web-1.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 2, title: 'Mobile App 2', category: 'moblie', imageUrl: `${IMAGE_BASE}mopile-2.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 3, title: 'Web Project 2', category: 'web', imageUrl: `${IMAGE_BASE}web-2.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 4, title: 'Mobile App 1', category: 'moblie', imageUrl: `${IMAGE_BASE}mopile-1.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 5, title: 'Advertising 3', category: 'advertising', imageUrl: `${IMAGE_BASE}adver-3.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 6, title: 'Mobile App 3', category: 'moblie', imageUrl: `${IMAGE_BASE}mopile-3.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 7, title: 'Advertising 5', category: 'advertising', imageUrl: `${IMAGE_BASE}adver-5.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 8, title: 'Mobile App 4', category: 'moblie', imageUrl: `${IMAGE_BASE}mopile-4.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 9, title: 'Promotion 1', category: 'branding', imageUrl: `${IMAGE_BASE}branding-1.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 10, title: 'Promotion 3', category: 'branding', imageUrl: `${IMAGE_BASE}branding-3.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 11, title: 'Promotion 4', category: 'branding', imageUrl: `${IMAGE_BASE}branding-4.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 12, title: 'Promotion 2', category: 'branding', imageUrl: `${IMAGE_BASE}branding-2.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 13, title: 'Advertising 1', category: 'advertising', imageUrl: `${IMAGE_BASE}adver-1.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 14, title: 'Advertising 2', category: 'advertising', imageUrl: `${IMAGE_BASE}adver-2.jpg`, description: 'Perfect Work Best User Experience!' },
  { id: 15, title: 'Advertising 4', category: 'advertising', imageUrl: `${IMAGE_BASE}adver-4.jpg`, description: 'Perfect Work Best User Experience!' },
];

export const stats = [
  { icon: 'FaClock', value: '6 day a week', label: 'Work Time' },
  { icon: 'FaLayerGroup', value: '50+', label: 'Projects Completed' },
  { icon: 'FaSmile', value: 'All became', label: 'Happy Clients' },
  { icon: 'FaHeartBroken', value: '10k', label: 'Coffee Drinked' },
];
export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  url: string;
  icon?: string; // اسم الأيقونة من react-icons/fa
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Zaref Foodstuff",
    type: "Food E‑commerce",
    description: "An integrated online platform for selling food products, offering a seamless and secure shopping experience with an attractive user interface and multiple payment options.",
    url: "https://zaref.co.uk",
    icon: "FaShoppingCart",
  },
  {
    id: 2,
    name: "Kakapo Agency",
    type: "Company Portfolio",
    description: "A software development and digital solutions agency. Provides web development, mobile apps, and cloud solutions with over 500 completed projects and 150 happy clients.",
    url: "https://kakapoagency.com",
    icon: "FaLaptopCode",
  },
  {
    id: 3,
    name: "Smart Digits",
    type: "Company Profile",
    description: "An Odoo Ready Partner offering integrated ERP solutions, custom Odoo modules, cybersecurity, and website development services in Saudi Arabia.",
    url: "https://smartdigitest.com",
    icon: "FaDatabase",
  },
];