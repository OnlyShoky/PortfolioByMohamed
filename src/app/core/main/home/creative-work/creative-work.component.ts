import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../../../shared/models/project';
import { ProjectsService } from '../../../../shared/services/projects.service';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-creative-work',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatGridListModule],
  templateUrl: './creative-work.component.html',
  styleUrl: './creative-work.component.scss'
})
export class CreativeWorkComponent {
  projects : Project[];

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects(3);
  }


  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.projectsService.getTechDetails(techName);
  }

}
