import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TemplateComponent } from "./template/template.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from './experience/experience.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslationService } from '../../../shared/services/translation';

@Component({
  selector: 'app-carrer',
  standalone: true,
  imports: [CommonModule, TemplateComponent, EducationComponent, ExperienceComponent, MatButtonModule],
  templateUrl: './carrer.component.html',
  styleUrl: './carrer.component.scss'
})
export class CarrerComponent {
  showExperience = true;

  toggleExperience(isExperience: boolean) {
    this.showExperience = isExperience;
  }
  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}

