// src/app/shared/components/language-selector/language-selector.component.ts
import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss'
})
export class LanguageSelectorComponent implements OnInit {
  private translationService = inject(TranslationService);

  languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      flag: 'https://flagcdn.com/w20/gb.png'
    },
    {
      code: 'es',
      name: 'Español',
      flag: 'https://flagcdn.com/w20/es.png'
    },
    {
      code: 'fr',
      name: 'Français',
      flag: 'https://flagcdn.com/w20/fr.png'
    }
  ];

  isDropdownOpen = false;

  ngOnInit(): void {
    this.detectDefaultLanguage();
  }

  private detectDefaultLanguage(): void {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      const supported = this.languages.some(lang => lang.code === browserLang);
      
      if (supported) {
        this.translationService.setLanguage(browserLang);
      } else {
        this.translationService.setLanguage('en');
      }
    }
  }

  getCurrentLanguageCode(): string {
    return this.translationService.getCurrentLanguage().toUpperCase();
  }

  getCurrentFlag(): string {
    const currentLang = this.translationService.getCurrentLanguage();
    const language = this.languages.find(lang => lang.code === currentLang);
    return language?.flag || this.languages[0].flag;
  }

  changeLanguage(languageCode: string): void {
    this.translationService.setLanguage(languageCode);
    this.isDropdownOpen = false; // Close dropdown after selection
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      this.isDropdownOpen = false;
    }
  }
}
