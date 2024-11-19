import { Component } from '@angular/core';
import { Experience } from '../../../../shared/models/interfaces';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

  experiences : Experience[];

  constructor(private profileDataService : ProfileDataService) {
    this.experiences = this.profileDataService.getExperiences();
  }

  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }


}
