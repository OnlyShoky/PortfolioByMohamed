import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProfileDataService } from '../../../shared/services/ProfileData.service';
import { Project } from '../../../shared/models/interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects : Project[];

  constructor(private profileDataService: ProfileDataService) {
    this.projects = this.profileDataService.getProjects();
  }


  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }


}
