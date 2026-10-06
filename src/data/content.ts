import type {
  ExperienceItem,
  NavLink,
  ProjectItem,
  ServiceItem,
} from '@/types/content';

export const site = {
  firstName: 'John Marco',
  lastName: 'Condino',
  email: 'johnm.cndn@gmail.com',
  github: 'https://github.com/johnmcndn',
  linkedin: 'https://linkedin.com/in/johncondino',
  year: 2026,
};

export const navLinks: NavLink[] = [
  { href: '#sv', label: 'Services' },
  { href: '#pj', label: 'Work' },
  { href: '#ex', label: 'Experience' },
  { href: '#ct', label: 'Contact' },
];

/** Shown in the scroll-driven strip under the hero. */
export const skills: string[] = [
  'Web Design',
  'Frontend',
  'UI / UX',
  'HTML',
  'CSS / SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'GSAP',
  'Motion',
  'Figma',
  'REST API',
  'Full-Stack',
];

export const services: ServiceItem[] = [
  { number: '01', title: 'Design', tools: 'UI · Layout · Type' },
  {
    number: '02',
    title: 'Develop',
    tools: 'HTML · CSS · JS · React · Next.js',
  },
  { number: '03', title: 'Deliver', tools: 'Node · APIs · Deploy' },
];

export const experience: ExperienceItem[] = [
  {
    period: 'Dec 2024 – Jul 2025',
    role: 'Front End Web Developer',
    company: 'Feiwin Corporation',
  },
  {
    period: 'Apr – Aug 2024',
    role: 'Frontend Developer',
    company: 'WBridges Manpower Corp.',
  },
  {
    period: 'Nov – Dec 2023',
    role: 'Next.js Developer (Project)',
    company: 'Global Mint',
  },
  {
    period: 'May 2022 – Apr 2024',
    role: 'Frontend Developer',
    company: 'Dynamic Strategy Solutions Experts',
  },
];

export const education =
  'BS Computer Science, Lyceum of the Philippines University · Complete Full-Stack Web Development Bootcamp · Responsive Web Design';

/** Placeholder projects: replace the text, tags and mock-up kind with real work. */
export const projects: ProjectItem[] = [
  {
    number: '01',
    category: 'Landing page',
    title: 'Project One',
    description:
      'A short description of what this project is and what you did. Edit me.',
    tags: ['React', 'CSS', 'GSAP'],
    mockup: 'landing',
  },
  {
    number: '02',
    category: 'Dashboard app',
    title: 'Project Two',
    description:
      'A short description of what this project is and what you did. Edit me.',
    tags: ['Node', 'SQL', 'React'],
    mockup: 'dashboard',
  },
  {
    number: '03',
    category: 'Mobile UI',
    title: 'Project Three',
    description:
      'A short description of what this project is and what you did. Edit me.',
    tags: ['UI / UX', 'Figma', 'JS'],
    mockup: 'mobile',
  },
];
