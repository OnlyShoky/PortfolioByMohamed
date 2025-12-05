import { Component, inject } from '@angular/core';
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
}
