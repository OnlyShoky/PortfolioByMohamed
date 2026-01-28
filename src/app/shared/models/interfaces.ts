export type ProjectCategory = 'Web' | 'AI & Robotics' | 'Systems';

export interface Project {
  translationKey?: string; // Key to fetch translations
  title?: string; // Optional for backward compatibility
  link: string;
  description?: string; // Optional for backward compatibility
  image: string;
  technologies: string[];
  categories: ProjectCategory[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  logo: string;
  responsibilities?: string[];
  technologies: string[];

}

export interface Education {
  institution: string;
  degree: string;
  logo: string;
  location: string;
  field: string;
  duration: string;
  period: string;
  technologies?: string[];

}

