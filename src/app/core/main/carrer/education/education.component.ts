

import { Component, inject } from '@angular/core';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';
import { CommonModule } from '@angular/common';
import { Education } from '../../../../shared/models/interfaces';
import { ThemeService } from '../../../../shared/services/theme.service';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations: Education[];
  private themeService = inject(ThemeService);

  constructor(private profileDataService: ProfileDataService) {
    this.educations = this.profileDataService.getEducations();
  }

  getTechDetails(techName: string) {
    const isDarkMode = this.themeService.isDark();
    return this.profileDataService.getTechDetails(techName, isDarkMode);
  }

}

