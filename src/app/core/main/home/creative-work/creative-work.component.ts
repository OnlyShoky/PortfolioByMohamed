import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../../../shared/models/interfaces';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-creative-work',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatGridListModule,RouterLink],
  templateUrl: './creative-work.component.html',
  styleUrl: './creative-work.component.scss'
})
export class CreativeWorkComponent implements OnInit {
  projects : Project[];

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];

  constructor(private profileDataService: ProfileDataService,private router: Router) {
    this.projects = this.profileDataService.getProjects(3);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Scrolls to the top of the page
      }
    });
  }


  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }

}
