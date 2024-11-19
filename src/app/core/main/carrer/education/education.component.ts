

import { Component } from '@angular/core';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';
import { CommonModule } from '@angular/common';
import { Education } from '../../../../shared/models/interfaces';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations : Education[];

  constructor(private profileDataService : ProfileDataService) {
    this.educations = this.profileDataService.getEducations();
  }

  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }

}

