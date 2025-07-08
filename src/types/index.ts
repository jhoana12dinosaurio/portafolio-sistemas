export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  resume: string;
  contact: Contact;
}