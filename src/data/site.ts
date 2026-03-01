import type { Project, Skill, Experience, SocialLink, NavLink } from '../types';

export const siteConfig = {
  name: 'Topias',
  role: 'Frontend Developer',
  tagline: 'I build scalable, accessible web applications with TypeScript and React.',
  email: 'topias.yrjola@gmail.com',
  location: 'Turku, Finland',
  university: 'University of Turku',
  degree: 'Bachelor of ICT',
  availableForWork: true,
};

export const navLinks: NavLink[] = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/tokryr', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/topias-yrjola', icon: 'linkedin' },
];

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'MUI', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Jest', category: 'tooling' },
  { name: 'Cypress', category: 'tooling' },
  { name: 'Git', category: 'tooling' },
  { name: 'Docker', category: 'tooling' },
  { name: 'Vercel', category: 'tooling' },
  { name: 'Firebase', category: 'tooling' },
  { name: 'Payload CMS', category: 'tooling' },
  { name: 'Java', category: 'other' },
  { name: 'Python', category: 'other' },
  { name: 'C#', category: 'other' },
  { name: 'Scrum / Jira', category: 'other' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Activity Tracker',
    description:
      'A full-stack web application for tracking personal activities, with authentication, data visualisation, and a responsive UI.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/tokryr/activity-tracker',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'After Lecture',
    description:
      'Website for a student cruise event managed with Payload CMS, allowing organisers to update content without touching code.',
    tags: ['Next.js', 'TypeScript', 'Payload CMS'],
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Lyyti Oy',
    period: 'May 2022 – Feb 2024',
    current: false,
    description: [
      'Frontend development in an agile team building a scalable SaaS event management platform.',
      'Built user interfaces for event page creation, statistics, content customisation, and participant communication.',
      'Stack: TypeScript, React, Next.js, React Hook Form, MUI, custom design system.',
      'Familiar with backend (PHP) and basic DevOps / CI/CD practices.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Webmaster',
    company: 'After Lecture ry',
    period: '2022 – present',
    current: true,
    description: [
      'Built and maintained the website for a large student cruise event.',
      'Used Payload CMS so organisers can manage content independently.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Board Member (Event Organiser & Treasurer)',
    company: 'Digit ry',
    period: '2020 – 2021',
    current: false,
    description: [
      'Organised large-scale events for members and partners, including remote events during COVID.',
      'Managed daily transactions, finances, and accounting as Treasurer.',
    ],
  },
  {
    id: 'exp-4',
    role: 'Tutor',
    company: 'University of Turku',
    period: '2019 – 2022',
    current: false,
    description: ['Integrated small groups of new students into university life.'],
  },
];
