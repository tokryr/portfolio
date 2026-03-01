export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tooling' | 'other';
  level?: number; // 1–5
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
