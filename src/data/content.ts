import type {
  ExperienceItem,
  NavLink,
  ProjectItem,
  ServiceItem,
  SkillItem,
  ProcessStep,
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
const PURPLE = '#a05cff'; // site accent, used for the logos that have no brand

/** Shown in the skills strip under the hero: a logo, its brand colour and a name. */
export const skills: SkillItem[] = [
  { name: 'Web Design', icon: LuPenTool, color: PURPLE },
  { name: 'Frontend', icon: LuMonitor, color: PURPLE },
  { name: 'UI / UX', icon: LuLayoutDashboard, color: PURPLE },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS / SCSS', icon: SiCss, color: '#A97BDB' }, // official #663399, lightened to show on black
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' }, // official black, white on a dark page
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
  { name: 'Motion', icon: SiFramer, color: '#0055FF' }, // Motion (motion.dev) was formerly Framer Motion
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'REST API', icon: LuPlug, color: PURPLE },
  { name: 'Full-Stack', icon: LuLayers, color: PURPLE },
];
import {
  LuLayers,
  LuLayoutDashboard,
  LuMonitor,
  LuPenTool,
  LuPlug,
} from 'react-icons/lu';

import {
  SiCss,
  SiFigma,
  SiFramer,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    label: 'Idea',
    title: 'Understand the why',
    text: 'I start by learning about your goals and your audience, so the site solves the right problem.',
    result: 'Clear goals and a plan for the project',
  },
  {
    number: '02',
    label: 'Design',
    title: 'Shape the look',
    text: 'I turn the plan into layouts, type and colour in Figma, so you can approve the direction before any code.',
    result: 'Approved designs ready to build',
  },
  {
    number: '03',
    label: 'Code',
    title: 'Build it right',
    text: 'I build responsive, accessible pages with React and Next.js, with clean code and good performance.',
    result: 'Fast, clean, working pages',
  },
  {
    number: '04',
    label: 'Launch',
    title: 'Make it live',
    text: 'I test on different devices, deploy the site and hand it over, ready for real visitors.',
    result: 'A live site you can share',
  },
];
