import { Component } from '@angular/core';
import { SharedMaterialModule } from './shared/material/shared-material.module';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedMaterialModule, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioByMohamed';
}
