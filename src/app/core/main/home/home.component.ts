import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ScrollButtonComponent } from '../../../shared/components/scroll-button/scroll-button.component';
import { CommonModule } from '@angular/common';
import { AppearOnScrollDirective } from '../../../shared/directives/appear-on-scroll.directive';
import { CreativeWorkComponent } from "./creative-work/creative-work.component";
import { KeepInTouchComponent } from "./keep-in-touch/keep-in-touch.component";
import { TechnologyStackComponent } from "./technology-stack/technology-stack.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, AboutMeComponent, ScrollButtonComponent, CommonModule, AppearOnScrollDirective, CreativeWorkComponent, KeepInTouchComponent, TechnologyStackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  aboutMeVisible = false;
  creativeWorkVisible = false;
  techStackVisible = false;
  keepInTouchVisible = false;

  onElementVisible(isVisible: boolean, property: string) {

    switch (property) {
      case 'aboutMeVisible':
        this.aboutMeVisible = true
        break;
      case 'creativeWorkVisible':
        this.creativeWorkVisible = true;
        break;
      case 'techStackVisible':
        this.techStackVisible = true;
        break;
      case 'keepInTouchVisible':
        this.keepInTouchVisible = true;
        break;
    }

  }

}

