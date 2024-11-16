import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ScrollButtonComponent } from '../../../shared/components/scroll-button/scroll-button.component';
import { CommonModule } from '@angular/common';
import { AppearOnScrollDirective } from '../../../shared/directives/appear-on-scroll.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent,AboutMeComponent,ScrollButtonComponent,CommonModule,AppearOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isScrollElementVisible = true;

  onElementVisible(isVisible: boolean) {
    this.isScrollElementVisible = !isVisible;
  }
}
