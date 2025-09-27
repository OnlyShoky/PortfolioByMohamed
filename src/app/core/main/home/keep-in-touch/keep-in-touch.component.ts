import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../shared/services/translation';

@Component({
  selector: 'app-keep-in-touch',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './keep-in-touch.component.html',
  styleUrls: ['./keep-in-touch.component.scss']
})
export class KeepInTouchComponent {
  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
