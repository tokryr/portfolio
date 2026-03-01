import type { Project, Skill, Experience, SocialLink, NavLink } from '../types';

export const siteConfig = {
  name: 'Topias',
  role: 'Full-Stack Web Developer',
  tagline: 'I build fast, accessible, and beautiful web experiences.',
  email: 'hello@yourname.dev',
  location: 'Your City, Country',
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
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/topiasyrjola',
    icon: 'linkedin',
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'Astro', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'REST APIs', category: 'backend', level: 5 },
  { name: 'Git / GitHub', category: 'tooling', level: 5 },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Activity Tracker',
    description: 'A full-stack web app',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/tokryr/activity-tracker',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Lyyti Oy',
    period: '2022',
    current: false,
    description: ['Frontend development using React and Next.js'],
  },
];
