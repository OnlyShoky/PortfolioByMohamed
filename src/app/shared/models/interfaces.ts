export interface Project {
  title: string;
  link: string;
  description: string;
  image: string;
  technologies: string[];
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

