import { Injectable } from '@angular/core';
import { Project, Experience, Education } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  technologies = [
    { name: 'Python', iconClass: 'fab fa-python', color: '#9EDF9C', lightModeColor: '#3D8B40', backgroundColor: 'rgba(194, 255, 199, 0.2)', lightModeBackgroundColor: 'rgba(61, 139, 64, 0.1)' },
    { name: 'Angular', iconClass: 'fab fa-angular', color: '#FF2929', backgroundColor: 'rgba(255, 207, 179, 0.2)' },
    { name: 'JavaScript', iconClass: 'fab fa-js-square', color: '#FEEC37', lightModeColor: '#D4B106', backgroundColor: 'rgba(252, 245, 150, 0.2)', lightModeBackgroundColor: 'rgba(212, 177, 6, 0.1)' },
    { name: 'C++', iconClass: 'fab fa-cuttlefish', color: '#4A90E2', backgroundColor: 'rgba(180, 210, 255, 0.2)' },
    { name: 'HTML', iconClass: 'fab fa-html5', color: '#E34F26', backgroundColor: 'rgba(243, 133, 105, 0.2)' },
    { name: 'SCSS', iconClass: 'fab fa-sass', color: '#CC6699', backgroundColor: 'rgba(247, 185, 222, 0.2)' },
    { name: 'Chart.js', iconClass: 'fas fa-chart-bar', color: '#FF6384', backgroundColor: 'rgba(255, 182, 193, 0.2)' },
    { name: 'Prism.js', iconClass: 'fas fa-lightbulb', color: '#9B59B6', backgroundColor: 'rgba(201, 155, 225, 0.2)' },
    { name: 'TypeScript', iconClass: 'fab fa-js-square', color: '#4A90E2', backgroundColor: 'rgba(180, 210, 255, 0.2)' },
    { name: 'PyTorch', iconClass: 'fa-solid fa-fire-flame-curved', color: '#EE4C2C', backgroundColor: 'rgba(238, 76, 44, 0.2)' },
    { name: 'Detectron2', iconClass: 'fa-solid fa-robot', color: '#FFC107', lightModeColor: '#C79100', backgroundColor: 'rgba(255, 193, 7, 0.2)', lightModeBackgroundColor: 'rgba(199, 145, 0, 0.1)' },
    { name: 'Jupyter', iconClass: 'fa-solid fa-planet-ringed', color: '#F37626', backgroundColor: 'rgba(243, 118, 38, 0.2)' },
    { name: 'SQL', iconClass: 'fas fa-database', color: '#00BFFF', lightModeColor: '#0080CC', backgroundColor: 'rgba(0, 191, 255, 0.2)', lightModeBackgroundColor: 'rgba(0, 128, 204, 0.1)' },
    { name: 'Django', iconClass: 'fab fa-python', color: '#00D383', lightModeColor: '#0A4A2A', backgroundColor: 'rgba(0, 211, 131, 0.2)', lightModeBackgroundColor: 'rgba(10, 74, 42, 0.1)' },
    { name: 'Docker', iconClass: 'fab fa-docker', color: '#2496ED', backgroundColor: 'rgba(36, 150, 237, 0.2)' }, // Added Docker
    { name: 'Google Cloud', iconClass: 'fab fa-google', color: '#4285F4', backgroundColor: 'rgba(66, 133, 244, 0.2)' }, // Added Google Cloud
    { name: 'Flask', iconClass: 'fas fa-flask', color: '#CCCCCC', lightModeColor: '#3A3A3A', backgroundColor: 'rgba(204, 204, 204, 0.2)', lightModeBackgroundColor: 'rgba(58, 58, 58, 0.1)' },
    { name: 'OpenCV', iconClass: 'fas fa-eye', color: '#7D5CE8', lightModeColor: '#5A3EB8', backgroundColor: 'rgba(125, 92, 232, 0.2)', lightModeBackgroundColor: 'rgba(90, 62, 184, 0.1)' },
    { name: 'FFmpeg', iconClass: 'fas fa-video', color: '#007808', backgroundColor: 'rgba(0, 120, 8, 0.2)' },
    { name: 'Raspberry Pi', iconClass: 'fas fa-raspberry-pi', color: '#C51A4A', backgroundColor: 'rgba(197, 26, 74, 0.2)' },
    { name: 'Systemd', iconClass: 'fas fa-cogs', color: '#0E4EF0', backgroundColor: 'rgba(14, 78, 240, 0.2)' },
    { name: 'Linux', iconClass: 'fab fa-linux', color: '#FCC624', lightModeColor: '#C79100', backgroundColor: 'rgba(252, 198, 36, 0.2)', lightModeBackgroundColor: 'rgba(199, 145, 0, 0.1)' },
    { name: 'PyAudio', iconClass: 'fas fa-microphone', color: '#1DB954', backgroundColor: 'rgba(29, 185, 84, 0.2)' },
    { name: 'N8N', iconClass: 'fa-solid fa-arrows-spin', color: '#E34F26', backgroundColor: 'rgba(243, 133, 105, 0.2)' },
    { name: 'Chrome Extension', iconClass: 'fab fa-chrome', color: '#4285F4', backgroundColor: 'rgba(66, 133, 244, 0.2)' },
    { name: 'Firefox Extension', iconClass: 'fab fa-firefox', color: '#FF9500', lightModeColor: '#D87000', backgroundColor: 'rgba(255, 149, 0, 0.2)', lightModeBackgroundColor: 'rgba(214, 115, 0, 0.1)' },

    {
      name: 'TailwindCSS',
      iconClass: 'fas fa-wind',
      color: '#38BDF8',
      backgroundColor: 'rgba(56, 189, 248, 0.2)'
    },

    { name: 'Gemini AI', iconClass: 'fab fa-google', color: '#B589FF', lightModeColor: '#7C3FD3', backgroundColor: 'rgba(181, 137, 255, 0.2)', lightModeBackgroundColor: 'rgba(124, 63, 211, 0.1)' },
    { name: 'HTTP', iconClass: 'fa-solid fa-globe', color: '#005C99', backgroundColor: 'rgba(0, 92, 153, 0.2)' },
    { name: 'FastAPI', iconClass: 'fa-solid fa-bolt', color: '#009688', backgroundColor: 'rgba(0, 150, 136, 0.2)' },
    { name: 'CSS', iconClass: 'fab fa-css3-alt', color: '#264DE4', backgroundColor: 'rgba(38, 77, 228, 0.2)' },
    { name: 'ADAS', iconClass: 'fa-solid fa-car', color: '#FF6B35', backgroundColor: 'rgba(255, 107, 53, 0.2)' },
    { name: 'ROS', iconClass: 'fa-solid fa-robot', color: '#69D4E5', lightModeColor: '#1E88A8', backgroundColor: 'rgba(105, 212, 229, 0.2)', lightModeBackgroundColor: 'rgba(30, 136, 168, 0.1)' },
    { name: 'C#', iconClass: 'fab fa-microsoft', color: '#9B4F96', backgroundColor: 'rgba(155, 79, 150, 0.2)' },
    { name: 'Unity', iconClass: 'fa-solid fa-gamepad', color: '#9E9E9E', lightModeColor: '#222222', backgroundColor: 'rgba(158, 158, 158, 0.2)', lightModeBackgroundColor: 'rgba(34, 34, 34, 0.1)' }
  ];


  private projects: Project[] = [

    {
      translationKey: 'myramyrror',
      link: 'https://www.myramyrror.com',
      image: 'assets/card-thumbnails/myramyrror.png',
      technologies: ['Angular', 'Gemini AI', 'Chrome Extension', 'Firefox Extension']
    },

    {
      translationKey: 'neonys',
      link: 'https://neonys.fr',
      image: 'assets/card-thumbnails/neonys.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'N8N']
    },

    {
      translationKey: 'mealprepcodex',
      link: 'https://github.com/OnlyShoky/recipe_project',
      image: 'assets/card-thumbnails/mealprep.png',
      technologies: ['Django', 'Docker', 'Google Cloud', 'SQL']
    },

    {
      translationKey: 'pibabymonitor',
      link: 'https://github.com/OnlyShoky/pibabymonitor',
      image: 'assets/card-thumbnails/pibabymonitor.png',
      technologies: ['Python', 'OpenCV', 'Flask', 'FFmpeg']
    },

    {
      translationKey: 'animalgo',
      link: 'https://animalgo.netlify.app',
      image: 'assets/card-thumbnails/animalgo.png',
      technologies: ['Angular', 'HTML', 'SCSS', 'TypeScript']
    },
    {
      translationKey: 'portfolio',
      link: 'https://mohamed-elmourabit.netlify.app',
      image: 'assets/card-thumbnails/portfolio1.png',
      technologies: ['Angular', 'HTML', 'SCSS', 'TypeScript']
    },
    {
      translationKey: 'algonimation',
      link: 'https://algonimation.netlify.app',
      image: 'assets/card-thumbnails/algonimation.png',
      technologies: ['Angular', 'Chart.js', 'Prism.js']
    },
    {
      translationKey: 'semisupervised',
      link: 'https://github.com/OnlyShoky/Detectron2-STAC-SODA10m',
      image: 'assets/card-thumbnails/smartvision.gif',
      technologies: ['Python', 'Detectron2', 'PyTorch']
    },
  ];

  private experiences: Experience[] = [
    {
      title: 'Artificial Intelligence Engineer',
      company: 'Expleo Group',
      location: 'Toulouse, Occitanie, France',
      duration: '1 year 8 months',
      period: 'April 2023 - December 2024',
      description: 'Worked on data fusion and object detection for autonomous vehicles, enhancing detection accuracy with advanced AI models.',
      responsibilities: [
        'Developed ANN and CNN models using PointNet on the Nuscenes dataset.',
        'Created preprocessing pipelines for data quality improvement.',
      ],
      logo: "expleo_group_logo",
      technologies: ['Python', 'PyTorch']

    },
    {
      title: 'Embedded Software Engineer',
      company: 'Continental',
      location: 'Toulouse, Occitanie, France',
      duration: '1 year',
      period: 'April 2022 - March 2023',
      description: 'Designed and integrated radar algorithms for ADAS systems, contributing to signal and data processing within embedded systems.',
      responsibilities: [
        'Developed and maintained radar algorithms in C/C++.',
        'Collaborated with development and validation teams for quality assurance.',
      ],
      logo: "continentale_logo",
      technologies: ['Python', 'C++', 'ADAS']
    },
    {
      title: 'Artificial Intelligence Engineer',
      company: 'Govern d\'Andorra',
      location: 'Andorra la Vella, Andorra',
      duration: '1 year 4 months',
      period: 'December 2020 - March 2022',
      description: 'Contributed to national registers through data cleaning and statistical analysis, aiding public reports and data quality enhancement.',
      responsibilities: [
        'Standardized address data using FuzzyWuzzy and RegEx.',
        'Conducted statistical analysis for trend detection.'
      ],
      logo: "govern_andorra_logo",
      technologies: ['Python', 'SQL']

    },
    {
      title: 'Intern - Computer Vision',
      company: 'IRT AESE - Saint Exup├®ry',
      location: 'Toulouse, Occitanie, France',
      duration: '6 months',
      period: 'March 2020 - August 2020',
      description: 'Developed methods for topographic image analysis and registration.',
      logo: "irt_saintex_logo",

      technologies: ['Python']

    },
    {
      title: 'PGE - Pylon inspection by an autonomous drone',
      company: 'Altran',
      location: 'Toulouse, Occitanie, France',
      duration: '6 months',
      period: 'September 2019 - February 2020',
      description: 'Assessed drone-based solutions for pylon inspection using SLAM-based localization techniques.',
      logo: "altran_logo",

      technologies: ['Python', 'C++', 'ROS']

    },
    {
      title: 'Intern - VR Experience project',
      company: 'VISYON',
      location: 'Barcelona, Spain',
      duration: '5 months',
      period: 'April 2019 - August 2019',
      description: 'Created Arduino communication software for a Virtual Reality booth.',
      logo: "visyon360_logo",

      technologies: ['C#', 'Unity']

    },
    {
      title: 'Intern - Solar tracker',
      company: 'LAAS-CNRS',
      location: 'Toulouse, France',
      duration: '3 months',
      period: 'April 2017 - June 2017',
      description: 'Developed a solar tracker with enhanced precision for CPV applications.',
      logo: "laas_cnrs_logo",
      technologies: ['C++']

    }
  ];

  private education: Education[] = [
    {
      institution: 'Universit├® Paul Sabatier Toulouse III - UPSSITECH',
      location: 'Toulouse, Occitanie, France',
      degree: 'Robotic and Interactive Systems (SRI)',
      field: 'Robotics Engineering',
      duration: '3 years',
      logo: "upssitech_logo",

      period: '2017 - 2020'

    },
    {
      institution: 'IUT Paul Sabatier',
      location: 'Toulouse, Occitanie, France',

      degree: 'DUT Electrical Engineering and Industrial Computing',
      field: 'Electrical engineering technologies / technicians',
      duration: '2 years',
      logo: "iut_paul_sabatier_logo",

      period: '2015 - 2017'
    },
    {
      institution: 'Lyc├®e Comte de Foix, Andorre',
      location: 'Andorra la Vella, Andorra',
      degree: 'Scientific Baccalaureate',
      field: 'Mathematics',
      duration: '3 years',
      logo: "lcf_logo",

      period: '2011 - 2014'
    }
  ];

  getExperiences(n: number = this.experiences.length): Experience[] {
    return this.experiences.slice(0, n);
  }


  getEducations(n: number = this.education.length): Education[] {
    return this.education.slice(0, n);
  }


  getLogos(): string[] {
    let logos = this.education.map(edu => edu.logo);
    logos = logos.concat(this.experiences.map(exp => exp.logo));
    return logos;
  }

  getImages(): string[] {
    let thumbnails = this.projects.map(edu => edu.image);
    return thumbnails;
  }


  getProjects(n: number = this.projects.length): Project[] {
    return this.projects.slice(0, n);
  }

  // Helper function to get technology details by name (theme-aware)
  getTechDetails(techName: string, isDarkMode: boolean = true) {
    const tech = this.technologies.find(tech => tech.name === techName);
    if (!tech) return undefined;

    // Return appropriate colors based on theme
    return {
      ...tech,
      color: isDarkMode ? tech.color : (tech.lightModeColor || tech.color),
      backgroundColor: isDarkMode ? tech.backgroundColor : (tech.lightModeBackgroundColor || tech.backgroundColor)
    };
  }

  constructor() { }
}

