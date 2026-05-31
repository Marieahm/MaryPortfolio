import { Skill, Experience, Education, Language, Service, PortfolioItem } from '../types';
export const personalInfo = {
  name: 'Mary Ahmad',
  title: 'Software Engineer | System Analyst | Odoo ERP Project Leader ',
  birthdate: '26/06/2000',
  email: 'mary.ahmad.12m626@gmail.com',
  address: 'Tartus, Syria',
  about: 'Software Engineer specializing in Information Systems, System Analysis, ERP implementation, and digital transformation. Experienced in leading Odoo projects, business process analysis, solution design, database architecture, and client requirements gathering. Passionate about research, continuous learning, and building scalable software solutions that create measurable business value.',
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

export const skills: Skill[] = [
  // Technical Skills
  { name: 'System Analysis & Requirements Engineering', percentage: 95, category: 'technical' },
  { name: 'Business Process Modelling (BPMN)', percentage: 92, category: 'technical' },
  { name: 'UML Modelling & Documentation', percentage: 95, category: 'technical' },
  { name: 'ERP Systems (Odoo)', percentage: 93, category: 'technical' },
  { name: 'SQL & Database Design', percentage: 90, category: 'technical' },
  { name: 'Software Testing & Quality Assurance', percentage: 88, category: 'technical' },
  { name: 'UI/UX Design & Prototyping', percentage: 85, category: 'technical' },
  { name: 'JavaScript / TypeScript', percentage: 82, category: 'technical' },
  { name: 'PHP & Web Development', percentage: 80, category: 'technical' },
  { name: 'Git & Version Control', percentage: 90, category: 'technical' },

  // Soft Skills
  { name: 'Leadership & Team Coordination', percentage: 92, category: 'soft' },
  { name: 'Communication & Presentation', percentage: 90, category: 'soft' },
  { name: 'Problem Solving', percentage: 95, category: 'soft' },
  { name: 'Research & Self-Learning', percentage: 98, category: 'soft' },
  { name: 'Analytical Thinking', percentage: 95, category: 'soft' },
  { name: 'Technical Documentation', percentage: 92, category: 'soft' },
  { name: 'Time Management', percentage: 88, category: 'soft' },
  { name: 'Microsoft Office Suite', percentage: 90, category: 'soft' },
];

export const experiences: Experience[] = [
  {
    title: 'System Analyst & Odoo Project Leader',
    period: 'Oct 2024 - Mar 2026',
    company: 'Arados Software'
  },
  {
    title: 'Software Engineer & ERP Consultant',
    period: '2024 - Present',
    company: 'Freelance'
  },
  {
    title: 'Web Developer & UI/UX Designer',
    period: '2019 - Present',
    company: 'Freelance'
  },
  {
    title: 'IT Trainer',
    period: 'Dec 2025 - Present',
    company: 'Syrians Positive Absolute'
  }
];

export const education: Education[] = [
  {
    degree: 'B.Sc. Informatics Engineering (Software & Information Systems)',
    period: '2018 - 2024',
    grade: 'EQF Level 6'
  },
  {
    degree: 'Scientific High School Diploma',
    period: '2017 - 2018',
    grade: '95.5%'
  }
];

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Proficient (C1/C2)', percentage: 90 },
  { name: 'French', level: 'Intermediate (B1/B2)', percentage: 60 },
  { name: 'Korean', level: 'Intermediate (A2/B1)', percentage: 55 },
];

export const services: Service[] = [
  {
    title: 'System Analysis & Digital Transformation',
    description: 'Analyzing business processes, gathering requirements, designing workflows, and delivering digital transformation solutions aligned with organizational goals.',
    icon: 'FaChartLine',
  },
  {
    title: 'ERP Consulting & Odoo Implementation',
    description: 'ERP implementation, business process mapping, module configuration, gap analysis, testing, training, and deployment using Odoo ERP.',
    icon: 'FaProjectDiagram',
  },
  {
    title: 'Database Design & Data Management',
    description: 'Designing scalable database structures, optimizing data organization, ensuring integrity, security, and efficient information retrieval.',
    icon: 'FaDatabase',
  },
  {
    title: 'Web Applications & Business Solutions',
    description: 'Developing modern web applications, portals, dashboards, and business systems tailored to organizational requirements.',
    icon: 'FaCode',
  },
];

const IMAGE_BASE = '/MaryPortfolio/imgs/';

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
  { icon: 'FaLayerGroup', value: '50+', label: 'Projects Contributed' },
  { icon: 'FaProjectDiagram', value: '10+', label: 'ERP Projects' },
  { icon: 'FaUsers', value: '20+', label: 'Clients & Stakeholders' },
  { icon: 'FaBook', value: '6+', label: 'Years of Learning & Development' },
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