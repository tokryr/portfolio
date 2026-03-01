const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    hireMe: 'Hire Me',
  },
  hero: {
    availableBadge: 'Available for work',
    greeting: "Hi, I'm",
    cta: {
      work: 'View My Work',
      contact: 'Get In Touch',
    },
  },
  about: {
    heading: 'About Me',
    bio: [
      'I have nearly two years of experience in frontend development, working primarily with TypeScript, React, and Next.js to build scalable web applications.',
      'My studies in Information and Communications Technology at the {university} gave me a strong technical foundation and helped develop my collaborative and open personality — making me a great fit for teams that value dynamism.',
      'I am genuinely passionate about using my skills in projects that are not only innovative but also have a positive impact. I am currently completing my {degree} and looking forward to joining a team where I can contribute effectively and keep growing.',
    ],
    meta: {
      location: 'Location',
      email: 'Email',
    },
  },
  skills: {
    heading: 'Skills',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      tooling: 'Tooling & DevOps',
      other: 'Other',
    },
  },
  projects: {
    heading: 'Projects',
    liveDemo: 'Live Demo',
    source: 'Source',
    live: 'Live →',
    repo: 'Repo →',
  },
  experience: {
    heading: 'Experience',
  },
  contact: {
    heading: 'Get In Touch',
    body: 'Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.',
    form: {
      name: 'Name',
      namePlaceholder: 'Jane Smith',
      email: 'Email',
      emailPlaceholder: 'jane@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project…',
      send: 'Send Message',
      sending: 'Sending…',
    },
    success: {
      title: 'Message sent!',
      body: "Thanks for reaching out. I'll be in touch soon.",
    },
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

export default en;

export type Locale = typeof en;
