import { Component } from '@angular/core';
import { Experience } from '../../../../shared/models/interfaces';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences : Experience[];

  constructor(private profileDataService : ProfileDataService) {
    this.experiences = this.profileDataService.getExperiences();
  }

  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }

}
