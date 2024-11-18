import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrer.component.html',
  styleUrl: './carrer.component.scss'
})
export class CarrerComponent {
  showExperience = true;  // Show experience by default
}
