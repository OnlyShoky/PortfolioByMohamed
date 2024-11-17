import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

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
      technologies: ['Angular', 'JavaScript', 'HTML', 'SCSS', 'Chart.js', 'Prism.js']
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

  getProjects(n: number = this.projects.length): Project[] {
    return this.projects.slice(0, n);
  }

  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.technologies.find(tech => tech.name === techName);
  }

  constructor() { }
}

