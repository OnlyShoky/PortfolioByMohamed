import { Component, HostListener, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../../../shared/models/interfaces';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ProfileDataService } from '../../../../shared/services/ProfileData.service';
import { TranslationService } from '../../../../shared/services/translation';
import { ThemeService } from '../../../../shared/services/theme.service';

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
  private translationService = inject(TranslationService);
  private themeService = inject(ThemeService);

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.projects = this.profileDataService.getProjects(4);
  }

  getTechDetails(techName: string) {
    const isDarkMode = this.themeService.isDark();
    return this.profileDataService.getTechDetails(techName, isDarkMode);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
