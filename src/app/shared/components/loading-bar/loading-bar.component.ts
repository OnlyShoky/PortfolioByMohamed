import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Router
} from '@angular/router';

@Component({
    selector: 'app-loading-bar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="loading-bar" [class.active]="loading"></div>
  `,
    styles: [`
    .loading-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0;
      background: linear-gradient(90deg, var(--highlight-color), var(--color-primary));
      transition: width 0.3s ease-out, opacity 0.2s ease;
      z-index: 9999;
      opacity: 0;
    }
    
    .loading-bar.active {
      width: 100%;
      opacity: 1;
    }
  `]
})
export class LoadingBarComponent {
    loading = false;
    private router = inject(Router);

    constructor() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.loading = true;
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError
            ) {
                setTimeout(() => {
                    this.loading = false;
                }, 300);
            }
        });
    }
}
