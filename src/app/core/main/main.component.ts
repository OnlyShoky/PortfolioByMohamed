import { Component, ElementRef, ViewChild } from '@angular/core';
import { IntroComponent } from "./intro/intro.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AppearOnScrollDirective } from '../../shared/directives/appear-on-scroll.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IntroComponent, AboutMeComponent,AppearOnScrollDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


}
