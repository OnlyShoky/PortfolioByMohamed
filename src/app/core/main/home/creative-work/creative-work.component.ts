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
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1,  },
    { text: 'Two', cols: 3, rows: 2,  },
  ];

  isBrowser: boolean;

  constructor(
    private profileDataService: ProfileDataService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check if running in the browser
    if (this.isBrowser) {
      this.projects = this.profileDataService.getProjects(3);
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateTileCols(window.innerWidth);

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0); // Scroll to the top of the page
        }
      });
    }
  }

  // Helper function to get technology details by name
  getTechDetails(techName: string) {
    return this.profileDataService.getTechDetails(techName);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.updateTileCols(window.innerWidth);
    }
  }

  private updateTileCols(width: number) {



      this.tiles[0].cols = 3;
      this.tiles[0].rows = 1;
      this.tiles[1].cols = 3;
      this.tiles[1].rows = 3;


    if (width < 1000) {
      this.tiles[0].cols = 6;
      this.tiles[0].rows = 1;
      this.tiles[1].cols = 6;
      this.tiles[1].rows = 4;
    }
      

    if (width < 600) {
      this.tiles[0].cols = 6;
      this.tiles[0].rows = 2;
      this.tiles[1].cols = 6;
      this.tiles[1].rows = 7;

  }
}

  }
