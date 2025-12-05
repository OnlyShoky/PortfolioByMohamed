import { Component, inject } from '@angular/core';
import { Experience } from '../../../../shared/models/interfaces';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../../shared/services/theme.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[];
  private themeService = inject(ThemeService);

  constructor(private profileDataService: ProfileDataService) {
    this.experiences = this.profileDataService.getExperiences();
  }

  getTechDetails(techName: string) {
    const isDarkMode = this.themeService.isDark();
    return this.profileDataService.getTechDetails(techName, isDarkMode);
  }

}
