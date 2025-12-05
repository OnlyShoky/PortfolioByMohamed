import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../../shared/services/profile-data.service';
import { ThemeService } from '../../../../shared/services/theme.service';
import { TranslationService } from '../../../../shared/services/translation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technology-stack',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './technology-stack.component.html',
  styleUrl: './technology-stack.component.scss'
})
export class TechnologyStackComponent {
  private profileData = inject(ProfileDataService);
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);

  categories = [
    {
      name: 'Frontend',
      key: 'frontend',
      icon: 'fas fa-palette',
      description: 'Modern web interfaces'
    },
    {
      name: 'Backend',
      key: 'backend',
      icon: 'fas fa-server',
      description: 'Robust server solutions'
    },
    {
      name: 'AI & ML',
      key: 'aiml',
      icon: 'fas fa-robot',
      description: 'Intelligence & learning'
    },
    {
      name: 'DevOps',
      key: 'devops',
      icon: 'fas fa-cloud',
      description: 'Cloud & deployment'
    },
    {
      name: 'Database',
      key: 'database',
      icon: 'fas fa-database',
      description: 'Data management'
    },
    {
      name: 'Other Tools',
      key: 'other',
      icon: 'fas fa-toolbox',
      description: 'Additional expertise'
    }
  ];

  getCategoryTechs(categoryKey: string) {
    if (categoryKey === 'other') {
      // Combine embedded, gamedev, and tools
      return this.profileData.technologies.filter((t: any) =>
        ['embedded', 'gamedev', 'tools'].includes(t.category)
      ).slice(0, 6);
    }
    return this.profileData.getTechnologiesByCategory(categoryKey).slice(0, 6);
  }

  getTechColor(tech: any) {
    const isDark = this.themeService.isDark();
    return isDark ? tech.color : (tech.lightModeColor || tech.color);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
