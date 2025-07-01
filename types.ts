export interface NavItem {
  name: string;
  path: string;
  isExternal?: boolean;
  isPage?: boolean; // True if it's a route handled by HashRouter, false if it's an anchor link
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface AcademicDetail {
  year: string;
  degree: string;
  institute: string;
  grade: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string; // Optional: path to company logo
}

export interface Project {
  title: string;
  category: string; // e.g., Data Structures, Machine Learning
  advisor?: string; // e.g., Prof. Name, Self Project
  duration: string;
  descriptionPoints: string[];
  techStack?: string[];
  liveLink?: string;
  repoLink?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: string; // e.g., Programming Languages, Frameworks, Tools
  level?: number; // Optional: 1-5 or 1-100 for proficiency display
}

export interface BlogPost {
  id: string; // slug
  title: string;
  date: string; // e.g., "October 26, 2023"
  author: string;
  excerpt: string;
  content: string; // Markdown or HTML string for full content
  tags?: string[];
  imageUrl?: string;
}

export interface Course {
  name: string;
}
