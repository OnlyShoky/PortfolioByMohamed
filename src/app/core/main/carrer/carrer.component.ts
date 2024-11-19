import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemplateComponent } from "./template/template.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-carrer',
  standalone: true,
  imports: [CommonModule, TemplateComponent, EducationComponent, ExperienceComponent],
  templateUrl: './carrer.component.html',
  styleUrl: './carrer.component.scss'
})
export class CarrerComponent {
  showExperience = true;  // Show experience by default
}
