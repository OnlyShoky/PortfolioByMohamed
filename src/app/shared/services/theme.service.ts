import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private themeSubject: BehaviorSubject<Theme>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const initialTheme = this.getInitialTheme();
    this.themeSubject = new BehaviorSubject<Theme>(initialTheme);
    this.applyTheme(initialTheme);
  }

  /**
   * Get the initial theme based on stored preference or system preference
   */
  private getInitialTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      // Check localStorage first
      const storedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }

      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }

    // Default to dark theme
    return 'dark';
  }

  /**
   * Get current theme as Observable
   */
  get theme$(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }

  /**
   * Get current theme value
   */
  get currentTheme(): Theme {
    return this.themeSubject.value;
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme: Theme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  /**
   * Set a specific theme
   */
  setTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }

  /**
   * Apply theme to document root
   */
  private applyTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;

      // Remove existing theme classes
      root.classList.remove('light-theme', 'dark-theme');

      // Add new theme class
      root.classList.add(`${theme}-theme`);

      // Also set a data attribute for debugging
      root.setAttribute('data-theme', theme);
    }
  }

  /**
   * Check if current theme is dark
   */
  isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  /**
   * Check if current theme is light
   */
  isLight(): boolean {
    return this.currentTheme === 'light';
  }
}
