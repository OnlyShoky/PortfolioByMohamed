import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProfileDataService } from '../../../shared/services/ProfileData.service';
import { Project } from '../../../shared/models/interfaces';
import { TranslationService } from '../../../shared/services/translation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[];

  constructor(private profileDataService: ProfileDataService) {
    this.projects = this.profileDataService.getProjects();
  }


  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }

  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  // Get translated project title
  getProjectTitle(project: Project): string {
    if (project.translationKey) {
      return this.translationService.getTranslation(`projectData.${project.translationKey}.title`);
    }
    return project.title || '';
  }

  // Get translated project description
  getProjectDescription(project: Project): string {
    if (project.translationKey) {
      return this.translationService.getTranslation(`projectData.${project.translationKey}.description`);
    }
    return project.description || '';
  }

}
