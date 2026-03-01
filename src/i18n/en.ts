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
    bio: ["I'm an epic software developer"],
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
