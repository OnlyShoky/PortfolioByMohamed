import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SharedMaterialModule } from './shared/material/shared-material.module';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { ThemeService } from './shared/services/theme.service';
import { LoadingBarComponent } from './shared/components/loading-bar/loading-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedMaterialModule, HeaderComponent, MainComponent, LoadingBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioByMohamed';

  // Inject theme service to initialize it immediately
  private themeService = inject(ThemeService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }, 0);
        }
      }
    });
  }
}
