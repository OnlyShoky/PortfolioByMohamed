import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../../../shared/models/interfaces';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-creative-work',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, RouterLink],
  templateUrl: './creative-work.component.html',
  styleUrls: ['./creative-work.component.scss']
})
export class CreativeWorkComponent implements OnInit {
  projects: Project[] = [];



  constructor(
    private profileDataService: ProfileDataService,
  ) {
  }


  ngOnInit() {
    this.projects = this.profileDataService.getProjects();

  }

  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }



}
