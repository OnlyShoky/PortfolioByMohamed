import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects : Project[];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
  }


  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.projectsService.getTechDetails(techName);
  }


}
