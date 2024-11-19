import { Injectable } from '@angular/core';
import { Project,Experience,Education } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  technologies = [
    { name: 'Python', iconClass: 'fab fa-python', color: '#9EDF9C', backgroundColor: 'rgba(194, 255, 199, 0.2)' },
    { name: 'Angular', iconClass: 'fab fa-angular', color: '#FF2929', backgroundColor: 'rgba(255, 207, 179, 0.2)' },
    { name: 'JavaScript', iconClass: 'fab fa-js-square', color: '#FEEC37', backgroundColor: 'rgba(252, 245, 150, 0.2)' },
    { name: 'C++', iconClass: 'fab fa-cuttlefish', color: '#4A90E2', backgroundColor: 'rgba(180, 210, 255, 0.2)' },
    { name: 'HTML', iconClass: 'fab fa-html5', color: '#E34F26', backgroundColor: 'rgba(243, 133, 105, 0.2)' },
    { name: 'SCSS', iconClass: 'fab fa-sass', color: '#CC6699', backgroundColor: 'rgba(247, 185, 222, 0.2)' },
    { name: 'Chart.js', iconClass: 'fas fa-chart-bar', color: '#FF6384', backgroundColor: 'rgba(255, 182, 193, 0.2)' },
    { name: 'Prism.js', iconClass: 'fas fa-lightbulb', color: '#9B59B6', backgroundColor: 'rgba(201, 155, 225, 0.2)' }
  ];

  private projects: Project[] = [
    {
      title: 'Algonimation',
      link: 'https://github.com/OnlyShoky/algonimation',
      description: 'A project to visualize code using animations and charts.',
      image: 'assets/screenshot.png',
      technologies: ['Angular', 'Chart.js', 'Prism.js']
    },
    {
      title: 'RoboVision',
      link: 'https://github.com/OnlyShoky/algonimation',
      description: 'A robotics project focused on object detection and tracking.',
      image: 'assets/screenshot.png',
      technologies: ['Python', 'Angular', 'JavaScript']
    },
    {
      title: 'Travel Companion',
      link: 'https://github.com/OnlyShoky/algonimation',
      description: 'An app to assist travelers in discovering new places and tracking visits.',
      image: 'assets/screenshot.png',
      technologies: ['Python', 'Angular', 'JavaScript']
    },
    {
      title: 'FitTrack',
      link: 'https://github.com/OnlyShoky/algonimation',
      description: 'A fitness tracking app for monitoring health metrics and workout progress.',
      image: 'assets/screenshot.png',
      technologies: ['Python', 'Angular', 'JavaScript']
    }
  ];

  private experiences: Experience[] = [
    {
      title: 'Artificial Intelligence Engineer',
      company: 'Expleo Group',
      location: 'Toulouse, Occitanie, France',
      duration: '1 year 8 months',
      period: 'April 2023 - Present',
      description: 'Worked on data fusion and object detection for autonomous vehicles, enhancing detection accuracy with advanced AI models.',
      responsibilities: [
        'Developed ANN and CNN models using PointNet on the Nuscenes dataset.',
        'Created preprocessing pipelines for data quality improvement.',
      ],
      logo:"expleo_group_logo",
      technologies: ['Python', 'Angular', 'JavaScript']

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
      logo:"continentale_logo",
      technologies: ['Python', 'Angular', 'JavaScript']
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
      logo:"govern_andorra_logo",
      technologies: ['Python', 'Angular', 'JavaScript']

    },
    {
      title: 'Intern - Computer Vision',
      company: 'IRT AESE - Saint Exupéry',
      location: 'Toulouse, Occitanie, France',
      duration: '6 months',
      period: 'March 2020 - August 2020',
      description: 'Developed methods for topographic image analysis and registration.',
      logo:"irt_saintex_logo",

      technologies: ['Python', 'Angular', 'JavaScript']

    },
    {
      title: 'PGE - Pylon inspection by an autonomous drone',
      company: 'Altran',
      location: 'Toulouse, Occitanie, France',
      duration: '6 months',
      period: 'September 2019 - February 2020',
      description: 'Assessed drone-based solutions for pylon inspection using SLAM-based localization techniques.',
      logo:"altran_logo",

      technologies: ['Python', 'Angular', 'JavaScript']

    },
    {
      title: 'Intern - VR Experience project',
      company: 'VISYON',
      location: 'Barcelona, Spain',
      duration: '5 months',
      period: 'April 2019 - August 2019',
      description: 'Created Arduino communication software for a Virtual Reality booth.',
      logo:"visyon360_logo",

      technologies: ['Python', 'Angular', 'JavaScript']

    },
    {
      title: 'Intern - Solar tracker',
      company: 'LAAS-CNRS',
      location: 'Toulouse, France',
      duration: '3 months',
      period: 'April 2017 - June 2017',
      description: 'Developed a solar tracker with enhanced precision for CPV applications.',
      logo:"laas_cnrs_logo",
      technologies: ['Python', 'Angular', 'JavaScript']

    }
  ];
  
  private education: Education[] = [
    {
      institution: 'Université Paul Sabatier Toulouse III - UPSSITECH',
      location: 'Toulouse, Occitanie, France',
      degree: 'Robotic and Interactive Systems (SRI)',
      field: 'Robotics Engineering',
      duration: '3 years',
      logo:"upssitech_logo",

      period: '2017 - 2020'
      
    },
    {
      institution: 'IUT Paul Sabatier',
      location: 'Toulouse, Occitanie, France',

      degree: 'DUT Electrical Engineering and Industrial Computing',
      field: 'Electrical engineering technologies / technicians',
      duration: '2 years',
      logo:"iut_paul_sabatier_logo",

      period: '2015 - 2017'
    },
    {
      institution: 'Lycée Comte de Foix, Andorre',
      location: 'Andorra la Vella, Andorra',
      degree: 'Scientific Baccalaureate',
      field: 'Mathematics',
      duration: '3 years',
      logo:"lcf_logo",

      period: '2011 - 2014'
    }
  ];

  getExperiences(n: number = this.experiences.length): Experience[] {
    return this.experiences.slice(0, n);
  }

  getEducations(n: number = this.education.length): Education[] {
    return this.education.slice(0, n);
  }

  
  getProjects(n: number = this.projects.length): Project[] {
    return this.projects.slice(0, n);
  }

  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.technologies.find(tech => tech.name === techName);
  }

  constructor() { }
}

