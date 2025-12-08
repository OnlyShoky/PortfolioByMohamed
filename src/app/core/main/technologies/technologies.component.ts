import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileDataService } from '../../../shared/services/profile-data.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { TranslationService } from '../../../shared/services/translation';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  private profileData = inject(ProfileDataService);
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);

  searchQuery = '';
  selectedCategory = 'all';

  categories = [
    { key: 'all', name: 'All', icon: 'fas fa-th' },
    { key: 'frontend', name: 'Frontend', icon: 'fas fa-palette' },
    { key: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { key: 'aiml', name: 'AI & ML', icon: 'fas fa-robot' },
    { key: 'devops', name: 'DevOps', icon: 'fas fa-cloud' },
    { key: 'database', name: 'Database', icon: 'fas fa-database' },
    { key: 'data', name: 'Data', icon: 'fas fa-chart-line' },
    { key: 'embedded', name: 'Embedded', icon: 'fas fa-microchip' },
    { key: 'gamedev', name: 'Game Dev', icon: 'fas fa-gamepad' },
    { key: 'tools', name: 'Tools', icon: 'fas fa-toolbox' }
  ];

  get filteredTechnologies() {
    let techs = this.selectedCategory === 'all'
      ? this.profileData.technologies
      : this.profileData.getTechnologiesByCategory(this.selectedCategory);

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      techs = techs.filter((t: any) => t.name.toLowerCase().includes(query));
    }

    return techs;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getTechColor(tech: any) {
    const isDark = this.themeService.isDark();
    return isDark ? tech.color : (tech.lightModeColor || tech.color);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
