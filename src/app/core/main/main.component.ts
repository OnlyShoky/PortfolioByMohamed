import { Component, ElementRef, ViewChild } from '@angular/core';
import { IntroComponent } from "./intro/intro.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AppearOnScrollDirective } from '../../shared/directives/appear-on-scroll.directive';
import { ScrollButtonComponent } from "../../shared/components/scroll-button/scroll-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IntroComponent, AboutMeComponent, AppearOnScrollDirective, ScrollButtonComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  isScrollElementVisible = true;

  onElementVisible(isVisible: boolean) {
    this.isScrollElementVisible = !isVisible;
  }


}
