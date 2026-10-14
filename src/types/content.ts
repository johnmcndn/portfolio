import type { IconType } from 'react-icons';

export interface ServiceItem {
  number: string;
  title: string;
  tools: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
}

export type MockupKind = 'landing' | 'dashboard' | 'mobile';

export interface ProjectItem {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  mockup: MockupKind;
  href?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface ProcessStep {
  number: string;
  label: string;
  title: string;
  text: string;
  result: string;
}

export interface CredentialItem {
  kind: string; // "Education" or "Certificate"
  title: string;
  detail?: string;
}

export type CredentialArtKind = 'cap' | 'badge' | 'responsive';

export interface CredentialItem {
  kind: string; // "Education" or "Certificate"
  title: string;
  detail?: string;
  art: CredentialArtKind; // which illustration to show on the card
}
