import { Component, ViewChild, inject, Inject, PLATFORM_ID } from '@angular/core';
import { SharedMaterialModule } from '../../shared/material/shared-material.module';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { TranslationService } from '../../shared/services/translation';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedMaterialModule, MatSidenavModule, RouterLink, LanguageSelectorComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  private translationService = inject(TranslationService);
  isLargerThan768 = true;

  isMobileMenuOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
    this.toggleMobileMenu(); // Close mobile menu after click
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDrawer() {
    this.drawer?.toggle();
  }
}
