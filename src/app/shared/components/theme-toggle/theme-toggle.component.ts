import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
    template: `
    <button 
      mat-icon-button 
      (click)="toggleTheme()" 
      [matTooltip]="(themeService.isDark() ? 'Switch to Light Mode' : 'Switch to Dark Mode')"
      class="theme-toggle-btn"
      aria-label="Toggle theme">
      <mat-icon class="theme-icon" [class.rotate]="isAnimating">
        {{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}
      </mat-icon>
    </button>
  `,
    styles: [`
    .theme-toggle-btn {
      color: var(--display-color);
      transition: transform 0.3s ease, color 0.3s ease;
      
      &:hover {
        background-color: var(--hover-bg);
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .theme-icon {
      transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      
      &.rotate {
        transform: rotate(360deg);
      }
    }
  `]
})
export class ThemeToggleComponent {
    themeService = inject(ThemeService);
    isAnimating = false;

    toggleTheme(): void {
        // Trigger rotation animation
        this.isAnimating = true;

        // Toggle the theme
        this.themeService.toggleTheme();

        // Reset animation
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
}
